import { r as m, a as i, j } from "./index.c4aa511a.js";
const b = m.exports.forwardRef(
  (
    {
      isDisabled: t = !1,
      isFluid: o = !1,
      isWaiting: s = !1,
      isWaitingText: r = "...",
      mode: n = "fill",
      label: l,
      className: c,
      href: e,
      children: u,
      ...f
    },
    d
  ) => {
    const p = e || n === "menu" ? "a" : "button",
      a = [c, `button-${n}`];
    return (
      o && a.push("fluid"),
      (t || s) && a.push("disabled"),
      i(p, {
        className: a.join(" ").trim(),
        disabled: t || s,
        href: e,
        ref: d,
        ...f,
        children: j("span", {
          className: "container",
          children: [s ? r : l, u],
        }),
      })
    );
  }
);
export { b as B };
