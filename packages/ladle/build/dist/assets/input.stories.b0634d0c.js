import { I as u } from "./icon.4f6b4105.js";
import { a as e, j as m } from "./index.c4aa511a.js";
const l = ({
    isDisabled: o,
    isHelping: d,
    isLabelable: r,
    helpMode: c = "warning",
    helpText: b,
    leftIcon: n,
    rightIcon: h,
    onClickRightIcon: s,
    placeholder: a,
    className: f,
    name: p,
    ...w
  }) => {
    const t = [f],
      N = (i) => {
        i.preventDefault(), s && s();
      };
    return (
      n && t.push("typeahead"),
      o && t.push("disabled"),
      d && (t.push("help"), t.push(c)),
      r || t.push("naked"),
      e("div", {
        className: "inputer",
        children: m("div", {
          className: "inputer-group",
          children: [
            m("div", {
              className: "halo",
              children: [
                e("input", {
                  name: p,
                  "aria-label": a,
                  placeholder: a,
                  disabled: o,
                  className: t.join(" ").trim(),
                  ...w,
                }),
                a && r && e("label", { htmlFor: p, children: a }),
                n && e(u, { sprite: n, className: "action left disabled" }),
                h &&
                  s &&
                  e("button", {
                    className: "button-link pin right",
                    onClick: (i) => N(i),
                    type: "button",
                    children: e(u, { sprite: h }),
                  }),
              ],
            }),
            d && e("span", { className: `${c}-text`, children: b }),
          ],
        }),
      })
    );
  },
  j = () => e(l, { placeholder: "Placeholder" }),
  v = () => e(l, { placeholder: "Placeholder and label", isLabelable: !0 }),
  P = () =>
    e(l, {
      placeholder: "Placeholder",
      isHelping: !0,
      helpText: "\u26A0\uFE0F Oooops, something happened text",
    }),
  W = () => e(l, { placeholder: "your@email.com", leftIcon: "mail" });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { P as WithDialog, W as WithIcon, v as WithLabel, j as WithPlaceholder };
