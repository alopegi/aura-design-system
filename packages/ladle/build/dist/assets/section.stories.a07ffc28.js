import { a as e, j as a, F as h } from "./index.c4aa511a.js";
const o = ({
    children: r,
    className: c,
    subClassName: i,
    color: s,
    space: d = "pad",
    container: t = "smush",
    passDiv: l,
    ...u
  }) => {
    const m = l ? "div" : "section",
      n = [c, d],
      p = [i, t];
    return (
      s && n.push(s),
      e(m, {
        className: n.join(" ").trim(),
        ...u,
        children: e("div", { className: p.join(" ").trim(), children: r }),
      })
    );
  },
  x = () =>
    e(o, {
      children:
        "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa: Aplicar un abrazo osado con un apret\xF3n fuerte profundamente en el alma 1 \xF3 2 veces por herida, preferiblemente en la noche durante varios d\xEDas seg\xFAn prescripci\xF3n. Indicaciones: Antidepresivo de uso diario. Contra indicaciones: Hipersensibilidad y lagrimeo excesivo. Precauciones y advertencias: Se debe evitar el uso concomitante de otros productos que contengan el componente de SORPRESA pues \xE9ste puede reducir su efectividad. Dosis altas de cualquier SORPRESA probablemente conllevan un mayor riesgo de estas reacciones, aunque los estudios cl\xEDnicos controlados muestran que esto no sucede en los casos donde el coraz\xF3n lo necesitaba.",
    }),
  z = () =>
    e(o, {
      color: "teal-green",
      children:
        "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa: Aplicar un abrazo osado con un apret\xF3n fuerte profundamente en el alma 1 \xF3 2 veces por herida, preferiblemente en la noche durante varios d\xEDas seg\xFAn prescripci\xF3n. Indicaciones: Antidepresivo de uso diario. Contra indicaciones: Hipersensibilidad y lagrimeo excesivo. Precauciones y advertencias: Se debe evitar el uso concomitante de otros productos que contengan el componente de SORPRESA pues \xE9ste puede reducir su efectividad. Dosis altas de cualquier SORPRESA probablemente conllevan un mayor riesgo de estas reacciones, aunque los estudios cl\xEDnicos controlados muestran que esto no sucede en los casos donde el coraz\xF3n lo necesitaba.",
    }),
  g = () =>
    a(h, {
      children: [
        a(o, {
          color: "teal-green",
          container: "smesh",
          children: [
            e("h3", { className: "h6", children: "Smesh 1600px" }),
            "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa: Posolog\xEDa: Aplicar un abrazo osado con un apret\xF3n fuerte profundamente en el alma 1 \xF3 2 veces por herida",
          ],
        }),
        a(o, {
          color: "blue",
          container: "smush",
          children: [
            e("h3", { className: "h6", children: "Smush 1032px" }),
            "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa: Posolog\xEDa: Aplicar un abrazo osado con un apret\xF3n fuerte profundamente en el alma 1 \xF3 2 veces por herida",
          ],
        }),
        a(o, {
          color: "lemon-green",
          container: "smash",
          children: [
            e("h3", { className: "h6", children: "Smash 740px" }),
            "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa: Posolog\xEDa: Aplicar un abrazo osado con un apret\xF3n fuerte profundamente en el alma 1 \xF3 2 veces por herida",
          ],
        }),
        a(o, {
          color: "pink",
          container: "smosh",
          children: [
            e("h3", { className: "h6", children: "Smosh 440px" }),
            "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos. Posolog\xEDa:",
          ],
        }),
        a(o, {
          color: "yellow",
          container: "smish",
          children: [
            e("h3", { className: "h6", children: "Smish 250px" }),
            "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos.",
          ],
        }),
      ],
    }),
  v = () =>
    a(o, {
      color: "pink",
      container: "smash",
      subClassName: "green aura",
      children: [
        e("h3", { className: "h6", children: "subClassName box" }),
        "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos.",
      ],
    }),
  E = () =>
    a(o, {
      color: "blue",
      passDiv: !0,
      children: [
        e("h3", {
          className: "h6",
          children: "This section use div html tag as wrapper ",
        }),
        "Cada abrazo de oso contiene: 1 dosis de amor por cada 2 brazos.",
      ],
    });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export {
  x as Default,
  z as WithColor,
  g as WithContainer,
  E as WithPassDiv,
  v as WithSubClassName,
};
