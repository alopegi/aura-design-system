import { j as a, a as e, r as d, F as v } from "./index.c4aa511a.js";
import { B as l } from "./button.f3bd2b86.js";
const N = ({
    isVisible: t,
    isValid: s = !0,
    isCTA: o = !0,
    onClose: i,
    onAccept: r,
    onDecline: m,
    acceptText: p,
    declineText: u,
    title: n,
    description: c,
    children: h,
  }) =>
    t
      ? a("div", {
          className: "hold top left right bottom",
          children: [
            e("div", { className: "overley accents-3 disabled", onClick: i }),
            e("div", {
              className: "valign vfluid pad smash",
              children: a("div", {
                className: "mod anchor z-10",
                children: [
                  e(l, {
                    className: "pin right top",
                    mode: "link",
                    onClick: i,
                    children: e("div", { className: "icon close" }),
                  }),
                  a("div", {
                    className: "mod-detail",
                    children: [
                      n && e("p", { className: "mod-title", children: n }),
                      c && e("p", { children: c }),
                      h,
                      o &&
                        a("div", {
                          className: "mod-cta",
                          children: [
                            e("div", { className: "aura" }),
                            a("div", {
                              className: "aureole two reverse",
                              children: [
                                e(l, {
                                  target: "_blank",
                                  onClick: r,
                                  className: "one",
                                  isDisabled: !s,
                                  children: p,
                                }),
                                e(l, {
                                  mode: "pill",
                                  onClick: m || i,
                                  className: "two",
                                  children: u,
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : e(d.exports.Fragment, {}),
  g = () => {
    const [t, s] = d.exports.useState(!1);
    return a(v, {
      children: [
        e(l, { onClick: () => s(!0), label: "Open modal" }),
        e(N, {
          isVisible: t,
          onClose: () => s(!1),
          acceptText: "Accept Text",
          declineText: "Decline Text",
          children:
            "Hay un costo de vida que debemos pagar. Una escena viva, te leo en im\xE1genes y te veo en letras algo as\xED parecido a la distancia.",
        }),
      ],
    });
  };
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { g as DefaultConfig };
