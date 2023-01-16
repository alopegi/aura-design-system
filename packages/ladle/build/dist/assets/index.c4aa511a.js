function F2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Bo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Jd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ga = { exports: {} },
  Fl,
  sc;
function L2() {
  if (sc) return Fl;
  sc = 1;
  var e = 1e3,
    t = e * 60,
    n = t * 60,
    r = n * 24,
    o = r * 7,
    i = r * 365.25;
  Fl = function (d, u) {
    u = u || {};
    var p = typeof d;
    if (p === "string" && d.length > 0) return l(d);
    if (p === "number" && isFinite(d)) return u.long ? a(d) : s(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(d)
    );
  };
  function l(d) {
    if (((d = String(d)), !(d.length > 100))) {
      var u =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          d
        );
      if (!!u) {
        var p = parseFloat(u[1]),
          m = (u[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * i;
          case "weeks":
          case "week":
          case "w":
            return p * o;
          case "days":
          case "day":
          case "d":
            return p * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function s(d) {
    var u = Math.abs(d);
    return u >= r
      ? Math.round(d / r) + "d"
      : u >= n
      ? Math.round(d / n) + "h"
      : u >= t
      ? Math.round(d / t) + "m"
      : u >= e
      ? Math.round(d / e) + "s"
      : d + "ms";
  }
  function a(d) {
    var u = Math.abs(d);
    return u >= r
      ? c(d, u, r, "day")
      : u >= n
      ? c(d, u, n, "hour")
      : u >= t
      ? c(d, u, t, "minute")
      : u >= e
      ? c(d, u, e, "second")
      : d + " ms";
  }
  function c(d, u, p, m) {
    var w = u >= p * 1.5;
    return Math.round(d / p) + " " + m + (w ? "s" : "");
  }
  return Fl;
}
function I2(e) {
  (n.debug = n),
    (n.default = n),
    (n.coerce = a),
    (n.disable = i),
    (n.enable = o),
    (n.enabled = l),
    (n.humanize = L2()),
    (n.destroy = c),
    Object.keys(e).forEach((d) => {
      n[d] = e[d];
    }),
    (n.names = []),
    (n.skips = []),
    (n.formatters = {});
  function t(d) {
    let u = 0;
    for (let p = 0; p < d.length; p++)
      (u = (u << 5) - u + d.charCodeAt(p)), (u |= 0);
    return n.colors[Math.abs(u) % n.colors.length];
  }
  n.selectColor = t;
  function n(d) {
    let u,
      p = null,
      m,
      w;
    function y(...x) {
      if (!y.enabled) return;
      const v = y,
        f = Number(new Date()),
        h = f - (u || f);
      (v.diff = h),
        (v.prev = u),
        (v.curr = f),
        (u = f),
        (x[0] = n.coerce(x[0])),
        typeof x[0] != "string" && x.unshift("%O");
      let E = 0;
      (x[0] = x[0].replace(/%([a-zA-Z%])/g, (b, k) => {
        if (b === "%%") return "%";
        E++;
        const O = n.formatters[k];
        if (typeof O == "function") {
          const I = x[E];
          (b = O.call(v, I)), x.splice(E, 1), E--;
        }
        return b;
      })),
        n.formatArgs.call(v, x),
        (v.log || n.log).apply(v, x);
    }
    return (
      (y.namespace = d),
      (y.useColors = n.useColors()),
      (y.color = n.selectColor(d)),
      (y.extend = r),
      (y.destroy = n.destroy),
      Object.defineProperty(y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          p !== null
            ? p
            : (m !== n.namespaces && ((m = n.namespaces), (w = n.enabled(d))),
              w),
        set: (x) => {
          p = x;
        },
      }),
      typeof n.init == "function" && n.init(y),
      y
    );
  }
  function r(d, u) {
    const p = n(this.namespace + (typeof u > "u" ? ":" : u) + d);
    return (p.log = this.log), p;
  }
  function o(d) {
    n.save(d), (n.namespaces = d), (n.names = []), (n.skips = []);
    let u;
    const p = (typeof d == "string" ? d : "").split(/[\s,]+/),
      m = p.length;
    for (u = 0; u < m; u++)
      !p[u] ||
        ((d = p[u].replace(/\*/g, ".*?")),
        d[0] === "-"
          ? n.skips.push(new RegExp("^" + d.slice(1) + "$"))
          : n.names.push(new RegExp("^" + d + "$")));
  }
  function i() {
    const d = [...n.names.map(s), ...n.skips.map(s).map((u) => "-" + u)].join(
      ","
    );
    return n.enable(""), d;
  }
  function l(d) {
    if (d[d.length - 1] === "*") return !0;
    let u, p;
    for (u = 0, p = n.skips.length; u < p; u++)
      if (n.skips[u].test(d)) return !1;
    for (u = 0, p = n.names.length; u < p; u++)
      if (n.names[u].test(d)) return !0;
    return !1;
  }
  function s(d) {
    return d
      .toString()
      .substring(2, d.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function a(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function c() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return n.enable(n.load()), n;
}
var P2 = I2;
(function (e, t) {
  (t.formatArgs = r),
    (t.save = o),
    (t.load = i),
    (t.useColors = n),
    (t.storage = l()),
    (t.destroy = (() => {
      let a = !1;
      return () => {
        a ||
          ((a = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function n() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function r(a) {
    if (
      ((a[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        a[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        e.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const c = "color: " + this.color;
    a.splice(1, 0, c, "color: inherit");
    let d = 0,
      u = 0;
    a[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (d++, p === "%c" && (u = d));
    }),
      a.splice(u, 0, c);
  }
  t.log = console.debug || console.log || (() => {});
  function o(a) {
    try {
      a ? t.storage.setItem("debug", a) : t.storage.removeItem("debug");
    } catch {}
  }
  function i() {
    let a;
    try {
      a = t.storage.getItem("debug");
    } catch {}
    return (
      !a &&
        typeof process < "u" &&
        "env" in process &&
        (a = {
          NVM_INC: "/Users/pablopvsky/.nvm/versions/node/v19.1.0/include/node",
          MANPATH:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/pablopvsky/.nvm/versions/node/v19.1.0/share/man:/opt/homebrew/share/man::",
          TERM_PROGRAM: "vscode",
          NODE: "/Users/pablopvsky/.nvm/versions/node/v19.1.0/bin/node",
          NVM_CD_FLAGS: "-q",
          INIT_CWD: "/Users/pablopvsky/Documents/APP/aura-design-system",
          SHELL: "/bin/zsh",
          TERM: "xterm-256color",
          TMPDIR: "/var/folders/xg/bg65g3js3vjfdcvq8l29qjv40000gn/T/",
          HOMEBREW_REPOSITORY: "/opt/homebrew",
          npm_config_metrics_registry: "https://registry.npmjs.org/",
          npm_config_global_prefix:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0",
          TERM_PROGRAM_VERSION: "1.74.2",
          MallocNanoZone: "0",
          ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
          ZDOTDIR: "/Users/pablopvsky",
          COLOR: "1",
          npm_config_noproxy: "",
          npm_config_local_prefix:
            "/Users/pablopvsky/Documents/APP/aura-design-system",
          USER: "pablopvsky",
          NVM_DIR: "/Users/pablopvsky/.nvm",
          COMMAND_MODE: "unix2003",
          npm_config_globalconfig:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0/etc/npmrc",
          SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.YRVE1Al970/Listeners",
          __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
          npm_execpath:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0/lib/node_modules/npm/bin/npx-cli.js",
          PATH: "/Users/pablopvsky/Documents/APP/aura-design-system/node_modules/.bin:/Users/pablopvsky/Documents/APP/aura-design-system/node_modules/.bin:/Users/pablopvsky/Documents/APP/node_modules/.bin:/Users/pablopvsky/Documents/node_modules/.bin:/Users/pablopvsky/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/pablopvsky/.nvm/versions/node/v19.1.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/pablopvsky/Documents/APP/aura-design-system/node_modules/.bin:/Users/pablopvsky/Documents/APP/node_modules/.bin:/Users/pablopvsky/Documents/node_modules/.bin:/Users/pablopvsky/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/pablopvsky/.nvm/versions/node/v19.1.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/pablopvsky/google-cloud-sdk/bin:/Users/pablopvsky/.nvm/versions/node/v19.1.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/pablopvsky/google-cloud-sdk/bin:/Users/pablopvsky/.nvm/versions/node/v19.1.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin",
          _: "/Users/pablopvsky/Documents/APP/aura-design-system/node_modules/.bin/ladle",
          npm_package_json:
            "/Users/pablopvsky/Documents/APP/aura-design-system/package.json",
          __CFBundleIdentifier: "com.microsoft.VSCode",
          USER_ZDOTDIR: "/Users/pablopvsky",
          npm_config_init_module: "/Users/pablopvsky/.npm-init.js",
          npm_config_userconfig: "/Users/pablopvsky/.npmrc",
          PWD: "/Users/pablopvsky/Documents/APP/aura-design-system",
          npm_command: "exec",
          EDITOR: "vi",
          npm_lifecycle_event: "npx",
          LANG: "en_US.UTF-8",
          npm_package_name: "aura-design",
          XPC_FLAGS: "0x0",
          VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node",
          npm_config_node_gyp:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
          XPC_SERVICE_NAME: "0",
          npm_package_version: "0.3.0",
          VSCODE_INJECTION: "1",
          HOME: "/Users/pablopvsky",
          SHLVL: "3",
          VSCODE_GIT_ASKPASS_MAIN:
            "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
          HOMEBREW_PREFIX: "/opt/homebrew",
          LOGNAME: "pablopvsky",
          npm_config_cache: "/Users/pablopvsky/.npm",
          npm_lifecycle_script: "ladle",
          VSCODE_GIT_IPC_HANDLE:
            "/var/folders/xg/bg65g3js3vjfdcvq8l29qjv40000gn/T/vscode-git-df19378585.sock",
          NVM_BIN: "/Users/pablopvsky/.nvm/versions/node/v19.1.0/bin",
          npm_config_user_agent:
            "npm/8.19.3 node/v19.1.0 darwin arm64 workspaces/false",
          HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
          INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:",
          GIT_ASKPASS:
            "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
          VSCODE_GIT_ASKPASS_NODE:
            "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper",
          COLORTERM: "truecolor",
          npm_config_prefix: "/Users/pablopvsky/.nvm/versions/node/v19.1.0",
          npm_node_execpath:
            "/Users/pablopvsky/.nvm/versions/node/v19.1.0/bin/node",
          VITE_PUBLIC_LADLE_THEME: "light",
          VITE_PUBLIC_STORIES: "stories",
          NODE_ENV: "production",
        }.DEBUG),
      a
    );
  }
  function l() {
    try {
      return localStorage;
    } catch {}
  }
  e.exports = P2(t);
  const { formatters: s } = e.exports;
  s.j = function (a) {
    try {
      return JSON.stringify(a);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(ga, ga.exports);
const B2 = ga.exports,
  At = B2("ladle");
var vt = {},
  M2 = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  Kd = "%[a-f0-9]{2}",
  uc = new RegExp(Kd, "gi"),
  cc = new RegExp("(" + Kd + ")+", "gi");
function ya(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  var n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], ya(n), ya(r));
}
function $2(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(uc), n = 1; n < t.length; n++)
      (e = ya(t, n).join("")), (t = e.match(uc));
    return e;
  }
}
function j2(e) {
  for (
    var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" },
      n = cc.exec(e);
    n;

  ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var r = $2(n[0]);
      r !== n[0] && (t[n[0]] = r);
    }
    n = cc.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var o = Object.keys(t), i = 0; i < o.length; i++) {
    var l = o[i];
    e = e.replace(new RegExp(l, "g"), t[l]);
  }
  return e;
}
var U2 = function (e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch {
      return j2(e);
    }
  },
  z2 = (e, t) => {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "") return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
  },
  H2 = function (e, t) {
    for (
      var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0;
      i < r.length;
      i++
    ) {
      var l = r[i],
        s = e[l];
      (o ? t.indexOf(l) !== -1 : t(l, s, e)) && (n[l] = s);
    }
    return n;
  };
(function (e) {
  const t = M2,
    n = U2,
    r = z2,
    o = H2,
    i = (f) => f == null,
    l = Symbol("encodeFragmentIdentifier");
  function s(f) {
    switch (f.arrayFormat) {
      case "index":
        return (h) => (E, C) => {
          const b = E.length;
          return C === void 0 ||
            (f.skipNull && C === null) ||
            (f.skipEmptyString && C === "")
            ? E
            : C === null
            ? [...E, [d(h, f), "[", b, "]"].join("")]
            : [...E, [d(h, f), "[", d(b, f), "]=", d(C, f)].join("")];
        };
      case "bracket":
        return (h) => (E, C) =>
          C === void 0 ||
          (f.skipNull && C === null) ||
          (f.skipEmptyString && C === "")
            ? E
            : C === null
            ? [...E, [d(h, f), "[]"].join("")]
            : [...E, [d(h, f), "[]=", d(C, f)].join("")];
      case "colon-list-separator":
        return (h) => (E, C) =>
          C === void 0 ||
          (f.skipNull && C === null) ||
          (f.skipEmptyString && C === "")
            ? E
            : C === null
            ? [...E, [d(h, f), ":list="].join("")]
            : [...E, [d(h, f), ":list=", d(C, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const h = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (E) => (C, b) =>
          b === void 0 ||
          (f.skipNull && b === null) ||
          (f.skipEmptyString && b === "")
            ? C
            : ((b = b === null ? "" : b),
              C.length === 0
                ? [[d(E, f), h, d(b, f)].join("")]
                : [[C, d(b, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (h) => (E, C) =>
          C === void 0 ||
          (f.skipNull && C === null) ||
          (f.skipEmptyString && C === "")
            ? E
            : C === null
            ? [...E, d(h, f)]
            : [...E, [d(h, f), "=", d(C, f)].join("")];
    }
  }
  function a(f) {
    let h;
    switch (f.arrayFormat) {
      case "index":
        return (E, C, b) => {
          if (
            ((h = /\[(\d*)\]$/.exec(E)), (E = E.replace(/\[\d*\]$/, "")), !h)
          ) {
            b[E] = C;
            return;
          }
          b[E] === void 0 && (b[E] = {}), (b[E][h[1]] = C);
        };
      case "bracket":
        return (E, C, b) => {
          if (((h = /(\[\])$/.exec(E)), (E = E.replace(/\[\]$/, "")), !h)) {
            b[E] = C;
            return;
          }
          if (b[E] === void 0) {
            b[E] = [C];
            return;
          }
          b[E] = [].concat(b[E], C);
        };
      case "colon-list-separator":
        return (E, C, b) => {
          if (((h = /(:list)$/.exec(E)), (E = E.replace(/:list$/, "")), !h)) {
            b[E] = C;
            return;
          }
          if (b[E] === void 0) {
            b[E] = [C];
            return;
          }
          b[E] = [].concat(b[E], C);
        };
      case "comma":
      case "separator":
        return (E, C, b) => {
          const k = typeof C == "string" && C.includes(f.arrayFormatSeparator),
            O =
              typeof C == "string" &&
              !k &&
              u(C, f).includes(f.arrayFormatSeparator);
          C = O ? u(C, f) : C;
          const I =
            k || O
              ? C.split(f.arrayFormatSeparator).map(($) => u($, f))
              : C === null
              ? C
              : u(C, f);
          b[E] = I;
        };
      case "bracket-separator":
        return (E, C, b) => {
          const k = /(\[\])$/.test(E);
          if (((E = E.replace(/\[\]$/, "")), !k)) {
            b[E] = C && u(C, f);
            return;
          }
          const O =
            C === null
              ? []
              : C.split(f.arrayFormatSeparator).map((I) => u(I, f));
          if (b[E] === void 0) {
            b[E] = O;
            return;
          }
          b[E] = [].concat(b[E], O);
        };
      default:
        return (E, C, b) => {
          if (b[E] === void 0) {
            b[E] = C;
            return;
          }
          b[E] = [].concat(b[E], C);
        };
    }
  }
  function c(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function d(f, h) {
    return h.encode ? (h.strict ? t(f) : encodeURIComponent(f)) : f;
  }
  function u(f, h) {
    return h.decode ? n(f) : f;
  }
  function p(f) {
    return Array.isArray(f)
      ? f.sort()
      : typeof f == "object"
      ? p(Object.keys(f))
          .sort((h, E) => Number(h) - Number(E))
          .map((h) => f[h])
      : f;
  }
  function m(f) {
    const h = f.indexOf("#");
    return h !== -1 && (f = f.slice(0, h)), f;
  }
  function w(f) {
    let h = "";
    const E = f.indexOf("#");
    return E !== -1 && (h = f.slice(E)), h;
  }
  function y(f) {
    f = m(f);
    const h = f.indexOf("?");
    return h === -1 ? "" : f.slice(h + 1);
  }
  function x(f, h) {
    return (
      h.parseNumbers &&
      !Number.isNaN(Number(f)) &&
      typeof f == "string" &&
      f.trim() !== ""
        ? (f = Number(f))
        : h.parseBooleans &&
          f !== null &&
          (f.toLowerCase() === "true" || f.toLowerCase() === "false") &&
          (f = f.toLowerCase() === "true"),
      f
    );
  }
  function v(f, h) {
    (h = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      h
    )),
      c(h.arrayFormatSeparator);
    const E = a(h),
      C = Object.create(null);
    if (typeof f != "string" || ((f = f.trim().replace(/^[?#&]/, "")), !f))
      return C;
    for (const b of f.split("&")) {
      if (b === "") continue;
      let [k, O] = r(h.decode ? b.replace(/\+/g, " ") : b, "=");
      (O =
        O === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(h.arrayFormat)
          ? O
          : u(O, h)),
        E(u(k, h), O, C);
    }
    for (const b of Object.keys(C)) {
      const k = C[b];
      if (typeof k == "object" && k !== null)
        for (const O of Object.keys(k)) k[O] = x(k[O], h);
      else C[b] = x(k, h);
    }
    return h.sort === !1
      ? C
      : (h.sort === !0
          ? Object.keys(C).sort()
          : Object.keys(C).sort(h.sort)
        ).reduce((b, k) => {
          const O = C[k];
          return (
            Boolean(O) && typeof O == "object" && !Array.isArray(O)
              ? (b[k] = p(O))
              : (b[k] = O),
            b
          );
        }, Object.create(null));
  }
  (e.extract = y),
    (e.parse = v),
    (e.stringify = (f, h) => {
      if (!f) return "";
      (h = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        h
      )),
        c(h.arrayFormatSeparator);
      const E = (O) =>
          (h.skipNull && i(f[O])) || (h.skipEmptyString && f[O] === ""),
        C = s(h),
        b = {};
      for (const O of Object.keys(f)) E(O) || (b[O] = f[O]);
      const k = Object.keys(b);
      return (
        h.sort !== !1 && k.sort(h.sort),
        k
          .map((O) => {
            const I = f[O];
            return I === void 0
              ? ""
              : I === null
              ? d(O, h)
              : Array.isArray(I)
              ? I.length === 0 && h.arrayFormat === "bracket-separator"
                ? d(O, h) + "[]"
                : I.reduce(C(O), []).join("&")
              : d(O, h) + "=" + d(I, h);
          })
          .filter((O) => O.length > 0)
          .join("&")
      );
    }),
    (e.parseUrl = (f, h) => {
      h = Object.assign({ decode: !0 }, h);
      const [E, C] = r(f, "#");
      return Object.assign(
        { url: E.split("?")[0] || "", query: v(y(f), h) },
        h && h.parseFragmentIdentifier && C
          ? { fragmentIdentifier: u(C, h) }
          : {}
      );
    }),
    (e.stringifyUrl = (f, h) => {
      h = Object.assign({ encode: !0, strict: !0, [l]: !0 }, h);
      const E = m(f.url).split("?")[0] || "",
        C = e.extract(f.url),
        b = e.parse(C, { sort: !1 }),
        k = Object.assign(b, f.query);
      let O = e.stringify(k, h);
      O && (O = `?${O}`);
      let I = w(f.url);
      return (
        f.fragmentIdentifier &&
          (I = `#${h[l] ? d(f.fragmentIdentifier, h) : f.fragmentIdentifier}`),
        `${E}${O}${I}`
      );
    }),
    (e.pick = (f, h, E) => {
      E = Object.assign({ parseFragmentIdentifier: !0, [l]: !1 }, E);
      const { url: C, query: b, fragmentIdentifier: k } = e.parseUrl(f, E);
      return e.stringifyUrl(
        { url: C, query: o(b, h), fragmentIdentifier: k },
        E
      );
    }),
    (e.exclude = (f, h, E) => {
      const C = Array.isArray(h) ? (b) => !h.includes(b) : (b, k) => !h(b, k);
      return e.pick(f, C, E);
    });
})(vt);
var va = { exports: {} };
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    l = 9007199254740991,
    s = "[object Arguments]",
    a = "[object Array]",
    c = "[object AsyncFunction]",
    d = "[object Boolean]",
    u = "[object Date]",
    p = "[object Error]",
    m = "[object Function]",
    w = "[object GeneratorFunction]",
    y = "[object Map]",
    x = "[object Number]",
    v = "[object Null]",
    f = "[object Object]",
    h = "[object Proxy]",
    E = "[object RegExp]",
    C = "[object Set]",
    b = "[object String]",
    k = "[object Undefined]",
    O = "[object WeakMap]",
    I = "[object ArrayBuffer]",
    $ = "[object DataView]",
    V = "[object Float32Array]",
    D = "[object Float64Array]",
    M = "[object Int8Array]",
    G = "[object Int16Array]",
    H = "[object Int32Array]",
    W = "[object Uint8Array]",
    q = "[object Uint8ClampedArray]",
    R = "[object Uint16Array]",
    P = "[object Uint32Array]",
    B = /[\\^$.*+?()[\]{}|]/g,
    X = /^\[object .+?Constructor\]$/,
    Q = /^(?:0|[1-9]\d*)$/,
    Z = {};
  (Z[V] = Z[D] = Z[M] = Z[G] = Z[H] = Z[W] = Z[q] = Z[R] = Z[P] = !0),
    (Z[s] =
      Z[a] =
      Z[I] =
      Z[d] =
      Z[$] =
      Z[u] =
      Z[p] =
      Z[m] =
      Z[y] =
      Z[x] =
      Z[f] =
      Z[E] =
      Z[C] =
      Z[b] =
      Z[O] =
        !1);
  var ae = typeof Bo == "object" && Bo && Bo.Object === Object && Bo,
    st = typeof self == "object" && self && self.Object === Object && self,
    de = ae || st || Function("return this")(),
    Ue = t && !t.nodeType && t,
    Et = Ue && !0 && e && !e.nodeType && e,
    bo = Et && Et.exports === Ue,
    _r = bo && ae.process,
    xo = (function () {
      try {
        var g = Et && Et.require && Et.require("util").types;
        return g || (_r && _r.binding && _r.binding("util"));
      } catch {}
    })(),
    Oo = xo && xo.isTypedArray;
  function _l(g, S, T) {
    switch (T.length) {
      case 0:
        return g.call(S);
      case 1:
        return g.call(S, T[0]);
      case 2:
        return g.call(S, T[0], T[1]);
      case 3:
        return g.call(S, T[0], T[1], T[2]);
    }
    return g.apply(S, T);
  }
  function Y(g, S) {
    for (var T = -1, U = Array(g); ++T < g; ) U[T] = S(T);
    return U;
  }
  function Rn(g) {
    return function (S) {
      return g(S);
    };
  }
  function ko(g, S) {
    return g == null ? void 0 : g[S];
  }
  function Sr(g, S) {
    return function (T) {
      return g(S(T));
    };
  }
  var bh = Array.prototype,
    xh = Function.prototype,
    To = Object.prototype,
    Sl = de["__core-js_shared__"],
    Do = xh.toString,
    kt = To.hasOwnProperty,
    Hu = (function () {
      var g = /[^.]+$/.exec((Sl && Sl.keys && Sl.keys.IE_PROTO) || "");
      return g ? "Symbol(src)_1." + g : "";
    })(),
    Vu = To.toString,
    Oh = Do.call(Object),
    kh = RegExp(
      "^" +
        Do.call(kt)
          .replace(B, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ro = bo ? de.Buffer : void 0,
    Gu = de.Symbol,
    Wu = de.Uint8Array,
    Yu = Ro ? Ro.allocUnsafe : void 0,
    Xu = Sr(Object.getPrototypeOf, Object),
    qu = Object.create,
    Th = To.propertyIsEnumerable,
    Dh = bh.splice,
    un = Gu ? Gu.toStringTag : void 0,
    No = (function () {
      try {
        var g = bl(Object, "defineProperty");
        return g({}, "", {}), g;
      } catch {}
    })(),
    Rh = Ro ? Ro.isBuffer : void 0,
    Zu = Math.max,
    Nh = Date.now,
    Qu = bl(de, "Map"),
    Cr = bl(Object, "create"),
    Fh = (function () {
      function g() {}
      return function (S) {
        if (!dn(S)) return {};
        if (qu) return qu(S);
        g.prototype = S;
        var T = new g();
        return (g.prototype = void 0), T;
      };
    })();
  function cn(g) {
    var S = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++S < T; ) {
      var U = g[S];
      this.set(U[0], U[1]);
    }
  }
  function Lh() {
    (this.__data__ = Cr ? Cr(null) : {}), (this.size = 0);
  }
  function Ih(g) {
    var S = this.has(g) && delete this.__data__[g];
    return (this.size -= S ? 1 : 0), S;
  }
  function Ph(g) {
    var S = this.__data__;
    if (Cr) {
      var T = S[g];
      return T === r ? void 0 : T;
    }
    return kt.call(S, g) ? S[g] : void 0;
  }
  function Bh(g) {
    var S = this.__data__;
    return Cr ? S[g] !== void 0 : kt.call(S, g);
  }
  function Mh(g, S) {
    var T = this.__data__;
    return (
      (this.size += this.has(g) ? 0 : 1),
      (T[g] = Cr && S === void 0 ? r : S),
      this
    );
  }
  (cn.prototype.clear = Lh),
    (cn.prototype.delete = Ih),
    (cn.prototype.get = Ph),
    (cn.prototype.has = Bh),
    (cn.prototype.set = Mh);
  function Tt(g) {
    var S = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++S < T; ) {
      var U = g[S];
      this.set(U[0], U[1]);
    }
  }
  function $h() {
    (this.__data__ = []), (this.size = 0);
  }
  function jh(g) {
    var S = this.__data__,
      T = Fo(S, g);
    if (T < 0) return !1;
    var U = S.length - 1;
    return T == U ? S.pop() : Dh.call(S, T, 1), --this.size, !0;
  }
  function Uh(g) {
    var S = this.__data__,
      T = Fo(S, g);
    return T < 0 ? void 0 : S[T][1];
  }
  function zh(g) {
    return Fo(this.__data__, g) > -1;
  }
  function Hh(g, S) {
    var T = this.__data__,
      U = Fo(T, g);
    return U < 0 ? (++this.size, T.push([g, S])) : (T[U][1] = S), this;
  }
  (Tt.prototype.clear = $h),
    (Tt.prototype.delete = jh),
    (Tt.prototype.get = Uh),
    (Tt.prototype.has = zh),
    (Tt.prototype.set = Hh);
  function Nn(g) {
    var S = -1,
      T = g == null ? 0 : g.length;
    for (this.clear(); ++S < T; ) {
      var U = g[S];
      this.set(U[0], U[1]);
    }
  }
  function Vh() {
    (this.size = 0),
      (this.__data__ = {
        hash: new cn(),
        map: new (Qu || Tt)(),
        string: new cn(),
      });
  }
  function Gh(g) {
    var S = Io(this, g).delete(g);
    return (this.size -= S ? 1 : 0), S;
  }
  function Wh(g) {
    return Io(this, g).get(g);
  }
  function Yh(g) {
    return Io(this, g).has(g);
  }
  function Xh(g, S) {
    var T = Io(this, g),
      U = T.size;
    return T.set(g, S), (this.size += T.size == U ? 0 : 1), this;
  }
  (Nn.prototype.clear = Vh),
    (Nn.prototype.delete = Gh),
    (Nn.prototype.get = Wh),
    (Nn.prototype.has = Yh),
    (Nn.prototype.set = Xh);
  function Fn(g) {
    var S = (this.__data__ = new Tt(g));
    this.size = S.size;
  }
  function qh() {
    (this.__data__ = new Tt()), (this.size = 0);
  }
  function Zh(g) {
    var S = this.__data__,
      T = S.delete(g);
    return (this.size = S.size), T;
  }
  function Qh(g) {
    return this.__data__.get(g);
  }
  function Jh(g) {
    return this.__data__.has(g);
  }
  function Kh(g, S) {
    var T = this.__data__;
    if (T instanceof Tt) {
      var U = T.__data__;
      if (!Qu || U.length < n - 1)
        return U.push([g, S]), (this.size = ++T.size), this;
      T = this.__data__ = new Nn(U);
    }
    return T.set(g, S), (this.size = T.size), this;
  }
  (Fn.prototype.clear = qh),
    (Fn.prototype.delete = Zh),
    (Fn.prototype.get = Qh),
    (Fn.prototype.has = Jh),
    (Fn.prototype.set = Kh);
  function e2(g, S) {
    var T = kl(g),
      U = !T && Ol(g),
      ee = !T && !U && nc(g),
      fe = !T && !U && !ee && oc(g),
      ge = T || U || ee || fe,
      K = ge ? Y(g.length, String) : [],
      ye = K.length;
    for (var tt in g)
      (S || kt.call(g, tt)) &&
        !(
          ge &&
          (tt == "length" ||
            (ee && (tt == "offset" || tt == "parent")) ||
            (fe &&
              (tt == "buffer" || tt == "byteLength" || tt == "byteOffset")) ||
            ec(tt, ye))
        ) &&
        K.push(tt);
    return K;
  }
  function Cl(g, S, T) {
    ((T !== void 0 && !Po(g[S], T)) || (T === void 0 && !(S in g))) &&
      Al(g, S, T);
  }
  function t2(g, S, T) {
    var U = g[S];
    (!(kt.call(g, S) && Po(U, T)) || (T === void 0 && !(S in g))) &&
      Al(g, S, T);
  }
  function Fo(g, S) {
    for (var T = g.length; T--; ) if (Po(g[T][0], S)) return T;
    return -1;
  }
  function Al(g, S, T) {
    S == "__proto__" && No
      ? No(g, S, { configurable: !0, enumerable: !0, value: T, writable: !0 })
      : (g[S] = T);
  }
  var n2 = m2();
  function Lo(g) {
    return g == null
      ? g === void 0
        ? k
        : v
      : un && un in Object(g)
      ? g2(g)
      : S2(g);
  }
  function Ju(g) {
    return Ar(g) && Lo(g) == s;
  }
  function r2(g) {
    if (!dn(g) || w2(g)) return !1;
    var S = Dl(g) ? kh : X;
    return S.test(x2(g));
  }
  function o2(g) {
    return Ar(g) && rc(g.length) && !!Z[Lo(g)];
  }
  function i2(g) {
    if (!dn(g)) return _2(g);
    var S = tc(g),
      T = [];
    for (var U in g) (U == "constructor" && (S || !kt.call(g, U))) || T.push(U);
    return T;
  }
  function Ku(g, S, T, U, ee) {
    g !== S &&
      n2(
        S,
        function (fe, ge) {
          if ((ee || (ee = new Fn()), dn(fe))) l2(g, S, ge, T, Ku, U, ee);
          else {
            var K = U ? U(xl(g, ge), fe, ge + "", g, S, ee) : void 0;
            K === void 0 && (K = fe), Cl(g, ge, K);
          }
        },
        ic
      );
  }
  function l2(g, S, T, U, ee, fe, ge) {
    var K = xl(g, T),
      ye = xl(S, T),
      tt = ge.get(ye);
    if (tt) {
      Cl(g, T, tt);
      return;
    }
    var Ye = fe ? fe(K, ye, T + "", g, S, ge) : void 0,
      br = Ye === void 0;
    if (br) {
      var Rl = kl(ye),
        Nl = !Rl && nc(ye),
        ac = !Rl && !Nl && oc(ye);
      (Ye = ye),
        Rl || Nl || ac
          ? kl(K)
            ? (Ye = K)
            : O2(K)
            ? (Ye = f2(K))
            : Nl
            ? ((br = !1), (Ye = u2(ye, !0)))
            : ac
            ? ((br = !1), (Ye = d2(ye, !0)))
            : (Ye = [])
          : k2(ye) || Ol(ye)
          ? ((Ye = K),
            Ol(K) ? (Ye = T2(K)) : (!dn(K) || Dl(K)) && (Ye = y2(ye)))
          : (br = !1);
    }
    br && (ge.set(ye, Ye), ee(Ye, ye, U, fe, ge), ge.delete(ye)), Cl(g, T, Ye);
  }
  function a2(g, S) {
    return A2(C2(g, S, lc), g + "");
  }
  var s2 = No
    ? function (g, S) {
        return No(g, "toString", {
          configurable: !0,
          enumerable: !1,
          value: R2(S),
          writable: !0,
        });
      }
    : lc;
  function u2(g, S) {
    if (S) return g.slice();
    var T = g.length,
      U = Yu ? Yu(T) : new g.constructor(T);
    return g.copy(U), U;
  }
  function c2(g) {
    var S = new g.constructor(g.byteLength);
    return new Wu(S).set(new Wu(g)), S;
  }
  function d2(g, S) {
    var T = S ? c2(g.buffer) : g.buffer;
    return new g.constructor(T, g.byteOffset, g.length);
  }
  function f2(g, S) {
    var T = -1,
      U = g.length;
    for (S || (S = Array(U)); ++T < U; ) S[T] = g[T];
    return S;
  }
  function p2(g, S, T, U) {
    var ee = !T;
    T || (T = {});
    for (var fe = -1, ge = S.length; ++fe < ge; ) {
      var K = S[fe],
        ye = U ? U(T[K], g[K], K, T, g) : void 0;
      ye === void 0 && (ye = g[K]), ee ? Al(T, K, ye) : t2(T, K, ye);
    }
    return T;
  }
  function h2(g) {
    return a2(function (S, T) {
      var U = -1,
        ee = T.length,
        fe = ee > 1 ? T[ee - 1] : void 0,
        ge = ee > 2 ? T[2] : void 0;
      for (
        fe = g.length > 3 && typeof fe == "function" ? (ee--, fe) : void 0,
          ge && v2(T[0], T[1], ge) && ((fe = ee < 3 ? void 0 : fe), (ee = 1)),
          S = Object(S);
        ++U < ee;

      ) {
        var K = T[U];
        K && g(S, K, U, fe);
      }
      return S;
    });
  }
  function m2(g) {
    return function (S, T, U) {
      for (var ee = -1, fe = Object(S), ge = U(S), K = ge.length; K--; ) {
        var ye = ge[g ? K : ++ee];
        if (T(fe[ye], ye, fe) === !1) break;
      }
      return S;
    };
  }
  function Io(g, S) {
    var T = g.__data__;
    return E2(S) ? T[typeof S == "string" ? "string" : "hash"] : T.map;
  }
  function bl(g, S) {
    var T = ko(g, S);
    return r2(T) ? T : void 0;
  }
  function g2(g) {
    var S = kt.call(g, un),
      T = g[un];
    try {
      g[un] = void 0;
      var U = !0;
    } catch {}
    var ee = Vu.call(g);
    return U && (S ? (g[un] = T) : delete g[un]), ee;
  }
  function y2(g) {
    return typeof g.constructor == "function" && !tc(g) ? Fh(Xu(g)) : {};
  }
  function ec(g, S) {
    var T = typeof g;
    return (
      (S = S == null ? l : S),
      !!S &&
        (T == "number" || (T != "symbol" && Q.test(g))) &&
        g > -1 &&
        g % 1 == 0 &&
        g < S
    );
  }
  function v2(g, S, T) {
    if (!dn(T)) return !1;
    var U = typeof S;
    return (U == "number" ? Tl(T) && ec(S, T.length) : U == "string" && S in T)
      ? Po(T[S], g)
      : !1;
  }
  function E2(g) {
    var S = typeof g;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean"
      ? g !== "__proto__"
      : g === null;
  }
  function w2(g) {
    return !!Hu && Hu in g;
  }
  function tc(g) {
    var S = g && g.constructor,
      T = (typeof S == "function" && S.prototype) || To;
    return g === T;
  }
  function _2(g) {
    var S = [];
    if (g != null) for (var T in Object(g)) S.push(T);
    return S;
  }
  function S2(g) {
    return Vu.call(g);
  }
  function C2(g, S, T) {
    return (
      (S = Zu(S === void 0 ? g.length - 1 : S, 0)),
      function () {
        for (
          var U = arguments, ee = -1, fe = Zu(U.length - S, 0), ge = Array(fe);
          ++ee < fe;

        )
          ge[ee] = U[S + ee];
        ee = -1;
        for (var K = Array(S + 1); ++ee < S; ) K[ee] = U[ee];
        return (K[S] = T(ge)), _l(g, this, K);
      }
    );
  }
  function xl(g, S) {
    if (!(S === "constructor" && typeof g[S] == "function") && S != "__proto__")
      return g[S];
  }
  var A2 = b2(s2);
  function b2(g) {
    var S = 0,
      T = 0;
    return function () {
      var U = Nh(),
        ee = i - (U - T);
      if (((T = U), ee > 0)) {
        if (++S >= o) return arguments[0];
      } else S = 0;
      return g.apply(void 0, arguments);
    };
  }
  function x2(g) {
    if (g != null) {
      try {
        return Do.call(g);
      } catch {}
      try {
        return g + "";
      } catch {}
    }
    return "";
  }
  function Po(g, S) {
    return g === S || (g !== g && S !== S);
  }
  var Ol = Ju(
      (function () {
        return arguments;
      })()
    )
      ? Ju
      : function (g) {
          return Ar(g) && kt.call(g, "callee") && !Th.call(g, "callee");
        },
    kl = Array.isArray;
  function Tl(g) {
    return g != null && rc(g.length) && !Dl(g);
  }
  function O2(g) {
    return Ar(g) && Tl(g);
  }
  var nc = Rh || N2;
  function Dl(g) {
    if (!dn(g)) return !1;
    var S = Lo(g);
    return S == m || S == w || S == c || S == h;
  }
  function rc(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= l;
  }
  function dn(g) {
    var S = typeof g;
    return g != null && (S == "object" || S == "function");
  }
  function Ar(g) {
    return g != null && typeof g == "object";
  }
  function k2(g) {
    if (!Ar(g) || Lo(g) != f) return !1;
    var S = Xu(g);
    if (S === null) return !0;
    var T = kt.call(S, "constructor") && S.constructor;
    return typeof T == "function" && T instanceof T && Do.call(T) == Oh;
  }
  var oc = Oo ? Rn(Oo) : o2;
  function T2(g) {
    return p2(g, ic(g));
  }
  function ic(g) {
    return Tl(g) ? e2(g, !0) : i2(g);
  }
  var D2 = h2(function (g, S, T) {
    Ku(g, S, T);
  });
  function R2(g) {
    return function () {
      return g;
    };
  }
  function lc(g) {
    return g;
  }
  function N2() {
    return !1;
  }
  e.exports = D2;
})(va, va.exports);
const V2 = va.exports,
  G2 = "modulepreload",
  W2 = function (e) {
    return "/" + e;
  },
  dc = {},
  te = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = W2(i)), i in dc)) return;
        dc[i] = !0;
        const l = i.endsWith(".css"),
          s = l ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let d = o.length - 1; d >= 0; d--) {
            const u = o[d];
            if (u.href === i && (!l || u.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${s}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = l ? "stylesheet" : G2),
          l || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = i),
          document.head.appendChild(c),
          l)
        )
          return new Promise((d, u) => {
            c.addEventListener("load", d),
              c.addEventListener("error", () =>
                u(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
var A = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yo = Symbol.for("react.element"),
  Y2 = Symbol.for("react.portal"),
  X2 = Symbol.for("react.fragment"),
  q2 = Symbol.for("react.strict_mode"),
  Z2 = Symbol.for("react.profiler"),
  Q2 = Symbol.for("react.provider"),
  J2 = Symbol.for("react.context"),
  K2 = Symbol.for("react.forward_ref"),
  em = Symbol.for("react.suspense"),
  tm = Symbol.for("react.memo"),
  nm = Symbol.for("react.lazy"),
  fc = Symbol.iterator;
function rm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fc && e[fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ef = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tf = Object.assign,
  nf = {};
function yr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nf),
    (this.updater = n || ef);
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rf() {}
rf.prototype = yr.prototype;
function Ns(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nf),
    (this.updater = n || ef);
}
var Fs = (Ns.prototype = new rf());
Fs.constructor = Ns;
tf(Fs, yr.prototype);
Fs.isPureReactComponent = !0;
var pc = Array.isArray,
  of = Object.prototype.hasOwnProperty,
  Ls = { current: null },
  lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function af(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      of.call(t, r) && !lf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: yo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ls.current,
  };
}
function om(e, t) {
  return {
    $$typeof: yo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Is(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yo;
}
function im(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hc = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? im("" + e.key)
    : t.toString(36);
}
function ri(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yo:
          case Y2:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Ll(l, 0) : r),
      pc(o)
        ? ((n = ""),
          e != null && (n = e.replace(hc, "$&/") + "/"),
          ri(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Is(o) &&
            (o = om(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(hc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), pc(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Ll(i, s);
      l += ri(i, t, n, a, o);
    }
  else if (((a = rm(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ll(i, s++)), (l += ri(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Mo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ri(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function lm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var $e = { current: null },
  oi = { transition: null },
  am = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: Ls,
  };
J.Children = {
  map: Mo,
  forEach: function (e, t, n) {
    Mo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Is(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = yr;
J.Fragment = X2;
J.Profiler = Z2;
J.PureComponent = Ns;
J.StrictMode = q2;
J.Suspense = em;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = tf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ls.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      of.call(t, a) &&
        !lf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: yo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: J2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Q2, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = af;
J.createFactory = function (e) {
  var t = af.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: K2, render: e };
};
J.isValidElement = Is;
J.lazy = function (e) {
  return { $$typeof: nm, _payload: { _status: -1, _result: e }, _init: lm };
};
J.memo = function (e, t) {
  return { $$typeof: tm, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
J.useContext = function (e) {
  return $e.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
J.useId = function () {
  return $e.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return $e.current.useRef(e);
};
J.useState = function (e) {
  return $e.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return $e.current.useTransition();
};
J.version = "18.2.0";
(function (e) {
  e.exports = J;
})(A);
const F = Jd(A.exports),
  sf = A.exports.createContext(void 0),
  mc = sf,
  sm = () => A.exports.useContext(sf);
var pt = ((e) => (
    (e.Full = "full"),
    (e.Preview = "preview"),
    (e.SingleScroll = "single-scroll"),
    e
  ))(pt || {}),
  Ce = ((e) => ((e.Light = "light"), (e.Dark = "dark"), (e.Auto = "auto"), e))(
    Ce || {}
  ),
  ue = ((e) => (
    (e.Boolean = "boolean"),
    (e.String = "string"),
    (e.Number = "number"),
    (e.Complex = "complex"),
    (e.Function = "function"),
    (e.Radio = "radio"),
    (e.Select = "select"),
    (e.Action = "action"),
    e
  ))(ue || {}),
  se = ((e) => (
    (e.UpdateAll = "update-all"),
    (e.UpdateMode = "update-mode"),
    (e.UpdateAction = "update-action"),
    (e.UpdateRtl = "update-rtl"),
    (e.UpdateSource = "update-source"),
    (e.UpdateStory = "update-story"),
    (e.UpdateTheme = "update-theme"),
    (e.UpdateWidth = "update-width"),
    (e.UpdateControl = "update-control"),
    e
  ))(se || {});
const gc = ({ component: e, decorator: t, args: n, argTypes: r }) => {
  const { globalState: o, dispatch: i } = sm(),
    l = (a) => (c) => {
      i({ type: se.UpdateAction, value: { name: a, event: c }, clear: !1 });
    };
  A.exports.useEffect(() => {
    const a = {};
    n &&
      Object.keys(n).forEach((c) => {
        const d = n[c];
        if (o.control[c])
          a[c] = {
            type: o.control[c].type,
            defaultValue: d,
            value: o.control[c].value,
            description: "",
          };
        else {
          let u = ue.Complex;
          switch (typeof d) {
            case "function":
              u = ue.Function;
              break;
            case "boolean":
              u = ue.Boolean;
              break;
            case "number":
              u = ue.Number;
              break;
            case "string":
              u = ue.String;
              break;
          }
          a[c] = { type: u, defaultValue: d, value: d, description: "" };
        }
      }),
      r &&
        Object.keys(r).forEach((c) => {
          const d = r[c];
          if (d && d.action) {
            a[c] = {
              type: ue.Action,
              defaultValue: l(c),
              value: l(c),
              description: "",
            };
            return;
          }
          if (!d.control || !d.control.type)
            throw new Error("argTypes should have control type specified");
          if (d.control.type !== "select" && d.control.type !== "radio")
            throw new Error("only select and radio argTypes are supported now");
          o.control[c]
            ? (a[c] = {
                type: o.control[c].type,
                defaultValue: d.defaultValue || d.options[0],
                value: o.control[c].value,
                options: d.options,
                description: "",
              })
            : (a[c] = {
                type: d.control.type,
                defaultValue: d.defaultValue || d.options[0],
                options: d.options,
                value: d.defaultValue || d.options[0],
                description: d.name || c,
              });
        }),
      Object.keys(a).length && i({ type: se.UpdateControl, value: a });
  }, []);
  const s = {};
  return (
    Object.keys(o.control).forEach((a) => {
      o.control[a].type, (s[a] = o.control[a].value);
    }),
    Object.keys(o.control).length <
    Math.max(n ? Object.keys(n).length : 0, r ? Object.keys(r).length : 0)
      ? null
      : t(() => A.exports.createElement(e, s), {
          globalState: o,
          dispatch: i,
          config: le,
        })
  );
};
var Ki = { exports: {} },
  el = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var um = A.exports,
  cm = Symbol.for("react.element"),
  dm = Symbol.for("react.fragment"),
  fm = Object.prototype.hasOwnProperty,
  pm = um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function uf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) fm.call(t, r) && !hm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: cm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: pm.current,
  };
}
el.Fragment = dm;
el.jsx = uf;
el.jsxs = uf;
(function (e) {
  e.exports = el;
})(Ki);
const sr = Ki.exports.Fragment,
  _ = Ki.exports.jsx,
  z = Ki.exports.jsxs;
function oe(e, t) {
  let n = [];
  const r = {
    args: e[t].args,
    argTypes: e[t].argTypes,
    component: e[t],
    decorator: (i) => _(i, {}),
  };
  return (
    e[t] && Array.isArray(e[t].decorators) && (n = [...n, ...e[t].decorators]),
    e.default &&
      Array.isArray(e.default.decorators) &&
      (n = [...n, ...e.default.decorators]),
    n.length === 0
      ? () => _(gc, { ...r })
      : () =>
          _(gc, {
            ...r,
            decorator: (i, l) =>
              n.length === 1
                ? n[0](i, l)
                : n.reduceRight((s, a) => (c) => s(() => a(c, l), l))(i),
          })
  );
}
const mm = {
    outDir: "ladle-build/dist",
    addons: { theme: { enabled: !1, defaultState: "light" } },
  },
  gm = "/assets/sprite_glyphs-v2.b084ffc3.png",
  ym = ({ children: e }) => {
    const t = { ["--aura-sprite"]: `url(${gm})` };
    return _("div", { style: t, children: e });
  };
const vm = ({ children: e }) => _(ym, { children: e }),
  Em = A.exports.lazy(() =>
    te(
      () => import("./accordion.stories.95a73dd4.js"),
      ["assets/accordion.stories.95a73dd4.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithContent") }))
  ),
  wm = A.exports.lazy(() =>
    te(
      () => import("./accordion.stories.95a73dd4.js"),
      ["assets/accordion.stories.95a73dd4.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithHeaderSize") }))
  ),
  _m = A.exports.lazy(() =>
    te(
      () => import("./accordion.stories.95a73dd4.js"),
      ["assets/accordion.stories.95a73dd4.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithColor") }))
  ),
  Sm = A.exports.lazy(() =>
    te(() => import("./alert.stories.0fb31c4d.js"), []).then((e) => ({
      default: oe(e, "warningAlert"),
    }))
  ),
  Cm = A.exports.lazy(() =>
    te(() => import("./alert.stories.0fb31c4d.js"), []).then((e) => ({
      default: oe(e, "dangerAlert"),
    }))
  ),
  Am = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonFill") }))
  ),
  bm = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonPill") }))
  ),
  xm = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonLink") }))
  ),
  Om = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonFluid") }))
  ),
  km = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonDisabled") }))
  ),
  Tm = A.exports.lazy(() =>
    te(
      () => import("./button.stories.68983871.js"),
      ["assets/button.stories.68983871.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "ButtonWaiting") }))
  ),
  Dm = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withOneColumns"),
    }))
  ),
  Rm = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withTwoColumns"),
    }))
  ),
  Nm = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withThreeColumns"),
    }))
  ),
  Fm = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withFourColumns"),
    }))
  ),
  Lm = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withColumnsFixed"),
    }))
  ),
  Im = A.exports.lazy(() =>
    te(() => import("./grid.stories.1c9a4762.js"), []).then((e) => ({
      default: oe(e, "withColumnsReverse"),
    }))
  ),
  Pm = A.exports.lazy(() =>
    te(() => import("./headline.stories.83a5e8a6.js"), []).then((e) => ({
      default: oe(e, "Headlines"),
    }))
  ),
  Bm = A.exports.lazy(() =>
    te(
      () => import("./input.stories.b0634d0c.js"),
      ["assets/input.stories.b0634d0c.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithPlaceholder") }))
  ),
  Mm = A.exports.lazy(() =>
    te(
      () => import("./input.stories.b0634d0c.js"),
      ["assets/input.stories.b0634d0c.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithLabel") }))
  ),
  $m = A.exports.lazy(() =>
    te(
      () => import("./input.stories.b0634d0c.js"),
      ["assets/input.stories.b0634d0c.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithDialog") }))
  ),
  jm = A.exports.lazy(() =>
    te(
      () => import("./input.stories.b0634d0c.js"),
      ["assets/input.stories.b0634d0c.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithIcon") }))
  ),
  Um = A.exports.lazy(() =>
    te(
      () => import("./modal.stories.3c54cfe6.js"),
      ["assets/modal.stories.3c54cfe6.js", "assets/button.f3bd2b86.js"]
    ).then((e) => ({ default: oe(e, "DefaultConfig") }))
  ),
  zm = A.exports.lazy(() =>
    te(() => import("./page.stories.63f0b91a.js"), []).then((e) => ({
      default: oe(e, "Pancake"),
    }))
  ),
  Hm = A.exports.lazy(() =>
    te(() => import("./page.stories.63f0b91a.js"), []).then((e) => ({
      default: oe(e, "Dashboard"),
    }))
  ),
  Vm = A.exports.lazy(() =>
    te(() => import("./section.stories.a07ffc28.js"), []).then((e) => ({
      default: oe(e, "Default"),
    }))
  ),
  Gm = A.exports.lazy(() =>
    te(() => import("./section.stories.a07ffc28.js"), []).then((e) => ({
      default: oe(e, "WithColor"),
    }))
  ),
  Wm = A.exports.lazy(() =>
    te(() => import("./section.stories.a07ffc28.js"), []).then((e) => ({
      default: oe(e, "WithContainer"),
    }))
  ),
  Ym = A.exports.lazy(() =>
    te(() => import("./section.stories.a07ffc28.js"), []).then((e) => ({
      default: oe(e, "WithSubClassName"),
    }))
  ),
  Xm = A.exports.lazy(() =>
    te(() => import("./section.stories.a07ffc28.js"), []).then((e) => ({
      default: oe(e, "WithPassDiv"),
    }))
  ),
  qm = A.exports.lazy(() =>
    te(
      () => import("./select.stories.6dacfed2.js"),
      ["assets/select.stories.6dacfed2.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "Naked") }))
  ),
  Zm = A.exports.lazy(() =>
    te(
      () => import("./select.stories.6dacfed2.js"),
      ["assets/select.stories.6dacfed2.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithPlaceholder") }))
  ),
  Qm = A.exports.lazy(() =>
    te(
      () => import("./select.stories.6dacfed2.js"),
      ["assets/select.stories.6dacfed2.js", "assets/icon.4f6b4105.js"]
    ).then((e) => ({ default: oe(e, "WithDialog") }))
  );
let ur = {
    "accordion--with-content": {
      component: Em,
      locStart: 4,
      locEnd: 8,
      entry: "stories/accordion.stories.tsx",
    },
    "accordion--with-header-size": {
      component: wm,
      locStart: 10,
      locEnd: 14,
      entry: "stories/accordion.stories.tsx",
    },
    "accordion--with-color": {
      component: _m,
      locStart: 16,
      locEnd: 20,
      entry: "stories/accordion.stories.tsx",
    },
    "alert--warning-alert": {
      component: Sm,
      locStart: 4,
      locEnd: 8,
      entry: "stories/alert.stories.tsx",
    },
    "alert--danger-alert": {
      component: Cm,
      locStart: 10,
      locEnd: 14,
      entry: "stories/alert.stories.tsx",
    },
    "button--button-fill": {
      component: Am,
      locStart: 4,
      locEnd: 4,
      entry: "stories/button.stories.tsx",
    },
    "button--button-pill": {
      component: bm,
      locStart: 5,
      locEnd: 5,
      entry: "stories/button.stories.tsx",
    },
    "button--button-link": {
      component: xm,
      locStart: 6,
      locEnd: 6,
      entry: "stories/button.stories.tsx",
    },
    "button--button-fluid": {
      component: Om,
      locStart: 7,
      locEnd: 7,
      entry: "stories/button.stories.tsx",
    },
    "button--button-disabled": {
      component: km,
      locStart: 8,
      locEnd: 8,
      entry: "stories/button.stories.tsx",
    },
    "button--button-waiting": {
      component: Tm,
      locStart: 9,
      locEnd: 11,
      entry: "stories/button.stories.tsx",
    },
    "grid--with-one-columns": {
      component: Dm,
      locStart: 4,
      locEnd: 15,
      entry: "stories/grid.stories.tsx",
    },
    "grid--with-two-columns": {
      component: Rm,
      locStart: 17,
      locEnd: 28,
      entry: "stories/grid.stories.tsx",
    },
    "grid--with-three-columns": {
      component: Nm,
      locStart: 30,
      locEnd: 41,
      entry: "stories/grid.stories.tsx",
    },
    "grid--with-four-columns": {
      component: Fm,
      locStart: 43,
      locEnd: 54,
      entry: "stories/grid.stories.tsx",
    },
    "grid--with-columns-fixed": {
      component: Lm,
      locStart: 56,
      locEnd: 67,
      entry: "stories/grid.stories.tsx",
    },
    "grid--with-columns-reverse": {
      component: Im,
      locStart: 69,
      locEnd: 74,
      entry: "stories/grid.stories.tsx",
    },
    "headline--headlines": {
      component: Pm,
      locStart: 3,
      locEnd: 12,
      entry: "stories/headline.stories.tsx",
    },
    "input--with-placeholder": {
      component: Bm,
      locStart: 4,
      locEnd: 4,
      entry: "stories/input.stories.tsx",
    },
    "input--with-label": {
      component: Mm,
      locStart: 5,
      locEnd: 7,
      entry: "stories/input.stories.tsx",
    },
    "input--with-dialog": {
      component: $m,
      locStart: 8,
      locEnd: 14,
      entry: "stories/input.stories.tsx",
    },
    "input--with-icon": {
      component: jm,
      locStart: 16,
      locEnd: 21,
      entry: "stories/input.stories.tsx",
    },
    "modal--default-config": {
      component: Um,
      locStart: 5,
      locEnd: 22,
      entry: "stories/modal.stories.tsx",
    },
    "page--pancake": {
      component: zm,
      locStart: 3,
      locEnd: 17,
      entry: "stories/page.stories.tsx",
    },
    "page--dashboard": {
      component: Hm,
      locStart: 19,
      locEnd: 34,
      entry: "stories/page.stories.tsx",
    },
    "section--default": {
      component: Vm,
      locStart: 4,
      locEnd: 17,
      entry: "stories/section.stories.tsx",
    },
    "section--with-color": {
      component: Gm,
      locStart: 19,
      locEnd: 32,
      entry: "stories/section.stories.tsx",
    },
    "section--with-container": {
      component: Wm,
      locStart: 34,
      locEnd: 63,
      entry: "stories/section.stories.tsx",
    },
    "section--with-sub-class-name": {
      component: Ym,
      locStart: 65,
      locEnd: 70,
      entry: "stories/section.stories.tsx",
    },
    "section--with-pass-div": {
      component: Xm,
      locStart: 72,
      locEnd: 77,
      entry: "stories/section.stories.tsx",
    },
    "select--naked": {
      component: qm,
      locStart: 4,
      locEnd: 10,
      entry: "stories/select.stories.tsx",
    },
    "select--with-placeholder": {
      component: Zm,
      locStart: 12,
      locEnd: 18,
      entry: "stories/select.stories.tsx",
    },
    "select--with-dialog": {
      component: Qm,
      locStart: 20,
      locEnd: 30,
      entry: "stories/select.stories.tsx",
    },
  },
  wn = {};
wn = mm;
const Jm = vm;
let ne = {
    "34242d3b":
      "import%20React%20from%20%22react%22%3B%0Aimport%20Accordion%20from%20%22..%2Fmolecules%2Faccordion%22%3B%0A%0Aexport%20const%20WithContent%20%3D%20()%20%3D%3E%20(%0A%20%20%3CAccordion%20title%3D%22Accordion%20title%22%3E%0A%20%20%20%20%3Cp%3ECada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%3C%2Fp%3E%0A%20%20%3C%2FAccordion%3E%0A)%3B%0A%0Aexport%20const%20WithHeaderSize%20%3D%20()%20%3D%3E%20(%0A%20%20%3CAccordion%20title%3D%22Accordion%20title%22%20headerSize%3D%22h3%22%3E%0A%20%20%20%20%3Cp%3ECada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%3C%2Fp%3E%0A%20%20%3C%2FAccordion%3E%0A)%3B%0A%0Aexport%20const%20WithColor%20%3D%20()%20%3D%3E%20(%0A%20%20%3CAccordion%20title%3D%22Accordion%20title%22%20color%3D%22teal-green%22%3E%0A%20%20%20%20%3Cp%3E%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%3C%2Fp%3E%0A%20%20%3C%2FAccordion%3E%0A)%3B%0A",
    "71310ffb":
      "import%20React%20from%20%22react%22%3B%0Aimport%20Alert%20from%20%22..%2Fmolecules%2Falert%22%3B%0A%0Aexport%20const%20warningAlert%20%3D%20()%20%3D%3E%20(%0A%20%20%3CAlert%0A%20%20%20%20state%3D%7B%7B%20info%3A%20%7B%20message%3A%20%22This%20is%20a%20warning%20alert%22%2C%20isError%3A%20false%20%7D%20%7D%7D%0A%20%20%2F%3E%0A)%3B%0A%0Aexport%20const%20dangerAlert%20%3D%20()%20%3D%3E%20(%0A%20%20%3CAlert%0A%20%20%20%20state%3D%7B%7B%20info%3A%20%7B%20message%3A%20%22This%20is%20a%20danger%20alert%22%2C%20isError%3A%20true%20%7D%20%7D%7D%0A%20%20%2F%3E%0A)%3B%0A",
    "5b0288a4":
      "import%20React%20from%20%22react%22%3B%0Aimport%20Button%20from%20%22..%2Fatoms%2Fbutton%22%3B%0A%0Aexport%20const%20ButtonFill%20%3D%20()%20%3D%3E%20%3CButton%20label%3D%22Button%20fill%22%20%2F%3E%3B%0Aexport%20const%20ButtonPill%20%3D%20()%20%3D%3E%20%3CButton%20mode%3D%22pill%22%20label%3D%22Button%20Pill%22%20%2F%3E%3B%0Aexport%20const%20ButtonLink%20%3D%20()%20%3D%3E%20%3CButton%20mode%3D%22link%22%20label%3D%22Button%20Pill%22%20%2F%3E%3B%0Aexport%20const%20ButtonFluid%20%3D%20()%20%3D%3E%20%3CButton%20isFluid%20label%3D%22Button%20Fluid%22%20%2F%3E%3B%0Aexport%20const%20ButtonDisabled%20%3D%20()%20%3D%3E%20%3CButton%20label%3D%22Disabled%22%20isDisabled%2F%3E%3B%0Aexport%20const%20ButtonWaiting%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20isWaiting%20isWaitingText%3D%22Loading...%22%20label%3D%22Button%20Fluid%22%3E%3C%2FButton%3E%0A)%3B%0A",
    "564cb3dd":
      "import%20React%20from%20%22react%22%3B%0Aimport%20Grid%20from%20%22..%2Flayout%2Fgrid%22%3B%0A%0Aexport%20const%20withOneColumns%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22one%22%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A%0Aexport%20const%20withTwoColumns%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22two%22%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A%0Aexport%20const%20withThreeColumns%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22three%22%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A%0Aexport%20const%20withFourColumns%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22four%22%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A%0Aexport%20const%20withColumnsFixed%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22four%22%20isFixed%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%20%2F%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A%0Aexport%20const%20withColumnsReverse%20%3D%20()%20%3D%3E%20(%0A%20%20%3CGrid%20col%3D%22two%22%20className%3D%22reverse%22%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20green%20one%22%3E1%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%20two%22%3E2%3C%2Fdiv%3E%0A%20%20%3C%2FGrid%3E%0A)%3B%0A",
    "605e514d":
      "import%20React%20from%20%22react%22%0A%0Aexport%20const%20Headlines%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20%3C%3E%0A%20%20%20%20%20%20%20%20%3Ch1%3EHeadline%201%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%3Ch2%3EHeadline%202%3C%2Fh2%3E%0A%20%20%20%20%20%20%20%20%3Ch3%3EHeadline%203%3C%2Fh3%3E%0A%20%20%20%20%20%20%20%20%3Ch4%3EHeadline%204%3C%2Fh4%3E%0A%20%20%20%20%20%20%20%20%3Ch5%3EHeadline%205%3C%2Fh5%3E%0A%20%20%20%20%20%20%20%20%3Ch6%3EHeadline%206%3C%2Fh6%3E%0A%20%20%20%20%3C%2F%3E%0A%7D",
    dc35c949:
      "import%20React%20from%20%22react%22%3B%0Aimport%20Input%20from%20%22..%2Fatoms%2Finput%22%3B%0A%0Aexport%20const%20WithPlaceholder%20%3D%20()%20%3D%3E%20%3CInput%20placeholder%3D%22Placeholder%22%20%2F%3E%3B%0Aexport%20const%20WithLabel%20%3D%20()%20%3D%3E%20(%0A%20%20%3CInput%20placeholder%3D%22Placeholder%20and%20label%22%20isLabelable%20%2F%3E%0A)%3B%0Aexport%20const%20WithDialog%20%3D%20()%20%3D%3E%20(%0A%20%20%3CInput%0A%20%20%20%20placeholder%3D%22Placeholder%22%0A%20%20%20%20isHelping%0A%20%20%20%20helpText%3D%22%E2%9A%A0%EF%B8%8F%20Oooops%2C%20something%20happened%20text%22%0A%20%20%2F%3E%0A)%3B%0A%0Aexport%20const%20WithIcon%20%3D%20()%20%3D%3E%20(%0A%20%20%3CInput%0A%20%20%20%20placeholder%3D%22your%40email.com%22%0A%20%20%20%20leftIcon%3D%22mail%22%0A%20%20%2F%3E%0A)%3B%0A",
    b28f11b8:
      "import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20Button%20from%20%22..%2Fatoms%2Fbutton%22%3B%0Aimport%20Modal%20from%20%22..%2Fmolecules%2Fmodal%22%3B%0A%0Aexport%20const%20DefaultConfig%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onClick%3D%7B()%20%3D%3E%20setIsOpen(true)%7D%20label%3D%22Open%20modal%22%20%2F%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isVisible%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20setIsOpen(false)%7D%0A%20%20%20%20%20%20%20%20acceptText%3D%22Accept%20Text%22%0A%20%20%20%20%20%20%20%20declineText%3D%22Decline%20Text%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Hay%20un%20costo%20de%20vida%20que%20debemos%20pagar.%20Una%20escena%20viva%2C%20te%20leo%20en%0A%20%20%20%20%20%20%20%20im%C3%A1genes%20y%20te%20veo%20en%20letras%20algo%20as%C3%AD%20parecido%20a%20la%20distancia.%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A",
    "77cb9b04":
      "import%20React%20from%20%22react%22%3B%0A%0Aexport%20const%20Pancake%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cbody%20className%3D%22page-pancake%22%3E%0A%20%20%20%20%20%20%3Cheader%20className%3D%22pad%20blue%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Eheader%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Fheader%3E%0A%20%20%20%20%20%20%3Cmain%20className%3D%22pad%20teal-green%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Emain%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Fmain%3E%0A%20%20%20%20%20%20%3Cfooter%20className%3D%22pad%20orange%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Efooter%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Ffooter%3E%0A%20%20%20%20%3C%2Fbody%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20const%20Dashboard%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3Cbody%20className%3D%22page-dashboard%22%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22pad%20blue%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Elogo%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cheader%20className%3D%22pad%20yellow%22%3Eheader%3C%2Fheader%3E%0A%20%20%20%20%20%20%3Caside%20className%3D%22pad%20teal-green%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Easide%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Faside%3E%0A%20%20%20%20%20%20%3Cmain%20className%3D%22pad%20orange%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3Emain%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Fmain%3E%0A%20%20%20%20%3C%2Fbody%3E%0A%20%20)%3B%0A%7D%3B%0A",
    d9a71046:
      "import%20React%20from%20%22react%22%3B%0Aimport%20Section%20from%20%22..%2Flayout%2Fsection%22%3B%0A%0Aexport%20const%20Default%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSection%3E%0A%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20Aplicar%20un%20abrazo%20osado%20con%20un%20apret%C3%B3n%20fuerte%20profundamente%20en%20el%20alma%201%20%C3%B3%202%0A%20%20%20%20veces%20por%20herida%2C%20preferiblemente%20en%20la%20noche%20durante%20varios%20d%C3%ADas%20seg%C3%BAn%0A%20%20%20%20prescripci%C3%B3n.%20Indicaciones%3A%20Antidepresivo%20de%20uso%20diario.%20Contra%0A%20%20%20%20indicaciones%3A%20Hipersensibilidad%20y%20lagrimeo%20excesivo.%20Precauciones%20y%0A%20%20%20%20advertencias%3A%20Se%20debe%20evitar%20el%20uso%20concomitante%20de%20otros%20productos%20que%0A%20%20%20%20contengan%20el%20componente%20de%20SORPRESA%20pues%20%C3%A9ste%20puede%20reducir%20su%20efectividad.%0A%20%20%20%20Dosis%20altas%20de%20cualquier%20SORPRESA%20probablemente%20conllevan%20un%20mayor%20riesgo%20de%0A%20%20%20%20estas%20reacciones%2C%20aunque%20los%20estudios%20cl%C3%ADnicos%20controlados%20muestran%20que%20esto%0A%20%20%20%20no%20sucede%20en%20los%20casos%20donde%20el%20coraz%C3%B3n%20lo%20necesitaba.%0A%20%20%3C%2FSection%3E%0A)%3B%0A%0Aexport%20const%20WithColor%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSection%20color%3D%22teal-green%22%3E%0A%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20Aplicar%20un%20abrazo%20osado%20con%20un%20apret%C3%B3n%20fuerte%20profundamente%20en%20el%20alma%201%20%C3%B3%202%0A%20%20%20%20veces%20por%20herida%2C%20preferiblemente%20en%20la%20noche%20durante%20varios%20d%C3%ADas%20seg%C3%BAn%0A%20%20%20%20prescripci%C3%B3n.%20Indicaciones%3A%20Antidepresivo%20de%20uso%20diario.%20Contra%0A%20%20%20%20indicaciones%3A%20Hipersensibilidad%20y%20lagrimeo%20excesivo.%20Precauciones%20y%0A%20%20%20%20advertencias%3A%20Se%20debe%20evitar%20el%20uso%20concomitante%20de%20otros%20productos%20que%0A%20%20%20%20contengan%20el%20componente%20de%20SORPRESA%20pues%20%C3%A9ste%20puede%20reducir%20su%20efectividad.%0A%20%20%20%20Dosis%20altas%20de%20cualquier%20SORPRESA%20probablemente%20conllevan%20un%20mayor%20riesgo%20de%0A%20%20%20%20estas%20reacciones%2C%20aunque%20los%20estudios%20cl%C3%ADnicos%20controlados%20muestran%20que%20esto%0A%20%20%20%20no%20sucede%20en%20los%20casos%20donde%20el%20coraz%C3%B3n%20lo%20necesitaba.%0A%20%20%3C%2FSection%3E%0A)%3B%0A%0Aexport%20const%20WithContainer%20%3D%20()%20%3D%3E%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CSection%20color%3D%22teal-green%22%20container%3D%22smesh%22%3E%0A%20%20%20%20%20%20%3Ch3%20className%3D%22h6%22%3ESmesh%201600px%3C%2Fh3%3E%0A%20%20%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20%20%20Posolog%C3%ADa%3A%20Aplicar%20un%20abrazo%20osado%20con%20un%20apret%C3%B3n%20fuerte%20profundamente%20en%0A%20%20%20%20%20%20el%20alma%201%20%C3%B3%202%20veces%20por%20herida%0A%20%20%20%20%3C%2FSection%3E%0A%20%20%20%20%3CSection%20color%3D%22blue%22%20container%3D%22smush%22%3E%0A%20%20%20%20%20%20%3Ch3%20className%3D%22h6%22%3ESmush%201032px%3C%2Fh3%3E%0A%20%20%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20%20%20Posolog%C3%ADa%3A%20Aplicar%20un%20abrazo%20osado%20con%20un%20apret%C3%B3n%20fuerte%20profundamente%20en%0A%20%20%20%20%20%20el%20alma%201%20%C3%B3%202%20veces%20por%20herida%0A%20%20%20%20%3C%2FSection%3E%0A%20%20%20%20%3CSection%20color%3D%22lemon-green%22%20container%3D%22smash%22%3E%0A%20%20%20%20%20%20%3Ch3%20className%3D%22h6%22%3ESmash%20740px%3C%2Fh3%3E%0A%20%20%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20%20%20Posolog%C3%ADa%3A%20Aplicar%20un%20abrazo%20osado%20con%20un%20apret%C3%B3n%20fuerte%20profundamente%20en%0A%20%20%20%20%20%20el%20alma%201%20%C3%B3%202%20veces%20por%20herida%0A%20%20%20%20%3C%2FSection%3E%0A%20%20%20%20%3CSection%20color%3D%22pink%22%20container%3D%22smosh%22%3E%0A%20%20%20%20%20%20%3Ch3%20className%3D%22h6%22%3ESmosh%20440px%3C%2Fh3%3E%0A%20%20%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%20Posolog%C3%ADa%3A%0A%20%20%20%20%3C%2FSection%3E%0A%20%20%20%20%3CSection%20color%3D%22yellow%22%20container%3D%22smish%22%3E%0A%20%20%20%20%20%20%3Ch3%20className%3D%22h6%22%3ESmish%20250px%3C%2Fh3%3E%0A%20%20%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%0A%20%20%20%20%3C%2FSection%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%0Aexport%20const%20WithSubClassName%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSection%20color%3D%22pink%22%20container%3D%22smash%22%20subClassName%3D%22green%20aura%22%3E%0A%20%20%20%20%3Ch3%20className%3D%22h6%22%3EsubClassName%20box%3C%2Fh3%3E%0A%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%0A%20%20%3C%2FSection%3E%0A)%3B%0A%0Aexport%20const%20WithPassDiv%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSection%20color%3D%22blue%22%20passDiv%3E%0A%20%20%20%20%3Ch3%20className%3D%22h6%22%3EThis%20section%20use%20div%20html%20tag%20as%20wrapper%20%3C%2Fh3%3E%0A%20%20%20%20Cada%20abrazo%20de%20oso%20contiene%3A%201%20dosis%20de%20amor%20por%20cada%202%20brazos.%0A%20%20%3C%2FSection%3E%0A)%3B%0A%0A",
    "1769640b":
      "import%20React%20from%20%22react%22%3B%0Aimport%20Select%20from%20%22..%2Fatoms%2Fselect%22%3B%0A%0Aexport%20const%20Naked%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSelect%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%201%22%3EOption%201%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%202%22%3EOption%202%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%203%22%3EOption%203%3C%2Foption%3E%0A%20%20%3C%2FSelect%3E%0A)%3B%0A%0Aexport%20const%20WithPlaceholder%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSelect%20placeholder%3D%22Placeholder%22%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%201%22%3EOption%201%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%202%22%3EOption%202%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%203%22%3EOption%203%3C%2Foption%3E%0A%20%20%3C%2FSelect%3E%0A)%3B%0A%0Aexport%20const%20WithDialog%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSelect%0A%20%20%20%20placeholder%3D%22Placeholder%22%0A%20%20%20%20isHelping%0A%20%20%20%20helpText%3D%22%E2%9A%A0%EF%B8%8F%20Oooops%2C%20something%20happened%20text%22%0A%20%20%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%201%22%3EOption%201%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%202%22%3EOption%202%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22Option%203%22%3EOption%203%3C%2Foption%3E%0A%20%20%3C%2FSelect%3E%0A)%3B%0A",
  },
  Km = {
    "accordion--with-content": ne["34242d3b"],
    "accordion--with-header-size": ne["34242d3b"],
    "accordion--with-color": ne["34242d3b"],
    "alert--warning-alert": ne["71310ffb"],
    "alert--danger-alert": ne["71310ffb"],
    "button--button-fill": ne["5b0288a4"],
    "button--button-pill": ne["5b0288a4"],
    "button--button-link": ne["5b0288a4"],
    "button--button-fluid": ne["5b0288a4"],
    "button--button-disabled": ne["5b0288a4"],
    "button--button-waiting": ne["5b0288a4"],
    "grid--with-one-columns": ne["564cb3dd"],
    "grid--with-two-columns": ne["564cb3dd"],
    "grid--with-three-columns": ne["564cb3dd"],
    "grid--with-four-columns": ne["564cb3dd"],
    "grid--with-columns-fixed": ne["564cb3dd"],
    "grid--with-columns-reverse": ne["564cb3dd"],
    "headline--headlines": ne["605e514d"],
    "input--with-placeholder": ne.dc35c949,
    "input--with-label": ne.dc35c949,
    "input--with-dialog": ne.dc35c949,
    "input--with-icon": ne.dc35c949,
    "modal--default-config": ne.b28f11b8,
    "page--pancake": ne["77cb9b04"],
    "page--dashboard": ne["77cb9b04"],
    "section--default": ne.d9a71046,
    "section--with-color": ne.d9a71046,
    "section--with-container": ne.d9a71046,
    "section--with-sub-class-name": ne.d9a71046,
    "section--with-pass-div": ne.d9a71046,
    "select--naked": ne["1769640b"],
    "select--with-placeholder": ne["1769640b"],
    "select--with-dialog": ne["1769640b"],
  };
const cf = {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  defaultStory: "",
  viteConfig: void 0,
  appendToHead: "",
  port: 61e3,
  previewPort: 8080,
  outDir: "build",
  base: void 0,
  addons: {
    control: { enabled: !0, defaultState: {} },
    theme: { enabled: !0, defaultState: "light" },
    mode: { enabled: !0, defaultState: "full" },
    rtl: { enabled: !0, defaultState: !1 },
    source: { enabled: !0, defaultState: !1 },
    a11y: { enabled: !0 },
    action: { enabled: !0, defaultState: [] },
    ladle: { enabled: !0 },
    width: {
      enabled: !0,
      options: { xsmall: 414, small: 640, medium: 768, large: 1024 },
      defaultState: 0,
    },
  },
};
Object.keys(wn).length === 0
  ? At("No custom config found.")
  : (At("Custom config found:"), At(wn));
var Zd, Qd;
(Qd = (Zd = wn == null ? void 0 : wn.addons) == null ? void 0 : Zd.width) !=
  null &&
  Qd.options &&
  (cf.addons.width.options = {});
const le = V2(cf, wn);
le.defaultStory === "" && (le.defaultStory = Object.keys(ur).sort()[0]);
At("Final config", le);
const Mn = "-",
  df = (e) => vt.parse(e).story || le.defaultStory,
  eg = (e) => !!vt.parse(e).story,
  ff = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  pf = (e) =>
    e
      ? e
          .split(`${Mn}${Mn}`)
          .reverse()
          .map((t) => ff(t.replace(/-/g, " ")))
          .join(" - ")
      : "",
  yc = (e, t, n) => {
    const r = [],
      o = (l, s, a, c) => {
        const d = s.shift();
        let u = !!n,
          p = [];
        a[0] === d && ((p = [...a.slice(1)]), (u = !0));
        const m = l.findIndex((w) => w.subId === d);
        !d ||
          (m === -1 &&
            l.push({
              id: `${c}${d}`,
              subId: d,
              name: ff(d.replace(/-/g, " ")),
              isLinkable: s.length === 0,
              isExpanded: u,
              isFocused: !1,
              children: [],
            }),
          o(l[m > -1 ? m : l.length - 1].children, s, p, `${c}${d}--`));
      },
      i = t ? t.split(`${Mn}${Mn}`) : [];
    return (
      e.forEach((l) => {
        const s = l.split(`${Mn}${Mn}`);
        o(r, s, i, "");
      }),
      r
    );
  },
  tg = (e, t) => {
    const n = e.split("--"),
      r = t.split("--"),
      o = Math.min(n.length, r.length);
    for (let i = 0; i < o; i++)
      if (n[i] !== r[i])
        return !n[i + 1] && r[i + 1]
          ? 1
          : (n[i + 1] && !r[i + 1]) || [n[i], r[i]].sort()[0] === n[i]
          ? -1
          : 1;
    return 0;
  },
  ng = () =>
    z("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("path", { d: "M18 6L6 18M6 6l12 12" }),
      ],
    }),
  rg = () =>
    _("svg", {
      viewBox: "0 0 24 24",
      strokeWidth: 0.5,
      stroke: "currentColor",
      fill: "currentColor",
      width: 24,
      height: 24,
      children: _("path", {
        d: "M22 14H9V5a4 4 0 00-8 0v3a1 1 0 002 0V5a2 2 0 014 0v10a8 8 0 0016 0 1 1 0 00-1-1zm-7 7a6.01 6.01 0 01-5.917-5h11.834A6.01 6.01 0 0115 21z",
      }),
    }),
  og = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("path", {
          d: "M16 4H9.5a3.5 3.5 0 000 7h.5M14 15V4M10 15V4M5 19h14M7 21l-2-2 2-2",
        }),
      ],
    }),
  ig = () => (
    A.exports.useEffect(
      () => (
        document.documentElement.removeAttribute("data-storyloaded"),
        () => document.documentElement.setAttribute("data-storyloaded", "")
      ),
      []
    ),
    _("div", {
      className: "ladle-ring-wrapper",
      children: z("div", {
        className: "ladle-ring",
        children: [_("div", {}), _("div", {}), _("div", {}), _("div", {})],
      }),
    })
  ),
  lg = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("path", { d: "M16 4h4v4M14 10l6-6M8 20H4v-4M4 20l6-6" }),
      ],
    }),
  ag = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        _("path", {
          d: "M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7",
        }),
        _("path", {
          d: "M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3",
        }),
        _("line", { x1: 9.7, y1: 17, x2: 14.3, y2: 17 }),
      ],
    }),
  sg = () =>
    _("div", {
      style: { width: "10px", marginInlineEnd: "0.5em", flexShrink: 0 },
      children: _("svg", {
        fill: "currentColor",
        viewBox: "0 0 768 1024",
        children: _("path", {
          d: "M509 64l195 218v669q0 3-4 6t-9 3H77q-5 0-9-3t-4-6V73q0-3 4-6t9-3h432zm29-64H77Q45 0 22.5 21.5T0 73v878q0 30 22.5 51.5T77 1024h614q32 0 54.5-21.5T768 951V257zm-26 256V0h-64v256q0 26 19 45t45 19h253v-64H512z",
        }),
      }),
    }),
  ug = ({ rotate: e }) =>
    _("div", {
      "aria-hidden": !0,
      style: {
        width: "10px",
        marginInlineEnd: "0.4em",
        marginTop: "-0.1em",
        transform: e ? "rotate(-90deg)" : void 0,
      },
      children: _("svg", {
        fill: "currentColor",
        viewBox: "0 0 1024 574",
        children: _("path", {
          d: "M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z",
        }),
      }),
    }),
  cg = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      children: [
        _("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        _("circle", { cx: 14, cy: 6, r: 2 }),
        _("line", { x1: 4, y1: 6, x2: 12, y2: 6 }),
        _("line", { x1: 16, y1: 6, x2: 20, y2: 6 }),
        _("circle", { cx: 8, cy: 12, r: 2 }),
        _("line", { x1: 4, y1: 12, x2: 6, y2: 12 }),
        _("line", { x1: 10, y1: 12, x2: 20, y2: 12 }),
        _("circle", { cx: 17, cy: 18, r: 2 }),
        _("line", { x1: 4, y1: 18, x2: 15, y2: 18 }),
        _("line", { x1: 19, y1: 18, x2: 20, y2: 18 }),
      ],
    }),
  dg = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("path", { d: "m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" }),
      ],
    }),
  fg = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("circle", { cx: 12, cy: 12, r: 9 }),
        _("path", { d: "m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" }),
        _("circle", { cx: 12, cy: 7.5, r: 0.5, fill: "currentColor" }),
      ],
    }),
  pg = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("rect", { x: 13, y: 8, width: 8, height: 12, rx: 1 }),
        _("path", {
          d: "M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 9h2",
        }),
      ],
    }),
  hg = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        _("path", {
          d: "M18 8a3 3 0 0 1 0 6M10 8v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5",
        }),
        _("path", {
          d: "M12 8h0l4.524-3.77A.9.9 0 0 1 18 4.922v12.156a.9.9 0 0 1-1.476.692L12 14H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8",
        }),
      ],
    }),
  hf = (e) => {
    switch (vt.parse(e).theme) {
      case Ce.Light:
        return Ce.Light;
      case Ce.Dark:
        return Ce.Dark;
      case Ce.Auto:
        return Ce.Auto;
      default:
        return "light";
    }
  },
  mg = ({ globalState: e, dispatch: t }) => {
    const n = "Switch to dark theme.",
      r = "Switch to light theme.";
    return _("li", {
      children: z("button", {
        "aria-label": e.theme === Ce.Light ? n : r,
        title: e.theme === Ce.Light ? n : r,
        onClick: () => {
          const o = e.theme === Ce.Light ? Ce.Dark : Ce.Light;
          document.documentElement.setAttribute("data-theme", o),
            t({ type: se.UpdateTheme, value: o });
        },
        children: [
          _(ag, {}),
          _("span", {
            className: "ladle-addon-tooltip",
            children: e.theme === Ce.Light ? n : r,
          }),
          z("label", {
            children: [
              "Switch to",
              " ",
              e.theme === Ce.Light ? Ce.Dark : Ce.Light,
              " ",
              "theme",
            ],
          }),
        ],
      }),
    });
  },
  mf = pf(df(location.search));
At(`Initial document.title: ${mf}`);
document.title = `${mf} | Ladle`;
const Ea = hf(location.search);
At(`Initial theme state: ${Ea}`);
Ea === Ce.Auto
  ? window.matchMedia("(prefers-color-scheme: dark)").matches
    ? document.documentElement.setAttribute("data-theme", Ce.Dark)
    : document.documentElement.setAttribute("data-theme", Ce.Light)
  : document.documentElement.setAttribute("data-theme", Ea);
var wi = {},
  vo = { exports: {} },
  Ke = {},
  gf = { exports: {} },
  yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, P) {
    var B = R.length;
    R.push(P);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        Q = R[X];
      if (0 < o(Q, P)) (R[X] = P), (R[B] = Q), (B = X);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var P = R[0],
      B = R.pop();
    if (B !== P) {
      R[0] = B;
      e: for (var X = 0, Q = R.length, Z = Q >>> 1; X < Z; ) {
        var ae = 2 * (X + 1) - 1,
          st = R[ae],
          de = ae + 1,
          Ue = R[de];
        if (0 > o(st, B))
          de < Q && 0 > o(Ue, st)
            ? ((R[X] = Ue), (R[de] = B), (X = de))
            : ((R[X] = st), (R[ae] = B), (X = ae));
        else if (de < Q && 0 > o(Ue, B)) (R[X] = Ue), (R[de] = B), (X = de);
        else break e;
      }
    }
    return P;
  }
  function o(R, P) {
    var B = R.sortIndex - P.sortIndex;
    return B !== 0 ? B : R.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    c = [],
    d = 1,
    u = null,
    p = 3,
    m = !1,
    w = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(R) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= R)
        r(c), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(c);
    }
  }
  function E(R) {
    if (((y = !1), h(R), !w))
      if (n(a) !== null) (w = !0), W(C);
      else {
        var P = n(c);
        P !== null && q(E, P.startTime - R);
      }
  }
  function C(R, P) {
    (w = !1), y && ((y = !1), v(O), (O = -1)), (m = !0);
    var B = p;
    try {
      for (
        h(P), u = n(a);
        u !== null && (!(u.expirationTime > P) || (R && !V()));

      ) {
        var X = u.callback;
        if (typeof X == "function") {
          (u.callback = null), (p = u.priorityLevel);
          var Q = X(u.expirationTime <= P);
          (P = e.unstable_now()),
            typeof Q == "function" ? (u.callback = Q) : u === n(a) && r(a),
            h(P);
        } else r(a);
        u = n(a);
      }
      if (u !== null) var Z = !0;
      else {
        var ae = n(c);
        ae !== null && q(E, ae.startTime - P), (Z = !1);
      }
      return Z;
    } finally {
      (u = null), (p = B), (m = !1);
    }
  }
  var b = !1,
    k = null,
    O = -1,
    I = 5,
    $ = -1;
  function V() {
    return !(e.unstable_now() - $ < I);
  }
  function D() {
    if (k !== null) {
      var R = e.unstable_now();
      $ = R;
      var P = !0;
      try {
        P = k(!0, R);
      } finally {
        P ? M() : ((b = !1), (k = null));
      }
    } else b = !1;
  }
  var M;
  if (typeof f == "function")
    M = function () {
      f(D);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      H = G.port2;
    (G.port1.onmessage = D),
      (M = function () {
        H.postMessage(null);
      });
  } else
    M = function () {
      x(D, 0);
    };
  function W(R) {
    (k = R), b || ((b = !0), M());
  }
  function q(R, P) {
    O = x(function () {
      R(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || m || ((w = !0), W(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var B = p;
      p = P;
      try {
        return R();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, P) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = p;
      p = R;
      try {
        return P();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, P, B) {
      var X = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? X + B : X))
          : (B = X),
        R)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = B + Q),
        (R = {
          id: d++,
          callback: P,
          priorityLevel: R,
          startTime: B,
          expirationTime: Q,
          sortIndex: -1,
        }),
        B > X
          ? ((R.sortIndex = B),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (y ? (v(O), (O = -1)) : (y = !0), q(E, B - X)))
          : ((R.sortIndex = Q), t(a, R), w || m || ((w = !0), W(C))),
        R
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (R) {
      var P = p;
      return function () {
        var B = p;
        p = P;
        try {
          return R.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(yf);
(function (e) {
  e.exports = yf;
})(gf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = A.exports,
  Qe = gf.exports;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ef = new Set(),
  Qr = {};
function Tn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++) Ef.add(t[e]);
}
var It = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wa = Object.prototype.hasOwnProperty,
  gg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vc = {},
  Ec = {};
function yg(e) {
  return wa.call(Ec, e)
    ? !0
    : wa.call(vc, e)
    ? !1
    : gg.test(e)
    ? (Ec[e] = !0)
    : ((vc[e] = !0), !1);
}
function vg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Eg(e, t, n, r) {
  if (t === null || typeof t > "u" || vg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ps = /[\-:]([a-z])/g;
function Bs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ps, Bs);
    Ne[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ps, Bs);
    Ne[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ps, Bs);
  Ne[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ms(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Eg(t, n, o, r) && (n = null),
    r || o === null
      ? yg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $o = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  $s = Symbol.for("react.strict_mode"),
  _a = Symbol.for("react.profiler"),
  wf = Symbol.for("react.provider"),
  _f = Symbol.for("react.context"),
  js = Symbol.for("react.forward_ref"),
  Sa = Symbol.for("react.suspense"),
  Ca = Symbol.for("react.suspense_list"),
  Us = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  Sf = Symbol.for("react.offscreen"),
  wc = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  Il;
function Pr(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Pl = !1;
function Bl(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pr(e) : "";
}
function wg(e) {
  switch (e.tag) {
    case 5:
      return Pr(e.type);
    case 16:
      return Pr("Lazy");
    case 13:
      return Pr("Suspense");
    case 19:
      return Pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return "";
  }
}
function Aa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case $n:
      return "Portal";
    case _a:
      return "Profiler";
    case $s:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _f:
        return (e.displayName || "Context") + ".Consumer";
      case wf:
        return (e._context.displayName || "Context") + ".Provider";
      case js:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Us:
        return (
          (t = e.displayName || null), t !== null ? t : Aa(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return Aa(e(t));
        } catch {}
    }
  return null;
}
function _g(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Aa(t);
    case 8:
      return t === $s ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sg(e) {
  var t = Cf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jo(e) {
  e._valueTracker || (e._valueTracker = Sg(e));
}
function Af(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Cf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function _i(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ba(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function _c(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function bf(e, t) {
  (t = t.checked), t != null && Ms(e, "checked", t, !1);
}
function xa(e, t) {
  bf(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Oa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oa(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Oa(e, t, n) {
  (t !== "number" || _i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function Jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function xf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Of(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Of(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Uo,
  kf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Uo = Uo || document.createElement("div"),
          Uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  Cg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function Tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function Df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Tf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ag = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Da(e, t) {
  if (t) {
    if (Ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Na = null;
function zs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fa = null,
  Kn = null,
  er = null;
function bc(e) {
  if ((e = _o(e))) {
    if (typeof Fa != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = il(t)), Fa(e.stateNode, e.type, t));
  }
}
function Rf(e) {
  Kn ? (er ? er.push(e) : (er = [e])) : (Kn = e);
}
function Nf() {
  if (Kn) {
    var e = Kn,
      t = er;
    if (((er = Kn = null), bc(e), t)) for (e = 0; e < t.length; e++) bc(t[e]);
  }
}
function Ff(e, t) {
  return e(t);
}
function Lf() {}
var Ml = !1;
function If(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Ff(e, t, n);
  } finally {
    (Ml = !1), (Kn !== null || er !== null) && (Lf(), Nf());
  }
}
function Kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var La = !1;
if (It)
  try {
    var Or = {};
    Object.defineProperty(Or, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", Or, Or),
      window.removeEventListener("test", Or, Or);
  } catch {
    La = !1;
  }
function bg(e, t, n, r, o, i, l, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var zr = !1,
  Si = null,
  Ci = !1,
  Ia = null,
  xg = {
    onError: function (e) {
      (zr = !0), (Si = e);
    },
  };
function Og(e, t, n, r, o, i, l, s, a) {
  (zr = !1), (Si = null), bg.apply(xg, arguments);
}
function kg(e, t, n, r, o, i, l, s, a) {
  if ((Og.apply(this, arguments), zr)) {
    if (zr) {
      var c = Si;
      (zr = !1), (Si = null);
    } else throw Error(L(198));
    Ci || ((Ci = !0), (Ia = c));
  }
}
function Dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xc(e) {
  if (Dn(e) !== e) throw Error(L(188));
}
function Tg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xc(o), e;
        if (i === r) return xc(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Bf(e) {
  return (e = Tg(e)), e !== null ? Mf(e) : null;
}
function Mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $f = Qe.unstable_scheduleCallback,
  Oc = Qe.unstable_cancelCallback,
  Dg = Qe.unstable_shouldYield,
  Rg = Qe.unstable_requestPaint,
  Ae = Qe.unstable_now,
  Ng = Qe.unstable_getCurrentPriorityLevel,
  Hs = Qe.unstable_ImmediatePriority,
  jf = Qe.unstable_UserBlockingPriority,
  Ai = Qe.unstable_NormalPriority,
  Fg = Qe.unstable_LowPriority,
  Uf = Qe.unstable_IdlePriority,
  tl = null,
  bt = null;
function Lg(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Bg,
  Ig = Math.log,
  Pg = Math.LN2;
function Bg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ig(e) / Pg) | 0)) | 0;
}
var zo = 64,
  Ho = 4194304;
function Mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Mr(s)) : ((i &= l), i !== 0 && (r = Mr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Mr(l)) : i !== 0 && (r = Mr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Mg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $g(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - mt(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (o[l] = Mg(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zf() {
  var e = zo;
  return (zo <<= 1), (zo & 4194240) === 0 && (zo = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function jg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - mt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ce = 0;
function Hf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Vf,
  Gs,
  Gf,
  Wf,
  Yf,
  Ba = !1,
  Vo = [],
  Xt = null,
  qt = null,
  Zt = null,
  eo = new Map(),
  to = new Map(),
  Ht = [],
  Ug =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      eo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      to.delete(t.pointerId);
  }
}
function kr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = _o(t)), t !== null && Gs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function zg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Xt = kr(Xt, e, t, n, r, o)), !0;
    case "dragenter":
      return (qt = kr(qt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Zt = kr(Zt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return eo.set(i, kr(eo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), to.set(i, kr(to.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Xf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pf(n)), t !== null)) {
          (e.blockedOn = t),
            Yf(e.priority, function () {
              Gf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Na = r), n.target.dispatchEvent(r), (Na = null);
    } else return (t = _o(n)), t !== null && Gs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tc(e, t, n) {
  ii(e) && n.delete(t);
}
function Hg() {
  (Ba = !1),
    Xt !== null && ii(Xt) && (Xt = null),
    qt !== null && ii(qt) && (qt = null),
    Zt !== null && ii(Zt) && (Zt = null),
    eo.forEach(Tc),
    to.forEach(Tc);
}
function Tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ba ||
      ((Ba = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Hg)));
}
function no(e) {
  function t(o) {
    return Tr(o, e);
  }
  if (0 < Vo.length) {
    Tr(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && Tr(Xt, e),
      qt !== null && Tr(qt, e),
      Zt !== null && Tr(Zt, e),
      eo.forEach(t),
      to.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    Xf(n), n.blockedOn === null && Ht.shift();
}
var tr = $t.ReactCurrentBatchConfig,
  xi = !0;
function Vg(e, t, n, r) {
  var o = ce,
    i = tr.transition;
  tr.transition = null;
  try {
    (ce = 1), Ws(e, t, n, r);
  } finally {
    (ce = o), (tr.transition = i);
  }
}
function Gg(e, t, n, r) {
  var o = ce,
    i = tr.transition;
  tr.transition = null;
  try {
    (ce = 4), Ws(e, t, n, r);
  } finally {
    (ce = o), (tr.transition = i);
  }
}
function Ws(e, t, n, r) {
  if (xi) {
    var o = Ma(e, t, n, r);
    if (o === null) ql(e, t, r, Oi, n), kc(e, r);
    else if (zg(o, e, t, n, r)) r.stopPropagation();
    else if ((kc(e, r), t & 4 && -1 < Ug.indexOf(e))) {
      for (; o !== null; ) {
        var i = _o(o);
        if (
          (i !== null && Vf(i),
          (i = Ma(e, t, n, r)),
          i === null && ql(e, t, r, Oi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var Oi = null;
function Ma(e, t, n, r) {
  if (((Oi = null), (e = zs(r)), (e = gn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Oi = e), null;
}
function qf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ng()) {
        case Hs:
          return 1;
        case jf:
          return 4;
        case Ai:
        case Fg:
          return 16;
        case Uf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null,
  Ys = null,
  li = null;
function Zf() {
  if (li) return li;
  var e,
    t = Ys,
    n = t.length,
    r,
    o = "value" in Gt ? Gt.value : Gt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (li = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Go() {
  return !0;
}
function Dc() {
  return !1;
}
function et(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Go
        : Dc),
      (this.isPropagationStopped = Dc),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Go));
      },
      persist: function () {},
      isPersistent: Go,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xs = et(vr),
  wo = _e({}, vr, { view: 0, detail: 0 }),
  Wg = et(wo),
  jl,
  Ul,
  Dr,
  nl = _e({}, wo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Dr &&
            (Dr && e.type === "mousemove"
              ? ((jl = e.screenX - Dr.screenX), (Ul = e.screenY - Dr.screenY))
              : (Ul = jl = 0),
            (Dr = e)),
          jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ul;
    },
  }),
  Rc = et(nl),
  Yg = _e({}, nl, { dataTransfer: 0 }),
  Xg = et(Yg),
  qg = _e({}, wo, { relatedTarget: 0 }),
  zl = et(qg),
  Zg = _e({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qg = et(Zg),
  Jg = _e({}, vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kg = et(Jg),
  ey = _e({}, vr, { data: 0 }),
  Nc = et(ey),
  ty = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ny = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function oy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
}
function qs() {
  return oy;
}
var iy = _e({}, wo, {
    key: function (e) {
      if (e.key) {
        var t = ty[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ny[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qs,
    charCode: function (e) {
      return e.type === "keypress" ? ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ly = et(iy),
  ay = _e({}, nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fc = et(ay),
  sy = _e({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qs,
  }),
  uy = et(sy),
  cy = _e({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dy = et(cy),
  fy = _e({}, nl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  py = et(fy),
  hy = [9, 13, 27, 32],
  Zs = It && "CompositionEvent" in window,
  Hr = null;
It && "documentMode" in document && (Hr = document.documentMode);
var my = It && "TextEvent" in window && !Hr,
  Qf = It && (!Zs || (Hr && 8 < Hr && 11 >= Hr)),
  Lc = String.fromCharCode(32),
  Ic = !1;
function Jf(e, t) {
  switch (e) {
    case "keyup":
      return hy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function gy(e, t) {
  switch (e) {
    case "compositionend":
      return Kf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ic = !0), Lc);
    case "textInput":
      return (e = t.data), e === Lc && Ic ? null : e;
    default:
      return null;
  }
}
function yy(e, t) {
  if (Un)
    return e === "compositionend" || (!Zs && Jf(e, t))
      ? ((e = Zf()), (li = Ys = Gt = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vy[e.type] : t === "textarea";
}
function ep(e, t, n, r) {
  Rf(r),
    (t = ki(t, "onChange")),
    0 < t.length &&
      ((n = new Xs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vr = null,
  ro = null;
function Ey(e) {
  dp(e, 0);
}
function rl(e) {
  var t = Vn(e);
  if (Af(t)) return e;
}
function wy(e, t) {
  if (e === "change") return t;
}
var tp = !1;
if (It) {
  var Hl;
  if (It) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var Bc = document.createElement("div");
      Bc.setAttribute("oninput", "return;"),
        (Vl = typeof Bc.oninput == "function");
    }
    Hl = Vl;
  } else Hl = !1;
  tp = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Mc() {
  Vr && (Vr.detachEvent("onpropertychange", np), (ro = Vr = null));
}
function np(e) {
  if (e.propertyName === "value" && rl(ro)) {
    var t = [];
    ep(t, ro, e, zs(e)), If(Ey, t);
  }
}
function _y(e, t, n) {
  e === "focusin"
    ? (Mc(), (Vr = t), (ro = n), Vr.attachEvent("onpropertychange", np))
    : e === "focusout" && Mc();
}
function Sy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl(ro);
}
function Cy(e, t) {
  if (e === "click") return rl(t);
}
function Ay(e, t) {
  if (e === "input" || e === "change") return rl(t);
}
function by(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : by;
function oo(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wa.call(t, o) || !yt(e[o], t[o])) return !1;
  }
  return !0;
}
function $c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jc(e, t) {
  var n = $c(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $c(n);
  }
}
function rp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function op() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _i(e.document);
  }
  return t;
}
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function xy(e) {
  var t = op(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = jc(n, i));
        var l = jc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Oy = It && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  $a = null,
  Gr = null,
  ja = !1;
function Uc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ja ||
    zn == null ||
    zn !== _i(r) ||
    ((r = zn),
    "selectionStart" in r && Qs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gr && oo(Gr, r)) ||
      ((Gr = r),
      (r = ki($a, "onSelect")),
      0 < r.length &&
        ((t = new Xs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hn = {
    animationend: Wo("Animation", "AnimationEnd"),
    animationiteration: Wo("Animation", "AnimationIteration"),
    animationstart: Wo("Animation", "AnimationStart"),
    transitionend: Wo("Transition", "TransitionEnd"),
  },
  Gl = {},
  ip = {};
It &&
  ((ip = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function ol(e) {
  if (Gl[e]) return Gl[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ip) return (Gl[e] = t[n]);
  return e;
}
var lp = ol("animationend"),
  ap = ol("animationiteration"),
  sp = ol("animationstart"),
  up = ol("transitionend"),
  cp = new Map(),
  zc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  cp.set(e, t), Tn(t, [e]);
}
for (var Wl = 0; Wl < zc.length; Wl++) {
  var Yl = zc[Wl],
    ky = Yl.toLowerCase(),
    Ty = Yl[0].toUpperCase() + Yl.slice(1);
  ln(ky, "on" + Ty);
}
ln(lp, "onAnimationEnd");
ln(ap, "onAnimationIteration");
ln(sp, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(up, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dy = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Hc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kg(r, t, void 0, e), (e.currentTarget = null);
}
function dp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Hc(o, s, c), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Hc(o, s, c), (i = a);
        }
    }
  }
  if (Ci) throw ((e = Ia), (Ci = !1), (Ia = null), e);
}
function he(e, t) {
  var n = t[Ga];
  n === void 0 && (n = t[Ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fp(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), fp(n, e, r, t);
}
var Yo = "_reactListening" + Math.random().toString(36).slice(2);
function io(e) {
  if (!e[Yo]) {
    (e[Yo] = !0),
      Ef.forEach(function (n) {
        n !== "selectionchange" && (Dy.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yo] || ((t[Yo] = !0), Xl("selectionchange", !1, t));
  }
}
function fp(e, t, n, r) {
  switch (qf(t)) {
    case 1:
      var o = Vg;
      break;
    case 4:
      o = Gg;
      break;
    default:
      o = Ws;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = gn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  If(function () {
    var c = i,
      d = zs(n),
      u = [];
    e: {
      var p = cp.get(e);
      if (p !== void 0) {
        var m = Xs,
          w = e;
        switch (e) {
          case "keypress":
            if (ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = ly;
            break;
          case "focusin":
            (w = "focus"), (m = zl);
            break;
          case "focusout":
            (w = "blur"), (m = zl);
            break;
          case "beforeblur":
          case "afterblur":
            m = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Xg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = uy;
            break;
          case lp:
          case ap:
          case sp:
            m = Qg;
            break;
          case up:
            m = dy;
            break;
          case "scroll":
            m = Wg;
            break;
          case "wheel":
            m = py;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Kg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Fc;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          v = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var f = c, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              v !== null && ((E = Kr(f, v)), E != null && y.push(lo(f, E, h)))),
            x)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((p = new m(p, w, null, n, d)), u.push({ event: p, listeners: y }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Na &&
            (w = n.relatedTarget || n.fromElement) &&
            (gn(w) || w[Pt]))
        )
          break e;
        if (
          (m || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          m
            ? ((w = n.relatedTarget || n.toElement),
              (m = c),
              (w = w ? gn(w) : null),
              w !== null &&
                ((x = Dn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((m = null), (w = c)),
          m !== w)
        ) {
          if (
            ((y = Rc),
            (E = "onMouseLeave"),
            (v = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Fc),
              (E = "onPointerLeave"),
              (v = "onPointerEnter"),
              (f = "pointer")),
            (x = m == null ? p : Vn(m)),
            (h = w == null ? p : Vn(w)),
            (p = new y(E, f + "leave", m, n, d)),
            (p.target = x),
            (p.relatedTarget = h),
            (E = null),
            gn(d) === c &&
              ((y = new y(v, f + "enter", w, n, d)),
              (y.target = h),
              (y.relatedTarget = x),
              (E = y)),
            (x = E),
            m && w)
          )
            t: {
              for (y = m, v = w, f = 0, h = y; h; h = Ln(h)) f++;
              for (h = 0, E = v; E; E = Ln(E)) h++;
              for (; 0 < f - h; ) (y = Ln(y)), f--;
              for (; 0 < h - f; ) (v = Ln(v)), h--;
              for (; f--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = Ln(y)), (v = Ln(v));
              }
              y = null;
            }
          else y = null;
          m !== null && Vc(u, p, m, y, !1),
            w !== null && x !== null && Vc(u, x, w, y, !0);
        }
      }
      e: {
        if (
          ((p = c ? Vn(c) : window),
          (m = p.nodeName && p.nodeName.toLowerCase()),
          m === "select" || (m === "input" && p.type === "file"))
        )
          var C = wy;
        else if (Pc(p))
          if (tp) C = Ay;
          else {
            C = Sy;
            var b = _y;
          }
        else
          (m = p.nodeName) &&
            m.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Cy);
        if (C && (C = C(e, c))) {
          ep(u, C, n, d);
          break e;
        }
        b && b(e, p, c),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            Oa(p, "number", p.value);
      }
      switch (((b = c ? Vn(c) : window), e)) {
        case "focusin":
          (Pc(b) || b.contentEditable === "true") &&
            ((zn = b), ($a = c), (Gr = null));
          break;
        case "focusout":
          Gr = $a = zn = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ja = !1), Uc(u, n, d);
          break;
        case "selectionchange":
          if (Oy) break;
        case "keydown":
        case "keyup":
          Uc(u, n, d);
      }
      var k;
      if (Zs)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Un
          ? Jf(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Qf &&
          n.locale !== "ko" &&
          (Un || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Un && (k = Zf())
            : ((Gt = d),
              (Ys = "value" in Gt ? Gt.value : Gt.textContent),
              (Un = !0))),
        (b = ki(c, O)),
        0 < b.length &&
          ((O = new Nc(O, e, null, n, d)),
          u.push({ event: O, listeners: b }),
          k ? (O.data = k) : ((k = Kf(n)), k !== null && (O.data = k)))),
        (k = my ? gy(e, n) : yy(e, n)) &&
          ((c = ki(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Nc("onBeforeInput", "beforeinput", null, n, d)),
            u.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    dp(u, t);
  });
}
function lo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Kr(e, n)),
      i != null && r.unshift(lo(e, i, o)),
      (i = Kr(e, t)),
      i != null && r.push(lo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((a = Kr(n, i)), a != null && l.unshift(lo(n, a, s)))
        : o || ((a = Kr(n, i)), a != null && l.push(lo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ry = /\r\n?/g,
  Ny = /\u0000|\uFFFD/g;
function Gc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ry,
      `
`
    )
    .replace(Ny, "");
}
function Xo(e, t, n) {
  if (((t = Gc(t)), Gc(e) !== t && n)) throw Error(L(425));
}
function Ti() {}
var Ua = null,
  za = null;
function Ha(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Va = typeof setTimeout == "function" ? setTimeout : void 0,
  Fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wc = typeof Promise == "function" ? Promise : void 0,
  Ly =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wc < "u"
      ? function (e) {
          return Wc.resolve(null).then(e).catch(Iy);
        }
      : Va;
function Iy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), no(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  no(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Yc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + Er,
  ao = "__reactProps$" + Er,
  Pt = "__reactContainer$" + Er,
  Ga = "__reactEvents$" + Er,
  Py = "__reactListeners$" + Er,
  By = "__reactHandles$" + Er;
function gn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yc(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = Yc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _o(e) {
  return (
    (e = e[Ct] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function il(e) {
  return e[ao] || null;
}
var Wa = [],
  Gn = -1;
function an(e) {
  return { current: e };
}
function me(e) {
  0 > Gn || ((e.current = Wa[Gn]), (Wa[Gn] = null), Gn--);
}
function pe(e, t) {
  Gn++, (Wa[Gn] = e.current), (e.current = t);
}
var rn = {},
  Pe = an(rn),
  Ve = an(!1),
  An = rn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Di() {
  me(Ve), me(Pe);
}
function Xc(e, t, n) {
  if (Pe.current !== rn) throw Error(L(168));
  pe(Pe, t), pe(Ve, n);
}
function pp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, _g(e) || "Unknown", o));
  return _e({}, n, r);
}
function Ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (An = Pe.current),
    pe(Pe, e),
    pe(Ve, Ve.current),
    !0
  );
}
function qc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = pp(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      me(Ve),
      me(Pe),
      pe(Pe, e))
    : me(Ve),
    pe(Ve, n);
}
var Rt = null,
  ll = !1,
  Ql = !1;
function hp(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function My(e) {
  (ll = !0), hp(e);
}
function sn() {
  if (!Ql && Rt !== null) {
    Ql = !0;
    var e = 0,
      t = ce;
    try {
      var n = Rt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (ll = !1);
    } catch (o) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), $f(Hs, sn), o);
    } finally {
      (ce = t), (Ql = !1);
    }
  }
  return null;
}
var Wn = [],
  Yn = 0,
  Ni = null,
  Fi = 0,
  nt = [],
  rt = 0,
  bn = null,
  Nt = 1,
  Ft = "";
function fn(e, t) {
  (Wn[Yn++] = Fi), (Wn[Yn++] = Ni), (Ni = e), (Fi = t);
}
function mp(e, t, n) {
  (nt[rt++] = Nt), (nt[rt++] = Ft), (nt[rt++] = bn), (bn = e);
  var r = Nt;
  e = Ft;
  var o = 32 - mt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - mt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Nt = (1 << (32 - mt(t) + o)) | (n << o) | r),
      (Ft = i + e);
  } else (Nt = (1 << i) | (n << o) | r), (Ft = e);
}
function Js(e) {
  e.return !== null && (fn(e, 1), mp(e, 1, 0));
}
function Ks(e) {
  for (; e === Ni; )
    (Ni = Wn[--Yn]), (Wn[Yn] = null), (Fi = Wn[--Yn]), (Wn[Yn] = null);
  for (; e === bn; )
    (bn = nt[--rt]),
      (nt[rt] = null),
      (Ft = nt[--rt]),
      (nt[rt] = null),
      (Nt = nt[--rt]),
      (nt[rt] = null);
}
var Ze = null,
  qe = null,
  ve = !1,
  ft = null;
function gp(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (qe = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bn !== null ? { id: Nt, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ya(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xa(e) {
  if (ve) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Zc(e, t)) {
        if (Ya(e)) throw Error(L(418));
        t = Qt(n.nextSibling);
        var r = Ze;
        t && Zc(e, t)
          ? gp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e));
      }
    } else {
      if (Ya(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e);
    }
  }
}
function Qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function qo(e) {
  if (e !== Ze) return !1;
  if (!ve) return Qc(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ha(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Ya(e)) throw (yp(), Error(L(418)));
    for (; t; ) gp(e, t), (t = Qt(t.nextSibling));
  }
  if ((Qc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ze ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function yp() {
  for (var e = qe; e; ) e = Qt(e.nextSibling);
}
function fr() {
  (qe = Ze = null), (ve = !1);
}
function eu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var $y = $t.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Li = an(null),
  Ii = null,
  Xn = null,
  tu = null;
function nu() {
  tu = Xn = Ii = null;
}
function ru(e) {
  var t = Li.current;
  me(Li), (e._currentValue = t);
}
function qa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nr(e, t) {
  (Ii = e),
    (tu = Xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (He = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (Ii === null) throw Error(L(308));
      (Xn = e), (Ii.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var yn = null;
function ou(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function vp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ou(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function iu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ep(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (re & 2) !== 0)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ou(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function si(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
function Jc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Pi(e, t, n, r) {
  var o = e.updateQueue;
  zt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), l === null ? (i = c) : (l.next = c), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var u = o.baseState;
    (l = 0), (d = c = a = null), (s = i);
    do {
      var p = s.lane,
        m = s.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            y = s;
          switch (((p = t), (m = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                u = w.call(m, u, p);
                break e;
              }
              u = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (p = typeof w == "function" ? w.call(m, u, p) : w),
                p == null)
              )
                break e;
              u = _e({}, u, p);
              break e;
            case 2:
              zt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s));
      } else
        (m = {
          eventTime: m,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = m), (a = u)) : (d = d.next = m),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = u),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (On |= l), (e.lanes = l), (e.memoizedState = u);
  }
}
function Kc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var wp = new vf.Component().refs;
function Za(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = en(e),
      i = Lt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, o)),
      t !== null && (gt(t, e, o, r), si(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = en(e),
      i = Lt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, o)),
      t !== null && (gt(t, e, o, r), si(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = en(e),
      o = Lt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Jt(e, o, r)),
      t !== null && (gt(t, e, r, n), si(t, e, r));
  },
};
function ed(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oo(n, r) || !oo(o, i)
      : !0
  );
}
function _p(e, t, n) {
  var r = !1,
    o = rn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = lt(i))
      : ((o = Ge(t) ? An : Pe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dr(e, o) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function td(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = wp), iu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = lt(i))
    : ((i = Ge(t) ? An : Pe.current), (o.context = dr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Za(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && al.enqueueReplaceState(o, o.state, null),
      Pi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === wp && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Zo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nd(e) {
  var t = e._init;
  return t(e._payload);
}
function Sp(e) {
  function t(v, f) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [f]), (v.flags |= 16)) : h.push(f);
    }
  }
  function n(v, f) {
    if (!e) return null;
    for (; f !== null; ) t(v, f), (f = f.sibling);
    return null;
  }
  function r(v, f) {
    for (v = new Map(); f !== null; )
      f.key !== null ? v.set(f.key, f) : v.set(f.index, f), (f = f.sibling);
    return v;
  }
  function o(v, f) {
    return (v = tn(v, f)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, f, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((v.flags |= 2), f) : h)
            : ((v.flags |= 2), f))
        : ((v.flags |= 1048576), f)
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, f, h, E) {
    return f === null || f.tag !== 6
      ? ((f = oa(h, v.mode, E)), (f.return = v), f)
      : ((f = o(f, h)), (f.return = v), f);
  }
  function a(v, f, h, E) {
    var C = h.type;
    return C === jn
      ? d(v, f, h.props.children, E, h.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ut &&
            nd(C) === f.type))
      ? ((E = o(f, h.props)), (E.ref = Rr(v, f, h)), (E.return = v), E)
      : ((E = hi(h.type, h.key, h.props, null, v.mode, E)),
        (E.ref = Rr(v, f, h)),
        (E.return = v),
        E);
  }
  function c(v, f, h, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ia(h, v.mode, E)), (f.return = v), f)
      : ((f = o(f, h.children || [])), (f.return = v), f);
  }
  function d(v, f, h, E, C) {
    return f === null || f.tag !== 7
      ? ((f = Sn(h, v.mode, E, C)), (f.return = v), f)
      : ((f = o(f, h)), (f.return = v), f);
  }
  function u(v, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = oa("" + f, v.mode, h)), (f.return = v), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case $o:
          return (
            (h = hi(f.type, f.key, f.props, null, v.mode, h)),
            (h.ref = Rr(v, null, f)),
            (h.return = v),
            h
          );
        case $n:
          return (f = ia(f, v.mode, h)), (f.return = v), f;
        case Ut:
          var E = f._init;
          return u(v, E(f._payload), h);
      }
      if (Br(f) || xr(f))
        return (f = Sn(f, v.mode, h, null)), (f.return = v), f;
      Zo(v, f);
    }
    return null;
  }
  function p(v, f, h, E) {
    var C = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : s(v, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $o:
          return h.key === C ? a(v, f, h, E) : null;
        case $n:
          return h.key === C ? c(v, f, h, E) : null;
        case Ut:
          return (C = h._init), p(v, f, C(h._payload), E);
      }
      if (Br(h) || xr(h)) return C !== null ? null : d(v, f, h, E, null);
      Zo(v, h);
    }
    return null;
  }
  function m(v, f, h, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (v = v.get(h) || null), s(f, v, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case $o:
          return (v = v.get(E.key === null ? h : E.key) || null), a(f, v, E, C);
        case $n:
          return (v = v.get(E.key === null ? h : E.key) || null), c(f, v, E, C);
        case Ut:
          var b = E._init;
          return m(v, f, h, b(E._payload), C);
      }
      if (Br(E) || xr(E)) return (v = v.get(h) || null), d(f, v, E, C, null);
      Zo(f, E);
    }
    return null;
  }
  function w(v, f, h, E) {
    for (
      var C = null, b = null, k = f, O = (f = 0), I = null;
      k !== null && O < h.length;
      O++
    ) {
      k.index > O ? ((I = k), (k = null)) : (I = k.sibling);
      var $ = p(v, k, h[O], E);
      if ($ === null) {
        k === null && (k = I);
        break;
      }
      e && k && $.alternate === null && t(v, k),
        (f = i($, f, O)),
        b === null ? (C = $) : (b.sibling = $),
        (b = $),
        (k = I);
    }
    if (O === h.length) return n(v, k), ve && fn(v, O), C;
    if (k === null) {
      for (; O < h.length; O++)
        (k = u(v, h[O], E)),
          k !== null &&
            ((f = i(k, f, O)), b === null ? (C = k) : (b.sibling = k), (b = k));
      return ve && fn(v, O), C;
    }
    for (k = r(v, k); O < h.length; O++)
      (I = m(k, v, O, h[O], E)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? O : I.key),
          (f = i(I, f, O)),
          b === null ? (C = I) : (b.sibling = I),
          (b = I));
    return (
      e &&
        k.forEach(function (V) {
          return t(v, V);
        }),
      ve && fn(v, O),
      C
    );
  }
  function y(v, f, h, E) {
    var C = xr(h);
    if (typeof C != "function") throw Error(L(150));
    if (((h = C.call(h)), h == null)) throw Error(L(151));
    for (
      var b = (C = null), k = f, O = (f = 0), I = null, $ = h.next();
      k !== null && !$.done;
      O++, $ = h.next()
    ) {
      k.index > O ? ((I = k), (k = null)) : (I = k.sibling);
      var V = p(v, k, $.value, E);
      if (V === null) {
        k === null && (k = I);
        break;
      }
      e && k && V.alternate === null && t(v, k),
        (f = i(V, f, O)),
        b === null ? (C = V) : (b.sibling = V),
        (b = V),
        (k = I);
    }
    if ($.done) return n(v, k), ve && fn(v, O), C;
    if (k === null) {
      for (; !$.done; O++, $ = h.next())
        ($ = u(v, $.value, E)),
          $ !== null &&
            ((f = i($, f, O)), b === null ? (C = $) : (b.sibling = $), (b = $));
      return ve && fn(v, O), C;
    }
    for (k = r(v, k); !$.done; O++, $ = h.next())
      ($ = m(k, v, O, $.value, E)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? O : $.key),
          (f = i($, f, O)),
          b === null ? (C = $) : (b.sibling = $),
          (b = $));
    return (
      e &&
        k.forEach(function (D) {
          return t(v, D);
        }),
      ve && fn(v, O),
      C
    );
  }
  function x(v, f, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === jn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case $o:
          e: {
            for (var C = h.key, b = f; b !== null; ) {
              if (b.key === C) {
                if (((C = h.type), C === jn)) {
                  if (b.tag === 7) {
                    n(v, b.sibling),
                      (f = o(b, h.props.children)),
                      (f.return = v),
                      (v = f);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ut &&
                    nd(C) === b.type)
                ) {
                  n(v, b.sibling),
                    (f = o(b, h.props)),
                    (f.ref = Rr(v, b, h)),
                    (f.return = v),
                    (v = f);
                  break e;
                }
                n(v, b);
                break;
              } else t(v, b);
              b = b.sibling;
            }
            h.type === jn
              ? ((f = Sn(h.props.children, v.mode, E, h.key)),
                (f.return = v),
                (v = f))
              : ((E = hi(h.type, h.key, h.props, null, v.mode, E)),
                (E.ref = Rr(v, f, h)),
                (E.return = v),
                (v = E));
          }
          return l(v);
        case $n:
          e: {
            for (b = h.key; f !== null; ) {
              if (f.key === b)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(v, f.sibling),
                    (f = o(f, h.children || [])),
                    (f.return = v),
                    (v = f);
                  break e;
                } else {
                  n(v, f);
                  break;
                }
              else t(v, f);
              f = f.sibling;
            }
            (f = ia(h, v.mode, E)), (f.return = v), (v = f);
          }
          return l(v);
        case Ut:
          return (b = h._init), x(v, f, b(h._payload), E);
      }
      if (Br(h)) return w(v, f, h, E);
      if (xr(h)) return y(v, f, h, E);
      Zo(v, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(v, f.sibling), (f = o(f, h)), (f.return = v), (v = f))
          : (n(v, f), (f = oa(h, v.mode, E)), (f.return = v), (v = f)),
        l(v))
      : n(v, f);
  }
  return x;
}
var pr = Sp(!0),
  Cp = Sp(!1),
  So = {},
  xt = an(So),
  so = an(So),
  uo = an(So);
function vn(e) {
  if (e === So) throw Error(L(174));
  return e;
}
function lu(e, t) {
  switch ((pe(uo, t), pe(so, e), pe(xt, So), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ta(t, e));
  }
  me(xt), pe(xt, t);
}
function hr() {
  me(xt), me(so), me(uo);
}
function Ap(e) {
  vn(uo.current);
  var t = vn(xt.current),
    n = Ta(t, e.type);
  t !== n && (pe(so, e), pe(xt, n));
}
function au(e) {
  so.current === e && (me(xt), me(so));
}
var Ee = an(0);
function Bi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function su() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var ui = $t.ReactCurrentDispatcher,
  Kl = $t.ReactCurrentBatchConfig,
  xn = 0,
  we = null,
  xe = null,
  ke = null,
  Mi = !1,
  Wr = !1,
  co = 0,
  jy = 0;
function Fe() {
  throw Error(L(321));
}
function uu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function cu(e, t, n, r, o, i) {
  if (
    ((xn = i),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ui.current = e === null || e.memoizedState === null ? Vy : Gy),
    (e = n(r, o)),
    Wr)
  ) {
    i = 0;
    do {
      if (((Wr = !1), (co = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (ke = xe = null),
        (t.updateQueue = null),
        (ui.current = Wy),
        (e = n(r, o));
    } while (Wr);
  }
  if (
    ((ui.current = $i),
    (t = xe !== null && xe.next !== null),
    (xn = 0),
    (ke = xe = we = null),
    (Mi = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function du() {
  var e = co !== 0;
  return (co = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (we.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function at() {
  if (xe === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? we.memoizedState : ke.next;
  if (t !== null) (ke = t), (xe = e);
  else {
    if (e === null) throw Error(L(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      ke === null ? (we.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function fo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ea(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = xe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      c = i;
    do {
      var d = c.lane;
      if ((xn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var u = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = u), (l = r)) : (a = a.next = u),
          (we.lanes |= d),
          (On |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (l = r) : (a.next = s),
      yt(r, t.memoizedState) || (He = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (we.lanes |= i), (On |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ta(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    yt(i, t.memoizedState) || (He = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function bp() {}
function xp(e, t) {
  var n = we,
    r = at(),
    o = t(),
    i = !yt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (He = !0)),
    (r = r.queue),
    fu(Tp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      po(9, kp.bind(null, n, r, o, t), void 0, null),
      Te === null)
    )
      throw Error(L(349));
    (xn & 30) !== 0 || Op(n, t, o);
  }
  return o;
}
function Op(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dp(t) && Rp(e);
}
function Tp(e, t, n) {
  return n(function () {
    Dp(t) && Rp(e);
  });
}
function Dp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Rp(e) {
  var t = Bt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function rd(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hy.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function po(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Np() {
  return at().memoizedState;
}
function ci(e, t, n, r) {
  var o = St();
  (we.flags |= e),
    (o.memoizedState = po(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var o = at();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var l = xe.memoizedState;
    if (((i = l.destroy), r !== null && uu(r, l.deps))) {
      o.memoizedState = po(t, n, i, r);
      return;
    }
  }
  (we.flags |= e), (o.memoizedState = po(1 | t, n, i, r));
}
function od(e, t) {
  return ci(8390656, 8, e, t);
}
function fu(e, t) {
  return sl(2048, 8, e, t);
}
function Fp(e, t) {
  return sl(4, 2, e, t);
}
function Lp(e, t) {
  return sl(4, 4, e, t);
}
function Ip(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, Ip.bind(null, t, e), n)
  );
}
function pu() {}
function Bp(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mp(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $p(e, t, n) {
  return (xn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n))
    : (yt(n, t) || ((n = zf()), (we.lanes |= n), (On |= n), (e.baseState = !0)),
      t);
}
function Uy(e, t) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ce = n), (Kl.transition = r);
  }
}
function jp() {
  return at().memoizedState;
}
function zy(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Up(e))
  )
    zp(t, n);
  else if (((n = vp(e, t, n, r)), n !== null)) {
    var o = Me();
    gt(n, e, r, o), Hp(n, t, r);
  }
}
function Hy(e, t, n) {
  var r = en(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Up(e)) zp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), yt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ou(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = vp(e, t, o, r)),
      n !== null && ((o = Me()), gt(n, e, r, o), Hp(n, t, r));
  }
}
function Up(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function zp(e, t) {
  Wr = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hp(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
var $i = {
    readContext: lt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: lt,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: od,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ci(4194308, 4, Ip.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ci(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zy.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rd,
    useDebugValue: pu,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = rd(!1),
        t = e[0];
      return (e = Uy.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        o = St();
      if (ve) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(L(349));
        (xn & 30) !== 0 || Op(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        od(Tp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        po(9, kp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Te.identifierPrefix;
      if (ve) {
        var n = Ft,
          r = Nt;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = co++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gy = {
    readContext: lt,
    useCallback: Bp,
    useContext: lt,
    useEffect: fu,
    useImperativeHandle: Pp,
    useInsertionEffect: Fp,
    useLayoutEffect: Lp,
    useMemo: Mp,
    useReducer: ea,
    useRef: Np,
    useState: function () {
      return ea(fo);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = at();
      return $p(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ea(fo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: bp,
    useSyncExternalStore: xp,
    useId: jp,
    unstable_isNewReconciler: !1,
  },
  Wy = {
    readContext: lt,
    useCallback: Bp,
    useContext: lt,
    useEffect: fu,
    useImperativeHandle: Pp,
    useInsertionEffect: Fp,
    useLayoutEffect: Lp,
    useMemo: Mp,
    useReducer: ta,
    useRef: Np,
    useState: function () {
      return ta(fo);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = at();
      return xe === null ? (t.memoizedState = e) : $p(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ta(fo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: bp,
    useSyncExternalStore: xp,
    useId: jp,
    unstable_isNewReconciler: !1,
  };
function mr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function na(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yy = typeof WeakMap == "function" ? WeakMap : Map;
function Vp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ui || ((Ui = !0), (ss = r)), Ja(e, t);
    }),
    n
  );
}
function Gp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ja(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ja(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function id(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = av.bind(null, e, t, n)), t.then(e, e));
}
function ld(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ad(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var Xy = $t.ReactCurrentOwner,
  He = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Cp(t, null, n, r) : pr(t, e.child, n, r);
}
function sd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    nr(t, o),
    (r = cu(e, t, n, r, i, o)),
    (n = du()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (ve && n && Js(t), (t.flags |= 1), Be(e, t, r, o), t.child)
  );
}
function ud(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !_u(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Wp(e, t, i, r, o))
      : ((e = hi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oo), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (oo(i, r) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (He = !0);
      else return (t.lanes = e.lanes), Mt(e, t, o);
  }
  return Ka(e, t, n, r, o);
}
function Yp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(Zn, Xe),
        (Xe |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(Zn, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        pe(Zn, Xe),
        (Xe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(Zn, Xe),
      (Xe |= r);
  return Be(e, t, o, n), t.child;
}
function Xp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ka(e, t, n, r, o) {
  var i = Ge(n) ? An : Pe.current;
  return (
    (i = dr(t, i)),
    nr(t, o),
    (n = cu(e, t, n, r, i, o)),
    (r = du()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (ve && r && Js(t), (t.flags |= 1), Be(e, t, n, o), t.child)
  );
}
function cd(e, t, n, r, o) {
  if (Ge(n)) {
    var i = !0;
    Ri(t);
  } else i = !1;
  if ((nr(t, o), t.stateNode === null))
    di(e, t), _p(t, n, r), Qa(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = lt(c))
      : ((c = Ge(n) ? An : Pe.current), (c = dr(t, c)));
    var d = n.getDerivedStateFromProps,
      u =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && td(t, l, r, c)),
      (zt = !1);
    var p = t.memoizedState;
    (l.state = p),
      Pi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || p !== a || Ve.current || zt
        ? (typeof d == "function" && (Za(t, n, d, r), (a = t.memoizedState)),
          (s = zt || ed(t, n, s, r, p, a, c))
            ? (u ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Ep(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : ct(t.type, s)),
      (l.props = c),
      (u = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = Ge(n) ? An : Pe.current), (a = dr(t, a)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== u || p !== a) && td(t, l, r, a)),
      (zt = !1),
      (p = t.memoizedState),
      (l.state = p),
      Pi(t, r, l, o);
    var w = t.memoizedState;
    s !== u || p !== w || Ve.current || zt
      ? (typeof m == "function" && (Za(t, n, m, r), (w = t.memoizedState)),
        (c = zt || ed(t, n, c, r, p, w, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return es(e, t, n, r, i, o);
}
function es(e, t, n, r, o, i) {
  Xp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && qc(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (Xy.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, s, i)))
      : Be(e, t, s, i),
    (t.memoizedState = r.state),
    o && qc(t, n, !0),
    t.child
  );
}
function qp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xc(e, t.context, !1),
    lu(e, t.containerInfo);
}
function dd(e, t, n, r, o) {
  return fr(), eu(o), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zp(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(Ee, o & 1),
    e === null)
  )
    return (
      Xa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = dl(l, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ns(n)),
              (t.memoizedState = ts),
              e)
            : hu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return qy(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      (l & 1) === 0 && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = tn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = tn(s, i)) : ((i = Sn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ns(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ts),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tn(i, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hu(e, t) {
  return (
    (t = dl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qo(e, t, n, r) {
  return (
    r !== null && eu(r),
    pr(t, e.child, null, n),
    (e = hu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = na(Error(L(422)))), Qo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = dl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Sn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && pr(t, e.child, null, l),
        (t.child.memoizedState = ns(l)),
        (t.memoizedState = ts),
        i);
  if ((t.mode & 1) === 0) return Qo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(L(419))), (r = na(i, r, void 0)), Qo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), He || s)) {
    if (((r = Te), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Bt(e, o), gt(r, e, o, -1));
    }
    return wu(), (r = na(Error(L(421)))), Qo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (qe = Qt(o.nextSibling)),
      (Ze = t),
      (ve = !0),
      (ft = null),
      e !== null &&
        ((nt[rt++] = Nt),
        (nt[rt++] = Ft),
        (nt[rt++] = bn),
        (Nt = e.id),
        (Ft = e.overflow),
        (bn = t)),
      (t = hu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function ra(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Qp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Be(e, t, r.children, n), (r = Ee.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fd(e, n, t);
        else if (e.tag === 19) fd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(Ee, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Bi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ra(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ra(t, !0, n, null, i);
        break;
      case "together":
        ra(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function di(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zy(e, t, n) {
  switch (t.tag) {
    case 3:
      qp(t), fr();
      break;
    case 5:
      Ap(t);
      break;
    case 1:
      Ge(t.type) && Ri(t);
      break;
    case 4:
      lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      pe(Li, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(Ee, Ee.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Zp(e, t, n)
          : (pe(Ee, Ee.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      pe(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Qp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yp(e, t, n);
  }
  return Mt(e, t, n);
}
var Jp, rs, Kp, e0;
Jp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rs = function () {};
Kp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), vn(xt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ba(e, o)), (r = ba(e, r)), (i = []);
        break;
      case "select":
        (o = _e({}, o, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ka(e, o)), (r = ka(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ti);
    }
    Da(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Qr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Qr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && he("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
e0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Qy(e, t, n) {
  var r = t.pendingProps;
  switch ((Ks(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ge(t.type) && Di(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hr(),
        me(Ve),
        me(Pe),
        su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), ft !== null && (ds(ft), (ft = null)))),
        rs(e, t),
        Le(t),
        null
      );
    case 5:
      au(t);
      var o = vn(uo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Kp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Le(t), null;
        }
        if (((e = vn(xt.current)), qo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ct] = t), (r[ao] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < $r.length; o++) he($r[o], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              _c(r, i), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                he("invalid", r);
              break;
            case "textarea":
              Cc(r, i), he("invalid", r);
          }
          Da(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Qr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              jo(r), Sc(r, i, !0);
              break;
            case "textarea":
              jo(r), Ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ti);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Of(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ct] = t),
            (e[ao] = r),
            Jp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ra(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < $r.length; o++) he($r[o], e);
                o = r;
                break;
              case "source":
                he("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (o = r);
                break;
              case "details":
                he("toggle", e), (o = r);
                break;
              case "input":
                _c(e, r), (o = ba(e, r)), he("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = _e({}, r, { value: void 0 })),
                  he("invalid", e);
                break;
              case "textarea":
                Cc(e, r), (o = ka(e, r)), he("invalid", e);
                break;
              default:
                o = r;
            }
            Da(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Df(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Jr(e, a)
                    : typeof a == "number" && Jr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && he("scroll", e)
                      : a != null && Ms(e, i, a, l));
              }
            switch (n) {
              case "input":
                jo(e), Sc(e, r, !1);
                break;
              case "textarea":
                jo(e), Ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ti);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) e0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = vn(uo.current)), vn(xt.current), qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (me(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          yp(), fr(), (t.flags |= 98560), (i = !1);
        else if (((i = qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[Ct] = t;
          } else
            fr(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Le(t), (i = !1);
        } else ft !== null && (ds(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Ee.current & 1) !== 0
                ? Oe === 0 && (Oe = 3)
                : wu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        hr(), rs(e, t), e === null && io(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return ru(t.type._context), Le(t), null;
    case 17:
      return Ge(t.type) && Di(), Le(t), null;
    case 19:
      if ((me(Ee), (i = t.memoizedState), i === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Nr(i, !1);
        else {
          if (Oe !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = Bi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Nr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ae() > gr &&
            ((t.flags |= 128), (r = !0), Nr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !ve)
            )
              return Le(t), null;
          } else
            2 * Ae() - i.renderingStartTime > gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ae()),
          (t.sibling = null),
          (n = Ee.current),
          pe(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        Eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Xe & 1073741824) !== 0 &&
            (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Jy(e, t) {
  switch ((Ks(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && Di(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hr(),
        me(Ve),
        me(Pe),
        su(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return au(t), null;
    case 13:
      if (
        (me(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        fr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return me(Ee), null;
    case 4:
      return hr(), null;
    case 10:
      return ru(t.type._context), null;
    case 22:
    case 23:
      return Eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jo = !1,
  Ie = !1,
  Ky = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function os(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var pd = !1;
function ev(e, t) {
  if (((Ua = xi), (e = op()), Qs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            c = 0,
            d = 0,
            u = e,
            p = null;
          t: for (;;) {
            for (
              var m;
              u !== n || (o !== 0 && u.nodeType !== 3) || (s = l + o),
                u !== i || (r !== 0 && u.nodeType !== 3) || (a = l + r),
                u.nodeType === 3 && (l += u.nodeValue.length),
                (m = u.firstChild) !== null;

            )
              (p = u), (u = m);
            for (;;) {
              if (u === e) break t;
              if (
                (p === n && ++c === o && (s = l),
                p === i && ++d === r && (a = l),
                (m = u.nextSibling) !== null)
              )
                break;
              (u = p), (p = u.parentNode);
            }
            u = m;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (za = { focusedElem: e, selectionRange: n }, xi = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    x = w.memoizedState,
                    v = t.stateNode,
                    f = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ct(t.type, y),
                      x
                    );
                  v.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Se(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = pd), (pd = !1), w;
}
function Yr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && os(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ul(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function is(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function t0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), t0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[ao], delete t[Ga], delete t[Py], delete t[By])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function n0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || n0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), (e = e.sibling);
}
var De = null,
  dt = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) r0(e, t, n), (n = n.sibling);
}
function r0(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(tl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || qn(n, t);
    case 6:
      var r = De,
        o = dt;
      (De = null),
        jt(e, t, n),
        (De = r),
        (dt = o),
        De !== null &&
          (dt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (dt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            no(e))
          : Zl(De, n.stateNode));
      break;
    case 4:
      (r = De),
        (o = dt),
        (De = n.stateNode.containerInfo),
        (dt = !0),
        jt(e, t, n),
        (De = r),
        (dt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && os(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Se(n, t, s);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), jt(e, t, n), (Ie = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function md(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ky()),
      t.forEach(function (r) {
        var o = uv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (De = s.stateNode), (dt = !1);
              break e;
            case 3:
              (De = s.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (De = s.stateNode.containerInfo), (dt = !0);
              break e;
          }
          s = s.return;
        }
        if (De === null) throw Error(L(160));
        r0(i, l, o), (De = null), (dt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Se(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) o0(t, e), (t = t.sibling);
}
function o0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), wt(e), r & 4)) {
        try {
          Yr(3, e, e.return), ul(3, e);
        } catch (y) {
          Se(e, e.return, y);
        }
        try {
          Yr(5, e, e.return);
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 1:
      ut(t, e), wt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        wt(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Jr(o, "");
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && bf(o, i),
              Ra(s, l);
            var c = Ra(s, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                u = a[l + 1];
              d === "style"
                ? Df(o, u)
                : d === "dangerouslySetInnerHTML"
                ? kf(o, u)
                : d === "children"
                ? Jr(o, u)
                : Ms(o, d, u, c);
            }
            switch (s) {
              case "input":
                xa(o, i);
                break;
              case "textarea":
                xf(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Jn(o, !!i.multiple, m, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jn(o, !!i.multiple, i.defaultValue, !0)
                      : Jn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ao] = i;
          } catch (y) {
            Se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ut(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          no(t.containerInfo);
        } catch (y) {
          Se(e, e.return, y);
        }
      break;
    case 4:
      ut(t, e), wt(e);
      break;
    case 13:
      ut(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (yu = Ae())),
        r & 4 && md(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || d), ut(t, e), (Ie = c)) : ut(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && (e.mode & 1) !== 0)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (u = j = d; j !== null; ) {
              switch (((p = j), (m = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yr(4, p, p.return);
                  break;
                case 1:
                  qn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      Se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  qn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    yd(u);
                    continue;
                  }
              }
              m !== null ? ((m.return = p), (j = m)) : yd(u);
            }
            d = d.sibling;
          }
        e: for (d = null, u = e; ; ) {
          if (u.tag === 5) {
            if (d === null) {
              d = u;
              try {
                (o = u.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = u.stateNode),
                      (a = u.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Tf("display", l)));
              } catch (y) {
                Se(e, e.return, y);
              }
            }
          } else if (u.tag === 6) {
            if (d === null)
              try {
                u.stateNode.nodeValue = c ? "" : u.memoizedProps;
              } catch (y) {
                Se(e, e.return, y);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            (u.child.return = u), (u = u.child);
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            d === u && (d = null), (u = u.return);
          }
          d === u && (d = null), (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), wt(e), r & 4 && md(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (n0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Jr(o, ""), (r.flags &= -33));
          var i = hd(e);
          as(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = hd(e);
          ls(e, s, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tv(e, t, n) {
  (j = e), i0(e);
}
function i0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Jo;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ie;
        s = Jo;
        var c = Ie;
        if (((Jo = l), (Ie = a) && !c))
          for (j = o; j !== null; )
            (l = j),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? vd(o)
                : a !== null
                ? ((a.return = l), (j = a))
                : vd(o);
        for (; i !== null; ) (j = i), i0(i), (i = i.sibling);
        (j = o), (Jo = s), (Ie = c);
      }
      gd(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (j = i))
        : gd(e);
  }
}
function gd(e) {
  for (; j !== null; ) {
    var t = j;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || ul(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Kc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var u = d.dehydrated;
                    u !== null && no(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ie || (t.flags & 512 && is(t));
      } catch (p) {
        Se(t, t.return, p);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function yd(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function vd(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ul(4, t);
          } catch (a) {
            Se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Se(t, o, a);
            }
          }
          var i = t.return;
          try {
            is(t);
          } catch (a) {
            Se(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            is(t);
          } catch (a) {
            Se(t, l, a);
          }
      }
    } catch (a) {
      Se(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (j = s);
      break;
    }
    j = t.return;
  }
}
var nv = Math.ceil,
  ji = $t.ReactCurrentDispatcher,
  mu = $t.ReactCurrentOwner,
  it = $t.ReactCurrentBatchConfig,
  re = 0,
  Te = null,
  be = null,
  Re = 0,
  Xe = 0,
  Zn = an(0),
  Oe = 0,
  ho = null,
  On = 0,
  cl = 0,
  gu = 0,
  Xr = null,
  ze = null,
  yu = 0,
  gr = 1 / 0,
  Dt = null,
  Ui = !1,
  ss = null,
  Kt = null,
  Ko = !1,
  Wt = null,
  zi = 0,
  qr = 0,
  us = null,
  fi = -1,
  pi = 0;
function Me() {
  return (re & 6) !== 0 ? Ae() : fi !== -1 ? fi : (fi = Ae());
}
function en(e) {
  return (e.mode & 1) === 0
    ? 1
    : (re & 2) !== 0 && Re !== 0
    ? Re & -Re
    : $y.transition !== null
    ? (pi === 0 && (pi = zf()), pi)
    : ((e = ce),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qf(e.type))),
      e);
}
function gt(e, t, n, r) {
  if (50 < qr) throw ((qr = 0), (us = null), Error(L(185)));
  Eo(e, n, r),
    ((re & 2) === 0 || e !== Te) &&
      (e === Te && ((re & 2) === 0 && (cl |= n), Oe === 4 && Vt(e, Re)),
      We(e, r),
      n === 1 &&
        re === 0 &&
        (t.mode & 1) === 0 &&
        ((gr = Ae() + 500), ll && sn()));
}
function We(e, t) {
  var n = e.callbackNode;
  $g(e, t);
  var r = bi(e, e === Te ? Re : 0);
  if (r === 0)
    n !== null && Oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oc(n), t === 1))
      e.tag === 0 ? My(Ed.bind(null, e)) : hp(Ed.bind(null, e)),
        Ly(function () {
          (re & 6) === 0 && sn();
        }),
        (n = null);
    else {
      switch (Hf(r)) {
        case 1:
          n = Hs;
          break;
        case 4:
          n = jf;
          break;
        case 16:
          n = Ai;
          break;
        case 536870912:
          n = Uf;
          break;
        default:
          n = Ai;
      }
      n = p0(n, l0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function l0(e, t) {
  if (((fi = -1), (pi = 0), (re & 6) !== 0)) throw Error(L(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = bi(e, e === Te ? Re : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Hi(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = s0();
    (Te !== e || Re !== t) && ((Dt = null), (gr = Ae() + 500), _n(e, t));
    do
      try {
        iv();
        break;
      } catch (s) {
        a0(e, s);
      }
    while (1);
    nu(),
      (ji.current = i),
      (re = o),
      be !== null ? (t = 0) : ((Te = null), (Re = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Pa(e)), o !== 0 && ((r = o), (t = cs(e, o)))), t === 1)
    )
      throw ((n = ho), _n(e, 0), Vt(e, r), We(e, Ae()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !rv(o) &&
          ((t = Hi(e, r)),
          t === 2 && ((i = Pa(e)), i !== 0 && ((r = i), (t = cs(e, i)))),
          t === 1))
      )
        throw ((n = ho), _n(e, 0), Vt(e, r), We(e, Ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          pn(e, ze, Dt);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = yu + 500 - Ae()), 10 < t))
          ) {
            if (bi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Va(pn.bind(null, e, ze, Dt), t);
            break;
          }
          pn(e, ze, Dt);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - mt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * nv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Va(pn.bind(null, e, ze, Dt), r);
            break;
          }
          pn(e, ze, Dt);
          break;
        case 5:
          pn(e, ze, Dt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return We(e, Ae()), e.callbackNode === n ? l0.bind(null, e) : null;
}
function cs(e, t) {
  var n = Xr;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = Hi(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && ds(t)),
    e
  );
}
function ds(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function rv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!yt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~gu,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ed(e) {
  if ((re & 6) !== 0) throw Error(L(327));
  rr();
  var t = bi(e, 0);
  if ((t & 1) === 0) return We(e, Ae()), null;
  var n = Hi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pa(e);
    r !== 0 && ((t = r), (n = cs(e, r)));
  }
  if (n === 1) throw ((n = ho), _n(e, 0), Vt(e, t), We(e, Ae()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pn(e, ze, Dt),
    We(e, Ae()),
    null
  );
}
function vu(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    (re = n), re === 0 && ((gr = Ae() + 500), ll && sn());
  }
}
function kn(e) {
  Wt !== null && Wt.tag === 0 && (re & 6) === 0 && rr();
  var t = re;
  re |= 1;
  var n = it.transition,
    r = ce;
  try {
    if (((it.transition = null), (ce = 1), e)) return e();
  } finally {
    (ce = r), (it.transition = n), (re = t), (re & 6) === 0 && sn();
  }
}
function Eu() {
  (Xe = Zn.current), me(Zn);
}
function _n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fy(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Ks(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Di();
          break;
        case 3:
          hr(), me(Ve), me(Pe), su();
          break;
        case 5:
          au(r);
          break;
        case 4:
          hr();
          break;
        case 13:
          me(Ee);
          break;
        case 19:
          me(Ee);
          break;
        case 10:
          ru(r.type._context);
          break;
        case 22:
        case 23:
          Eu();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (be = e = tn(e.current, null)),
    (Re = Xe = t),
    (Oe = 0),
    (ho = null),
    (gu = cl = On = 0),
    (ze = Xr = null),
    yn !== null)
  ) {
    for (t = 0; t < yn.length; t++)
      if (((n = yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    yn = null;
  }
  return e;
}
function a0(e, t) {
  do {
    var n = be;
    try {
      if ((nu(), (ui.current = $i), Mi)) {
        for (var r = we.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (
        ((xn = 0),
        (ke = xe = we = null),
        (Wr = !1),
        (co = 0),
        (mu.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (ho = t), (be = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = Re),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = s,
            u = d.tag;
          if ((d.mode & 1) === 0 && (u === 0 || u === 11 || u === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = ld(l);
          if (m !== null) {
            (m.flags &= -257),
              ad(m, l, s, i, t),
              m.mode & 1 && id(i, c, t),
              (t = m),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              id(i, c, t), wu();
              break e;
            }
            a = Error(L(426));
          }
        } else if (ve && s.mode & 1) {
          var x = ld(l);
          if (x !== null) {
            (x.flags & 65536) === 0 && (x.flags |= 256),
              ad(x, l, s, i, t),
              eu(mr(a, s));
            break e;
          }
        }
        (i = a = mr(a, s)),
          Oe !== 4 && (Oe = 2),
          Xr === null ? (Xr = [i]) : Xr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = Vp(i, a, t);
              Jc(i, v);
              break e;
            case 1:
              s = a;
              var f = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = Gp(i, s, t);
                Jc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      c0(n);
    } catch (C) {
      (t = C), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function s0() {
  var e = ji.current;
  return (ji.current = $i), e === null ? $i : e;
}
function wu() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Te === null ||
      ((On & 268435455) === 0 && (cl & 268435455) === 0) ||
      Vt(Te, Re);
}
function Hi(e, t) {
  var n = re;
  re |= 2;
  var r = s0();
  (Te !== e || Re !== t) && ((Dt = null), _n(e, t));
  do
    try {
      ov();
      break;
    } catch (o) {
      a0(e, o);
    }
  while (1);
  if ((nu(), (re = n), (ji.current = r), be !== null)) throw Error(L(261));
  return (Te = null), (Re = 0), Oe;
}
function ov() {
  for (; be !== null; ) u0(be);
}
function iv() {
  for (; be !== null && !Dg(); ) u0(be);
}
function u0(e) {
  var t = f0(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? c0(e) : (be = t),
    (mu.current = null);
}
function c0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Qy(n, t, Xe)), n !== null)) {
        be = n;
        return;
      }
    } else {
      if (((n = Jy(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (be = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function pn(e, t, n) {
  var r = ce,
    o = it.transition;
  try {
    (it.transition = null), (ce = 1), lv(e, t, n, r);
  } finally {
    (it.transition = o), (ce = r);
  }
  return null;
}
function lv(e, t, n, r) {
  do rr();
  while (Wt !== null);
  if ((re & 6) !== 0) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (jg(e, i),
    e === Te && ((be = Te = null), (Re = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Ko ||
      ((Ko = !0),
      p0(Ai, function () {
        return rr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var l = ce;
    ce = 1;
    var s = re;
    (re |= 4),
      (mu.current = null),
      ev(e, n),
      o0(n, e),
      xy(za),
      (xi = !!Ua),
      (za = Ua = null),
      (e.current = n),
      tv(n),
      Rg(),
      (re = s),
      (ce = l),
      (it.transition = i);
  } else e.current = n;
  if (
    (Ko && ((Ko = !1), (Wt = e), (zi = o)),
    (i = e.pendingLanes),
    i === 0 && (Kt = null),
    Lg(n.stateNode),
    We(e, Ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ui) throw ((Ui = !1), (e = ss), (ss = null), e);
  return (
    (zi & 1) !== 0 && e.tag !== 0 && rr(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === us ? qr++ : ((qr = 0), (us = e))) : (qr = 0),
    sn(),
    null
  );
}
function rr() {
  if (Wt !== null) {
    var e = Hf(zi),
      t = it.transition,
      n = ce;
    try {
      if (((it.transition = null), (ce = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (zi = 0), (re & 6) !== 0))
          throw Error(L(331));
        var o = re;
        for (re |= 4, j = e.current; j !== null; ) {
          var i = j,
            l = i.child;
          if ((j.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (j = c; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yr(8, d, i);
                  }
                  var u = d.child;
                  if (u !== null) (u.return = d), (j = u);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var p = d.sibling,
                        m = d.return;
                      if ((t0(d), d === c)) {
                        j = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = m), (j = p);
                        break;
                      }
                      j = m;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              j = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null)
            (l.return = i), (j = l);
          else
            e: for (; j !== null; ) {
              if (((i = j), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yr(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (j = v);
                break e;
              }
              j = i.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          l = j;
          var h = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = l), (j = h);
          else
            e: for (l = f; j !== null; ) {
              if (((s = j), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ul(9, s);
                  }
                } catch (C) {
                  Se(s, s.return, C);
                }
              if (s === l) {
                j = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (j = E);
                break e;
              }
              j = s.return;
            }
        }
        if (
          ((re = o), sn(), bt && typeof bt.onPostCommitFiberRoot == "function")
        )
          try {
            bt.onPostCommitFiberRoot(tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (it.transition = t);
    }
  }
  return !1;
}
function wd(e, t, n) {
  (t = mr(n, t)),
    (t = Vp(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = Me()),
    e !== null && (Eo(e, 1, t), We(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) wd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = mr(n, e)),
            (e = Gp(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = Me()),
            t !== null && (Eo(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Re & n) === n &&
      (Oe === 4 || (Oe === 3 && (Re & 130023424) === Re && 500 > Ae() - yu)
        ? _n(e, 0)
        : (gu |= n)),
    We(e, t);
}
function d0(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Ho), (Ho <<= 1), (Ho & 130023424) === 0 && (Ho = 4194304)));
  var n = Me();
  (e = Bt(e, t)), e !== null && (Eo(e, t, n), We(e, n));
}
function sv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), d0(e, n);
}
function uv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), d0(e, n);
}
var f0;
f0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) He = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (He = !1), Zy(e, t, n);
      He = (e.flags & 131072) !== 0;
    }
  else (He = !1), ve && (t.flags & 1048576) !== 0 && mp(t, Fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      di(e, t), (e = t.pendingProps);
      var o = dr(t, Pe.current);
      nr(t, n), (o = cu(null, t, r, e, o, n));
      var i = du();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((i = !0), Ri(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            iu(t),
            (o.updater = al),
            (t.stateNode = o),
            (o._reactInternals = t),
            Qa(t, r, e, n),
            (t = es(null, t, r, !0, i, n)))
          : ((t.tag = 0), ve && i && Js(t), Be(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (di(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dv(r)),
          (e = ct(r, e)),
          o)
        ) {
          case 0:
            t = Ka(null, t, r, e, n);
            break e;
          case 1:
            t = cd(null, t, r, e, n);
            break e;
          case 11:
            t = sd(null, t, r, e, n);
            break e;
          case 14:
            t = ud(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        Ka(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        cd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((qp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ep(e, t),
          Pi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = mr(Error(L(423)), t)), (t = dd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = mr(Error(L(424)), t)), (t = dd(e, t, r, n, o));
            break e;
          } else
            for (
              qe = Qt(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ve = !0,
                ft = null,
                n = Cp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fr(), r === o)) {
            t = Mt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ap(t),
        e === null && Xa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ha(r, o) ? (l = null) : i !== null && Ha(r, i) && (t.flags |= 32),
        Xp(e, t),
        Be(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Xa(t), null;
    case 13:
      return Zp(e, t, n);
    case 4:
      return (
        lu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        sd(e, t, r, o, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          pe(Li, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (yt(i.value, l)) {
            if (i.children === o.children && !Ve.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Lt(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      qa(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(L(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  qa(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Be(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (o = lt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ct(r, t.pendingProps)),
        (o = ct(r.type, o)),
        ud(e, t, r, o, n)
      );
    case 15:
      return Wp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        di(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), Ri(t)) : (e = !1),
        nr(t, n),
        _p(t, r, o),
        Qa(t, r, o, n),
        es(null, t, r, !0, e, n)
      );
    case 19:
      return Qp(e, t, n);
    case 22:
      return Yp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function p0(e, t) {
  return $f(e, t);
}
function cv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new cv(e, t, n, r);
}
function _u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dv(e) {
  if (typeof e == "function") return _u(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === js)) return 11;
    if (e === Us) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) _u(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case jn:
        return Sn(n.children, o, i, t);
      case $s:
        (l = 8), (o |= 8);
        break;
      case _a:
        return (
          (e = ot(12, n, t, o | 2)), (e.elementType = _a), (e.lanes = i), e
        );
      case Sa:
        return (e = ot(13, n, t, o)), (e.elementType = Sa), (e.lanes = i), e;
      case Ca:
        return (e = ot(19, n, t, o)), (e.elementType = Ca), (e.lanes = i), e;
      case Sf:
        return dl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wf:
              l = 10;
              break e;
            case _f:
              l = 9;
              break e;
            case js:
              l = 11;
              break e;
            case Us:
              l = 14;
              break e;
            case Ut:
              (l = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Sn(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = Sf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oa(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function ia(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function fv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new fv(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    iu(i),
    e
  );
}
function pv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function h0(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return pp(e, n, t);
  }
  return t;
}
function m0(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Su(n, r, !0, e, o, i, l, s, a)),
    (e.context = h0(null)),
    (n = e.current),
    (r = Me()),
    (o = en(n)),
    (i = Lt(r, o)),
    (i.callback = t != null ? t : null),
    Jt(n, i, o),
    (e.current.lanes = o),
    Eo(e, o, r),
    We(e, r),
    e
  );
}
function fl(e, t, n, r) {
  var o = t.current,
    i = Me(),
    l = en(o);
  return (
    (n = h0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(o, t, l)),
    e !== null && (gt(e, o, l, i), si(e, o, l)),
    l
  );
}
function Vi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _d(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cu(e, t) {
  _d(e, t), (e = e.alternate) && _d(e, t);
}
function hv() {
  return null;
}
var g0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Au(e) {
  this._internalRoot = e;
}
pl.prototype.render = Au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  fl(e, t, null, null);
};
pl.prototype.unmount = Au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function () {
      fl(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && Xf(e);
  }
};
function bu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sd() {}
function mv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Vi(l);
        i.call(c);
      };
    }
    var l = m0(t, r, e, 0, null, !1, !1, "", Sd);
    return (
      (e._reactRootContainer = l),
      (e[Pt] = l.current),
      io(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Vi(a);
      s.call(c);
    };
  }
  var a = Su(e, 0, !1, null, null, !1, !1, "", Sd);
  return (
    (e._reactRootContainer = a),
    (e[Pt] = a.current),
    io(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      fl(t, a, n, r);
    }),
    a
  );
}
function ml(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Vi(l);
        s.call(a);
      };
    }
    fl(t, l, e, o);
  } else l = mv(n, t, e, o, r);
  return Vi(l);
}
Vf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 &&
          (Vs(t, n | 1),
          We(t, Ae()),
          (re & 6) === 0 && ((gr = Ae() + 500), sn()));
      }
      break;
    case 13:
      kn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var o = Me();
          gt(r, e, 1, o);
        }
      }),
        Cu(e, 1);
  }
};
Gs = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Me();
      gt(t, e, 134217728, n);
    }
    Cu(e, 134217728);
  }
};
Gf = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Me();
      gt(n, e, t, r);
    }
    Cu(e, t);
  }
};
Wf = function () {
  return ce;
};
Yf = function (e, t) {
  var n = ce;
  try {
    return (ce = e), t();
  } finally {
    ce = n;
  }
};
Fa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = il(r);
            if (!o) throw Error(L(90));
            Af(r), xa(r, o);
          }
        }
      }
      break;
    case "textarea":
      xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jn(e, !!n.multiple, t, !1);
  }
};
Ff = vu;
Lf = kn;
var gv = { usingClientEntryPoint: !1, Events: [_o, Vn, il, Rf, Nf, vu] },
  Fr = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  yv = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || hv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ei.isDisabled && ei.supportsFiber)
    try {
      (tl = ei.inject(yv)), (bt = ei);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bu(t)) throw Error(L(200));
  return pv(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!bu(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = g0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pt] = t.current),
    io(e.nodeType === 8 ? e.parentNode : e),
    new Au(t)
  );
};
Ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Bf(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return kn(e);
};
Ke.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(L(200));
  return ml(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!bu(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = g0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = m0(t, null, e, 1, n != null ? n : null, o, !1, i, l)),
    (e[Pt] = t.current),
    io(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new pl(t);
};
Ke.render = function (e, t, n) {
  if (!hl(t)) throw Error(L(200));
  return ml(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (kn(function () {
        ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = vu;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ml(e, t, n, !1, r);
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ke);
})(vo);
var y0,
  Gi,
  Cd = vo.exports;
(Gi = wi.createRoot = Cd.createRoot), (y0 = wi.hydrateRoot = Cd.hydrateRoot);
const vv = F2(
  {
    __proto__: null,
    get createRoot() {
      return Gi;
    },
    get hydrateRoot() {
      return y0;
    },
    default: wi,
  },
  [wi]
);
var xu = {},
  Co = {},
  Ou = { exports: {} },
  Ev = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  wv = Ev,
  _v = wv;
function v0() {}
function E0() {}
E0.resetWarningCache = v0;
var Sv = function () {
  function e(r, o, i, l, s, a) {
    if (a !== _v) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: E0,
    resetWarningCache: v0,
  };
  return (n.PropTypes = n), n;
};
Ou.exports = Sv();
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.FrameContextConsumer =
  ht.FrameContextProvider =
  ht.useFrame =
  ht.FrameContext =
    void 0;
var Cv = A.exports,
  w0 = Av(Cv);
function Av(e) {
  return e && e.__esModule ? e : { default: e };
}
var _0 = void 0,
  S0 = void 0;
typeof document < "u" && (_0 = document);
typeof window < "u" && (S0 = window);
var ku = (ht.FrameContext = w0.default.createContext({
  document: _0,
  window: S0,
}));
ht.useFrame = function () {
  return w0.default.useContext(ku);
};
var bv = ku.Provider,
  xv = ku.Consumer;
ht.FrameContextProvider = bv;
ht.FrameContextConsumer = xv;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
var Ov = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  fs = A.exports;
C0(fs);
var kv = Ou.exports,
  la = C0(kv);
function C0(e) {
  return e && e.__esModule ? e : { default: e };
}
function Tv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dv(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Rv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var A0 = (function (e) {
  Rv(t, e);
  function t() {
    return (
      Tv(this, t),
      Dv(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    Ov(t, [
      {
        key: "componentDidMount",
        value: function () {
          this.props.contentDidMount();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.props.contentDidUpdate();
        },
      },
      {
        key: "render",
        value: function () {
          return fs.Children.only(this.props.children);
        },
      },
    ]),
    t
  );
})(fs.Component);
A0.propTypes = {
  children: la.default.element.isRequired,
  contentDidMount: la.default.func.isRequired,
  contentDidUpdate: la.default.func.isRequired,
};
Tu.default = A0;
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.Frame = void 0;
var ps =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Nv = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  b0 = A.exports,
  mn = gl(b0),
  Fv = vo.exports,
  Ad = gl(Fv),
  Lv = Ou.exports,
  _t = gl(Lv),
  Iv = ht,
  Pv = Tu,
  Bv = gl(Pv);
function gl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $v(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function jv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Du = (Co.Frame = (function (e) {
  jv(t, e);
  function t(n, r) {
    Mv(this, t);
    var o = $v(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
    );
    return (
      (o.setRef = function (i) {
        o.nodeRef.current = i;
        var l = o.props.forwardedRef;
        typeof l == "function" ? l(i) : l && (l.current = i);
      }),
      (o.handleLoad = function () {
        o.setState({ iframeLoaded: !0 });
      }),
      (o._isMounted = !1),
      (o.nodeRef = mn.default.createRef()),
      (o.state = { iframeLoaded: !1 }),
      o
    );
  }
  return (
    Nv(t, [
      {
        key: "componentDidMount",
        value: function () {
          this._isMounted = !0;
          var r = this.getDoc();
          r && r.readyState === "complete"
            ? this.forceUpdate()
            : this.nodeRef.current.addEventListener("load", this.handleLoad);
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          (this._isMounted = !1),
            this.nodeRef.current.removeEventListener("load", this.handleLoad);
        },
      },
      {
        key: "getDoc",
        value: function () {
          return this.nodeRef.current
            ? this.nodeRef.current.contentDocument
            : null;
        },
      },
      {
        key: "getMountTarget",
        value: function () {
          var r = this.getDoc();
          return this.props.mountTarget
            ? r.querySelector(this.props.mountTarget)
            : r.body.children[0];
        },
      },
      {
        key: "renderFrameContents",
        value: function () {
          if (!this._isMounted) return null;
          var r = this.getDoc();
          if (!r) return null;
          var o = this.props.contentDidMount,
            i = this.props.contentDidUpdate,
            l = r.defaultView || r.parentView,
            s = mn.default.createElement(
              Bv.default,
              { contentDidMount: o, contentDidUpdate: i },
              mn.default.createElement(
                Iv.FrameContextProvider,
                { value: { document: r, window: l } },
                mn.default.createElement(
                  "div",
                  { className: "frame-content" },
                  this.props.children
                )
              )
            ),
            a = this.getMountTarget();
          return [
            Ad.default.createPortal(this.props.head, this.getDoc().head),
            Ad.default.createPortal(s, a),
          ];
        },
      },
      {
        key: "render",
        value: function () {
          var r = ps({}, this.props, {
            srcDoc: this.props.initialContent,
            children: void 0,
          });
          return (
            delete r.head,
            delete r.initialContent,
            delete r.mountTarget,
            delete r.contentDidMount,
            delete r.contentDidUpdate,
            delete r.forwardedRef,
            mn.default.createElement(
              "iframe",
              ps({}, r, { ref: this.setRef, onLoad: this.handleLoad }),
              this.state.iframeLoaded && this.renderFrameContents()
            )
          );
        },
      },
    ]),
    t
  );
})(b0.Component));
Du.propTypes = {
  style: _t.default.object,
  head: _t.default.node,
  initialContent: _t.default.string,
  mountTarget: _t.default.string,
  contentDidMount: _t.default.func,
  contentDidUpdate: _t.default.func,
  children: _t.default.oneOfType([
    _t.default.element,
    _t.default.arrayOf(_t.default.element),
  ]),
};
Du.defaultProps = {
  style: {},
  head: null,
  children: void 0,
  mountTarget: void 0,
  contentDidMount: function () {},
  contentDidUpdate: function () {},
  initialContent:
    '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
};
Co.default = mn.default.forwardRef(function (e, t) {
  return mn.default.createElement(Du, ps({}, e, { forwardedRef: t }));
});
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Co;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function () {
      return r(t).default;
    },
  });
  var n = ht;
  Object.defineProperty(e, "FrameContext", {
    enumerable: !0,
    get: function () {
      return n.FrameContext;
    },
  }),
    Object.defineProperty(e, "FrameContextConsumer", {
      enumerable: !0,
      get: function () {
        return n.FrameContextConsumer;
      },
    }),
    Object.defineProperty(e, "useFrame", {
      enumerable: !0,
      get: function () {
        return n.useFrame;
      },
    });
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(xu);
const Uv = Jd(xu);
class zv extends A.exports.Component {
  constructor(t) {
    super(t), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch() {}
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
function hs() {
  return (
    (Ot =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ot.apply(this, arguments)
  );
}
function Ru(e, t, n) {
  return (
    (n = {
      path: t,
      exports: {},
      require: function (r, o) {
        return Hv(r, o == null ? n.path : o);
      },
    }),
    e(n, n.exports),
    n.exports
  );
}
function Hv() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
let or;
typeof window < "u"
  ? (or = window)
  : typeof self < "u"
  ? (or = self)
  : (or = {});
or.setTimeout;
or.clearTimeout;
function Ao() {}
const Lr = or.performance || {};
Lr.now || Lr.mozNow || Lr.msNow || Lr.oNow || Lr.webkitNow;
const Vv = function (e, t) {
    let n;
    const r = toObject(e);
    let o;
    for (let i = 1; i < arguments.length; i++) {
      n = Object(arguments[i]);
      for (const l in n) hasOwnProperty.call(n, l) && (r[l] = n[l]);
      if (getOwnPropertySymbols) {
        o = getOwnPropertySymbols(n);
        for (let l = 0; l < o.length; l++)
          propIsEnumerable.call(n, o[l]) && (r[o[l]] = n[o[l]]);
      }
    }
    return r;
  },
  Gv = O0() ? A.exports.useLayoutEffect : A.exports.useEffect,
  bd = {};
let x0 = Ao;
x0 = function (t) {
  bd[t] || (bd[t] = !0);
};
function Wv(e, t) {
  if (e != null)
    if (Xv(e)) e(t);
    else
      try {
        e.current = t;
      } catch {
        throw new Error('Cannot assign value "' + t + '" to ref "' + e + '"');
      }
}
function O0() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function yl(e) {
  return A.exports.forwardRef(e);
}
function Yv(e) {
  return O0() ? (e ? e.ownerDocument : document) : null;
}
function Xv(e) {
  return !!(e && {}.toString.call(e) == "[object Function]");
}
function qv(e) {
  return typeof e == "string";
}
let k0 = Ao;
k0 = function (t) {
  const n = A.exports.useRef(t);
  A.exports.useEffect(
    function () {
      return void (n.current = t);
    },
    [t]
  ),
    A.exports.useEffect(function () {
      return x0(n.current);
    }, []);
};
function Zv() {
  const e = A.exports.useState(Object.create(null)),
    t = e[1];
  return A.exports.useCallback(function () {
    t(Object.create(null));
  }, []);
}
function Qv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return A.exports.useMemo(function () {
    return t.every(function (r) {
      return r == null;
    })
      ? null
      : function (r) {
          t.forEach(function (o) {
            Wv(o, r);
          });
        };
  }, [].concat(t));
}
function mi(e, t) {
  return function (n) {
    if ((e && e(n), !n.defaultPrevented)) return t(n);
  };
}
const T0 = function (t) {
  const n = t.children,
    r = t.type,
    o = r === void 0 ? "reach-portal" : r,
    i = A.exports.useRef(null),
    l = A.exports.useRef(null),
    s = Zv();
  return (
    Gv(
      function () {
        if (!i.current) return;
        const a = i.current.ownerDocument;
        return (
          (l.current = a == null ? void 0 : a.createElement(o)),
          a.body.appendChild(l.current),
          s(),
          function () {
            l.current &&
              l.current.ownerDocument &&
              l.current.ownerDocument.body.removeChild(l.current);
          }
        );
      },
      [o, s]
    ),
    l.current
      ? vo.exports.createPortal(n, l.current)
      : A.exports.createElement("span", { ref: i })
  );
};
T0.displayName = "Portal";
function Jv(e, t) {
  if (e == null) return {};
  const n = {},
    r = Object.keys(e);
  let o, i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Kv = Ru(function (e, t) {
    (function () {
      const n = typeof Symbol == "function" && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        d = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        m = n ? Symbol.for("react.suspense") : 60113,
        w = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        x = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        f = n ? Symbol.for("react.fundamental") : 60117,
        h = n ? Symbol.for("react.responder") : 60118,
        E = n ? Symbol.for("react.scope") : 60119;
      function C(Y) {
        return (
          typeof Y == "string" ||
          typeof Y == "function" ||
          Y === i ||
          Y === u ||
          Y === s ||
          Y === l ||
          Y === m ||
          Y === w ||
          (typeof Y == "object" &&
            Y !== null &&
            (Y.$$typeof === x ||
              Y.$$typeof === y ||
              Y.$$typeof === a ||
              Y.$$typeof === c ||
              Y.$$typeof === p ||
              Y.$$typeof === f ||
              Y.$$typeof === h ||
              Y.$$typeof === E ||
              Y.$$typeof === v))
        );
      }
      function b(Y) {
        if (typeof Y == "object" && Y !== null) {
          const Sr = Y.$$typeof;
          switch (Sr) {
            case r:
              var Rn = Y.type;
              switch (Rn) {
                case d:
                case u:
                case i:
                case s:
                case l:
                case m:
                  return Rn;
                default:
                  var ko = Rn && Rn.$$typeof;
                  switch (ko) {
                    case c:
                    case p:
                    case x:
                    case y:
                    case a:
                      return ko;
                    default:
                      return Sr;
                  }
              }
            case o:
              return Sr;
          }
        }
      }
      const k = d,
        O = u,
        I = c,
        $ = a,
        V = r,
        D = p,
        M = i,
        G = x,
        H = y,
        W = o,
        q = s,
        R = l,
        P = m;
      let B = !1;
      function X(Y) {
        return (
          B ||
            ((B = !0),
            console.warn(
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
            )),
          Q(Y) || b(Y) === d
        );
      }
      function Q(Y) {
        return b(Y) === u;
      }
      function Z(Y) {
        return b(Y) === c;
      }
      function ae(Y) {
        return b(Y) === a;
      }
      function st(Y) {
        return typeof Y == "object" && Y !== null && Y.$$typeof === r;
      }
      function de(Y) {
        return b(Y) === p;
      }
      function Ue(Y) {
        return b(Y) === i;
      }
      function Et(Y) {
        return b(Y) === x;
      }
      function bo(Y) {
        return b(Y) === y;
      }
      function _r(Y) {
        return b(Y) === o;
      }
      function xo(Y) {
        return b(Y) === s;
      }
      function Oo(Y) {
        return b(Y) === l;
      }
      function _l(Y) {
        return b(Y) === m;
      }
      (t.AsyncMode = k),
        (t.ConcurrentMode = O),
        (t.ContextConsumer = I),
        (t.ContextProvider = $),
        (t.Element = V),
        (t.ForwardRef = D),
        (t.Fragment = M),
        (t.Lazy = G),
        (t.Memo = H),
        (t.Portal = W),
        (t.Profiler = q),
        (t.StrictMode = R),
        (t.Suspense = P),
        (t.isAsyncMode = X),
        (t.isConcurrentMode = Q),
        (t.isContextConsumer = Z),
        (t.isContextProvider = ae),
        (t.isElement = st),
        (t.isForwardRef = de),
        (t.isFragment = Ue),
        (t.isLazy = Et),
        (t.isMemo = bo),
        (t.isPortal = _r),
        (t.isProfiler = xo),
        (t.isStrictMode = Oo),
        (t.isSuspense = _l),
        (t.isValidElementType = C),
        (t.typeOf = b);
    })();
  }),
  D0 = Ru(function (e) {
    e.exports = Kv;
  }),
  eE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  hn = eE;
let ms = function () {};
{
  var tE = hn,
    gs = {},
    nE = Function.call.bind(Object.prototype.hasOwnProperty);
  ms = function (e) {
    const t = "Warning: " + e;
    typeof console < "u" && console.error(t);
    try {
      throw new Error(t);
    } catch {}
  };
}
function R0(e, t, n, r, o) {
  for (const l in e)
    if (nE(e, l)) {
      var i;
      try {
        if (typeof e[l] != "function") {
          const s = Error(
            (r || "React class") +
              ": " +
              n +
              " type `" +
              l +
              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
              typeof e[l] +
              "`."
          );
          throw ((s.name = "Invariant Violation"), s);
        }
        i = e[l](t, l, r, n, null, tE);
      } catch (s) {
        i = s;
      }
      if (
        (i &&
          !(i instanceof Error) &&
          ms(
            (r || "React class") +
              ": type specification of " +
              n +
              " `" +
              l +
              "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
              typeof i +
              ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ),
        i instanceof Error && !(i.message in gs))
      ) {
        gs[i.message] = !0;
        const s = o ? o() : "";
        ms("Failed " + n + " type: " + i.message + (s != null ? s : ""));
      }
    }
}
R0.resetWarningCache = function () {
  gs = {};
};
const xd = R0,
  rE = Function.call.bind(Object.prototype.hasOwnProperty);
let Bn = function () {};
Bn = function (e) {
  const t = "Warning: " + e;
  typeof console < "u" && console.error(t);
  try {
    throw new Error(t);
  } catch {}
};
function ti() {
  return null;
}
const oE = function (e, t) {
    const n = typeof Symbol == "function" && Symbol.iterator,
      r = "@@iterator";
    function o(D) {
      const M = D && ((n && D[n]) || D[r]);
      if (typeof M == "function") return M;
    }
    const i = "<<anonymous>>",
      l = {
        array: d("array"),
        bool: d("boolean"),
        func: d("function"),
        number: d("number"),
        object: d("object"),
        string: d("string"),
        symbol: d("symbol"),
        any: u(),
        arrayOf: p,
        element: m(),
        elementType: w(),
        instanceOf: y,
        node: h(),
        objectOf: v,
        oneOf: x,
        oneOfType: f,
        shape: E,
        exact: C,
      };
    function s(D, M) {
      return D === M ? D !== 0 || 1 / D === 1 / M : D !== D && M !== M;
    }
    function a(D) {
      (this.message = D), (this.stack = "");
    }
    a.prototype = Error.prototype;
    function c(D) {
      var M = {},
        G = 0;
      function H(q, R, P, B, X, Q, Z) {
        if (((B = B || i), (Q = Q || P), Z !== hn)) {
          if (t) {
            const ae = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((ae.name = "Invariant Violation"), ae);
          } else if (typeof console < "u") {
            const ae = B + ":" + P;
            !M[ae] &&
              G < 3 &&
              (Bn(
                "You are manually calling a React.PropTypes validation function for the `" +
                  Q +
                  "` prop on `" +
                  B +
                  "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ),
              (M[ae] = !0),
              G++);
          }
        }
        return R[P] == null
          ? q
            ? R[P] === null
              ? new a(
                  "The " +
                    X +
                    " `" +
                    Q +
                    "` is marked as required " +
                    ("in `" + B + "`, but its value is `null`.")
                )
              : new a(
                  "The " +
                    X +
                    " `" +
                    Q +
                    "` is marked as required in " +
                    ("`" + B + "`, but its value is `undefined`.")
                )
            : null
          : D(R, P, B, X, Q);
      }
      const W = H.bind(null, !1);
      return (W.isRequired = H.bind(null, !0)), W;
    }
    function d(D) {
      function M(G, H, W, q, R, P) {
        const B = G[H];
        if (O(B) !== D) {
          const Q = I(B);
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type " +
              ("`" + Q + "` supplied to `" + W + "`, expected ") +
              ("`" + D + "`.")
          );
        }
        return null;
      }
      return c(M);
    }
    function u() {
      return c(ti);
    }
    function p(D) {
      function M(G, H, W, q, R) {
        if (typeof D != "function")
          return new a(
            "Property `" +
              R +
              "` of component `" +
              W +
              "` has invalid PropType notation inside arrayOf."
          );
        const P = G[H];
        if (!Array.isArray(P)) {
          const B = O(P);
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected an array.")
          );
        }
        for (let B = 0; B < P.length; B++) {
          const X = D(P, B, W, q, R + "[" + B + "]", hn);
          if (X instanceof Error) return X;
        }
        return null;
      }
      return c(M);
    }
    function m() {
      function D(M, G, H, W, q) {
        const R = M[G];
        if (!e(R)) {
          const P = O(R);
          return new a(
            "Invalid " +
              W +
              " `" +
              q +
              "` of type " +
              ("`" +
                P +
                "` supplied to `" +
                H +
                "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return c(D);
    }
    function w() {
      function D(M, G, H, W, q) {
        const R = M[G];
        if (!D0.isValidElementType(R)) {
          const P = O(R);
          return new a(
            "Invalid " +
              W +
              " `" +
              q +
              "` of type " +
              ("`" +
                P +
                "` supplied to `" +
                H +
                "`, expected a single ReactElement type.")
          );
        }
        return null;
      }
      return c(D);
    }
    function y(D) {
      function M(G, H, W, q, R) {
        if (!(G[H] instanceof D)) {
          const P = D.name || i,
            B = V(G[H]);
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected ") +
              ("instance of `" + P + "`.")
          );
        }
        return null;
      }
      return c(M);
    }
    function x(D) {
      if (!Array.isArray(D))
        return (
          arguments.length > 1
            ? Bn(
                "Invalid arguments supplied to oneOf, expected an array, got " +
                  arguments.length +
                  " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              )
            : Bn("Invalid argument supplied to oneOf, expected an array."),
          ti
        );
      function M(G, H, W, q, R) {
        const P = G[H];
        for (let X = 0; X < D.length; X++) if (s(P, D[X])) return null;
        const B = JSON.stringify(D, function (Q, Z) {
          return I(Z) === "symbol" ? String(Z) : Z;
        });
        return new a(
          "Invalid " +
            q +
            " `" +
            R +
            "` of value `" +
            String(P) +
            "` " +
            ("supplied to `" + W + "`, expected one of " + B + ".")
        );
      }
      return c(M);
    }
    function v(D) {
      function M(G, H, W, q, R) {
        if (typeof D != "function")
          return new a(
            "Property `" +
              R +
              "` of component `" +
              W +
              "` has invalid PropType notation inside objectOf."
          );
        const P = G[H],
          B = O(P);
        if (B !== "object")
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected an object.")
          );
        for (const X in P)
          if (rE(P, X)) {
            const Q = D(P, X, W, q, R + "." + X, hn);
            if (Q instanceof Error) return Q;
          }
        return null;
      }
      return c(M);
    }
    function f(D) {
      if (!Array.isArray(D))
        return (
          Bn(
            "Invalid argument supplied to oneOfType, expected an instance of array."
          ),
          ti
        );
      for (let G = 0; G < D.length; G++) {
        const H = D[G];
        if (typeof H != "function")
          return (
            Bn(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                $(H) +
                " at index " +
                G +
                "."
            ),
            ti
          );
      }
      function M(G, H, W, q, R) {
        for (let P = 0; P < D.length; P++) {
          const B = D[P];
          if (B(G, H, W, q, R, hn) == null) return null;
        }
        return new a(
          "Invalid " + q + " `" + R + "` supplied to " + ("`" + W + "`.")
        );
      }
      return c(M);
    }
    function h() {
      function D(M, G, H, W, q) {
        return b(M[G])
          ? null
          : new a(
              "Invalid " +
                W +
                " `" +
                q +
                "` supplied to " +
                ("`" + H + "`, expected a ReactNode.")
            );
      }
      return c(D);
    }
    function E(D) {
      function M(G, H, W, q, R) {
        const P = G[H],
          B = O(P);
        if (B !== "object")
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type `" +
              B +
              "` " +
              ("supplied to `" + W + "`, expected `object`.")
          );
        for (const X in D) {
          const Q = D[X];
          if (!Q) continue;
          const Z = Q(P, X, W, q, R + "." + X, hn);
          if (Z) return Z;
        }
        return null;
      }
      return c(M);
    }
    function C(D) {
      function M(G, H, W, q, R) {
        const P = G[H],
          B = O(P);
        if (B !== "object")
          return new a(
            "Invalid " +
              q +
              " `" +
              R +
              "` of type `" +
              B +
              "` " +
              ("supplied to `" + W + "`, expected `object`.")
          );
        const X = Vv({}, G[H], D);
        for (const Q in X) {
          const Z = D[Q];
          if (!Z)
            return new a(
              "Invalid " +
                q +
                " `" +
                R +
                "` key `" +
                Q +
                "` supplied to `" +
                W +
                "`.\nBad object: " +
                JSON.stringify(G[H], null, "  ") +
                `
Valid keys: ` +
                JSON.stringify(Object.keys(D), null, "  ")
            );
          const ae = Z(P, Q, W, q, R + "." + Q, hn);
          if (ae) return ae;
        }
        return null;
      }
      return c(M);
    }
    function b(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D)) return D.every(b);
          if (D === null || e(D)) return !0;
          var M = o(D);
          if (M) {
            const G = M.call(D);
            let H;
            if (M !== D.entries) {
              for (; !(H = G.next()).done; ) if (!b(H.value)) return !1;
            } else
              for (; !(H = G.next()).done; ) {
                const W = H.value;
                if (W && !b(W[1])) return !1;
              }
          } else return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(D, M) {
      return D === "symbol"
        ? !0
        : M
        ? M["@@toStringTag"] === "Symbol" ||
          (typeof Symbol == "function" && M instanceof Symbol)
        : !1;
    }
    function O(D) {
      const M = typeof D;
      return Array.isArray(D)
        ? "array"
        : D instanceof RegExp
        ? "object"
        : k(M, D)
        ? "symbol"
        : M;
    }
    function I(D) {
      if (typeof D > "u" || D === null) return "" + D;
      const M = O(D);
      if (M === "object") {
        if (D instanceof Date) return "date";
        if (D instanceof RegExp) return "regexp";
      }
      return M;
    }
    function $(D) {
      const M = I(D);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function V(D) {
      return !D.constructor || !D.constructor.name ? i : D.constructor.name;
    }
    return (
      (l.checkPropTypes = xd),
      (l.resetWarningCache = xd.resetWarningCache),
      (l.PropTypes = l),
      l
    );
  },
  ie = Ru(function (e) {
    {
      const t = D0,
        n = !0;
      e.exports = oE(t.isElement, n);
    }
  }),
  ys = "data-focus-lock",
  N0 = "data-focus-lock-disabled",
  iE = "data-no-focus-lock",
  lE = "data-autofocus-inside";
function aE(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function sE(e, t) {
  var n = A.exports.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          const o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function F0(e, t) {
  return sE(t, function (n) {
    return e.forEach(function (r) {
      return aE(r, n);
    });
  });
}
const aa = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px",
};
ie.node;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Wi =
  function () {
    return (
      (Wi =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (const i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Wi.apply(this, arguments)
    );
  };
function uE(e, t) {
  const n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function L0(e) {
  return e;
}
function I0(e, t) {
  t === void 0 && (t = L0);
  let n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw new Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (i) {
      const l = t(i, r);
      return (
        n.push(l),
        function () {
          n = n.filter(function (s) {
            return s !== l;
          });
        }
      );
    },
    assignSyncMedium: function (i) {
      for (r = !0; n.length; ) {
        const l = n;
        (n = []), l.forEach(i);
      }
      n = {
        push: function (l) {
          return i(l);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (i) {
      r = !0;
      let l = [];
      if (n.length) {
        const c = n;
        (n = []), c.forEach(i), (l = n);
      }
      const s = function () {
          const c = l;
          (l = []), c.forEach(i);
        },
        a = function () {
          return Promise.resolve().then(s);
        };
      a(),
        (n = {
          push: function (c) {
            l.push(c), a();
          },
          filter: function (c) {
            return (l = l.filter(c)), n;
          },
        });
    },
  };
}
function Nu(e, t) {
  return t === void 0 && (t = L0), I0(e, t);
}
function P0(e) {
  e === void 0 && (e = {});
  const t = I0(null);
  return (t.options = Wi({ async: !0, ssr: !1 }, e)), t;
}
const B0 = function (e) {
  const t = e.sideCar,
    n = uE(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  const r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return A.exports.createElement(r, Wi({}, n));
};
B0.isSideCarExport = !0;
function cE(e, t) {
  return e.useMedium(t), B0;
}
const M0 = Nu({}, function (e) {
    const t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  $0 = Nu(),
  dE = Nu(),
  fE = P0({ async: !0 }),
  pE = [],
  vl = A.exports.forwardRef(function (t, n) {
    let r;
    const o = A.exports.useState(),
      i = o[0],
      l = o[1],
      s = A.exports.useRef(),
      a = A.exports.useRef(!1),
      c = A.exports.useRef(null),
      d = t.children,
      u = t.disabled,
      p = t.noFocusGuards,
      m = t.persistentFocus,
      w = t.crossFrame,
      y = t.autoFocus,
      x = t.allowTextSelection,
      v = t.group,
      f = t.className,
      h = t.whiteList,
      E = t.shards,
      C = E === void 0 ? pE : E,
      b = t.as,
      k = b === void 0 ? "div" : b,
      O = t.lockProps,
      I = O === void 0 ? {} : O,
      $ = t.sideCar,
      V = t.returnFocus,
      D = t.onActivation,
      M = t.onDeactivation,
      G = A.exports.useState({}),
      H = G[0],
      W = A.exports.useCallback(
        function () {
          (c.current = c.current || (document && document.activeElement)),
            s.current && D && D(s.current),
            (a.current = !0);
        },
        [D]
      ),
      q = A.exports.useCallback(
        function () {
          (a.current = !1), M && M(s.current);
        },
        [M]
      ),
      R = A.exports.useCallback(
        function (de) {
          const Ue = c.current;
          if (Boolean(V) && Ue && Ue.focus) {
            const Et = typeof V == "object" ? V : void 0;
            (c.current = null),
              de
                ? Promise.resolve().then(function () {
                    return Ue.focus(Et);
                  })
                : Ue.focus(Et);
          }
        },
        [V]
      ),
      P = A.exports.useCallback(function (de) {
        a.current && M0.useMedium(de);
      }, []),
      B = $0.useMedium,
      X = A.exports.useCallback(function (de) {
        s.current !== de && ((s.current = de), l(de));
      }, []);
    typeof x < "u" &&
      console.warn(
        "React-Focus-Lock: allowTextSelection is deprecated and enabled by default"
      ),
      A.exports.useEffect(function () {
        s.current ||
          console.error("FocusLock: could not obtain ref to internal node");
      }, []);
    const Q = hs(((r = {}), (r[N0] = u && "disabled"), (r[ys] = v), r), I),
      Z = p !== !0,
      ae = Z && p !== "tail",
      st = F0([n, X]);
    return A.exports.createElement(
      A.exports.Fragment,
      null,
      Z && [
        A.exports.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: u ? -1 : 0,
          style: aa,
        }),
        A.exports.createElement("div", {
          key: "guard-nearest",
          "data-focus-guard": !0,
          tabIndex: u ? -1 : 1,
          style: aa,
        }),
      ],
      !u &&
        A.exports.createElement($, {
          id: H,
          sideCar: fE,
          observed: i,
          disabled: u,
          persistentFocus: m,
          crossFrame: w,
          autoFocus: y,
          whiteList: h,
          shards: C,
          onActivation: W,
          onDeactivation: q,
          returnFocus: R,
        }),
      A.exports.createElement(
        k,
        hs({ ref: st }, Q, { className: f, onBlur: B, onFocus: P }),
        d
      ),
      ae &&
        A.exports.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: u ? -1 : 0,
          style: aa,
        })
    );
  });
vl.propTypes = {
  children: ie.node,
  disabled: ie.bool,
  returnFocus: ie.oneOfType([ie.bool, ie.object]),
  noFocusGuards: ie.bool,
  allowTextSelection: ie.bool,
  autoFocus: ie.bool,
  persistentFocus: ie.bool,
  crossFrame: ie.bool,
  group: ie.string,
  className: ie.string,
  whiteList: ie.func,
  shards: ie.arrayOf(ie.any),
  as: ie.oneOfType([ie.string, ie.func, ie.object]),
  lockProps: ie.object,
  onActivation: ie.func,
  onDeactivation: ie.func,
  sideCar: ie.any.isRequired,
};
vl.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
function vs(e, t) {
  return (
    (vs =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    vs(e, t)
  );
}
function hE(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    vs(e, t);
}
function mE(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gE(e, t) {
  {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    if (typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    const i = [];
    let l;
    function s() {
      (l = e(
        i.map(function (c) {
          return c.props;
        })
      )),
        t(l);
    }
    const a = (function (c) {
      hE(d, c);
      function d() {
        return c.apply(this, arguments) || this;
      }
      d.peek = function () {
        return l;
      };
      const u = d.prototype;
      return (
        (u.componentDidMount = function () {
          i.push(this), s();
        }),
        (u.componentDidUpdate = function () {
          s();
        }),
        (u.componentWillUnmount = function () {
          const m = i.indexOf(this);
          i.splice(m, 1), s();
        }),
        (u.render = function () {
          return A.exports.createElement(o, this.props);
        }),
        d
      );
    })(A.exports.PureComponent);
    return mE(a, "displayName", "SideEffect(" + n(o) + ")"), a;
  };
}
const on = function (e) {
    const t = Array(e.length);
    for (let n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Es = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  yE = function (e) {
    const t = new Set(),
      n = e.length;
    for (let r = 0; r < n; r += 1)
      for (let o = r + 1; o < n; o += 1) {
        const i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (r, o) {
      return !t.has(o);
    });
  };
var j0 = function (e) {
  return e.parentNode ? j0(e.parentNode) : e;
};
const Fu = function (e) {
    return Es(e)
      .filter(Boolean)
      .reduce(function (n, r) {
        const o = r.getAttribute(ys);
        return (
          n.push.apply(
            n,
            o
              ? yE(
                  on(
                    j0(r).querySelectorAll(
                      "[" + ys + '="' + o + '"]:not([' + N0 + '="disabled"])'
                    )
                  )
                )
              : [r]
          ),
          n
        );
      }, []);
  },
  vE = function (e) {
    return !e || !e.getPropertyValue
      ? !1
      : e.getPropertyValue("display") === "none" ||
          e.getPropertyValue("visibility") === "hidden";
  };
var U0 = function (e) {
  return (
    !e ||
    e === document ||
    (e && e.nodeType === Node.DOCUMENT_NODE) ||
    (!vE(window.getComputedStyle(e, null)) &&
      U0(
        e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? e.parentNode.host
          : e.parentNode
      ))
  );
};
const EE = function (e) {
    return !(
      (e.tagName === "INPUT" || e.tagName === "BUTTON") &&
      (e.type === "hidden" || e.disabled)
    );
  },
  Lu = function (e) {
    return Boolean(e && e.dataset && e.dataset.focusGuard);
  },
  Yi = function (e) {
    return !Lu(e);
  },
  wE = function (e) {
    return Boolean(e);
  },
  _E = function (e, t) {
    const n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  z0 = function (e, t, n) {
    return on(e)
      .map(function (r, o) {
        return {
          node: r,
          index: o,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(_E);
  },
  SE = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  ws = SE.join(","),
  CE = ws + ", [data-focus-guard]",
  Iu = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(
        on(r.querySelectorAll(t ? CE : ws)),
        r.parentNode
          ? on(r.parentNode.querySelectorAll(ws)).filter(function (o) {
              return o === r;
            })
          : []
      );
    }, []);
  },
  AE = function (e) {
    const t = e.querySelectorAll("[" + lE + "]");
    return on(t)
      .map(function (n) {
        return Iu([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  Pu = function (e) {
    return on(e)
      .filter(function (t) {
        return U0(t);
      })
      .filter(function (t) {
        return EE(t);
      });
  },
  _s = function (e, t) {
    return z0(Pu(Iu(e, t)), !0, t);
  },
  Od = function (e) {
    return z0(Pu(Iu(e)), !1);
  },
  bE = function (e) {
    return Pu(AE(e));
  };
var Ss = function (e, t) {
  return (
    t === void 0 && (t = []), t.push(e), e.parentNode && Ss(e.parentNode, t), t
  );
};
const sa = function (e, t) {
    const n = Ss(e),
      r = Ss(t);
    for (let o = 0; o < n.length; o += 1) {
      const i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  H0 = function (e, t, n) {
    const r = Es(e),
      o = Es(t),
      i = r[0];
    let l = !1;
    return (
      o.filter(Boolean).forEach(function (s) {
        (l = sa(l || s, s) || l),
          n.filter(Boolean).forEach(function (a) {
            const c = sa(i, a);
            c && (!l || c.contains(l) ? (l = c) : (l = sa(c, l)));
          });
      }),
      l
    );
  },
  xE = function (e) {
    return e.reduce(function (t, n) {
      return t.concat(bE(n));
    }, []);
  },
  OE = function (e) {
    const t = Fu(e).filter(Yi),
      n = H0(e, e, t),
      r = _s([n], !0),
      o = _s(t)
        .filter(function (i) {
          const l = i.node;
          return Yi(l);
        })
        .map(function (i) {
          return i.node;
        });
    return r.map(function (i) {
      const l = i.node,
        s = i.index;
      return { node: l, index: s, lockItem: o.indexOf(l) >= 0, guard: Lu(l) };
    });
  },
  kE = function (e) {
    return e === document.activeElement;
  },
  TE = function (e) {
    return Boolean(
      on(e.querySelectorAll("iframe")).some(function (t) {
        return kE(t);
      })
    );
  },
  V0 = function (e) {
    const t = document && document.activeElement;
    return !t || (t.dataset && t.dataset.focusGuard)
      ? !1
      : Fu(e).reduce(function (n, r) {
          return n || r.contains(t) || TE(r);
        }, !1);
  },
  DE = function () {
    return (
      document &&
      on(document.querySelectorAll("[" + iE + "]")).some(function (e) {
        return e.contains(document.activeElement);
      })
    );
  },
  G0 = function (e) {
    return e.tagName === "INPUT" && e.type === "radio";
  },
  RE = function (e, t) {
    return (
      t
        .filter(G0)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Bu = function (e, t) {
    return G0(e) && e.name ? RE(e, t) : e;
  },
  NE = function (e) {
    const t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Bu(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  kd = function (e) {
    return e[0] && e.length > 1 ? Bu(e[0], e) : e[0];
  },
  Td = function (e, t) {
    return e.length > 1 ? e.indexOf(Bu(e[t], e)) : t;
  },
  W0 = "NEW_FOCUS",
  FE = function (e, t, n, r) {
    const o = e.length,
      i = e[0],
      l = e[o - 1],
      s = Lu(n);
    if (e.indexOf(n) >= 0) return;
    const a = t.indexOf(n),
      c = r ? t.indexOf(r) : a,
      d = r ? e.indexOf(r) : -1,
      u = a - c,
      p = t.indexOf(i),
      m = t.indexOf(l),
      w = NE(t),
      y = w.indexOf(n) - (r ? w.indexOf(r) : a),
      x = Td(e, 0),
      v = Td(e, o - 1);
    if (a === -1 || d === -1) return W0;
    if (!u && d >= 0) return d;
    if (a <= p && s && Math.abs(u) > 1) return v;
    if (a >= m && s && Math.abs(u) > 1) return x;
    if (u && Math.abs(y) > 1) return d;
    if (a <= p) return v;
    if (a > m) return x;
    if (u) return Math.abs(u) > 1 ? d : (o + d + u) % o;
  },
  LE = function (e) {
    return function (t) {
      return (
        t.autofocus || (t.dataset && !!t.dataset.autofocus) || e.indexOf(t) >= 0
      );
    };
  },
  IE = function (e, t) {
    const n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(wE)
    );
  },
  PE = function (e, t) {
    const n = document && document.activeElement,
      r = Fu(e).filter(Yi),
      o = H0(n || e, e, r),
      i = Od(r);
    let l = _s(r).filter(function (u) {
      const p = u.node;
      return Yi(p);
    });
    if (!l[0] && ((l = i), !l[0])) return;
    const s = Od([o]).map(function (u) {
        return u.node;
      }),
      a = IE(s, l),
      c = a.map(function (u) {
        return u.node;
      }),
      d = FE(c, s, n, t);
    if (d === W0) {
      const u = i
        .map(function (p) {
          return p.node;
        })
        .filter(LE(xE(r)));
      return { node: u && u.length ? kd(u) : kd(c) };
    }
    return d === void 0 ? d : a[d];
  },
  BE = function (e) {
    e.focus(),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  };
let ua = 0,
  ca = !1;
const Y0 = function (e, t) {
  const n = PE(e, t);
  if (!ca && n) {
    if (ua > 2) {
      console.error(
        "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
      ),
        (ca = !0),
        setTimeout(function () {
          ca = !1;
        }, 1);
      return;
    }
    ua++, BE(n.node), ua--;
  }
};
function X0(e) {
  const t = window,
    n = t.setImmediate;
  typeof n < "u" ? n(e) : setTimeout(e, 1);
}
const ME = function () {
    return document && document.activeElement === document.body;
  },
  $E = function () {
    return ME() || DE();
  };
let ir = null,
  Qn = null,
  lr = null,
  mo = !1;
const jE = function () {
    return !0;
  },
  UE = function (t) {
    return (ir.whiteList || jE)(t);
  },
  zE = function (t, n) {
    lr = { observerNode: t, portaledElement: n };
  },
  HE = function (t) {
    return lr && lr.portaledElement === t;
  };
function Dd(e, t, n, r) {
  let o = null,
    i = e;
  do {
    const l = r[i];
    if (l.guard) l.node.dataset.focusAutoGuard && (o = l);
    else if (l.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
const VE = function (t) {
    return t && "current" in t ? t.current : t;
  },
  GE = function (t) {
    return t ? Boolean(mo) : mo === "meanwhile";
  },
  Xi = function () {
    let t = !1;
    if (ir) {
      const n = ir,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        l = n.shards,
        s = n.crossFrame,
        a = r || (lr && lr.portaledElement),
        c = document && document.activeElement;
      if (a) {
        const d = [a].concat(l.map(VE).filter(Boolean));
        if (
          ((!c || UE(c)) &&
            (o || GE(s) || !$E() || (!Qn && i)) &&
            (a &&
              !(V0(d) || HE(c)) &&
              (document && !Qn && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = Y0(d, Qn)), (lr = {}))),
            (mo = !1),
            (Qn = document && document.activeElement)),
          document)
        ) {
          const u = document && document.activeElement,
            p = OE(d),
            m = p
              .map(function (w) {
                return w.node;
              })
              .indexOf(u);
          m > -1 &&
            (p
              .filter(function (w) {
                const y = w.guard,
                  x = w.node;
                return y && x.dataset.focusAutoGuard;
              })
              .forEach(function (w) {
                return w.node.removeAttribute("tabIndex");
              }),
            Dd(m, p.length, 1, p),
            Dd(m, -1, -1, p));
        }
      }
    }
    return t;
  },
  q0 = function (t) {
    Xi() && t && (t.stopPropagation(), t.preventDefault());
  },
  Mu = function () {
    return X0(Xi);
  },
  WE = function (t) {
    const n = t.target,
      r = t.currentTarget;
    r.contains(n) || zE(r, n);
  },
  YE = function () {
    return null;
  };
ie.node.isRequired;
const Z0 = function () {
    (mo = "just"),
      setTimeout(function () {
        mo = "meanwhile";
      }, 0);
  },
  XE = function () {
    document.addEventListener("focusin", q0, !0),
      document.addEventListener("focusout", Mu),
      window.addEventListener("blur", Z0);
  },
  qE = function () {
    document.removeEventListener("focusin", q0, !0),
      document.removeEventListener("focusout", Mu),
      window.removeEventListener("blur", Z0);
  };
function ZE(e) {
  return e.filter(function (t) {
    return !t.disabled;
  });
}
function QE(e) {
  const t = e.slice(-1)[0];
  t && !ir && XE();
  const n = ir,
    r = n && t && t.id === n.id;
  (ir = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        return o.id === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Qn = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        Xi(),
        X0(Xi))
      : (qE(), (Qn = null));
}
M0.assignSyncMedium(WE);
$0.assignMedium(Mu);
dE.assignMedium(function (e) {
  return e({ moveFocusInside: Y0, focusInside: V0 });
});
const JE = gE(ZE, QE)(YE),
  Q0 = A.exports.forwardRef(function (t, n) {
    return A.exports.createElement(vl, hs({ sideCar: JE, ref: n }, t));
  }),
  J0 = vl.propTypes || {};
J0.sideCar;
const KE = Jv(J0, ["sideCar"]);
Q0.propTypes = KE;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var ar =
  function () {
    return (
      (ar =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (const i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      ar.apply(this, arguments)
    );
  };
function e1(e, t) {
  const n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
const gi = "right-scroll-bar-position",
  yi = "width-before-scroll-bar",
  t1 = "with-scroll-bars-hidden",
  n1 = "--removed-body-scroll-bar-size",
  K0 = P0(),
  da = function () {},
  El = A.exports.forwardRef(function (e, t) {
    const n = A.exports.useRef(null),
      r = A.exports.useState({
        onScrollCapture: da,
        onWheelCapture: da,
        onTouchMoveCapture: da,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      a = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      u = e.shards,
      p = e.sideCar,
      m = e.noIsolation,
      w = e.inert,
      y = e.allowPinchZoom,
      x = e.as,
      v = x === void 0 ? "div" : x,
      f = e1(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      h = p,
      E = F0([n, t]),
      C = ar({}, f, o);
    return A.exports.createElement(
      A.exports.Fragment,
      null,
      d &&
        A.exports.createElement(h, {
          sideCar: K0,
          removeScrollBar: c,
          shards: u,
          noIsolation: m,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!y,
          lockRef: n,
        }),
      l
        ? A.exports.cloneElement(
            A.exports.Children.only(s),
            ar({}, C, { ref: E })
          )
        : A.exports.createElement(v, ar({}, C, { className: a, ref: E }), s)
    );
  });
El.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
El.classNames = { fullWidth: yi, zeroRight: gi };
const r1 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function o1() {
  if (!document) return null;
  const e = document.createElement("style");
  e.type = "text/css";
  const t = r1();
  return t && e.setAttribute("nonce", t), e;
}
function i1(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function l1(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
const a1 = function () {
    let e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = o1()) && (i1(t, n), l1(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  s1 = function () {
    const e = a1();
    return function (t) {
      A.exports.useEffect(function () {
        return (
          e.add(t),
          function () {
            e.remove();
          }
        );
      }, []);
    };
  },
  eh = function () {
    const e = s1();
    return function (n) {
      const r = n.styles;
      return e(r), null;
    };
  },
  u1 = { left: 0, top: 0, right: 0, gap: 0 },
  fa = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  c1 = function (e) {
    const t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [fa(n), fa(r), fa(o)];
  },
  Rd = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return u1;
    const t = c1(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  d1 = eh(),
  f1 = function (e, t, n, r) {
    const o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .` +
        t1 +
        ` {
   overflow: hidden ` +
        r +
        `;
   padding-right: ` +
        s +
        "px " +
        r +
        `;
  }
  body {
    overflow: hidden ` +
        r +
        `;
    ` +
        [
          t && "position: relative " + r + ";",
          n === "margin" &&
            `
    padding-left: ` +
              o +
              `px;
    padding-top: ` +
              i +
              `px;
    padding-right: ` +
              l +
              `px;
    margin-left:0;
    margin-top:0;
    margin-right: ` +
              s +
              "px " +
              r +
              `;
    `,
          n === "padding" && "padding-right: " + s + "px " + r + ";",
        ]
          .filter(Boolean)
          .join("") +
        `
  }
  
  .` +
        gi +
        ` {
    right: ` +
        s +
        "px " +
        r +
        `;
  }
  
  .` +
        yi +
        ` {
    margin-right: ` +
        s +
        "px " +
        r +
        `;
  }
  
  .` +
        gi +
        " ." +
        gi +
        ` {
    right: 0 ` +
        r +
        `;
  }
  
  .` +
        yi +
        " ." +
        yi +
        ` {
    margin-right: 0 ` +
        r +
        `;
  }
  
  body {
    ` +
        n1 +
        ": " +
        s +
        `px;
  }
`
    );
  },
  p1 = function (e) {
    const t = A.exports.useState(Rd(e.gapMode)),
      n = t[0],
      r = t[1];
    A.exports.useEffect(
      function () {
        r(Rd(e.gapMode));
      },
      [e.gapMode]
    );
    const o = e.noRelative,
      i = e.noImportant,
      l = e.gapMode,
      s = l === void 0 ? "margin" : l;
    return A.exports.createElement(d1, {
      styles: f1(n, !o, s, i ? "" : "!important"),
    });
  },
  h1 = function (e) {
    const t = window.getComputedStyle(e);
    return (
      t.overflowY !== "hidden" &&
      !(t.overflowY === t.overflowX && t.overflowY === "visible")
    );
  },
  m1 = function (e) {
    const t = window.getComputedStyle(e);
    return (
      t.overflowX !== "hidden" &&
      !(t.overflowY === t.overflowX && t.overflowX === "visible")
    );
  },
  Nd = function (e, t) {
    let n = t;
    do {
      if (th(e, n)) {
        const o = nh(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  g1 = function (e) {
    const t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  y1 = function (e) {
    const t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  };
var th = function (e, t) {
    return e === "v" ? h1(t) : m1(t);
  },
  nh = function (e, t) {
    return e === "v" ? g1(t) : y1(t);
  };
const v1 = function (e, t, n, r, o) {
  const i = r;
  let l = n.target;
  const s = t.contains(l);
  let a = !1;
  const c = i > 0;
  let d = 0,
    u = 0;
  do {
    const p = nh(e, l),
      m = p[0],
      w = p[1],
      y = p[2],
      x = w - y - m;
    (m || x) && th(e, l) && ((d += x), (u += m)), (l = l.parentNode);
  } while ((!s && l !== document.body) || (s && (t.contains(l) || t === l)));
  return (
    ((c && ((o && d === 0) || (!o && i > d))) ||
      (!c && ((o && u === 0) || (!o && -i > u)))) &&
      (a = !0),
    a
  );
};
let Cs = !1;
if (typeof window < "u")
  try {
    const e = Object.defineProperty({}, "passive", {
      get: function () {
        return (Cs = !0), !0;
      },
    });
    window.addEventListener("test", e, e),
      window.removeEventListener("test", e, e);
  } catch {
    Cs = !1;
  }
const In = Cs ? { passive: !1 } : !1,
  ni = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Fd = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ld = function (e) {
    return e && "current" in e ? e.current : e;
  },
  E1 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  w1 = function (e) {
    return (
      `
  .block-interactivity-` +
      e +
      ` {pointer-events: none;}
  .allow-interactivity-` +
      e +
      ` {pointer-events: all;}
`
    );
  };
let _1 = 0,
  Pn = [];
function S1(e) {
  const t = A.exports.useRef([]),
    n = A.exports.useRef([0, 0]),
    r = A.exports.useRef(),
    o = A.exports.useState(_1++)[0],
    i = A.exports.useState(function () {
      return eh();
    })[0],
    l = A.exports.useRef(e);
  A.exports.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    A.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-" + o);
          const y = [e.lockRef.current]
            .concat((e.shards || []).map(Ld))
            .filter(Boolean);
          return (
            y.forEach(function (x) {
              return x.classList.add("allow-interactivity-" + o);
            }),
            function () {
              document.body.classList.remove("block-interactivity-" + o),
                y.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-" + o);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  const s = A.exports.useCallback(function (y, x) {
      if ("touches" in y && y.touches.length === 2)
        return !l.current.allowPinchZoom;
      const v = ni(y),
        f = n.current,
        h = "deltaX" in y ? y.deltaX : f[0] - v[0],
        E = "deltaY" in y ? y.deltaY : f[1] - v[1];
      let C;
      const b = y.target,
        k = Math.abs(h) > Math.abs(E) ? "h" : "v";
      let O = Nd(k, b);
      if (!O) return !0;
      if ((O ? (C = k) : ((C = k === "v" ? "h" : "v"), (O = Nd(k, b))), !O))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (h || E) && (r.current = C), !C)
      )
        return !0;
      const I = r.current || C;
      return v1(I, x, y, I === "h" ? h : E, !0);
    }, []),
    a = A.exports.useCallback(function (y) {
      const x = y;
      if (!Pn.length || Pn[Pn.length - 1] !== i) return;
      const v = "deltaY" in x ? Fd(x) : ni(x),
        f = t.current.filter(function (h) {
          return h.name === x.type && h.target === x.target && E1(h.delta, v);
        })[0];
      if (f && f.should) {
        x.preventDefault();
        return;
      }
      if (!f) {
        const h = (l.current.shards || [])
          .map(Ld)
          .filter(Boolean)
          .filter(function (C) {
            return C.contains(x.target);
          });
        (h.length > 0 ? s(x, h[0]) : !l.current.noIsolation) &&
          x.preventDefault();
      }
    }, []),
    c = A.exports.useCallback(function (y, x, v, f) {
      const h = { name: y, delta: x, target: v, should: f };
      t.current.push(h),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== h;
          });
        }, 1);
    }, []),
    d = A.exports.useCallback(function (y) {
      (n.current = ni(y)), (r.current = void 0);
    }, []),
    u = A.exports.useCallback(function (y) {
      c(y.type, Fd(y), y.target, s(y, e.lockRef.current));
    }, []),
    p = A.exports.useCallback(function (y) {
      c(y.type, ni(y), y.target, s(y, e.lockRef.current));
    }, []);
  A.exports.useEffect(function () {
    return (
      Pn.push(i),
      e.setCallbacks({
        onScrollCapture: u,
        onWheelCapture: u,
        onTouchMoveCapture: p,
      }),
      document.addEventListener("wheel", a, In),
      document.addEventListener("touchmove", a, In),
      document.addEventListener("touchstart", d, In),
      function () {
        (Pn = Pn.filter(function (y) {
          return y !== i;
        })),
          document.removeEventListener("wheel", a, In),
          document.removeEventListener("touchmove", a, In),
          document.removeEventListener("touchstart", d, In);
      }
    );
  }, []);
  const m = e.removeScrollBar,
    w = e.inert;
  return A.exports.createElement(
    A.exports.Fragment,
    null,
    w ? A.exports.createElement(i, { styles: w1(o) }) : null,
    m ? A.exports.createElement(p1, { gapMode: "margin" }) : null
  );
}
const C1 = cE(K0, S1),
  rh = A.exports.forwardRef(function (e, t) {
    return A.exports.createElement(El, ar({}, e, { ref: t, sideCar: C1 }));
  });
rh.classNames = El.classNames;
function Ot() {
  return (
    (Ot =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ot.apply(this, arguments)
  );
}
function wl(e, t) {
  if (e == null) return {};
  const n = {},
    r = Object.keys(e);
  let o, i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const oh = {
    allowPinchZoom: ie.bool,
    dangerouslyBypassFocusLock: ie.bool,
    dangerouslyBypassScrollLock: ie.bool,
    initialFocusRef: function () {
      return null;
    },
    onDismiss: ie.func,
  },
  go = yl(function (t, n) {
    const r = t.as,
      o = r === void 0 ? "div" : r,
      i = t.isOpen,
      l = i === void 0 ? !0 : i,
      s = wl(t, ["as", "isOpen"]);
    return (
      k0("dialog"),
      A.exports.useEffect(
        function () {
          l
            ? (window.__REACH_DISABLE_TOOLTIPS = !0)
            : window.requestAnimationFrame(function () {
                window.__REACH_DISABLE_TOOLTIPS = !1;
              });
        },
        [l]
      ),
      l
        ? A.exports.createElement(
            T0,
            { "data-reach-dialog-wrapper": "" },
            A.exports.createElement(A1, Ot({ ref: n, as: o }, s))
          )
        : null
    );
  });
(go.displayName = "DialogOverlay"),
  (go.propTypes = Ot({}, oh, { isOpen: ie.bool }));
var A1 = yl(function (t, n) {
  const r = t.allowPinchZoom,
    o = t.as,
    i = o === void 0 ? "div" : o,
    l = t.dangerouslyBypassFocusLock,
    s = l === void 0 ? !1 : l,
    a = t.dangerouslyBypassScrollLock,
    c = a === void 0 ? !1 : a,
    d = t.initialFocusRef,
    u = t.onClick,
    p = t.onDismiss,
    m = p === void 0 ? Ao : p,
    w = t.onKeyDown,
    y = t.onMouseDown,
    x = t.unstable_lockFocusAcrossFrames,
    v = x === void 0 ? !0 : x,
    f = wl(t, [
      "allowPinchZoom",
      "as",
      "dangerouslyBypassFocusLock",
      "dangerouslyBypassScrollLock",
      "initialFocusRef",
      "onClick",
      "onDismiss",
      "onKeyDown",
      "onMouseDown",
      "unstable_lockFocusAcrossFrames",
    ]),
    h = A.exports.useRef(null),
    E = A.exports.useRef(null),
    C = Qv(E, n),
    b = A.exports.useCallback(
      function () {
        d && d.current && d.current.focus();
      },
      [d]
    );
  function k($) {
    h.current === $.target && ($.stopPropagation(), m($));
  }
  function O($) {
    $.key === "Escape" && ($.stopPropagation(), m($));
  }
  function I($) {
    h.current = $.target;
  }
  return (
    A.exports.useEffect(function () {
      return E.current ? b1(E.current) : void 0;
    }, []),
    A.exports.createElement(
      Q0,
      {
        autoFocus: !0,
        returnFocus: !0,
        onActivation: b,
        disabled: s,
        crossFrame: v,
      },
      A.exports.createElement(
        rh,
        { allowPinchZoom: r, enabled: !c },
        A.exports.createElement(
          i,
          Ot({}, f, {
            ref: C,
            "data-reach-dialog-overlay": "",
            onClick: mi(u, k),
            onKeyDown: mi(w, O),
            onMouseDown: mi(y, I),
          })
        )
      )
    )
  );
});
(go.displayName = "DialogOverlay"), (go.propTypes = Ot({}, oh));
const As = yl(function (t, n) {
  const r = t.as,
    o = r === void 0 ? "div" : r,
    i = t.onClick;
  t.onKeyDown;
  const l = wl(t, ["as", "onClick", "onKeyDown"]);
  return A.exports.createElement(
    o,
    Ot({ "aria-modal": "true", role: "dialog", tabIndex: -1 }, l, {
      ref: n,
      "data-reach-dialog-content": "",
      onClick: mi(i, function (s) {
        s.stopPropagation();
      }),
    })
  );
});
(As.displayName = "DialogContent"),
  (As.propTypes = { "aria-label": qi, "aria-labelledby": qi });
const bs = yl(function (t, n) {
  const r = t.allowPinchZoom,
    o = r === void 0 ? !1 : r,
    i = t.initialFocusRef,
    l = t.isOpen,
    s = t.onDismiss,
    a = s === void 0 ? Ao : s,
    c = wl(t, ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"]);
  return A.exports.createElement(
    go,
    { allowPinchZoom: o, initialFocusRef: i, isOpen: l, onDismiss: a },
    A.exports.createElement(As, Ot({ ref: n }, c))
  );
});
(bs.displayName = "Dialog"),
  (bs.propTypes = {
    isOpen: ie.bool,
    onDismiss: ie.func,
    "aria-label": qi,
    "aria-labelledby": qi,
  });
function b1(e) {
  const t = [],
    n = [],
    r = Yv(e);
  return e
    ? (Array.prototype.forEach.call(
        r.querySelectorAll("body > *"),
        function (o) {
          let i, l;
          const s =
            (i = e.parentNode) == null || (l = i.parentNode) == null
              ? void 0
              : l.parentNode;
          if (o === s) return;
          const a = o.getAttribute("aria-hidden");
          (a !== null && a !== "false") ||
            (t.push(a), n.push(o), o.setAttribute("aria-hidden", "true"));
        }
      ),
      function () {
        n.forEach(function (o, i) {
          const l = t[i];
          l === null
            ? o.removeAttribute("aria-hidden")
            : o.setAttribute("aria-hidden", l);
        });
      })
    : (console.warn(
        "A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`."
      ),
      Ao);
}
function qi(e, t, n, r, o) {
  const i = `
See https://www.w3.org/TR/wai-aria/#aria-label for details.`;
  return !e["aria-label"] && !e["aria-labelledby"]
    ? new Error(
        "A <" +
          n +
          "> must have either an `aria-label` or `aria-labelledby` prop.\n      " +
          i
      )
    : e["aria-label"] && e["aria-labelledby"]
    ? new Error(
        "You provided both `aria-label` and `aria-labelledby` props to a <" +
          n +
          ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" +
          n +
          ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." +
          i
      )
    : e[t] != null && !qv(e[t])
    ? new Error(
        "Invalid prop `" +
          t +
          "` supplied to `" +
          n +
          "`. Expected `string`, received `" +
          (Array.isArray(o) ? "array" : typeof o) +
          "`."
      )
    : null;
}
const x1 = ({ children: e, onClick: t, style: n, ...r }) =>
    _("button", {
      className: "ladle-button",
      onClick: t,
      style: n,
      "aria-label": r["aria-label"],
      children: e,
    }),
  pa = ({ children: e, href: t, style: n }) =>
    _("a", { className: "ladle-link", href: t, style: n, children: e }),
  Cn = ({ children: e }) => _("code", { className: "ladle-code", children: e }),
  wr = ({ children: e, close: t, isOpen: n, label: r, maxWidth: o = "40em" }) =>
    z(bs, {
      isOpen: n,
      onDismiss: () => t(),
      "aria-label": r || "Modal",
      "data-testid": "ladle-dialog",
      style: { maxWidth: o },
      children: [
        _("div", {
          style: { position: "absolute", insetInlineEnd: "-6px", top: "0px" },
          children: _(x1, {
            onClick: () => t(),
            "aria-label": "Close modal",
            style: {
              height: "36px",
              width: "36px",
              borderColor: "transparent",
              boxShadow: "none",
            },
            children: _(ng, {}),
          }),
        }),
        _("div", { className: "ladle-addon-modal-body", children: e }),
      ],
    }),
  ih = ({ wrongUrl: e, activeStory: t }) =>
    z("div", {
      className: "ladle-error-content",
      children: [
        e
          ? z(sr, {
              children: [
                _("h1", { children: "The story not found" }),
                z("p", {
                  children: [
                    "The story id ",
                    _(Cn, { children: t }),
                    " you are trying to open does not exist. Typo?",
                  ],
                }),
              ],
            })
          : z(sr, {
              children: [
                _("h1", { children: "No stories found" }),
                z("p", {
                  children: [
                    "The configured glob pattern for stories is:",
                    " ",
                    _(Cn, { children: "stories" }),
                    ".",
                    " ",
                  ],
                }),
                z("p", {
                  children: [
                    "It can be changed through the",
                    " ",
                    _(pa, {
                      href: "https://www.ladle.dev/docs/config#story-filenames",
                      children: "configuration file",
                    }),
                    " ",
                    "or CLI flag ",
                    _(Cn, { children: "--stories=your-glob" }),
                    ".",
                  ],
                }),
              ],
            }),
        _("p", {
          children: _(pa, {
            href: "https://github.com/tajo/ladle",
            children: "Github",
          }),
        }),
        _("p", {
          children: _(pa, { href: "https://www.ladle.dev", children: "Docs" }),
        }),
      ],
    }),
  O1 = ({
    children: e,
    active: t,
    width: n,
    darkTheme: r,
    story: o,
    mode: i,
  }) =>
    (!t && n === 0) || i === pt.Preview
      ? e
      : _(Uv, {
          title: `Story ${o}`,
          initialContent:
            '<!DOCTYPE html><html><head><base target="_parent" /></head><body style="margin:0"><div id="root"></div></body></html>',
          mountTarget: "#root",
          style: {
            height: n ? "calc(100% - 128px)" : "100%",
            width: n || "100%",
            minHeight: "500px",
            marginTop: n ? "64px" : 0,
            marginBottom: n ? "64px" : 0,
            backgroundColor: r ? "#141414" : "#fff",
            border: 0,
            boxShadow: n
              ? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              : "none",
          },
          children: e,
        }),
  k1 = ({ active: e, children: t }) => {
    const { window: n } = xu.useFrame(),
      r = () => {
        !n ||
          [...document.head.children].forEach((o) => {
            (o.tagName === "STYLE" ||
              (o.tagName === "LINK" &&
                (o.getAttribute("type") === "text/css" ||
                  o.getAttribute("rel") === "stylesheet"))) &&
              n.document.head.appendChild(o.cloneNode(!0));
          });
      };
    return (
      A.exports.useEffect(() => {
        if (e) {
          r();
          const o = new MutationObserver(() => r());
          return (
            document.documentElement.setAttribute("data-iframed", ""),
            o.observe(document.head, {
              subtree: !0,
              characterData: !0,
              childList: !0,
            }),
            () => {
              o && o.disconnect();
            }
          );
        }
      }, [e]),
      t
    );
  },
  Id = ({ globalState: e, dispatch: t }) => {
    const n = ur[e.story],
      r = e.width,
      o = n && n.meta ? n.meta.meta.iframed : !1;
    let i = n && n.meta ? n.meta.meta.width : 0;
    return (
      Object.keys(le.addons.width.options).forEach((l) => {
        l === i && (i = le.addons.width.options[l]);
      }),
      A.exports.useEffect(() => {
        if (i && i !== 0) {
          t({ type: se.UpdateWidth, value: i });
          return;
        }
        le.addons.width.defaultState !== 0 &&
          t({ type: se.UpdateWidth, value: le.addons.width.defaultState });
      }, [i, e.story]),
      A.exports.useEffect(() => {
        e.mode !== pt.Preview && (o || r)
          ? document.documentElement.setAttribute("data-iframed", "")
          : document.documentElement.removeAttribute("data-iframed");
      }, [o, e.story, e.mode, e.width]),
      e.story
        ? _(zv, {
            children: _(A.exports.Suspense, {
              fallback: _(ig, {}),
              children: _(O1, {
                active: o,
                story: e.story,
                width: r,
                mode: e.mode,
                darkTheme: e.theme === Ce.Dark,
                children: _(k1, {
                  active: (o || r > 0) && e.mode !== pt.Preview,
                  children: _(Jm, {
                    config: le,
                    globalState: e,
                    dispatch: t,
                    children: n
                      ? A.exports.createElement(n.component)
                      : _(ih, { wrongUrl: !0, activeStory: e.story }),
                  }),
                }),
              }),
            }),
          })
        : null
    );
  };
var lh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var l = typeof i;
          if (l === "string" || l === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (l === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(lh);
const T1 = lh.exports;
function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zi.apply(this, arguments)
  );
}
var En;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(En || (En = {}));
var Pd = function (e) {
    return e;
  },
  Bd = "beforeunload",
  D1 = "popstate";
function R1(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    o = r.history;
  function i() {
    var k = r.location,
      O = k.pathname,
      I = k.search,
      $ = k.hash,
      V = o.state || {};
    return [
      V.idx,
      Pd({
        pathname: O,
        search: I,
        hash: $,
        state: V.usr || null,
        key: V.key || "default",
      }),
    ];
  }
  var l = null;
  function s() {
    if (l) m.call(l), (l = null);
    else {
      var k = En.Pop,
        O = i(),
        I = O[0],
        $ = O[1];
      if (m.length) {
        if (I != null) {
          var V = d - I;
          V &&
            ((l = {
              action: k,
              location: $,
              retry: function () {
                C(V * -1);
              },
            }),
            C(V));
        }
      } else f(k);
    }
  }
  r.addEventListener(D1, s);
  var a = En.Pop,
    c = i(),
    d = c[0],
    u = c[1],
    p = $d(),
    m = $d();
  d == null && ((d = 0), o.replaceState(Zi({}, o.state, { idx: d }), ""));
  function w(k) {
    return typeof k == "string" ? k : F1(k);
  }
  function y(k, O) {
    return (
      O === void 0 && (O = null),
      Pd(
        Zi(
          { pathname: u.pathname, hash: "", search: "" },
          typeof k == "string" ? L1(k) : k,
          { state: O, key: N1() }
        )
      )
    );
  }
  function x(k, O) {
    return [{ usr: k.state, key: k.key, idx: O }, w(k)];
  }
  function v(k, O, I) {
    return !m.length || (m.call({ action: k, location: O, retry: I }), !1);
  }
  function f(k) {
    a = k;
    var O = i();
    (d = O[0]), (u = O[1]), p.call({ action: a, location: u });
  }
  function h(k, O) {
    var I = En.Push,
      $ = y(k, O);
    function V() {
      h(k, O);
    }
    if (v(I, $, V)) {
      var D = x($, d + 1),
        M = D[0],
        G = D[1];
      try {
        o.pushState(M, "", G);
      } catch {
        r.location.assign(G);
      }
      f(I);
    }
  }
  function E(k, O) {
    var I = En.Replace,
      $ = y(k, O);
    function V() {
      E(k, O);
    }
    if (v(I, $, V)) {
      var D = x($, d),
        M = D[0],
        G = D[1];
      o.replaceState(M, "", G), f(I);
    }
  }
  function C(k) {
    o.go(k);
  }
  var b = {
    get action() {
      return a;
    },
    get location() {
      return u;
    },
    createHref: w,
    push: h,
    replace: E,
    go: C,
    back: function () {
      C(-1);
    },
    forward: function () {
      C(1);
    },
    listen: function (O) {
      return p.push(O);
    },
    block: function (O) {
      var I = m.push(O);
      return (
        m.length === 1 && r.addEventListener(Bd, Md),
        function () {
          I(), m.length || r.removeEventListener(Bd, Md);
        }
      );
    },
  };
  return b;
}
function Md(e) {
  e.preventDefault(), (e.returnValue = "");
}
function $d() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function N1() {
  return Math.random().toString(36).substr(2, 8);
}
function F1(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    o = r === void 0 ? "" : r,
    i = e.hash,
    l = i === void 0 ? "" : i;
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function L1(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
const ah = R1(),
  sh = (e) => {
    Object.keys(e).forEach((t) => {
      const n = e[t],
        r = le.addons[t] ? le.addons[t].defaultState : "$$LADLE_unknown";
      n === r && delete e[t];
    });
  },
  jd = (e) => {
    sh(e);
    const t = vt.parse(location.search);
    if (
      Object.keys(e).length === Object.keys(t).length &&
      Object.keys(e).every((r) => {
        const o = e[r];
        return typeof o == "boolean"
          ? o === (t[r] === "true")
          : typeof o == "number"
          ? o === parseInt(t[r])
          : o === t[r];
      })
    ) {
      At("No URL updated needed");
      return;
    }
    location.search !== xs(e) && ah.push(xs(e));
  },
  xs = (e) => {
    sh(e);
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        n === "control"
          ? Object.keys(e[n]).forEach((r) => {
              const o = e[n][r];
              if (o.type === ue.Action) return;
              let i = "s",
                l = o.value,
                s = !1;
              switch (o.type) {
                case ue.Boolean:
                  i = "b";
                  break;
                case ue.Number:
                  i = "n";
                  break;
                case ue.Radio:
                  i = "r";
                  break;
                case ue.Select:
                  i = "l";
                  break;
                case ue.Complex:
                  (i = "c"), (l = encodeURI(JSON.stringify(o.value)));
                  try {
                    s =
                      JSON.stringify(o.value) ===
                      JSON.stringify(o.defaultValue);
                  } catch {}
                  break;
              }
              !s && l !== o.defaultValue && (t[`arg-${i}-${r}`] = l);
            })
          : (t[n] = e[n]);
      }),
      `?${vt.stringify(t)}`
    );
  },
  uh = (e) =>
    e.isExpanded && e.children && e.children.length
      ? uh(e.children[e.children.length - 1])
      : e.id,
  ch = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t) return n;
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = ch(e[r].children, t, e[r].id);
        if (o) return o;
      }
    }
    return null;
  },
  dh = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t) return r === 0 ? n : uh(e[r - 1]);
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = dh(e[r].children, t, e[r].id);
        if (o) return o;
      }
    }
    return null;
  },
  fh = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      if (
        e[n].id === t &&
        e[n].isExpanded &&
        e[n].children &&
        e[n].children.length
      )
        return e[n].children[0].id;
      if (e[n].isExpanded && e[n].children && e[n].children.length) {
        const r = fh(e[n].children, t);
        if (r) return r;
      }
    }
    return null;
  },
  ph = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t)
        return e[r].isExpanded && e[r].children && e[r].children.length
          ? e[r].children[0].id
          : e[r + 1]
          ? e[r + 1].id
          : n;
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = ph(e[r].children, t, e[r + 1] ? e[r + 1].id : n);
        if (o) return o;
      }
    }
    return null;
  },
  hh = (e) => {
    const t = e[e.length - 1];
    return t.isExpanded && t.children && t.children.length
      ? hh(t.children)
      : t.id;
  },
  jr = (e, t) =>
    e.map((n) => {
      const r = { ...n };
      return (
        r.id === t.id && (r.isExpanded = !r.isExpanded),
        r.children && r.children.length && (r.children = jr(r.children, t)),
        r
      );
    }),
  I1 = ({
    stories: e,
    story: t,
    updateStory: n,
    searchActive: r,
    searchRef: o,
    setTreeRootRef: i,
  }) => {
    const l = A.exports.useRef({}),
      [s, a] = A.exports.useState(yc(e, t, r));
    A.exports.useEffect(() => {
      a(yc(e, t, r));
    }, [e.join(",")]);
    const [c, d] = A.exports.useState(s.length ? s[0].id : null),
      u = (m) => {
        var w;
        m && l && l.current[m] && ((w = l.current[m]) == null || w.focus()),
          d(m || s[0].id),
          !m && o.current.focus();
      };
    return _("ul", {
      role: "tree",
      style: { marginInlineStart: "-6px" },
      ref: (m) => i(m),
      children: _(mh, {
        tree: s,
        fullTree: s,
        story: t,
        updateStory: n,
        onItemClick: (m) => a(jr(s, m)),
        selectedItemId: c,
        onKeyDownFn: (m, w) => {
          switch (m.key) {
            case "ArrowRight":
              m.preventDefault(),
                m.stopPropagation(),
                w.isExpanded ? u(fh(s, w.id)) : a(jr(s, w));
              break;
            case "ArrowLeft":
              m.preventDefault(),
                m.stopPropagation(),
                w.isExpanded ? a(jr(s, w)) : u(ch(s, w.id, null));
              break;
            case "ArrowUp":
              m.preventDefault(), m.stopPropagation(), u(dh(s, w.id, null));
              break;
            case "ArrowDown":
              m.preventDefault(), m.stopPropagation();
              const y = ph(s, w.id, null);
              y && u(y);
              break;
            case " ":
            case "Enter":
              m.target.href ||
                (m.preventDefault(), m.stopPropagation(), a(jr(s, w)));
              break;
            case "Home":
              m.preventDefault(), m.stopPropagation(), s.length && u(s[0].id);
              break;
            case "End":
              m.preventDefault(), m.stopPropagation(), u(hh(s));
              break;
          }
        },
        treeItemRefs: l,
      }),
    });
  },
  mh = ({
    tree: e,
    fullTree: t,
    story: n,
    updateStory: r,
    onItemClick: o,
    onKeyDownFn: i,
    selectedItemId: l,
    treeItemRefs: s,
  }) =>
    _(A.exports.Fragment, {
      children: e.map((a) =>
        z(
          "li",
          {
            onKeyDown: (c) => i(c, a),
            "aria-expanded": a.isExpanded,
            title: a.name,
            tabIndex: a.id === l && !a.isLinkable ? 0 : -1,
            ref: a.isLinkable ? void 0 : (c) => (s.current[a.id] = c),
            role: "treeitem",
            className: T1({
              "ladle-linkable": a.isLinkable,
              "ladle-active": a.id === n,
            }),
            style: a.isLinkable ? {} : { marginTop: "0.5em" },
            children: [
              a.isLinkable
                ? z("div", {
                    style: { display: "flex" },
                    children: [
                      _(sg, {}),
                      _("a", {
                        tabIndex: a.id === l ? 0 : -1,
                        ref: (c) => (s.current[a.id] = c),
                        href: xs({ story: a.id }),
                        onKeyDown: (c) => n !== a.id && i(c, a),
                        onClick: (c) => {
                          !c.ctrlKey &&
                            !c.metaKey &&
                            (c.preventDefault(), n !== a.id && r(a.id));
                        },
                        children: a.name,
                      }),
                    ],
                  })
                : z("div", {
                    style: { display: "flex", cursor: "pointer" },
                    title: a.name,
                    onClick: () => o(a),
                    children: [
                      _(ug, { rotate: !a.isExpanded }),
                      _("div", {
                        style: {
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        },
                        children: a.name,
                      }),
                    ],
                  }),
              Object.keys(a.children).length > 0 &&
                a.isExpanded &&
                _("ul", {
                  role: "group",
                  children: _(mh, {
                    tree: a.children,
                    fullTree: t,
                    story: n,
                    updateStory: r,
                    selectedItemId: l,
                    onKeyDownFn: i,
                    onItemClick: o,
                    treeItemRefs: s,
                  }),
                }),
            ],
          },
          a.id
        )
      ),
    }),
  P1 = ({ stories: e, story: t, updateStory: n }) => {
    const [r, o] = A.exports.useState(""),
      i = A.exports.useRef(null),
      l = A.exports.useRef(null),
      s = (d) => {
        ((d.metaKey && d.key === "p") || d.key === "/") &&
          (["input", "textarea"].every(
            (u) => d.target.tagName.toLowerCase() !== u
          ) ||
            d.metaKey) &&
          (i.current.focus(), d.preventDefault());
      };
    A.exports.useEffect(
      () => (
        document.addEventListener("keydown", s),
        () => {
          document.removeEventListener("keydown", s);
        }
      ),
      []
    );
    const a = r.toLocaleLowerCase().replace(new RegExp("\\s+", "g"), "-"),
      c = e.filter((d) => d.includes(a));
    return z("nav", {
      role: "navigation",
      className: "ladle-aside",
      children: [
        _("input", {
          placeholder: "Search",
          "aria-label": "Search stories",
          value: r,
          ref: i,
          onKeyDown: (d) => {
            d.key === "ArrowDown" && l.current.firstChild.focus();
          },
          onChange: (d) => o(d.target.value),
        }),
        _(I1, {
          searchRef: i,
          stories: c,
          story: t,
          updateStory: n,
          searchActive: r !== "",
          setTreeRootRef: (d) => (l.current = d),
        }),
      ],
    });
  },
  B1 = (e) => {
    switch (e) {
      case ue.Boolean:
        return "checkbox";
      case ue.Number:
        return "number";
      default:
        return "text";
    }
  },
  M1 = (e, t) => {
    switch (t) {
      case ue.Boolean:
        return e.checked;
      case ue.Number:
        return parseInt(e.value, 10);
      default:
        return e.value;
    }
  },
  $1 = (e) => {
    const t = vt.parse(e),
      n = {};
    return (
      Object.keys(t).forEach((r) => {
        if (r.startsWith("arg-")) {
          const o = r.split("-");
          switch (o[1]) {
            case "b":
              n[o.slice(2).join("-")] = {
                value: t[r] === "true",
                defaultValue: void 0,
                description: "",
                type: ue.Boolean,
              };
              break;
            case "n":
              n[o.slice(2).join("-")] = {
                value: parseInt(t[r], 10),
                defaultValue: void 0,
                description: "",
                type: ue.Number,
              };
              break;
            case "c":
              try {
                n[o.slice(2).join("-")] = {
                  value: JSON.parse(decodeURI(t[r])),
                  defaultValue: void 0,
                  description: "",
                  type: ue.Complex,
                };
              } catch {}
              break;
            case "r":
              n[o.slice(2).join("-")] = {
                value: t[r],
                defaultValue: t[r],
                description: "",
                options: [t[r]],
                type: ue.Radio,
              };
              break;
            case "l":
              n[o.slice(2).join("-")] = {
                value: t[r],
                defaultValue: t[r],
                description: "",
                options: [t[r]],
                type: ue.Select,
              };
              break;
            default:
              n[o.slice(2).join("-")] = {
                value: t[r],
                defaultValue: void 0,
                description: "",
                type: ue.String,
              };
          }
        }
      }),
      n
    );
  },
  j1 = ({ controlKey: e, globalState: t, dispatch: n }) => {
    if (t.control[e].type === ue.Action)
      return z("tr", {
        children: [_("td", { children: e }), _("td", { children: "action" })],
      });
    if (t.control[e].type === ue.Function)
      return z("tr", {
        children: [_("td", { children: e }), _("td", { children: "function" })],
      });
    if (t.control[e].type === ue.Radio)
      return z("tr", {
        children: [
          _("td", { children: e }),
          _("td", {
            children: (t.control[e].options || []).map((r) =>
              z(
                "span",
                {
                  children: [
                    _("input", {
                      id: `${e}-${r}`,
                      type: "radio",
                      name: e,
                      value: r,
                      onChange: (o) => {
                        n({
                          type: se.UpdateControl,
                          value: {
                            ...t.control,
                            [e]: { ...t.control[e], value: o.target.value },
                          },
                        });
                      },
                      checked: t.control[e].value === r,
                    }),
                    _("label", { htmlFor: `${e}-${r}`, children: r }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      });
    if (t.control[e].type === ue.Select)
      return z("tr", {
        children: [
          _("td", { children: _("label", { htmlFor: e, children: e }) }),
          _("td", {
            children: _("select", {
              id: e,
              value: t.control[e].value,
              onChange: (r) => {
                n({
                  type: se.UpdateControl,
                  value: {
                    ...t.control,
                    [e]: { ...t.control[e], value: r.target.value },
                  },
                });
              },
              children: (t.control[e].options || []).map((r) =>
                _("option", { value: r, children: r }, r)
              ),
            }),
          }),
        ],
      });
    if (t.control[e].type === ue.Complex) {
      let r = "";
      try {
        r = JSON.stringify(t.control[e].value);
      } catch {
        r = "Object/Array argument must be serializable.";
      }
      return z("tr", {
        children: [
          _("td", { children: _("label", { htmlFor: e, children: e }) }),
          _("td", {
            children: _("textarea", {
              id: e,
              defaultValue: r,
              onChange: (o) => {
                let i = t.control[e].value;
                try {
                  i = JSON.parse(o.target.value);
                } catch {}
                n({
                  type: se.UpdateControl,
                  value: { ...t.control, [e]: { ...t.control[e], value: i } },
                });
              },
            }),
          }),
        ],
      });
    }
    return z("tr", {
      children: [
        _("td", { children: _("label", { htmlFor: e, children: e }) }),
        _("td", {
          children: _("input", {
            id: e,
            type: B1(t.control[e].type),
            value: t.control[e].value,
            checked:
              t.control[e].type === ue.Boolean && t.control[e].value === !0,
            onChange: (r) =>
              n({
                type: se.UpdateControl,
                value: {
                  ...t.control,
                  [e]: {
                    ...t.control[e],
                    value: M1(r.target, t.control[e].type),
                  },
                },
              }),
          }),
        }),
      ],
    });
  },
  U1 = ({ globalState: e, dispatch: t }) => {
    const [n, r] = A.exports.useState(!1),
      o = "Explore different versions of this story through controls.",
      i = Object.keys(e.control).filter(
        (l) =>
          JSON.stringify(e.control[l].value) !==
          JSON.stringify(e.control[l].defaultValue)
      );
    return _("li", {
      children: z("button", {
        "aria-label": o,
        title: o,
        onClick: () => r(!0),
        className: n ? "ladle-active" : "",
        "data-testid": "addon-control",
        children: [
          _(cg, {}),
          _("span", { className: "ladle-addon-tooltip", children: o }),
          _("label", { children: "Story Controls" }),
          i.length
            ? _("div", { className: "ladle-badge", children: i.length })
            : null,
          z(wr, {
            isOpen: n,
            close: () => r(!1),
            label: "Toggle different controls to update the story.",
            children: [
              _("table", {
                className: "ladle-controls-table",
                children: _("tbody", {
                  children: Object.keys(e.control)
                    .sort()
                    .map((l) =>
                      _(j1, { globalState: e, dispatch: t, controlKey: l }, l)
                    ),
                }),
              }),
              _("button", {
                onClick: () => {
                  const l = {};
                  Object.keys(e.control).forEach((s) => {
                    l[s] = {
                      ...e.control[s],
                      value: e.control[s].defaultValue,
                    };
                  }),
                    t({ type: se.UpdateControl, value: l });
                },
                children: "Reset to defaults",
              }),
            ],
          }),
        ],
      }),
    });
  },
  z1 = (e) => {
    switch (vt.parse(e).mode) {
      case pt.Full:
        return pt.Full;
      case pt.Preview:
        return pt.Preview;
      default:
        return le.addons.mode.defaultState;
    }
  },
  H1 = ({ dispatch: e }) => {
    const t = "Open fullscreen mode. It removes all other styles and wrappers.";
    return _("li", {
      children: z("button", {
        "aria-label": t,
        title: t,
        onClick: () => e({ type: se.UpdateMode, value: pt.Preview }),
        children: [
          _(lg, {}),
          _("span", { className: "ladle-addon-tooltip", children: t }),
          _("label", { children: "Open fullscreen mode" }),
        ],
      }),
    });
  };
var V1 = Object.create,
  $u = Object.defineProperty,
  G1 = Object.getOwnPropertyDescriptor,
  gh = Object.getOwnPropertyNames,
  W1 = Object.getPrototypeOf,
  Y1 = Object.prototype.hasOwnProperty,
  ju = (e, t) =>
    function () {
      return t || (0, e[gh(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  X1 = (e, t) => {
    for (var n in t) $u(e, n, { get: t[n], enumerable: !0 });
  },
  q1 = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of gh(t))
        !Y1.call(e, o) &&
          o !== n &&
          $u(e, o, {
            get: () => t[o],
            enumerable: !(r = G1(t, o)) || r.enumerable,
          });
    return e;
  },
  Z1 = (e, t, n) => (
    (n = e != null ? V1(W1(e)) : {}),
    q1(
      t || !e || !e.__esModule
        ? $u(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Q1 = ju({
    "node_modules/is-object/index.js"(e, t) {
      t.exports = function (r) {
        return typeof r == "object" && r !== null;
      };
    },
  }),
  J1 = ju({
    "node_modules/is-window/index.js"(e, t) {
      t.exports = function (n) {
        if (n == null) return !1;
        var r = Object(n);
        return r === r.window;
      };
    },
  }),
  K1 = ju({
    "node_modules/is-dom/index.js"(e, t) {
      var n = Q1(),
        r = J1();
      function o(i) {
        return !n(i) || !r(window) || typeof window.Node != "function"
          ? !1
          : typeof i.nodeType == "number" && typeof i.nodeName == "string";
      }
      t.exports = o;
    },
  }),
  Qi = {};
X1(Qi, { chromeDark: () => yh, chromeLight: () => vh });
var yh = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  vh = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Eh = A.exports.createContext([{}, () => {}]),
  ha = {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    OUserSelect: "none",
    userSelect: "none",
  },
  vi = (e) => ({
    DOMNodePreview: {
      htmlOpenTag: {
        base: { color: e.HTML_TAG_COLOR },
        tagName: {
          color: e.HTML_TAGNAME_COLOR,
          textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
        },
        htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
        htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
      },
      htmlCloseTag: {
        base: { color: e.HTML_TAG_COLOR },
        offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
        tagName: {
          color: e.HTML_TAGNAME_COLOR,
          textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
        },
      },
      htmlComment: { color: e.HTML_COMMENT_COLOR },
      htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
    },
    ObjectPreview: {
      objectDescription: { fontStyle: "italic" },
      preview: { fontStyle: "italic" },
      arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
      objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
    },
    ObjectName: {
      base: { color: e.OBJECT_NAME_COLOR },
      dimmed: { opacity: 0.6 },
    },
    ObjectValue: {
      objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
      objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
      objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
      objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
      objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
      objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
      objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
      objectValueFunctionPrefix: {
        color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
        fontStyle: "italic",
      },
      objectValueFunctionName: { fontStyle: "italic" },
    },
    TreeView: {
      treeViewOutline: { padding: 0, margin: 0, listStyleType: "none" },
    },
    TreeNode: {
      treeNodeBase: {
        color: e.BASE_COLOR,
        backgroundColor: e.BASE_BACKGROUND_COLOR,
        lineHeight: e.TREENODE_LINE_HEIGHT,
        cursor: "default",
        boxSizing: "border-box",
        listStyle: "none",
        fontFamily: e.TREENODE_FONT_FAMILY,
        fontSize: e.TREENODE_FONT_SIZE,
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: {
        whiteSpace: "pre",
        fontSize: e.ARROW_FONT_SIZE,
        marginRight: e.ARROW_MARGIN_RIGHT,
        ...ha,
      },
      treeNodeArrow: {
        base: {
          color: e.ARROW_COLOR,
          display: "inline-block",
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
            ? { transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s` }
            : {}),
          ...ha,
        },
        expanded: {
          WebkitTransform: "rotateZ(90deg)",
          MozTransform: "rotateZ(90deg)",
          transform: "rotateZ(90deg)",
        },
        collapsed: {
          WebkitTransform: "rotateZ(0deg)",
          MozTransform: "rotateZ(0deg)",
          transform: "rotateZ(0deg)",
        },
      },
      treeNodeChildNodesContainer: {
        margin: 0,
        paddingLeft: e.TREENODE_PADDING_LEFT,
      },
    },
    TableInspector: {
      base: {
        color: e.BASE_COLOR,
        position: "relative",
        border: `1px solid ${e.TABLE_BORDER_COLOR}`,
        fontFamily: e.BASE_FONT_FAMILY,
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
        boxSizing: "border-box",
        cursor: "default",
      },
    },
    TableInspectorHeaderContainer: {
      base: { top: 0, height: "17px", left: 0, right: 0, overflowX: "hidden" },
      table: {
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        height: "100%",
        width: "100%",
        margin: 0,
      },
    },
    TableInspectorDataContainer: {
      tr: { display: "table-row" },
      td: {
        boxSizing: "border-box",
        border: "none",
        height: "16px",
        verticalAlign: "top",
        padding: "1px 4px",
        WebkitUserSelect: "text",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px",
      },
      div: {
        position: "static",
        top: "17px",
        bottom: 0,
        overflowY: "overlay",
        transform: "translateZ(0)",
        left: 0,
        right: 0,
        overflowX: "hidden",
      },
      table: {
        positon: "static",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: "0 none transparent",
        margin: 0,
        backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        width: "100%",
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
      },
    },
    TableInspectorTH: {
      base: {
        position: "relative",
        height: "auto",
        textAlign: "left",
        backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
        fontWeight: "normal",
        verticalAlign: "middle",
        padding: "0 4px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px",
        ":hover": { backgroundColor: e.TABLE_TH_HOVER_COLOR },
      },
      div: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
      },
    },
    TableInspectorLeftBorder: {
      none: { borderLeft: "none" },
      solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
    },
    TableInspectorSortIcon: {
      display: "block",
      marginRight: 3,
      width: 8,
      height: 7,
      marginTop: -7,
      color: e.TABLE_SORT_ICON_COLOR,
      fontSize: 12,
      ...ha,
    },
  }),
  Os = "chromeLight",
  wh = A.exports.createContext(vi(Qi[Os])),
  Je = (e) => A.exports.useContext(wh)[e],
  Uu =
    (e) =>
    ({ theme: n = Os, ...r }) => {
      const o = A.exports.useMemo(() => {
        switch (Object.prototype.toString.call(n)) {
          case "[object String]":
            return vi(Qi[n]);
          case "[object Object]":
            return vi(n);
          default:
            return vi(Qi[Os]);
        }
      }, [n]);
      return F.createElement(
        wh.Provider,
        { value: o },
        F.createElement(e, { ...r })
      );
    },
  ew = ({ expanded: e, styles: t }) =>
    F.createElement(
      "span",
      { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
      "\u25B6"
    ),
  tw = A.exports.memo((e) => {
    e = {
      expanded: !0,
      nodeRenderer: ({ name: d }) => F.createElement("span", null, d),
      onClick: () => {},
      shouldShowArrow: !1,
      shouldShowPlaceholder: !0,
      ...e,
    };
    const {
        expanded: t,
        onClick: n,
        children: r,
        nodeRenderer: o,
        title: i,
        shouldShowArrow: l,
        shouldShowPlaceholder: s,
      } = e,
      a = Je("TreeNode"),
      c = o;
    return F.createElement(
      "li",
      { "aria-expanded": t, role: "treeitem", style: a.treeNodeBase, title: i },
      F.createElement(
        "div",
        { style: a.treeNodePreviewContainer, onClick: n },
        l || A.exports.Children.count(r) > 0
          ? F.createElement(ew, { expanded: t, styles: a.treeNodeArrow })
          : s &&
              F.createElement("span", { style: a.treeNodePlaceholder }, "\xA0"),
        F.createElement(c, { ...e })
      ),
      F.createElement(
        "ol",
        { role: "group", style: a.treeNodeChildNodesContainer },
        t ? r : void 0
      )
    );
  }),
  Ji = "$",
  Ud = "*";
function Ei(e, t) {
  return !t(e).next().done;
}
var nw = (e) =>
    Array.from({ length: e }, (t, n) =>
      [Ji].concat(Array.from({ length: n }, () => "*")).join(".")
    ),
  rw = (e, t, n, r, o) => {
    const i = []
        .concat(nw(r))
        .concat(n)
        .filter((s) => typeof s == "string"),
      l = [];
    return (
      i.forEach((s) => {
        const a = s.split("."),
          c = (d, u, p) => {
            if (p === a.length) {
              l.push(u);
              return;
            }
            const m = a[p];
            if (p === 0) Ei(d, t) && (m === Ji || m === Ud) && c(d, Ji, p + 1);
            else if (m === Ud)
              for (const { name: w, data: y } of t(d))
                Ei(y, t) && c(y, `${u}.${w}`, p + 1);
            else {
              const w = d[m];
              Ei(w, t) && c(w, `${u}.${m}`, p + 1);
            }
          };
        c(e, "", 0);
      }),
      l.reduce((s, a) => ((s[a] = !0), s), { ...o })
    );
  },
  _h = A.exports.memo((e) => {
    const { data: t, dataIterator: n, path: r, depth: o, nodeRenderer: i } = e,
      [l, s] = A.exports.useContext(Eh),
      a = Ei(t, n),
      c = !!l[r],
      d = A.exports.useCallback(
        () => a && s((u) => ({ ...u, [r]: !c })),
        [a, s, r, c]
      );
    return F.createElement(
      tw,
      {
        expanded: c,
        onClick: d,
        shouldShowArrow: a,
        shouldShowPlaceholder: o > 0,
        nodeRenderer: i,
        ...e,
      },
      c
        ? [...n(t)].map(({ name: u, data: p, ...m }) =>
            F.createElement(_h, {
              name: u,
              data: p,
              depth: o + 1,
              path: `${r}.${u}`,
              key: u,
              dataIterator: n,
              nodeRenderer: i,
              ...m,
            })
          )
        : null
    );
  }),
  Sh = A.exports.memo(
    ({
      name: e,
      data: t,
      dataIterator: n,
      nodeRenderer: r,
      expandPaths: o,
      expandLevel: i,
    }) => {
      const l = Je("TreeView"),
        s = A.exports.useState({}),
        [, a] = s;
      return (
        A.exports.useLayoutEffect(
          () => a((c) => rw(t, n, o, i, c)),
          [t, n, o, i]
        ),
        F.createElement(
          Eh.Provider,
          { value: s },
          F.createElement(
            "ol",
            { role: "tree", style: l.treeViewOutline },
            F.createElement(_h, {
              name: e,
              data: t,
              dataIterator: n,
              depth: 0,
              path: Ji,
              nodeRenderer: r,
            })
          )
        )
      );
    }
  ),
  zu = ({ name: e, dimmed: t = !1, styles: n = {} }) => {
    const r = Je("ObjectName"),
      o = { ...r.base, ...(t ? r.dimmed : {}), ...n };
    return F.createElement("span", { style: o }, e);
  },
  Zr = ({ object: e, styles: t }) => {
    const n = Je("ObjectValue"),
      r = (o) => ({ ...n[o], ...t });
    switch (typeof e) {
      case "bigint":
        return F.createElement(
          "span",
          { style: r("objectValueNumber") },
          String(e),
          "n"
        );
      case "number":
        return F.createElement(
          "span",
          { style: r("objectValueNumber") },
          String(e)
        );
      case "string":
        return F.createElement(
          "span",
          { style: r("objectValueString") },
          '"',
          e,
          '"'
        );
      case "boolean":
        return F.createElement(
          "span",
          { style: r("objectValueBoolean") },
          String(e)
        );
      case "undefined":
        return F.createElement(
          "span",
          { style: r("objectValueUndefined") },
          "undefined"
        );
      case "object":
        return e === null
          ? F.createElement("span", { style: r("objectValueNull") }, "null")
          : e instanceof Date
          ? F.createElement("span", null, e.toString())
          : e instanceof RegExp
          ? F.createElement(
              "span",
              { style: r("objectValueRegExp") },
              e.toString()
            )
          : Array.isArray(e)
          ? F.createElement("span", null, `Array(${e.length})`)
          : e.constructor
          ? typeof e.constructor.isBuffer == "function" &&
            e.constructor.isBuffer(e)
            ? F.createElement("span", null, `Buffer[${e.length}]`)
            : F.createElement("span", null, e.constructor.name)
          : F.createElement("span", null, "Object");
      case "function":
        return F.createElement(
          "span",
          null,
          F.createElement(
            "span",
            { style: r("objectValueFunctionPrefix") },
            "\u0192\xA0"
          ),
          F.createElement(
            "span",
            { style: r("objectValueFunctionName") },
            e.name,
            "()"
          )
        );
      case "symbol":
        return F.createElement(
          "span",
          { style: r("objectValueSymbol") },
          e.toString()
        );
      default:
        return F.createElement("span", null);
    }
  },
  Ch = Object.prototype.hasOwnProperty,
  ow = Object.prototype.propertyIsEnumerable;
function ks(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  if (n.get)
    try {
      return n.get();
    } catch {
      return n.get;
    }
  return e[t];
}
function zd(e, t) {
  return e.length === 0
    ? []
    : e.slice(1).reduce((n, r) => n.concat([t, r]), [e[0]]);
}
var Ts = ({ data: e }) => {
    const t = Je("ObjectPreview"),
      n = e;
    if (
      typeof n != "object" ||
      n === null ||
      n instanceof Date ||
      n instanceof RegExp
    )
      return F.createElement(Zr, { object: n });
    if (Array.isArray(n)) {
      const r = t.arrayMaxProperties,
        o = n
          .slice(0, r)
          .map((l, s) => F.createElement(Zr, { key: s, object: l }));
      n.length > r &&
        o.push(F.createElement("span", { key: "ellipsis" }, "\u2026"));
      const i = n.length;
      return F.createElement(
        F.Fragment,
        null,
        F.createElement(
          "span",
          { style: t.objectDescription },
          i === 0 ? "" : `(${i})\xA0`
        ),
        F.createElement("span", { style: t.preview }, "[", zd(o, ", "), "]")
      );
    } else {
      const r = t.objectMaxProperties,
        o = [];
      for (const l in n)
        if (Ch.call(n, l)) {
          let s;
          o.length === r - 1 &&
            Object.keys(n).length > r &&
            (s = F.createElement("span", { key: "ellipsis" }, "\u2026"));
          const a = ks(n, l);
          if (
            (o.push(
              F.createElement(
                "span",
                { key: l },
                F.createElement(zu, { name: l || '""' }),
                ":\xA0",
                F.createElement(Zr, { object: a }),
                s
              )
            ),
            s)
          )
            break;
        }
      const i = n.constructor ? n.constructor.name : "Object";
      return F.createElement(
        F.Fragment,
        null,
        F.createElement(
          "span",
          { style: t.objectDescription },
          i === "Object" ? "" : `${i} `
        ),
        F.createElement("span", { style: t.preview }, "{", zd(o, ", "), "}")
      );
    }
  },
  iw = ({ name: e, data: t }) =>
    typeof e == "string"
      ? F.createElement(
          "span",
          null,
          F.createElement(zu, { name: e }),
          F.createElement("span", null, ": "),
          F.createElement(Ts, { data: t })
        )
      : F.createElement(Ts, { data: t }),
  lw = ({ name: e, data: t, isNonenumerable: n = !1 }) => {
    const r = t;
    return F.createElement(
      "span",
      null,
      typeof e == "string"
        ? F.createElement(zu, { name: e, dimmed: n })
        : F.createElement(Ts, { data: e }),
      F.createElement("span", null, ": "),
      F.createElement(Zr, { object: r })
    );
  },
  aw = (e, t) =>
    function* (r) {
      if (!((typeof r == "object" && r !== null) || typeof r == "function"))
        return;
      const i = Array.isArray(r);
      if (!i && r[Symbol.iterator]) {
        let l = 0;
        for (const s of r) {
          if (Array.isArray(s) && s.length === 2) {
            const [a, c] = s;
            yield { name: a, data: c };
          } else yield { name: l.toString(), data: s };
          l++;
        }
      } else {
        const l = Object.getOwnPropertyNames(r);
        t === !0 && !i ? l.sort() : typeof t == "function" && l.sort(t);
        for (const s of l)
          if (ow.call(r, s)) {
            const a = ks(r, s);
            yield { name: s || '""', data: a };
          } else if (e) {
            let a;
            try {
              a = ks(r, s);
            } catch {}
            a !== void 0 && (yield { name: s, data: a, isNonenumerable: !0 });
          }
        e &&
          r !== Object.prototype &&
          (yield {
            name: "__proto__",
            data: Object.getPrototypeOf(r),
            isNonenumerable: !0,
          });
      }
    },
  sw = ({ depth: e, name: t, data: n, isNonenumerable: r }) =>
    e === 0
      ? _(iw, { name: t, data: n })
      : _(lw, { name: t, data: n, isNonenumerable: r }),
  uw = ({
    showNonenumerable: e = !1,
    sortObjectKeys: t,
    nodeRenderer: n,
    ...r
  }) => {
    const o = aw(e, t);
    return _(Sh, { nodeRenderer: n || sw, dataIterator: o, ...r });
  },
  cw = Uu(uw);
function dw(e) {
  if (typeof e == "object") {
    let t = [];
    if (Array.isArray(e)) {
      const r = e.length;
      t = [...Array(r).keys()];
    } else e !== null && (t = Object.keys(e));
    const n = t.reduce((r, o) => {
      const i = e[o];
      return (
        typeof i == "object" &&
          i !== null &&
          Object.keys(i).reduce((s, a) => (s.includes(a) || s.push(a), s), r),
        r
      );
    }, []);
    return { rowHeaders: t, colHeaders: n };
  }
}
var fw = ({ rows: e, columns: t, rowsData: n }) => {
    const r = Je("TableInspectorDataContainer"),
      o = Je("TableInspectorLeftBorder");
    return F.createElement(
      "div",
      { style: r.div },
      F.createElement(
        "table",
        { style: r.table },
        F.createElement("colgroup", null),
        F.createElement(
          "tbody",
          null,
          e.map((i, l) =>
            F.createElement(
              "tr",
              { key: i, style: r.tr },
              F.createElement("td", { style: { ...r.td, ...o.none } }, i),
              t.map((s) => {
                const a = n[l];
                return typeof a == "object" && a !== null && Ch.call(a, s)
                  ? F.createElement(
                      "td",
                      { key: s, style: { ...r.td, ...o.solid } },
                      F.createElement(Zr, { object: a[s] })
                    )
                  : F.createElement("td", {
                      key: s,
                      style: { ...r.td, ...o.solid },
                    });
              })
            )
          )
        )
      )
    );
  },
  pw = (e) =>
    F.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 1,
          right: 0,
          bottom: 1,
          display: "flex",
          alignItems: "center",
        },
      },
      e.children
    ),
  hw = ({ sortAscending: e }) => {
    const t = Je("TableInspectorSortIcon"),
      n = e ? "\u25B2" : "\u25BC";
    return F.createElement("div", { style: t }, n);
  },
  Hd = ({
    sortAscending: e = !1,
    sorted: t = !1,
    onClick: n = void 0,
    borderStyle: r = {},
    children: o,
    ...i
  }) => {
    const l = Je("TableInspectorTH"),
      [s, a] = A.exports.useState(!1),
      c = A.exports.useCallback(() => a(!0), []),
      d = A.exports.useCallback(() => a(!1), []);
    return F.createElement(
      "th",
      {
        ...i,
        style: { ...l.base, ...r, ...(s ? l.base[":hover"] : {}) },
        onMouseEnter: c,
        onMouseLeave: d,
        onClick: n,
      },
      F.createElement("div", { style: l.div }, o),
      t && F.createElement(pw, null, F.createElement(hw, { sortAscending: e }))
    );
  },
  mw = ({
    indexColumnText: e = "(index)",
    columns: t = [],
    sorted: n,
    sortIndexColumn: r,
    sortColumn: o,
    sortAscending: i,
    onTHClick: l,
    onIndexTHClick: s,
  }) => {
    const a = Je("TableInspectorHeaderContainer"),
      c = Je("TableInspectorLeftBorder");
    return F.createElement(
      "div",
      { style: a.base },
      F.createElement(
        "table",
        { style: a.table },
        F.createElement(
          "tbody",
          null,
          F.createElement(
            "tr",
            null,
            F.createElement(
              Hd,
              {
                borderStyle: c.none,
                sorted: n && r,
                sortAscending: i,
                onClick: s,
              },
              e
            ),
            t.map((d) =>
              F.createElement(
                Hd,
                {
                  borderStyle: c.solid,
                  key: d,
                  sorted: n && o === d,
                  sortAscending: i,
                  onClick: l.bind(null, d),
                },
                d
              )
            )
          )
        )
      )
    );
  },
  gw = ({ data: e, columns: t }) => {
    const n = Je("TableInspector"),
      [{ sorted: r, sortIndexColumn: o, sortColumn: i, sortAscending: l }, s] =
        A.exports.useState({
          sorted: !1,
          sortIndexColumn: !1,
          sortColumn: void 0,
          sortAscending: !1,
        }),
      a = A.exports.useCallback(() => {
        s(({ sortIndexColumn: w, sortAscending: y }) => ({
          sorted: !0,
          sortIndexColumn: !0,
          sortColumn: void 0,
          sortAscending: w ? !y : !0,
        }));
      }, []),
      c = A.exports.useCallback((w) => {
        s(({ sortColumn: y, sortAscending: x }) => ({
          sorted: !0,
          sortIndexColumn: !1,
          sortColumn: w,
          sortAscending: w === y ? !x : !0,
        }));
      }, []);
    if (typeof e != "object" || e === null) return F.createElement("div", null);
    let { rowHeaders: d, colHeaders: u } = dw(e);
    t !== void 0 && (u = t);
    let p = d.map((w) => e[w]),
      m;
    if (
      (i !== void 0
        ? (m = p.map((w, y) =>
            typeof w == "object" && w !== null ? [w[i], y] : [void 0, y]
          ))
        : o && (m = d.map((w, y) => [d[y], y])),
      m !== void 0)
    ) {
      const w = (x, v) => (f, h) => {
          const E = x(f),
            C = x(h),
            b = typeof E,
            k = typeof C,
            O = ($, V) => ($ < V ? -1 : $ > V ? 1 : 0);
          let I;
          if (b === k) I = O(E, C);
          else {
            const $ = {
              string: 0,
              number: 1,
              object: 2,
              symbol: 3,
              boolean: 4,
              undefined: 5,
              function: 6,
            };
            I = O($[b], $[k]);
          }
          return v || (I = -I), I;
        },
        y = m.sort(w((x) => x[0], l)).map((x) => x[1]);
      (d = y.map((x) => d[x])), (p = y.map((x) => p[x]));
    }
    return F.createElement(
      "div",
      { style: n.base },
      F.createElement(mw, {
        columns: u,
        sorted: r,
        sortIndexColumn: o,
        sortColumn: i,
        sortAscending: l,
        onTHClick: c,
        onIndexTHClick: a,
      }),
      F.createElement(fw, { rows: d, columns: u, rowsData: p })
    );
  },
  yw = Uu(gw),
  vw = 80,
  Ah = (e) =>
    e.childNodes.length === 0 ||
    (e.childNodes.length === 1 &&
      e.childNodes[0].nodeType === Node.TEXT_NODE &&
      e.textContent.length < vw),
  Ew = ({ tagName: e, attributes: t, styles: n }) =>
    F.createElement(
      "span",
      { style: n.base },
      "<",
      F.createElement("span", { style: n.tagName }, e),
      (() => {
        if (t) {
          const r = [];
          for (let o = 0; o < t.length; o++) {
            const i = t[o];
            r.push(
              F.createElement(
                "span",
                { key: o },
                " ",
                F.createElement("span", { style: n.htmlAttributeName }, i.name),
                '="',
                F.createElement(
                  "span",
                  { style: n.htmlAttributeValue },
                  i.value
                ),
                '"'
              )
            );
          }
          return r;
        }
      })(),
      ">"
    ),
  Vd = ({ tagName: e, isChildNode: t = !1, styles: n }) =>
    F.createElement(
      "span",
      { style: Object.assign({}, n.base, t && n.offsetLeft) },
      "</",
      F.createElement("span", { style: n.tagName }, e),
      ">"
    ),
  ww = {
    1: "ELEMENT_NODE",
    3: "TEXT_NODE",
    7: "PROCESSING_INSTRUCTION_NODE",
    8: "COMMENT_NODE",
    9: "DOCUMENT_NODE",
    10: "DOCUMENT_TYPE_NODE",
    11: "DOCUMENT_FRAGMENT_NODE",
  },
  _w = ({ isCloseTag: e, data: t, expanded: n }) => {
    const r = Je("DOMNodePreview");
    if (e)
      return F.createElement(Vd, {
        styles: r.htmlCloseTag,
        isChildNode: !0,
        tagName: t.tagName,
      });
    switch (t.nodeType) {
      case Node.ELEMENT_NODE:
        return F.createElement(
          "span",
          null,
          F.createElement(Ew, {
            tagName: t.tagName,
            attributes: t.attributes,
            styles: r.htmlOpenTag,
          }),
          Ah(t) ? t.textContent : !n && "\u2026",
          !n &&
            F.createElement(Vd, { tagName: t.tagName, styles: r.htmlCloseTag })
        );
      case Node.TEXT_NODE:
        return F.createElement("span", null, t.textContent);
      case Node.CDATA_SECTION_NODE:
        return F.createElement(
          "span",
          null,
          "<![CDATA[" + t.textContent + "]]>"
        );
      case Node.COMMENT_NODE:
        return F.createElement(
          "span",
          { style: r.htmlComment },
          "<!--",
          t.textContent,
          "-->"
        );
      case Node.PROCESSING_INSTRUCTION_NODE:
        return F.createElement("span", null, t.nodeName);
      case Node.DOCUMENT_TYPE_NODE:
        return F.createElement(
          "span",
          { style: r.htmlDoctype },
          "<!DOCTYPE ",
          t.name,
          t.publicId ? ` PUBLIC "${t.publicId}"` : "",
          !t.publicId && t.systemId ? " SYSTEM" : "",
          t.systemId ? ` "${t.systemId}"` : "",
          ">"
        );
      case Node.DOCUMENT_NODE:
        return F.createElement("span", null, t.nodeName);
      case Node.DOCUMENT_FRAGMENT_NODE:
        return F.createElement("span", null, t.nodeName);
      default:
        return F.createElement("span", null, ww[t.nodeType]);
    }
  },
  Sw = function* (e) {
    if (e && e.childNodes) {
      if (Ah(e)) return;
      for (let n = 0; n < e.childNodes.length; n++) {
        const r = e.childNodes[n];
        (r.nodeType === Node.TEXT_NODE && r.textContent.trim().length === 0) ||
          (yield { name: `${r.tagName}[${n}]`, data: r });
      }
      e.tagName &&
        (yield {
          name: "CLOSE_TAG",
          data: { tagName: e.tagName },
          isCloseTag: !0,
        });
    }
  },
  Cw = (e) => F.createElement(Sh, { nodeRenderer: _w, dataIterator: Sw, ...e }),
  Aw = Uu(Cw),
  bw = Z1(K1()),
  xw = ({ table: e = !1, data: t, ...n }) =>
    e
      ? F.createElement(yw, { data: t, ...n })
      : (0, bw.default)(t)
      ? F.createElement(Aw, { data: t, ...n })
      : F.createElement(cw, { data: t, ...n });
const Ow = ({ dispatch: e, globalState: t }) => {
    const [n, r] = A.exports.useState(!1),
      o = "Log of events triggered by user.";
    return _("li", {
      children: z("button", {
        "aria-label": o,
        title: o,
        onClick: () => r(!0),
        className: n ? "ladle-active" : "",
        "data-testid": "addon-action",
        children: [
          _(hg, {}),
          _("span", { className: "ladle-addon-tooltip", children: o }),
          _("label", { children: "Actions" }),
          t.action.length
            ? _("div", { className: "ladle-badge", children: t.action.length })
            : null,
          z(wr, {
            maxWidth: "60em",
            isOpen: n,
            close: () => r(!1),
            label: "Dialog with a log of events triggered by user.",
            children: [
              t.action.map((i, l) =>
                _(
                  xw,
                  {
                    table: !1,
                    sortObjectKeys: !0,
                    theme: {
                      ...(t.theme === Ce.Light ? vh : yh),
                      BASE_BACKGROUND_COLOR: "var(--ladle-bg-color-secondary)",
                    },
                    showNonenumerable: !1,
                    name: i.name,
                    data: i.event,
                  },
                  l
                )
              ),
              _("button", {
                onClick: () => {
                  e({ type: se.UpdateAction, clear: !0, value: void 0 });
                },
                children: "Clear actions",
              }),
            ],
          }),
        ],
      }),
    });
  },
  kw = (e) => {
    const t = vt.parse(e).rtl;
    return t === "true" ? !0 : t === "false" ? !1 : le.addons.rtl.defaultState;
  },
  Tw = ({ dispatch: e, globalState: t }) => {
    const n = "Switch text direction to right to left.",
      r = "Switch text direction to left to right.";
    return _("li", {
      children: z("button", {
        "aria-label": t.rtl ? r : n,
        title: t.rtl ? r : n,
        className: t.rtl ? "ladle-active" : "",
        onClick: () => e({ type: se.UpdateRtl, value: !t.rtl }),
        children: [
          _(og, {}),
          _("span", {
            className: "ladle-addon-tooltip",
            children: t.rtl ? r : n,
          }),
          _("label", { children: "Right to left" }),
        ],
      }),
    });
  };
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var Ds = (function () {
    var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      n = {},
      r = {
        util: {
          encode: function u(p) {
            return p instanceof o
              ? new o(p.type, u(p.content), p.alias)
              : Array.isArray(p)
              ? p.map(u)
              : p
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (u) {
            return Object.prototype.toString.call(u).slice(8, -1);
          },
          objId: function (u) {
            return (
              u.__id || Object.defineProperty(u, "__id", { value: ++t }), u.__id
            );
          },
          clone: function u(p, m) {
            m = m || {};
            var w, y;
            switch (r.util.type(p)) {
              case "Object":
                if (((y = r.util.objId(p)), m[y])) return m[y];
                (w = {}), (m[y] = w);
                for (var x in p) p.hasOwnProperty(x) && (w[x] = u(p[x], m));
                return w;
              case "Array":
                return (
                  (y = r.util.objId(p)),
                  m[y]
                    ? m[y]
                    : ((w = []),
                      (m[y] = w),
                      p.forEach(function (v, f) {
                        w[f] = u(v, m);
                      }),
                      w)
                );
              default:
                return p;
            }
          },
          getLanguage: function (u) {
            for (; u; ) {
              var p = e.exec(u.className);
              if (p) return p[1].toLowerCase();
              u = u.parentElement;
            }
            return "none";
          },
          setLanguage: function (u, p) {
            (u.className = u.className.replace(RegExp(e, "gi"), "")),
              u.classList.add("language-" + p);
          },
          isActive: function (u, p, m) {
            for (var w = "no-" + p; u; ) {
              var y = u.classList;
              if (y.contains(p)) return !0;
              if (y.contains(w)) return !1;
              u = u.parentElement;
            }
            return !!m;
          },
        },
        languages: {
          plain: n,
          plaintext: n,
          text: n,
          txt: n,
          extend: function (u, p) {
            var m = r.util.clone(r.languages[u]);
            for (var w in p) m[w] = p[w];
            return m;
          },
          insertBefore: function (u, p, m, w) {
            w = w || r.languages;
            var y = w[u],
              x = {};
            for (var v in y)
              if (y.hasOwnProperty(v)) {
                if (v == p)
                  for (var f in m) m.hasOwnProperty(f) && (x[f] = m[f]);
                m.hasOwnProperty(v) || (x[v] = y[v]);
              }
            var h = w[u];
            return (
              (w[u] = x),
              r.languages.DFS(r.languages, function (E, C) {
                C === h && E != u && (this[E] = x);
              }),
              x
            );
          },
          DFS: function u(p, m, w, y) {
            y = y || {};
            var x = r.util.objId;
            for (var v in p)
              if (p.hasOwnProperty(v)) {
                m.call(p, v, p[v], w || v);
                var f = p[v],
                  h = r.util.type(f);
                h === "Object" && !y[x(f)]
                  ? ((y[x(f)] = !0), u(f, m, null, y))
                  : h === "Array" &&
                    !y[x(f)] &&
                    ((y[x(f)] = !0), u(f, m, v, y));
              }
          },
        },
        plugins: {},
        highlight: function (u, p, m) {
          var w = { code: u, grammar: p, language: m };
          return (
            r.hooks.run("before-tokenize", w),
            (w.tokens = r.tokenize(w.code, w.grammar)),
            r.hooks.run("after-tokenize", w),
            o.stringify(r.util.encode(w.tokens), w.language)
          );
        },
        tokenize: function (u, p) {
          var m = p.rest;
          if (m) {
            for (var w in m) p[w] = m[w];
            delete p.rest;
          }
          var y = new s();
          return a(y, y.head, u), l(u, y, p, y.head, 0), d(y);
        },
        hooks: {
          all: {},
          add: function (u, p) {
            var m = r.hooks.all;
            (m[u] = m[u] || []), m[u].push(p);
          },
          run: function (u, p) {
            var m = r.hooks.all[u];
            if (!(!m || !m.length)) for (var w = 0, y; (y = m[w++]); ) y(p);
          },
        },
        Token: o,
      };
    function o(u, p, m, w) {
      (this.type = u),
        (this.content = p),
        (this.alias = m),
        (this.length = (w || "").length | 0);
    }
    o.stringify = function u(p, m) {
      if (typeof p == "string") return p;
      if (Array.isArray(p)) {
        var w = "";
        return (
          p.forEach(function (h) {
            w += u(h, m);
          }),
          w
        );
      }
      var y = {
          type: p.type,
          content: u(p.content, m),
          tag: "span",
          classes: ["token", p.type],
          attributes: {},
          language: m,
        },
        x = p.alias;
      x &&
        (Array.isArray(x)
          ? Array.prototype.push.apply(y.classes, x)
          : y.classes.push(x)),
        r.hooks.run("wrap", y);
      var v = "";
      for (var f in y.attributes)
        v +=
          " " +
          f +
          '="' +
          (y.attributes[f] || "").replace(/"/g, "&quot;") +
          '"';
      return (
        "<" +
        y.tag +
        ' class="' +
        y.classes.join(" ") +
        '"' +
        v +
        ">" +
        y.content +
        "</" +
        y.tag +
        ">"
      );
    };
    function i(u, p, m, w) {
      u.lastIndex = p;
      var y = u.exec(m);
      if (y && w && y[1]) {
        var x = y[1].length;
        (y.index += x), (y[0] = y[0].slice(x));
      }
      return y;
    }
    function l(u, p, m, w, y, x) {
      for (var v in m)
        if (!(!m.hasOwnProperty(v) || !m[v])) {
          var f = m[v];
          f = Array.isArray(f) ? f : [f];
          for (var h = 0; h < f.length; ++h) {
            if (x && x.cause == v + "," + h) return;
            var E = f[h],
              C = E.inside,
              b = !!E.lookbehind,
              k = !!E.greedy,
              O = E.alias;
            if (k && !E.pattern.global) {
              var I = E.pattern.toString().match(/[imsuy]*$/)[0];
              E.pattern = RegExp(E.pattern.source, I + "g");
            }
            for (
              var $ = E.pattern || E, V = w.next, D = y;
              V !== p.tail && !(x && D >= x.reach);
              D += V.value.length, V = V.next
            ) {
              var M = V.value;
              if (p.length > u.length) return;
              if (!(M instanceof o)) {
                var G = 1,
                  H;
                if (k) {
                  if (((H = i($, D, u, b)), !H || H.index >= u.length)) break;
                  var P = H.index,
                    W = H.index + H[0].length,
                    q = D;
                  for (q += V.value.length; P >= q; )
                    (V = V.next), (q += V.value.length);
                  if (((q -= V.value.length), (D = q), V.value instanceof o))
                    continue;
                  for (
                    var R = V;
                    R !== p.tail && (q < W || typeof R.value == "string");
                    R = R.next
                  )
                    G++, (q += R.value.length);
                  G--, (M = u.slice(D, q)), (H.index -= D);
                } else if (((H = i($, 0, M, b)), !H)) continue;
                var P = H.index,
                  B = H[0],
                  X = M.slice(0, P),
                  Q = M.slice(P + B.length),
                  Z = D + M.length;
                x && Z > x.reach && (x.reach = Z);
                var ae = V.prev;
                X && ((ae = a(p, ae, X)), (D += X.length)), c(p, ae, G);
                var st = new o(v, C ? r.tokenize(B, C) : B, O, B);
                if (((V = a(p, ae, st)), Q && a(p, V, Q), G > 1)) {
                  var de = { cause: v + "," + h, reach: Z };
                  l(u, p, m, V.prev, D, de),
                    x && de.reach > x.reach && (x.reach = de.reach);
                }
              }
            }
          }
        }
    }
    function s() {
      var u = { value: null, prev: null, next: null },
        p = { value: null, prev: u, next: null };
      (u.next = p), (this.head = u), (this.tail = p), (this.length = 0);
    }
    function a(u, p, m) {
      var w = p.next,
        y = { value: m, prev: p, next: w };
      return (p.next = y), (w.prev = y), u.length++, y;
    }
    function c(u, p, m) {
      for (var w = p.next, y = 0; y < m && w !== u.tail; y++) w = w.next;
      (p.next = w), (w.prev = p), (u.length -= y);
    }
    function d(u) {
      for (var p = [], m = u.head.next; m !== u.tail; )
        p.push(m.value), (m = m.next);
      return p;
    }
    return r;
  })(),
  N = Ds;
Ds.default = Ds;
N.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
};
N.languages.markup.tag.inside["attr-value"].inside.entity =
  N.languages.markup.entity;
N.languages.markup.doctype.inside["internal-subset"].inside =
  N.languages.markup;
N.hooks.add("wrap", function (e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(N.languages.markup.tag, "addInlined", {
  value: function (t, n) {
    var r = {};
    (r["language-" + n] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: N.languages[n],
    }),
      (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
    var o = {
      "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r },
    };
    o["language-" + n] = { pattern: /[\s\S]+/, inside: N.languages[n] };
    var i = {};
    (i[t] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return t;
          }
        ),
        "i"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: o,
    }),
      N.languages.insertBefore("markup", "cdata", i);
  },
});
Object.defineProperty(N.languages.markup.tag, "addAttribute", {
  value: function (e, t) {
    N.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          e +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [t, "language-" + t],
              inside: N.languages[t],
            },
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
      },
    });
  },
});
N.languages.html = N.languages.markup;
N.languages.mathml = N.languages.markup;
N.languages.svg = N.languages.markup;
N.languages.xml = N.languages.extend("markup", {});
N.languages.ssml = N.languages.xml;
N.languages.atom = N.languages.xml;
N.languages.rss = N.languages.xml;
(function (e) {
  var t =
      "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null,
    },
    r = {
      bash: n,
      environment: { pattern: RegExp("\\$" + t), alias: "constant" },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
              /^\$\(\(/,
            ],
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator:
              /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/,
          },
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: { variable: /^\$\(|^`|\)$|`$/ },
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + t),
              lookbehind: !0,
              alias: "constant",
            },
          },
        },
        /\$(?:\w+|[#?*!@$])/,
      ],
      entity:
        /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
    };
  (e.languages.bash = {
    shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
    "function-name": [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function",
      },
      { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0,
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant",
        },
      },
      alias: "variable",
      lookbehind: !0,
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r,
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: { bash: n },
      },
      {
        pattern:
          /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r,
      },
      { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: { entity: r.entity },
      },
    ],
    environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
    variable: r.variable,
    function: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    keyword: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    builtin: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name",
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
    operator: {
      pattern:
        /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
  }),
    (n.inside = e.languages.bash);
  for (
    var o = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number",
      ],
      i = r.variable[1].inside,
      l = 0;
    l < o.length;
    l++
  )
    i[o[l]] = e.languages.bash[o[l]];
  e.languages.shell = e.languages.bash;
})(N);
N.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
N.languages.c = N.languages.extend("clike", {
  comment: {
    pattern:
      /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  "class-name": {
    pattern:
      /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
});
N.languages.insertBefore("c", "string", {
  char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
});
N.languages.insertBefore("c", "string", {
  macro: {
    pattern:
      /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
        N.languages.c.string,
      ],
      char: N.languages.c.char,
      comment: N.languages.c.comment,
      "macro-name": [
        { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function",
        },
      ],
      directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: { pattern: /\S[\s\S]*/, inside: N.languages.c },
    },
  },
});
N.languages.insertBefore("c", "function", {
  constant:
    /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
});
delete N.languages.c.boolean;
(function (e) {
  var t =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
      /<keyword>/g,
      function () {
        return t.source;
      }
    );
  (e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(
          /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
    ],
    keyword: t,
    number: {
      pattern:
        /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0,
    },
    operator:
      />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/,
  })),
    e.languages.insertBefore("cpp", "string", {
      module: {
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source +
            "(?:" +
            /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
            "|" +
            /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
              /<mod-name>/g,
              function () {
                return n;
              }
            ) +
            ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0,
      },
    }),
    e.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: e.languages.cpp,
          },
        },
      },
    }),
    e.languages.insertBefore("cpp", "operator", {
      "double-colon": { pattern: /::/, alias: "punctuation" },
    }),
    e.languages.insertBefore("cpp", "class-name", {
      "base-clause": {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend("cpp", {}),
      },
    }),
    e.languages.insertBefore(
      "inside",
      "double-colon",
      { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
      e.languages.cpp["base-clause"]
    );
})(N);
(function (e) {
  var t =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  (e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" +
          t.source +
          "|" +
          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
          ")\\)",
        "i"
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
          t.source +
          ")*(?=\\s*\\{)"
      ),
      lookbehind: !0,
    },
    string: { pattern: t, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (e.languages.css.atrule.inside.rest = e.languages.css);
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(N);
(function (e) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    n;
  (e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: (n = {
      "pseudo-element":
        /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + t.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword",
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: { punctuation: /\|$/ },
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0,
          },
          "attr-value": [
            t,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0,
            },
          ],
          operator: /[|~*^$]?=/,
        },
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: { number: /[\dn]+/, operator: /[+-]/ },
        },
        { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
      ],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/,
    }),
  }),
    (e.languages.css.atrule.inside["selector-function-argument"].inside = n),
    e.languages.insertBefore("css", "property", {
      variable: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
        lookbehind: !0,
      },
    });
  var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
    o = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", {
    operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
    hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
    color: [
      {
        pattern:
          /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: r,
          number: o,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/,
        },
      },
    ],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: o,
  });
})(N);
N.languages.javascript = N.languages.extend("clike", {
  "class-name": [
    N.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source +
        "(?:" +
        (/NaN|Infinity/.source +
          "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          "|" +
          /\d+(?:_\d+)*n/.source +
          "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source) +
        ")" +
        /(?![\w$])/.source
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});
N.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
N.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: N.languages.regex,
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/,
    },
  },
  "function-variable": {
    pattern:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
    {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
N.languages.insertBefore("javascript", "string", {
  hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
  "template-string": {
    pattern:
      /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": { pattern: /^`|`$/, alias: "string" },
      interpolation: {
        pattern:
          /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation",
          },
          rest: N.languages.javascript,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "string-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
  },
});
N.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property",
  },
});
N.languages.markup &&
  (N.languages.markup.tag.addInlined("script", "javascript"),
  N.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
      .source,
    "javascript"
  ));
N.languages.js = N.languages.javascript;
(function (e) {
  var t = /#(?!\{).+/,
    n = { pattern: /#\{[^}]+\}/, alias: "variable" };
  (e.languages.coffeescript = e.languages.extend("javascript", {
    comment: t,
    string: [
      { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ],
    keyword:
      /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
  })),
    e.languages.insertBefore("coffeescript", "comment", {
      "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
      "block-regex": {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: "regex",
        inside: { comment: t, interpolation: n },
      },
    }),
    e.languages.insertBefore("coffeescript", "string", {
      "inline-javascript": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: "punctuation" },
          script: {
            pattern: /[\s\S]+/,
            alias: "language-javascript",
            inside: e.languages.javascript,
          },
        },
      },
      "multiline-string": [
        { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: !0,
          alias: "string",
          inside: { interpolation: n },
        },
      ],
    }),
    e.languages.insertBefore("coffeescript", "keyword", {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    }),
    delete e.languages.coffeescript["template-string"],
    (e.languages.coffee = e.languages.coffeescript);
})(N);
(function (e) {
  var t = /[*&][^\s[\]{},]+/,
    n =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    r =
      "(?:" +
      n.source +
      "(?:[ 	]+" +
      t.source +
      ")?|" +
      t.source +
      "(?:[ 	]+" +
      n.source +
      ")?)",
    o =
      /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function () {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
            .source;
        }
      ),
    i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function l(s, a) {
    a = (a || "").replace(/m/g, "") + "m";
    var c =
      /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
        .replace(/<<prop>>/g, function () {
          return r;
        })
        .replace(/<<value>>/g, function () {
          return s;
        });
    return RegExp(c, a);
  }
  (e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
          /<<prop>>/g,
          function () {
            return r;
          }
        )
      ),
      lookbehind: !0,
      alias: "string",
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
          .replace(/<<prop>>/g, function () {
            return r;
          })
          .replace(/<<key>>/g, function () {
            return "(?:" + o + "|" + i + ")";
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule",
    },
    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
    datetime: {
      pattern: l(
        /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
          .source
      ),
      lookbehind: !0,
      alias: "number",
    },
    boolean: {
      pattern: l(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important",
    },
    null: {
      pattern: l(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important",
    },
    string: { pattern: l(i), lookbehind: !0, greedy: !0 },
    number: {
      pattern: l(
        /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
          .source,
        "i"
      ),
      lookbehind: !0,
    },
    tag: n,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml);
})(N);
(function (e) {
  var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function n(d) {
    return (
      (d = d.replace(/<inner>/g, function () {
        return t;
      })),
      RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d + ")")
    );
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
    o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
      /__/g,
      function () {
        return r;
      }
    ),
    i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
      .source;
  (e.languages.markdown = e.languages.extend("markup", {})),
    e.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: e.languages.yaml,
          },
        },
      },
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
      table: {
        pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(r),
                inside: e.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          "table-line": {
            pattern: RegExp("^(" + o + ")" + i + "$"),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ },
          },
          "table-header-row": {
            pattern: RegExp("^" + o + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(r),
                alias: "important",
                inside: e.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword",
        },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            "code-language": { pattern: /^(```).+/, lookbehind: !0 },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: { punctuation: /==+$|--+$/ },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: { punctuation: /^#+|#+$/ },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      "url-reference": {
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: "url",
      },
      bold: {
        pattern: n(
          /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: n(
          /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      "code-snippet": {
        pattern:
          /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"],
      },
      url: {
        pattern: n(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
          variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
          url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ["url", "bold", "italic", "strike"].forEach(function (d) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (u) {
        d !== u &&
          (e.languages.markdown[d].inside.content.inside[u] =
            e.languages.markdown[u]);
      });
    }),
    e.hooks.add("after-tokenize", function (d) {
      if (d.language !== "markdown" && d.language !== "md") return;
      function u(p) {
        if (!(!p || typeof p == "string"))
          for (var m = 0, w = p.length; m < w; m++) {
            var y = p[m];
            if (y.type !== "code") {
              u(y.content);
              continue;
            }
            var x = y.content[1],
              v = y.content[3];
            if (
              x &&
              v &&
              x.type === "code-language" &&
              v.type === "code-block" &&
              typeof x.content == "string"
            ) {
              var f = x.content
                .replace(/\b#/g, "sharp")
                .replace(/\b\+\+/g, "pp");
              f = (/[a-z][\w-]*/i.exec(f) || [""])[0].toLowerCase();
              var h = "language-" + f;
              v.alias
                ? typeof v.alias == "string"
                  ? (v.alias = [v.alias, h])
                  : v.alias.push(h)
                : (v.alias = [h]);
            }
          }
      }
      u(d.tokens);
    }),
    e.hooks.add("wrap", function (d) {
      if (d.type === "code-block") {
        for (var u = "", p = 0, m = d.classes.length; p < m; p++) {
          var w = d.classes[p],
            y = /language-(.+)/.exec(w);
          if (y) {
            u = y[1];
            break;
          }
        }
        var x = e.languages[u];
        if (x) d.content = e.highlight(c(d.content), x, u);
        else if (u && u !== "none" && e.plugins.autoloader) {
          var v =
            "md-" +
            new Date().valueOf() +
            "-" +
            Math.floor(Math.random() * 1e16);
          (d.attributes.id = v),
            e.plugins.autoloader.loadLanguages(u, function () {
              var f = document.getElementById(v);
              f &&
                (f.innerHTML = e.highlight(f.textContent, e.languages[u], u));
            });
        }
      }
    });
  var l = RegExp(e.languages.markup.tag.pattern.source, "gi"),
    s = { amp: "&", lt: "<", gt: ">", quot: '"' },
    a = String.fromCodePoint || String.fromCharCode;
  function c(d) {
    var u = d.replace(l, "");
    return (
      (u = u.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (p, m) {
        if (((m = m.toLowerCase()), m[0] === "#")) {
          var w;
          return (
            m[1] === "x"
              ? (w = parseInt(m.slice(2), 16))
              : (w = Number(m.slice(1))),
            a(w)
          );
        } else {
          var y = s[m];
          return y || p;
        }
      })),
      u
    );
  }
  e.languages.md = e.languages.markdown;
})(N);
N.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: N.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern:
      /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  keyword:
    /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/,
};
N.hooks.add("after-tokenize", function (t) {
  if (t.language !== "graphql") return;
  var n = t.tokens.filter(function (y) {
      return (
        typeof y != "string" && y.type !== "comment" && y.type !== "scalar"
      );
    }),
    r = 0;
  function o(y) {
    return n[r + y];
  }
  function i(y, x) {
    x = x || 0;
    for (var v = 0; v < y.length; v++) {
      var f = o(v + x);
      if (!f || f.type !== y[v]) return !1;
    }
    return !0;
  }
  function l(y, x) {
    for (var v = 1, f = r; f < n.length; f++) {
      var h = n[f],
        E = h.content;
      if (h.type === "punctuation" && typeof E == "string") {
        if (y.test(E)) v++;
        else if (x.test(E) && (v--, v === 0)) return f;
      }
    }
    return -1;
  }
  function s(y, x) {
    var v = y.alias;
    v ? Array.isArray(v) || (y.alias = v = [v]) : (y.alias = v = []), v.push(x);
  }
  for (; r < n.length; ) {
    var a = n[r++];
    if (a.type === "keyword" && a.content === "mutation") {
      var c = [];
      if (i(["definition-mutation", "punctuation"]) && o(1).content === "(") {
        r += 2;
        var d = l(/^\($/, /^\)$/);
        if (d === -1) continue;
        for (; r < d; r++) {
          var u = o(0);
          u.type === "variable" && (s(u, "variable-input"), c.push(u.content));
        }
        r = d + 1;
      }
      if (
        i(["punctuation", "property-query"]) &&
        o(0).content === "{" &&
        (r++, s(o(0), "property-mutation"), c.length > 0)
      ) {
        var p = l(/^\{$/, /^\}$/);
        if (p === -1) continue;
        for (var m = r; m < p; m++) {
          var w = n[m];
          w.type === "variable" &&
            c.indexOf(w.content) >= 0 &&
            s(w, "variable-input");
        }
      }
    }
  }
});
N.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: { punctuation: /^`|`$/ },
  },
  function:
    /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword:
    /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
};
(function (e) {
  var t = e.languages.javascript["template-string"],
    n = t.pattern.source,
    r = t.inside.interpolation,
    o = r.inside["interpolation-punctuation"],
    i = r.pattern.source;
  function l(m, w) {
    if (!!e.languages[m])
      return {
        pattern: RegExp("((?:" + w + ")\\s*)" + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          "embedded-code": { pattern: /[\s\S]+/, alias: m },
        },
      };
  }
  e.languages.javascript["template-string"] = [
    l(
      "css",
      /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
        .source
    ),
    l("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
    l("svg", /\bsvg/.source),
    l("markdown", /\b(?:markdown|md)/.source),
    l("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
    l("sql", /\bsql/.source),
    t,
  ].filter(Boolean);
  function s(m, w) {
    return "___" + w.toUpperCase() + "_" + m + "___";
  }
  function a(m, w, y) {
    var x = { code: m, grammar: w, language: y };
    return (
      e.hooks.run("before-tokenize", x),
      (x.tokens = e.tokenize(x.code, x.grammar)),
      e.hooks.run("after-tokenize", x),
      x.tokens
    );
  }
  function c(m) {
    var w = {};
    w["interpolation-punctuation"] = o;
    var y = e.tokenize(m, w);
    if (y.length === 3) {
      var x = [1, 1];
      x.push.apply(x, a(y[1], e.languages.javascript, "javascript")),
        y.splice.apply(y, x);
    }
    return new e.Token("interpolation", y, r.alias, m);
  }
  function d(m, w, y) {
    var x = e.tokenize(m, {
        interpolation: { pattern: RegExp(i), lookbehind: !0 },
      }),
      v = 0,
      f = {},
      h = x
        .map(function (k) {
          if (typeof k == "string") return k;
          for (var O = k.content, I; m.indexOf((I = s(v++, y))) !== -1; );
          return (f[I] = O), I;
        })
        .join(""),
      E = a(h, w, y),
      C = Object.keys(f);
    v = 0;
    function b(k) {
      for (var O = 0; O < k.length; O++) {
        if (v >= C.length) return;
        var I = k[O];
        if (typeof I == "string" || typeof I.content == "string") {
          var $ = C[v],
            V = typeof I == "string" ? I : I.content,
            D = V.indexOf($);
          if (D !== -1) {
            ++v;
            var M = V.substring(0, D),
              G = c(f[$]),
              H = V.substring(D + $.length),
              W = [];
            if ((M && W.push(M), W.push(G), H)) {
              var q = [H];
              b(q), W.push.apply(W, q);
            }
            typeof I == "string"
              ? (k.splice.apply(k, [O, 1].concat(W)), (O += W.length - 1))
              : (I.content = W);
          }
        } else {
          var R = I.content;
          Array.isArray(R) ? b(R) : b([R]);
        }
      }
    }
    return b(E), new e.Token(y, E, "language-" + y, m);
  }
  var u = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  e.hooks.add("after-tokenize", function (m) {
    if (!(m.language in u)) return;
    function w(y) {
      for (var x = 0, v = y.length; x < v; x++) {
        var f = y[x];
        if (typeof f != "string") {
          var h = f.content;
          if (!Array.isArray(h)) {
            typeof h != "string" && w([h]);
            continue;
          }
          if (f.type === "template-string") {
            var E = h[1];
            if (
              h.length === 3 &&
              typeof E != "string" &&
              E.type === "embedded-code"
            ) {
              var C = p(E),
                b = E.alias,
                k = Array.isArray(b) ? b[0] : b,
                O = e.languages[k];
              if (!O) continue;
              h[1] = d(C, O, k);
            }
          } else w(h);
        }
      }
    }
    w(m.tokens);
  });
  function p(m) {
    return typeof m == "string"
      ? m
      : Array.isArray(m)
      ? m.map(p).join("")
      : p(m.content);
  }
})(N);
(function (e) {
  (e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    builtin:
      /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
  })),
    e.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ),
    delete e.languages.typescript.parameter,
    delete e.languages.typescript["literal-property"];
  var t = e.languages.extend("typescript", {});
  delete t["class-name"],
    (e.languages.typescript["class-name"].inside = t),
    e.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: { pattern: /^@/, alias: "operator" },
          function: /^[\s\S]+/,
        },
      },
      "generic-function": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript);
})(N);
(function (e) {
  e.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp(
        "(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source
      ),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"],
    },
  }),
    e.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
        lookbehind: !0,
        alias: ["function", "property-access"],
      },
    }),
    e.languages.insertBefore("javascript", "constant", {
      "known-class-name": [
        {
          pattern:
            /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
          alias: "class-name",
        },
        { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
      ],
    });
  function t(s, a) {
    return RegExp(
      s.replace(/<ID>/g, function () {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }),
      a
    );
  }
  e.languages.insertBefore("javascript", "keyword", {
    imports: {
      pattern: t(
        /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
          .source
      ),
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    exports: {
      pattern: t(
        /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
          .source
      ),
      lookbehind: !0,
      inside: e.languages.javascript,
    },
  }),
    e.languages.javascript.keyword.unshift(
      { pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" },
      {
        pattern:
          /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
        alias: "control-flow",
      },
      { pattern: /\bnull\b/, alias: ["null", "nil"] },
      { pattern: /\bundefined\b/, alias: "nil" }
    ),
    e.languages.insertBefore("javascript", "operator", {
      spread: { pattern: /\.{3}/, alias: "operator" },
      arrow: { pattern: /=>/, alias: "operator" },
    }),
    e.languages.insertBefore("javascript", "punctuation", {
      "property-access": { pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0,
      },
      dom: {
        pattern:
          /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: "variable",
      },
      console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
    });
  for (
    var n = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access",
      ],
      r = 0;
    r < n.length;
    r++
  ) {
    var o = n[r],
      i = e.languages.javascript[o];
    e.util.type(i) === "RegExp" &&
      (i = e.languages.javascript[o] = { pattern: i });
    var l = i.inside || {};
    (i.inside = l), (l["maybe-class-name"] = /^[A-Z][\s\S]*/);
  }
})(N);
(function (e) {
  var t = e.util.clone(e.languages.javascript),
    n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
    r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
    o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i(a, c) {
    return (
      (a = a
        .replace(/<S>/g, function () {
          return n;
        })
        .replace(/<BRACES>/g, function () {
          return r;
        })
        .replace(/<SPREAD>/g, function () {
          return o;
        })),
      RegExp(a, c)
    );
  }
  (o = i(o).source),
    (e.languages.jsx = e.languages.extend("markup", t)),
    (e.languages.jsx.tag.pattern = i(
      /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
        .source
    )),
    (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
    (e.languages.jsx.tag.inside["attr-value"].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
    (e.languages.jsx.tag.inside.tag.inside["class-name"] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (e.languages.jsx.tag.inside.comment = t.comment),
    e.languages.insertBefore(
      "inside",
      "attr-name",
      { spread: { pattern: i(/<SPREAD>/.source), inside: e.languages.jsx } },
      e.languages.jsx.tag
    ),
    e.languages.insertBefore(
      "inside",
      "special-attr",
      {
        script: {
          pattern: i(/=<BRACES>/.source),
          alias: "language-javascript",
          inside: {
            "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" },
            rest: e.languages.jsx,
          },
        },
      },
      e.languages.jsx.tag
    );
  var l = function (a) {
      return a
        ? typeof a == "string"
          ? a
          : typeof a.content == "string"
          ? a.content
          : a.content.map(l).join("")
        : "";
    },
    s = function (a) {
      for (var c = [], d = 0; d < a.length; d++) {
        var u = a[d],
          p = !1;
        if (
          (typeof u != "string" &&
            (u.type === "tag" && u.content[0] && u.content[0].type === "tag"
              ? u.content[0].content[0].content === "</"
                ? c.length > 0 &&
                  c[c.length - 1].tagName === l(u.content[0].content[1]) &&
                  c.pop()
                : u.content[u.content.length - 1].content === "/>" ||
                  c.push({
                    tagName: l(u.content[0].content[1]),
                    openedBraces: 0,
                  })
              : c.length > 0 && u.type === "punctuation" && u.content === "{"
              ? c[c.length - 1].openedBraces++
              : c.length > 0 &&
                c[c.length - 1].openedBraces > 0 &&
                u.type === "punctuation" &&
                u.content === "}"
              ? c[c.length - 1].openedBraces--
              : (p = !0)),
          (p || typeof u == "string") &&
            c.length > 0 &&
            c[c.length - 1].openedBraces === 0)
        ) {
          var m = l(u);
          d < a.length - 1 &&
            (typeof a[d + 1] == "string" || a[d + 1].type === "plain-text") &&
            ((m += l(a[d + 1])), a.splice(d + 1, 1)),
            d > 0 &&
              (typeof a[d - 1] == "string" || a[d - 1].type === "plain-text") &&
              ((m = l(a[d - 1]) + m), a.splice(d - 1, 1), d--),
            (a[d] = new e.Token("plain-text", m, null, m));
        }
        u.content && typeof u.content != "string" && s(u.content);
      }
    };
  e.hooks.add("after-tokenize", function (a) {
    (a.language !== "jsx" && a.language !== "tsx") || s(a.tokens);
  });
})(N);
(function (e) {
  e.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
  };
  var t = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    unchanged: " ",
    diff: "!",
  };
  Object.keys(t).forEach(function (n) {
    var r = t[n],
      o = [];
    /^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
      n === "diff" && o.push("bold"),
      (e.languages.diff[n] = {
        pattern: RegExp(
          "^(?:[" +
            r +
            `].*(?:\r
?|
|(?![\\s\\S])))+`,
          "m"
        ),
        alias: o,
        inside: {
          line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 },
          prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
        },
      });
  }),
    Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
})(N);
N.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
  coord: /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m,
};
N.languages.go = N.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
  ],
  operator:
    /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
});
N.languages.insertBefore("go", "string", {
  char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
});
delete N.languages.go["class-name"];
(function (e) {
  function t(n, r) {
    return "___" + n.toUpperCase() + r + "___";
  }
  Object.defineProperties((e.languages["markup-templating"] = {}), {
    buildPlaceholders: {
      value: function (n, r, o, i) {
        if (n.language === r) {
          var l = (n.tokenStack = []);
          (n.code = n.code.replace(o, function (s) {
            if (typeof i == "function" && !i(s)) return s;
            for (var a = l.length, c; n.code.indexOf((c = t(r, a))) !== -1; )
              ++a;
            return (l[a] = s), c;
          })),
            (n.grammar = e.languages.markup);
        }
      },
    },
    tokenizePlaceholders: {
      value: function (n, r) {
        if (n.language !== r || !n.tokenStack) return;
        n.grammar = e.languages[r];
        var o = 0,
          i = Object.keys(n.tokenStack);
        function l(s) {
          for (var a = 0; a < s.length && !(o >= i.length); a++) {
            var c = s[a];
            if (
              typeof c == "string" ||
              (c.content && typeof c.content == "string")
            ) {
              var d = i[o],
                u = n.tokenStack[d],
                p = typeof c == "string" ? c : c.content,
                m = t(r, d),
                w = p.indexOf(m);
              if (w > -1) {
                ++o;
                var y = p.substring(0, w),
                  x = new e.Token(
                    r,
                    e.tokenize(u, n.grammar),
                    "language-" + r,
                    u
                  ),
                  v = p.substring(w + m.length),
                  f = [];
                y && f.push.apply(f, l([y])),
                  f.push(x),
                  v && f.push.apply(f, l([v])),
                  typeof c == "string"
                    ? s.splice.apply(s, [a, 1].concat(f))
                    : (c.content = f);
              }
            } else c.content && l(c.content);
          }
          return s;
        }
        l(n.tokens);
      },
    },
  });
})(N);
(function (e) {
  (e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:false|true)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: !0,
      alias: "keyword",
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
  }),
    e.hooks.add("before-tokenize", function (t) {
      var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
      e.languages["markup-templating"].buildPlaceholders(t, "handlebars", n);
    }),
    e.hooks.add("after-tokenize", function (t) {
      e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars");
    }),
    (e.languages.hbs = e.languages.handlebars);
})(N);
N.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
};
N.languages.webmanifest = N.languages.json;
N.languages.less = N.languages.extend("css", {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern:
      /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ },
  },
  selector: {
    pattern:
      /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ },
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  operator: /[+\-*\/]/,
});
N.languages.insertBefore("less", "property", {
  variable: [
    { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
    /@@?[\w-]+/,
  ],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: !0,
    alias: "function",
  },
});
N.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin",
  },
  target: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword:
    /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  function: {
    pattern:
      /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: !0,
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/,
};
N.languages.objectivec = N.languages.extend("c", {
  string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  keyword:
    /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
});
delete N.languages.objectivec["class-name"];
N.languages.objc = N.languages.objectivec;
N.languages.ocaml = {
  comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
  char: { pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i, greedy: !0 },
  string: [
    { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
    { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
  ],
  number: [
    /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
    /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
    /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
  ],
  directive: { pattern: /\B#\w+/, alias: "property" },
  label: { pattern: /\B~\w+/, alias: "property" },
  "type-variable": { pattern: /\B'\w+/, alias: "function" },
  variant: { pattern: /`\w+/, alias: "symbol" },
  keyword:
    /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  boolean: /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation",
  },
  operator:
    /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
};
N.languages.python = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
  "string-interpolation": {
    pattern:
      /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern:
          /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation",
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string",
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: { punctuation: /\./ },
  },
  keyword:
    /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin:
    /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number:
    /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
};
N.languages.python["string-interpolation"].inside.interpolation.inside.rest =
  N.languages.python;
N.languages.py = N.languages.python;
N.languages.reason = N.languages.extend("clike", {
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
  "class-name": /\b[A-Z]\w*/,
  keyword:
    /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  operator:
    /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
});
N.languages.insertBefore("reason", "class-name", {
  char: {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: !0,
  },
  constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
  label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
});
delete N.languages.reason.function;
(function (e) {
  (e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0,
    },
  })),
    e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: { atrule: /(?:@[\w-]+|[+=])/ },
      },
    }),
    delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    n = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
    ];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: { punctuation: /:/, variable: t, operator: n },
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: t,
        operator: n,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern:
          /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0,
      },
    });
})(N);
N.languages.scss = N.languages.extend("css", {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: { pattern: /&/, alias: "important" },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
  },
});
N.languages.insertBefore("scss", "atrule", {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
  ],
});
N.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/,
});
N.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword",
  },
  placeholder: { pattern: /%[-\w]+/, alias: "selector" },
  statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: !0,
  },
});
N.languages.scss.atrule.inside.rest = N.languages.scss;
(function (e) {
  var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    n = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    r = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0,
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0,
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: t,
            number: n,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/,
          },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: t,
      boolean: /\b(?:false|true)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
      ],
      number: n,
      punctuation: /[{}()\[\];:,]/,
    };
  (r.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
      rest: r,
    },
  }),
    (r.func = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: { function: /^[^(]+/, rest: r },
    }),
    (e.languages.stylus = {
      "atrule-declaration": {
        pattern: /(^[ \t]*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: r },
      },
      "variable-declaration": {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: r },
      },
      statement: {
        pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: r },
      },
      "property-declaration": {
        pattern:
          /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
        lookbehind: !0,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: { interpolation: r.interpolation },
          },
          rest: r,
        },
      },
      selector: {
        pattern:
          /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
        lookbehind: !0,
        inside: {
          interpolation: r.interpolation,
          comment: r.comment,
          punctuation: /[{},]/,
        },
      },
      func: r.func,
      string: r.string,
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0,
      },
      interpolation: r.interpolation,
      punctuation: /[{}()\[\];:.]/,
    });
})(N);
(function (e) {
  var t = e.util.clone(e.languages.typescript);
  (e.languages.tsx = e.languages.extend("jsx", t)),
    delete e.languages.tsx.parameter,
    delete e.languages.tsx["literal-property"];
  var n = e.languages.tsx.tag;
  (n.pattern = RegExp(
    /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
    n.pattern.flags
  )),
    (n.lookbehind = !0);
})(N);
N.languages.wasm = {
  comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
  string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
  keyword: [
    { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
    {
      pattern:
        /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
      inside: { punctuation: /\./ },
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
  ],
  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  number:
    /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/,
};
const Dw = N;
var Rw = {
  plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: { color: "#6c6783" },
    },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["tag", "operator", "number"], style: { color: "#e09142" } },
    { types: ["property", "function"], style: { color: "#9a86fd" } },
    { types: ["tag-id", "selector", "atrule-id"], style: { color: "#eeebff" } },
    { types: ["attr-name"], style: { color: "#c4b9fe" } },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable",
      ],
      style: { color: "#ffcc99" },
    },
    { types: ["deleted"], style: { textDecorationLine: "line-through" } },
    { types: ["inserted"], style: { textDecorationLine: "underline" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
    { types: ["important", "bold"], style: { fontWeight: "bold" } },
    { types: ["important"], style: { color: "#c4b9fe" } },
  ],
};
const Nw = Rw;
var Fw = { Prism: Dw, theme: Nw };
function Ir(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yt() {
  return (
    (Yt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Yt.apply(this, arguments)
  );
}
var Lw = /\r\n|\r|\n/,
  Gd = function (e) {
    e.length === 0
      ? e.push({
          types: ["plain"],
          content: `
`,
          empty: !0,
        })
      : e.length === 1 &&
        e[0].content === "" &&
        ((e[0].content = `
`),
        (e[0].empty = !0));
  },
  Wd = function (e, t) {
    var n = e.length;
    return n > 0 && e[n - 1] === t ? e : e.concat(t);
  },
  Iw = function (e) {
    for (
      var t = [[]],
        n = [e],
        r = [0],
        o = [e.length],
        i = 0,
        l = 0,
        s = [],
        a = [s];
      l > -1;

    ) {
      for (; (i = r[l]++) < o[l]; ) {
        var c = void 0,
          d = t[l],
          u = n[l],
          p = u[i];
        if (
          (typeof p == "string"
            ? ((d = l > 0 ? d : ["plain"]), (c = p))
            : ((d = Wd(d, p.type)),
              p.alias && (d = Wd(d, p.alias)),
              (c = p.content)),
          typeof c != "string")
        ) {
          l++, t.push(d), n.push(c), r.push(0), o.push(c.length);
          continue;
        }
        var m = c.split(Lw),
          w = m.length;
        s.push({ types: d, content: m[0] });
        for (var y = 1; y < w; y++)
          Gd(s), a.push((s = [])), s.push({ types: d, content: m[y] });
      }
      l--, t.pop(), n.pop(), r.pop(), o.pop();
    }
    return Gd(s), a;
  },
  Pw = function (e, t) {
    var n = e.plain,
      r = Object.create(null),
      o = e.styles.reduce(function (i, l) {
        var s = l.languages,
          a = l.style;
        return (
          (s && !s.includes(t)) ||
            l.types.forEach(function (c) {
              var d = Yt({}, i[c], a);
              i[c] = d;
            }),
          i
        );
      }, r);
    return (o.root = n), (o.plain = Yt({}, n, { backgroundColor: null })), o;
  };
function Yd(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) === -1 &&
      (n[r] = e[r]);
  return n;
}
var Bw = (function (e) {
  function t() {
    for (var n = this, r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    e.apply(this, r),
      Ir(this, "getThemeDict", function (i) {
        if (
          n.themeDict !== void 0 &&
          i.theme === n.prevTheme &&
          i.language === n.prevLanguage
        )
          return n.themeDict;
        (n.prevTheme = i.theme), (n.prevLanguage = i.language);
        var l = i.theme ? Pw(i.theme, i.language) : void 0;
        return (n.themeDict = l);
      }),
      Ir(this, "getLineProps", function (i) {
        var l = i.key,
          s = i.className,
          a = i.style,
          c = Yd(i, ["key", "className", "style", "line"]),
          d = c,
          u = Yt({}, d, {
            className: "token-line",
            style: void 0,
            key: void 0,
          }),
          p = n.getThemeDict(n.props);
        return (
          p !== void 0 && (u.style = p.plain),
          a !== void 0 &&
            (u.style = u.style !== void 0 ? Yt({}, u.style, a) : a),
          l !== void 0 && (u.key = l),
          s && (u.className += " " + s),
          u
        );
      }),
      Ir(this, "getStyleForToken", function (i) {
        var l = i.types,
          s = i.empty,
          a = l.length,
          c = n.getThemeDict(n.props);
        if (c !== void 0) {
          {
            if (a === 1 && l[0] === "plain")
              return s ? { display: "inline-block" } : void 0;
            if (a === 1 && !s) return c[l[0]];
          }
          var d = s ? { display: "inline-block" } : {},
            u = l.map(function (p) {
              return c[p];
            });
          return Object.assign.apply(Object, [d].concat(u));
        }
      }),
      Ir(this, "getTokenProps", function (i) {
        var l = i.key,
          s = i.className,
          a = i.style,
          c = i.token,
          d = Yd(i, ["key", "className", "style", "token"]),
          u = d,
          p = Yt({}, u, {
            className: "token " + c.types.join(" "),
            children: c.content,
            style: n.getStyleForToken(c),
            key: void 0,
          });
        return (
          a !== void 0 &&
            (p.style = p.style !== void 0 ? Yt({}, p.style, a) : a),
          l !== void 0 && (p.key = l),
          s && (p.className += " " + s),
          p
        );
      }),
      Ir(this, "tokenize", function (i, l, s, a) {
        var c = { code: l, grammar: s, language: a, tokens: [] };
        i.hooks.run("before-tokenize", c);
        var d = (c.tokens = i.tokenize(c.code, c.grammar, c.language));
        return i.hooks.run("after-tokenize", c), d;
      });
  }
  return (
    e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t),
    (t.prototype.render = function () {
      var r = this.props,
        o = r.Prism,
        i = r.language,
        l = r.code,
        s = r.children,
        a = this.getThemeDict(this.props),
        c = o.languages[i],
        d = c !== void 0 ? this.tokenize(o, l, c, i) : [l],
        u = Iw(d);
      return s({
        tokens: u,
        className: "prism-code language-" + i,
        style: a !== void 0 ? a.root : {},
        getLineProps: this.getLineProps,
        getTokenProps: this.getTokenProps,
      });
    }),
    t
  );
})(A.exports.Component);
const Mw = Bw;
var $w = {
  plain: { color: "#393A34", backgroundColor: "#f6f8fa" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#999988", fontStyle: "italic" },
    },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["string", "attr-value"], style: { color: "#e3116c" } },
    { types: ["punctuation", "operator"], style: { color: "#393A34" } },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#36acaa" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#00a4db" },
    },
    { types: ["function", "deleted", "tag"], style: { color: "#d73a49" } },
    { types: ["function-variable"], style: { color: "#6f42c1" } },
    { types: ["tag", "selector", "keyword"], style: { color: "#00009f" } },
  ],
};
const jw = $w;
var Uw = {
  plain: { color: "#d6deeb", backgroundColor: "#011627" },
  styles: [
    {
      types: ["changed"],
      style: { color: "rgb(162, 191, 252)", fontStyle: "italic" },
    },
    {
      types: ["deleted"],
      style: { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
    },
    {
      types: ["inserted", "attr-name"],
      style: { color: "rgb(173, 219, 103)", fontStyle: "italic" },
    },
    {
      types: ["comment"],
      style: { color: "rgb(99, 119, 119)", fontStyle: "italic" },
    },
    { types: ["string", "url"], style: { color: "rgb(173, 219, 103)" } },
    { types: ["variable"], style: { color: "rgb(214, 222, 235)" } },
    { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
    {
      types: ["builtin", "char", "constant", "function"],
      style: { color: "rgb(130, 170, 255)" },
    },
    { types: ["punctuation"], style: { color: "rgb(199, 146, 234)" } },
    {
      types: ["selector", "doctype"],
      style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
    },
    { types: ["class-name"], style: { color: "rgb(255, 203, 139)" } },
    {
      types: ["tag", "operator", "keyword"],
      style: { color: "rgb(127, 219, 202)" },
    },
    { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
    { types: ["property"], style: { color: "rgb(128, 203, 196)" } },
    { types: ["namespace"], style: { color: "rgb(178, 204, 214)" } },
  ],
};
const zw = Uw,
  Hw = (e) => {
    const t = vt.parse(e).source;
    return t === "true"
      ? !0
      : t === "false"
      ? !1
      : le.addons.source.defaultState;
  },
  Vw = ({ globalState: e }) => {
    const t = e.theme === "dark" ? zw : jw;
    if (!ur[e.story]) return _(sr, { children: "There is no story loaded." });
    const { entry: n, locStart: r, locEnd: o } = ur[e.story];
    return (
      A.exports.useEffect(() => {
        (window.location.hash = ""), (window.location.hash = `ladle_loc_${r}`);
      }, [r]),
      z(sr, {
        children: [
          z("div", {
            style: { paddingTop: "2em" },
            children: [_(Cn, { children: n }), " source code"],
          }),
          _(Mw, {
            ...Fw,
            code: decodeURIComponent(Km[e.story]),
            language: "tsx",
            theme: {
              ...t,
              plain: {
                ...t.plain,
                backgroundColor: "var(--ladle-bg-color-secondary)",
              },
            },
            children: ({
              className: i,
              style: l,
              tokens: s,
              getLineProps: a,
              getTokenProps: c,
            }) =>
              _("pre", {
                className: i,
                style: {
                  ...l,
                  textAlign: "left",
                  margin: "0.5em 0 1em 0",
                  padding: "1em 0",
                  overflow: "auto",
                  maxHeight: "50vh",
                },
                children: s.map((d, u) =>
                  z(
                    "div",
                    {
                      id: `ladle_loc_${u + 1}`,
                      ...a({ line: d, key: u }),
                      style: { display: "table-row" },
                      children: [
                        _("span", {
                          className: "ladle-addon-source-lineno",
                          style:
                            u + 1 >= r && u + 1 <= o
                              ? {
                                  backgroundColor: "var(--ladle-color-accent)",
                                  color: "#FFF",
                                }
                              : void 0,
                          children: u + 1,
                        }),
                        _("div", {
                          style: {
                            display: "table-cell",
                            paddingLeft: "0.5em",
                          },
                          children: d.map((p, m) =>
                            _("span", { ...c({ token: p, key: m }) }, m)
                          ),
                        }),
                      ],
                    },
                    u
                  )
                ),
              }),
          }),
        ],
      })
    );
  },
  Gw = ({ globalState: e, dispatch: t }) => {
    const n = "Show the story source code.";
    return _("li", {
      children: z("button", {
        "aria-label": n,
        "data-testid": "addon-source",
        title: n,
        onClick: () => {
          t({ type: se.UpdateSource, value: !e.source });
        },
        className: e.source ? "source-active" : "",
        children: [
          _(dg, {}),
          _("span", { className: "ladle-addon-tooltip", children: n }),
          _("label", { children: "Story Source Code" }),
          _(wr, {
            isOpen: e.source,
            close: () => t({ type: se.UpdateSource, value: !1 }),
            label: "Dialog with the story source code.",
            children: _(Vw, { globalState: e }),
          }),
        ],
      }),
    });
  },
  Ww = () => {
    const [e, t] = A.exports.useState(!1),
      n = "Get more information about Ladle.";
    return _("li", {
      children: z("button", {
        "aria-label": n,
        title: n,
        onClick: () => t(!0),
        className: e ? "ladle-active" : "",
        children: [
          _(rg, {}),
          _("span", { className: "ladle-addon-tooltip", children: n }),
          _("label", { children: "About Ladle" }),
          z(wr, {
            isOpen: e,
            close: () => t(!1),
            label: "Dialog with information about Ladle.",
            children: [
              _("p", {
                children:
                  "Ladle is a modern and fast playground for React components powered by Vite. For more information:",
              }),
              z("ul", {
                children: [
                  _("li", {
                    children: _("a", {
                      href: "https://www.ladle.dev/",
                      children: "Ladle.dev",
                    }),
                  }),
                  _("li", {
                    children: _("a", {
                      href: "https://github.com/tajo/ladle",
                      children: "GitHub",
                    }),
                  }),
                  _("li", {
                    children: _("a", {
                      href: "https://ladle.dev/new",
                      children: "StackBlitz",
                    }),
                  }),
                  _("li", {
                    children: _("a", {
                      href: "https://discord.gg/H6FSHjyW7e",
                      children: "Discord",
                    }),
                  }),
                ],
              }),
              _("p", { children: _("strong", { children: "Shortcuts" }) }),
              _("ul", {
                children: z("li", {
                  children: [
                    _(Cn, { children: "/" }),
                    " or ",
                    _(Cn, { children: "cmd+p" }),
                    " - search stories",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Yw = async (e, t, n) => {
    const r = await te(() => import("./axe.9466374a.js").then((o) => o.a), []);
    try {
      const o = await r.default.run(document.getElementsByTagName("main"));
      e(o.violations), t(!0), n && n.setAttribute("aria-hidden", "true");
    } catch {}
  },
  Xw = ({ violation: e }) => {
    const [t, n] = A.exports.useState(!1);
    return z("li", {
      children: [
        e.help,
        " (",
        e.nodes.length,
        ").",
        " ",
        t
          ? z(sr, {
              children: [
                z("ul", {
                  children: [
                    z("li", { children: ["ID: ", e.id] }),
                    z("li", { children: ["Impact: ", e.impact] }),
                    z("li", { children: ["Description: ", e.description] }),
                    _("li", {
                      children: _("a", {
                        href: e.helpUrl,
                        children: "Documentation",
                      }),
                    }),
                  ],
                }),
                _("p", { children: "Violating nodes:" }),
                _("ul", {
                  children: e.nodes.map((r) =>
                    _("li", { children: _(Cn, { children: r.html }) }, r.html)
                  ),
                }),
                _("p", {
                  children: _("a", {
                    href: "#",
                    onClick: () => n(!1),
                    children: "Hide details",
                  }),
                }),
              ],
            })
          : _("a", {
              href: "#",
              onClick: () => n(!0),
              children: "Show details",
            }),
      ],
    });
  },
  qw = ({ reportFinished: e, violations: t }) =>
    e
      ? t.length === 0
        ? z("p", {
            children: [
              "There are no ",
              _("a", {
                href: "https://github.com/dequelabs/axe-core",
                children: "axe",
              }),
              " ",
              "accessibility violations. Good job!",
            ],
          })
        : z(sr, {
            children: [
              z("h3", {
                children: [
                  "There are ",
                  t.length,
                  " ",
                  _("a", {
                    href: "https://github.com/dequelabs/axe-core",
                    children: "axe",
                  }),
                  " accessibility violations",
                ],
              }),
              _("ul", {
                children: t.map((n) => _(Xw, { violation: n }, n.id)),
              }),
            ],
          })
      : _("p", { children: "Report is loading..." }),
  Zw = () => {
    const [e, t] = A.exports.useState(!1),
      [n, r] = A.exports.useState(!1),
      [o, i] = A.exports.useState([]);
    A.exports.useEffect(() => {}, []);
    const l = "Show accessibility report.";
    return _("li", {
      children: z("button", {
        "aria-label": l,
        "data-testid": "addon-a11y",
        title: l,
        onClick: () => {
          Yw(i, r, null).catch(console.error), setTimeout(() => t(!e), 100);
        },
        className: e ? "a11y-active" : "",
        children: [
          _(fg, {}),
          _("span", { className: "ladle-addon-tooltip", children: l }),
          _("label", { children: "Accessibility report" }),
          o.length
            ? _("div", { className: "ladle-badge", children: o.length })
            : null,
          _(wr, {
            isOpen: e,
            close: () => t(!1),
            label: "Dialog with the story accessibility report.",
            children: _(qw, { reportFinished: n, violations: o }),
          }),
        ],
      }),
    });
  },
  Qw = (e) => {
    const t = vt.parse(e).width;
    let n = 0;
    return (
      Object.keys(le.addons.width.options).forEach((r) => {
        (r === t || parseInt(t, 10) === le.addons.width.options[r]) &&
          (n = le.addons.width.options[r]);
      }),
      n !== 0 ? n : le.addons.width.defaultState
    );
  },
  Jw = ({ globalState: e, dispatch: t }) => {
    const n = "Change the story viewport.",
      [r, o] = A.exports.useState(!1),
      i = ur[e.story];
    let l = i && i.meta ? i.meta.meta.width : 0,
      s = le.addons.width.options;
    return (
      Object.keys(s).forEach((a) => {
        a === l && (l = s[a]);
      }),
      l && !Object.values(s).includes(l) && (s = { custom: l, ...s }),
      _("li", {
        children: z("button", {
          "aria-label": n,
          "data-testid": "addon-width",
          title: n,
          onClick: () => o(!0),
          className: r ? "width-active" : "",
          children: [
            _(pg, {}),
            _("span", { className: "ladle-addon-tooltip", children: n }),
            _("label", { children: "Set story width" }),
            z(wr, {
              isOpen: r,
              close: () => o(!1),
              label: "Dialog with the story width selector.",
              children: [
                _("p", { children: "Select story width" }),
                z("div", {
                  children: [
                    _("input", {
                      onChange: () => t({ type: se.UpdateWidth, value: 0 }),
                      type: "radio",
                      id: "width-unset",
                      name: "width",
                      value: 0,
                      checked: e.width === 0,
                    }),
                    _("label", {
                      htmlFor: "width-unset",
                      style: { paddingLeft: "8px" },
                      children: "unset",
                    }),
                  ],
                }),
                Object.keys(s).map((a) =>
                  z(
                    "div",
                    {
                      children: [
                        _("input", {
                          onChange: () =>
                            t({ type: se.UpdateWidth, value: s[a] }),
                          type: "radio",
                          id: `width-${a}`,
                          name: "width",
                          value: s[a],
                          checked: e.width === s[a],
                        }),
                        z("label", {
                          htmlFor: `width-${a}`,
                          style: { paddingLeft: "8px" },
                          children: [s[a], "px - ", a],
                        }),
                      ],
                    },
                    a
                  )
                ),
                _("p", {}),
              ],
            }),
          ],
        }),
      })
    );
  },
  Kw = ({ globalState: e, dispatch: t }) =>
    Object.keys(le.addons).every((n) => le.addons[n].enabled === !1)
      ? null
      : _("header", {
          role: "banner",
          className: "ladle-addons",
          children: z("ul", {
            children: [
              le.addons.control.enabled &&
                Object.keys(e.control).length > 0 &&
                _(U1, { globalState: e, dispatch: t }),
              le.addons.theme.enabled && _(mg, { globalState: e, dispatch: t }),
              le.addons.mode.enabled && _(H1, { globalState: e, dispatch: t }),
              le.addons.width.enabled && _(Jw, { globalState: e, dispatch: t }),
              le.addons.rtl.enabled && _(Tw, { globalState: e, dispatch: t }),
              le.addons.source.enabled &&
                _(Gw, { globalState: e, dispatch: t }),
              le.addons.a11y.enabled && _(Zw, {}),
              le.addons.ladle.enabled && _(Ww, {}),
              le.addons.control.enabled &&
                e.action.length > 0 &&
                _(Ow, { globalState: e, dispatch: t }),
            ],
          }),
        }),
  e_ = (e, t) => {
    switch ((At("Action dispatched", t), t.type)) {
      case se.UpdateAll:
        return { ...e, ...t.value };
      case se.UpdateMode:
        return { ...e, mode: t.value };
      case se.UpdateAction:
        const n = { ...e };
        return (
          t.clear && (n.action = []),
          t.value ? { ...e, action: [...n.action, t.value] } : n
        );
      case se.UpdateRtl:
        return { ...e, rtl: t.value };
      case se.UpdateSource:
        return { ...e, source: t.value };
      case se.UpdateStory:
        return { ...e, story: t.value, control: {}, width: 0, action: [] };
      case se.UpdateTheme:
        return { ...e, theme: t.value };
      case se.UpdateWidth:
        return { ...e, width: t.value };
      case se.UpdateControl:
        return { ...e, control: t.value };
      default:
        return e;
    }
  },
  Rs = Object.keys(ur).sort(tg);
At("Stories found", Rs);
const ma = (e) => ({
    theme: hf(e),
    mode: z1(e),
    story: df(e),
    rtl: kw(e),
    source: Hw(e),
    width: Qw(e),
    control: $1(e),
    action: [],
  }),
  Xd = () => {
    const e = ma(location.search),
      [t, n] = A.exports.useReducer(e_, e),
      r = A.exports.useRef({});
    A.exports.useEffect(() => {
      r.current = t;
    }),
      A.exports.useEffect(() => {
        window.ladleDispatch = n;
      }, []);
    const o = r.current;
    return (
      A.exports.useEffect(() => {
        var i, l;
        At("Global state update", t),
          eg(location.search) || jd({ story: t.story }),
          jd({
            mode: t.mode,
            rtl: t.rtl,
            source: t.source,
            story: t.story,
            theme: t.theme,
            width: t.width,
            control: t.control,
          }),
          t.story !== o.story && (document.title = `${pf(t.story)} | Ladle`),
          t.theme !== o.theme &&
            document.documentElement.setAttribute("data-theme", t.theme),
          t.rtl !== o.rtl &&
            (t.rtl
              ? document.documentElement.setAttribute("dir", "rtl")
              : document.documentElement.removeAttribute("dir")),
          t.mode !== o.mode &&
            (document.documentElement.setAttribute("data-mode", t.mode),
            t.mode === pt.Preview
              ? (i = document.getElementById("ladle-root")) == null ||
                i.removeAttribute("class")
              : (l = document.getElementById("ladle-root")) == null ||
                l.setAttribute("class", "ladle-wrapper"));
      }, [t]),
      A.exports.useEffect(() => {
        const i = ah.listen(({ location: l, action: s }) => {
          if (s === En.Pop) {
            const a = {};
            Object.keys(t.control).forEach((c) => {
              const d = ma(l.search).control[c];
              a[c] = {
                ...t.control[c],
                value: d ? d.value : t.control[c].defaultValue,
              };
            }),
              n({ type: se.UpdateAll, value: { ...ma(l.search), control: a } });
          }
        });
        return () => i();
      }, [t]),
      t.mode === pt.Preview
        ? _(mc.Provider, {
            value: { globalState: t, dispatch: n },
            children: _(Id, { globalState: t, dispatch: n }),
          })
        : z(mc.Provider, {
            value: { globalState: t, dispatch: n },
            children: [
              _("main", {
                className: "ladle-main",
                children:
                  Rs.length > 0
                    ? _(Id, { globalState: t, dispatch: n })
                    : _(ih, {}),
              }),
              _(P1, {
                stories: Rs,
                story: t.story,
                updateStory: (i) => n({ type: se.UpdateStory, value: i }),
              }),
              _(Kw, { globalState: t, dispatch: n }),
            ],
          })
    );
  },
  qd = document.getElementById("ladle-root");
vv && Gi ? Gi(qd).render(_(Xd, {})) : vo.exports.render(_(Xd, {}), qd);
export { sr as F, _ as a, Bo as c, Jd as g, z as j, A as r };
