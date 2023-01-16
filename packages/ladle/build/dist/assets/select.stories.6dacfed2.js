import { I as h } from "./icon.4f6b4105.js";
import { j as n, a as e } from "./index.c4aa511a.js";
const t = ({
  isDisabled: i,
  isHelping: l,
  helpMode: p,
  helpText: c,
  placeholder: a,
  className: d,
  children: r,
  ...s
}) => {
  const o = [d];
  return (
    i && o.push("disabled"),
    l && (o.push("help"), o.push(p)),
    n("div", {
      className: "inputer",
      children: [
        e("div", {
          className: "inputer-group",
          children: n("div", {
            className: "halo",
            children: [
              n("select", {
                className: o.join(" ").trim(),
                disabled: i,
                ...s,
                children: [a && e("option", { value: "", children: a }), r],
              }),
              e(h, {
                sprite: "arrowDown",
                className: "right action disable not-event",
              }),
            ],
          }),
        }),
        l && e("span", { className: `${p}-text`, children: c }),
      ],
    })
  );
};
t.defaultProps = { helpMode: "warning" };
const m = () =>
    n(t, {
      children: [
        e("option", { value: "Option 1", children: "Option 1" }),
        e("option", { value: "Option 2", children: "Option 2" }),
        e("option", { value: "Option 3", children: "Option 3" }),
      ],
    }),
  v = () =>
    n(t, {
      placeholder: "Placeholder",
      children: [
        e("option", { value: "Option 1", children: "Option 1" }),
        e("option", { value: "Option 2", children: "Option 2" }),
        e("option", { value: "Option 3", children: "Option 3" }),
      ],
    }),
  w = () =>
    n(t, {
      placeholder: "Placeholder",
      isHelping: !0,
      helpText: "\u26A0\uFE0F Oooops, something happened text",
      children: [
        e("option", { value: "Option 1", children: "Option 1" }),
        e("option", { value: "Option 2", children: "Option 2" }),
        e("option", { value: "Option 3", children: "Option 3" }),
      ],
    });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { m as Naked, w as WithDialog, v as WithPlaceholder };
