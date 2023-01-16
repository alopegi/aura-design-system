import { B as t } from "./button.f3bd2b86.js";
import { a as o } from "./index.c4aa511a.js";
const i = () => o(t, { label: "Button fill" }),
  e = () => o(t, { mode: "pill", label: "Button Pill" }),
  u = () => o(t, { mode: "link", label: "Button Pill" }),
  d = () => o(t, { isFluid: !0, label: "Button Fluid" }),
  a = () => o(t, { label: "Disabled", isDisabled: !0 }),
  s = () =>
    o(t, { isWaiting: !0, isWaitingText: "Loading...", label: "Button Fluid" });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export {
  a as ButtonDisabled,
  i as ButtonFill,
  d as ButtonFluid,
  u as ButtonLink,
  e as ButtonPill,
  s as ButtonWaiting,
};
