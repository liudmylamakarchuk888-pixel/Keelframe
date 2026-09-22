import { useEffect, useRef } from 'react';

type RGB = [number, number, number];

function hexToRgb(h: string): RGB | null {
  h = (h || '').trim();
  if (h[0] !== '#') return null;
  if (h.length === 4) h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
  const n = parseInt(h.slice(1, 7), 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

// ---- hull geometry: x along the length (-1 stern … +1 bow), t from keel (0) to deck (1)
const B = (x: number) => 0.3 * Math.pow(Math.max(0, 1 - x * x), x > 0 ? 0.62 : 0.4);
const D = (x: number) => 0.19 * Math.pow(Math.max(0, 1 - x * x), 0.55) + 0.03;
const S = (x: number) => { const xp = Math.max(0, x); return 0.09 + 0.06 * x * x + 0.06 * xp * xp * xp; };
const pt = (x: number, t: number, side: number): [number, number, number] => {
  const w = B(x) * Math.pow(Math.sin((t * Math.PI) / 2), 0.78);
  const z = -D(x) + (D(x) + S(x)) * t;
  return [x, side * w, z];
};
const PHI = -0.52, cp = Math.cos(PHI), sp = Math.sin(PHI);

/**
 * The rotating "lines plan" drawing in the hero: transverse frames along a
 * gradient keel line, drawn on a canvas. Respects prefers-reduced-motion and
 * pauses when scrolled out of view.
 */
export function HullCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, theta = -0.75, visible = true, frame = 0, raf = 0;
    let acc: RGB = [34, 211, 238], vio: RGB = [139, 92, 246], fg: RGB = [243, 244, 255];

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      acc = hexToRgb(s.getPropertyValue('--cyan')) || acc;
      vio = hexToRgb(s.getPropertyValue('--violet')) || vio;
      fg = hexToRgb(s.getPropertyValue('--fg')) || fg;
    };

    const project = (p: [number, number, number]): [number, number, number] => {
      const c = Math.cos(theta), s = Math.sin(theta);
      const x1 = p[0] * c - p[1] * s, y1 = p[0] * s + p[1] * c, z = p[2];
      const z2 = z * cp - y1 * sp, d = y1 * cp + z * sp;
      const scale = Math.min(W, H) * 0.54;
      return [W / 2 + x1 * scale, H / 2 - z2 * scale + 0.04 * scale, d];
    };

    const poly = (pts: [number, number, number][], rgb: RGB, alpha: number, lw: number, grad = false) => {
      ctx.beginPath();
      let dsum = 0;
      pts.forEach((p, i) => { const q = project(p); dsum += q[2]; if (i === 0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]); });
      const k = Math.max(0, Math.min(1, (dsum / pts.length + 0.32) / 0.64));
      const a = alpha * (0.45 + 0.55 * k);
      if (grad) {
        const g = ctx.createLinearGradient(0, 0, W, H);
        g.addColorStop(0, rgba(vio, a)); g.addColorStop(1, rgba(acc, a));
        ctx.strokeStyle = g;
      } else ctx.strokeStyle = rgba(rgb, a);
      ctx.lineWidth = lw;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      let pts: [number, number, number][];
      // design waterline
      const wl = project([0, 0, 0])[1];
      ctx.save(); ctx.setLineDash([3, 5]); ctx.strokeStyle = rgba(acc, 0.35); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(W * 0.04, wl); ctx.lineTo(W * 0.96, wl); ctx.stroke(); ctx.restore();
      ctx.fillStyle = rgba(fg, 0.5); ctx.font = '500 10px "DM Mono", ui-monospace, Menlo, monospace';
      ctx.fillText('DWL', W * 0.04, wl - 6);
      // longitudinals
      for (const t of [0.16, 0.32, 0.48, 0.64, 0.82]) {
        for (let side = -1; side <= 1; side += 2) {
          pts = []; for (let i = 0; i <= 48; i++) pts.push(pt(-0.97 + (1.94 * i) / 48, t, side));
          poly(pts, vio, 0.42, 1);
        }
      }
      // deck edge
      for (let sd = -1; sd <= 1; sd += 2) {
        pts = []; for (let i = 0; i <= 48; i++) pts.push(pt(-0.97 + (1.94 * i) / 48, 1, sd));
        poly(pts, fg, 0.55, 1.2);
      }
      // transverse frames
      const N = 17;
      for (let i = 0; i <= N; i++) {
        const x = -0.94 + (1.88 * i) / N; pts = [];
        for (let j = 20; j >= 0; j--) pts.push(pt(x, j / 20, -1));
        for (let j = 1; j <= 20; j++) pts.push(pt(x, j / 20, 1));
        poly(pts, fg, 0.34, 1);
      }
      // keel
      pts = []; for (let i = 0; i <= 48; i++) pts.push(pt(-0.97 + (1.94 * i) / 48, 0, 1));
      ctx.save(); ctx.shadowColor = rgba(acc, 0.6); ctx.shadowBlur = 14;
      poly(pts, acc, 1, 2.4, true);
      ctx.restore();
      // stem & stern posts
      for (const xx of [-0.97, 0.97]) { pts = []; for (let j = 0; j <= 10; j++) pts.push(pt(xx, j / 10, 1)); poly(pts, acc, 0.9, 1.6, true); }
    };

    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const tick = () => {
      if (visible && !reduce) { theta += 0.0022; if (++frame % 90 === 0) readColors(); draw(); }
      raf = requestAnimationFrame(tick);
    };

    readColors();
    const ro = new ResizeObserver(resize);
    ro.observe(cv.parentElement as Element);
    const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; });
    io.observe(cv);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onTheme = () => { readColors(); draw(); };
    mq.addEventListener?.('change', onTheme);
    const mo = new MutationObserver(onTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    resize();
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect(); mo.disconnect();
      mq.removeEventListener?.('change', onTheme);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Rotating wireframe drawing of a ship's hull: transverse frames along a glowing keel line"
    />
  );
}
