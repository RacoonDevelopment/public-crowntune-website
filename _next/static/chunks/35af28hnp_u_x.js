(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  19833,
  (e) => {
    "use strict";
    var t = e.i(99541),
      s = e.i(65957),
      i = e.i(17825),
      n = e.i(63147),
      r = e.i(55601),
      a = e.i(95235),
      o = e.i(79062),
      u = e.i(51457),
      c = e.i(39426),
      l = e.i(43910),
      d = e.i(44493),
      h = e.i(63153),
      p = e.i(36649),
      m = e.i(46537);
    function f() {
      let e = (0, n.useRouter)(),
        { isLeaving: f, navigate: x } = (0, d.useLeaveNavigate)(),
        g = (0, n.useSearchParams)().get("email") ?? "",
        [b] = (0, i.useState)(g),
        v = (0, h.useResendVerification)(),
        [w, y] = (0, i.useState)(""),
        [j, N] = (0, i.useState)(null),
        [_, C] = (0, i.useState)(!1),
        [k, M] = (0, i.useState)(0),
        E = (0, h.useVerifyEmail)();
      return (0, t.jsx)(r.AuthBackground, {
        children: (0, t.jsxs)("div", {
          className:
            "relative z-10 flex min-h-screen w-full max-w-md flex-col justify-center px-6",
          children: [
            (0, t.jsxs)(l.AnimatedSection, {
              leaving: f,
              position: "top",
              className: "mb-5 flex flex-col items-center text-center",
              children: [
                (0, t.jsx)(a.AuthLogo, {}),
                (0, t.jsxs)("div", {
                  className: "w-full space-y-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, t.jsx)("h1", {
                          className:
                            "text-xl font-bold uppercase tracking-[0.2em] text-white",
                          children: "Check Your Email",
                        }),
                        (0, t.jsxs)("p", {
                          className: "text-sm leading-6 text-white/50",
                          children: [
                            "Enter the 8-digit code sent to",
                            " ",
                            (0, t.jsx)("span", {
                              className: "font-medium text-gold-300",
                              children: b || "your email address",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "flex justify-center py-2",
                      children: (0, t.jsx)("div", {
                        className:
                          "flex h-20 w-20 items-center justify-center rounded-full border border-gold-amber/30 bg-gold-amber/5 text-gold-amber shadow-[0_0_30px_rgba(240,195,48,0.12)]",
                        children: (0, t.jsx)(c.MailIcon, {
                          className: "text-[38px]",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)(l.AnimatedSection, {
              leaving: f,
              position: "bottom",
              className: "mb-5 flex flex-col gap-4",
              children: [
                (0, t.jsx)(o.AuthInput, {
                  label: "Verification Code",
                  type: "text",
                  autoComplete: "one-time-code",
                  placeholder: "ENTER 8-DIGIT CODE",
                  value: w,
                  onChange: (e) => y(e.target.value),
                }),
                j && (0, t.jsx)(m.ApiError, { message: j }),
                _ &&
                  (0, t.jsx)("div", {
                    className:
                      "rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300",
                    children: "✓ Email verified! Redirecting...",
                  }),
                (0, t.jsx)(u.CustomButton, {
                  type: "submit",
                  disabled: E.isPending || f || !b || !w,
                  onClick: (t) => {
                    if (
                      (t && t.preventDefault(),
                      N(null),
                      E.isPending || !b || !w)
                    )
                      return;
                    let s = (0, p.validateCode)(w);
                    s
                      ? N(s)
                      : E.mutateAsync({ email: b, code: w })
                          .then(() => {
                            (C(!0), setTimeout(() => e.push("/login"), 2e3));
                          })
                          .catch((e) => {
                            N(
                              e instanceof Error
                                ? e.message
                                : "Verification failed",
                            );
                          });
                  },
                  children: E.isPending
                    ? (0, t.jsxs)("span", {
                        className: "flex items-center justify-center gap-2",
                        children: [(0, t.jsx)(m.Spinner, {}), " VERIFYING..."],
                      })
                    : "VERIFY EMAIL",
                }),
                (0, t.jsxs)("div", {
                  className:
                    "flex justify-between gap-4 pt-2 text-center text-white/50",
                  children: [
                    (0, t.jsxs)(s.default, {
                      href: "/login",
                      className:
                        "group inline-flex items-center justify-center gap-2 text-xs text-white/35 transition-colors hover:text-white",
                      onClick: (e) => {
                        (e.preventDefault(), x("/login"));
                      },
                      children: [
                        (0, t.jsx)(c.ArrowBackIcon, {
                          className:
                            "text-[16px] transition-transform group-hover:-translate-x-1",
                        }),
                        "Back to Sign Up",
                      ],
                    }),
                    (0, t.jsx)("button", {
                      disabled:
                        v.isPending || !b || new Date().getTime() - k < 6e4,
                      onClick: () => {
                        if (!v.isPending && b) {
                          if (Date.now() - k < 6e4)
                            return void N(
                              `Please wait ${Math.ceil((6e4 - (Date.now() - k)) / 1e3)} seconds before resending.`,
                            );
                          v.mutate(b, {
                            onSuccess: () => {
                              (N(null), M(Date.now()));
                            },
                            onError: (e) => {
                              (N(
                                e instanceof Error
                                  ? e.message
                                  : "Failed to resend verification code",
                              ),
                                M(Date.now()));
                            },
                          });
                        }
                      },
                      children: (0, t.jsx)("span", {
                        className: `cursor-pointer text-xs text-white/35 transition-colors ${v.isPending ? "cursor-wait!" : "hover:text-white"} ${new Date().getTime() - k < 6e4 ? "cursor-not-allowed! opacity-50" : "hover:text-white"} `,
                        children: v.isPending ? "RESENDING..." : "Resend Code",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    e.s([
      "default",
      0,
      function () {
        return (0, t.jsx)(i.Suspense, {
          fallback: null,
          children: (0, t.jsx)(f, {}),
        });
      },
    ]);
  },
  94079,
  (e) => {
    "use strict";
    var t = e.i(99541),
      s = e.i(60827);
    e.s([
      "CrtBackdrop",
      0,
      function ({ overlay: e = "bg-black/50", intense: i = !1 }) {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "absolute inset-0",
              children: (0, t.jsx)(s.default, {
                src: "/images/home%20page/background/homepage1.png",
                alt: "",
                fill: !0,
                sizes: "100vw",
                className:
                  "object-cover  max-[900px]:object-[68%_center] min-[901px]:object-center",
              }),
            }),
            (0, t.jsx)("div", {
              className: `pointer-events-none absolute inset-0 z-0 mix-blend-multiply ${e}`,
            }),
            i
              ? (0, t.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_4px)] animate-[crtScanlines_8s_linear_infinite]",
                })
              : (0, t.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.005)_4px)]",
                }),
            i &&
              (0, t.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 z-20 opacity-20 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_8px,rgba(240,195,48,0.08)_8px,rgba(240,195,48,0.08)_9px)] animate-[glitchShift_0.35s_steps(2,end)_infinite]",
              }),
          ],
        });
      },
    ]);
  },
  51457,
  (e) => {
    "use strict";
    var t = e.i(99541);
    e.s([
      "CustomButton",
      0,
      function ({
        children: e,
        type: s = "button",
        disabled: i = !1,
        onClick: n,
        className: r = "",
      }) {
        return (0, t.jsx)("button", {
          type: s,
          disabled: i,
          onClick: n,
          className: `w-full cursor-pointer border-2 border-accent bg-accent 
      px-4 py-4 font-mono text-sm font-extrabold uppercase tracking-widest 
      text-black shadow-[3px_3px_0px_#FFFEF7] transition-none hover:bg-accent-soft 
      hover:border-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-accent active:translate-x-0.5 active:translate-y-0.5 
      active:shadow-none disabled:pointer-events-none disabled:opacity-50 ${r}`,
          children: e,
        });
      },
    ]);
  },
  39426,
  (e) => {
    "use strict";
    var t = e.i(99541);
    function s({ className: e, children: i }) {
      return (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        className: e,
        children: i,
      });
    }
    e.s([
      "ArrowBackIcon",
      0,
      function ({ className: e }) {
        return (0, t.jsxs)(s, {
          className: e,
          children: [
            (0, t.jsx)("path", { d: "M19 12H5" }),
            (0, t.jsx)("path", { d: "m11 18-6-6 6-6" }),
          ],
        });
      },
      "MailIcon",
      0,
      function ({ className: e }) {
        return (0, t.jsxs)(s, {
          className: e,
          children: [
            (0, t.jsx)("rect", {
              x: "3",
              y: "5",
              width: "18",
              height: "14",
              rx: "2",
            }),
            (0, t.jsx)("path", { d: "m3 7 9 6 9-6" }),
          ],
        });
      },
      "expand_moreIcon",
      0,
      function ({ className: e }) {
        return (0, t.jsx)(s, {
          className: e,
          children: (0, t.jsx)("path", { d: "m6 9 6 6 6-6" }),
        });
      },
    ]);
  },
  46537,
  (e) => {
    "use strict";
    var t = e.i(99541);
    e.s([
      "ApiError",
      0,
      function ({ message: e, onRetry: s }) {
        return (0, t.jsxs)("div", {
          role: "alert",
          className:
            "flex w-full items-center gap-3 rounded-none border-2 border-danger/40 bg-danger/10 px-4 py-3 font-mono text-xs text-red-300",
          children: [
            (0, t.jsx)("span", { children: "⚠" }),
            (0, t.jsx)("span", { className: "flex-1", children: e }),
            s &&
              (0, t.jsx)("button", {
                onClick: s,
                className:
                  "rounded-none border-2 border-red-500/50 px-3 py-1 font-mono text-xs font-bold uppercase text-red-300 transition-none hover:bg-red-500/20",
                children: "Retry",
              }),
          ],
        });
      },
      "Spinner",
      0,
      function ({ className: e = "" }) {
        return (0, t.jsxs)("svg", {
          className: `h-4 w-4 animate-spin text-current ${e}`,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, t.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, t.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
            }),
          ],
        });
      },
    ]);
  },
  32201,
  (e) => {
    "use strict";
    var t = e.i(99541);
    e.s([
      "DotGrid",
      0,
      function ({ className: e = "" }) {
        return (0, t.jsx)("div", {
          "aria-hidden": "true",
          className: `absolute  inset-0 pointer-events-none bg-[radial-gradient(#ffe600_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.07] ${e}`,
        });
      },
    ]);
  },
  43910,
  44493,
  (e) => {
    "use strict";
    var t = e.i(99541);
    let s = {
        top: "animate-[slideDownIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        bottom: "animate-[slideUpIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
      },
      i = {
        top: {
          450: "animate-[slideUpOut_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]",
          800: "animate-[slideUpOut_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        },
        bottom: {
          450: "animate-[slideDownOut_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]",
          800: "animate-[slideDownOut_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        },
      };
    e.s(
      [
        "AnimatedSection",
        0,
        function ({
          leaving: e,
          position: n,
          leaveMs: r = 800,
          className: a = "",
          children: o,
        }) {
          return (0, t.jsx)("section", {
            className: `${e ? i[n][r] : s[n]} ${a}`,
            children: o,
          });
        },
      ],
      43910,
    );
    var n = e.i(63147),
      r = e.i(17825);
    e.s(
      [
        "useLeaveNavigate",
        0,
        function () {
          let e = (0, n.useRouter)(),
            [t, s] = (0, r.useState)(!1);
          return {
            isLeaving: t,
            navigate: (0, r.useCallback)(
              (t) => {
                (s(!0), setTimeout(() => e.push(t), 450));
              },
              [e],
            ),
          };
        },
      ],
      44493,
    );
  },
  55601,
  95235,
  (e) => {
    "use strict";
    var t = e.i(99541),
      s = e.i(32201),
      i = e.i(94079);
    e.s(
      [
        "AuthBackground",
        0,
        function ({ children: e }) {
          return (0, t.jsxs)("main", {
            className:
              "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-stark pt-20",
            children: [
              (0, t.jsx)("div", {
                className: "absolute inset-0 bg-stark",
                "aria-hidden": "true",
              }),
              (0, t.jsx)(i.CrtBackdrop, {}),
              (0, t.jsx)(s.DotGrid, {}),
              (0, t.jsx)("div", {
                className:
                  "relative z-30 flex min-h-screen w-full items-center justify-center",
                children: e,
              }),
            ],
          });
        },
      ],
      55601,
    );
    var n = e.i(60827);
    e.s(
      [
        "AuthLogo",
        0,
        function ({ className: e = "" }) {
          return (0, t.jsx)("div", {
            className: `relative h-45 w-full overflow-hidden ${e}`,
            children: (0, t.jsx)(n.default, {
              src: "/images/crownlogweb.png",
              alt: "CrownTune Logo",
              width: 1024,
              height: 1024,
              priority: !0,
              className:
                "\n          absolute left-1/2 top-1/2\n          w-100 h-auto max-w-none\n          -translate-x-1/2 -translate-y-1/2\n          object-contain\n          drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]\n          -ml-5 md:ml-0\n        ",
            }),
          });
        },
      ],
      95235,
    );
  },
  79062,
  (e) => {
    "use strict";
    var t = e.i(99541),
      s = e.i(17825);
    e.s([
      "AuthInput",
      0,
      function ({
        label: e,
        large: i = !1,
        id: n,
        labelClassName: r,
        inputClassName: a,
        ...o
      }) {
        let u = (0, s.useId)(),
          c = n ?? u;
        return (0, t.jsxs)("div", {
          className: "flex flex-col justify-end  h-full ",
          children: [
            (0, t.jsx)("label", {
              htmlFor: c,
              className: `
          mb-2
          flex ${i ? "min-h-[3em]" : ""} items-end
          font-mono  
          font-semibold
          uppercase
          tracking-widest
          text-mist
          ${r ?? ""}
          `,
              children: e,
            }),
            (0, t.jsx)("input", {
              ...o,
              id: c,
              className: `
          w-full
          rounded-none
          border-2 border-edge-hi
          bg-raised
          px-4 py-3
          text-sm
          text-white
          transition-colors
          placeholder:text-zinc-600
          focus:border-accent
          focus:outline-none
        
          ${a ?? ""}
        `,
            }),
          ],
        });
      },
    ]);
  },
  63153,
  20038,
  (e) => {
    "use strict";
    var t = e.i(72715),
      s = e.i(27211);
    e.i(75080);
    var i = e.i(92044);
    async function n(e) {
      return (await i.api.post("/auth/login", e)).data.data;
    }
    async function r(e) {
      return (await i.api.post("/auth/login", e)).data.data;
    }
    async function a(e) {
      return (await i.api.post("/auth/verify-email", e)).data.data;
    }
    async function o(e) {
      return (await i.api.post("/auth/resend-verification", { email: e })).data
        .data;
    }
    async function u() {
      return (await i.api.get("/auth/me")).data.data;
    }
    async function c(e) {
      return (await i.api.post("/auth/forgot-password", e)).data.data;
    }
    async function l(e) {
      return (await i.api.post("/auth/resend-forgot-password", e)).data.data;
    }
    async function d(e) {
      return (await i.api.post("/auth/reset-password", e)).data.data;
    }
    async function h(e) {
      return (await i.api.post("/auth/2fa/email/send", e)).data.data;
    }
    async function p(e) {
      return (await i.api.post("/auth/2fa/verify", e)).data.data;
    }
    e.s(
      [
        "forgotPassword",
        0,
        c,
        "login",
        0,
        n,
        "me",
        0,
        u,
        "resendForgotPassword",
        0,
        l,
        "resendVerification",
        0,
        o,
        "resetPassword",
        0,
        d,
        "send2faEmailOtp",
        0,
        h,
        "login",
        0,
        r,
        "verify2fa",
        0,
        p,
        "verifyEmail",
        0,
        a,
      ],
      20038,
    );
    var m = e.i(50797);
    e.i(35595);
    var f = e.i(54972);
    e.s(
      [
        "useForgotPassword",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: c });
        },
        "useLogin",
        0,
        function () {
          let { login: e } = (0, f.useAuth)(),
            i = (0, s.useQueryClient)();
          return (0, t.useMutation)({
            mutationFn: n,
            onSuccess: (t) => {
              "twoFactorRequired" in t ||
                ((0, m.setAccessToken)(t.accessToken),
                e(t.accessToken, t.user),
                i.invalidateQueries({
                  predicate: (e) => !1 !== e.options.retry,
                }));
            },
          });
        },
        "useResendVerification",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: o });
        },
        "useResetPassword",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: d });
        },
        "useSend2faEmailOtp",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: h });
        },
        "uselogin",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: r });
        },
        "useVerify2fa",
        0,
        function () {
          let { login: e } = (0, f.useAuth)(),
            i = (0, s.useQueryClient)();
          return (0, t.useMutation)({
            mutationFn: p,
            onSuccess: (t) => {
              ((0, m.setAccessToken)(t.accessToken),
                e(t.accessToken, t.user),
                i.invalidateQueries({
                  predicate: (e) => !1 !== e.options.retry,
                }));
            },
          });
        },
        "useVerifyEmail",
        0,
        function () {
          return (0, t.useMutation)({ mutationFn: a });
        },
      ],
      63153,
    );
  },
  36649,
  (e) => {
    "use strict";
    let t = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.s([
      "validateCode",
      0,
      function (e) {
        if (!e) return "Code is required";
        let t = e.trim();
        return 8 !== t.length
          ? "Code must be 8 characters"
          : /^[a-zA-Z0-9]{8}$/.test(t)
            ? null
            : "Code must be 8 digits";
      },
      "validateConfirmPassword",
      0,
      function (e, t) {
        return e !== t ? "Passwords do not match" : null;
      },
      "validateCountry",
      0,
      function (e) {
        return e ? null : "Country is required";
      },
      "validateEmail",
      0,
      function (e) {
        return e.trim()
          ? t.test(e)
            ? null
            : "Enter a valid email address"
          : "Email is required";
      },
      "validatePassword",
      0,
      function (e) {
        return e
          ? e.length < 8
            ? "Password must be at least 8 characters"
            : e.length > 128
              ? "Password must be at most 128 characters"
              : null
          : "Password is required";
      },
    ]);
  },
  72715,
  (e) => {
    "use strict";
    var t = e.i(27211),
      s = e.i(17825),
      i = e.i(47080),
      n = e.i(45149),
      r = e.i(34031),
      a = e.i(38100),
      o = class extends n.Subscribable {
        #e;
        #t = void 0;
        #s;
        #i;
        constructor(e, t) {
          (super(),
            (this.#e = e),
            this.setOptions(t),
            this.bindMethods(),
            this.#n());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this)));
        }
        setOptions(e) {
          let t = this.options;
          ((this.options = this.#e.defaultMutationOptions(e)),
            (0, i.shallowEqualObjects)(this.options, t) ||
              this.#e
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.#s,
                  observer: this,
                }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, i.hashKey)(t.mutationKey) !==
              (0, i.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#s?.state.status === "pending" &&
                this.#s.setOptions(this.options));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#s &&
            (this.#s.addObserver(this), this.#n());
        }
        onUnsubscribe() {
          this.hasListeners() || this.#s?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#n(), this.#r(e));
        }
        getCurrentResult() {
          return this.#t;
        }
        reset() {
          (this.#s?.removeObserver(this),
            (this.#s = void 0),
            this.#n(),
            this.#r());
        }
        mutate(e, t) {
          return (
            (this.#i = t),
            this.#s?.removeObserver(this),
            (this.#s = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#s.addObserver(this),
            this.#s.execute(e)
          );
        }
        #n() {
          let e = this.#s?.state ?? (0, a.getDefaultState)();
          this.#t = {
            ...e,
            isPending: "pending" === e.status,
            isSuccess: "success" === e.status,
            isError: "error" === e.status,
            isIdle: "idle" === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #r(e) {
          r.notifyManager.batch(() => {
            if (this.#i && this.hasListeners()) {
              let t = this.#t.variables,
                s = this.#t.context,
                i = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#i.onSuccess?.(e.data, t, s, i);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#i.onSettled?.(e.data, null, t, s, i);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#i.onError?.(e.error, t, s, i);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#i.onSettled?.(void 0, e.error, t, s, i);
                } catch (e) {
                  Promise.reject(e);
                }
              }
            }
            this.listeners.forEach((e) => {
              e(this.#t);
            });
          });
        }
      };
    e.s(
      [
        "useMutation",
        0,
        function (e, n) {
          let a = (0, t.useQueryClient)(n),
            [u] = s.useState(() => new o(a, e));
          s.useEffect(() => {
            u.setOptions(e);
          }, [u, e]);
          let c = s.useSyncExternalStore(
              s.useCallback(
                (e) => u.subscribe(r.notifyManager.batchCalls(e)),
                [u],
              ),
              () => u.getCurrentResult(),
              () => u.getCurrentResult(),
            ),
            l = s.useCallback(
              (...e) => {
                u.mutate(e[0], e[1]).catch(i.noop);
              },
              [u],
            );
          if (
            c.error &&
            (0, i.shouldThrowError)(u.options.throwOnError, [c.error])
          )
            throw c.error;
          return { ...c, mutate: l, mutateAsync: c.mutate };
        },
      ],
      72715,
    );
  },
]);
