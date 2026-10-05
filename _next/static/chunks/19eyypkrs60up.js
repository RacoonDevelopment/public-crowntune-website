(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  62330,
  (t) => {
    "use strict";
    var e = t.i(99541),
      s = t.i(17825),
      n = t.i(63147),
      i = t.i(65957),
      r = t.i(55601),
      a = t.i(95235),
      o = t.i(79062),
      u = t.i(51457),
      c = t.i(43910),
      l = t.i(44493),
      d = t.i(39426),
      h = t.i(63153),
      p = t.i(46537),
      m = t.i(36649);
    function f() {
      let t = (0, n.useRouter)(),
        f = (0, n.useSearchParams)(),
        { isLeaving: x, navigate: g } = (0, l.useLeaveNavigate)(),
        [b, v] = (0, s.useState)(""),
        [w, y] = (0, s.useState)(""),
        [j, _] = (0, s.useState)(null),
        [N, C] = (0, s.useState)(!1),
        k = (0, h.useResetPassword)(),
        M = f.get("token");
      return (0, e.jsx)(r.AuthBackground, {
        children: (0, e.jsxs)("div", {
          className:
            "relative z-10 flex min-h-screen w-full max-w-md flex-col justify-center px-6",
          children: [
            (0, e.jsxs)(c.AnimatedSection, {
              leaving: x,
              position: "top",
              className: "mb-5 flex flex-col items-center text-center",
              children: [
                (0, e.jsx)(a.AuthLogo, {}),
                (0, e.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, e.jsx)("h1", {
                      className:
                        "text-xl font-bold uppercase tracking-[0.2em] text-white",
                      children: "Set New Password",
                    }),
                    (0, e.jsx)("p", {
                      className: "text-sm leading-6 text-white/50",
                      children:
                        "Enter a new password for your account. It must be at least 8 characters.",
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsx)(c.AnimatedSection, {
              leaving: x,
              position: "bottom",
              className: "mb-5 flex flex-col gap-4",
              children: M
                ? N
                  ? (0, e.jsxs)("div", {
                      className: "flex flex-col items-center gap-4 text-center",
                      children: [
                        (0, e.jsx)("div", {
                          className:
                            "rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300",
                          children:
                            "✓ Password updated! Redirecting to login...",
                        }),
                        (0, e.jsx)(i.default, {
                          href: "/login",
                          className:
                            "text-xs text-white/40 underline transition-colors hover:text-white",
                          children: "Go to login now",
                        }),
                      ],
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(o.AuthInput, {
                          label: "New Password",
                          type: "password",
                          autoComplete: "new-password",
                          placeholder: "••••••••",
                          value: b,
                          onChange: (t) => v(t.target.value),
                        }),
                        (0, e.jsx)(o.AuthInput, {
                          label: "Confirm Password",
                          type: "password",
                          autoComplete: "new-password",
                          placeholder: "••••••••",
                          value: w,
                          onChange: (t) => y(t.target.value),
                        }),
                        j && (0, e.jsx)(p.ApiError, { message: j }),
                        (0, e.jsx)(u.CustomButton, {
                          type: "submit",
                          disabled: k.isPending || x || !b || !w,
                          onClick: (e) => {
                            if ((e && e.preventDefault(), _(null), k.isPending))
                              return;
                            let s = (0, m.validatePassword)(b),
                              n = (0, m.validateConfirmPassword)(b, w);
                            s || n
                              ? _(s ?? n ?? null)
                              : M
                                ? k
                                    .mutateAsync({
                                      token: M,
                                      newPassword: b,
                                      confirmPassword: w,
                                    })
                                    .then(() => {
                                      (C(!0),
                                        setTimeout(
                                          () => t.push("/login"),
                                          2e3,
                                        ));
                                    })
                                    .catch((t) => {
                                      _(
                                        t instanceof Error
                                          ? t.message
                                          : "Failed to reset password",
                                      );
                                    })
                                : _("Invalid or missing reset token");
                          },
                          children: k.isPending
                            ? (0, e.jsxs)("span", {
                                className:
                                  "flex items-center justify-center gap-2",
                                children: [
                                  (0, e.jsx)(p.Spinner, {}),
                                  " UPDATING...",
                                ],
                              })
                            : "RESET PASSWORD",
                        }),
                        (0, e.jsxs)(i.default, {
                          href: "/forgot-password",
                          className:
                            "group inline-flex items-center justify-center gap-2 text-xs text-white/35 transition-colors hover:text-white",
                          onClick: (t) => {
                            (t.preventDefault(), g("/forgot-password"));
                          },
                          children: [
                            (0, e.jsx)(d.ArrowBackIcon, {
                              className:
                                "text-[16px] transition-transform group-hover:-translate-x-1",
                            }),
                            "Back to forgot password",
                          ],
                        }),
                      ],
                    })
                : (0, e.jsx)(p.ApiError, {
                    message:
                      "Invalid or missing reset link. Please request a new one.",
                    onRetry: () => g("/forgot-password"),
                  }),
            }),
          ],
        }),
      });
    }
    t.s([
      "default",
      0,
      function () {
        return (0, e.jsx)(s.Suspense, {
          fallback: null,
          children: (0, e.jsx)(f, {}),
        });
      },
    ]);
  },
  94079,
  (t) => {
    "use strict";
    var e = t.i(99541),
      s = t.i(60827);
    t.s([
      "CrtBackdrop",
      0,
      function ({ overlay: t = "bg-black/50", intense: n = !1 }) {
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)("div", {
              className: "absolute inset-0",
              children: (0, e.jsx)(s.default, {
                src: "/images/home%20page/background/homepage1.png",
                alt: "",
                fill: !0,
                sizes: "100vw",
                className:
                  "object-cover  max-[900px]:object-[68%_center] min-[901px]:object-center",
              }),
            }),
            (0, e.jsx)("div", {
              className: `pointer-events-none absolute inset-0 z-0 mix-blend-multiply ${t}`,
            }),
            n
              ? (0, e.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_4px)] animate-[crtScanlines_8s_linear_infinite]",
                })
              : (0, e.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.005)_4px)]",
                }),
            n &&
              (0, e.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 z-20 opacity-20 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_8px,rgba(240,195,48,0.08)_8px,rgba(240,195,48,0.08)_9px)] animate-[glitchShift_0.35s_steps(2,end)_infinite]",
              }),
          ],
        });
      },
    ]);
  },
  51457,
  (t) => {
    "use strict";
    var e = t.i(99541);
    t.s([
      "CustomButton",
      0,
      function ({
        children: t,
        type: s = "button",
        disabled: n = !1,
        onClick: i,
        className: r = "",
      }) {
        return (0, e.jsx)("button", {
          type: s,
          disabled: n,
          onClick: i,
          className: `w-full cursor-pointer border-2 border-accent bg-accent 
      px-4 py-4 font-mono text-sm font-extrabold uppercase tracking-widest 
      text-black shadow-[3px_3px_0px_#FFFEF7] transition-none hover:bg-accent-soft 
      hover:border-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-accent active:translate-x-0.5 active:translate-y-0.5 
      active:shadow-none disabled:pointer-events-none disabled:opacity-50 ${r}`,
          children: t,
        });
      },
    ]);
  },
  39426,
  (t) => {
    "use strict";
    var e = t.i(99541);
    function s({ className: t, children: n }) {
      return (0, e.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        className: t,
        children: n,
      });
    }
    t.s([
      "ArrowBackIcon",
      0,
      function ({ className: t }) {
        return (0, e.jsxs)(s, {
          className: t,
          children: [
            (0, e.jsx)("path", { d: "M19 12H5" }),
            (0, e.jsx)("path", { d: "m11 18-6-6 6-6" }),
          ],
        });
      },
      "MailIcon",
      0,
      function ({ className: t }) {
        return (0, e.jsxs)(s, {
          className: t,
          children: [
            (0, e.jsx)("rect", {
              x: "3",
              y: "5",
              width: "18",
              height: "14",
              rx: "2",
            }),
            (0, e.jsx)("path", { d: "m3 7 9 6 9-6" }),
          ],
        });
      },
      "expand_moreIcon",
      0,
      function ({ className: t }) {
        return (0, e.jsx)(s, {
          className: t,
          children: (0, e.jsx)("path", { d: "m6 9 6 6 6-6" }),
        });
      },
    ]);
  },
  46537,
  (t) => {
    "use strict";
    var e = t.i(99541);
    t.s([
      "ApiError",
      0,
      function ({ message: t, onRetry: s }) {
        return (0, e.jsxs)("div", {
          role: "alert",
          className:
            "flex w-full items-center gap-3 rounded-none border-2 border-danger/40 bg-danger/10 px-4 py-3 font-mono text-xs text-red-300",
          children: [
            (0, e.jsx)("span", { children: "⚠" }),
            (0, e.jsx)("span", { className: "flex-1", children: t }),
            s &&
              (0, e.jsx)("button", {
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
      function ({ className: t = "" }) {
        return (0, e.jsxs)("svg", {
          className: `h-4 w-4 animate-spin text-current ${t}`,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, e.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, e.jsx)("path", {
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
  (t) => {
    "use strict";
    var e = t.i(99541);
    t.s([
      "DotGrid",
      0,
      function ({ className: t = "" }) {
        return (0, e.jsx)("div", {
          "aria-hidden": "true",
          className: `absolute  inset-0 pointer-events-none bg-[radial-gradient(#ffe600_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.07] ${t}`,
        });
      },
    ]);
  },
  43910,
  44493,
  (t) => {
    "use strict";
    var e = t.i(99541);
    let s = {
        top: "animate-[slideDownIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        bottom: "animate-[slideUpIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
      },
      n = {
        top: {
          450: "animate-[slideUpOut_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]",
          800: "animate-[slideUpOut_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        },
        bottom: {
          450: "animate-[slideDownOut_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]",
          800: "animate-[slideDownOut_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
        },
      };
    t.s(
      [
        "AnimatedSection",
        0,
        function ({
          leaving: t,
          position: i,
          leaveMs: r = 800,
          className: a = "",
          children: o,
        }) {
          return (0, e.jsx)("section", {
            className: `${t ? n[i][r] : s[i]} ${a}`,
            children: o,
          });
        },
      ],
      43910,
    );
    var i = t.i(63147),
      r = t.i(17825);
    t.s(
      [
        "useLeaveNavigate",
        0,
        function () {
          let t = (0, i.useRouter)(),
            [e, s] = (0, r.useState)(!1);
          return {
            isLeaving: e,
            navigate: (0, r.useCallback)(
              (e) => {
                (s(!0), setTimeout(() => t.push(e), 450));
              },
              [t],
            ),
          };
        },
      ],
      44493,
    );
  },
  55601,
  95235,
  (t) => {
    "use strict";
    var e = t.i(99541),
      s = t.i(32201),
      n = t.i(94079);
    t.s(
      [
        "AuthBackground",
        0,
        function ({ children: t }) {
          return (0, e.jsxs)("main", {
            className:
              "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-stark pt-20",
            children: [
              (0, e.jsx)("div", {
                className: "absolute inset-0 bg-stark",
                "aria-hidden": "true",
              }),
              (0, e.jsx)(n.CrtBackdrop, {}),
              (0, e.jsx)(s.DotGrid, {}),
              (0, e.jsx)("div", {
                className:
                  "relative z-30 flex min-h-screen w-full items-center justify-center",
                children: t,
              }),
            ],
          });
        },
      ],
      55601,
    );
    var i = t.i(60827);
    t.s(
      [
        "AuthLogo",
        0,
        function ({ className: t = "" }) {
          return (0, e.jsx)("div", {
            className: `relative h-45 w-full overflow-hidden ${t}`,
            children: (0, e.jsx)(i.default, {
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
  (t) => {
    "use strict";
    var e = t.i(99541),
      s = t.i(17825);
    t.s([
      "AuthInput",
      0,
      function ({
        label: t,
        large: n = !1,
        id: i,
        labelClassName: r,
        inputClassName: a,
        ...o
      }) {
        let u = (0, s.useId)(),
          c = i ?? u;
        return (0, e.jsxs)("div", {
          className: "flex flex-col justify-end  h-full ",
          children: [
            (0, e.jsx)("label", {
              htmlFor: c,
              className: `
          mb-2
          flex ${n ? "min-h-[3em]" : ""} items-end
          font-mono  
          font-semibold
          uppercase
          tracking-widest
          text-mist
          ${r ?? ""}
          `,
              children: t,
            }),
            (0, e.jsx)("input", {
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
  (t) => {
    "use strict";
    var e = t.i(72715),
      s = t.i(27211);
    t.i(75080);
    var n = t.i(92044);
    async function i(t) {
      return (await n.api.post("/auth/login", t)).data.data;
    }
    async function r(t) {
      return (await n.api.post("/auth/login", t)).data.data;
    }
    async function a(t) {
      return (await n.api.post("/auth/verify-email", t)).data.data;
    }
    async function o(t) {
      return (await n.api.post("/auth/resend-verification", { email: t })).data
        .data;
    }
    async function u() {
      return (await n.api.get("/auth/me")).data.data;
    }
    async function c(t) {
      return (await n.api.post("/auth/forgot-password", t)).data.data;
    }
    async function l(t) {
      return (await n.api.post("/auth/resend-forgot-password", t)).data.data;
    }
    async function d(t) {
      return (await n.api.post("/auth/reset-password", t)).data.data;
    }
    async function h(t) {
      return (await n.api.post("/auth/2fa/email/send", t)).data.data;
    }
    async function p(t) {
      return (await n.api.post("/auth/2fa/verify", t)).data.data;
    }
    t.s(
      [
        "forgotPassword",
        0,
        c,
        "login",
        0,
        i,
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
    var m = t.i(50797);
    t.i(35595);
    var f = t.i(54972);
    t.s(
      [
        "useForgotPassword",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: c });
        },
        "useLogin",
        0,
        function () {
          let { login: t } = (0, f.useAuth)(),
            n = (0, s.useQueryClient)();
          return (0, e.useMutation)({
            mutationFn: i,
            onSuccess: (e) => {
              "twoFactorRequired" in e ||
                ((0, m.setAccessToken)(e.accessToken),
                t(e.accessToken, e.user),
                n.invalidateQueries({
                  predicate: (t) => !1 !== t.options.retry,
                }));
            },
          });
        },
        "useResendVerification",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: o });
        },
        "useResetPassword",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: d });
        },
        "useSend2faEmailOtp",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: h });
        },
        "uselogin",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: r });
        },
        "useVerify2fa",
        0,
        function () {
          let { login: t } = (0, f.useAuth)(),
            n = (0, s.useQueryClient)();
          return (0, e.useMutation)({
            mutationFn: p,
            onSuccess: (e) => {
              ((0, m.setAccessToken)(e.accessToken),
                t(e.accessToken, e.user),
                n.invalidateQueries({
                  predicate: (t) => !1 !== t.options.retry,
                }));
            },
          });
        },
        "useVerifyEmail",
        0,
        function () {
          return (0, e.useMutation)({ mutationFn: a });
        },
      ],
      63153,
    );
  },
  36649,
  (t) => {
    "use strict";
    let e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    t.s([
      "validateCode",
      0,
      function (t) {
        if (!t) return "Code is required";
        let e = t.trim();
        return 8 !== e.length
          ? "Code must be 8 characters"
          : /^[a-zA-Z0-9]{8}$/.test(e)
            ? null
            : "Code must be 8 digits";
      },
      "validateConfirmPassword",
      0,
      function (t, e) {
        return t !== e ? "Passwords do not match" : null;
      },
      "validateCountry",
      0,
      function (t) {
        return t ? null : "Country is required";
      },
      "validateEmail",
      0,
      function (t) {
        return t.trim()
          ? e.test(t)
            ? null
            : "Enter a valid email address"
          : "Email is required";
      },
      "validatePassword",
      0,
      function (t) {
        return t
          ? t.length < 8
            ? "Password must be at least 8 characters"
            : t.length > 128
              ? "Password must be at most 128 characters"
              : null
          : "Password is required";
      },
    ]);
  },
  72715,
  (t) => {
    "use strict";
    var e = t.i(27211),
      s = t.i(17825),
      n = t.i(47080),
      i = t.i(45149),
      r = t.i(34031),
      a = t.i(38100),
      o = class extends i.Subscribable {
        #t;
        #e = void 0;
        #s;
        #n;
        constructor(t, e) {
          (super(),
            (this.#t = t),
            this.setOptions(e),
            this.bindMethods(),
            this.#i());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this)));
        }
        setOptions(t) {
          let e = this.options;
          ((this.options = this.#t.defaultMutationOptions(t)),
            (0, n.shallowEqualObjects)(this.options, e) ||
              this.#t
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.#s,
                  observer: this,
                }),
            e?.mutationKey &&
            this.options.mutationKey &&
            (0, n.hashKey)(e.mutationKey) !==
              (0, n.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#s?.state.status === "pending" &&
                this.#s.setOptions(this.options));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#s &&
            (this.#s.addObserver(this), this.#i());
        }
        onUnsubscribe() {
          this.hasListeners() || this.#s?.removeObserver(this);
        }
        onMutationUpdate(t) {
          (this.#i(), this.#r(t));
        }
        getCurrentResult() {
          return this.#e;
        }
        reset() {
          (this.#s?.removeObserver(this),
            (this.#s = void 0),
            this.#i(),
            this.#r());
        }
        mutate(t, e) {
          return (
            (this.#n = e),
            this.#s?.removeObserver(this),
            (this.#s = this.#t.getMutationCache().build(this.#t, this.options)),
            this.#s.addObserver(this),
            this.#s.execute(t)
          );
        }
        #i() {
          let t = this.#s?.state ?? (0, a.getDefaultState)();
          this.#e = {
            ...t,
            isPending: "pending" === t.status,
            isSuccess: "success" === t.status,
            isError: "error" === t.status,
            isIdle: "idle" === t.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #r(t) {
          r.notifyManager.batch(() => {
            if (this.#n && this.hasListeners()) {
              let e = this.#e.variables,
                s = this.#e.context,
                n = {
                  client: this.#t,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (t?.type === "success") {
                try {
                  this.#n.onSuccess?.(t.data, e, s, n);
                } catch (t) {
                  Promise.reject(t);
                }
                try {
                  this.#n.onSettled?.(t.data, null, e, s, n);
                } catch (t) {
                  Promise.reject(t);
                }
              } else if (t?.type === "error") {
                try {
                  this.#n.onError?.(t.error, e, s, n);
                } catch (t) {
                  Promise.reject(t);
                }
                try {
                  this.#n.onSettled?.(void 0, t.error, e, s, n);
                } catch (t) {
                  Promise.reject(t);
                }
              }
            }
            this.listeners.forEach((t) => {
              t(this.#e);
            });
          });
        }
      };
    t.s(
      [
        "useMutation",
        0,
        function (t, i) {
          let a = (0, e.useQueryClient)(i),
            [u] = s.useState(() => new o(a, t));
          s.useEffect(() => {
            u.setOptions(t);
          }, [u, t]);
          let c = s.useSyncExternalStore(
              s.useCallback(
                (t) => u.subscribe(r.notifyManager.batchCalls(t)),
                [u],
              ),
              () => u.getCurrentResult(),
              () => u.getCurrentResult(),
            ),
            l = s.useCallback(
              (...t) => {
                u.mutate(t[0], t[1]).catch(n.noop);
              },
              [u],
            );
          if (
            c.error &&
            (0, n.shouldThrowError)(u.options.throwOnError, [c.error])
          )
            throw c.error;
          return { ...c, mutate: l, mutateAsync: c.mutate };
        },
      ],
      72715,
    );
  },
]);
