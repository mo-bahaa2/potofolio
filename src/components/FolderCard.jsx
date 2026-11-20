"use client";
import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import Image from "next/image";

const PATH_BACK =
  "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z";
const PATH_FRONT =
  "M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z";

function createSvgMask(width, height, pathData) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path fill="#000" d="${pathData}"/></svg>`;
  const url = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  return {
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}

const BACK_MASK = createSvgMask(340, 272, PATH_BACK);
const FRONT_MASK = createSvgMask(340, 198, PATH_FRONT);

// Pseudo-random deterministic hash for organic jitter
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function FolderCard({
  label = "My Files",
  meta,
  tone = "dark",
  image,
  files = [],
  action = "more", // "more" | "none"
  menu = [],
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  onSelect,
  width = 340,
  appear = true,
  appearDelay = 0,
  className = "",
  style = {},
}) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, "");

  const rootRef = useRef(null);
  const filesRef = useRef(null);
  const triggerRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(next);
      }
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange]
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(!appear);

  // Entrance observer
  useEffect(() => {
    if (!appear) return;
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setEntered(true);
      return;
    }

    let timer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          timer = window.setTimeout(() => setEntered(true), appearDelay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [appear, appearDelay]);

  // 3D Pointer Tracking
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let rafId = 0;
    let px = 0;
    let py = 0;
    let rect = null;

    const updateCssVars = () => {
      rafId = 0;
      el.style.setProperty("--gf-px", px.toFixed(3));
      el.style.setProperty("--gf-py", py.toFixed(3));
    };

    const handlePointerEnter = (e) => {
      if (e.pointerType === "touch") return;
      rect = el.getBoundingClientRect();
    };

    const handlePointerMove = (e) => {
      if (e.pointerType === "touch") return;
      if (!rect) rect = el.getBoundingClientRect();
      if (rect.width && rect.height) {
        px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        py = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        if (!rafId) rafId = requestAnimationFrame(updateCssVars);
      }
    };

    const handlePointerLeave = () => {
      rect = null;
      px = 0;
      py = 0;
      if (!rafId) rafId = requestAnimationFrame(updateCssVars);
    };

    el.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    el.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      el.removeEventListener("pointerenter", handlePointerEnter);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Close menu and folder on Outside Click or Escape
  useEffect(() => {
    if (!isOpen && !menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (menuOpen) {
          setMenuOpen(false);
          menuBtnRef.current?.focus();
        } else if (isOpen) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }
    };

    const handlePointerDown = (e) => {
      const target = e.target;
      if (
        menuOpen &&
        !menuRef.current?.contains(target) &&
        !menuBtnRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
      if (
        isOpen &&
        !menuOpen &&
        !rootRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, menuOpen, setOpen]);

  // Inert background files when closed
  useEffect(() => {
    if (filesRef.current) {
      filesRef.current.toggleAttribute("inert", !isOpen);
    }
  }, [isOpen]);

  const scale = width / 340;
  const visibleFiles = files.slice(Math.max(0, files.length - 4));
  const totalCount = meta !== undefined ? meta : files.length;

  const fullMenu = [
    {
      label: isOpen ? "Close Folder" : "Open Folder",
      onSelect: () => setOpen(!isOpen),
    },
    ...menu,
  ];

  return (
    <div
      ref={rootRef}
      className={`gf-root cursor-pointer ${className}`}
      data-tone={tone}
      data-open={isOpen ? "" : undefined}
      data-entered={entered ? "" : undefined}
      data-place="bottom-left"
      style={{
        width,
        height: 326 * scale,
        ...style,
      }}
    >
      <div
        className="gf-stage"
        style={{
          transform: `translateY(${54 * scale}px) scale(${scale})`,
        }}
      >
        <div className="gf-tilt">
          {/* Depth Shadow */}
          <div className="gf-shadow" aria-hidden="true" />

          {/* Folder Back with Tab shape */}
          <div className="gf-back" style={BACK_MASK} aria-hidden="true">
            {image && (
              <img
                className="gf-art"
                src={image}
                alt=""
                width={364}
                height={296}
                loading="lazy"
                draggable={false}
              />
            )}
            <div className="gf-back-sheen" />
          </div>

          {/* SVG Back Rim stroke */}
          <svg
            className="gf-rim gf-back-rim"
            viewBox="0 0 340 272"
            aria-hidden="true"
          >
            <path d={PATH_BACK} />
          </svg>

          {/* Folder Front Pocket with angled cut */}
          <div className="gf-front" style={FRONT_MASK}>
            <div className="gf-tint" aria-hidden="true" />
            <div className="gf-spec" aria-hidden="true" />

            {/* Glowing metallic border rim */}
            <svg
              className="gf-rim gf-front-rim"
              viewBox="0 0 340 198"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id={`gf-rim-${id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
                  <stop offset="0.35" stopColor="#fff" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <path d={PATH_FRONT} stroke={`url(#gf-rim-${id})`} />
            </svg>

            {/* Invisible Hit Button for toggling/selecting */}
            <button
              ref={triggerRef}
              type="button"
              className="gf-hit cursor-pointer"
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Close " : "Open "}${label}, ${totalCount} items`}
              onClick={() => {
                setMenuOpen(false);
                if (onSelect) {
                  onSelect();
                } else {
                  setOpen(!isOpen);
                }
              }}
            />

            {/* Bottom Left Label: Count + Title */}
            <div className="gf-label pointer-events-none">
              {totalCount !== undefined && (
                <span className="gf-meta">{totalCount}</span>
              )}
              <span className="gf-title">{label}</span>
            </div>
          </div>

          {/* Sheets Inside the Folder */}
          <div
            ref={filesRef}
            className="gf-files"
            role="list"
            aria-label={`${label} contents`}
          >
            {visibleFiles.map((file, idx) => {
              const count = visibleFiles.length;
              const slot = count <= 1 ? 0 : (idx / (count - 1)) * 2 - 1;
              const depth = count - 1 - idx;
              const hash = hashString(file.name || label + idx);
              const jitterX = (((hash % 100) / 100 - 0.5) * 10).toFixed(2);
              const jitterR = (((hash % 77) / 77 - 0.5) * 3.2).toFixed(2);

              const sheetContent = (
                <>
                  {file.image ? (
                    <img
                      className="gf-sheet-art"
                      src={file.image}
                      alt={file.name || ""}
                      width={272}
                      height={184}
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <span className="gf-lines" aria-hidden="true">
                      <i style={{ width: "86%" }} />
                      <i style={{ width: "92%" }} />
                      <i style={{ width: "64%" }} />
                      <i style={{ width: "88%" }} />
                      <i style={{ width: "42%" }} />
                    </span>
                  )}

                  {(file.name || file.meta) && (
                    <span className="gf-sheet-head">
                      {file.name && (
                        <span className="gf-sheet-name">{file.name}</span>
                      )}
                      {file.meta && (
                        <span className="gf-sheet-meta">{file.meta}</span>
                      )}
                    </span>
                  )}
                </>
              );

              const sheetProps = {
                className: `gf-sheet ${file.image ? "gf-sheet--art" : ""}`,
                style: {
                  "--gf-slot": slot,
                  "--gf-depth": depth,
                  "--gf-jx": `${jitterX}px`,
                  "--gf-jr": `${jitterR}deg`,
                  zIndex: idx + 1,
                },
                onClick: (e) => {
                  e.stopPropagation();
                  if (file.onClick) {
                    file.onClick();
                  } else if (onSelect) {
                    onSelect(file, idx);
                  }
                },
              };

              return (
                <div key={file.id || file.name || idx} role="listitem" className="gf-sheet-slot">
                  {file.href ? (
                    <a {...sheetProps} href={file.href}>
                      {sheetContent}
                    </a>
                  ) : (
                    <button {...sheetProps} type="button">
                      {sheetContent}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action button bottom right ("..." badge) */}
          {action === "more" && (
            <button
              ref={menuBtnRef}
              type="button"
              className="gf-key gf-key--more cursor-pointer"
              aria-label={`Options for ${label}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls={`gf-menu-${id}`}
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
            >
              {/* Ellipsis Pill Icon (exact 3 rects with rounded corners) */}
              <svg
                className="gf-glyph gf-glyph--more"
                viewBox="0 0 30 12"
                aria-hidden="true"
              >
                <rect x="1" y="1.5" width="8" height="9" rx="3.4" fill="currentColor" />
                <rect x="11" y="1.5" width="8" height="9" rx="3.4" fill="currentColor" />
                <rect x="21" y="1.5" width="8" height="9" rx="3.4" fill="currentColor" />
              </svg>
            </button>
          )}

          {/* Popup Menu */}
          {menuOpen && (
            <div
              ref={menuRef}
              id={`gf-menu-${id}`}
              className="gf-menu"
              role="menu"
              style={{
                position: "absolute",
                right: 20,
                bottom: 24,
                zIndex: 40,
                minWidth: 170,
                background: "rgba(24, 24, 27, 0.95)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 14,
                padding: "6px",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              {fullMenu.map((item, mIdx) => (
                <button
                  key={mIdx}
                  type="button"
                  role="menuitem"
                  className="gf-menu-item w-full text-left px-3 py-2 text-xs font-medium text-zinc-200 hover:text-white rounded-lg transition-colors flex items-center justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                    item.onSelect?.();
                  }}
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-500 text-[10px]">→</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

