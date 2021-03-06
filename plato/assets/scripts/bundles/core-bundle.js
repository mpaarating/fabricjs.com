(function(t, e) {
    function n(t) {
        var e = de[t] = {};
        return J.each(t.split(ee), function(t, n) {
            e[n] = !0;
        }), e;
    }
    function r(t, n, r) {
        if (r === e && 1 === t.nodeType) {
            var i = "data-" + n.replace(ve, "-$1").toLowerCase();
            if (r = t.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ge.test(r) ? J.parseJSON(r) : r;
                } catch (o) {}
                J.data(t, n, r);
            } else r = e;
        }
        return r;
    }
    function i(t) {
        var e;
        for (e in t) if (("data" !== e || !J.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function o() {
        return !1;
    }
    function s() {
        return !0;
    }
    function a(t) {
        return !t || !t.parentNode || 11 === t.parentNode.nodeType;
    }
    function l(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t;
    }
    function u(t, e, n) {
        if (e = e || 0, J.isFunction(e)) return J.grep(t, function(t, r) {
            var i = !!e.call(t, r, t);
            return i === n;
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e === n;
        });
        if ("string" == typeof e) {
            var r = J.grep(t, function(t) {
                return 1 === t.nodeType;
            });
            if (De.test(e)) return J.filter(e, r, !n);
            e = J.filter(e, r);
        }
        return J.grep(t, function(t) {
            return J.inArray(t, e) >= 0 === n;
        });
    }
    function h(t) {
        var e = Oe.split("|"), n = t.createDocumentFragment();
        if (n.createElement) for (;e.length; ) n.createElement(e.pop());
        return n;
    }
    function c(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e));
    }
    function f(t, e) {
        if (1 === e.nodeType && J.hasData(t)) {
            var n, r, i, o = J._data(t), s = J._data(e, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a) for (r = 0, i = a[n].length; i > r; r++) J.event.add(e, n, a[n][r]);
            }
            s.data && (s.data = J.extend({}, s.data));
        }
    }
    function p(t, e) {
        var n;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), 
        n = e.nodeName.toLowerCase(), "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), 
        J.support.html5Clone && t.innerHTML && !J.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ue.test(t.type) ? (e.defaultChecked = e.checked = t.checked, 
        e.value !== t.value && (e.value = t.value)) : "option" === n ? e.selected = t.defaultSelected : "input" === n || "textarea" === n ? e.defaultValue = t.defaultValue : "script" === n && e.text !== t.text && (e.text = t.text), 
        e.removeAttribute(J.expando));
    }
    function d(t) {
        return t.getElementsByTagName !== void 0 ? t.getElementsByTagName("*") : t.querySelectorAll !== void 0 ? t.querySelectorAll("*") : [];
    }
    function g(t) {
        Ue.test(t.type) && (t.defaultChecked = t.checked);
    }
    function v(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = yn.length; i--; ) if (e = yn[i] + n, 
        e in t) return e;
        return r;
    }
    function m(t, e) {
        return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t);
    }
    function y(t, e) {
        for (var n, r, i = [], o = 0, s = t.length; s > o; o++) n = t[o], n.style && (i[o] = J._data(n, "olddisplay"), 
        e ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && m(n) && (i[o] = J._data(n, "olddisplay", _(n.nodeName)))) : (r = nn(n, "display"), 
        !i[o] && "none" !== r && J._data(n, "olddisplay", r)));
        for (o = 0; s > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? i[o] || "" : "none"));
        return t;
    }
    function x(t, e, n) {
        var r = cn.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e;
    }
    function b(t, e, n, r) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += J.css(t, n + mn[i], !0)), 
        r ? ("content" === n && (o -= parseFloat(nn(t, "padding" + mn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(t, "border" + mn[i] + "Width")) || 0)) : (o += parseFloat(nn(t, "padding" + mn[i])) || 0, 
        "padding" !== n && (o += parseFloat(nn(t, "border" + mn[i] + "Width")) || 0));
        return o;
    }
    function w(t, e, n) {
        var r = "width" === e ? t.offsetWidth : t.offsetHeight, i = !0, o = J.support.boxSizing && "border-box" === J.css(t, "boxSizing");
        if (0 >= r || null == r) {
            if (r = nn(t, e), (0 > r || null == r) && (r = t.style[e]), fn.test(r)) return r;
            i = o && (J.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0;
        }
        return r + b(t, e, n || (o ? "border" : "content"), i) + "px";
    }
    function _(t) {
        if (dn[t]) return dn[t];
        var e = J("<" + t + ">").appendTo(R.body), n = e.css("display");
        return e.remove(), ("none" === n || "" === n) && (rn = R.body.appendChild(rn || J.extend(R.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, 
        on.write("<!doctype html><html><body>"), on.close()), e = on.body.appendChild(on.createElement(t)), 
        n = nn(e, "display"), R.body.removeChild(rn)), dn[t] = n, n;
    }
    function k(t, e, n, r) {
        var i;
        if (J.isArray(e)) J.each(e, function(e, i) {
            n || wn.test(t) ? r(t, i) : k(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r);
        }); else if (n || "object" !== J.type(e)) r(t, e); else for (i in e) k(t + "[" + i + "]", e[i], n, r);
    }
    function C(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i, o, s = e.toLowerCase().split(ee), a = 0, l = s.length;
            if (J.isFunction(n)) for (;l > a; a++) r = s[a], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), 
            i = t[r] = t[r] || [], i[o ? "unshift" : "push"](n);
        };
    }
    function T(t, n, r, i, o, s) {
        o = o || n.dataTypes[0], s = s || {}, s[o] = !0;
        for (var a, l = t[o], u = 0, h = l ? l.length : 0, c = t === Pn; h > u && (c || !a); u++) a = l[u](n, r, i), 
        "string" == typeof a && (!c || s[a] ? a = e : (n.dataTypes.unshift(a), a = T(t, n, r, i, a, s)));
        return (c || !a) && !s["*"] && (a = T(t, n, r, i, "*", s)), a;
    }
    function S(t, n) {
        var r, i, o = J.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
        i && J.extend(!0, t, i);
    }
    function N(t, n, r) {
        var i, o, s, a, l = t.contents, u = t.dataTypes, h = t.responseFields;
        for (o in h) o in r && (n[h[o]] = r[o]);
        for (;"*" === u[0]; ) u.shift(), i === e && (i = t.mimeType || n.getResponseHeader("content-type"));
        if (i) for (o in l) if (l[o] && l[o].test(i)) {
            u.unshift(o);
            break;
        }
        if (u[0] in r) s = u[0]; else {
            for (o in r) {
                if (!u[0] || t.converters[o + " " + u[0]]) {
                    s = o;
                    break;
                }
                a || (a = o);
            }
            s = s || a;
        }
        return s ? (s !== u[0] && u.unshift(s), r[s]) : void 0;
    }
    function E(t, e) {
        var n, r, i, o, s = t.dataTypes.slice(), a = s[0], l = {}, u = 0;
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), s[1]) for (n in t.converters) l[n.toLowerCase()] = t.converters[n];
        for (;i = s[++u]; ) if ("*" !== i) {
            if ("*" !== a && a !== i) {
                if (n = l[a + " " + i] || l["* " + i], !n) for (r in l) if (o = r.split(" "), o[1] === i && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                    n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], s.splice(u--, 0, i));
                    break;
                }
                if (n !== !0) if (n && t["throws"]) e = n(e); else try {
                    e = n(e);
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: n ? h : "No conversion from " + a + " to " + i
                    };
                }
            }
            a = i;
        }
        return {
            state: "success",
            data: e
        };
    }
    function A() {
        try {
            return new t.XMLHttpRequest();
        } catch (e) {}
    }
    function B() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function L() {
        return setTimeout(function() {
            Gn = e;
        }, 0), Gn = J.now();
    }
    function M(t, e) {
        J.each(e, function(e, n) {
            for (var r = (tr[e] || []).concat(tr["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(t, e, n)) return;
        });
    }
    function F(t, e, n) {
        var r, i = 0, o = Kn.length, s = J.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            for (var e = Gn || L(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, i = 1 - r, o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(i);
            return s.notifyWith(t, [ l, i, n ]), 1 > i && a ? n : (s.resolveWith(t, [ l ]), 
            !1);
        }, l = s.promise({
            elem: t,
            props: J.extend({}, e),
            opts: J.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Gn || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var r = J.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(e) {
                for (var n = 0, r = e ? l.tweens.length : 0; r > n; n++) l.tweens[n].run(1);
                return e ? s.resolveWith(t, [ l, e ]) : s.rejectWith(t, [ l, e ]), this;
            }
        }), u = l.props;
        for (j(u, l.opts.specialEasing); o > i; i++) if (r = Kn[i].call(l, t, u, l.opts)) return r;
        return M(l, u), J.isFunction(l.opts.start) && l.opts.start.call(t, l), J.fx.timer(J.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: t
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function j(t, e) {
        var n, r, i, o, s;
        for (n in t) if (r = J.camelCase(n), i = e[r], o = t[n], J.isArray(o) && (i = o[1], 
        o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = J.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete t[r];
            for (n in o) n in t || (t[n] = o[n], e[n] = i);
        } else e[r] = i;
    }
    function H(t, e, n) {
        var r, i, o, s, a, l, u, h, c, f = this, p = t.style, d = {}, g = [], v = t.nodeType && m(t);
        n.queue || (h = J._queueHooks(t, "fx"), null == h.unqueued && (h.unqueued = 0, c = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || c();
        }), h.unqueued++, f.always(function() {
            f.always(function() {
                h.unqueued--, J.queue(t, "fx").length || h.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === J.css(t, "display") && "none" === J.css(t, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", J.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (r in e) if (o = e[r], Qn.exec(o)) {
            if (delete e[r], l = l || "toggle" === o, o === (v ? "hide" : "show")) continue;
            g.push(r);
        }
        if (s = g.length) {
            a = J._data(t, "fxshow") || J._data(t, "fxshow", {}), "hidden" in a && (v = a.hidden), 
            l && (a.hidden = !v), v ? J(t).show() : f.done(function() {
                J(t).hide();
            }), f.done(function() {
                var e;
                J.removeData(t, "fxshow", !0);
                for (e in d) J.style(t, e, d[e]);
            });
            for (r = 0; s > r; r++) i = g[r], u = f.createTween(i, v ? a[i] : 0), d[i] = a[i] || J.style(t, i), 
            i in a || (a[i] = u.start, v && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0));
        }
    }
    function D(t, e, n, r, i) {
        return new D.prototype.init(t, e, n, r, i);
    }
    function P(t, e) {
        var n, r = {
            height: t
        }, i = 0;
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = mn[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
    }
    function I(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1;
    }
    var O, z, R = t.document, q = t.location, W = t.navigator, $ = t.jQuery, X = t.$, Y = Array.prototype.push, V = Array.prototype.slice, G = Array.prototype.indexOf, U = Object.prototype.toString, Q = Object.prototype.hasOwnProperty, Z = String.prototype.trim, J = function(t, e) {
        return new J.fn.init(t, e, O);
    }, K = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, te = /\S/, ee = /\s+/, ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, oe = /^[\],:{}\s]*$/, se = /(?:^|:|,)(?:\s*\[)+/g, ae = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ue = /^-ms-/, he = /-([\da-z])/gi, ce = function(t, e) {
        return (e + "").toUpperCase();
    }, fe = function() {
        R.addEventListener ? (R.removeEventListener("DOMContentLoaded", fe, !1), J.ready()) : "complete" === R.readyState && (R.detachEvent("onreadystatechange", fe), 
        J.ready());
    }, pe = {};
    J.fn = J.prototype = {
        constructor: J,
        init: function(t, n, r) {
            var i, o, s;
            if (!t) return this;
            if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : re.exec(t), 
                i && (i[1] || !n)) {
                    if (i[1]) return n = n instanceof J ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : R, 
                    t = J.parseHTML(i[1], s, !0), ie.test(i[1]) && J.isPlainObject(n) && this.attr.call(t, n, !0), 
                    J.merge(this, t);
                    if (o = R.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(t);
                        this.length = 1, this[0] = o;
                    }
                    return this.context = R, this.selector = t, this;
                }
                return !n || n.jquery ? (n || r).find(t) : this.constructor(n).find(t);
            }
            return J.isFunction(t) ? r.ready(t) : (t.selector !== e && (this.selector = t.selector, 
            this.context = t.context), J.makeArray(t, this));
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return V.call(this);
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t];
        },
        pushStack: function(t, e, n) {
            var r = J.merge(this.constructor(), t);
            return r.prevObject = this, r.context = this.context, "find" === e ? r.selector = this.selector + (this.selector ? " " : "") + n : e && (r.selector = this.selector + "." + e + "(" + n + ")"), 
            r;
        },
        each: function(t, e) {
            return J.each(this, t, e);
        },
        ready: function(t) {
            return J.ready.promise().done(t), this;
        },
        eq: function(t) {
            return t = +t, -1 === t ? this.slice(t) : this.slice(t, t + 1);
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","));
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Y,
        sort: [].sort,
        splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
        var t, n, r, i, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, l = 2), "object" != typeof a && !J.isFunction(a) && (a = {}), 
        u === l && (a = this, --l); u > l; l++) if (null != (t = arguments[l])) for (n in t) r = a[n], 
        i = t[n], a !== i && (h && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o = !1, 
        s = r && J.isArray(r) ? r : []) : s = r && J.isPlainObject(r) ? r : {}, a[n] = J.extend(h, s, i)) : i !== e && (a[n] = i));
        return a;
    }, J.extend({
        noConflict: function(e) {
            return t.$ === J && (t.$ = X), e && t.jQuery === J && (t.jQuery = $), J;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0);
        },
        ready: function(t) {
            if (t === !0 ? !--J.readyWait : !J.isReady) {
                if (!R.body) return setTimeout(J.ready, 1);
                J.isReady = !0, t !== !0 && --J.readyWait > 0 || (z.resolveWith(R, [ J ]), J.fn.trigger && J(R).trigger("ready").off("ready"));
            }
        },
        isFunction: function(t) {
            return "function" === J.type(t);
        },
        isArray: Array.isArray || function(t) {
            return "array" === J.type(t);
        },
        isWindow: function(t) {
            return null != t && t == t.window;
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        },
        type: function(t) {
            return null == t ? t + "" : pe[U.call(t)] || "object";
        },
        isPlainObject: function(t) {
            if (!t || "object" !== J.type(t) || t.nodeType || J.isWindow(t)) return !1;
            try {
                if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in t) ;
            return r === e || Q.call(t, r);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        error: function(t) {
            throw Error(t);
        },
        parseHTML: function(t, e, n) {
            var r;
            return t && "string" == typeof t ? ("boolean" == typeof e && (n = e, e = 0), e = e || R, 
            (r = ie.exec(t)) ? [ e.createElement(r[1]) ] : (r = J.buildFragment([ t ], e, n ? null : []), 
            J.merge([], (r.cacheable ? J.clone(r.fragment) : r.fragment).childNodes))) : null;
        },
        parseJSON: function(e) {
            return e && "string" == typeof e ? (e = J.trim(e), t.JSON && t.JSON.parse ? t.JSON.parse(e) : oe.test(e.replace(ae, "@").replace(le, "]").replace(se, "")) ? Function("return " + e)() : (J.error("Invalid JSON: " + e), 
            void 0)) : null;
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), 
                r.async = "false", r.loadXML(n));
            } catch (o) {
                r = e;
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(e) {
            e && te.test(e) && (t.execScript || function(e) {
                t.eval.call(t, e);
            })(e);
        },
        camelCase: function(t) {
            return t.replace(ue, "ms-").replace(he, ce);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, n, r) {
            var i, o = 0, s = t.length, a = s === e || J.isFunction(t);
            if (r) if (a) {
                for (i in t) if (n.apply(t[i], r) === !1) break;
            } else for (;s > o && n.apply(t[o++], r) !== !1; ) ; else if (a) {
                for (i in t) if (n.call(t[i], i, t[i]) === !1) break;
            } else for (;s > o && n.call(t[o], o, t[o++]) !== !1; ) ;
            return t;
        },
        trim: Z && !Z.call("﻿ ") ? function(t) {
            return null == t ? "" : Z.call(t);
        } : function(t) {
            return null == t ? "" : (t + "").replace(ne, "");
        },
        makeArray: function(t, e) {
            var n, r = e || [];
            return null != t && (n = J.type(t), null == t.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(t) ? Y.call(r, t) : J.merge(r, t)), 
            r;
        },
        inArray: function(t, e, n) {
            var r;
            if (e) {
                if (G) return G.call(e, t, n);
                for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in e && e[n] === t) return n;
            }
            return -1;
        },
        merge: function(t, n) {
            var r = n.length, i = t.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) t[i++] = n[o]; else for (;n[o] !== e; ) t[i++] = n[o++];
            return t.length = i, t;
        },
        grep: function(t, e, n) {
            var r, i = [], o = 0, s = t.length;
            for (n = !!n; s > o; o++) r = !!e(t[o], o), n !== r && i.push(t[o]);
            return i;
        },
        map: function(t, n, r) {
            var i, o, s = [], a = 0, l = t.length, u = t instanceof J || l !== e && "number" == typeof l && (l > 0 && t[0] && t[l - 1] || 0 === l || J.isArray(t));
            if (u) for (;l > a; a++) i = n(t[a], a, r), null != i && (s[s.length] = i); else for (o in t) i = n(t[o], o, r), 
            null != i && (s[s.length] = i);
            return s.concat.apply([], s);
        },
        guid: 1,
        proxy: function(t, n) {
            var r, i, o;
            return "string" == typeof n && (r = t[n], n = t, t = r), J.isFunction(t) ? (i = V.call(arguments, 2), 
            o = function() {
                return t.apply(n, i.concat(V.call(arguments)));
            }, o.guid = t.guid = t.guid || J.guid++, o) : e;
        },
        access: function(t, n, r, i, o, s, a) {
            var l, u = null == r, h = 0, c = t.length;
            if (r && "object" == typeof r) {
                for (h in r) J.access(t, n, h, r[h], 1, s, i);
                o = 1;
            } else if (i !== e) {
                if (l = a === e && J.isFunction(i), u && (l ? (l = n, n = function(t, e, n) {
                    return l.call(J(t), n);
                }) : (n.call(t, i), n = null)), n) for (;c > h; h++) n(t[h], r, l ? i.call(t[h], h, n(t[h], r)) : i, a);
                o = 1;
            }
            return o ? t : u ? n.call(t) : c ? n(t[0], r) : s;
        },
        now: function() {
            return new Date().getTime();
        }
    }), J.ready.promise = function(e) {
        if (!z) if (z = J.Deferred(), "complete" === R.readyState) setTimeout(J.ready, 1); else if (R.addEventListener) R.addEventListener("DOMContentLoaded", fe, !1), 
        t.addEventListener("load", J.ready, !1); else {
            R.attachEvent("onreadystatechange", fe), t.attachEvent("onload", J.ready);
            var n = !1;
            try {
                n = null == t.frameElement && R.documentElement;
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!J.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (t) {
                        return setTimeout(i, 50);
                    }
                    J.ready();
                }
            }();
        }
        return z.promise(e);
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
        pe["[object " + e + "]"] = e.toLowerCase();
    }), O = J(R);
    var de = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || n(t) : J.extend({}, t);
        var r, i, o, s, a, l, u = [], h = !t.once && [], c = function(e) {
            for (r = t.memory && e, i = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++) if (u[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                r = !1;
                break;
            }
            o = !1, u && (h ? h.length && c(h.shift()) : r ? u = [] : f.disable());
        }, f = {
            add: function() {
                if (u) {
                    var e = u.length;
                    (function n(e) {
                        J.each(e, function(e, r) {
                            var i = J.type(r);
                            "function" === i ? (!t.unique || !f.has(r)) && u.push(r) : r && r.length && "string" !== i && n(r);
                        });
                    })(arguments), o ? a = u.length : r && (s = e, c(r));
                }
                return this;
            },
            remove: function() {
                return u && J.each(arguments, function(t, e) {
                    for (var n; (n = J.inArray(e, u, n)) > -1; ) u.splice(n, 1), o && (a >= n && a--, 
                    l >= n && l--);
                }), this;
            },
            has: function(t) {
                return J.inArray(t, u) > -1;
            },
            empty: function() {
                return u = [], this;
            },
            disable: function() {
                return u = h = r = e, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return h = e, r || f.disable(), this;
            },
            locked: function() {
                return !h;
            },
            fireWith: function(t, e) {
                return e = e || [], e = [ t, e.slice ? e.slice() : e ], u && (!i || h) && (o ? h.push(e) : c(e)), 
                this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return f;
    }, J.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", J.Callbacks("once memory"), "resolved" ], [ "reject", "fail", J.Callbacks("once memory"), "rejected" ], [ "notify", "progress", J.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return J.Deferred(function(n) {
                        J.each(e, function(e, r) {
                            var o = r[0], s = t[e];
                            i[r[1]](J.isFunction(s) ? function() {
                                var t = s.apply(this, arguments);
                                t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [ t ]);
                            } : n[o]);
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? J.extend(t, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, J.each(e, function(t, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = s.fire, i[o[0] + "With"] = s.fireWith;
            }), r.promise(i), t && t.call(i, i), i;
        },
        when: function(t) {
            var e, n, r, i = 0, o = V.call(arguments), s = o.length, a = 1 !== s || t && J.isFunction(t.promise) ? s : 0, l = 1 === a ? t : J.Deferred(), u = function(t, n, r) {
                return function(i) {
                    n[t] = this, r[t] = arguments.length > 1 ? V.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r);
                };
            };
            if (s > 1) for (e = Array(s), n = Array(s), r = Array(s); s > i; i++) o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --a;
            return a || l.resolveWith(r, o), l.promise();
        }
    }), J.support = function() {
        var e, n, r, i, o, s, a, l, u, h, c, f = R.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        i = R.createElement("select"), o = i.appendChild(R.createElement("option")), s = f.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", e = {
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== f.className,
            enctype: !!R.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== R.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === R.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, i.disabled = !0, 
        e.optDisabled = !o.disabled;
        try {
            delete f.test;
        } catch (p) {
            e.deleteExpando = !1;
        }
        if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", c = function() {
            e.noCloneEvent = !1;
        }), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", c)), s = R.createElement("input"), 
        s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, 
        s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), f.appendChild(s), 
        a = R.createDocumentFragment(), a.appendChild(f.lastChild), e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.appendChecked = s.checked, a.removeChild(s), a.appendChild(f), f.attachEvent) for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l = "on" + u, h = l in f, h || (f.setAttribute(l, "return;"), h = "function" == typeof f[l]), 
        e[u + "Bubbles"] = h;
        return J(function() {
            var n, r, i, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = R.getElementsByTagName("body")[0];
            a && (n = R.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", 
            a.insertBefore(n, a.firstChild), r = R.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            h = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
            e.reliableHiddenOffsets = h && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            e.boxSizing = 4 === r.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, 
            t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(r, null) || {}).top, 
            e.boxSizingReliable = "4px" === (t.getComputedStyle(r, null) || {
                width: "4px"
            }).width, o = R.createElement("div"), o.style.cssText = r.style.cssText = s, o.style.marginRight = o.style.width = "0", 
            r.style.width = "1px", r.appendChild(o), e.reliableMarginRight = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), 
            r.style.zoom !== void 0 && (r.innerHTML = "", r.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", 
            e.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", 
            r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== r.offsetWidth, 
            n.style.zoom = 1), a.removeChild(n), n = r = i = o = null);
        }), a.removeChild(f), n = r = i = o = s = a = f = null, e;
    }();
    var ge = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, ve = /([A-Z])/g;
    J.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return t = t.nodeType ? J.cache[t[J.expando]] : t[J.expando], !!t && !i(t);
        },
        data: function(t, n, r, i) {
            if (J.acceptData(t)) {
                var o, s, a = J.expando, l = "string" == typeof n, u = t.nodeType, h = u ? J.cache : t, c = u ? t[a] : t[a] && a;
                if (c && h[c] && (i || h[c].data) || !l || r !== e) return c || (u ? t[a] = c = J.deletedIds.pop() || J.guid++ : c = a), 
                h[c] || (h[c] = {}, u || (h[c].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (i ? h[c] = J.extend(h[c], n) : h[c].data = J.extend(h[c].data, n)), 
                o = h[c], i || (o.data || (o.data = {}), o = o.data), r !== e && (o[J.camelCase(n)] = r), 
                l ? (s = o[n], null == s && (s = o[J.camelCase(n)])) : s = o, s;
            }
        },
        removeData: function(t, e, n) {
            if (J.acceptData(t)) {
                var r, o, s, a = t.nodeType, l = a ? J.cache : t, u = a ? t[J.expando] : J.expando;
                if (l[u]) {
                    if (e && (r = n ? l[u] : l[u].data)) {
                        J.isArray(e) || (e in r ? e = [ e ] : (e = J.camelCase(e), e = e in r ? [ e ] : e.split(" ")));
                        for (o = 0, s = e.length; s > o; o++) delete r[e[o]];
                        if (!(n ? i : J.isEmptyObject)(r)) return;
                    }
                    (n || (delete l[u].data, i(l[u]))) && (a ? J.cleanData([ t ], !0) : J.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null);
                }
            }
        },
        _data: function(t, e, n) {
            return J.data(t, e, n, !0);
        },
        acceptData: function(t) {
            var e = t.nodeName && J.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e;
        }
    }), J.fn.extend({
        data: function(t, n) {
            var i, o, s, a, l, u = this[0], h = 0, c = null;
            if (t === e) {
                if (this.length && (c = J.data(u), 1 === u.nodeType && !J._data(u, "parsedAttrs"))) {
                    for (s = u.attributes, l = s.length; l > h; h++) a = s[h].name, a.indexOf("data-") || (a = J.camelCase(a.substring(5)), 
                    r(u, a, c[a]));
                    J._data(u, "parsedAttrs", !0);
                }
                return c;
            }
            return "object" == typeof t ? this.each(function() {
                J.data(this, t);
            }) : (i = t.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", J.access(this, function(n) {
                return n === e ? (c = this.triggerHandler("getData" + o, [ i[0] ]), c === e && u && (c = J.data(u, t), 
                c = r(u, t, c)), c === e && i[1] ? this.data(i[0]) : c) : (i[1] = n, this.each(function() {
                    var e = J(this);
                    e.triggerHandler("setData" + o, i), J.data(this, t, n), e.triggerHandler("changeData" + o, i);
                }), void 0);
            }, null, n, arguments.length > 1, null, !1));
        },
        removeData: function(t) {
            return this.each(function() {
                J.removeData(this, t);
            });
        }
    }), J.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = J._data(t, e), n && (!r || J.isArray(n) ? r = J._data(t, e, J.makeArray(n)) : r.push(n)), 
            r || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = J.queue(t, e), r = n.length, i = n.shift(), o = J._queueHooks(t, e), s = function() {
                J.dequeue(t, e);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), 
            delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return J._data(t, n) || J._data(t, n, {
                empty: J.Callbacks("once memory").add(function() {
                    J.removeData(t, e + "queue", !0), J.removeData(t, n, !0);
                })
            });
        }
    }), J.fn.extend({
        queue: function(t, n) {
            var r = 2;
            return "string" != typeof t && (n = t, t = "fx", r--), r > arguments.length ? J.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = J.queue(this, t, n);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && J.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t);
            });
        },
        delay: function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var r = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, n) {
            var r, i = 1, o = J.Deferred(), s = this, a = this.length, l = function() {
                --i || o.resolveWith(s, [ s ]);
            };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--; ) r = J._data(s[a], t + "queueHooks"), 
            r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var me, ye, xe, be = /[\t\r\n]/g, we = /\r/g, _e = /^(?:button|input)$/i, ke = /^(?:button|input|object|select|textarea)$/i, Ce = /^a(?:rea|)$/i, Te = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Se = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(t, e) {
            return J.access(this, J.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t);
            });
        },
        prop: function(t, e) {
            return J.access(this, J.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return t = J.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t];
                } catch (n) {}
            });
        },
        addClass: function(t) {
            var e, n, r, i, o, s, a;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t) for (e = t.split(ee), n = 0, r = this.length; r > n; n++) if (i = this[n], 
            1 === i.nodeType) if (i.className || 1 !== e.length) {
                for (o = " " + i.className + " ", s = 0, a = e.length; a > s; s++) 0 > o.indexOf(" " + e[s] + " ") && (o += e[s] + " ");
                i.className = J.trim(o);
            } else i.className = t;
            return this;
        },
        removeClass: function(t) {
            var n, r, i, o, s, a, l;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t || t === e) for (n = (t || "").split(ee), a = 0, l = this.length; l > a; a++) if (i = this[a], 
            1 === i.nodeType && i.className) {
                for (r = (" " + i.className + " ").replace(be, " "), o = 0, s = n.length; s > o; o++) for (;r.indexOf(" " + n[o] + " ") >= 0; ) r = r.replace(" " + n[o] + " ", " ");
                i.className = t ? J.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = typeof t, r = "boolean" == typeof e;
            return J.isFunction(t) ? this.each(function(n) {
                J(this).toggleClass(t.call(this, n, this.className, e), e);
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0, s = J(this), a = e, l = t.split(ee); i = l[o++]; ) a = r ? a : !s.hasClass(i), 
                s[a ? "addClass" : "removeClass"](i); else ("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), 
                this.className = this.className || t === !1 ? "" : J._data(this, "__className__") || "");
            });
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(be, " ").indexOf(e) >= 0) return !0;
            return !1;
        },
        val: function(t) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = J.isFunction(t), this.each(function(r) {
                    var o, s = J(this);
                    1 === this.nodeType && (o = i ? t.call(this, r, s.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(t) {
                        return null == t ? "" : t + "";
                    })), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o));
                });
                if (o) return n = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== e ? r : (r = o.value, 
                "string" == typeof r ? r.replace(we, "") : null == r ? "" : r);
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text;
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], 
                    !(!n.selected && l !== i || (J.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                        if (e = J(n).val(), o) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(t, e) {
                    var n = J.makeArray(e);
                    return J(t).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), n) >= 0;
                    }), n.length || (t.selectedIndex = -1), n;
                }
            }
        },
        attrFn: {},
        attr: function(t, n, r, i) {
            var o, s, a, l = t.nodeType;
            if (t && 3 !== l && 8 !== l && 2 !== l) return i && J.isFunction(J.fn[n]) ? J(t)[n](r) : t.getAttribute === void 0 ? J.prop(t, n, r) : (a = 1 !== l || !J.isXMLDoc(t), 
            a && (n = n.toLowerCase(), s = J.attrHooks[n] || (Te.test(n) ? ye : me)), r !== e ? null === r ? (J.removeAttr(t, n), 
            void 0) : s && "set" in s && a && (o = s.set(t, r, n)) !== e ? o : (t.setAttribute(n, r + ""), 
            r) : s && "get" in s && a && null !== (o = s.get(t, n)) ? o : (o = t.getAttribute(n), 
            null === o ? e : o));
        },
        removeAttr: function(t, e) {
            var n, r, i, o, s = 0;
            if (e && 1 === t.nodeType) for (r = e.split(ee); r.length > s; s++) i = r[s], i && (n = J.propFix[i] || i, 
            o = Te.test(i), o || J.attr(t, i, ""), t.removeAttribute(Se ? i : n), o && n in t && (t[n] = !1));
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (_e.test(t.nodeName) && t.parentNode) J.error("type property can't be changed"); else if (!J.support.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            },
            value: {
                get: function(t, e) {
                    return me && J.nodeName(t, "button") ? me.get(t, e) : e in t ? t.value : null;
                },
                set: function(t, e, n) {
                    return me && J.nodeName(t, "button") ? me.set(t, e, n) : (t.value = e, void 0);
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, n, r) {
            var i, o, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !J.isXMLDoc(t), s && (n = J.propFix[n] || n, 
            o = J.propHooks[n]), r !== e ? o && "set" in o && (i = o.set(t, r, n)) !== e ? i : t[n] = r : o && "get" in o && null !== (i = o.get(t, n)) ? i : t[n];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : ke.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : e;
                }
            }
        }
    }), ye = {
        get: function(t, n) {
            var r, i = J.prop(t, n);
            return i === !0 || "boolean" != typeof i && (r = t.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : e;
        },
        set: function(t, e, n) {
            var r;
            return e === !1 ? J.removeAttr(t, n) : (r = J.propFix[n] || n, r in t && (t[r] = !0), 
            t.setAttribute(n, n.toLowerCase())), n;
        }
    }, Se || (xe = {
        name: !0,
        id: !0,
        coords: !0
    }, me = J.valHooks.button = {
        get: function(t, n) {
            var r;
            return r = t.getAttributeNode(n), r && (xe[n] ? "" !== r.value : r.specified) ? r.value : e;
        },
        set: function(t, e, n) {
            var r = t.getAttributeNode(n);
            return r || (r = R.createAttribute(n), t.setAttributeNode(r)), r.value = e + "";
        }
    }, J.each([ "width", "height" ], function(t, e) {
        J.attrHooks[e] = J.extend(J.attrHooks[e], {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
            }
        });
    }), J.attrHooks.contenteditable = {
        get: me.get,
        set: function(t, e, n) {
            "" === e && (e = "false"), me.set(t, e, n);
        }
    }), J.support.hrefNormalized || J.each([ "href", "src", "width", "height" ], function(t, n) {
        J.attrHooks[n] = J.extend(J.attrHooks[n], {
            get: function(t) {
                var r = t.getAttribute(n, 2);
                return null === r ? e : r;
            }
        });
    }), J.support.style || (J.attrHooks.style = {
        get: function(t) {
            return t.style.cssText.toLowerCase() || e;
        },
        set: function(t, e) {
            return t.style.cssText = e + "";
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each([ "radio", "checkbox" ], function() {
        J.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
            }
        };
    }), J.each([ "radio", "checkbox" ], function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0;
            }
        });
    });
    var Ne = /^(?:textarea|input|select)$/i, Ee = /^([^\.]*|)(?:\.(.+)|)$/, Ae = /(?:^|\s)hover(\.\S+|)\b/, Be = /^key/, Le = /^(?:mouse|contextmenu)|click/, Me = /^(?:focusinfocus|focusoutblur)$/, Fe = function(t) {
        return J.event.special.hover ? t : t.replace(Ae, "mouseenter$1 mouseleave$1");
    };
    J.event = {
        add: function(t, n, r, i, o) {
            var s, a, l, u, h, c, f, p, d, g, v;
            if (3 !== t.nodeType && 8 !== t.nodeType && n && r && (s = J._data(t))) {
                for (r.handler && (d = r, r = d.handler, o = d.selector), r.guid || (r.guid = J.guid++), 
                l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(t) {
                    return J === void 0 || t && J.event.triggered === t.type ? e : J.event.dispatch.apply(a.elem, arguments);
                }, a.elem = t), n = J.trim(Fe(n)).split(" "), u = 0; n.length > u; u++) h = Ee.exec(n[u]) || [], 
                c = h[1], f = (h[2] || "").split(".").sort(), v = J.event.special[c] || {}, c = (o ? v.delegateType : v.bindType) || c, 
                v = J.event.special[c] || {}, p = J.extend({
                    type: c,
                    origType: h[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, d), g = l[c], g || (g = l[c] = [], g.delegateCount = 0, v.setup && v.setup.call(t, i, f, a) !== !1 || (t.addEventListener ? t.addEventListener(c, a, !1) : t.attachEvent && t.attachEvent("on" + c, a))), 
                v.add && (v.add.call(t, p), p.handler.guid || (p.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), 
                J.event.global[c] = !0;
                t = null;
            }
        },
        global: {},
        remove: function(t, e, n, r, i) {
            var o, s, a, l, u, h, c, f, p, d, g, v = J.hasData(t) && J._data(t);
            if (v && (f = v.events)) {
                for (e = J.trim(Fe(e || "")).split(" "), o = 0; e.length > o; o++) if (s = Ee.exec(e[o]) || [], 
                a = l = s[1], u = s[2], a) {
                    for (p = J.event.special[a] || {}, a = (r ? p.delegateType : p.bindType) || a, d = f[a] || [], 
                    h = d.length, u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    c = 0; d.length > c; c++) g = d[c], !(!i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (d.splice(c--, 1), 
                    g.selector && d.delegateCount--, !p.remove || !p.remove.call(t, g)));
                    0 === d.length && h !== d.length && ((!p.teardown || p.teardown.call(t, u, v.handle) === !1) && J.removeEvent(t, a, v.handle), 
                    delete f[a]);
                } else for (a in f) J.event.remove(t, a + e[o], n, r, !0);
                J.isEmptyObject(f) && (delete v.handle, J.removeData(t, "events", !0));
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, i, o) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var s, a, l, u, h, c, f, p, d, g, v = n.type || n, m = [];
                if (Me.test(v + J.event.triggered)) return;
                if (v.indexOf("!") >= 0 && (v = v.slice(0, -1), a = !0), v.indexOf(".") >= 0 && (m = v.split("."), 
                v = m.shift(), m.sort()), (!i || J.event.customEvent[v]) && !J.event.global[v]) return;
                if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(v, n) : new J.Event(v), 
                n.type = v, n.isTrigger = !0, n.exclusive = a, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                c = 0 > v.indexOf(":") ? "on" + v : "", !i) {
                    s = J.cache;
                    for (l in s) s[l].events && s[l].events[v] && J.event.trigger(n, r, s[l].handle.elem, !0);
                    return;
                }
                if (n.result = e, n.target || (n.target = i), r = null != r ? J.makeArray(r) : [], 
                r.unshift(n), f = J.event.special[v] || {}, f.trigger && f.trigger.apply(i, r) === !1) return;
                if (d = [ [ i, f.bindType || v ] ], !o && !f.noBubble && !J.isWindow(i)) {
                    for (g = f.delegateType || v, u = Me.test(g + v) ? i : i.parentNode, h = i; u; u = u.parentNode) d.push([ u, g ]), 
                    h = u;
                    h === (i.ownerDocument || R) && d.push([ h.defaultView || h.parentWindow || t, g ]);
                }
                for (l = 0; d.length > l && !n.isPropagationStopped(); l++) u = d[l][0], n.type = d[l][1], 
                p = (J._data(u, "events") || {})[n.type] && J._data(u, "handle"), p && p.apply(u, r), 
                p = c && u[c], p && J.acceptData(u) && p.apply && p.apply(u, r) === !1 && n.preventDefault();
                return n.type = v, !(o || n.isDefaultPrevented() || f._default && f._default.apply(i.ownerDocument, r) !== !1 || "click" === v && J.nodeName(i, "a") || !J.acceptData(i) || !c || !i[v] || ("focus" === v || "blur" === v) && 0 === n.target.offsetWidth || J.isWindow(i) || (h = i[c], 
                h && (i[c] = null), J.event.triggered = v, i[v](), J.event.triggered = e, !h || !(i[c] = h))), 
                n.result;
            }
        },
        dispatch: function(n) {
            n = J.event.fix(n || t.event);
            var r, i, o, s, a, l, u, h, c, f = (J._data(this, "events") || {})[n.type] || [], p = f.delegateCount, d = V.call(arguments), g = !n.exclusive && !n.namespace, v = J.event.special[n.type] || {}, m = [];
            if (d[0] = n, n.delegateTarget = this, !v.preDispatch || v.preDispatch.call(this, n) !== !1) {
                if (p && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
                    for (a = {}, u = [], r = 0; p > r; r++) h = f[r], c = h.selector, a[c] === e && (a[c] = h.needsContext ? J(c, this).index(o) >= 0 : J.find(c, this, null, [ o ]).length), 
                    a[c] && u.push(h);
                    u.length && m.push({
                        elem: o,
                        matches: u
                    });
                }
                for (f.length > p && m.push({
                    elem: this,
                    matches: f.slice(p)
                }), r = 0; m.length > r && !n.isPropagationStopped(); r++) for (l = m[r], n.currentTarget = l.elem, 
                i = 0; l.matches.length > i && !n.isImmediatePropagationStopped(); i++) h = l.matches[i], 
                (g || !n.namespace && !h.namespace || n.namespace_re && n.namespace_re.test(h.namespace)) && (n.data = h.data, 
                n.handleObj = h, s = ((J.event.special[h.origType] || {}).handle || h.handler).apply(l.elem, d), 
                s !== e && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                return v.postDispatch && v.postDispatch.call(this, n), n.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), 
                t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var r, i, o, s = n.button, a = n.fromElement;
                return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || R, 
                i = r.documentElement, o = r.body, t.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), 
                t.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), 
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), !t.which && s !== e && (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                t;
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, n, r = t, i = J.event.fixHooks[t.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (t = J.Event(r), e = o.length; e; ) n = o[--e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || R), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
            t.metaKey = !!t.metaKey, i.filter ? i.filter(t, r) : t;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(t, e, n) {
                    J.isWindow(this) && (this.onbeforeunload = n);
                },
                teardown: function(t, e) {
                    this.onbeforeunload === e && (this.onbeforeunload = null);
                }
            }
        },
        simulate: function(t, e, n, r) {
            var i = J.extend(new J.Event(), n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? J.event.trigger(i, null, e) : J.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, J.event.handle = J.event.dispatch, J.removeEvent = R.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
    } : function(t, e, n) {
        var r = "on" + e;
        t.detachEvent && (t[r] === void 0 && (t[r] = null), t.detachEvent(r, n));
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? s : o) : this.type = t, 
        e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), this[J.expando] = !0, 
        void 0) : new J.Event(t, e);
    }, J.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = s;
            var t = this.originalEvent;
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = s;
            var t = this.originalEvent;
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation();
        },
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return o.selector, (!i || i !== r && !J.contains(r, i)) && (t.type = o.origType, 
                n = o.handler.apply(this, arguments), t.type = e), n;
            }
        };
    }), J.support.submitBubbles || (J.event.special.submit = {
        setup: function() {
            return J.nodeName(this, "form") ? !1 : (J.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target, r = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : e;
                r && !J._data(r, "_submit_attached") && (J.event.add(r, "submit._submit", function(t) {
                    t._submit_bubble = !0;
                }), J._data(r, "_submit_attached", !0));
            }), void 0);
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && J.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function() {
            return J.nodeName(this, "form") ? !1 : (J.event.remove(this, "._submit"), void 0);
        }
    }), J.support.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
            }), J.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, t, !0);
            })), !1) : (J.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ne.test(e.nodeName) && !J._data(e, "_change_attached") && (J.event.add(e, "change._change", function(t) {
                    this.parentNode && !t.isSimulated && !t.isTrigger && J.event.simulate("change", this.parentNode, t, !0);
                }), J._data(e, "_change_attached", !0));
            }), void 0);
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return J.event.remove(this, "._change"), !Ne.test(this.nodeName);
        }
    }), J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0, r = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0);
        };
        J.event.special[e] = {
            setup: function() {
                0 === n++ && R.addEventListener(t, r, !0);
            },
            teardown: function() {
                0 === --n && R.removeEventListener(t, r, !0);
            }
        };
    }), J.fn.extend({
        on: function(t, n, r, i, s) {
            var a, l;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = e);
                for (l in t) this.on(l, n, r, t[l], s);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = e) : null == i && ("string" == typeof n ? (i = r, 
            r = e) : (i = r, r = n, n = e)), i === !1) i = o; else if (!i) return this;
            return 1 === s && (a = i, i = function(t) {
                return J().off(t), a.apply(this, arguments);
            }, i.guid = a.guid || (a.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, i, r, n);
            });
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1);
        },
        off: function(t, n, r) {
            var i, s;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, n, t[s]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = e), r === !1 && (r = o), 
            this.each(function() {
                J.event.remove(this, t, r, n);
            });
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        live: function(t, e, n) {
            return J(this.context).on(t, this.selector, e, n), this;
        },
        die: function(t, e) {
            return J(this.context).off(t, this.selector || "**", e), this;
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            return this[0] ? J.event.trigger(t, e, this[0], !0) : void 0;
        },
        toggle: function(t) {
            var e = arguments, n = t.guid || J.guid++, r = 0, i = function(n) {
                var i = (J._data(this, "lastToggle" + t.guid) || 0) % r;
                return J._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), e[i].apply(this, arguments) || !1;
            };
            for (i.guid = n; e.length > r; ) e[r++].guid = n;
            return this.click(i);
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, n) {
            return null == n && (n = t, t = null), arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        }, Be.test(e) && (J.event.fixHooks[e] = J.event.keyHooks), Le.test(e) && (J.event.fixHooks[e] = J.event.mouseHooks);
    }), function(t, e) {
        function n(t, e, n, r) {
            n = n || [], e = e || L;
            var i, o, s, a, l = e.nodeType;
            if (!t || "string" != typeof t) return n;
            if (1 !== l && 9 !== l) return [];
            if (s = w(e), !s && !r && (i = ne.exec(t))) if (a = i[1]) {
                if (9 === l) {
                    if (o = e.getElementById(a), !o || !o.parentNode) return n;
                    if (o.id === a) return n.push(o), n;
                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && _(e, o) && o.id === a) return n.push(o), 
                n;
            } else {
                if (i[2]) return D.apply(n, P.call(e.getElementsByTagName(t), 0)), n;
                if ((a = i[3]) && fe && e.getElementsByClassName) return D.apply(n, P.call(e.getElementsByClassName(a), 0)), 
                n;
            }
            return g(t.replace(Z, "$1"), e, n, r, s);
        }
        function r(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t;
            };
        }
        function i(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function o(t) {
            return O(function(e) {
                return e = +e, O(function(n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--; ) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function s(t, e, n) {
            if (t === e) return n;
            for (var r = t.nextSibling; r; ) {
                if (r === e) return -1;
                r = r.nextSibling;
            }
            return 1;
        }
        function a(t, e) {
            var r, i, o, s, a, l, u, h = q[A][t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], u = x.preFilter; a; ) {
                (!r || (i = K.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), 
                r = !1, (i = te.exec(a)) && (o.push(r = new B(i.shift())), a = a.slice(r.length), 
                r.type = i[0].replace(Z, " "));
                for (s in x.filter) (i = ae[s].exec(a)) && (!u[s] || (i = u[s](i))) && (o.push(r = new B(i.shift())), 
                a = a.slice(r.length), r.type = s, r.matches = i);
                if (!r) break;
            }
            return e ? a.length : a ? n.error(t) : q(t, l).slice(0);
        }
        function l(t, e, n) {
            var r = e.dir, i = n && "parentNode" === e.dir, o = j++;
            return e.first ? function(e, n, o) {
                for (;e = e[r]; ) if (i || 1 === e.nodeType) return t(e, n, o);
            } : function(e, n, s) {
                if (s) {
                    for (;e = e[r]; ) if ((i || 1 === e.nodeType) && t(e, n, s)) return e;
                } else for (var a, l = F + " " + o + " ", u = l + m; e = e[r]; ) if (i || 1 === e.nodeType) {
                    if ((a = e[A]) === u) return e.sizset;
                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                        if (e.sizset) return e;
                    } else {
                        if (e[A] = u, t(e, n, s)) return e.sizset = !0, e;
                        e.sizset = !1;
                    }
                }
            };
        }
        function u(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                return !0;
            } : t[0];
        }
        function h(t, e, n, r, i) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++) (o = t[a]) && (!n || n(o, r, i)) && (s.push(o), 
            u && e.push(a));
            return s;
        }
        function c(t, e, n, r, i, o) {
            return r && !r[A] && (r = c(r)), i && !i[A] && (i = c(i, o)), O(function(o, s, a, l) {
                var u, c, f, p = [], g = [], v = s.length, m = o || d(e || "*", a.nodeType ? [ a ] : a, []), y = !t || !o && e ? m : h(m, p, t, a, l), x = n ? i || (o ? t : v || r) ? [] : s : y;
                if (n && n(y, x, a, l), r) for (u = h(x, g), r(u, [], a, l), c = u.length; c--; ) (f = u[c]) && (x[g[c]] = !(y[g[c]] = f));
                if (o) {
                    if (i || t) {
                        if (i) {
                            for (u = [], c = x.length; c--; ) (f = x[c]) && u.push(y[c] = f);
                            i(null, x = [], u, l);
                        }
                        for (c = x.length; c--; ) (f = x[c]) && (u = i ? I.call(o, f) : p[c]) > -1 && (o[u] = !(s[u] = f));
                    }
                } else x = h(x === s ? x.splice(v, x.length) : x), i ? i(null, s, x, l) : D.apply(s, x);
            });
        }
        function f(t) {
            for (var e, n, r, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, h = l(function(t) {
                return t === e;
            }, s, !0), p = l(function(t) {
                return I.call(e, t) > -1;
            }, s, !0), d = [ function(t, n, r) {
                return !o && (r || n !== S) || ((e = n).nodeType ? h(t, n, r) : p(t, n, r));
            } ]; i > a; a++) if (n = x.relative[t[a].type]) d = [ l(u(d), n) ]; else {
                if (n = x.filter[t[a].type].apply(null, t[a].matches), n[A]) {
                    for (r = ++a; i > r && !x.relative[t[r].type]; r++) ;
                    return c(a > 1 && u(d), a > 1 && t.slice(0, a - 1).join("").replace(Z, "$1"), n, r > a && f(t.slice(a, r)), i > r && f(t = t.slice(r)), i > r && t.join(""));
                }
                d.push(n);
            }
            return u(d);
        }
        function p(t, e) {
            var r = e.length > 0, i = t.length > 0, o = function(s, a, l, u, c) {
                var f, p, d, g = [], v = 0, y = "0", b = s && [], w = null != c, _ = S, k = s || i && x.find.TAG("*", c && a.parentNode || a), C = F += null == _ ? 1 : Math.E;
                for (w && (S = a !== L && a, m = o.el); null != (f = k[y]); y++) {
                    if (i && f) {
                        for (p = 0; d = t[p]; p++) if (d(f, a, l)) {
                            u.push(f);
                            break;
                        }
                        w && (F = C, m = ++o.el);
                    }
                    r && ((f = !d && f) && v--, s && b.push(f));
                }
                if (v += y, r && y !== v) {
                    for (p = 0; d = e[p]; p++) d(b, g, a, l);
                    if (s) {
                        if (v > 0) for (;y--; ) !b[y] && !g[y] && (g[y] = H.call(u));
                        g = h(g);
                    }
                    D.apply(u, g), w && !s && g.length > 0 && v + e.length > 1 && n.uniqueSort(u);
                }
                return w && (F = C, S = _), b;
            };
            return o.el = 0, r ? O(o) : o;
        }
        function d(t, e, r) {
            for (var i = 0, o = e.length; o > i; i++) n(t, e[i], r);
            return r;
        }
        function g(t, e, n, r, i) {
            var o, s, l, u, h, c = a(t);
            if (c.length, !r && 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === e.nodeType && !i && x.relative[s[1].type]) {
                    if (e = x.find.ID(l.matches[0].replace(se, ""), e, i)[0], !e) return n;
                    t = t.slice(s.shift().length);
                }
                for (o = ae.POS.test(t) ? -1 : s.length - 1; o >= 0 && (l = s[o], !x.relative[u = l.type]); o--) if ((h = x.find[u]) && (r = h(l.matches[0].replace(se, ""), re.test(s[0].type) && e.parentNode || e, i))) {
                    if (s.splice(o, 1), t = r.length && s.join(""), !t) return D.apply(n, P.call(r, 0)), 
                    n;
                    break;
                }
            }
            return k(t, c)(r, e, i, n, re.test(t)), n;
        }
        function v() {}
        var m, y, x, b, w, _, k, C, T, S, N = !0, E = "undefined", A = ("sizcache" + Math.random()).replace(".", ""), B = String, L = t.document, M = L.documentElement, F = 0, j = 0, H = [].pop, D = [].push, P = [].slice, I = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
            return -1;
        }, O = function(t, e) {
            return t[A] = null == e || e, t;
        }, z = function() {
            var t = {}, e = [];
            return O(function(n, r) {
                return e.push(n) > x.cacheLength && delete t[e.shift()], t[n + " "] = r;
            }, t);
        }, R = z(), q = z(), W = z(), $ = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", Y = X.replace("w", "w#"), V = "([*^$|!~]?=)", G = "\\[" + $ + "*(" + X + ")" + $ + "*(?:" + V + $ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Y + ")|)|)" + $ + "*\\]", U = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)", Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", Z = RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), K = RegExp("^" + $ + "*," + $ + "*"), te = RegExp("^" + $ + "*([\\x20\\t\\r\\n\\f>+~])" + $ + "*"), ee = RegExp(U), ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, re = /[\x20\t\r\n\f]*[+~]/, ie = /h\d/i, oe = /input|select|textarea|button/i, se = /\\(?!\\)/g, ae = {
            ID: RegExp("^#(" + X + ")"),
            CLASS: RegExp("^\\.(" + X + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
            TAG: RegExp("^(" + X.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + G),
            PSEUDO: RegExp("^" + U),
            POS: RegExp(Q, "i"),
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
            needsContext: RegExp("^" + $ + "*[>+~]|" + Q, "i")
        }, le = function(t) {
            var e = L.createElement("div");
            try {
                return t(e);
            } catch (n) {
                return !1;
            } finally {
                e = null;
            }
        }, ue = le(function(t) {
            return t.appendChild(L.createComment("")), !t.getElementsByTagName("*").length;
        }), he = le(function(t) {
            return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== E && "#" === t.firstChild.getAttribute("href");
        }), ce = le(function(t) {
            t.innerHTML = "<select></select>";
            var e = typeof t.lastChild.getAttribute("multiple");
            return "boolean" !== e && "string" !== e;
        }), fe = le(function(t) {
            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 
            2 === t.getElementsByClassName("e").length) : !1;
        }), pe = le(function(t) {
            t.id = A + 0, t.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", 
            M.insertBefore(t, M.firstChild);
            var e = L.getElementsByName && L.getElementsByName(A).length === 2 + L.getElementsByName(A + 0).length;
            return y = !L.getElementById(A), M.removeChild(t), e;
        });
        try {
            P.call(M.childNodes, 0)[0].nodeType;
        } catch (de) {
            P = function(t) {
                for (var e, n = []; e = this[t]; t++) n.push(e);
                return n;
            };
        }
        n.matches = function(t, e) {
            return n(t, null, null, e);
        }, n.matchesSelector = function(t, e) {
            return n(e, null, null, [ t ]).length > 0;
        }, b = n.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += b(t);
                } else if (3 === i || 4 === i) return t.nodeValue;
            } else for (;e = t[r]; r++) n += b(e);
            return n;
        }, w = n.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1;
        }, _ = n.contains = M.contains ? function(t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
            return t === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r));
        } : M.compareDocumentPosition ? function(t, e) {
            return e && !!(16 & t.compareDocumentPosition(e));
        } : function(t, e) {
            for (;e = e.parentNode; ) if (e === t) return !0;
            return !1;
        }, n.attr = function(t, e) {
            var n, r = w(t);
            return r || (e = e.toLowerCase()), (n = x.attrHandle[e]) ? n(t) : r || ce ? t.getAttribute(e) : (n = t.getAttributeNode(e), 
            n ? "boolean" == typeof t[e] ? t[e] ? e : null : n.specified ? n.value : null : null);
        }, x = n.selectors = {
            cacheLength: 50,
            createPseudo: O,
            match: ae,
            attrHandle: he ? {} : {
                href: function(t) {
                    return t.getAttribute("href", 2);
                },
                type: function(t) {
                    return t.getAttribute("type");
                }
            },
            find: {
                ID: y ? function(t, e, n) {
                    if (typeof e.getElementById !== E && !n) {
                        var r = e.getElementById(t);
                        return r && r.parentNode ? [ r ] : [];
                    }
                } : function(t, n, r) {
                    if (typeof n.getElementById !== E && !r) {
                        var i = n.getElementById(t);
                        return i ? i.id === t || typeof i.getAttributeNode !== E && i.getAttributeNode("id").value === t ? [ i ] : e : [];
                    }
                },
                TAG: ue ? function(t, e) {
                    return typeof e.getElementsByTagName !== E ? e.getElementsByTagName(t) : void 0;
                } : function(t, e) {
                    var n = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                        return i;
                    }
                    return n;
                },
                NAME: pe && function(t, e) {
                    return typeof e.getElementsByName !== E ? e.getElementsByName(name) : void 0;
                },
                CLASS: fe && function(t, e, n) {
                    return typeof e.getElementsByClassName === E || n ? void 0 : e.getElementsByClassName(t);
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(se, ""), t[3] = (t[4] || t[5] || "").replace(se, ""), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || n.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), 
                    t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && n.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var e, n;
                    return ae.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (ee.test(e) && (n = a(e, !0)) && (n = e.indexOf(")", e.length - n) - e.length) && (e = e.slice(0, n), 
                    t[0] = t[0].slice(0, n)), t[2] = e), t.slice(0, 3));
                }
            },
            filter: {
                ID: y ? function(t) {
                    return t = t.replace(se, ""), function(e) {
                        return e.getAttribute("id") === t;
                    };
                } : function(t) {
                    return t = t.replace(se, ""), function(e) {
                        var n = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
                        return n && n.value === t;
                    };
                },
                TAG: function(t) {
                    return "*" === t ? function() {
                        return !0;
                    } : (t = t.replace(se, "").toLowerCase(), function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    });
                },
                CLASS: function(t) {
                    var e = R[A][t + " "];
                    return e || (e = RegExp("(^|" + $ + ")" + t + "(" + $ + "|$)")) && R(t, function(t) {
                        return e.test(t.className || typeof t.getAttribute !== E && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, e, r) {
                    return function(i) {
                        var o = n.attr(i, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === r : "!=" === e ? o !== r : "^=" === e ? r && 0 === o.indexOf(r) : "*=" === e ? r && o.indexOf(r) > -1 : "$=" === e ? r && o.substr(o.length - r.length) === r : "~=" === e ? (" " + o + " ").indexOf(r) > -1 : "|=" === e ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0;
                    };
                },
                CHILD: function(t, e, n, r) {
                    return "nth" === t ? function(t) {
                        var e, i, o = t.parentNode;
                        if (1 === n && 0 === r) return !0;
                        if (o) for (i = 0, e = o.firstChild; e && (1 !== e.nodeType || (i++, t !== e)); e = e.nextSibling) ;
                        return i -= r, i === n || 0 === i % n && i / n >= 0;
                    } : function(e) {
                        var n = e;
                        switch (t) {
                          case "only":
                          case "first":
                            for (;n = n.previousSibling; ) if (1 === n.nodeType) return !1;
                            if ("first" === t) return !0;
                            n = e;

                          case "last":
                            for (;n = n.nextSibling; ) if (1 === n.nodeType) return !1;
                            return !0;
                        }
                    };
                },
                PSEUDO: function(t, e) {
                    var r, i = x.pseudos[t] || x.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                    return i[A] ? i(e) : i.length > 1 ? (r = [ t, t, "", e ], x.setFilters.hasOwnProperty(t.toLowerCase()) ? O(function(t, n) {
                        for (var r, o = i(t, e), s = o.length; s--; ) r = I.call(t, o[s]), t[r] = !(n[r] = o[s]);
                    }) : function(t) {
                        return i(t, 0, r);
                    }) : i;
                }
            },
            pseudos: {
                not: O(function(t) {
                    var e = [], n = [], r = k(t.replace(Z, "$1"));
                    return r[A] ? O(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop();
                    };
                }),
                has: O(function(t) {
                    return function(e) {
                        return n(t, e).length > 0;
                    };
                }),
                contains: O(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || b(e)).indexOf(t) > -1;
                    };
                }),
                enabled: function(t) {
                    return t.disabled === !1;
                },
                disabled: function(t) {
                    return t.disabled === !0;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                },
                parent: function(t) {
                    return !x.pseudos.empty(t);
                },
                empty: function(t) {
                    var e;
                    for (t = t.firstChild; t; ) {
                        if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                        t = t.nextSibling;
                    }
                    return !0;
                },
                header: function(t) {
                    return ie.test(t.nodeName);
                },
                text: function(t) {
                    var e, n;
                    return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (n = t.getAttribute("type")) || n.toLowerCase() === e);
                },
                radio: r("radio"),
                checkbox: r("checkbox"),
                file: r("file"),
                password: r("password"),
                image: r("image"),
                submit: i("submit"),
                reset: i("reset"),
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                input: function(t) {
                    return oe.test(t.nodeName);
                },
                focus: function(t) {
                    var e = t.ownerDocument;
                    return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                active: function(t) {
                    return t === t.ownerDocument.activeElement;
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: o(function(t, e, n) {
                    return [ 0 > n ? n + e : n ];
                }),
                even: o(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: o(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t;
                }),
                lt: o(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0; ) t.push(r);
                    return t;
                }),
                gt: o(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; e > ++r; ) t.push(r);
                    return t;
                })
            }
        }, C = M.compareDocumentPosition ? function(t, e) {
            return t === e ? (T = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1;
        } : function(t, e) {
            if (t === e) return T = !0, 0;
            if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
            var n, r, i = [], o = [], a = t.parentNode, l = e.parentNode, u = a;
            if (a === l) return s(t, e);
            if (!a) return -1;
            if (!l) return 1;
            for (;u; ) i.unshift(u), u = u.parentNode;
            for (u = l; u; ) o.unshift(u), u = u.parentNode;
            n = i.length, r = o.length;
            for (var h = 0; n > h && r > h; h++) if (i[h] !== o[h]) return s(i[h], o[h]);
            return h === n ? s(t, o[h], -1) : s(i[h], e, 1);
        }, [ 0, 0 ].sort(C), N = !T, n.uniqueSort = function(t) {
            var e, n = [], r = 1, i = 0;
            if (T = N, t.sort(C), T) {
                for (;e = t[r]; r++) e === t[r - 1] && (i = n.push(r));
                for (;i--; ) t.splice(n[i], 1);
            }
            return t;
        }, n.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t);
        }, k = n.compile = function(t, e) {
            var n, r = [], i = [], o = W[A][t + " "];
            if (!o) {
                for (e || (e = a(t)), n = e.length; n--; ) o = f(e[n]), o[A] ? r.push(o) : i.push(o);
                o = W(t, p(i, r));
            }
            return o;
        }, L.querySelectorAll && function() {
            var t, e = g, r = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [ ":focus" ], s = [ ":active" ], l = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector;
            le(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || o.push("\\[" + $ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                t.querySelectorAll(":checked").length || o.push(":checked");
            }), le(function(t) {
                t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && o.push("[*^$]=" + $ + "*(?:\"\"|'')"), 
                t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
            }), o = RegExp(o.join("|")), g = function(t, n, i, s, l) {
                if (!s && !l && !o.test(t)) {
                    var u, h, c = !0, f = A, p = n, d = 9 === n.nodeType && t;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (u = a(t), (c = n.getAttribute("id")) ? f = c.replace(r, "\\$&") : n.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", h = u.length; h--; ) u[h] = f + u[h].join("");
                        p = re.test(t) && n.parentNode || n, d = u.join(",");
                    }
                    if (d) try {
                        return D.apply(i, P.call(p.querySelectorAll(d), 0)), i;
                    } catch (g) {} finally {
                        c || n.removeAttribute("id");
                    }
                }
                return e(t, n, i, s, l);
            }, l && (le(function(e) {
                t = l.call(e, "div");
                try {
                    l.call(e, "[test!='']:sizzle"), s.push("!=", U);
                } catch (n) {}
            }), s = RegExp(s.join("|")), n.matchesSelector = function(e, r) {
                if (r = r.replace(i, "='$1']"), !w(e) && !s.test(r) && !o.test(r)) try {
                    var a = l.call(e, r);
                    if (a || t || e.document && 11 !== e.document.nodeType) return a;
                } catch (u) {}
                return n(r, null, null, [ e ]).length > 0;
            });
        }(), x.pseudos.nth = x.pseudos.eq, x.filters = v.prototype = x.pseudos, x.setFilters = new v(), 
        n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, 
        J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains;
    }(t);
    var je = /Until$/, He = /^(?:parents|prev(?:Until|All))/, De = /^.[^:#\[\.,]*$/, Pe = J.expr.match.needsContext, Ie = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.fn.extend({
        find: function(t) {
            var e, n, r, i, o, s, a = this;
            if ("string" != typeof t) return J(t).filter(function() {
                for (e = 0, n = a.length; n > e; e++) if (J.contains(a[e], this)) return !0;
            });
            for (s = this.pushStack("", "find", t), e = 0, n = this.length; n > e; e++) if (r = s.length, 
            J.find(t, this[e], s), e > 0) for (i = r; s.length > i; i++) for (o = 0; r > o; o++) if (s[o] === s[i]) {
                s.splice(i--, 1);
                break;
            }
            return s;
        },
        has: function(t) {
            var e, n = J(t, this), r = n.length;
            return this.filter(function() {
                for (e = 0; r > e; e++) if (J.contains(this, n[e])) return !0;
            });
        },
        not: function(t) {
            return this.pushStack(u(this, t, !1), "not", t);
        },
        filter: function(t) {
            return this.pushStack(u(this, t, !0), "filter", t);
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? Pe.test(t) ? J(t, this.context).index(this[0]) >= 0 : J.filter(t, this).length > 0 : this.filter(t).length > 0);
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = Pe.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== e && 11 !== n.nodeType; ) {
                if (s ? s.index(n) > -1 : J.find.matchesSelector(n, t)) {
                    o.push(n);
                    break;
                }
                n = n.parentNode;
            }
            return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", t);
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.inArray(this[0], J(t)) : J.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function(t, e) {
            var n = "string" == typeof t ? J(t, e) : J.makeArray(t && t.nodeType ? [ t ] : t), r = J.merge(this.get(), n);
            return this.pushStack(a(n[0]) || a(r[0]) ? r : J.unique(r));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), J.fn.andSelf = J.fn.addBack, J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return J.dir(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return J.dir(t, "parentNode", n);
        },
        next: function(t) {
            return l(t, "nextSibling");
        },
        prev: function(t) {
            return l(t, "previousSibling");
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling");
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return J.dir(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return J.dir(t, "previousSibling", n);
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return J.sibling(t.firstChild);
        },
        contents: function(t) {
            return J.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : J.merge([], t.childNodes);
        }
    }, function(t, e) {
        J.fn[t] = function(n, r) {
            var i = J.map(this, e, n);
            return je.test(t) || (r = n), r && "string" == typeof r && (i = J.filter(r, i)), 
            i = this.length > 1 && !Ie[t] ? J.unique(i) : i, this.length > 1 && He.test(t) && (i = i.reverse()), 
            this.pushStack(i, t, V.call(arguments).join(","));
        };
    }), J.extend({
        filter: function(t, e, n) {
            return n && (t = ":not(" + t + ")"), 1 === e.length ? J.find.matchesSelector(e[0], t) ? [ e[0] ] : [] : J.find.matches(t, e);
        },
        dir: function(t, n, r) {
            for (var i = [], o = t[n]; o && 9 !== o.nodeType && (r === e || 1 !== o.nodeType || !J(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ze = / jQuery\d+="(?:null|\d+)"/g, Re = /^\s+/, qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, We = /<([\w:]+)/, $e = /<tbody/i, Xe = /<|&#?\w+;/, Ye = /<(?:script|style|link)/i, Ve = /<(?:script|object|embed|option|style)/i, Ge = RegExp("<(?:" + Oe + ")[\\s/>]", "i"), Ue = /^(?:checkbox|radio)$/, Qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Ze = /\/(java|ecma)script/i, Je = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Ke = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, tn = h(R), en = tn.appendChild(R.createElement("div"));
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, 
    Ke.th = Ke.td, J.support.htmlSerialize || (Ke._default = [ 1, "X<div>", "</div>" ]), 
    J.fn.extend({
        text: function(t) {
            return J.access(this, function(t) {
                return t === e ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(t));
            }, null, t, arguments.length);
        },
        wrapAll: function(t) {
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = J(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                    return t;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(t) {
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = J(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(n) {
                J(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild);
            });
        },
        before: function() {
            if (!a(this[0])) return this.domManip(arguments, !1, function(t) {
                this.parentNode.insertBefore(t, this);
            });
            if (arguments.length) {
                var t = J.clean(arguments);
                return this.pushStack(J.merge(t, this), "before", this.selector);
            }
        },
        after: function() {
            if (!a(this[0])) return this.domManip(arguments, !1, function(t) {
                this.parentNode.insertBefore(t, this.nextSibling);
            });
            if (arguments.length) {
                var t = J.clean(arguments);
                return this.pushStack(J.merge(this, t), "after", this.selector);
            }
        },
        remove: function(t, e) {
            for (var n, r = 0; null != (n = this[r]); r++) (!t || J.filter(t, [ n ]).length) && (!e && 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), 
            J.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) for (1 === t.nodeType && J.cleanData(t.getElementsByTagName("*")); t.firstChild; ) t.removeChild(t.firstChild);
            return this;
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e);
            });
        },
        html: function(t) {
            return J.access(this, function(t) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(ze, "") : e;
                if (!("string" != typeof t || Ye.test(t) || !J.support.htmlSerialize && Ge.test(t) || !J.support.leadingWhitespace && Re.test(t) || Ke[(We.exec(t) || [ "", "" ])[1].toLowerCase()])) {
                    t = t.replace(qe, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), 
                        n.innerHTML = t);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function(t) {
            return a(this[0]) ? this.length ? this.pushStack(J(J.isFunction(t) ? t() : t), "replaceWith", t) : this : J.isFunction(t) ? this.each(function(e) {
                var n = J(this), r = n.html();
                n.replaceWith(t.call(this, e, r));
            }) : ("string" != typeof t && (t = J(t).detach()), this.each(function() {
                var e = this.nextSibling, n = this.parentNode;
                J(this).remove(), e ? J(e).before(t) : J(n).append(t);
            }));
        },
        detach: function(t) {
            return this.remove(t, !0);
        },
        domManip: function(t, n, r) {
            t = [].concat.apply([], t);
            var i, o, s, a, l = 0, u = t[0], h = [], f = this.length;
            if (!J.support.checkClone && f > 1 && "string" == typeof u && Qe.test(u)) return this.each(function() {
                J(this).domManip(t, n, r);
            });
            if (J.isFunction(u)) return this.each(function(i) {
                var o = J(this);
                t[0] = u.call(this, i, n ? o.html() : e), o.domManip(t, n, r);
            });
            if (this[0]) {
                if (i = J.buildFragment(t, this, h), s = i.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), 
                o) for (n = n && J.nodeName(o, "tr"), a = i.cacheable || f - 1; f > l; l++) r.call(n && J.nodeName(this[l], "table") ? c(this[l], "tbody") : this[l], l === a ? s : J.clone(s, !0, !0));
                s = o = null, h.length && J.each(h, function(t, e) {
                    e.src ? J.ajax ? J.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : J.error("no ajax") : J.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Je, "")), 
                    e.parentNode && e.parentNode.removeChild(e);
                });
            }
            return this;
        }
    }), J.buildFragment = function(t, n, r) {
        var i, o, s, a = t[0];
        return n = n || R, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === t.length && "string" == typeof a && 512 > a.length && n === R && "<" === a.charAt(0) && !Ve.test(a) && (J.support.checkClone || !Qe.test(a)) && (J.support.html5Clone || !Ge.test(a)) && (o = !0, 
        i = J.fragments[a], s = i !== e), i || (i = n.createDocumentFragment(), J.clean(t, n, i, r), 
        o && (J.fragments[a] = s && i)), {
            fragment: i,
            cacheable: o
        };
    }, J.fragments = {}, J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(n) {
            var r, i = 0, o = [], s = J(n), a = s.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[e](this[0]), 
            this;
            for (;a > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), J(s[i])[e](r), o = o.concat(r);
            return this.pushStack(o, t, s.selector);
        };
    }), J.extend({
        clone: function(t, e, n) {
            var r, i, o, s;
            if (J.support.html5Clone || J.isXMLDoc(t) || !Ge.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (en.innerHTML = t.outerHTML, 
            en.removeChild(s = en.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t))) for (p(t, s), 
            r = d(t), i = d(s), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
            if (e && (f(t, s), n)) for (r = d(t), i = d(s), o = 0; r[o]; ++o) f(r[o], i[o]);
            return r = i = null, s;
        },
        clean: function(t, e, n, r) {
            var i, o, s, a, l, u, c, f, p, d, v, m = e === R && tn, y = [];
            for (e && void 0 !== e.createDocumentFragment || (e = R), i = 0; null != (s = t[i]); i++) if ("number" == typeof s && (s += ""), 
            s) {
                if ("string" == typeof s) if (Xe.test(s)) {
                    for (m = m || h(e), c = e.createElement("div"), m.appendChild(c), s = s.replace(qe, "<$1></$2>"), 
                    a = (We.exec(s) || [ "", "" ])[1].toLowerCase(), l = Ke[a] || Ke._default, u = l[0], 
                    c.innerHTML = l[1] + s + l[2]; u--; ) c = c.lastChild;
                    if (!J.support.tbody) for (f = $e.test(s), p = "table" !== a || f ? "<table>" !== l[1] || f ? [] : c.childNodes : c.firstChild && c.firstChild.childNodes, 
                    o = p.length - 1; o >= 0; --o) J.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                    !J.support.leadingWhitespace && Re.test(s) && c.insertBefore(e.createTextNode(Re.exec(s)[0]), c.firstChild), 
                    s = c.childNodes, c.parentNode.removeChild(c);
                } else s = e.createTextNode(s);
                s.nodeType ? y.push(s) : J.merge(y, s);
            }
            if (c && (s = c = m = null), !J.support.appendChecked) for (i = 0; null != (s = y[i]); i++) J.nodeName(s, "input") ? g(s) : s.getElementsByTagName !== void 0 && J.grep(s.getElementsByTagName("input"), g);
            if (n) for (d = function(t) {
                return !t.type || Ze.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : n.appendChild(t) : void 0;
            }, i = 0; null != (s = y[i]); i++) J.nodeName(s, "script") && d(s) || (n.appendChild(s), 
            s.getElementsByTagName !== void 0 && (v = J.grep(J.merge([], s.getElementsByTagName("script")), d), 
            y.splice.apply(y, [ i + 1, 0 ].concat(v)), i += v.length));
            return y;
        },
        cleanData: function(t, e) {
            for (var n, r, i, o, s = 0, a = J.expando, l = J.cache, u = J.support.deleteExpando, h = J.event.special; null != (i = t[s]); s++) if ((e || J.acceptData(i)) && (r = i[a], 
            n = r && l[r])) {
                if (n.events) for (o in n.events) h[o] ? J.event.remove(i, o) : J.removeEvent(i, o, n.handle);
                l[r] && (delete l[r], u ? delete i[a] : i.removeAttribute ? i.removeAttribute(a) : i[a] = null, 
                J.deletedIds.push(r));
            }
        }
    }), function() {
        var t, e;
        J.uaMatch = function(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            };
        }, t = J.uaMatch(W.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t.version), 
        e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), J.browser = e, J.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n);
            }
            J.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, 
            t.sub = this.sub, t.fn.init = function(n, r) {
                return r && r instanceof J && !(r instanceof t) && (r = t(r)), J.fn.init.call(this, n, r, e);
            }, t.fn.init.prototype = t.fn;
            var e = t(R);
            return t;
        };
    }();
    var nn, rn, on, sn = /alpha\([^)]*\)/i, an = /opacity=([^)]*)/, ln = /^(top|right|bottom|left)$/, un = /^(none|table(?!-c[ea]).+)/, hn = /^margin/, cn = RegExp("^(" + K + ")(.*)$", "i"), fn = RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"), pn = RegExp("^([-+])=(" + K + ")", "i"), dn = {
        BODY: "block"
    }, gn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, vn = {
        letterSpacing: 0,
        fontWeight: 400
    }, mn = [ "Top", "Right", "Bottom", "Left" ], yn = [ "Webkit", "O", "Moz", "ms" ], xn = J.fn.toggle;
    J.fn.extend({
        css: function(t, n) {
            return J.access(this, function(t, n, r) {
                return r !== e ? J.style(t, n, r) : J.css(t, n);
            }, t, n, arguments.length > 1);
        },
        show: function() {
            return y(this, !0);
        },
        hide: function() {
            return y(this);
        },
        toggle: function(t, e) {
            var n = "boolean" == typeof t;
            return J.isFunction(t) && J.isFunction(e) ? xn.apply(this, arguments) : this.each(function() {
                (n ? t : m(this)) ? J(this).show() : J(this).hide();
            });
        }
    }), J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = nn(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, r, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, a, l = J.camelCase(n), u = t.style;
                if (n = J.cssProps[l] || (J.cssProps[l] = v(u, l)), a = J.cssHooks[n] || J.cssHooks[l], 
                r === e) return a && "get" in a && (o = a.get(t, !1, i)) !== e ? o : u[n];
                if (s = typeof r, "string" === s && (o = pn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(J.css(t, n)), 
                s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" === s && !J.cssNumber[l] && (r += "px"), 
                a && "set" in a && (r = a.set(t, r, i)) === e))) try {
                    u[n] = r;
                } catch (h) {}
            }
        },
        css: function(t, n, r, i) {
            var o, s, a, l = J.camelCase(n);
            return n = J.cssProps[l] || (J.cssProps[l] = v(t.style, l)), a = J.cssHooks[n] || J.cssHooks[l], 
            a && "get" in a && (o = a.get(t, !0, i)), o === e && (o = nn(t, n)), "normal" === o && n in vn && (o = vn[n]), 
            r || i !== e ? (s = parseFloat(o), r || J.isNumeric(s) ? s || 0 : o) : o;
        },
        swap: function(t, e, n) {
            var r, i, o = {};
            for (i in e) o[i] = t.style[i], t.style[i] = e[i];
            r = n.call(t);
            for (i in e) t.style[i] = o[i];
            return r;
        }
    }), t.getComputedStyle ? nn = function(e, n) {
        var r, i, o, s, a = t.getComputedStyle(e, null), l = e.style;
        return a && (r = a.getPropertyValue(n) || a[n], "" === r && !J.contains(e.ownerDocument, e) && (r = J.style(e, n)), 
        fn.test(r) && hn.test(n) && (i = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = r, 
        r = a.width, l.width = i, l.minWidth = o, l.maxWidth = s)), r;
    } : R.documentElement.currentStyle && (nn = function(t, e) {
        var n, r, i = t.currentStyle && t.currentStyle[e], o = t.style;
        return null == i && o && o[e] && (i = o[e]), fn.test(i) && !ln.test(e) && (n = o.left, 
        r = t.runtimeStyle && t.runtimeStyle.left, r && (t.runtimeStyle.left = t.currentStyle.left), 
        o.left = "fontSize" === e ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (t.runtimeStyle.left = r)), 
        "" === i ? "auto" : i;
    }), J.each([ "height", "width" ], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? 0 === t.offsetWidth && un.test(nn(t, "display")) ? J.swap(t, gn, function() {
                    return w(t, e, r);
                }) : w(t, e, r) : void 0;
            },
            set: function(t, n, r) {
                return x(t, n, r ? b(t, e, r, J.support.boxSizing && "border-box" === J.css(t, "boxSizing")) : 0);
            }
        };
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(t, e) {
            return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
        },
        set: function(t, e) {
            var n = t.style, r = t.currentStyle, i = J.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, e >= 1 && "" === J.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i);
        }
    }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(t, e) {
                return J.swap(t, {
                    display: "inline-block"
                }, function() {
                    return e ? nn(t, "marginRight") : void 0;
                });
            }
        }), !J.support.pixelPosition && J.fn.position && J.each([ "top", "left" ], function(t, e) {
            J.cssHooks[e] = {
                get: function(t, n) {
                    if (n) {
                        var r = nn(t, e);
                        return fn.test(r) ? J(t).position()[e] + "px" : r;
                    }
                }
            };
        });
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(t) {
        return 0 === t.offsetWidth && 0 === t.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || nn(t, "display"));
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t);
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [ n ], o = {};
                for (r = 0; 4 > r; r++) o[t + mn[r] + e] = i[r] || i[r - 2] || i[0];
                return o;
            }
        }, hn.test(t) || (J.cssHooks[t + e].set = x);
    });
    var bn = /%20/g, wn = /\[\]$/, _n = /\r?\n/g, kn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Cn = /^(?:select|textarea)/i;
    J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cn.test(this.nodeName) || kn.test(this.type));
            }).map(function(t, e) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(_n, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(_n, "\r\n")
                };
            }).get();
        }
    }), J.param = function(t, n) {
        var r, i = [], o = function(t, e) {
            e = J.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (n === e && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            o(this.name, this.value);
        }); else for (r in t) k(r, t[r], n, o);
        return i.join("&").replace(bn, "+");
    };
    var Tn, Sn, Nn = /#.*$/, En = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Bn = /^(?:GET|HEAD)$/, Ln = /^\/\//, Mn = /\?/, Fn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, jn = /([?&])_=[^&]*/, Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Dn = J.fn.load, Pn = {}, In = {}, On = [ "*/" ] + [ "*" ];
    try {
        Sn = q.href;
    } catch (zn) {
        Sn = R.createElement("a"), Sn.href = "", Sn = Sn.href;
    }
    Tn = Hn.exec(Sn.toLowerCase()) || [], J.fn.load = function(t, n, r) {
        if ("string" != typeof t && Dn) return Dn.apply(this, arguments);
        if (!this.length) return this;
        var i, o, s, a = this, l = t.indexOf(" ");
        return l >= 0 && (i = t.slice(l, t.length), t = t.slice(0, l)), J.isFunction(n) ? (r = n, 
        n = e) : n && "object" == typeof n && (o = "POST"), J.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: n,
            complete: function(t, e) {
                r && a.each(r, s || [ t.responseText, e, t ]);
            }
        }).done(function(t) {
            s = arguments, a.html(i ? J("<div>").append(t.replace(Fn, "")).find(i) : t);
        }), this;
    }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), J.each([ "get", "post" ], function(t, n) {
        J[n] = function(t, r, i, o) {
            return J.isFunction(r) && (o = o || i, i = r, r = e), J.ajax({
                type: n,
                url: t,
                data: r,
                success: i,
                dataType: o
            });
        };
    }), J.extend({
        getScript: function(t, n) {
            return J.get(t, e, n, "script");
        },
        getJSON: function(t, e, n) {
            return J.get(t, e, n, "json");
        },
        ajaxSetup: function(t, e) {
            return e ? S(t, J.ajaxSettings) : (e = t, t = J.ajaxSettings), S(t, e), t;
        },
        ajaxSettings: {
            url: Sn,
            isLocal: An.test(Tn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": On
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: C(Pn),
        ajaxTransport: C(In),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, c, y, x, w, k = n;
                2 !== b && (b = 2, l && clearTimeout(l), a = e, o = s || "", _.readyState = t > 0 ? 4 : 0, 
                r && (x = N(f, _, r)), t >= 200 && 300 > t || 304 === t ? (f.ifModified && (w = _.getResponseHeader("Last-Modified"), 
                w && (J.lastModified[i] = w), w = _.getResponseHeader("Etag"), w && (J.etag[i] = w)), 
                304 === t ? (k = "notmodified", u = !0) : (u = E(f, x), k = u.state, c = u.data, 
                y = u.error, u = !y)) : (y = k, (!k || t) && (k = "error", 0 > t && (t = 0))), _.status = t, 
                _.statusText = (n || k) + "", u ? g.resolveWith(p, [ c, k, _ ]) : g.rejectWith(p, [ _, k, y ]), 
                _.statusCode(m), m = e, h && d.trigger("ajax" + (u ? "Success" : "Error"), [ _, f, u ? c : y ]), 
                v.fireWith(p, [ _, k ]), h && (d.trigger("ajaxComplete", [ _, f ]), --J.active || J.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var i, o, s, a, l, u, h, c, f = J.ajaxSetup({}, n), p = f.context || f, d = p !== f && (p.nodeType || p instanceof J) ? J(p) : J.event, g = J.Deferred(), v = J.Callbacks("once memory"), m = f.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", _ = {
                readyState: 0,
                setRequestHeader: function(t, e) {
                    if (!b) {
                        var n = t.toLowerCase();
                        t = x[n] = x[n] || t, y[t] = e;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o : null;
                },
                getResponseHeader: function(t) {
                    var n;
                    if (2 === b) {
                        if (!s) for (s = {}; n = En.exec(o); ) s[n[1].toLowerCase()] = n[2];
                        n = s[t.toLowerCase()];
                    }
                    return n === e ? null : n;
                },
                overrideMimeType: function(t) {
                    return b || (f.mimeType = t), this;
                },
                abort: function(t) {
                    return t = t || w, a && a.abort(t), r(0, t), this;
                }
            };
            if (g.promise(_), _.success = _.done, _.error = _.fail, _.complete = v.add, _.statusCode = function(t) {
                if (t) {
                    var e;
                    if (2 > b) for (e in t) m[e] = [ m[e], t[e] ]; else e = t[_.status], _.always(e);
                }
                return this;
            }, f.url = ((t || f.url) + "").replace(Nn, "").replace(Ln, Tn[1] + "//"), f.dataTypes = J.trim(f.dataType || "*").toLowerCase().split(ee), 
            null == f.crossDomain && (u = Hn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tn[1] && u[2] === Tn[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Tn[3] || ("http:" === Tn[1] ? 80 : 443)))), 
            f.data && f.processData && "string" != typeof f.data && (f.data = J.param(f.data, f.traditional)), 
            T(Pn, f, n, _), 2 === b) return _;
            if (h = f.global, f.type = f.type.toUpperCase(), f.hasContent = !Bn.test(f.type), 
            h && 0 === J.active++ && J.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (Mn.test(f.url) ? "&" : "?") + f.data, 
            delete f.data), i = f.url, f.cache === !1)) {
                var k = J.now(), C = f.url.replace(jn, "$1_=" + k);
                f.url = C + (C === f.url ? (Mn.test(f.url) ? "&" : "?") + "_=" + k : "");
            }
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), 
            f.ifModified && (i = i || f.url, J.lastModified[i] && _.setRequestHeader("If-Modified-Since", J.lastModified[i]), 
            J.etag[i] && _.setRequestHeader("If-None-Match", J.etag[i])), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + On + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) _.setRequestHeader(c, f.headers[c]);
            if (!f.beforeSend || f.beforeSend.call(p, _, f) !== !1 && 2 !== b) {
                w = "abort";
                for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[c](f[c]);
                if (a = T(In, f, n, _)) {
                    _.readyState = 1, h && d.trigger("ajaxSend", [ _, f ]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                        _.abort("timeout");
                    }, f.timeout));
                    try {
                        b = 1, a.send(y, r);
                    } catch (S) {
                        if (!(2 > b)) throw S;
                        r(-1, S);
                    }
                } else r(-1, "No Transport");
                return _;
            }
            return _.abort();
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Rn = [], qn = /\?/, Wn = /(=)\?(?=&|$)|\?\?/, $n = J.now();
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Rn.pop() || J.expando + "_" + $n++;
            return this[t] = !0, t;
        }
    }), J.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, s, a, l = n.data, u = n.url, h = n.jsonp !== !1, c = h && Wn.test(u), f = h && !c && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
        return "jsonp" === n.dataTypes[0] || c || f ? (o = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        s = t[o], c ? n.url = u.replace(Wn, "$1" + o) : f ? n.data = l.replace(Wn, "$1" + o) : h && (n.url += (qn.test(u) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return a || J.error(o + " was not called"), a[0];
        }, n.dataTypes[0] = "json", t[o] = function() {
            a = arguments;
        }, i.always(function() {
            t[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Rn.push(o)), a && J.isFunction(s) && s(a[0]), 
            a = s = e;
        }), "script") : void 0;
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t;
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, r = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
            return {
                send: function(i, o) {
                    n = R.createElement("script"), n.async = "async", t.scriptCharset && (n.charset = t.scriptCharset), 
                    n.src = t.url, n.onload = n.onreadystatechange = function(t, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        r && n.parentNode && r.removeChild(n), n = e, i || o(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var Xn, Yn = t.ActiveXObject ? function() {
        for (var t in Xn) Xn[t](0, 1);
    } : !1, Vn = 0;
    J.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && A() || B();
    } : A, function(t) {
        J.extend(J.support, {
            ajax: !!t,
            cors: !!t && "withCredentials" in t
        });
    }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(n) {
        if (!n.crossDomain || J.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), 
                    n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) l.setRequestHeader(a, i[a]);
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(t, i) {
                        var a, u, h, c, f;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = e, s && (l.onreadystatechange = J.noop, 
                            Yn && delete Xn[s]), i) 4 !== l.readyState && l.abort(); else {
                                a = l.status, h = l.getAllResponseHeaders(), c = {}, f = l.responseXML, f && f.documentElement && (c.xml = f);
                                try {
                                    c.text = l.responseText;
                                } catch (p) {}
                                try {
                                    u = l.statusText;
                                } catch (p) {
                                    u = "";
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404;
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        c && o(a, u, c, h);
                    }, n.async ? 4 === l.readyState ? setTimeout(r, 0) : (s = ++Vn, Yn && (Xn || (Xn = {}, 
                    J(t).unload(Yn)), Xn[s] = r), l.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(0, 1);
                }
            };
        }
    });
    var Gn, Un, Qn = /^(?:toggle|show|hide)$/, Zn = RegExp("^(?:([-+])=|)(" + K + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Kn = [ H ], tr = {
        "*": [ function(t, e) {
            var n, r, i = this.createTween(t, e), o = Zn.exec(e), s = i.cur(), a = +s || 0, l = 1, u = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (J.cssNumber[t] ? "" : "px"), "px" !== r && a) {
                    a = J.css(i.elem, t, !0) || n || 1;
                    do l = l || ".5", a /= l, J.style(i.elem, t, a + r); while (l !== (l = i.cur() / s) && 1 !== l && --u);
                }
                i.unit = r, i.start = a, i.end = o[1] ? a + (o[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    J.Animation = J.extend(F, {
        tweener: function(t, e) {
            J.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; i > r; r++) n = t[r], tr[n] = tr[n] || [], tr[n].unshift(e);
        },
        prefilter: function(t, e) {
            e ? Kn.unshift(t) : Kn.push(t);
        }
    }), J.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (J.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : D.propHooks._default.set(this), this;
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, !1, ""), 
                e && "auto" !== e ? e : 0) : t.elem[t.prop];
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, J.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = J.fn[e];
        J.fn[e] = function(r, i, o) {
            return null == r || "boolean" == typeof r || !t && J.isFunction(r) && J.isFunction(i) ? n.apply(this, arguments) : this.animate(P(e, !0), r, i, o);
        };
    }), J.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(m).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r);
        },
        animate: function(t, e, n, r) {
            var i = J.isEmptyObject(t), o = J.speed(e, n, r), s = function() {
                var e = F(this, J.extend({}, t), o);
                i && e.stop(!0);
            };
            return i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(t, n, r) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(r);
            };
            return "string" != typeof t && (r = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, n = null != t && t + "queueHooks", o = J.timers, s = J._data(this);
                if (n) s[n] && s[n].stop && i(s[n]); else for (n in s) s[n] && s[n].stop && Jn.test(n) && i(s[n]);
                for (n = o.length; n--; ) o[n].elem === this && (null == t || o[n].queue === t) && (o[n].anim.stop(r), 
                e = !1, o.splice(n, 1));
                (e || !r) && J.dequeue(this, t);
            });
        }
    }), J.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        J.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r);
        };
    }), J.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? J.extend({}, t) : {
            complete: n || !n && e || J.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !J.isFunction(e) && e
        };
        return r.duration = J.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in J.fx.speeds ? J.fx.speeds[r.duration] : J.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            J.isFunction(r.old) && r.old.call(this), r.queue && J.dequeue(this, r.queue);
        }, r;
    }, J.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        }
    }, J.timers = [], J.fx = D.prototype.init, J.fx.tick = function() {
        var t, n = J.timers, r = 0;
        for (Gn = J.now(); n.length > r; r++) t = n[r], !t() && n[r] === t && n.splice(r--, 1);
        n.length || J.fx.stop(), Gn = e;
    }, J.fx.timer = function(t) {
        t() && J.timers.push(t) && !Un && (Un = setInterval(J.fx.tick, J.fx.interval));
    }, J.fx.interval = 13, J.fx.stop = function() {
        clearInterval(Un), Un = null;
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem;
        }).length;
    });
    var er = /^(?:body|html)$/i;
    J.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            J.offset.setOffset(this, t, e);
        });
        var n, r, i, o, s, a, l, u = {
            top: 0,
            left: 0
        }, h = this[0], c = h && h.ownerDocument;
        if (c) return (r = c.body) === h ? J.offset.bodyOffset(h) : (n = c.documentElement, 
        J.contains(n, h) ? (h.getBoundingClientRect !== void 0 && (u = h.getBoundingClientRect()), 
        i = I(c), o = n.clientTop || r.clientTop || 0, s = n.clientLeft || r.clientLeft || 0, 
        a = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, {
            top: u.top + a - o,
            left: u.left + l - s
        }) : u);
    }, J.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop, n = t.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(J.css(t, "marginTop")) || 0, 
            n += parseFloat(J.css(t, "marginLeft")) || 0), {
                top: e,
                left: n
            };
        },
        setOffset: function(t, e, n) {
            var r = J.css(t, "position");
            "static" === r && (t.style.position = "relative");
            var i, o, s = J(t), a = s.offset(), l = J.css(t, "top"), u = J.css(t, "left"), h = ("absolute" === r || "fixed" === r) && J.inArray("auto", [ l, u ]) > -1, c = {}, f = {};
            h ? (f = s.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), 
            J.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (c.top = e.top - a.top + i), 
            null != e.left && (c.left = e.left - a.left + o), "using" in e ? e.using.call(t, c) : s.css(c);
        }
    }, J.fn.extend({
        position: function() {
            if (this[0]) {
                var t = this[0], e = this.offsetParent(), n = this.offset(), r = er.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(J.css(t, "marginTop")) || 0, n.left -= parseFloat(J.css(t, "marginLeft")) || 0, 
                r.top += parseFloat(J.css(e[0], "borderTopWidth")) || 0, r.left += parseFloat(J.css(e[0], "borderLeftWidth")) || 0, 
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || R.body; t && !er.test(t.nodeName) && "static" === J.css(t, "position"); ) t = t.offsetParent;
                return t || R.body;
            });
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = /Y/.test(n);
        J.fn[t] = function(i) {
            return J.access(this, function(t, i, o) {
                var s = I(t);
                return o === e ? s ? n in s ? s[n] : s.document.documentElement[i] : t[i] : (s ? s.scrollTo(r ? J(s).scrollLeft() : o, r ? o : J(s).scrollTop()) : t[i] = o, 
                void 0);
            }, t, i, arguments.length, null);
        };
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        J.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(r, i) {
            J.fn[i] = function(i, o) {
                var s = arguments.length && (r || "boolean" != typeof i), a = r || (i === !0 || o === !0 ? "margin" : "border");
                return J.access(this, function(n, r, i) {
                    var o;
                    return J.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : i === e ? J.css(n, r, i, a) : J.style(n, r, i, a);
                }, n, s ? i : e, s, null);
            };
        });
    }), t.jQuery = t.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return J;
    });
})(window), function(t, e) {
    function n(t) {
        return t && "object" == typeof t && t.__wrapped__ ? t : this instanceof n ? (this.__wrapped__ = t, 
        void 0) : new n(t);
    }
    function r(t, e, n) {
        e || (e = 0);
        var r = t.length, i = r - e >= (n || re);
        if (i) for (var o = {}, n = e - 1; r > ++n; ) {
            var s = t[n] + "";
            (ke.call(o, s) ? o[s] : o[s] = []).push(t[n]);
        }
        return function(n) {
            if (i) {
                var r = n + "";
                return ke.call(o, r) && R(o[r], n) > -1;
            }
            return R(t, n, e) > -1;
        };
    }
    function i(t) {
        return t.charCodeAt(0);
    }
    function o(t, e) {
        var n = t.b, r = e.b, t = t.a, e = e.a;
        if (t !== e) {
            if (t > e || t === void 0) return 1;
            if (e > t || e === void 0) return -1;
        }
        return r > n ? -1 : 1;
    }
    function s(t, e, n) {
        function r() {
            var a = arguments, l = o ? this : e;
            return i || (t = e[s]), n.length && (a = a.length ? n.concat(p(a)) : n), this instanceof r ? (f.prototype = t.prototype, 
            l = new f(), f.prototype = null, a = t.apply(l, a), k(a) ? a : l) : t.apply(l, a);
        }
        var i = _(t), o = !n, s = e;
        return o && (n = e), i || (e = t), r;
    }
    function a(t, e, n) {
        return t ? "function" != typeof t ? function(e) {
            return e[t];
        } : e !== void 0 ? n ? function(n, r, i, o) {
            return t.call(e, n, r, i, o);
        } : function(n, r, i) {
            return t.call(e, n, r, i);
        } : t : Y;
    }
    function l() {
        for (var t, e = {
            b: "",
            c: "",
            e: Z,
            f: Ye,
            g: "",
            h: Ge,
            i: Ze,
            j: ye,
            k: "",
            l: !0
        }, n = 0; t = arguments[n]; n++) for (var r in t) e[r] = t[r];
        if (t = e.a, e.d = /^[^,]+/.exec(t)[0], n = Function, r = "var i,l=" + e.d + ",t=" + e.d + ";if(!" + e.d + ")return t;" + e.k + ";", 
        e.b ? (r += "var m=l.length;i=-1;if(typeof m=='number'){", e.i && (r += "if(k(l)){l=l.split('')}"), 
        r += "while(++i<m){" + e.b + "}}else {") : e.h && (r += "var m=l.length;i=-1;if(m&&j(l)){while(++i<m){i+='';" + e.g + "}}else {"), 
        e.e || (r += "var u=typeof l=='function'&&s.call(l,'prototype');"), e.f && e.l ? (r += "var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];", 
        e.e || (r += "if(!(u&&i=='prototype')){"), r += e.g + "", e.e || (r += "}")) : (r += "for(i in l){", 
        (!e.e || e.l) && (r += "if(", e.e || (r += "!(u&&i=='prototype')"), !e.e && e.l && (r += "&&"), 
        e.l && (r += "h.call(l,i)"), r += "){"), r += e.g + ";", (!e.e || e.l) && (r += "}")), 
        r += "}", e.e) {
            r += "var f=l.constructor;";
            for (var i = 0; 7 > i; i++) r += "i='" + e.j[i] + "';if(", "constructor" == e.j[i] && (r += "!(f&&f.prototype===l)&&"), 
            r += "h.call(l,i)){" + e.g + "}";
        }
        return (e.b || e.h) && (r += "}"), r += e.c + ";return t", n("e,h,j,k,p,n,s", "return function(" + t + "){" + r + "}")(a, ke, g, T, nn, Le, Te);
    }
    function u(t) {
        return "\\" + rn[t];
    }
    function h(t) {
        return fn[t];
    }
    function c(t) {
        return "function" != typeof t.toString && "string" == typeof (t + "");
    }
    function f() {}
    function p(t, e, n) {
        e || (e = 0), n === void 0 && (n = t ? t.length : 0);
        for (var r = -1, n = n - e || 0, i = Array(0 > n ? 0 : n); n > ++r; ) i[r] = t[e + r];
        return i;
    }
    function d(t) {
        return pn[t];
    }
    function g(t) {
        return Se.call(t) == He;
    }
    function v(t) {
        var e = !1;
        if (!t || "object" != typeof t || g(t)) return e;
        var n = t.constructor;
        return !_(n) && (!Je || !c(t)) || n instanceof n ? J ? (hn(t, function(t, n, r) {
            return e = !ke.call(r, n), !1;
        }), !1 === e) : (hn(t, function(t, n) {
            e = n;
        }), !1 === e || ke.call(t, e)) : e;
    }
    function m(t) {
        var e = [];
        return cn(t, function(t, n) {
            e.push(n);
        }), e;
    }
    function y(t, e, n, r, i) {
        if (null == t) return t;
        if (n && (e = !1), n = k(t)) {
            var o = Se.call(t);
            if (!tn[o] || Je && c(t)) return t;
            var s = gn(t);
        }
        if (!n || !e) return n ? s ? p(t) : un({}, t) : t;
        switch (n = en[o], o) {
          case Pe:
          case Ie:
            return new n(+t);

          case Oe:
          case qe:
            return new n(t);

          case Re:
            return n(t.source, he.exec(t));
        }
        for (r || (r = []), i || (i = []), o = r.length; o--; ) if (r[o] == t) return i[o];
        var a = s ? n(t.length) : {};
        return r.push(t), i.push(a), (s ? M : cn)(t, function(t, n) {
            a[n] = y(t, e, null, r, i);
        }), s && (ke.call(t, "index") && (a.index = t.index), ke.call(t, "input") && (a.input = t.input)), 
        a;
    }
    function x(t) {
        var e = [];
        return hn(t, function(t, n) {
            _(t) && e.push(n);
        }), e.sort();
    }
    function b(t) {
        var e = {};
        return cn(t, function(t, n) {
            e[t] = n;
        }), e;
    }
    function w(t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        var i = Se.call(t), o = Se.call(e);
        if (i == He && (i = ze), o == He && (o = ze), i != o) return !1;
        switch (i) {
          case Pe:
          case Ie:
            return +t == +e;

          case Oe:
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

          case Re:
          case qe:
            return t == e + "";
        }
        if (o = i == De, !o) {
            if (t.__wrapped__ || e.__wrapped__) return w(t.__wrapped__ || t, e.__wrapped__ || e);
            if (i != ze || Je && (c(t) || c(e))) return !1;
            var i = !Ue && g(t) ? Object : t.constructor, s = !Ue && g(e) ? Object : e.constructor;
            if (!(i == s || _(i) && i instanceof i && _(s) && s instanceof s)) return !1;
        }
        for (n || (n = []), r || (r = []), i = n.length; i--; ) if (n[i] == t) return r[i] == e;
        var a = !0, l = 0;
        if (n.push(t), r.push(e), o) {
            if (l = t.length, a = l == e.length) for (;l-- && (a = w(t[l], e[l], n, r)); ) ;
            return a;
        }
        return hn(t, function(t, i, o) {
            return ke.call(o, i) ? (l++, a = ke.call(e, i) && w(t, e[i], n, r)) : void 0;
        }), a && hn(e, function(t, e, n) {
            return ke.call(n, e) ? a = --l > -1 : void 0;
        }), a;
    }
    function _(t) {
        return "function" == typeof t;
    }
    function k(t) {
        return t ? nn[typeof t] : !1;
    }
    function C(t) {
        return "number" == typeof t || Se.call(t) == Oe;
    }
    function T(t) {
        return "string" == typeof t || Se.call(t) == qe;
    }
    function S(t, e, n) {
        var r = arguments, i = 0, o = 2, s = r[3], a = r[4];
        for (n !== ne && (s = [], a = [], "number" != typeof n && (o = r.length)); o > ++i; ) cn(r[i], function(e, n) {
            var r, i, o;
            if (e && ((i = gn(e)) || vn(e))) {
                for (var l = s.length; l-- && !(r = s[l] == e); ) ;
                r ? t[n] = a[l] : (s.push(e), a.push((o = t[n], o = i ? gn(o) ? o : [] : vn(o) ? o : {})), 
                t[n] = S(o, e, ne, s, a));
            } else null != e && (t[n] = e);
        });
        return t;
    }
    function N(t) {
        var e = [];
        return cn(t, function(t) {
            e.push(t);
        }), e;
    }
    function E(t, e, n) {
        var r = -1, i = t ? t.length : 0, o = !1, n = (0 > n ? Me(0, i + n) : n) || 0;
        return "number" == typeof i ? o = (T(t) ? t.indexOf(e, n) : R(t, e, n)) > -1 : ln(t, function(t) {
            return ++r >= n ? !(o = t === e) : void 0;
        }), o;
    }
    function A(t, e, n) {
        var r = !0, e = a(e, n);
        if (gn(t)) for (var n = -1, i = t.length; i > ++n && (r = !!e(t[n], n, t)); ) ; else ln(t, function(t, n, i) {
            return r = !!e(t, n, i);
        });
        return r;
    }
    function B(t, e, n) {
        var r = [], e = a(e, n);
        if (gn(t)) for (var n = -1, i = t.length; i > ++n; ) {
            var o = t[n];
            e(o, n, t) && r.push(o);
        } else ln(t, function(t, n, i) {
            e(t, n, i) && r.push(t);
        });
        return r;
    }
    function L(t, e, n) {
        var r, e = a(e, n);
        return M(t, function(t, n, i) {
            return e(t, n, i) ? (r = t, !1) : void 0;
        }), r;
    }
    function M(t, e, n) {
        if (e && n === void 0 && gn(t)) for (var n = -1, r = t.length; r > ++n && !1 !== e(t[n], n, t); ) ; else ln(t, e, n);
        return t;
    }
    function F(t, e, n) {
        var r = -1, i = t ? t.length : 0, o = Array("number" == typeof i ? i : 0), e = a(e, n);
        if (gn(t)) for (;i > ++r; ) o[r] = e(t[r], r, t); else ln(t, function(t, n, i) {
            o[++r] = e(t, n, i);
        });
        return o;
    }
    function j(t, e, n) {
        var r = -1/0, o = -1, s = t ? t.length : 0, l = r;
        if (e || !gn(t)) e = !e && T(t) ? i : a(e, n), ln(t, function(t, n, i) {
            n = e(t, n, i), n > r && (r = n, l = t);
        }); else for (;s > ++o; ) t[o] > l && (l = t[o]);
        return l;
    }
    function H(t, e) {
        return F(t, e + "");
    }
    function D(t, e, n, r) {
        var i = 3 > arguments.length, e = a(e, r, ne);
        if (gn(t)) {
            var o = -1, s = t.length;
            for (i && (n = t[++o]); s > ++o; ) n = e(n, t[o], o, t);
        } else ln(t, function(t, r, o) {
            n = i ? (i = !1, t) : e(n, t, r, o);
        });
        return n;
    }
    function P(t, e, n, r) {
        var i = t, o = t ? t.length : 0, s = 3 > arguments.length;
        if ("number" != typeof o) var l = mn(t), o = l.length; else Ze && T(t) && (i = t.split(""));
        return e = a(e, r, ne), M(t, function(t, r, a) {
            r = l ? l[--o] : --o, n = s ? (s = !1, i[r]) : e(n, i[r], r, a);
        }), n;
    }
    function I(t, e, n) {
        var r, e = a(e, n);
        if (gn(t)) for (var n = -1, i = t.length; i > ++n && !(r = e(t[n], n, t)); ) ; else ln(t, function(t, n, i) {
            return !(r = e(t, n, i));
        });
        return !!r;
    }
    function O(t, e, n) {
        if (t) {
            var r = t.length;
            return null == e || n ? t[0] : p(t, 0, Fe(Me(0, e), r));
        }
    }
    function z(t, e) {
        for (var n = -1, r = t ? t.length : 0, i = []; r > ++n; ) {
            var o = t[n];
            gn(o) ? Ce.apply(i, e ? o : z(o)) : i.push(o);
        }
        return i;
    }
    function R(t, e, n) {
        var r = -1, i = t ? t.length : 0;
        if ("number" == typeof n) r = (0 > n ? Me(0, i + n) : n || 0) - 1; else if (n) return r = W(t, e), 
        t[r] === e ? r : -1;
        for (;i > ++r; ) if (t[r] === e) return r;
        return -1;
    }
    function q(t, e, n) {
        return p(t, null == e || n ? 1 : Me(0, e));
    }
    function W(t, e, n, r) {
        for (var i = 0, o = t ? t.length : i, n = n ? a(n, r) : Y, e = n(e); o > i; ) r = i + o >>> 1, 
        e > n(t[r]) ? i = r + 1 : o = r;
        return i;
    }
    function $(t, e, n, r) {
        var i = -1, o = t ? t.length : 0, s = [], l = s;
        "function" == typeof e && (r = n, n = e, e = !1);
        var u = !e && o >= 75;
        if (u) var h = {};
        for (n && (l = [], n = a(n, r)); o > ++i; ) {
            var r = t[i], c = n ? n(r, i, t) : r;
            if (u) var f = c + "", f = ke.call(h, f) ? !(l = h[f]) : l = h[f] = [];
            (e ? !i || l[l.length - 1] !== c : f || 0 > R(l, c)) && ((n || u) && l.push(c), 
            s.push(r));
        }
        return s;
    }
    function X(t, e) {
        return Xe || Ne && arguments.length > 2 ? Ne.call.apply(Ne, arguments) : s(t, e, p(arguments, 2));
    }
    function Y(t) {
        return t;
    }
    function V(t) {
        M(x(t), function(e) {
            var r = n[e] = t[e];
            n.prototype[e] = function() {
                var t = [ this.__wrapped__ ];
                return Ce.apply(t, arguments), t = r.apply(n, t), new n(t);
            };
        });
    }
    function G() {
        return this.__wrapped__;
    }
    var U = "object" == typeof exports && exports, Q = "object" == typeof global && global;
    Q.global === Q && (t = Q);
    var Z, J, K = [], te = new function() {}(), ee = 0, ne = te, re = 30, ie = t._, oe = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/, se = /&(?:amp|lt|gt|quot|#x27);/g, ae = /\b__p\+='';/g, le = /\b(__p\+=)''\+/g, ue = /(__e\(.*?\)|\b__t\))\+'';/g, he = /\w*$/, ce = /(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g, fe = RegExp("^" + (te.valueOf + "").replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"), pe = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g, de = /<%=([\s\S]+?)%>/g, ge = /($^)/, ve = /[&<>"']/g, me = /['\n\r\t\u2028\u2029\\]/g, ye = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), xe = Math.ceil, be = K.concat, we = Math.floor, _e = fe.test(_e = Object.getPrototypeOf) && _e, ke = te.hasOwnProperty, Ce = K.push, Te = te.propertyIsEnumerable, Se = te.toString, Ne = fe.test(Ne = p.bind) && Ne, Ee = fe.test(Ee = Array.isArray) && Ee, Ae = t.isFinite, Be = t.isNaN, Le = fe.test(Le = Object.keys) && Le, Me = Math.max, Fe = Math.min, je = Math.random, He = "[object Arguments]", De = "[object Array]", Pe = "[object Boolean]", Ie = "[object Date]", Oe = "[object Number]", ze = "[object Object]", Re = "[object RegExp]", qe = "[object String]", We = !!t.attachEvent, $e = Ne && !/\n|true/.test(Ne + We), Xe = Ne && !$e, Ye = Le && (We || $e), Ve = (Ve = {
        0: 1,
        length: 1
    }, K.splice.call(Ve, 0, 1), Ve[0]), Ge = !0;
    (function() {
        function t() {
            this.x = 1;
        }
        var e = [];
        t.prototype = {
            valueOf: 1,
            y: 1
        };
        for (var n in new t()) e.push(n);
        for (n in arguments) Ge = !n;
        Z = !/valueOf/.test(e), J = "x" != e[0];
    })(1);
    var Ue = arguments.constructor == Object, Qe = !g(arguments), Ze = "xx" != "x"[0] + Object("x")[0];
    try {
        var Je = Se.call(document) == ze;
    } catch (Ke) {}
    var tn = {
        "[object Function]": !1
    };
    tn[He] = tn[De] = tn[Pe] = tn[Ie] = tn[Oe] = tn[ze] = tn[Re] = tn[qe] = !0;
    var en = {};
    en[De] = Array, en[Pe] = Boolean, en[Ie] = Date, en[ze] = Object, en[Oe] = Number, 
    en[Re] = RegExp, en[qe] = String;
    var nn = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, rn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    n.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: de,
        variable: ""
    };
    var on = {
        a: "o,v,g",
        k: "for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",
        g: "t[i]=l[i]",
        c: "}}"
    }, sn = {
        a: "d,c,w",
        k: "c=c&&typeof w=='undefined'?c:e(c,w)",
        b: "if(c(l[i],i,d)===false)return t",
        g: "if(c(l[i],i,d)===false)return t"
    }, an = {
        b: null
    }, ln = l(sn), un = l(on);
    Qe && (g = function(t) {
        return t ? ke.call(t, "callee") : !1;
    });
    var hn = l(sn, an, {
        l: !1
    }), cn = l(sn, an), fn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;"
    }, pn = b(fn), dn = l(on, {
        g: "if(t[i]==null)" + on.g
    }), gn = Ee || function(t) {
        return Ue && t instanceof Array || Se.call(t) == De;
    };
    _(/x/) && (_ = function(t) {
        return t instanceof Function || "[object Function]" == Se.call(t);
    });
    var vn = _e ? function(t) {
        if (!t || "object" != typeof t) return !1;
        var e = t.valueOf, n = "function" == typeof e && (n = _e(e)) && _e(n);
        return n ? t == n || _e(t) == n && !g(t) : v(t);
    } : v, mn = Le ? function(t) {
        return "function" == typeof t && Te.call(t, "prototype") ? m(t) : k(t) ? Le(t) : [];
    } : m;
    n.after = function(t, e) {
        return 1 > t ? e() : function() {
            return 1 > --t ? e.apply(this, arguments) : void 0;
        };
    }, n.assign = un, n.bind = X, n.bindAll = function(t) {
        for (var e = arguments, n = e.length > 1 ? 0 : (e = x(t), -1), r = e.length; r > ++n; ) {
            var i = e[n];
            t[i] = X(t[i], t);
        }
        return t;
    }, n.bindKey = function(t, e) {
        return s(t, e, p(arguments, 2));
    }, n.compact = function(t) {
        for (var e = -1, n = t ? t.length : 0, r = []; n > ++e; ) {
            var i = t[e];
            i && r.push(i);
        }
        return r;
    }, n.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, n = t.length; n--; ) e = [ t[n].apply(this, e) ];
            return e[0];
        };
    }, n.countBy = function(t, e, n) {
        var r = {}, e = a(e, n);
        return M(t, function(t, n, i) {
            n = e(t, n, i), ke.call(r, n) ? r[n]++ : r[n] = 1;
        }), r;
    }, n.debounce = function(t, e, n) {
        function r() {
            a = null, n || (o = t.apply(s, i));
        }
        var i, o, s, a;
        return function() {
            var l = n && !a;
            return i = arguments, s = this, clearTimeout(a), a = setTimeout(r, e), l && (o = t.apply(s, i)), 
            o;
        };
    }, n.defaults = dn, n.defer = function(t) {
        var n = p(arguments, 1);
        return setTimeout(function() {
            t.apply(e, n);
        }, 1);
    }, n.delay = function(t, n) {
        var r = p(arguments, 2);
        return setTimeout(function() {
            t.apply(e, r);
        }, n);
    }, n.difference = function(t) {
        for (var e = -1, n = t ? t.length : 0, i = be.apply(K, arguments), i = r(i, n), o = []; n > ++e; ) {
            var s = t[e];
            i(s) || o.push(s);
        }
        return o;
    }, n.filter = B, n.flatten = z, n.forEach = M, n.forIn = hn, n.forOwn = cn, n.functions = x, 
    n.groupBy = function(t, e, n) {
        var r = {}, e = a(e, n);
        return M(t, function(t, n, i) {
            n = e(t, n, i), (ke.call(r, n) ? r[n] : r[n] = []).push(t);
        }), r;
    }, n.initial = function(t, e, n) {
        if (!t) return [];
        var r = t.length;
        return p(t, 0, Fe(Me(0, r - (null == e || n ? 1 : e || 0)), r));
    }, n.intersection = function(t) {
        var e = arguments, n = e.length, i = {
            0: {}
        }, o = -1, s = t ? t.length : 0, a = s >= 100, l = [], u = l;
        t: for (;s > ++o; ) {
            var h = t[o];
            if (a) var c = h + "", c = ke.call(i[0], c) ? !(u = i[0][c]) : u = i[0][c] = [];
            if (c || 0 > R(u, h)) {
                a && u.push(h);
                for (var f = n; --f; ) if (!(i[f] || (i[f] = r(e[f], 0, 100)))(h)) continue t;
                l.push(h);
            }
        }
        return l;
    }, n.invert = b, n.invoke = function(t, e) {
        var n = p(arguments, 2), r = "function" == typeof e, i = [];
        return M(t, function(t) {
            i.push((r ? e : t[e]).apply(t, n));
        }), i;
    }, n.keys = mn, n.map = F, n.max = j, n.memoize = function(t, e) {
        var n = {};
        return function() {
            var r = e ? e.apply(this, arguments) : arguments[0];
            return ke.call(n, r) ? n[r] : n[r] = t.apply(this, arguments);
        };
    }, n.merge = S, n.min = function(t, e, n) {
        var r = 1/0, o = -1, s = t ? t.length : 0, l = r;
        if (e || !gn(t)) e = !e && T(t) ? i : a(e, n), ln(t, function(t, n, i) {
            n = e(t, n, i), r > n && (r = n, l = t);
        }); else for (;s > ++o; ) l > t[o] && (l = t[o]);
        return l;
    }, n.object = function(t, e) {
        for (var n = -1, r = t ? t.length : 0, i = {}; r > ++n; ) {
            var o = t[n];
            e ? i[o] = e[n] : i[o[0]] = o[1];
        }
        return i;
    }, n.omit = function(t, e, n) {
        var r = "function" == typeof e, i = {};
        if (r) e = a(e, n); else var o = be.apply(K, arguments);
        return hn(t, function(t, n, s) {
            (r ? !e(t, n, s) : 0 > R(o, n, 1)) && (i[n] = t);
        }), i;
    }, n.once = function(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
        };
    }, n.pairs = function(t) {
        var e = [];
        return cn(t, function(t, n) {
            e.push([ n, t ]);
        }), e;
    }, n.partial = function(t) {
        return s(t, p(arguments, 1));
    }, n.pick = function(t, e, n) {
        var r = {};
        if ("function" != typeof e) for (var i = 0, o = be.apply(K, arguments), s = o.length; s > ++i; ) {
            var l = o[i];
            l in t && (r[l] = t[l]);
        } else e = a(e, n), hn(t, function(t, n, i) {
            e(t, n, i) && (r[n] = t);
        });
        return r;
    }, n.pluck = H, n.range = function(t, e, n) {
        t = +t || 0, n = +n || 1, null == e && (e = t, t = 0);
        for (var r = -1, e = Me(0, xe((e - t) / n)), i = Array(e); e > ++r; ) i[r] = t, 
        t += n;
        return i;
    }, n.reject = function(t, e, n) {
        return e = a(e, n), B(t, function(t, n, r) {
            return !e(t, n, r);
        });
    }, n.rest = q, n.shuffle = function(t) {
        var e = -1, n = Array(t ? t.length : 0);
        return M(t, function(t) {
            var r = we(je() * (++e + 1));
            n[e] = n[r], n[r] = t;
        }), n;
    }, n.sortBy = function(t, e, n) {
        var r = [], e = a(e, n);
        for (M(t, function(t, n, i) {
            r.push({
                a: e(t, n, i),
                b: n,
                c: t
            });
        }), t = r.length, r.sort(o); t--; ) r[t] = r[t].c;
        return r;
    }, n.tap = function(t, e) {
        return e(t), t;
    }, n.throttle = function(t, e) {
        function n() {
            a = new Date(), s = null, i = t.apply(o, r);
        }
        var r, i, o, s, a = 0;
        return function() {
            var l = new Date(), u = e - (l - a);
            return r = arguments, o = this, 0 >= u ? (clearTimeout(s), s = null, a = l, i = t.apply(o, r)) : s || (s = setTimeout(n, u)), 
            i;
        };
    }, n.times = function(t, e, n) {
        for (var t = +t || 0, r = -1, i = Array(t); t > ++r; ) i[r] = e.call(n, r);
        return i;
    }, n.toArray = function(t) {
        return "number" == typeof (t ? t.length : 0) ? Ze && T(t) ? t.split("") : p(t) : N(t);
    }, n.union = function() {
        return $(be.apply(K, arguments));
    }, n.uniq = $, n.values = N, n.where = function(t, e) {
        var n = mn(e);
        return B(t, function(t) {
            for (var r = n.length; r--; ) {
                var i = t[n[r]] === e[n[r]];
                if (!i) break;
            }
            return !!i;
        });
    }, n.without = function(t) {
        for (var e = -1, n = t ? t.length : 0, i = r(arguments, 1, 20), o = []; n > ++e; ) {
            var s = t[e];
            i(s) || o.push(s);
        }
        return o;
    }, n.wrap = function(t, e) {
        return function() {
            var n = [ t ];
            return Ce.apply(n, arguments), e.apply(this, n);
        };
    }, n.zip = function(t) {
        for (var e = -1, n = t ? j(H(arguments, "length")) : 0, r = Array(n); n > ++e; ) r[e] = H(arguments, e);
        return r;
    }, n.collect = F, n.drop = q, n.each = M, n.extend = un, n.methods = x, n.select = B, 
    n.tail = q, n.unique = $, V(n), n.clone = y, n.cloneDeep = function(t) {
        return y(t, !0);
    }, n.contains = E, n.escape = function(t) {
        return null == t ? "" : (t + "").replace(ve, h);
    }, n.every = A, n.find = L, n.has = function(t, e) {
        return t ? ke.call(t, e) : !1;
    }, n.identity = Y, n.indexOf = R, n.isArguments = g, n.isArray = gn, n.isBoolean = function(t) {
        return !0 === t || !1 === t || Se.call(t) == Pe;
    }, n.isDate = function(t) {
        return t instanceof Date || Se.call(t) == Ie;
    }, n.isElement = function(t) {
        return t ? 1 === t.nodeType : !1;
    }, n.isEmpty = function(t) {
        var e = !0;
        if (!t) return e;
        var n = Se.call(t), r = t.length;
        return n == De || n == qe || n == He || Qe && g(t) || n == ze && "number" == typeof r && _(t.splice) ? !r : (cn(t, function() {
            return e = !1;
        }), e);
    }, n.isEqual = w, n.isFinite = function(t) {
        return Ae(t) && !Be(parseFloat(t));
    }, n.isFunction = _, n.isNaN = function(t) {
        return C(t) && t != +t;
    }, n.isNull = function(t) {
        return null === t;
    }, n.isNumber = C, n.isObject = k, n.isPlainObject = vn, n.isRegExp = function(t) {
        return t instanceof RegExp || Se.call(t) == Re;
    }, n.isString = T, n.isUndefined = function(t) {
        return t === void 0;
    }, n.lastIndexOf = function(t, e, n) {
        var r = t ? t.length : 0;
        for ("number" == typeof n && (r = (0 > n ? Me(0, r + n) : Fe(n, r - 1)) + 1); r--; ) if (t[r] === e) return r;
        return -1;
    }, n.mixin = V, n.noConflict = function() {
        return t._ = ie, this;
    }, n.random = function(t, e) {
        return null == t && null == e && (e = 1), t = +t || 0, null == e && (e = t, t = 0), 
        t + we(je() * ((+e || 0) - t + 1));
    }, n.reduce = D, n.reduceRight = P, n.result = function(t, e) {
        var n = t ? t[e] : null;
        return _(n) ? t[e]() : n;
    }, n.size = function(t) {
        var e = t ? t.length : 0;
        return "number" == typeof e ? e : mn(t).length;
    }, n.some = I, n.sortedIndex = W, n.template = function(t, e, r) {
        t || (t = ""), r || (r = {});
        var i, o, s = n.templateSettings, a = 0, l = r.interpolate || s.interpolate || ge, h = "__p+='", c = r.variable || s.variable, f = c;
        t.replace(RegExp((r.escape || s.escape || ge).source + "|" + l.source + "|" + (l === de ? pe : ge).source + "|" + (r.evaluate || s.evaluate || ge).source + "|$", "g"), function(e, n, r, o, s, l) {
            return r || (r = o), h += t.slice(a, l).replace(me, u), n && (h += "'+__e(" + n + ")+'"), 
            s && (h += "';" + s + ";__p+='"), r && (h += "'+((__t=(" + r + "))==null?'':__t)+'"), 
            i || (i = s || oe.test(n || r)), a = l + e.length, e;
        }), h += "';\n", f || (c = "obj", i ? h = "with(" + c + "){" + h + "}" : (r = RegExp("(\\(\\s*)" + c + "\\." + c + "\\b", "g"), 
        h = h.replace(ce, "$&" + c + ".").replace(r, "$1__d"))), h = (i ? h.replace(ae, "") : h).replace(le, "$1").replace(ue, "$1;"), 
        h = "function(" + c + "){" + (f ? "" : c + "||(" + c + "={});") + "var __t,__p='',__e=_.escape" + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : (f ? "" : ",__d=" + c + "." + c + "||" + c) + ";") + h + "return __p}";
        try {
            o = Function("_", "return " + h)(n);
        } catch (p) {
            throw p.source = h, p;
        }
        return e ? o(e) : (o.source = h, o);
    }, n.unescape = function(t) {
        return null == t ? "" : (t + "").replace(se, d);
    }, n.uniqueId = function(t) {
        return (null == t ? "" : t + "") + ++ee;
    }, n.all = A, n.any = I, n.detect = L, n.foldl = D, n.foldr = P, n.include = E, 
    n.inject = D, cn(n, function(t, e) {
        n.prototype[e] || (n.prototype[e] = function() {
            var e = [ this.__wrapped__ ];
            return Ce.apply(e, arguments), t.apply(n, e);
        });
    }), n.first = O, n.last = function(t, e, n) {
        if (t) {
            var r = t.length;
            return null == e || n ? t[r - 1] : p(t, Me(0, r - e));
        }
    }, n.take = O, n.head = O, cn(n, function(t, e) {
        n.prototype[e] || (n.prototype[e] = function(e, r) {
            var i = t(this.__wrapped__, e, r);
            return null == e || r ? i : new n(i);
        });
    }), n.VERSION = "1.0.0-rc.3", n.prototype.toString = function() {
        return this.__wrapped__ + "";
    }, n.prototype.value = G, n.prototype.valueOf = G, ln([ "join", "pop", "shift" ], function(t) {
        var e = K[t];
        n.prototype[t] = function() {
            return e.apply(this.__wrapped__, arguments);
        };
    }), ln([ "push", "reverse", "sort", "unshift" ], function(t) {
        var e = K[t];
        n.prototype[t] = function() {
            return e.apply(this.__wrapped__, arguments), this;
        };
    }), ln([ "concat", "slice", "splice" ], function(t) {
        var e = K[t];
        n.prototype[t] = function() {
            var t = e.apply(this.__wrapped__, arguments);
            return new n(t);
        };
    }), Ve && ln([ "pop", "shift", "splice" ], function(t) {
        var e = K[t], r = "splice" == t;
        n.prototype[t] = function() {
            var t = this.__wrapped__, i = e.apply(t, arguments);
            return 0 === t.length && delete t[0], r ? new n(i) : i;
        };
    }), "function" == typeof define && "object" == typeof define.amd && define.amd ? (t._ = n, 
    define(function() {
        return n;
    })) : U ? "object" == typeof module && module && module.exports == U ? (module.exports = n)._ = n : U._ = n : t._ = n;
}(this), function(t) {
    var e, n, r = "0.3.4", i = "hasOwnProperty", o = /[\.\/]/, s = "*", a = function() {}, l = function(t, e) {
        return t - e;
    }, u = {
        n: {}
    }, h = function(t, r) {
        var i, o = n, s = Array.prototype.slice.call(arguments, 2), a = h.listeners(t), u = 0, c = [], f = {}, p = [], d = e;
        e = t, n = 0;
        for (var g = 0, v = a.length; v > g; g++) "zIndex" in a[g] && (c.push(a[g].zIndex), 
        0 > a[g].zIndex && (f[a[g].zIndex] = a[g]));
        for (c.sort(l); 0 > c[u]; ) if (i = f[c[u++]], p.push(i.apply(r, s)), n) return n = o, 
        p;
        for (g = 0; v > g; g++) if (i = a[g], "zIndex" in i) if (i.zIndex == c[u]) {
            if (p.push(i.apply(r, s)), n) break;
            do if (u++, i = f[c[u]], i && p.push(i.apply(r, s)), n) break; while (i);
        } else f[i.zIndex] = i; else if (p.push(i.apply(r, s)), n) break;
        return n = o, e = d, p.length ? p : null;
    };
    h.listeners = function(t) {
        var e, n, r, i, a, l, h, c, f = t.split(o), p = u, d = [ p ], g = [];
        for (i = 0, a = f.length; a > i; i++) {
            for (c = [], l = 0, h = d.length; h > l; l++) for (p = d[l].n, n = [ p[f[i]], p[s] ], 
            r = 2; r--; ) e = n[r], e && (c.push(e), g = g.concat(e.f || []));
            d = c;
        }
        return g;
    }, h.on = function(t, e) {
        for (var n = t.split(o), r = u, i = 0, s = n.length; s > i; i++) r = r.n, !r[n[i]] && (r[n[i]] = {
            n: {}
        }), r = r[n[i]];
        for (r.f = r.f || [], i = 0, s = r.f.length; s > i; i++) if (r.f[i] == e) return a;
        return r.f.push(e), function(t) {
            +t == +t && (e.zIndex = +t);
        };
    }, h.stop = function() {
        n = 1;
    }, h.nt = function(t) {
        return t ? RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e;
    }, h.off = h.unbind = function(t, e) {
        var n, r, a, l, h, c, f, p = t.split(o), d = [ u ];
        for (l = 0, h = p.length; h > l; l++) for (c = 0; d.length > c; c += a.length - 2) {
            if (a = [ c, 1 ], n = d[c].n, p[l] != s) n[p[l]] && a.push(n[p[l]]); else for (r in n) n[i](r) && a.push(n[r]);
            d.splice.apply(d, a);
        }
        for (l = 0, h = d.length; h > l; l++) for (n = d[l]; n.n; ) {
            if (e) {
                if (n.f) {
                    for (c = 0, f = n.f.length; f > c; c++) if (n.f[c] == e) {
                        n.f.splice(c, 1);
                        break;
                    }
                    !n.f.length && delete n.f;
                }
                for (r in n.n) if (n.n[i](r) && n.n[r].f) {
                    var g = n.n[r].f;
                    for (c = 0, f = g.length; f > c; c++) if (g[c] == e) {
                        g.splice(c, 1);
                        break;
                    }
                    !g.length && delete n.n[r].f;
                }
            } else {
                delete n.f;
                for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f;
            }
            n = n.n;
        }
    }, h.once = function(t, e) {
        var n = function() {
            var r = e.apply(this, arguments);
            return h.unbind(t, n), r;
        };
        return h.on(t, n);
    }, h.version = r, h.toString = function() {
        return "You are running Eve " + r;
    }, "undefined" != typeof module && module.exports ? module.exports = h : "undefined" != typeof define ? define("eve", [], function() {
        return h;
    }) : t.eve = h;
}(this), function() {
    function t(t) {
        for (var e = 0; sn.length > e; e++) sn[e].el.paper == t && sn.splice(e--, 1);
    }
    function e(t, e, n, i, s, a) {
        n = Z(n);
        var l, u, h, c, f, p, d = t.ms, g = {}, v = {}, y = {};
        if (i) for (w = 0, _ = sn.length; _ > w; w++) {
            var x = sn[w];
            if (x.el.id == e.id && x.anim == t) {
                x.percent != n ? (sn.splice(w, 1), h = 1) : u = x, e.attr(x.totalOrigin);
                break;
            }
        } else i = +v;
        for (var w = 0, _ = t.percents.length; _ > w; w++) {
            if (t.percents[w] == n || t.percents[w] > i * t.top) {
                n = t.percents[w], f = t.percents[w - 1] || 0, d = d / t.top * (n - f), c = t.percents[w + 1], 
                l = t.anim[n];
                break;
            }
            i && e.attr(t.anim[t.percents[w]]);
        }
        if (l) {
            if (u) u.initstatus = i, u.start = new Date() - u.ms * i; else {
                for (var C in l) if (l[k](C) && (ee[k](C) || e.paper.customAttributes[k](C))) switch (g[C] = e.attr(C), 
                null == g[C] && (g[C] = te[C]), v[C] = l[C], ee[C]) {
                  case W:
                    y[C] = (v[C] - g[C]) / d;
                    break;

                  case "colour":
                    g[C] = m.getRGB(g[C]);
                    var T = m.getRGB(v[C]);
                    y[C] = {
                        r: (T.r - g[C].r) / d,
                        g: (T.g - g[C].g) / d,
                        b: (T.b - g[C].b) / d
                    };
                    break;

                  case "path":
                    var S = je(g[C], v[C]), N = S[1];
                    for (g[C] = S[0], y[C] = [], w = 0, _ = g[C].length; _ > w; w++) {
                        y[C][w] = [ 0 ];
                        for (var A = 1, B = g[C][w].length; B > A; A++) y[C][w][A] = (N[w][A] - g[C][w][A]) / d;
                    }
                    break;

                  case "transform":
                    var L = e._, j = Oe(L[C], v[C]);
                    if (j) for (g[C] = j.from, v[C] = j.to, y[C] = [], y[C].real = !0, w = 0, _ = g[C].length; _ > w; w++) for (y[C][w] = [ g[C][w][0] ], 
                    A = 1, B = g[C][w].length; B > A; A++) y[C][w][A] = (v[C][w][A] - g[C][w][A]) / d; else {
                        var H = e.matrix || new o(), D = {
                            _: {
                                transform: L.transform
                            },
                            getBBox: function() {
                                return e.getBBox(1);
                            }
                        };
                        g[C] = [ H.a, H.b, H.c, H.d, H.e, H.f ], Pe(D, v[C]), v[C] = D._.transform, y[C] = [ (D.matrix.a - H.a) / d, (D.matrix.b - H.b) / d, (D.matrix.c - H.c) / d, (D.matrix.d - H.d) / d, (D.matrix.e - H.e) / d, (D.matrix.f - H.f) / d ];
                    }
                    break;

                  case "csv":
                    var P = M(l[C])[F](b), I = M(g[C])[F](b);
                    if ("clip-rect" == C) for (g[C] = I, y[C] = [], w = I.length; w--; ) y[C][w] = (P[w] - g[C][w]) / d;
                    v[C] = P;
                    break;

                  default:
                    for (P = [][E](l[C]), I = [][E](g[C]), y[C] = [], w = e.paper.customAttributes[C].length; w--; ) y[C][w] = ((P[w] || 0) - (I[w] || 0)) / d;
                }
                var O = l.easing, z = m.easing_formulas[O];
                if (!z) if (z = M(O).match(U), z && 5 == z.length) {
                    var R = z;
                    z = function(t) {
                        return r(t, +R[1], +R[2], +R[3], +R[4], d);
                    };
                } else z = ce;
                if (p = l.start || t.start || +new Date(), x = {
                    anim: t,
                    percent: n,
                    timestamp: p,
                    start: p + (t.del || 0),
                    status: 0,
                    initstatus: i || 0,
                    stop: !1,
                    ms: d,
                    easing: z,
                    from: g,
                    diff: y,
                    to: v,
                    el: e,
                    callback: l.callback,
                    prev: f,
                    next: c,
                    repeat: a || t.times,
                    origin: e.attr(),
                    totalOrigin: s
                }, sn.push(x), i && !u && !h && (x.stop = !0, x.start = new Date() - d * i, 1 == sn.length)) return ln();
                h && (x.start = new Date() - x.ms * i), 1 == sn.length && an(ln);
            }
            eve("raphael.anim.start." + e.id, e, t);
        }
    }
    function n(t, e) {
        var n = [], r = {};
        if (this.ms = e, this.times = 1, t) {
            for (var i in t) t[k](i) && (r[Z(i)] = t[i], n.push(Z(i)));
            n.sort(ue);
        }
        this.anim = r, this.top = n[n.length - 1], this.percents = n;
    }
    function r(t, e, n, r, i, o) {
        function s(t, e) {
            var n, r, i, o, s, a;
            for (i = t, a = 0; 8 > a; a++) {
                if (o = l(i) - t, e > z(o)) return i;
                if (s = (3 * c * i + 2 * h) * i + u, 1e-6 > z(s)) break;
                i -= o / s;
            }
            if (n = 0, r = 1, i = t, n > i) return n;
            if (i > r) return r;
            for (;r > n; ) {
                if (o = l(i), e > z(o - t)) return i;
                t > o ? n = i : r = i, i = (r - n) / 2 + n;
            }
            return i;
        }
        function a(t, e) {
            var n = s(t, e);
            return ((d * n + p) * n + f) * n;
        }
        function l(t) {
            return ((c * t + h) * t + u) * t;
        }
        var u = 3 * e, h = 3 * (r - e) - u, c = 1 - u - h, f = 3 * n, p = 3 * (i - n) - f, d = 1 - f - p;
        return a(t, 1 / (200 * o));
    }
    function i() {
        return this.x + L + this.y + L + this.width + " × " + this.height;
    }
    function o(t, e, n, r, i, o) {
        null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, 
        this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
    }
    function s(t, e, n) {
        t = m._path2curve(t), e = m._path2curve(e);
        for (var r, i, o, s, l, u, h, c, f, p, d = n ? 0 : [], g = 0, v = t.length; v > g; g++) {
            var y = t[g];
            if ("M" == y[0]) r = l = y[1], i = u = y[2]; else {
                "C" == y[0] ? (f = [ r, i ].concat(y.slice(1)), r = f[6], i = f[7]) : (f = [ r, i, r, i, l, u, l, u ], 
                r = l, i = u);
                for (var x = 0, b = e.length; b > x; x++) {
                    var w = e[x];
                    if ("M" == w[0]) o = h = w[1], s = c = w[2]; else {
                        "C" == w[0] ? (p = [ o, s ].concat(w.slice(1)), o = p[6], s = p[7]) : (p = [ o, s, o, s, h, c, h, c ], 
                        o = h, s = c);
                        var _ = a(f, p, n);
                        if (n) d += _; else {
                            for (var k = 0, C = _.length; C > k; k++) _[k].segment1 = g, _[k].segment2 = x, 
                            _[k].bez1 = f, _[k].bez2 = p;
                            d = d.concat(_);
                        }
                    }
                }
            }
        }
        return d;
    }
    function a(t, e, n) {
        var r = m.bezierBBox(t), i = m.bezierBBox(e);
        if (!m.isBBoxIntersect(r, i)) return n ? 0 : [];
        for (var o = h.apply(0, t), s = h.apply(0, e), a = ~~(o / 5), u = ~~(s / 5), c = [], f = [], p = {}, d = n ? 0 : [], g = 0; a + 1 > g; g++) {
            var v = m.findDotsAtSegment.apply(m, t.concat(g / a));
            c.push({
                x: v.x,
                y: v.y,
                t: g / a
            });
        }
        for (g = 0; u + 1 > g; g++) v = m.findDotsAtSegment.apply(m, e.concat(g / u)), f.push({
            x: v.x,
            y: v.y,
            t: g / u
        });
        for (g = 0; a > g; g++) for (var y = 0; u > y; y++) {
            var x = c[g], b = c[g + 1], w = f[y], _ = f[y + 1], k = .001 > z(b.x - x.x) ? "y" : "x", C = .001 > z(_.x - w.x) ? "y" : "x", T = l(x.x, x.y, b.x, b.y, w.x, w.y, _.x, _.y);
            if (T) {
                if (p[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
                p[T.x.toFixed(4)] = T.y.toFixed(4);
                var S = x.t + z((T[k] - x[k]) / (b[k] - x[k])) * (b.t - x.t), N = w.t + z((T[C] - w[C]) / (_[C] - w[C])) * (_.t - w.t);
                S >= 0 && 1 >= S && N >= 0 && 1 >= N && (n ? d++ : d.push({
                    x: T.x,
                    y: T.y,
                    t1: S,
                    t2: N
                }));
            }
        }
        return d;
    }
    function l(t, e, n, r, i, o, s, a) {
        if (!(I(t, n) < O(i, s) || O(t, n) > I(i, s) || I(e, r) < O(o, a) || O(e, r) > I(o, a))) {
            var l = (t * r - e * n) * (i - s) - (t - n) * (i * a - o * s), u = (t * r - e * n) * (o - a) - (e - r) * (i * a - o * s), h = (t - n) * (o - a) - (e - r) * (i - s);
            if (!h) return;
            var c = l / h, f = u / h, p = +c.toFixed(2), d = +f.toFixed(2);
            if (+O(t, n).toFixed(2) > p || p > +I(t, n).toFixed(2) || +O(i, s).toFixed(2) > p || p > +I(i, s).toFixed(2) || +O(e, r).toFixed(2) > d || d > +I(e, r).toFixed(2) || +O(o, a).toFixed(2) > d || d > +I(o, a).toFixed(2)) return;
            return {
                x: c,
                y: f
            };
        }
    }
    function u(t, e, n, r, i, o, s, a, l) {
        if (!(0 > l || l > h(t, e, n, r, i, o, s, a))) {
            var u, c = 1, f = c / 2, p = c - f, d = .01;
            for (u = h(t, e, n, r, i, o, s, a, p); z(u - l) > d; ) f /= 2, p += (l > u ? 1 : -1) * f, 
            u = h(t, e, n, r, i, o, s, a, p);
            return p;
        }
    }
    function h(t, e, n, r, i, o, s, a, l) {
        null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
        for (var u = l / 2, h = 12, f = [ -.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816 ], p = [ .2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472 ], d = 0, g = 0; h > g; g++) {
            var v = u * f[g] + u, m = c(v, t, n, i, s), y = c(v, e, r, o, a), x = m * m + y * y;
            d += p[g] * P.sqrt(x);
        }
        return u * d;
    }
    function c(t, e, n, r, i) {
        var o = -3 * e + 9 * n - 9 * r + 3 * i, s = t * o + 6 * e - 12 * n + 6 * r;
        return t * s - 3 * e + 3 * n;
    }
    function f(t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
            var o = [ {
                x: +t[r - 2],
                y: +t[r - 1]
            }, {
                x: +t[r],
                y: +t[r + 1]
            }, {
                x: +t[r + 2],
                y: +t[r + 3]
            }, {
                x: +t[r + 4],
                y: +t[r + 5]
            } ];
            e ? r ? i - 4 == r ? o[3] = {
                x: +t[0],
                y: +t[1]
            } : i - 2 == r && (o[2] = {
                x: +t[0],
                y: +t[1]
            }, o[3] = {
                x: +t[2],
                y: +t[3]
            }) : o[0] = {
                x: +t[i - 2],
                y: +t[i - 1]
            } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                x: +t[r],
                y: +t[r + 1]
            }), n.push([ "C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y ]);
        }
        return n;
    }
    function p() {
        return this.hex;
    }
    function d(t, e, n) {
        function r() {
            var i = Array.prototype.slice.call(arguments, 0), o = i.join("␀"), s = r.cache = r.cache || {}, a = r.count = r.count || [];
            return s[k](o) ? (g(a, o), n ? n(s[o]) : s[o]) : (a.length >= 1e3 && delete s[a.shift()], 
            a.push(o), s[o] = t[N](e, i), n ? n(s[o]) : s[o]);
        }
        return r;
    }
    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return t.push(t.splice(n, 1)[0]);
    }
    function v(t) {
        if (Object(t) !== t) return t;
        var e = new t.constructor();
        for (var n in t) t[k](n) && (e[n] = v(t[n]));
        return e;
    }
    function m(t) {
        if (m.is(t, "function")) return y ? t() : eve.on("raphael.DOMload", t);
        if (m.is(t, X)) return m._engine.create[N](m, t.splice(0, 3 + m.is(t[0], W))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (m.is(e[e.length - 1], "function")) {
            var n = e.pop();
            return y ? n.call(m._engine.create[N](m, e)) : eve.on("raphael.DOMload", function() {
                n.call(m._engine.create[N](m, e));
            });
        }
        return m._engine.create[N](m, arguments);
    }
    m.version = "2.1.0", m.eve = eve;
    var y, x, b = /[, ]+/, w = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, _ = /\{(\d+)\}/g, k = "hasOwnProperty", C = {
        doc: document,
        win: window
    }, T = {
        was: Object.prototype[k].call(C.win, "Raphael"),
        is: C.win.Raphael
    }, S = function() {
        this.ca = this.customAttributes = {};
    }, N = "apply", E = "concat", A = "createTouch" in C.doc, B = "", L = " ", M = String, F = "split", j = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](L), H = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, D = M.prototype.toLowerCase, P = Math, I = P.max, O = P.min, z = P.abs, R = P.pow, q = P.PI, W = "number", $ = "string", X = "array", Y = Object.prototype.toString, V = (m._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, 
    /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), G = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }, U = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, Q = P.round, Z = parseFloat, J = parseInt, K = M.prototype.toUpperCase, te = m._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, ee = m._availableAnimAttrs = {
        blur: W,
        "clip-rect": "csv",
        cx: W,
        cy: W,
        fill: "colour",
        "fill-opacity": W,
        "font-size": W,
        height: W,
        opacity: W,
        path: "path",
        r: W,
        rx: W,
        ry: W,
        stroke: "colour",
        "stroke-opacity": W,
        "stroke-width": W,
        transform: "transform",
        width: W,
        x: W,
        y: W
    }, ne = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, re = {
        hs: 1,
        rg: 1
    }, ie = /,?([achlmqrstvxz]),?/gi, oe = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, se = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ae = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, le = (m._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, 
    {}), ue = function(t, e) {
        return Z(t) - Z(e);
    }, he = function() {}, ce = function(t) {
        return t;
    }, fe = m._rectPath = function(t, e, n, r, i) {
        return i ? [ [ "M", t + i, e ], [ "l", n - 2 * i, 0 ], [ "a", i, i, 0, 0, 1, i, i ], [ "l", 0, r - 2 * i ], [ "a", i, i, 0, 0, 1, -i, i ], [ "l", 2 * i - n, 0 ], [ "a", i, i, 0, 0, 1, -i, -i ], [ "l", 0, 2 * i - r ], [ "a", i, i, 0, 0, 1, i, -i ], [ "z" ] ] : [ [ "M", t, e ], [ "l", n, 0 ], [ "l", 0, r ], [ "l", -n, 0 ], [ "z" ] ];
    }, pe = function(t, e, n, r) {
        return null == r && (r = n), [ [ "M", t, e ], [ "m", 0, -r ], [ "a", n, r, 0, 1, 1, 0, 2 * r ], [ "a", n, r, 0, 1, 1, 0, -2 * r ], [ "z" ] ];
    }, de = m._getPath = {
        path: function(t) {
            return t.attr("path");
        },
        circle: function(t) {
            var e = t.attrs;
            return pe(e.cx, e.cy, e.r);
        },
        ellipse: function(t) {
            var e = t.attrs;
            return pe(e.cx, e.cy, e.rx, e.ry);
        },
        rect: function(t) {
            var e = t.attrs;
            return fe(e.x, e.y, e.width, e.height, e.r);
        },
        image: function(t) {
            var e = t.attrs;
            return fe(e.x, e.y, e.width, e.height);
        },
        text: function(t) {
            var e = t._getBBox();
            return fe(e.x, e.y, e.width, e.height);
        }
    }, ge = m.mapPath = function(t, e) {
        if (!e) return t;
        var n, r, i, o, s, a, l;
        for (t = je(t), i = 0, s = t.length; s > i; i++) for (l = t[i], o = 1, a = l.length; a > o; o += 2) n = e.x(l[o], l[o + 1]), 
        r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
        return t;
    };
    if (m._g = C, m.type = C.win.SVGAngle || C.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", 
    "VML" == m.type) {
        var ve, me = C.doc.createElement("div");
        if (me.innerHTML = '<v:shape adj="1"/>', ve = me.firstChild, ve.style.behavior = "url(#default#VML)", 
        !ve || "object" != typeof ve.adj) return m.type = B;
        me = null;
    }
    m.svg = !(m.vml = "VML" == m.type), m._Paper = S, m.fn = x = S.prototype = m.prototype, 
    m._id = 0, m._oid = 0, m.is = function(t, e) {
        return e = D.call(e), "finite" == e ? !G[k](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || Y.call(t).slice(8, -1).toLowerCase() == e;
    }, m.angle = function(t, e, n, r, i, o) {
        if (null == i) {
            var s = t - n, a = e - r;
            return s || a ? (180 + 180 * P.atan2(-a, -s) / q + 360) % 360 : 0;
        }
        return m.angle(t, e, i, o) - m.angle(n, r, i, o);
    }, m.rad = function(t) {
        return t % 360 * q / 180;
    }, m.deg = function(t) {
        return 180 * t / q % 360;
    }, m.snapTo = function(t, e, n) {
        if (n = m.is(n, "finite") ? n : 10, m.is(t, X)) {
            for (var r = t.length; r--; ) if (n >= z(t[r] - e)) return t[r];
        } else {
            t = +t;
            var i = e % t;
            if (n > i) return e - i;
            if (i > t - n) return e - i + t;
        }
        return e;
    }, m.createUUID = function(t, e) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase();
        };
    }(/[xy]/g, function(t) {
        var e = 0 | 16 * P.random(), n = "x" == t ? e : 8 | 3 & e;
        return n.toString(16);
    }), m.setWindow = function(t) {
        eve("raphael.setWindow", m, C.win, t), C.win = t, C.doc = C.win.document, m._engine.initWin && m._engine.initWin(C.win);
    };
    var ye = function(t) {
        if (m.vml) {
            var e, n = /^\s+|\s+$/g;
            try {
                var r = new ActiveXObject("htmlfile");
                r.write("<body>"), r.close(), e = r.body;
            } catch (i) {
                e = createPopup().document.body;
            }
            var o = e.createTextRange();
            ye = d(function(t) {
                try {
                    e.style.color = M(t).replace(n, B);
                    var r = o.queryCommandValue("ForeColor");
                    return r = (255 & r) << 16 | 65280 & r | (16711680 & r) >>> 16, "#" + ("000000" + r.toString(16)).slice(-6);
                } catch (i) {
                    return "none";
                }
            });
        } else {
            var s = C.doc.createElement("i");
            s.title = "Raphaël Colour Picker", s.style.display = "none", C.doc.body.appendChild(s), 
            ye = d(function(t) {
                return s.style.color = t, C.doc.defaultView.getComputedStyle(s, B).getPropertyValue("color");
            });
        }
        return ye(t);
    }, xe = function() {
        return "hsb(" + [ this.h, this.s, this.b ] + ")";
    }, be = function() {
        return "hsl(" + [ this.h, this.s, this.l ] + ")";
    }, we = function() {
        return this.hex;
    }, _e = function(t, e, n) {
        if (null == e && m.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, 
        e = t.g, t = t.r), null == e && m.is(t, $)) {
            var r = m.getRGB(t);
            t = r.r, e = r.g, n = r.b;
        }
        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [ t, e, n ];
    }, ke = function(t, e, n, r) {
        t *= 255, e *= 255, n *= 255;
        var i = {
            r: t,
            g: e,
            b: n,
            hex: m.rgb(t, e, n),
            toString: we
        };
        return m.is(r, "finite") && (i.opacity = r), i;
    };
    m.color = function(t) {
        var e;
        return m.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = m.hsb2rgb(t), 
        t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : m.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = m.hsl2rgb(t), 
        t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (m.is(t, "string") && (t = m.getRGB(t)), 
        m.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = m.rgb2hsl(t), t.h = e.h, 
        t.s = e.s, t.l = e.l, e = m.rgb2hsb(t), t.v = e.b) : (t = {
            hex: "none"
        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = we, t;
    }, m.hsb2rgb = function(t, e, n, r) {
        this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, 
        r = t.o), t *= 360;
        var i, o, s, a, l;
        return t = t % 360 / 60, l = n * e, a = l * (1 - z(t % 2 - 1)), i = o = s = n - l, 
        t = ~~t, i += [ l, a, 0, 0, a, l ][t], o += [ a, l, l, a, 0, 0 ][t], s += [ 0, 0, a, l, l, a ][t], 
        ke(i, o, s, r);
    }, m.hsl2rgb = function(t, e, n, r) {
        this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), 
        (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
        var i, o, s, a, l;
        return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), a = l * (1 - z(t % 2 - 1)), 
        i = o = s = n - l / 2, t = ~~t, i += [ l, a, 0, 0, a, l ][t], o += [ a, l, l, a, 0, 0 ][t], 
        s += [ 0, 0, a, l, l, a ][t], ke(i, o, s, r);
    }, m.rgb2hsb = function(t, e, n) {
        n = _e(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, s;
        return o = I(t, e, n), s = o - O(t, e, n), r = 0 == s ? null : o == t ? (e - n) / s : o == e ? (n - t) / s + 2 : (t - e) / s + 4, 
        r = 60 * ((r + 360) % 6) / 360, i = 0 == s ? 0 : s / o, {
            h: r,
            s: i,
            b: o,
            toString: xe
        };
    }, m.rgb2hsl = function(t, e, n) {
        n = _e(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, s, a, l;
        return s = I(t, e, n), a = O(t, e, n), l = s - a, r = 0 == l ? null : s == t ? (e - n) / l : s == e ? (n - t) / l + 2 : (t - e) / l + 4, 
        r = 60 * ((r + 360) % 6) / 360, o = (s + a) / 2, i = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o), 
        {
            h: r,
            s: i,
            l: o,
            toString: be
        };
    }, m._path2string = function() {
        return this.join(",").replace(ie, "$1");
    }, m._preload = function(t, e) {
        var n = C.doc.createElement("img");
        n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
            e.call(this), this.onload = null, C.doc.body.removeChild(this);
        }, n.onerror = function() {
            C.doc.body.removeChild(this);
        }, C.doc.body.appendChild(n), n.src = t;
    }, m.getRGB = d(function(t) {
        if (!t || (t = M(t)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: p
        };
        if ("none" == t) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: p
        };
        !re[k](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = ye(t));
        var e, n, r, i, o, s, a = t.match(V);
        return a ? (a[2] && (r = J(a[2].substring(5), 16), n = J(a[2].substring(3, 5), 16), 
        e = J(a[2].substring(1, 3), 16)), a[3] && (r = J((o = a[3].charAt(3)) + o, 16), 
        n = J((o = a[3].charAt(2)) + o, 16), e = J((o = a[3].charAt(1)) + o, 16)), a[4] && (s = a[4][F](ne), 
        e = Z(s[0]), "%" == s[0].slice(-1) && (e *= 2.55), n = Z(s[1]), "%" == s[1].slice(-1) && (n *= 2.55), 
        r = Z(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (i = Z(s[3])), 
        s[3] && "%" == s[3].slice(-1) && (i /= 100)), a[5] ? (s = a[5][F](ne), e = Z(s[0]), 
        "%" == s[0].slice(-1) && (e *= 2.55), n = Z(s[1]), "%" == s[1].slice(-1) && (n *= 2.55), 
        r = Z(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (e /= 360), 
        "hsba" == a[1].toLowerCase().slice(0, 4) && (i = Z(s[3])), s[3] && "%" == s[3].slice(-1) && (i /= 100), 
        m.hsb2rgb(e, n, r, i)) : a[6] ? (s = a[6][F](ne), e = Z(s[0]), "%" == s[0].slice(-1) && (e *= 2.55), 
        n = Z(s[1]), "%" == s[1].slice(-1) && (n *= 2.55), r = Z(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), 
        ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (i = Z(s[3])), 
        s[3] && "%" == s[3].slice(-1) && (i /= 100), m.hsl2rgb(e, n, r, i)) : (a = {
            r: e,
            g: n,
            b: r,
            toString: p
        }, a.hex = "#" + (16777216 | r | n << 8 | e << 16).toString(16).slice(1), m.is(i, "finite") && (a.opacity = i), 
        a)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: p
        };
    }, m), m.hsb = d(function(t, e, n) {
        return m.hsb2rgb(t, e, n).hex;
    }), m.hsl = d(function(t, e, n) {
        return m.hsl2rgb(t, e, n).hex;
    }), m.rgb = d(function(t, e, n) {
        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1);
    }), m.getColor = function(t) {
        var e = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: t || .75
        }, n = this.hsb2rgb(e.h, e.s, e.b);
        return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, 0 >= e.s && (this.getColor.start = {
            h: 0,
            s: 1,
            b: e.b
        })), n.hex;
    }, m.getColor.reset = function() {
        delete this.start;
    }, m.parsePathString = function(t) {
        if (!t) return null;
        var e = Ce(t);
        if (e.arr) return Se(e.arr);
        var n = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, r = [];
        return m.is(t, X) && m.is(t[0], X) && (r = Se(t)), r.length || M(t).replace(oe, function(t, e, i) {
            var o = [], s = e.toLowerCase();
            if (i.replace(ae, function(t, e) {
                e && o.push(+e);
            }), "m" == s && o.length > 2 && (r.push([ e ][E](o.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), 
            "r" == s) r.push([ e ][E](o)); else for (;o.length >= n[s] && (r.push([ e ][E](o.splice(0, n[s]))), 
            n[s]); ) ;
        }), r.toString = m._path2string, e.arr = Se(r), r;
    }, m.parseTransformString = d(function(t) {
        if (!t) return null;
        var e = [];
        return m.is(t, X) && m.is(t[0], X) && (e = Se(t)), e.length || M(t).replace(se, function(t, n, r) {
            var i = [];
            D.call(n), r.replace(ae, function(t, e) {
                e && i.push(+e);
            }), e.push([ n ][E](i));
        }), e.toString = m._path2string, e;
    });
    var Ce = function(t) {
        var e = Ce.ps = Ce.ps || {};
        return e[t] ? e[t].sleep = 100 : e[t] = {
            sleep: 100
        }, setTimeout(function() {
            for (var n in e) e[k](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n]);
        }), e[t];
    };
    m.findDotsAtSegment = function(t, e, n, r, i, o, s, a, l) {
        var u = 1 - l, h = R(u, 3), c = R(u, 2), f = l * l, p = f * l, d = h * t + 3 * c * l * n + 3 * u * l * l * i + p * s, g = h * e + 3 * c * l * r + 3 * u * l * l * o + p * a, v = t + 2 * l * (n - t) + f * (i - 2 * n + t), m = e + 2 * l * (r - e) + f * (o - 2 * r + e), y = n + 2 * l * (i - n) + f * (s - 2 * i + n), x = r + 2 * l * (o - r) + f * (a - 2 * o + r), b = u * t + l * n, w = u * e + l * r, _ = u * i + l * s, k = u * o + l * a, C = 90 - 180 * P.atan2(v - y, m - x) / q;
        return (v > y || x > m) && (C += 180), {
            x: d,
            y: g,
            m: {
                x: v,
                y: m
            },
            n: {
                x: y,
                y: x
            },
            start: {
                x: b,
                y: w
            },
            end: {
                x: _,
                y: k
            },
            alpha: C
        };
    }, m.bezierBBox = function(t, e, n, r, i, o, s, a) {
        m.is(t, "array") || (t = [ t, e, n, r, i, o, s, a ]);
        var l = Fe.apply(null, t);
        return {
            x: l.min.x,
            y: l.min.y,
            x2: l.max.x,
            y2: l.max.y,
            width: l.max.x - l.min.x,
            height: l.max.y - l.min.y
        };
    }, m.isPointInsideBBox = function(t, e, n) {
        return e >= t.x && t.x2 >= e && n >= t.y && t.y2 >= n;
    }, m.isBBoxIntersect = function(t, e) {
        var n = m.isPointInsideBBox;
        return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
    }, m.pathIntersection = function(t, e) {
        return s(t, e);
    }, m.pathIntersectionNumber = function(t, e) {
        return s(t, e, 1);
    }, m.isPointInsidePath = function(t, e, n) {
        var r = m.pathBBox(t);
        return m.isPointInsideBBox(r, e, n) && 1 == s(t, [ [ "M", e, n ], [ "H", r.x2 + 10 ] ], 1) % 2;
    }, m._removedFactory = function(t) {
        return function() {
            eve("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
        };
    };
    var Te = m.pathBBox = function(t) {
        var e = Ce(t);
        if (e.bbox) return e.bbox;
        if (!t) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        t = je(t);
        for (var n, r = 0, i = 0, o = [], s = [], a = 0, l = t.length; l > a; a++) if (n = t[a], 
        "M" == n[0]) r = n[1], i = n[2], o.push(r), s.push(i); else {
            var u = Fe(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
            o = o[E](u.min.x, u.max.x), s = s[E](u.min.y, u.max.y), r = n[5], i = n[6];
        }
        var h = O[N](0, o), c = O[N](0, s), f = I[N](0, o), p = I[N](0, s), d = {
            x: h,
            y: c,
            x2: f,
            y2: p,
            width: f - h,
            height: p - c
        };
        return e.bbox = v(d), d;
    }, Se = function(t) {
        var e = v(t);
        return e.toString = m._path2string, e;
    }, Ne = m._pathToRelative = function(t) {
        var e = Ce(t);
        if (e.rel) return Se(e.rel);
        m.is(t, X) && m.is(t && t[0], X) || (t = m.parsePathString(t));
        var n = [], r = 0, i = 0, o = 0, s = 0, a = 0;
        "M" == t[0][0] && (r = t[0][1], i = t[0][2], o = r, s = i, a++, n.push([ "M", r, i ]));
        for (var l = a, u = t.length; u > l; l++) {
            var h = n[l] = [], c = t[l];
            if (c[0] != D.call(c[0])) switch (h[0] = D.call(c[0]), h[0]) {
              case "a":
                h[1] = c[1], h[2] = c[2], h[3] = c[3], h[4] = c[4], h[5] = c[5], h[6] = +(c[6] - r).toFixed(3), 
                h[7] = +(c[7] - i).toFixed(3);
                break;

              case "v":
                h[1] = +(c[1] - i).toFixed(3);
                break;

              case "m":
                o = c[1], s = c[2];

              default:
                for (var f = 1, p = c.length; p > f; f++) h[f] = +(c[f] - (f % 2 ? r : i)).toFixed(3);
            } else {
                h = n[l] = [], "m" == c[0] && (o = c[1] + r, s = c[2] + i);
                for (var d = 0, g = c.length; g > d; d++) n[l][d] = c[d];
            }
            var v = n[l].length;
            switch (n[l][0]) {
              case "z":
                r = o, i = s;
                break;

              case "h":
                r += +n[l][v - 1];
                break;

              case "v":
                i += +n[l][v - 1];
                break;

              default:
                r += +n[l][v - 2], i += +n[l][v - 1];
            }
        }
        return n.toString = m._path2string, e.rel = Se(n), n;
    }, Ee = m._pathToAbsolute = function(t) {
        var e = Ce(t);
        if (e.abs) return Se(e.abs);
        if (m.is(t, X) && m.is(t && t[0], X) || (t = m.parsePathString(t)), !t || !t.length) return [ [ "M", 0, 0 ] ];
        var n = [], r = 0, i = 0, o = 0, s = 0, a = 0;
        "M" == t[0][0] && (r = +t[0][1], i = +t[0][2], o = r, s = i, a++, n[0] = [ "M", r, i ]);
        for (var l, u, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c = a, p = t.length; p > c; c++) {
            if (n.push(l = []), u = t[c], u[0] != K.call(u[0])) switch (l[0] = K.call(u[0]), 
            l[0]) {
              case "A":
                l[1] = u[1], l[2] = u[2], l[3] = u[3], l[4] = u[4], l[5] = u[5], l[6] = +(u[6] + r), 
                l[7] = +(u[7] + i);
                break;

              case "V":
                l[1] = +u[1] + i;
                break;

              case "H":
                l[1] = +u[1] + r;
                break;

              case "R":
                for (var d = [ r, i ][E](u.slice(1)), g = 2, v = d.length; v > g; g++) d[g] = +d[g] + r, 
                d[++g] = +d[g] + i;
                n.pop(), n = n[E](f(d, h));
                break;

              case "M":
                o = +u[1] + r, s = +u[2] + i;

              default:
                for (g = 1, v = u.length; v > g; g++) l[g] = +u[g] + (g % 2 ? r : i);
            } else if ("R" == u[0]) d = [ r, i ][E](u.slice(1)), n.pop(), n = n[E](f(d, h)), 
            l = [ "R" ][E](u.slice(-2)); else for (var y = 0, x = u.length; x > y; y++) l[y] = u[y];
            switch (l[0]) {
              case "Z":
                r = o, i = s;
                break;

              case "H":
                r = l[1];
                break;

              case "V":
                i = l[1];
                break;

              case "M":
                o = l[l.length - 2], s = l[l.length - 1];

              default:
                r = l[l.length - 2], i = l[l.length - 1];
            }
        }
        return n.toString = m._path2string, e.abs = Se(n), n;
    }, Ae = function(t, e, n, r) {
        return [ t, e, n, r, n, r ];
    }, Be = function(t, e, n, r, i, o) {
        var s = 1 / 3, a = 2 / 3;
        return [ s * t + a * n, s * e + a * r, s * i + a * n, s * o + a * r, i, o ];
    }, Le = function(t, e, n, r, i, o, s, a, l, u) {
        var h, c = 120 * q / 180, f = q / 180 * (+i || 0), p = [], g = d(function(t, e, n) {
            var r = t * P.cos(n) - e * P.sin(n), i = t * P.sin(n) + e * P.cos(n);
            return {
                x: r,
                y: i
            };
        });
        if (u) C = u[0], T = u[1], _ = u[2], k = u[3]; else {
            h = g(t, e, -f), t = h.x, e = h.y, h = g(a, l, -f), a = h.x, l = h.y;
            var v = (P.cos(q / 180 * i), P.sin(q / 180 * i), (t - a) / 2), m = (e - l) / 2, y = v * v / (n * n) + m * m / (r * r);
            y > 1 && (y = P.sqrt(y), n = y * n, r = y * r);
            var x = n * n, b = r * r, w = (o == s ? -1 : 1) * P.sqrt(z((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))), _ = w * n * m / r + (t + a) / 2, k = w * -r * v / n + (e + l) / 2, C = P.asin(((e - k) / r).toFixed(9)), T = P.asin(((l - k) / r).toFixed(9));
            C = _ > t ? q - C : C, T = _ > a ? q - T : T, 0 > C && (C = 2 * q + C), 0 > T && (T = 2 * q + T), 
            s && C > T && (C -= 2 * q), !s && T > C && (T -= 2 * q);
        }
        var S = T - C;
        if (z(S) > c) {
            var N = T, A = a, B = l;
            T = C + c * (s && T > C ? 1 : -1), a = _ + n * P.cos(T), l = k + r * P.sin(T), p = Le(a, l, n, r, i, 0, s, A, B, [ T, N, _, k ]);
        }
        S = T - C;
        var L = P.cos(C), M = P.sin(C), j = P.cos(T), H = P.sin(T), D = P.tan(S / 4), I = 4 / 3 * n * D, O = 4 / 3 * r * D, R = [ t, e ], W = [ t + I * M, e - O * L ], $ = [ a + I * H, l - O * j ], X = [ a, l ];
        if (W[0] = 2 * R[0] - W[0], W[1] = 2 * R[1] - W[1], u) return [ W, $, X ][E](p);
        p = [ W, $, X ][E](p).join()[F](",");
        for (var Y = [], V = 0, G = p.length; G > V; V++) Y[V] = V % 2 ? g(p[V - 1], p[V], f).y : g(p[V], p[V + 1], f).x;
        return Y;
    }, Me = function(t, e, n, r, i, o, s, a, l) {
        var u = 1 - l;
        return {
            x: R(u, 3) * t + 3 * R(u, 2) * l * n + 3 * u * l * l * i + R(l, 3) * s,
            y: R(u, 3) * e + 3 * R(u, 2) * l * r + 3 * u * l * l * o + R(l, 3) * a
        };
    }, Fe = d(function(t, e, n, r, i, o, s, a) {
        var l, u = i - 2 * n + t - (s - 2 * i + n), h = 2 * (n - t) - 2 * (i - n), c = t - n, f = (-h + P.sqrt(h * h - 4 * u * c)) / 2 / u, p = (-h - P.sqrt(h * h - 4 * u * c)) / 2 / u, d = [ e, a ], g = [ t, s ];
        return z(f) > "1e12" && (f = .5), z(p) > "1e12" && (p = .5), f > 0 && 1 > f && (l = Me(t, e, n, r, i, o, s, a, f), 
        g.push(l.x), d.push(l.y)), p > 0 && 1 > p && (l = Me(t, e, n, r, i, o, s, a, p), 
        g.push(l.x), d.push(l.y)), u = o - 2 * r + e - (a - 2 * o + r), h = 2 * (r - e) - 2 * (o - r), 
        c = e - r, f = (-h + P.sqrt(h * h - 4 * u * c)) / 2 / u, p = (-h - P.sqrt(h * h - 4 * u * c)) / 2 / u, 
        z(f) > "1e12" && (f = .5), z(p) > "1e12" && (p = .5), f > 0 && 1 > f && (l = Me(t, e, n, r, i, o, s, a, f), 
        g.push(l.x), d.push(l.y)), p > 0 && 1 > p && (l = Me(t, e, n, r, i, o, s, a, p), 
        g.push(l.x), d.push(l.y)), {
            min: {
                x: O[N](0, g),
                y: O[N](0, d)
            },
            max: {
                x: I[N](0, g),
                y: I[N](0, d)
            }
        };
    }), je = m._path2curve = d(function(t, e) {
        var n = !e && Ce(t);
        if (!e && n.curve) return Se(n.curve);
        for (var r = Ee(t), i = e && Ee(e), o = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, s = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, a = (function(t, e) {
            var n, r;
            if (!t) return [ "C", e.x, e.y, e.x, e.y, e.x, e.y ];
            switch (!(t[0] in {
                T: 1,
                Q: 1
            }) && (e.qx = e.qy = null), t[0]) {
              case "M":
                e.X = t[1], e.Y = t[2];
                break;

              case "A":
                t = [ "C" ][E](Le[N](0, [ e.x, e.y ][E](t.slice(1))));
                break;

              case "S":
                n = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = [ "C", n, r ][E](t.slice(1));
                break;

              case "T":
                e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = [ "C" ][E](Be(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                break;

              case "Q":
                e.qx = t[1], e.qy = t[2], t = [ "C" ][E](Be(e.x, e.y, t[1], t[2], t[3], t[4]));
                break;

              case "L":
                t = [ "C" ][E](Ae(e.x, e.y, t[1], t[2]));
                break;

              case "H":
                t = [ "C" ][E](Ae(e.x, e.y, t[1], e.y));
                break;

              case "V":
                t = [ "C" ][E](Ae(e.x, e.y, e.x, t[1]));
                break;

              case "Z":
                t = [ "C" ][E](Ae(e.x, e.y, e.X, e.Y));
            }
            return t;
        }), l = function(t, e) {
            if (t[e].length > 7) {
                t[e].shift();
                for (var n = t[e]; n.length; ) t.splice(e++, 0, [ "C" ][E](n.splice(0, 6)));
                t.splice(e, 1), c = I(r.length, i && i.length || 0);
            }
        }, u = function(t, e, n, o, s) {
            t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, [ "M", o.x, o.y ]), 
            n.bx = 0, n.by = 0, n.x = t[s][1], n.y = t[s][2], c = I(r.length, i && i.length || 0));
        }, h = 0, c = I(r.length, i && i.length || 0); c > h; h++) {
            r[h] = a(r[h], o), l(r, h), i && (i[h] = a(i[h], s)), i && l(i, h), u(r, i, o, s, h), 
            u(i, r, s, o, h);
            var f = r[h], p = i && i[h], d = f.length, g = i && p.length;
            o.x = f[d - 2], o.y = f[d - 1], o.bx = Z(f[d - 4]) || o.x, o.by = Z(f[d - 3]) || o.y, 
            s.bx = i && (Z(p[g - 4]) || s.x), s.by = i && (Z(p[g - 3]) || s.y), s.x = i && p[g - 2], 
            s.y = i && p[g - 1];
        }
        return i || (n.curve = Se(r)), i ? [ r, i ] : r;
    }, null, Se), He = (m._parseDots = d(function(t) {
        for (var e = [], n = 0, r = t.length; r > n; n++) {
            var i = {}, o = t[n].match(/^([^:]*):?([\d\.]*)/);
            if (i.color = m.getRGB(o[1]), i.color.error) return null;
            i.color = i.color.hex, o[2] && (i.offset = o[2] + "%"), e.push(i);
        }
        for (n = 1, r = e.length - 1; r > n; n++) if (!e[n].offset) {
            for (var s = Z(e[n - 1].offset || 0), a = 0, l = n + 1; r > l; l++) if (e[l].offset) {
                a = e[l].offset;
                break;
            }
            a || (a = 100, l = r), a = Z(a);
            for (var u = (a - s) / (l - n + 1); l > n; n++) s += u, e[n].offset = s + "%";
        }
        return e;
    }), m._tear = function(t, e) {
        t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), 
        t.prev && (t.prev.next = t.next);
    }), De = (m._tofront = function(t, e) {
        e.top !== t && (He(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
    }, m._toback = function(t, e) {
        e.bottom !== t && (He(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, 
        e.bottom = t);
    }, m._insertafter = function(t, e, n) {
        He(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, 
        t.prev = e, e.next = t;
    }, m._insertbefore = function(t, e, n) {
        He(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, 
        e.prev = t, t.next = e;
    }, m.toMatrix = function(t, e) {
        var n = Te(t), r = {
            _: {
                transform: B
            },
            getBBox: function() {
                return n;
            }
        };
        return Pe(r, e), r.matrix;
    }), Pe = (m.transformPath = function(t, e) {
        return ge(t, De(t, e));
    }, m._extractTransform = function(t, e) {
        if (null == e) return t._.transform;
        e = M(e).replace(/\.{3}|\u2026/g, t._.transform || B);
        var n = m.parseTransformString(e), r = 0, i = 0, s = 0, a = 1, l = 1, u = t._, h = new o();
        if (u.transform = n || [], n) for (var c = 0, f = n.length; f > c; c++) {
            var p, d, g, v, y, x = n[c], b = x.length, w = M(x[0]).toLowerCase(), _ = x[0] != w, k = _ ? h.invert() : 0;
            "t" == w && 3 == b ? _ ? (p = k.x(0, 0), d = k.y(0, 0), g = k.x(x[1], x[2]), v = k.y(x[1], x[2]), 
            h.translate(g - p, v - d)) : h.translate(x[1], x[2]) : "r" == w ? 2 == b ? (y = y || t.getBBox(1), 
            h.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), r += x[1]) : 4 == b && (_ ? (g = k.x(x[2], x[3]), 
            v = k.y(x[2], x[3]), h.rotate(x[1], g, v)) : h.rotate(x[1], x[2], x[3]), r += x[1]) : "s" == w ? 2 == b || 3 == b ? (y = y || t.getBBox(1), 
            h.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), a *= x[1], l *= x[b - 1]) : 5 == b && (_ ? (g = k.x(x[3], x[4]), 
            v = k.y(x[3], x[4]), h.scale(x[1], x[2], g, v)) : h.scale(x[1], x[2], x[3], x[4]), 
            a *= x[1], l *= x[2]) : "m" == w && 7 == b && h.add(x[1], x[2], x[3], x[4], x[5], x[6]), 
            u.dirtyT = 1, t.matrix = h;
        }
        t.matrix = h, u.sx = a, u.sy = l, u.deg = r, u.dx = i = h.e, u.dy = s = h.f, 1 == a && 1 == l && !r && u.bbox ? (u.bbox.x += +i, 
        u.bbox.y += +s) : u.dirtyT = 1;
    }), Ie = function(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [ e, 0, 0 ];

          case "m":
            return [ e, 1, 0, 0, 1, 0, 0 ];

          case "r":
            return 4 == t.length ? [ e, 0, t[2], t[3] ] : [ e, 0 ];

          case "s":
            return 5 == t.length ? [ e, 1, 1, t[3], t[4] ] : 3 == t.length ? [ e, 1, 1 ] : [ e, 1 ];
        }
    }, Oe = m._equaliseTransform = function(t, e) {
        e = M(e).replace(/\.{3}|\u2026/g, t), t = m.parseTransformString(t) || [], e = m.parseTransformString(e) || [];
        for (var n, r, i, o, s = I(t.length, e.length), a = [], l = [], u = 0; s > u; u++) {
            if (i = t[u] || Ie(e[u]), o = e[u] || Ie(i), i[0] != o[0] || "r" == i[0].toLowerCase() && (i[2] != o[2] || i[3] != o[3]) || "s" == i[0].toLowerCase() && (i[3] != o[3] || i[4] != o[4])) return;
            for (a[u] = [], l[u] = [], n = 0, r = I(i.length, o.length); r > n; n++) n in i && (a[u][n] = i[n]), 
            n in o && (l[u][n] = o[n]);
        }
        return {
            from: a,
            to: l
        };
    };
    m._getContainer = function(t, e, n, r) {
        var i;
        return i = null != r || m.is(t, "object") ? t : C.doc.getElementById(t), null != i ? i.tagName ? null == e ? {
            container: i,
            width: i.style.pixelWidth || i.offsetWidth,
            height: i.style.pixelHeight || i.offsetHeight
        } : {
            container: i,
            width: e,
            height: n
        } : {
            container: 1,
            x: t,
            y: e,
            width: n,
            height: r
        } : void 0;
    }, m.pathToRelative = Ne, m._engine = {}, m.path2curve = je, m.matrix = function(t, e, n, r, i, s) {
        return new o(t, e, n, r, i, s);
    }, function(t) {
        function e(t) {
            var e = P.sqrt(n(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
        }
        function n(t) {
            return t[0] * t[0] + t[1] * t[1];
        }
        t.add = function(t, e, n, r, i, s) {
            var a, l, u, h, c = [ [], [], [] ], f = [ [ this.a, this.c, this.e ], [ this.b, this.d, this.f ], [ 0, 0, 1 ] ], p = [ [ t, n, i ], [ e, r, s ], [ 0, 0, 1 ] ];
            for (t && t instanceof o && (p = [ [ t.a, t.c, t.e ], [ t.b, t.d, t.f ], [ 0, 0, 1 ] ]), 
            a = 0; 3 > a; a++) for (l = 0; 3 > l; l++) {
                for (h = 0, u = 0; 3 > u; u++) h += f[a][u] * p[u][l];
                c[a][l] = h;
            }
            this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], 
            this.f = c[1][2];
        }, t.invert = function() {
            var t = this, e = t.a * t.d - t.b * t.c;
            return new o(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e);
        }, t.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f);
        }, t.translate = function(t, e) {
            this.add(1, 0, 0, 1, t, e);
        }, t.scale = function(t, e, n, r) {
            null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), 
            (n || r) && this.add(1, 0, 0, 1, -n, -r);
        }, t.rotate = function(t, e, n) {
            t = m.rad(t), e = e || 0, n = n || 0;
            var r = +P.cos(t).toFixed(9), i = +P.sin(t).toFixed(9);
            this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n);
        }, t.x = function(t, e) {
            return t * this.a + e * this.c + this.e;
        }, t.y = function(t, e) {
            return t * this.b + e * this.d + this.f;
        }, t.get = function(t) {
            return +this[M.fromCharCode(97 + t)].toFixed(4);
        }, t.toString = function() {
            return m.svg ? "matrix(" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ].join() + ")" : [ this.get(0), this.get(2), this.get(1), this.get(3), 0, 0 ].join();
        }, t.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
        }, t.offset = function() {
            return [ this.e.toFixed(4), this.f.toFixed(4) ];
        }, t.split = function() {
            var t = {};
            t.dx = this.e, t.dy = this.f;
            var r = [ [ this.a, this.c ], [ this.b, this.d ] ];
            t.scalex = P.sqrt(n(r[0])), e(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], 
            r[1] = [ r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear ], t.scaley = P.sqrt(n(r[1])), 
            e(r[1]), t.shear /= t.scaley;
            var i = -r[0][1], o = r[1][1];
            return 0 > o ? (t.rotate = m.deg(P.acos(o)), 0 > i && (t.rotate = 360 - t.rotate)) : t.rotate = m.deg(P.asin(i)), 
            t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), 
            t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, 
            t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t;
        }, t.toTransformString = function(t) {
            var e = t || this[F]();
            return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), 
            e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [ e.dx, e.dy ] : B) + (1 != e.scalex || 1 != e.scaley ? "s" + [ e.scalex, e.scaley, 0, 0 ] : B) + (e.rotate ? "r" + [ e.rotate, 0, 0 ] : B)) : "m" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ];
        };
    }(o.prototype);
    var ze = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    x.safari = "Apple Computer, Inc." == navigator.vendor && (ze && 4 > ze[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && ze && 8 > ze[1] ? function() {
        var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            t.remove();
        });
    } : he;
    for (var Re = function() {
        this.returnValue = !1;
    }, qe = function() {
        return this.originalEvent.preventDefault();
    }, We = function() {
        this.cancelBubble = !0;
    }, $e = function() {
        return this.originalEvent.stopPropagation();
    }, Xe = function() {
        return C.doc.addEventListener ? function(t, e, n, r) {
            var i = A && H[e] ? H[e] : e, o = function(i) {
                var o = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, s = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, a = i.clientX + s, l = i.clientY + o;
                if (A && H[k](e)) for (var u = 0, h = i.targetTouches && i.targetTouches.length; h > u; u++) if (i.targetTouches[u].target == t) {
                    var c = i;
                    i = i.targetTouches[u], i.originalEvent = c, i.preventDefault = qe, i.stopPropagation = $e;
                    break;
                }
                return n.call(r, i, a, l);
            };
            return t.addEventListener(i, o, !1), function() {
                return t.removeEventListener(i, o, !1), !0;
            };
        } : C.doc.attachEvent ? function(t, e, n, r) {
            var i = function(t) {
                t = t || C.win.event;
                var e = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, i = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, o = t.clientX + i, s = t.clientY + e;
                return t.preventDefault = t.preventDefault || Re, t.stopPropagation = t.stopPropagation || We, 
                n.call(r, t, o, s);
            };
            t.attachEvent("on" + e, i);
            var o = function() {
                return t.detachEvent("on" + e, i), !0;
            };
            return o;
        } : void 0;
    }(), Ye = [], Ve = function(t) {
        for (var e, n = t.clientX, r = t.clientY, i = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, o = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, s = Ye.length; s--; ) {
            if (e = Ye[s], A) {
                for (var a, l = t.touches.length; l--; ) if (a = t.touches[l], a.identifier == e.el._drag.id) {
                    n = a.clientX, r = a.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                    break;
                }
            } else t.preventDefault();
            var u, h = e.el.node, c = h.nextSibling, f = h.parentNode, p = h.style.display;
            C.win.opera && f.removeChild(h), h.style.display = "none", u = e.el.paper.getElementByPoint(n, r), 
            h.style.display = p, C.win.opera && (c ? f.insertBefore(h, c) : f.appendChild(h)), 
            u && eve("raphael.drag.over." + e.el.id, e.el, u), n += o, r += i, eve("raphael.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, r - e.el._drag.y, n, r, t);
        }
    }, Ge = function(t) {
        m.unmousemove(Ve).unmouseup(Ge);
        for (var e, n = Ye.length; n--; ) e = Ye[n], e.el._drag = {}, eve("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
        Ye = [];
    }, Ue = m.el = {}, Qe = j.length; Qe--; ) (function(t) {
        m[t] = Ue[t] = function(e, n) {
            return m.is(e, "function") && (this.events = this.events || [], this.events.push({
                name: t,
                f: e,
                unbind: Xe(this.shape || this.node || C.doc, t, e, n || this)
            })), this;
        }, m["un" + t] = Ue["un" + t] = function(e) {
            for (var n = this.events || [], r = n.length; r--; ) if (n[r].name == t && n[r].f == e) return n[r].unbind(), 
            n.splice(r, 1), !n.length && delete this.events, this;
            return this;
        };
    })(j[Qe]);
    Ue.data = function(t, e) {
        var n = le[this.id] = le[this.id] || {};
        if (1 == arguments.length) {
            if (m.is(t, "object")) {
                for (var r in t) t[k](r) && this.data(r, t[r]);
                return this;
            }
            return eve("raphael.data.get." + this.id, this, n[t], t), n[t];
        }
        return n[t] = e, eve("raphael.data.set." + this.id, this, e, t), this;
    }, Ue.removeData = function(t) {
        return null == t ? le[this.id] = {} : le[this.id] && delete le[this.id][t], this;
    }, Ue.hover = function(t, e, n, r) {
        return this.mouseover(t, n).mouseout(e, r || n);
    }, Ue.unhover = function(t, e) {
        return this.unmouseover(t).unmouseout(e);
    };
    var Ze = [];
    Ue.drag = function(t, e, n, r, i, o) {
        function s(s) {
            (s.originalEvent || s).preventDefault();
            var a = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, l = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
            this._drag.x = s.clientX + l, this._drag.y = s.clientY + a, this._drag.id = s.identifier, 
            !Ye.length && m.mousemove(Ve).mouseup(Ge), Ye.push({
                el: this,
                move_scope: r,
                start_scope: i,
                end_scope: o
            }), e && eve.on("raphael.drag.start." + this.id, e), t && eve.on("raphael.drag.move." + this.id, t), 
            n && eve.on("raphael.drag.end." + this.id, n), eve("raphael.drag.start." + this.id, i || r || this, s.clientX + l, s.clientY + a, s);
        }
        return this._drag = {}, Ze.push({
            el: this,
            start: s
        }), this.mousedown(s), this;
    }, Ue.onDragOver = function(t) {
        t ? eve.on("raphael.drag.over." + this.id, t) : eve.unbind("raphael.drag.over." + this.id);
    }, Ue.undrag = function() {
        for (var t = Ze.length; t--; ) Ze[t].el == this && (this.unmousedown(Ze[t].start), 
        Ze.splice(t, 1), eve.unbind("raphael.drag.*." + this.id));
        !Ze.length && m.unmousemove(Ve).unmouseup(Ge);
    }, x.circle = function(t, e, n) {
        var r = m._engine.circle(this, t || 0, e || 0, n || 0);
        return this.__set__ && this.__set__.push(r), r;
    }, x.rect = function(t, e, n, r, i) {
        var o = m._engine.rect(this, t || 0, e || 0, n || 0, r || 0, i || 0);
        return this.__set__ && this.__set__.push(o), o;
    }, x.ellipse = function(t, e, n, r) {
        var i = m._engine.ellipse(this, t || 0, e || 0, n || 0, r || 0);
        return this.__set__ && this.__set__.push(i), i;
    }, x.path = function(t) {
        t && !m.is(t, $) && !m.is(t[0], X) && (t += B);
        var e = m._engine.path(m.format[N](m, arguments), this);
        return this.__set__ && this.__set__.push(e), e;
    }, x.image = function(t, e, n, r, i) {
        var o = m._engine.image(this, t || "about:blank", e || 0, n || 0, r || 0, i || 0);
        return this.__set__ && this.__set__.push(o), o;
    }, x.text = function(t, e, n) {
        var r = m._engine.text(this, t || 0, e || 0, M(n));
        return this.__set__ && this.__set__.push(r), r;
    }, x.set = function(t) {
        !m.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var e = new hn(t);
        return this.__set__ && this.__set__.push(e), e;
    }, x.setStart = function(t) {
        this.__set__ = t || this.set();
    }, x.setFinish = function() {
        var t = this.__set__;
        return delete this.__set__, t;
    }, x.setSize = function(t, e) {
        return m._engine.setSize.call(this, t, e);
    }, x.setViewBox = function(t, e, n, r, i) {
        return m._engine.setViewBox.call(this, t, e, n, r, i);
    }, x.top = x.bottom = null, x.raphael = m;
    var Je = function(t) {
        var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement, o = i.clientTop || r.clientTop || 0, s = i.clientLeft || r.clientLeft || 0, a = e.top + (C.win.pageYOffset || i.scrollTop || r.scrollTop) - o, l = e.left + (C.win.pageXOffset || i.scrollLeft || r.scrollLeft) - s;
        return {
            y: a,
            x: l
        };
    };
    x.getElementByPoint = function(t, e) {
        var n = this, r = n.canvas, i = C.doc.elementFromPoint(t, e);
        if (C.win.opera && "svg" == i.tagName) {
            var o = Je(r), s = r.createSVGRect();
            s.x = t - o.x, s.y = e - o.y, s.width = s.height = 1;
            var a = r.getIntersectionList(s, null);
            a.length && (i = a[a.length - 1]);
        }
        if (!i) return null;
        for (;i.parentNode && i != r.parentNode && !i.raphael; ) i = i.parentNode;
        return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null;
    }, x.getById = function(t) {
        for (var e = this.bottom; e; ) {
            if (e.id == t) return e;
            e = e.next;
        }
        return null;
    }, x.forEach = function(t, e) {
        for (var n = this.bottom; n; ) {
            if (t.call(e, n) === !1) return this;
            n = n.next;
        }
        return this;
    }, x.getElementsByPoint = function(t, e) {
        var n = this.set();
        return this.forEach(function(r) {
            r.isPointInside(t, e) && n.push(r);
        }), n;
    }, Ue.isPointInside = function(t, e) {
        var n = this.realPath = this.realPath || de[this.type](this);
        return m.isPointInsidePath(n, t, e);
    }, Ue.getBBox = function(t) {
        if (this.removed) return {};
        var e = this._;
        return t ? ((e.dirty || !e.bboxwt) && (this.realPath = de[this.type](this), e.bboxwt = Te(this.realPath), 
        e.bboxwt.toString = i, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, 
        this.realPath = de[this.type](this)), e.bbox = Te(ge(this.realPath, this.matrix)), 
        e.bbox.toString = i, e.dirty = e.dirtyT = 0), e.bbox);
    }, Ue.clone = function() {
        if (this.removed) return null;
        var t = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(t), t;
    }, Ue.glow = function(t) {
        if ("text" == this.type) return null;
        t = t || {};
        var e = {
            width: (t.width || 10) + (+this.attr("stroke-width") || 1),
            fill: t.fill || !1,
            opacity: t.opacity || .5,
            offsetx: t.offsetx || 0,
            offsety: t.offsety || 0,
            color: t.color || "#000"
        }, n = e.width / 2, r = this.paper, i = r.set(), o = this.realPath || de[this.type](this);
        o = this.matrix ? ge(o, this.matrix) : o;
        for (var s = 1; n + 1 > s; s++) i.push(r.path(o).attr({
            stroke: e.color,
            fill: e.fill ? e.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(e.width / n * s).toFixed(3),
            opacity: +(e.opacity / n).toFixed(3)
        }));
        return i.insertBefore(this).translate(e.offsetx, e.offsety);
    };
    var Ke = function(t, e, n, r, i, o, s, a, l) {
        return null == l ? h(t, e, n, r, i, o, s, a) : m.findDotsAtSegment(t, e, n, r, i, o, s, a, u(t, e, n, r, i, o, s, a, l));
    }, tn = function(t, e) {
        return function(n, r, i) {
            n = je(n);
            for (var o, s, a, l, u, h = "", c = {}, f = 0, p = 0, d = n.length; d > p; p++) {
                if (a = n[p], "M" == a[0]) o = +a[1], s = +a[2]; else {
                    if (l = Ke(o, s, a[1], a[2], a[3], a[4], a[5], a[6]), f + l > r) {
                        if (e && !c.start) {
                            if (u = Ke(o, s, a[1], a[2], a[3], a[4], a[5], a[6], r - f), h += [ "C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y ], 
                            i) return h;
                            c.start = h, h = [ "M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, a[5], a[6] ].join(), 
                            f += l, o = +a[5], s = +a[6];
                            continue;
                        }
                        if (!t && !e) return u = Ke(o, s, a[1], a[2], a[3], a[4], a[5], a[6], r - f), {
                            x: u.x,
                            y: u.y,
                            alpha: u.alpha
                        };
                    }
                    f += l, o = +a[5], s = +a[6];
                }
                h += a.shift() + a;
            }
            return c.end = h, u = t ? f : e ? c : m.findDotsAtSegment(o, s, a[0], a[1], a[2], a[3], a[4], a[5], 1), 
            u.alpha && (u = {
                x: u.x,
                y: u.y,
                alpha: u.alpha
            }), u;
        };
    }, en = tn(1), nn = tn(), rn = tn(0, 1);
    m.getTotalLength = en, m.getPointAtLength = nn, m.getSubpath = function(t, e, n) {
        if (1e-6 > this.getTotalLength(t) - n) return rn(t, e).end;
        var r = rn(t, n, 1);
        return e ? rn(r, e).end : r;
    }, Ue.getTotalLength = function() {
        return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : en(this.attrs.path) : void 0;
    }, Ue.getPointAtLength = function(t) {
        return "path" == this.type ? nn(this.attrs.path, t) : void 0;
    }, Ue.getSubpath = function(t, e) {
        return "path" == this.type ? m.getSubpath(this.attrs.path, t, e) : void 0;
    };
    var on = m.easing_formulas = {
        linear: function(t) {
            return t;
        },
        "<": function(t) {
            return R(t, 1.7);
        },
        ">": function(t) {
            return R(t, .48);
        },
        "<>": function(t) {
            var e = .48 - t / 1.04, n = P.sqrt(.1734 + e * e), r = n - e, i = R(z(r), 1 / 3) * (0 > r ? -1 : 1), o = -n - e, s = R(z(o), 1 / 3) * (0 > o ? -1 : 1), a = i + s + .5;
            return 3 * (1 - a) * a * a + a * a * a;
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1;
        },
        elastic: function(t) {
            return t == !!t ? t : R(2, -10 * t) * P.sin(2 * (t - .075) * q / .3) + 1;
        },
        bounce: function(t) {
            var e, n = 7.5625, r = 2.75;
            return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, 
            e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e;
        }
    };
    on.easeIn = on["ease-in"] = on["<"], on.easeOut = on["ease-out"] = on[">"], on.easeInOut = on["ease-in-out"] = on["<>"], 
    on["back-in"] = on.backIn, on["back-out"] = on.backOut;
    var sn = [], an = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        setTimeout(t, 16);
    }, ln = function() {
        for (var t = +new Date(), n = 0; sn.length > n; n++) {
            var r = sn[n];
            if (!r.el.removed && !r.paused) {
                var i, o, s = t - r.start, a = r.ms, l = r.easing, u = r.from, h = r.diff, c = r.to, f = (r.t, 
                r.el), p = {}, d = {};
                if (r.initstatus ? (s = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * a, 
                r.status = r.initstatus, delete r.initstatus, r.stop && sn.splice(n--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (s / a)) / r.anim.top, 
                !(0 > s)) if (a > s) {
                    var g = l(s / a);
                    for (var v in u) if (u[k](v)) {
                        switch (ee[v]) {
                          case W:
                            i = +u[v] + g * a * h[v];
                            break;

                          case "colour":
                            i = "rgb(" + [ un(Q(u[v].r + g * a * h[v].r)), un(Q(u[v].g + g * a * h[v].g)), un(Q(u[v].b + g * a * h[v].b)) ].join(",") + ")";
                            break;

                          case "path":
                            i = [];
                            for (var y = 0, x = u[v].length; x > y; y++) {
                                i[y] = [ u[v][y][0] ];
                                for (var b = 1, w = u[v][y].length; w > b; b++) i[y][b] = +u[v][y][b] + g * a * h[v][y][b];
                                i[y] = i[y].join(L);
                            }
                            i = i.join(L);
                            break;

                          case "transform":
                            if (h[v].real) for (i = [], y = 0, x = u[v].length; x > y; y++) for (i[y] = [ u[v][y][0] ], 
                            b = 1, w = u[v][y].length; w > b; b++) i[y][b] = u[v][y][b] + g * a * h[v][y][b]; else {
                                var _ = function(t) {
                                    return +u[v][t] + g * a * h[v][t];
                                };
                                i = [ [ "m", _(0), _(1), _(2), _(3), _(4), _(5) ] ];
                            }
                            break;

                          case "csv":
                            if ("clip-rect" == v) for (i = [], y = 4; y--; ) i[y] = +u[v][y] + g * a * h[v][y];
                            break;

                          default:
                            var C = [][E](u[v]);
                            for (i = [], y = f.paper.customAttributes[v].length; y--; ) i[y] = +C[y] + g * a * h[v][y];
                        }
                        p[v] = i;
                    }
                    f.attr(p), function(t, e, n) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + t, e, n);
                        });
                    }(f.id, f, r.anim);
                } else {
                    if (function(t, e, n) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + e.id, e, n), eve("raphael.anim.finish." + e.id, e, n), 
                            m.is(t, "function") && t.call(e);
                        });
                    }(r.callback, f, r.anim), f.attr(c), sn.splice(n--, 1), r.repeat > 1 && !r.next) {
                        for (o in c) c[k](o) && (d[o] = r.totalOrigin[o]);
                        r.el.attr(d), e(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1);
                    }
                    r.next && !r.stop && e(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                }
            }
        }
        m.svg && f && f.paper && f.paper.safari(), sn.length && an(ln);
    }, un = function(t) {
        return t > 255 ? 255 : 0 > t ? 0 : t;
    };
    Ue.animateWith = function(t, r, i, o, s, a) {
        var l = this;
        if (l.removed) return a && a.call(l), l;
        var u = i instanceof n ? i : m.animation(i, o, s, a);
        e(u, l, u.percents[0], null, l.attr());
        for (var h = 0, c = sn.length; c > h; h++) if (sn[h].anim == r && sn[h].el == t) {
            sn[c - 1].start = sn[h].start;
            break;
        }
        return l;
    }, Ue.onAnimation = function(t) {
        return t ? eve.on("raphael.anim.frame." + this.id, t) : eve.unbind("raphael.anim.frame." + this.id), 
        this;
    }, n.prototype.delay = function(t) {
        var e = new n(this.anim, this.ms);
        return e.times = this.times, e.del = +t || 0, e;
    }, n.prototype.repeat = function(t) {
        var e = new n(this.anim, this.ms);
        return e.del = this.del, e.times = P.floor(I(t, 0)) || 1, e;
    }, m.animation = function(t, e, r, i) {
        if (t instanceof n) return t;
        (m.is(r, "function") || !r) && (i = i || r || null, r = null), t = Object(t), e = +e || 0;
        var o, s, a = {};
        for (s in t) t[k](s) && Z(s) != s && Z(s) + "%" != s && (o = !0, a[s] = t[s]);
        return o ? (r && (a.easing = r), i && (a.callback = i), new n({
            100: a
        }, e)) : new n(t, e);
    }, Ue.animate = function(t, r, i, o) {
        var s = this;
        if (s.removed) return o && o.call(s), s;
        var a = t instanceof n ? t : m.animation(t, r, i, o);
        return e(a, s, a.percents[0], null, s.attr()), s;
    }, Ue.setTime = function(t, e) {
        return t && null != e && this.status(t, O(e, t.ms) / t.ms), this;
    }, Ue.status = function(t, n) {
        var r, i, o = [], s = 0;
        if (null != n) return e(t, this, -1, O(n, 1)), this;
        for (r = sn.length; r > s; s++) if (i = sn[s], i.el.id == this.id && (!t || i.anim == t)) {
            if (t) return i.status;
            o.push({
                anim: i.anim,
                status: i.status
            });
        }
        return t ? 0 : o;
    }, Ue.pause = function(t) {
        for (var e = 0; sn.length > e; e++) sn[e].el.id == this.id && (!t || sn[e].anim == t) && eve("raphael.anim.pause." + this.id, this, sn[e].anim) !== !1 && (sn[e].paused = !0);
        return this;
    }, Ue.resume = function(t) {
        for (var e = 0; sn.length > e; e++) if (sn[e].el.id == this.id && (!t || sn[e].anim == t)) {
            var n = sn[e];
            eve("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, 
            this.status(n.anim, n.status));
        }
        return this;
    }, Ue.stop = function(t) {
        for (var e = 0; sn.length > e; e++) sn[e].el.id == this.id && (!t || sn[e].anim == t) && eve("raphael.anim.stop." + this.id, this, sn[e].anim) !== !1 && sn.splice(e--, 1);
        return this;
    }, eve.on("raphael.remove", t), eve.on("raphael.clear", t), Ue.toString = function() {
        return "Raphaël’s object";
    };
    var hn = function(t) {
        if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, n = t.length; n > e; e++) t[e] && (t[e].constructor == Ue.constructor || t[e].constructor == hn) && (this[this.items.length] = this.items[this.items.length] = t[e], 
        this.length++);
    }, cn = hn.prototype;
    cn.push = function() {
        for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (t.constructor == Ue.constructor || t.constructor == hn) && (e = this.items.length, 
        this[e] = this.items[e] = t, this.length++);
        return this;
    }, cn.pop = function() {
        return this.length && delete this[this.length--], this.items.pop();
    }, cn.forEach = function(t, e) {
        for (var n = 0, r = this.items.length; r > n; n++) if (t.call(e, this.items[n], n) === !1) return this;
        return this;
    };
    for (var fn in Ue) Ue[k](fn) && (cn[fn] = function(t) {
        return function() {
            var e = arguments;
            return this.forEach(function(n) {
                n[t][N](n, e);
            });
        };
    }(fn));
    cn.attr = function(t, e) {
        if (t && m.is(t, X) && m.is(t[0], "object")) for (var n = 0, r = t.length; r > n; n++) this.items[n].attr(t[n]); else for (var i = 0, o = this.items.length; o > i; i++) this.items[i].attr(t, e);
        return this;
    }, cn.clear = function() {
        for (;this.length; ) this.pop();
    }, cn.splice = function(t, e) {
        t = 0 > t ? I(this.length + t, 0) : t, e = I(0, O(this.length - t, e));
        var n, r = [], i = [], o = [];
        for (n = 2; arguments.length > n; n++) o.push(arguments[n]);
        for (n = 0; e > n; n++) i.push(this[t + n]);
        for (;this.length - t > n; n++) r.push(this[t + n]);
        var s = o.length;
        for (n = 0; s + r.length > n; n++) this.items[t + n] = this[t + n] = s > n ? o[n] : r[n - s];
        for (n = this.items.length = this.length -= e - s; this[n]; ) delete this[n++];
        return new hn(i);
    }, cn.exclude = function(t) {
        for (var e = 0, n = this.length; n > e; e++) if (this[e] == t) return this.splice(e, 1), 
        !0;
    }, cn.animate = function(t, e, n, r) {
        (m.is(n, "function") || !n) && (r = n || null);
        var i, o, s = this.items.length, a = s, l = this;
        if (!s) return this;
        r && (o = function() {
            !--s && r.call(l);
        }), n = m.is(n, $) ? n : o;
        var u = m.animation(t, e, n, o);
        for (i = this.items[--a].animate(u); a--; ) this.items[a] && !this.items[a].removed && this.items[a].animateWith(i, u, u);
        return this;
    }, cn.insertAfter = function(t) {
        for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
        return this;
    }, cn.getBBox = function() {
        for (var t = [], e = [], n = [], r = [], i = this.items.length; i--; ) if (!this.items[i].removed) {
            var o = this.items[i].getBBox();
            t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height);
        }
        return t = O[N](0, t), e = O[N](0, e), n = I[N](0, n), r = I[N](0, r), {
            x: t,
            y: e,
            x2: n,
            y2: r,
            width: n - t,
            height: r - e
        };
    }, cn.clone = function(t) {
        t = new hn();
        for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
        return t;
    }, cn.toString = function() {
        return "Raphaël‘s set";
    }, m.registerFont = function(t) {
        if (!t.face) return t;
        this.fonts = this.fonts || {};
        var e = {
            w: t.w,
            face: {},
            glyphs: {}
        }, n = t.face["font-family"];
        for (var r in t.face) t.face[k](r) && (e.face[r] = t.face[r]);
        if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [ e ], !t.svg) {
            e.face["units-per-em"] = J(t.face["units-per-em"], 10);
            for (var i in t.glyphs) if (t.glyphs[k](i)) {
                var o = t.glyphs[i];
                if (e.glyphs[i] = {
                    w: o.w,
                    k: {},
                    d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function(t) {
                        return {
                            l: "L",
                            c: "C",
                            x: "z",
                            t: "m",
                            r: "l",
                            v: "c"
                        }[t] || "M";
                    }) + "z"
                }, o.k) for (var s in o.k) o[k](s) && (e.glyphs[i].k[s] = o.k[s]);
            }
        }
        return t;
    }, x.getFont = function(t, e, n, r) {
        if (r = r || "normal", n = n || "normal", e = +e || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[e] || 400, m.fonts) {
            var i = m.fonts[t];
            if (!i) {
                var o = RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, B) + "(\\s|$)", "i");
                for (var s in m.fonts) if (m.fonts[k](s) && o.test(s)) {
                    i = m.fonts[s];
                    break;
                }
            }
            var a;
            if (i) for (var l = 0, u = i.length; u > l && (a = i[l], a.face["font-weight"] != e || a.face["font-style"] != n && a.face["font-style"] || a.face["font-stretch"] != r); l++) ;
            return a;
        }
    }, x.print = function(t, e, n, r, i, o, s) {
        o = o || "middle", s = I(O(s || 0, 1), -1);
        var a, l = M(n)[F](B), u = 0, h = 0, c = B;
        if (m.is(r, n) && (r = this.getFont(r)), r) {
            a = (i || 16) / r.face["units-per-em"];
            for (var f = r.face.bbox[F](b), p = +f[0], d = f[3] - f[1], g = 0, v = +f[1] + ("baseline" == o ? d + +r.face.descent : d / 2), y = 0, x = l.length; x > y; y++) {
                if ("\n" == l[y]) u = 0, _ = 0, h = 0, g += d; else {
                    var w = h && r.glyphs[l[y - 1]] || {}, _ = r.glyphs[l[y]];
                    u += h ? (w.w || r.w) + (w.k && w.k[l[y]] || 0) + r.w * s : 0, h = 1;
                }
                _ && _.d && (c += m.transformPath(_.d, [ "t", u * a, g * a, "s", a, a, p, v, "t", (t - p) / a, (e - v) / a ]));
            }
        }
        return this.path(c).attr({
            fill: "#000",
            stroke: "none"
        });
    }, x.add = function(t) {
        if (m.is(t, "array")) for (var e, n = this.set(), r = 0, i = t.length; i > r; r++) e = t[r] || {}, 
        w[k](e.type) && n.push(this[e.type]().attr(e));
        return n;
    }, m.format = function(t, e) {
        var n = m.is(e, X) ? [ 0 ][E](e) : arguments;
        return t && m.is(t, $) && n.length - 1 && (t = t.replace(_, function(t, e) {
            return null == n[++e] ? B : n[e];
        })), t || B;
    }, m.fullfill = function() {
        var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function(t, n, r) {
            var i = r;
            return n.replace(e, function(t, e, n, r, o) {
                e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()));
            }), i = (null == i || i == r ? t : i) + "";
        };
        return function(e, r) {
            return (e + "").replace(t, function(t, e) {
                return n(t, e, r);
            });
        };
    }(), m.ninja = function() {
        return T.was ? C.win.Raphael = T.is : delete Raphael, m;
    }, m.st = cn, function(t, e, n) {
        function r() {
            /in/.test(t.readyState) ? setTimeout(r, 9) : m.eve("raphael.DOMload");
        }
        null == t.readyState && t.addEventListener && (t.addEventListener(e, n = function() {
            t.removeEventListener(e, n, !1), t.readyState = "complete";
        }, !1), t.readyState = "loading"), r();
    }(document, "DOMContentLoaded"), T.was ? C.win.Raphael = m : Raphael = m, eve.on("raphael.DOMload", function() {
        y = !0;
    });
}(), window.Raphael.svg && function(t) {
    var e = "hasOwnProperty", n = String, r = parseFloat, i = parseInt, o = Math, s = o.max, a = o.abs, l = o.pow, u = /[, ]+/, h = t.eve, c = "", f = " ", p = "http://www.w3.org/1999/xlink", d = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, g = {};
    t.toString = function() {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
    };
    var v = function(r, i) {
        if (i) {
            "string" == typeof r && (r = v(r));
            for (var o in i) i[e](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(p, o.substring(6), n(i[o])) : r.setAttribute(o, n(i[o])));
        } else r = t._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return r;
    }, m = function(e, i) {
        var u = "linear", h = e.id + i, f = .5, p = .5, d = e.node, g = e.paper, m = d.style, y = t._g.doc.getElementById(h);
        if (!y) {
            if (i = n(i).replace(t._radial_gradient, function(t, e, n) {
                if (u = "radial", e && n) {
                    f = r(e), p = r(n);
                    var i = 2 * (p > .5) - 1;
                    l(f - .5, 2) + l(p - .5, 2) > .25 && (p = o.sqrt(.25 - l(f - .5, 2)) * i + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * i);
                }
                return c;
            }), i = i.split(/\s*\-\s*/), "linear" == u) {
                var x = i.shift();
                if (x = -r(x), isNaN(x)) return null;
                var b = [ 0, 0, o.cos(t.rad(x)), o.sin(t.rad(x)) ], w = 1 / (s(a(b[2]), a(b[3])) || 1);
                b[2] *= w, b[3] *= w, 0 > b[2] && (b[0] = -b[2], b[2] = 0), 0 > b[3] && (b[1] = -b[3], 
                b[3] = 0);
            }
            var _ = t._parseDots(i);
            if (!_) return null;
            if (h = h.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && h != e.gradient.id && (g.defs.removeChild(e.gradient), 
            delete e.gradient), !e.gradient) {
                y = v(u + "Gradient", {
                    id: h
                }), e.gradient = y, v(y, "radial" == u ? {
                    fx: f,
                    fy: p
                } : {
                    x1: b[0],
                    y1: b[1],
                    x2: b[2],
                    y2: b[3],
                    gradientTransform: e.matrix.invert()
                }), g.defs.appendChild(y);
                for (var k = 0, C = _.length; C > k; k++) y.appendChild(v("stop", {
                    offset: _[k].offset ? _[k].offset : k ? "100%" : "0%",
                    "stop-color": _[k].color || "#fff"
                }));
            }
        }
        return v(d, {
            fill: "url(#" + h + ")",
            opacity: 1,
            "fill-opacity": 1
        }), m.fill = c, m.opacity = 1, m.fillOpacity = 1, 1;
    }, y = function(t) {
        var e = t.getBBox(1);
        v(t.pattern, {
            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
        });
    }, x = function(r, i, o) {
        if ("path" == r.type) {
            for (var s, a, l, u, h, f = n(i).toLowerCase().split("-"), p = r.paper, m = o ? "end" : "start", y = r.node, x = r.attrs, b = x["stroke-width"], w = f.length, _ = "classic", k = 3, C = 3, T = 5; w--; ) switch (f[w]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                _ = f[w];
                break;

              case "wide":
                C = 5;
                break;

              case "narrow":
                C = 2;
                break;

              case "long":
                k = 5;
                break;

              case "short":
                k = 2;
            }
            if ("open" == _ ? (k += 2, C += 2, T += 2, l = 1, u = o ? 4 : 1, h = {
                fill: "none",
                stroke: x.stroke
            }) : (u = l = k / 2, h = {
                fill: x.stroke,
                stroke: "none"
            }), r._.arrows ? o ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, 
            r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != _) {
                var S = "raphael-marker-" + _, N = "raphael-marker-" + m + _ + k + C;
                t._g.doc.getElementById(S) ? g[S]++ : (p.defs.appendChild(v(v("path"), {
                    "stroke-linecap": "round",
                    d: d[_],
                    id: S
                })), g[S] = 1);
                var E, A = t._g.doc.getElementById(N);
                A ? (g[N]++, E = A.getElementsByTagName("use")[0]) : (A = v(v("marker"), {
                    id: N,
                    markerHeight: C,
                    markerWidth: k,
                    orient: "auto",
                    refX: u,
                    refY: C / 2
                }), E = v(v("use"), {
                    "xlink:href": "#" + S,
                    transform: (o ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : c) + "scale(" + k / T + "," + C / T + ")",
                    "stroke-width": (1 / ((k / T + C / T) / 2)).toFixed(4)
                }), A.appendChild(E), p.defs.appendChild(A), g[N] = 1), v(E, h);
                var B = l * ("diamond" != _ && "oval" != _);
                o ? (s = r._.arrows.startdx * b || 0, a = t.getTotalLength(x.path) - B * b) : (s = B * b, 
                a = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), h = {}, h["marker-" + m] = "url(#" + N + ")", 
                (a || s) && (h.d = Raphael.getSubpath(x.path, s, a)), v(y, h), r._.arrows[m + "Path"] = S, 
                r._.arrows[m + "Marker"] = N, r._.arrows[m + "dx"] = B, r._.arrows[m + "Type"] = _, 
                r._.arrows[m + "String"] = i;
            } else o ? (s = r._.arrows.startdx * b || 0, a = t.getTotalLength(x.path) - s) : (s = 0, 
            a = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[m + "Path"] && v(y, {
                d: Raphael.getSubpath(x.path, s, a)
            }), delete r._.arrows[m + "Path"], delete r._.arrows[m + "Marker"], delete r._.arrows[m + "dx"], 
            delete r._.arrows[m + "Type"], delete r._.arrows[m + "String"];
            for (h in g) if (g[e](h) && !g[h]) {
                var L = t._g.doc.getElementById(h);
                L && L.parentNode.removeChild(L);
            }
        }
    }, b = {
        "": [ 0 ],
        none: [ 0 ],
        "-": [ 3, 1 ],
        ".": [ 1, 1 ],
        "-.": [ 3, 1, 1, 1 ],
        "-..": [ 3, 1, 1, 1, 1, 1 ],
        ". ": [ 1, 3 ],
        "- ": [ 4, 3 ],
        "--": [ 8, 3 ],
        "- .": [ 4, 3, 1, 3 ],
        "--.": [ 8, 3, 1, 3 ],
        "--..": [ 8, 3, 1, 3, 1, 3 ]
    }, w = function(t, e, r) {
        if (e = b[n(e).toLowerCase()]) {
            for (var i = t.attrs["stroke-width"] || "1", o = {
                round: i,
                square: i,
                butt: 0
            }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, s = [], a = e.length; a--; ) s[a] = e[a] * i + (a % 2 ? 1 : -1) * o;
            v(t.node, {
                "stroke-dasharray": s.join(",")
            });
        }
    }, _ = function(r, o) {
        var l = r.node, h = r.attrs, f = l.style.visibility;
        l.style.visibility = "hidden";
        for (var d in o) if (o[e](d)) {
            if (!t._availableAttrs[e](d)) continue;
            var g = o[d];
            switch (h[d] = g, d) {
              case "blur":
                r.blur(g);
                break;

              case "href":
              case "title":
              case "target":
                var b = l.parentNode;
                if ("a" != b.tagName.toLowerCase()) {
                    var _ = v("a");
                    b.insertBefore(_, l), _.appendChild(l), b = _;
                }
                "target" == d ? b.setAttributeNS(p, "show", "blank" == g ? "new" : g) : b.setAttributeNS(p, d, g);
                break;

              case "cursor":
                l.style.cursor = g;
                break;

              case "transform":
                r.transform(g);
                break;

              case "arrow-start":
                x(r, g);
                break;

              case "arrow-end":
                x(r, g, 1);
                break;

              case "clip-rect":
                var k = n(g).split(u);
                if (4 == k.length) {
                    r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                    var T = v("clipPath"), S = v("rect");
                    T.id = t.createUUID(), v(S, {
                        x: k[0],
                        y: k[1],
                        width: k[2],
                        height: k[3]
                    }), T.appendChild(S), r.paper.defs.appendChild(T), v(l, {
                        "clip-path": "url(#" + T.id + ")"
                    }), r.clip = S;
                }
                if (!g) {
                    var N = l.getAttribute("clip-path");
                    if (N) {
                        var E = t._g.doc.getElementById(N.replace(/(^url\(#|\)$)/g, c));
                        E && E.parentNode.removeChild(E), v(l, {
                            "clip-path": c
                        }), delete r.clip;
                    }
                }
                break;

              case "path":
                "path" == r.type && (v(l, {
                    d: g ? h.path = t._pathToAbsolute(g) : "M0,0"
                }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), 
                "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
                break;

              case "width":
                if (l.setAttribute(d, g), r._.dirty = 1, !h.fx) break;
                d = "x", g = h.x;

              case "x":
                h.fx && (g = -h.x - (h.width || 0));

              case "rx":
                if ("rx" == d && "rect" == r.type) break;

              case "cx":
                l.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
                break;

              case "height":
                if (l.setAttribute(d, g), r._.dirty = 1, !h.fy) break;
                d = "y", g = h.y;

              case "y":
                h.fy && (g = -h.y - (h.height || 0));

              case "ry":
                if ("ry" == d && "rect" == r.type) break;

              case "cy":
                l.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
                break;

              case "r":
                "rect" == r.type ? v(l, {
                    rx: g,
                    ry: g
                }) : l.setAttribute(d, g), r._.dirty = 1;
                break;

              case "src":
                "image" == r.type && l.setAttributeNS(p, "href", g);
                break;

              case "stroke-width":
                (1 != r._.sx || 1 != r._.sy) && (g /= s(a(r._.sx), a(r._.sy)) || 1), r.paper._vbSize && (g *= r.paper._vbSize), 
                l.setAttribute(d, g), h["stroke-dasharray"] && w(r, h["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), 
                "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                break;

              case "stroke-dasharray":
                w(r, g, o);
                break;

              case "fill":
                var A = n(g).match(t._ISURL);
                if (A) {
                    T = v("pattern");
                    var B = v("image");
                    T.id = t.createUUID(), v(T, {
                        x: 0,
                        y: 0,
                        patternUnits: "userSpaceOnUse",
                        height: 1,
                        width: 1
                    }), v(B, {
                        x: 0,
                        y: 0,
                        "xlink:href": A[1]
                    }), T.appendChild(B), function(e) {
                        t._preload(A[1], function() {
                            var t = this.offsetWidth, n = this.offsetHeight;
                            v(e, {
                                width: t,
                                height: n
                            }), v(B, {
                                width: t,
                                height: n
                            }), r.paper.safari();
                        });
                    }(T), r.paper.defs.appendChild(T), v(l, {
                        fill: "url(#" + T.id + ")"
                    }), r.pattern = T, r.pattern && y(r);
                    break;
                }
                var L = t.getRGB(g);
                if (L.error) {
                    if (("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && m(r, g)) {
                        if ("opacity" in h || "fill-opacity" in h) {
                            var M = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                            if (M) {
                                var F = M.getElementsByTagName("stop");
                                v(F[F.length - 1], {
                                    "stop-opacity": ("opacity" in h ? h.opacity : 1) * ("fill-opacity" in h ? h["fill-opacity"] : 1)
                                });
                            }
                        }
                        h.gradient = g, h.fill = "none";
                        break;
                    }
                } else delete o.gradient, delete h.gradient, !t.is(h.opacity, "undefined") && t.is(o.opacity, "undefined") && v(l, {
                    opacity: h.opacity
                }), !t.is(h["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && v(l, {
                    "fill-opacity": h["fill-opacity"]
                });
                L[e]("opacity") && v(l, {
                    "fill-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity
                });

              case "stroke":
                L = t.getRGB(g), l.setAttribute(d, L.hex), "stroke" == d && L[e]("opacity") && v(l, {
                    "stroke-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity
                }), "stroke" == d && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), 
                "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                break;

              case "gradient":
                ("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && m(r, g);
                break;

              case "opacity":
                h.gradient && !h[e]("stroke-opacity") && v(l, {
                    "stroke-opacity": g > 1 ? g / 100 : g
                });

              case "fill-opacity":
                if (h.gradient) {
                    M = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c)), 
                    M && (F = M.getElementsByTagName("stop"), v(F[F.length - 1], {
                        "stop-opacity": g
                    }));
                    break;
                }

              default:
                "font-size" == d && (g = i(g, 10) + "px");
                var j = d.replace(/(\-.)/g, function(t) {
                    return t.substring(1).toUpperCase();
                });
                l.style[j] = g, r._.dirty = 1, l.setAttribute(d, g);
            }
        }
        C(r, o), l.style.visibility = f;
    }, k = 1.2, C = function(r, o) {
        if ("text" == r.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) {
            var s = r.attrs, a = r.node, l = a.firstChild ? i(t._g.doc.defaultView.getComputedStyle(a.firstChild, c).getPropertyValue("font-size"), 10) : 10;
            if (o[e]("text")) {
                for (s.text = o.text; a.firstChild; ) a.removeChild(a.firstChild);
                for (var u, h = n(o.text).split("\n"), f = [], p = 0, d = h.length; d > p; p++) u = v("tspan"), 
                p && v(u, {
                    dy: l * k,
                    x: s.x
                }), u.appendChild(t._g.doc.createTextNode(h[p])), a.appendChild(u), f[p] = u;
            } else for (f = a.getElementsByTagName("tspan"), p = 0, d = f.length; d > p; p++) p ? v(f[p], {
                dy: l * k,
                x: s.x
            }) : v(f[0], {
                dy: 0
            });
            v(a, {
                x: s.x,
                y: s.y
            }), r._.dirty = 1;
            var g = r._getBBox(), m = s.y - (g.y + g.height / 2);
            m && t.is(m, "finite") && v(f[0], {
                dy: m
            });
        }
    }, T = function(e, n) {
        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, 
        this.matrix = t.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, 
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), 
        n.top = this, this.next = null;
    }, S = t.el;
    T.prototype = S, S.constructor = T, t._engine.path = function(t, e) {
        var n = v("path");
        e.canvas && e.canvas.appendChild(n);
        var r = new T(n, e);
        return r.type = "path", _(r, {
            fill: "none",
            stroke: "#000",
            path: t
        }), r;
    }, S.rotate = function(t, e, i) {
        if (this.removed) return this;
        if (t = n(t).split(u), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), 
        null == i && (e = i), null == e || null == i) {
            var o = this.getBBox(1);
            e = o.x + o.width / 2, i = o.y + o.height / 2;
        }
        return this.transform(this._.transform.concat([ [ "r", t, e, i ] ])), this;
    }, S.scale = function(t, e, i, o) {
        if (this.removed) return this;
        if (t = n(t).split(u), t.length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3])), 
        t = r(t[0]), null == e && (e = t), null == o && (i = o), null == i || null == o) var s = this.getBBox(1);
        return i = null == i ? s.x + s.width / 2 : i, o = null == o ? s.y + s.height / 2 : o, 
        this.transform(this._.transform.concat([ [ "s", t, e, i, o ] ])), this;
    }, S.translate = function(t, e) {
        return this.removed ? this : (t = n(t).split(u), t.length - 1 && (e = r(t[1])), 
        t = r(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([ [ "t", t, e ] ])), 
        this);
    }, S.transform = function(n) {
        var r = this._;
        if (null == n) return r.transform;
        if (t._extractTransform(this, n), this.clip && v(this.clip, {
            transform: this.matrix.invert()
        }), this.pattern && y(this), this.node && v(this.node, {
            transform: this.matrix
        }), 1 != r.sx || 1 != r.sy) {
            var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": i
            });
        }
        return this;
    }, S.hide = function() {
        return !this.removed && this.paper.safari(this.node.style.display = "none"), this;
    }, S.show = function() {
        return !this.removed && this.paper.safari(this.node.style.display = ""), this;
    }, S.remove = function() {
        if (!this.removed && this.node.parentNode) {
            var e = this.paper;
            e.__set__ && e.__set__.exclude(this), h.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), 
            t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var n in this) this[n] = "function" == typeof this[n] ? t._removedFactory(n) : null;
            this.removed = !0;
        }
    }, S._getBBox = function() {
        if ("none" == this.node.style.display) {
            this.show();
            var t = !0;
        }
        var e = {};
        try {
            e = this.node.getBBox();
        } catch (n) {} finally {
            e = e || {};
        }
        return t && this.hide(), e;
    }, S.attr = function(n, r) {
        if (this.removed) return this;
        if (null == n) {
            var i = {};
            for (var o in this.attrs) this.attrs[e](o) && (i[o] = this.attrs[o]);
            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, 
            i.transform = this._.transform, i;
        }
        if (null == r && t.is(n, "string")) {
            if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            if ("transform" == n) return this._.transform;
            for (var s = n.split(u), a = {}, l = 0, c = s.length; c > l; l++) n = s[l], a[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
            return c - 1 ? a : a[s[0]];
        }
        if (null == r && t.is(n, "array")) {
            for (a = {}, l = 0, c = n.length; c > l; l++) a[n[l]] = this.attr(n[l]);
            return a;
        }
        if (null != r) {
            var f = {};
            f[n] = r;
        } else null != n && t.is(n, "object") && (f = n);
        for (var p in f) h("raphael.attr." + p + "." + this.id, this, f[p]);
        for (p in this.paper.customAttributes) if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
            var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
            this.attrs[p] = f[p];
            for (var g in d) d[e](g) && (f[g] = d[g]);
        }
        return _(this, f), this;
    }, S.toFront = function() {
        if (this.removed) return this;
        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var e = this.paper;
        return e.top != this && t._tofront(this, e), this;
    }, S.toBack = function() {
        if (this.removed) return this;
        var e = this.node.parentNode;
        return "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), 
        t._toback(this, this.paper), this.paper, this;
    }, S.insertAfter = function(e) {
        if (this.removed) return this;
        var n = e.node || e[e.length - 1].node;
        return n.nextSibling ? n.parentNode.insertBefore(this.node, n.nextSibling) : n.parentNode.appendChild(this.node), 
        t._insertafter(this, e, this.paper), this;
    }, S.insertBefore = function(e) {
        if (this.removed) return this;
        var n = e.node || e[0].node;
        return n.parentNode.insertBefore(this.node, n), t._insertbefore(this, e, this.paper), 
        this;
    }, S.blur = function(e) {
        var n = this;
        if (0 !== +e) {
            var r = v("filter"), i = v("feGaussianBlur");
            n.attrs.blur = e, r.id = t.createUUID(), v(i, {
                stdDeviation: +e || 1.5
            }), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, v(n.node, {
                filter: "url(#" + r.id + ")"
            });
        } else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), 
        n.node.removeAttribute("filter");
    }, t._engine.circle = function(t, e, n, r) {
        var i = v("circle");
        t.canvas && t.canvas.appendChild(i);
        var o = new T(i, t);
        return o.attrs = {
            cx: e,
            cy: n,
            r: r,
            fill: "none",
            stroke: "#000"
        }, o.type = "circle", v(i, o.attrs), o;
    }, t._engine.rect = function(t, e, n, r, i, o) {
        var s = v("rect");
        t.canvas && t.canvas.appendChild(s);
        var a = new T(s, t);
        return a.attrs = {
            x: e,
            y: n,
            width: r,
            height: i,
            r: o || 0,
            rx: o || 0,
            ry: o || 0,
            fill: "none",
            stroke: "#000"
        }, a.type = "rect", v(s, a.attrs), a;
    }, t._engine.ellipse = function(t, e, n, r, i) {
        var o = v("ellipse");
        t.canvas && t.canvas.appendChild(o);
        var s = new T(o, t);
        return s.attrs = {
            cx: e,
            cy: n,
            rx: r,
            ry: i,
            fill: "none",
            stroke: "#000"
        }, s.type = "ellipse", v(o, s.attrs), s;
    }, t._engine.image = function(t, e, n, r, i, o) {
        var s = v("image");
        v(s, {
            x: n,
            y: r,
            width: i,
            height: o,
            preserveAspectRatio: "none"
        }), s.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(s);
        var a = new T(s, t);
        return a.attrs = {
            x: n,
            y: r,
            width: i,
            height: o,
            src: e
        }, a.type = "image", a;
    }, t._engine.text = function(e, n, r, i) {
        var o = v("text");
        e.canvas && e.canvas.appendChild(o);
        var s = new T(o, e);
        return s.attrs = {
            x: n,
            y: r,
            "text-anchor": "middle",
            text: i,
            font: t._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, s.type = "text", _(s, s.attrs), s;
    }, t._engine.setSize = function(t, e) {
        return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), 
        this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), 
        this;
    }, t._engine.create = function() {
        var e = t._getContainer.apply(0, arguments), n = e && e.container, r = e.x, i = e.y, o = e.width, s = e.height;
        if (!n) throw Error("SVG container not found.");
        var a, l = v("svg"), u = "overflow:hidden;";
        return r = r || 0, i = i || 0, o = o || 512, s = s || 342, v(l, {
            height: s,
            version: 1.1,
            width: o,
            xmlns: "http://www.w3.org/2000/svg"
        }), 1 == n ? (l.style.cssText = u + "position:absolute;left:" + r + "px;top:" + i + "px", 
        t._g.doc.body.appendChild(l), a = 1) : (l.style.cssText = u + "position:relative", 
        n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l)), n = new t._Paper(), 
        n.width = o, n.height = s, n.canvas = l, n.clear(), n._left = n._top = 0, a && (n.renderfix = function() {}), 
        n.renderfix(), n;
    }, t._engine.setViewBox = function(t, e, n, r, i) {
        h("raphael.setViewBox", this, this._viewBox, [ t, e, n, r, i ]);
        var o, a, l = s(n / this.width, r / this.height), u = this.top, c = i ? "meet" : "xMinYMin";
        for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, o = "0 0 " + this.width + f + this.height) : (this._vbSize = l, 
        o = t + f + e + f + n + f + r), v(this.canvas, {
            viewBox: o,
            preserveAspectRatio: c
        }); l && u; ) a = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({
            "stroke-width": a
        }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
        return this._viewBox = [ t, e, n, r, !!i ], this;
    }, t.prototype.renderfix = function() {
        var t, e = this.canvas, n = e.style;
        try {
            t = e.getScreenCTM() || e.createSVGMatrix();
        } catch (r) {
            t = e.createSVGMatrix();
        }
        var i = -t.e % 1, o = -t.f % 1;
        (i || o) && (i && (this._left = (this._left + i) % 1, n.left = this._left + "px"), 
        o && (this._top = (this._top + o) % 1, n.top = this._top + "px"));
    }, t.prototype.clear = function() {
        t.eve("raphael.clear", this);
        for (var e = this.canvas; e.firstChild; ) e.removeChild(e.firstChild);
        this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), 
        e.appendChild(this.desc), e.appendChild(this.defs = v("defs"));
    }, t.prototype.remove = function() {
        h("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
    };
    var N = t.st;
    for (var E in S) S[e](E) && !N[e](E) && (N[E] = function(t) {
        return function() {
            var e = arguments;
            return this.forEach(function(n) {
                n[t].apply(n, e);
            });
        };
    }(E));
}(window.Raphael), window.Raphael.vml && function(t) {
    var e = "hasOwnProperty", n = String, r = parseFloat, i = Math, o = i.round, s = i.max, a = i.min, l = i.abs, u = "fill", h = /[, ]+/, c = t.eve, f = " progid:DXImageTransform.Microsoft", p = " ", d = "", g = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }, v = /([clmz]),?([^clmz]*)/gi, m = / progid:\S+Blur\([^\)]+\)/g, y = /-?[^,\s-]+/g, x = "position:absolute;left:0;top:0;width:1px;height:1px", b = 21600, w = {
        path: 1,
        rect: 1,
        image: 1
    }, _ = {
        circle: 1,
        ellipse: 1
    }, k = function(e) {
        var r = /[ahqstv]/gi, i = t._pathToAbsolute;
        if (n(e).match(r) && (i = t._path2curve), r = /[clmz]/g, i == t._pathToAbsolute && !n(e).match(r)) {
            var s = n(e).replace(v, function(t, e, n) {
                var r = [], i = "m" == e.toLowerCase(), s = g[e];
                return n.replace(y, function(t) {
                    i && 2 == r.length && (s += r + g["m" == e ? "l" : "L"], r = []), r.push(o(t * b));
                }), s + r;
            });
            return s;
        }
        var a, l, u = i(e);
        s = [];
        for (var h = 0, c = u.length; c > h; h++) {
            a = u[h], l = u[h][0].toLowerCase(), "z" == l && (l = "x");
            for (var f = 1, m = a.length; m > f; f++) l += o(a[f] * b) + (f != m - 1 ? "," : d);
            s.push(l);
        }
        return s.join(p);
    }, C = function(e, n, r) {
        var i = t.matrix();
        return i.rotate(-e, .5, .5), {
            dx: i.x(n, r),
            dy: i.y(n, r)
        };
    }, T = function(t, e, n, r, i, o) {
        var s = t._, a = t.matrix, h = s.fillpos, c = t.node, f = c.style, d = 1, g = "", v = b / e, m = b / n;
        if (f.visibility = "hidden", e && n) {
            if (c.coordsize = l(v) + p + l(m), f.rotation = o * (0 > e * n ? -1 : 1), o) {
                var y = C(o, r, i);
                r = y.dx, i = y.dy;
            }
            if (0 > e && (g += "x"), 0 > n && (g += " y") && (d = -1), f.flip = g, c.coordorigin = r * -v + p + i * -m, 
            h || s.fillsize) {
                var x = c.getElementsByTagName(u);
                x = x && x[0], c.removeChild(x), h && (y = C(o, a.x(h[0], h[1]), a.y(h[0], h[1])), 
                x.position = y.dx * d + p + y.dy * d), s.fillsize && (x.size = s.fillsize[0] * l(e) + p + s.fillsize[1] * l(n)), 
                c.appendChild(x);
            }
            f.visibility = "visible";
        }
    };
    t.toString = function() {
        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version;
    };
    var S = function(t, e, r) {
        for (var i = n(e).toLowerCase().split("-"), o = r ? "end" : "start", s = i.length, a = "classic", l = "medium", u = "medium"; s--; ) switch (i[s]) {
          case "block":
          case "classic":
          case "oval":
          case "diamond":
          case "open":
          case "none":
            a = i[s];
            break;

          case "wide":
          case "narrow":
            u = i[s];
            break;

          case "long":
          case "short":
            l = i[s];
        }
        var h = t.node.getElementsByTagName("stroke")[0];
        h[o + "arrow"] = a, h[o + "arrowlength"] = l, h[o + "arrowwidth"] = u;
    }, N = function(i, l) {
        i.attrs = i.attrs || {};
        var c = i.node, f = i.attrs, g = c.style, v = w[i.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r), m = _[i.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry), y = i;
        for (var x in l) l[e](x) && (f[x] = l[x]);
        if (v && (f.path = t._getPath[i.type](i), i._.dirty = 1), l.href && (c.href = l.href), 
        l.title && (c.title = l.title), l.target && (c.target = l.target), l.cursor && (g.cursor = l.cursor), 
        "blur" in l && i.blur(l.blur), (l.path && "path" == i.type || v) && (c.path = k(~n(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), 
        "image" == i.type && (i._.fillpos = [ f.x, f.y ], i._.fillsize = [ f.width, f.height ], 
        T(i, 1, 1, 0, 0, 0))), "transform" in l && i.transform(l.transform), m) {
            var C = +f.cx, N = +f.cy, A = +f.rx || +f.r || 0, B = +f.ry || +f.r || 0;
            c.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((C - A) * b), o((N - B) * b), o((C + A) * b), o((N + B) * b), o(C * b));
        }
        if ("clip-rect" in l) {
            var M = n(l["clip-rect"]).split(h);
            if (4 == M.length) {
                M[2] = +M[2] + +M[0], M[3] = +M[3] + +M[1];
                var F = c.clipRect || t._g.doc.createElement("div"), j = F.style;
                j.clip = t.format("rect({1}px {2}px {3}px {0}px)", M), c.clipRect || (j.position = "absolute", 
                j.top = 0, j.left = 0, j.width = i.paper.width + "px", j.height = i.paper.height + "px", 
                c.parentNode.insertBefore(F, c), F.appendChild(c), c.clipRect = F);
            }
            l["clip-rect"] || c.clipRect && (c.clipRect.style.clip = "auto");
        }
        if (i.textpath) {
            var H = i.textpath.style;
            l.font && (H.font = l.font), l["font-family"] && (H.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), 
            l["font-size"] && (H.fontSize = l["font-size"]), l["font-weight"] && (H.fontWeight = l["font-weight"]), 
            l["font-style"] && (H.fontStyle = l["font-style"]);
        }
        if ("arrow-start" in l && S(y, l["arrow-start"]), "arrow-end" in l && S(y, l["arrow-end"], 1), 
        null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
            var D = c.getElementsByTagName(u), P = !1;
            if (D = D && D[0], !D && (P = D = L(u)), "image" == i.type && l.src && (D.src = l.src), 
            l.fill && (D.on = !0), (null == D.on || "none" == l.fill || null === l.fill) && (D.on = !1), 
            D.on && l.fill) {
                var I = n(l.fill).match(t._ISURL);
                if (I) {
                    D.parentNode == c && c.removeChild(D), D.rotate = !0, D.src = I[1], D.type = "tile";
                    var O = i.getBBox(1);
                    D.position = O.x + p + O.y, i._.fillpos = [ O.x, O.y ], t._preload(I[1], function() {
                        i._.fillsize = [ this.offsetWidth, this.offsetHeight ];
                    });
                } else D.color = t.getRGB(l.fill).hex, D.src = d, D.type = "solid", t.getRGB(l.fill).error && (y.type in {
                    circle: 1,
                    ellipse: 1
                } || "r" != n(l.fill).charAt()) && E(y, l.fill, D) && (f.fill = "none", f.gradient = l.fill, 
                D.rotate = !1);
            }
            if ("fill-opacity" in l || "opacity" in l) {
                var z = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                z = a(s(z, 0), 1), D.opacity = z, D.src && (D.color = "none");
            }
            c.appendChild(D);
            var R = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0], q = !1;
            !R && (q = R = L("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (R.on = !0), 
            ("none" == l.stroke || null === l.stroke || null == R.on || 0 == l.stroke || 0 == l["stroke-width"]) && (R.on = !1);
            var W = t.getRGB(l.stroke);
            R.on && l.stroke && (R.color = W.hex), z = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+W.o + 1 || 2) - 1);
            var $ = .75 * (r(l["stroke-width"]) || 1);
            if (z = a(s(z, 0), 1), null == l["stroke-width"] && ($ = f["stroke-width"]), l["stroke-width"] && (R.weight = $), 
            $ && 1 > $ && (z *= $) && (R.weight = 1), R.opacity = z, l["stroke-linejoin"] && (R.joinstyle = l["stroke-linejoin"] || "miter"), 
            R.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (R.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), 
            l["stroke-dasharray"]) {
                var X = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                R.dashstyle = X[e](l["stroke-dasharray"]) ? X[l["stroke-dasharray"]] : d;
            }
            q && c.appendChild(R);
        }
        if ("text" == y.type) {
            y.paper.canvas.style.display = d;
            var Y = y.paper.span, V = 100, G = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
            g = Y.style, f.font && (g.font = f.font), f["font-family"] && (g.fontFamily = f["font-family"]), 
            f["font-weight"] && (g.fontWeight = f["font-weight"]), f["font-style"] && (g.fontStyle = f["font-style"]), 
            G = r(f["font-size"] || G && G[0]) || 10, g.fontSize = G * V + "px", y.textpath.string && (Y.innerHTML = n(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var U = Y.getBoundingClientRect();
            y.W = f.w = (U.right - U.left) / V, y.H = f.h = (U.bottom - U.top) / V, y.X = f.x, 
            y.Y = f.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = t.format("m{0},{1}l{2},{1}", o(f.x * b), o(f.y * b), o(f.x * b) + 1));
            for (var Q = [ "x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size" ], Z = 0, J = Q.length; J > Z; Z++) if (Q[Z] in l) {
                y._.dirty = 1;
                break;
            }
            switch (f["text-anchor"]) {
              case "start":
                y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                break;

              case "end":
                y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                break;

              default:
                y.textpath.style["v-text-align"] = "center", y.bbx = 0;
            }
            y.textpath.style["v-text-kern"] = !0;
        }
    }, E = function(e, o, s) {
        e.attrs = e.attrs || {};
        var a = (e.attrs, Math.pow), l = "linear", u = ".5 .5";
        if (e.attrs.gradient = o, o = n(o).replace(t._radial_gradient, function(t, e, n) {
            return l = "radial", e && n && (e = r(e), n = r(n), a(e - .5, 2) + a(n - .5, 2) > .25 && (n = i.sqrt(.25 - a(e - .5, 2)) * (2 * (n > .5) - 1) + .5), 
            u = e + p + n), d;
        }), o = o.split(/\s*\-\s*/), "linear" == l) {
            var h = o.shift();
            if (h = -r(h), isNaN(h)) return null;
        }
        var c = t._parseDots(o);
        if (!c) return null;
        if (e = e.shape || e.node, c.length) {
            e.removeChild(s), s.on = !0, s.method = "none", s.color = c[0].color, s.color2 = c[c.length - 1].color;
            for (var f = [], g = 0, v = c.length; v > g; g++) c[g].offset && f.push(c[g].offset + p + c[g].color);
            s.colors = f.length ? f.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", 
            s.focus = "100%", s.focussize = "0 0", s.focusposition = u, s.angle = 0) : (s.type = "gradient", 
            s.angle = (270 - h) % 360), e.appendChild(s);
        }
        return 1;
    }, A = function(e, n) {
        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, 
        this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = t.matrix(), 
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), 
        n.top = this, this.next = null;
    }, B = t.el;
    A.prototype = B, B.constructor = A, B.transform = function(e) {
        if (null == e) return this._.transform;
        var r, i = this.paper._viewBoxShift, o = i ? "s" + [ i.scale, i.scale ] + "-1-1t" + [ i.dx, i.dy ] : d;
        i && (r = e = n(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, o + e);
        var s, a = this.matrix.clone(), l = this.skew, u = this.node, h = ~n(this.attrs.fill).indexOf("-"), c = !n(this.attrs.fill).indexOf("url(");
        if (a.translate(-.5, -.5), c || h || "image" == this.type) if (l.matrix = "1 0 0 1", 
        l.offset = "0 0", s = a.split(), h && s.noRotation || !s.isSimple) {
            u.style.filter = a.toFilter();
            var f = this.getBBox(), g = this.getBBox(1), v = f.x - g.x, m = f.y - g.y;
            u.coordorigin = v * -b + p + m * -b, T(this, 1, 1, v, m, 0);
        } else u.style.filter = d, T(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate); else u.style.filter = d, 
        l.matrix = n(a), l.offset = a.offset();
        return r && (this._.transform = r), this;
    }, B.rotate = function(t, e, i) {
        if (this.removed) return this;
        if (null != t) {
            if (t = n(t).split(h), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), 
            null == i && (e = i), null == e || null == i) {
                var o = this.getBBox(1);
                e = o.x + o.width / 2, i = o.y + o.height / 2;
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([ [ "r", t, e, i ] ])), 
            this;
        }
    }, B.translate = function(t, e) {
        return this.removed ? this : (t = n(t).split(h), t.length - 1 && (e = r(t[1])), 
        t = r(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), 
        this.transform(this._.transform.concat([ [ "t", t, e ] ])), this);
    }, B.scale = function(t, e, i, o) {
        if (this.removed) return this;
        if (t = n(t).split(h), t.length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3]), isNaN(i) && (i = null), 
        isNaN(o) && (o = null)), t = r(t[0]), null == e && (e = t), null == o && (i = o), 
        null == i || null == o) var s = this.getBBox(1);
        return i = null == i ? s.x + s.width / 2 : i, o = null == o ? s.y + s.height / 2 : o, 
        this.transform(this._.transform.concat([ [ "s", t, e, i, o ] ])), this._.dirtyT = 1, 
        this;
    }, B.hide = function() {
        return !this.removed && (this.node.style.display = "none"), this;
    }, B.show = function() {
        return !this.removed && (this.node.style.display = d), this;
    }, B._getBBox = function() {
        return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        };
    }, B.remove = function() {
        if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), 
            t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
            this.removed = !0;
        }
    }, B.attr = function(n, r) {
        if (this.removed) return this;
        if (null == n) {
            var i = {};
            for (var o in this.attrs) this.attrs[e](o) && (i[o] = this.attrs[o]);
            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, 
            i.transform = this._.transform, i;
        }
        if (null == r && t.is(n, "string")) {
            if (n == u && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            for (var s = n.split(h), a = {}, l = 0, f = s.length; f > l; l++) n = s[l], a[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
            return f - 1 ? a : a[s[0]];
        }
        if (this.attrs && null == r && t.is(n, "array")) {
            for (a = {}, l = 0, f = n.length; f > l; l++) a[n[l]] = this.attr(n[l]);
            return a;
        }
        var p;
        null != r && (p = {}, p[n] = r), null == r && t.is(n, "object") && (p = n);
        for (var d in p) c("raphael.attr." + d + "." + this.id, this, p[d]);
        if (p) {
            for (d in this.paper.customAttributes) if (this.paper.customAttributes[e](d) && p[e](d) && t.is(this.paper.customAttributes[d], "function")) {
                var g = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
                this.attrs[d] = p[d];
                for (var v in g) g[e](v) && (p[v] = g[v]);
            }
            p.text && "text" == this.type && (this.textpath.string = p.text), N(this, p);
        }
        return this;
    }, B.toFront = function() {
        return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), 
        this;
    }, B.toBack = function() {
        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), 
        t._toback(this, this.paper)), this);
    }, B.insertAfter = function(e) {
        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), 
        e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), 
        t._insertafter(this, e, this.paper), this);
    }, B.insertBefore = function(e) {
        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), 
        t._insertbefore(this, e, this.paper), this);
    }, B.blur = function(e) {
        var n = this.node.runtimeStyle, r = n.filter;
        r = r.replace(m, d), 0 !== +e ? (this.attrs.blur = e, n.filter = r + p + f + ".Blur(pixelradius=" + (+e || 1.5) + ")", 
        n.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (n.filter = r, n.margin = 0, 
        delete this.attrs.blur);
    }, t._engine.path = function(t, e) {
        var n = L("shape");
        n.style.cssText = x, n.coordsize = b + p + b, n.coordorigin = e.coordorigin;
        var r = new A(n, e), i = {
            fill: "none",
            stroke: "#000"
        };
        t && (i.path = t), r.type = "path", r.path = [], r.Path = d, N(r, i), e.canvas.appendChild(n);
        var o = L("skew");
        return o.on = !0, n.appendChild(o), r.skew = o, r.transform(d), r;
    }, t._engine.rect = function(e, n, r, i, o, s) {
        var a = t._rectPath(n, r, i, o, s), l = e.path(a), u = l.attrs;
        return l.X = u.x = n, l.Y = u.y = r, l.W = u.width = i, l.H = u.height = o, u.r = s, 
        u.path = a, l.type = "rect", l;
    }, t._engine.ellipse = function(t, e, n, r, i) {
        var o = t.path();
        return o.attrs, o.X = e - r, o.Y = n - i, o.W = 2 * r, o.H = 2 * i, o.type = "ellipse", 
        N(o, {
            cx: e,
            cy: n,
            rx: r,
            ry: i
        }), o;
    }, t._engine.circle = function(t, e, n, r) {
        var i = t.path();
        return i.attrs, i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", 
        N(i, {
            cx: e,
            cy: n,
            r: r
        }), i;
    }, t._engine.image = function(e, n, r, i, o, s) {
        var a = t._rectPath(r, i, o, s), l = e.path(a).attr({
            stroke: "none"
        }), h = l.attrs, c = l.node, f = c.getElementsByTagName(u)[0];
        return h.src = n, l.X = h.x = r, l.Y = h.y = i, l.W = h.width = o, l.H = h.height = s, 
        h.path = a, l.type = "image", f.parentNode == c && c.removeChild(f), f.rotate = !0, 
        f.src = n, f.type = "tile", l._.fillpos = [ r, i ], l._.fillsize = [ o, s ], c.appendChild(f), 
        T(l, 1, 1, 0, 0, 0), l;
    }, t._engine.text = function(e, r, i, s) {
        var a = L("shape"), l = L("path"), u = L("textpath");
        r = r || 0, i = i || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", o(r * b), o(i * b), o(r * b) + 1), 
        l.textpathok = !0, u.string = n(s), u.on = !0, a.style.cssText = x, a.coordsize = b + p + b, 
        a.coordorigin = "0 0";
        var h = new A(a, e), c = {
            fill: "#000",
            stroke: "none",
            font: t._availableAttrs.font,
            text: s
        };
        h.shape = a, h.path = l, h.textpath = u, h.type = "text", h.attrs.text = n(s), h.attrs.x = r, 
        h.attrs.y = i, h.attrs.w = 1, h.attrs.h = 1, N(h, c), a.appendChild(u), a.appendChild(l), 
        e.canvas.appendChild(a);
        var f = L("skew");
        return f.on = !0, a.appendChild(f), h.skew = f, h.transform(d), h;
    }, t._engine.setSize = function(e, n) {
        var r = this.canvas.style;
        return this.width = e, this.height = n, e == +e && (e += "px"), n == +n && (n += "px"), 
        r.width = e, r.height = n, r.clip = "rect(0 " + e + " " + n + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), 
        this;
    }, t._engine.setViewBox = function(e, n, r, i, o) {
        t.eve("raphael.setViewBox", this, this._viewBox, [ e, n, r, i, o ]);
        var a, l, u = this.width, h = this.height, c = 1 / s(r / u, i / h);
        return o && (a = h / i, l = u / r, u > r * a && (e -= (u - r * a) / 2 / a), h > i * l && (n -= (h - i * l) / 2 / l)), 
        this._viewBox = [ e, n, r, i, !!o ], this._viewBoxShift = {
            dx: -e,
            dy: -n,
            scale: c
        }, this.forEach(function(t) {
            t.transform("...");
        }), this;
    };
    var L;
    t._engine.initWin = function(t) {
        var e = t.document;
        e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), 
            L = function(t) {
                return e.createElement("<rvml:" + t + ' class="rvml">');
            };
        } catch (n) {
            L = function(t) {
                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
        }
    }, t._engine.initWin(t._g.win), t._engine.create = function() {
        var e = t._getContainer.apply(0, arguments), n = e.container, r = e.height, i = e.width, o = e.x, s = e.y;
        if (!n) throw Error("VML container not found.");
        var a = new t._Paper(), l = a.canvas = t._g.doc.createElement("div"), u = l.style;
        return o = o || 0, s = s || 0, i = i || 512, r = r || 342, a.width = i, a.height = r, 
        i == +i && (i += "px"), r == +r && (r += "px"), a.coordsize = 1e3 * b + p + 1e3 * b, 
        a.coordorigin = "0 0", a.span = t._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", 
        l.appendChild(a.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 
        1 == n ? (t._g.doc.body.appendChild(l), u.left = o + "px", u.top = s + "px", u.position = "absolute") : n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), 
        a.renderfix = function() {}, a;
    }, t.prototype.clear = function() {
        t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), 
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", 
        this.canvas.appendChild(this.span), this.bottom = this.top = null;
    }, t.prototype.remove = function() {
        t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
        return !0;
    };
    var M = t.st;
    for (var F in B) B[e](F) && !M[e](F) && (M[F] = function(t) {
        return function() {
            var e = arguments;
            return this.forEach(function(n) {
                n[t].apply(n, e);
            });
        };
    }(F));
}(window.Raphael), function() {
    var t, e, n, r, i = [].slice, o = {}.hasOwnProperty, s = function(t, e) {
        function n() {
            this.constructor = t;
        }
        for (var r in e) o.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
        t;
    }, a = function(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    }, l = [].indexOf || function(t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
        return -1;
    };
    e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
        function t() {}
        return t.prototype.on = function(t, e) {
            return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), 
            this.handlers[t].push(e);
        }, t.prototype.fire = function() {
            var t, e, n, r, o, s, a;
            if (n = arguments[0], t = arguments.length >= 2 ? i.call(arguments, 1) : [], null != this.handlers && null != this.handlers[n]) {
                for (s = this.handlers[n], a = [], r = 0, o = s.length; o > r; r++) e = s[r], a.push(e.apply(null, t));
                return a;
            }
        }, t;
    }(), e.commas = function(t) {
        var e, n, r, i;
        return null != t ? (r = 0 > t ? "-" : "", e = Math.abs(t), n = Math.floor(e).toFixed(0), 
        r += n.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), i = "" + e, i.length > n.length && (r += i.slice(n.length)), 
        r) : "-";
    }, e.pad2 = function(t) {
        return (10 > t ? "0" : "") + t;
    }, e.Grid = function(n) {
        function r(e) {
            if (this.el = "string" == typeof e.element ? t(document.getElementById(e.element)) : t(e.element), 
            null == this.el || 0 === this.el.length) throw Error("Graph container element not found");
            this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), void 0 !== this.options.data && 0 !== this.options.data.length && ("string" == typeof this.options.units && (this.options.postUnits = e.units), 
            this.r = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, 
            this.dirty = !1, this.init && this.init(), this.setData(this.options.data));
        }
        return s(r, n), r.prototype.gridDefaults = {
            dateFormat: null,
            gridLineColor: "#aaa",
            gridStrokeWidth: .5,
            gridTextColor: "#888",
            gridTextSize: 12,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: [ "#666633", "#999966", "#cc6666", "#663333" ],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: [ "#005a04", "#ccffbb", "#3a5f0b", "#005502" ]
        }, r.prototype.setData = function(t, n) {
            var r, i, o, s, a, l, u, h, c, f, p, d;
            return null == n && (n = !0), f = this.cumulative ? 0 : null, p = this.cumulative ? 0 : null, 
            this.options.goals.length > 0 && (a = Math.min.apply(null, this.options.goals), 
            s = Math.max.apply(null, this.options.goals), p = null != p ? Math.min(p, a) : a, 
            f = null != f ? Math.max(f, s) : s), this.data = function() {
                var n, r, s;
                for (s = [], o = n = 0, r = t.length; r > n; o = ++n) u = t[o], l = {}, l.label = u[this.options.xkey], 
                this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = "" + new Date(l.label))) : l.x = o, 
                h = 0, l.y = function() {
                    var t, e, n, r;
                    for (n = this.options.ykeys, r = [], i = t = 0, e = n.length; e > t; i = ++t) c = n[i], 
                    d = u[c], "string" == typeof d && (d = parseFloat(d)), null != d && "number" != typeof d && (d = null), 
                    null != d && (this.cumulative ? h += d : null != f ? (f = Math.max(d, f), p = Math.min(d, p)) : f = p = d), 
                    this.cumulative && null != h && (f = Math.max(h, f), p = Math.min(h, p)), r.push(d);
                    return r;
                }.call(this), s.push(l);
                return s;
            }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
                return (t.x > e.x) - (e.x > t.x);
            })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, 
            this.events = [], this.options.parseTime && this.options.events.length > 0 && (this.events = function() {
                var t, n, i, o;
                for (i = this.options.events, o = [], t = 0, n = i.length; n > t; t++) r = i[t], 
                o.push(e.parseDate(r));
                return o;
            }.call(this), this.xmax = Math.max(this.xmax, Math.max.apply(null, this.events)), 
            this.xmin = Math.min(this.xmin, Math.min.apply(null, this.events))), this.xmin === this.xmax && (this.xmin -= 1, 
            this.xmax += 1), "string" == typeof this.options.ymax ? "auto" === this.options.ymax.slice(0, 4) ? this.options.ymax.length > 5 ? (this.ymax = parseInt(this.options.ymax.slice(5), 10), 
            null != f && (this.ymax = Math.max(f, this.ymax))) : this.ymax = null != f ? f : 0 : this.ymax = parseInt(this.options.ymax, 10) : this.ymax = this.options.ymax, 
            "string" == typeof this.options.ymin ? "auto" === this.options.ymin.slice(0, 4) ? this.options.ymin.length > 5 ? (this.ymin = parseInt(this.options.ymin.slice(5), 10), 
            null != p && (this.ymin = Math.min(p, this.ymin))) : this.ymin = null !== p ? p : 0 : this.ymin = parseInt(this.options.ymin, 10) : this.ymin = this.options.ymin, 
            this.ymin === this.ymax && (p && (this.ymin -= 1), this.ymax += 1), this.yInterval = (this.ymax - this.ymin) / (this.options.numLines - 1), 
            this.precision = this.yInterval > 0 && 1 > this.yInterval ? -Math.floor(Math.log(this.yInterval) / Math.log(10)) : 0, 
            this.dirty = !0, n ? this.redraw() : void 0;
        }, r.prototype._calc = function() {
            var t, e, n;
            return n = this.el.width(), t = this.el.height(), (this.elementWidth !== n || this.elementHeight !== t || this.dirty) && (this.elementWidth = n, 
            this.elementHeight = t, this.dirty = !1, e = Math.max(this.measureText(this.yAxisFormat(this.ymin), this.options.gridTextSize).width, this.measureText(this.yAxisFormat(this.ymax), this.options.gridTextSize).width), 
            this.left = e + this.options.padding, this.right = this.elementWidth - this.options.padding, 
            this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding - 1.5 * this.options.gridTextSize, 
            this.width = this.right - this.left, this.height = this.bottom - this.top, this.dx = this.width / (this.xmax - this.xmin), 
            this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0;
        }, r.prototype.transY = function(t) {
            return this.bottom - (t - this.ymin) * this.dy;
        }, r.prototype.transX = function(t) {
            return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx;
        }, r.prototype.redraw = function() {
            return this.r.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), 
            this.draw ? this.draw() : void 0;
        }, r.prototype.drawGoals = function() {
            var t, e, n, r, i, o;
            for (i = this.options.goals, o = [], e = n = 0, r = i.length; r > n; e = ++n) t = i[e], 
            o.push(this.r.path("M" + this.left + "," + this.transY(t) + "H" + (this.left + this.width)).attr("stroke", this.options.goalLineColors[e % this.options.goalLineColors.length]).attr("stroke-width", this.options.goalStrokeWidth));
            return o;
        }, r.prototype.drawEvents = function() {
            var t, e, n, r, i, o;
            for (i = this.events, o = [], e = n = 0, r = i.length; r > n; e = ++n) t = i[e], 
            o.push(this.r.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", this.options.eventLineColors[e % this.options.eventLineColors.length]).attr("stroke-width", this.options.eventStrokeWidth));
            return o;
        }, r.prototype.drawGrid = function() {
            var t, e, n, r, i, o, s, a;
            for (t = this.ymin, e = this.ymax, a = [], n = o = t, s = this.yInterval; e >= t ? e >= o : o >= e; n = o += s) r = parseFloat(n.toFixed(this.precision)), 
            i = this.transY(r), this.r.text(this.left - this.options.padding / 2, i, this.yAxisFormat(r)).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor).attr("text-anchor", "end"), 
            a.push(this.r.path("M" + this.left + "," + i + "H" + (this.left + this.width)).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth));
            return a;
        }, r.prototype.measureText = function(t, e) {
            var n, r;
            return null == e && (e = 12), r = this.r.text(100, 100, t).attr("font-size", e), 
            n = r.getBBox(), r.remove(), n;
        }, r.prototype.yAxisFormat = function(t) {
            return this.yLabelFormat(t);
        }, r.prototype.yLabelFormat = function(t) {
            return "" + this.options.preUnits + e.commas(t) + this.options.postUnits;
        }, r;
    }(e.EventEmitter), e.parseDate = function(t) {
        var e, n, r, i, o, s, a, l, u, h, c;
        return "number" == typeof t ? t : (n = t.match(/^(\d+) Q(\d)$/), i = t.match(/^(\d+)-(\d+)$/), 
        o = t.match(/^(\d+)-(\d+)-(\d+)$/), a = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), 
        u = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), 
        n ? new Date(parseInt(n[1], 10), 3 * parseInt(n[2], 10) - 1, 1).getTime() : i ? new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, 1).getTime() : o ? new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime() : a ? (h = new Date(parseInt(a[1], 10), 0, 1), 
        4 !== h.getDay() && h.setMonth(0, 1 + (4 - h.getDay() + 7) % 7), h.getTime() + 6048e5 * parseInt(a[2], 10)) : l ? l[6] ? (s = 0, 
        "Z" !== l[6] && (s = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (s = 0 - s)), 
        Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + s)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : u ? (c = parseFloat(u[6]), 
        e = Math.floor(c), r = Math.round(1e3 * (c - e)), u[8] ? (s = 0, "Z" !== u[8] && (s = 60 * parseInt(u[10], 10) + parseInt(u[11], 10), 
        "+" === u[9] && (s = 0 - s)), Date.UTC(parseInt(u[1], 10), parseInt(u[2], 10) - 1, parseInt(u[3], 10), parseInt(u[4], 10), parseInt(u[5], 10) + s, e, r)) : new Date(parseInt(u[1], 10), parseInt(u[2], 10) - 1, parseInt(u[3], 10), parseInt(u[4], 10), parseInt(u[5], 10), e, r).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime());
    }, e.Line = function(t) {
        function n(t) {
            return this.updateHilight = a(this.updateHilight, this), this.hilight = a(this.hilight, this), 
            this.updateHover = a(this.updateHover, this), this instanceof e.Line ? (n.__super__.constructor.call(this, t), 
            void 0) : new e.Line(t);
        }
        return s(n, t), n.prototype.init = function() {
            var t, e = this;
            return this.pointGrow = Raphael.animation({
                r: this.options.pointSize + 3
            }, 25, "linear"), this.pointShrink = Raphael.animation({
                r: this.options.pointSize
            }, 25, "linear"), this.prevHilight = null, this.el.mousemove(function(t) {
                return e.updateHilight(t.pageX);
            }), this.options.hideHover && this.el.mouseout(function() {
                return e.hilight(null);
            }), t = function(t) {
                var n;
                return n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e.updateHilight(n.pageX), 
                n;
            }, this.el.bind("touchstart", t), this.el.bind("touchmove", t), this.el.bind("touchend", t), 
            this.el.bind("click", function() {
                return null !== e.prevHilight ? e.fire("click", e.prevHilight, e.data[e.prevHilight]) : void 0;
            });
        }, n.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: [ "#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed" ],
            pointWidths: [ 1 ],
            pointStrokeColors: [ "#ffffff" ],
            pointFillColors: [],
            hoverPaddingX: 10,
            hoverPaddingY: 5,
            hoverMargin: 10,
            hoverFillColor: "#fff",
            hoverBorderColor: "#ccc",
            hoverBorderWidth: 2,
            hoverOpacity: .95,
            hoverLabelColor: "#444",
            hoverFontSize: 12,
            smooth: !0,
            hideHover: !1,
            xLabels: "auto",
            xLabelFormat: null,
            continuousLine: !0
        }, n.prototype.calc = function() {
            return this.calcPoints(), this.generatePaths(), this.calcHoverMargins();
        }, n.prototype.calcPoints = function() {
            var t, e, n, r, i, o;
            for (i = this.data, o = [], n = 0, r = i.length; r > n; n++) t = i[n], t._x = this.transX(t.x), 
            o.push(t._y = function() {
                var n, r, i, o;
                for (i = t.y, o = [], n = 0, r = i.length; r > n; n++) e = i[n], null != e ? o.push(this.transY(e)) : o.push(e);
                return o;
            }.call(this));
            return o;
        }, n.prototype.calcHoverMargins = function() {
            var t, e;
            return this.hoverMargins = function() {
                var n, r, i, o;
                for (i = this.data.slice(1), o = [], t = n = 0, r = i.length; r > n; t = ++n) e = i[t], 
                o.push((e._x + this.data[t]._x) / 2);
                return o;
            }.call(this);
        }, n.prototype.generatePaths = function() {
            var t, n, r, i, o;
            return this.paths = function() {
                var s, a, u, h;
                for (h = [], r = s = 0, a = this.options.ykeys.length; a >= 0 ? a > s : s > a; r = a >= 0 ? ++s : --s) o = this.options.smooth === !0 || (u = this.options.ykeys[r], 
                l.call(this.options.smooth, u) >= 0), n = function() {
                    var t, e, n, o;
                    for (n = this.data, o = [], t = 0, e = n.length; e > t; t++) i = n[t], void 0 !== i._y[r] && o.push({
                        x: i._x,
                        y: i._y[r]
                    });
                    return o;
                }.call(this), this.options.continuousLine && (n = function() {
                    var e, r, i;
                    for (i = [], e = 0, r = n.length; r > e; e++) t = n[e], null !== t.y && i.push(t);
                    return i;
                }()), n.length > 1 ? h.push(e.Line.createPath(n, o, this.bottom)) : h.push(null);
                return h;
            }.call(this);
        }, n.prototype.draw = function() {
            return this.drawXAxis(), this.drawSeries(), this.drawHover(), this.hilight(this.options.hideHover ? null : this.data.length - 1);
        }, n.prototype.drawXAxis = function() {
            var t, n, r, i, o, s, a, l, u, h, c = this;
            for (a = this.bottom + 1.25 * this.options.gridTextSize, s = 50, i = null, t = function(t, e) {
                var n, r;
                return n = c.r.text(c.transX(e), a, t).attr("font-size", c.options.gridTextSize).attr("fill", c.options.gridTextColor), 
                r = n.getBBox(), (null == i || i >= r.x + r.width) && r.x >= 0 && r.x + r.width < c.el.width() ? i = r.x - s : n.remove();
            }, r = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [ [ this.data[0].label, this.data[0].x ] ] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                var t, e, n, r;
                for (n = this.data, r = [], t = 0, e = n.length; e > t; t++) o = n[t], r.push([ o.label, o.x ]);
                return r;
            }.call(this), r.reverse(), h = [], l = 0, u = r.length; u > l; l++) n = r[l], h.push(t(n[0], n[1]));
            return h;
        }, n.prototype.drawSeries = function() {
            var t, e, n, r, i, o, s, a, l;
            for (e = i = s = this.options.ykeys.length - 1; 0 >= s ? 0 >= i : i >= 0; e = 0 >= s ? ++i : --i) n = this.paths[e], 
            null !== n && this.r.path(n).attr("stroke", this.colorForSeries(e)).attr("stroke-width", this.options.lineWidth);
            for (this.seriesPoints = function() {
                var t, n, r;
                for (r = [], e = t = 0, n = this.options.ykeys.length; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t) r.push([]);
                return r;
            }.call(this), l = [], e = o = a = this.options.ykeys.length - 1; 0 >= a ? 0 >= o : o >= 0; e = 0 >= a ? ++o : --o) l.push(function() {
                var n, i, o, s;
                for (o = this.data, s = [], n = 0, i = o.length; i > n; n++) r = o[n], t = null != r._y[e] ? this.r.circle(r._x, r._y[e], this.options.pointSize).attr("fill", this.pointFillColorForSeries(e) || this.colorForSeries(e)).attr("stroke-width", this.strokeWidthForSeries(e)).attr("stroke", this.strokeForSeries(e)) : null, 
                s.push(this.seriesPoints[e].push(t));
                return s;
            }.call(this));
            return l;
        }, n.createPath = function(t, n, r) {
            var i, o, s, a, l, u, h, c, f, p, d, g, v, m;
            for (h = "", n && (s = e.Line.gradients(t)), c = {
                y: null
            }, a = v = 0, m = t.length; m > v; a = ++v) i = t[a], null != i.y && (null != c.y ? n ? (o = s[a], 
            u = s[a - 1], l = (i.x - c.x) / 4, f = c.x + l, d = Math.min(r, c.y + l * u), p = i.x - l, 
            g = Math.min(r, i.y - l * o), h += "C" + f + "," + d + "," + p + "," + g + "," + i.x + "," + i.y) : h += "L" + i.x + "," + i.y : n && null == s[a] || (h += "M" + i.x + "," + i.y)), 
            c = i;
            return h;
        }, n.gradients = function(t) {
            var e, n, r, i, o, s, a, l;
            for (n = function(t, e) {
                return (t.y - e.y) / (t.x - e.x);
            }, l = [], r = s = 0, a = t.length; a > s; r = ++s) e = t[r], null != e.y ? (i = t[r + 1] || {
                y: null
            }, o = t[r - 1] || {
                y: null
            }, null != o.y && null != i.y ? l.push(n(o, i)) : null != o.y ? l.push(n(o, e)) : null != i.y ? l.push(n(e, i)) : l.push(null)) : l.push(null);
            return l;
        }, n.prototype.drawHover = function() {
            var t, e, n, r, i, o;
            for (this.hoverHeight = 1.5 * this.options.hoverFontSize * (this.options.ykeys.length + 1), 
            this.hover = this.r.rect(-10, -this.hoverHeight / 2 - this.options.hoverPaddingY, 20, this.hoverHeight + 2 * this.options.hoverPaddingY, 10).attr("fill", this.options.hoverFillColor).attr("stroke", this.options.hoverBorderColor).attr("stroke-width", this.options.hoverBorderWidth).attr("opacity", this.options.hoverOpacity), 
            this.xLabel = this.r.text(0, .75 * this.options.hoverFontSize - this.hoverHeight / 2, "").attr("fill", this.options.hoverLabelColor).attr("font-weight", "bold").attr("font-size", this.options.hoverFontSize), 
            this.hoverSet = this.r.set(), this.hoverSet.push(this.hover), this.hoverSet.push(this.xLabel), 
            this.yLabels = [], o = [], t = r = 0, i = this.options.ykeys.length; i >= 0 ? i > r : r > i; t = i >= 0 ? ++r : --r) e = this.cumulative ? this.options.ykeys.length - t - 1 : t, 
            n = this.r.text(0, 1.5 * this.options.hoverFontSize * (e + 1.5) - this.hoverHeight / 2, "").attr("fill", this.colorForSeries(t)).attr("font-size", this.options.hoverFontSize), 
            this.yLabels.push(n), o.push(this.hoverSet.push(n));
            return o;
        }, n.prototype.updateHover = function(t) {
            var e, n, r, i, o, s, a, l, u, h;
            for (this.hoverSet.show(), i = this.data[t], this.xLabel.attr("text", i.label), 
            h = i.y, e = l = 0, u = h.length; u > l; e = ++l) s = h[e], this.yLabels[e].attr("text", "" + this.options.labels[e] + ": " + this.yLabelFormat(s));
            return r = Math.max.apply(null, function() {
                var t, e, r, i;
                for (r = this.yLabels, i = [], t = 0, e = r.length; e > t; t++) n = r[t], i.push(n.getBBox().width);
                return i;
            }.call(this)), r = Math.max(r, this.xLabel.getBBox().width), this.hover.attr("width", r + 2 * this.options.hoverPaddingX), 
            this.hover.attr("x", -this.options.hoverPaddingX - r / 2), a = Math.min.apply(null, function() {
                var t, e, n, r;
                for (n = i._y, r = [], t = 0, e = n.length; e > t; t++) s = n[t], null != s && r.push(s);
                return r;
            }().concat(this.bottom)), a = a > this.hoverHeight + 2 * this.options.hoverPaddingY + this.options.hoverMargin + this.top ? a - this.hoverHeight / 2 - this.options.hoverPaddingY - this.options.hoverMargin : a + this.hoverHeight / 2 + this.options.hoverPaddingY + this.options.hoverMargin, 
            a = Math.max(this.top + this.hoverHeight / 2 + this.options.hoverPaddingY, a), a = Math.min(this.bottom - this.hoverHeight / 2 - this.options.hoverPaddingY, a), 
            o = Math.min(this.right - r / 2 - this.options.hoverPaddingX, this.data[t]._x), 
            o = Math.max(this.left + r / 2 + this.options.hoverPaddingX, o), this.hoverSet.attr("transform", "t" + o + "," + a);
        }, n.prototype.hideHover = function() {
            return this.hoverSet.hide();
        }, n.prototype.hilight = function(t) {
            var e, n, r, i, o;
            if (null !== this.prevHilight && this.prevHilight !== t) for (e = n = 0, i = this.seriesPoints.length - 1; i >= 0 ? i >= n : n >= i; e = i >= 0 ? ++n : --n) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrink);
            if (null !== t && this.prevHilight !== t) {
                for (e = r = 0, o = this.seriesPoints.length - 1; o >= 0 ? o >= r : r >= o; e = o >= 0 ? ++r : --r) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrow);
                this.updateHover(t);
            }
            return this.prevHilight = t, null == t ? this.hideHover() : void 0;
        }, n.prototype.updateHilight = function(t) {
            var e, n, r;
            for (t -= this.el.offset().left, e = n = 0, r = this.hoverMargins.length; (r >= 0 ? r > n : n > r) && !(this.hoverMargins[e] > t); e = r >= 0 ? ++n : --n) ;
            return this.hilight(e);
        }, n.prototype.colorForSeries = function(t) {
            return this.options.lineColors[t % this.options.lineColors.length];
        }, n.prototype.strokeWidthForSeries = function(t) {
            return this.options.pointWidths[t % this.options.pointWidths.length];
        }, n.prototype.strokeForSeries = function(t) {
            return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length];
        }, n.prototype.pointFillColorForSeries = function(t) {
            return this.options.pointFillColors[t % this.options.pointFillColors.length];
        }, n;
    }(e.Grid), e.labelSeries = function(n, r, i, o, s) {
        var a, l, u, h, c, f, p, d, g, v, m;
        if (u = 200 * (r - n) / i, l = new Date(n), p = e.LABEL_SPECS[o], void 0 === p) for (m = e.AUTO_LABEL_ORDER, 
        g = 0, v = m.length; v > g; g++) if (h = m[g], f = e.LABEL_SPECS[h], u >= f.span) {
            p = f;
            break;
        }
        for (void 0 === p && (p = e.LABEL_SPECS.second), s && (p = t.extend({}, p, {
            fmt: s
        })), a = p.start(l), c = []; r >= (d = a.getTime()); ) d >= n && c.push([ p.fmt(a), d ]), 
        p.incr(a);
        return c;
    }, n = function(t) {
        return {
            span: 1e3 * 60 * t,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours());
            },
            fmt: function(t) {
                return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes());
            },
            incr: function(e) {
                return e.setMinutes(e.getMinutes() + t);
            }
        };
    }, r = function(t) {
        return {
            span: 1e3 * t,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes());
            },
            fmt: function(t) {
                return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds());
            },
            incr: function(e) {
                return e.setSeconds(e.getSeconds() + t);
            }
        };
    }, e.LABEL_SPECS = {
        decade: {
            span: 1728e8,
            start: function(t) {
                return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1);
            },
            fmt: function(t) {
                return "" + t.getFullYear();
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 10);
            }
        },
        year: {
            span: 1728e7,
            start: function(t) {
                return new Date(t.getFullYear(), 0, 1);
            },
            fmt: function(t) {
                return "" + t.getFullYear();
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 1);
            }
        },
        month: {
            span: 24192e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), 1);
            },
            fmt: function(t) {
                return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1);
            },
            incr: function(t) {
                return t.setMonth(t.getMonth() + 1);
            }
        },
        day: {
            span: 864e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate());
            },
            fmt: function(t) {
                return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate());
            },
            incr: function(t) {
                return t.setDate(t.getDate() + 1);
            }
        },
        hour: n(60),
        "30min": n(30),
        "15min": n(15),
        "10min": n(10),
        "5min": n(5),
        minute: n(1),
        "30sec": r(30),
        "15sec": r(15),
        "10sec": r(10),
        "5sec": r(5),
        second: r(1)
    }, e.AUTO_LABEL_ORDER = [ "decade", "year", "month", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second" ], 
    e.Area = function(t) {
        function n(t) {
            return this instanceof e.Area ? (this.cumulative = !0, n.__super__.constructor.call(this, t), 
            void 0) : new e.Area(t);
        }
        return s(n, t), n.prototype.calcPoints = function() {
            var t, e, n, r, i, o, s;
            for (o = this.data, s = [], r = 0, i = o.length; i > r; r++) t = o[r], t._x = this.transX(t.x), 
            e = 0, s.push(t._y = function() {
                var r, i, o, s;
                for (o = t.y, s = [], r = 0, i = o.length; i > r; r++) n = o[r], e += n || 0, s.push(this.transY(e));
                return s;
            }.call(this));
            return s;
        }, n.prototype.drawSeries = function() {
            var t, e, r, i;
            for (t = r = i = this.options.ykeys.length - 1; 0 >= i ? 0 >= r : r >= 0; t = 0 >= i ? ++r : --r) e = this.paths[t], 
            null !== e && (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", 
            this.r.path(e).attr("fill", this.fillForSeries(t)).attr("stroke-width", 0));
            return n.__super__.drawSeries.call(this);
        }, n.prototype.fillForSeries = function(t) {
            var e;
            return e = Raphael.rgb2hsl(this.colorForSeries(t)), Raphael.hsl(e.h, Math.min(255, .75 * e.s), Math.min(255, 1.25 * e.l));
        }, n;
    }(e.Line), e.Bar = function(n) {
        function r(n) {
            return this.updateHilight = a(this.updateHilight, this), this.hilight = a(this.hilight, this), 
            this.updateHover = a(this.updateHover, this), this instanceof e.Bar ? (r.__super__.constructor.call(this, t.extend({}, n, {
                parseTime: !1
            })), void 0) : new e.Bar(n);
        }
        return s(r, n), r.prototype.init = function() {
            var t, e = this;
            return this.cumulative = this.options.stacked, this.prevHilight = null, this.el.mousemove(function(t) {
                return e.updateHilight(t.pageX);
            }), this.options.hideHover && this.el.mouseout(function() {
                return e.hilight(null);
            }), t = function(t) {
                var n;
                return n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e.updateHilight(n.pageX), 
                n;
            }, this.el.bind("touchstart", t), this.el.bind("touchmove", t), this.el.bind("touchend", t), 
            this.el.bind("click", function() {
                return null !== e.prevHilight ? e.fire("click", e.prevHilight, e.data[e.prevHilight]) : void 0;
            });
        }, r.prototype.defaults = {
            barSizeRatio: .75,
            barGap: 3,
            barColors: [ "#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed" ],
            hoverPaddingX: 10,
            hoverPaddingY: 5,
            hoverMargin: 10,
            hoverFillColor: "#fff",
            hoverBorderColor: "#ccc",
            hoverBorderWidth: 2,
            hoverOpacity: .95,
            hoverLabelColor: "#444",
            hoverFontSize: 12,
            hideHover: !1
        }, r.prototype.calc = function() {
            return this.calcBars(), this.calcHoverMargins();
        }, r.prototype.calcBars = function() {
            var t, e, n, r, i, o, s;
            for (o = this.data, s = [], t = r = 0, i = o.length; i > r; t = ++r) e = o[t], e._x = this.left + this.width * (t + .5) / this.data.length, 
            s.push(e._y = function() {
                var t, r, i, o;
                for (i = e.y, o = [], t = 0, r = i.length; r > t; t++) n = i[t], null != n ? o.push(this.transY(n)) : o.push(null);
                return o;
            }.call(this));
            return s;
        }, r.prototype.calcHoverMargins = function() {
            var t;
            return this.hoverMargins = function() {
                var e, n, r;
                for (r = [], t = e = 1, n = this.data.length; n >= 1 ? n > e : e > n; t = n >= 1 ? ++e : --e) r.push(this.left + t * this.width / this.data.length);
                return r;
            }.call(this);
        }, r.prototype.draw = function() {
            return this.drawXAxis(), this.drawSeries(), this.drawHover(), this.hilight(this.options.hideHover ? null : this.data.length - 1);
        }, r.prototype.drawXAxis = function() {
            var t, e, n, r, i, o, s, a, l, u;
            for (s = this.bottom + 1.25 * this.options.gridTextSize, o = 50, r = null, u = [], 
            t = a = 0, l = this.data.length; l >= 0 ? l > a : a > l; t = l >= 0 ? ++a : --a) i = this.data[this.data.length - 1 - t], 
            e = this.r.text(i._x, s, i.label).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor), 
            n = e.getBBox(), (null == r || r >= n.x + n.width) && n.x >= 0 && n.x + n.width < this.el.width() ? u.push(r = n.x - o) : u.push(e.remove());
            return u;
        }, r.prototype.drawSeries = function() {
            var t, e, n, r, i, o, s, a, l, u, h, c, f, p;
            return n = this.width / this.options.data.length, a = null != this.options.stacked ? 1 : this.options.ykeys.length, 
            t = (n * this.options.barSizeRatio - this.options.barGap * (a - 1)) / a, s = n * (1 - this.options.barSizeRatio) / 2, 
            p = 0 >= this.ymin && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
                var a, d, g, v;
                for (g = this.data, v = [], r = a = 0, d = g.length; d > a; r = ++a) l = g[r], i = 0, 
                v.push(function() {
                    var a, d, g, v;
                    for (g = l._y, v = [], u = a = 0, d = g.length; d > a; u = ++a) f = g[u], null !== f ? (p ? (c = Math.min(f, p), 
                    e = Math.max(f, p)) : (c = f, e = this.bottom), o = this.left + r * n + s, this.options.stacked || (o += u * (t + this.options.barGap)), 
                    h = e - c, this.options.stacked && (c -= i), this.r.rect(o, c, t, h).attr("fill", this.colorFor(l, u, "bar")).attr("stroke-width", 0), 
                    v.push(i += h)) : v.push(null);
                    return v;
                }.call(this));
                return v;
            }.call(this);
        }, r.prototype.drawHover = function() {
            var t, e, n, r, i;
            for (this.hoverHeight = 1.5 * this.options.hoverFontSize * (this.options.ykeys.length + 1), 
            this.hover = this.r.rect(-10, -this.hoverHeight / 2 - this.options.hoverPaddingY, 20, this.hoverHeight + 2 * this.options.hoverPaddingY, 10).attr("fill", this.options.hoverFillColor).attr("stroke", this.options.hoverBorderColor).attr("stroke-width", this.options.hoverBorderWidth).attr("opacity", this.options.hoverOpacity), 
            this.xLabel = this.r.text(0, .75 * this.options.hoverFontSize - this.hoverHeight / 2, "").attr("fill", this.options.hoverLabelColor).attr("font-weight", "bold").attr("font-size", this.options.hoverFontSize), 
            this.hoverSet = this.r.set(), this.hoverSet.push(this.hover), this.hoverSet.push(this.xLabel), 
            this.yLabels = [], i = [], t = n = 0, r = this.options.ykeys.length; r >= 0 ? r > n : n > r; t = r >= 0 ? ++n : --n) e = this.r.text(0, 1.5 * this.options.hoverFontSize * (t + 1.5) - this.hoverHeight / 2, "").attr("font-size", this.options.hoverFontSize), 
            this.yLabels.push(e), i.push(this.hoverSet.push(e));
            return i;
        }, r.prototype.updateHover = function(t) {
            var e, n, r, i, o, s, a, l, u, h;
            for (this.hoverSet.show(), i = this.data[t], this.xLabel.attr("text", i.label), 
            h = i.y, e = l = 0, u = h.length; u > l; e = ++l) s = h[e], this.yLabels[e].attr("fill", this.colorFor(i, e, "hover")), 
            this.yLabels[e].attr("text", "" + this.options.labels[e] + ": " + this.yLabelFormat(s));
            return r = Math.max.apply(null, function() {
                var t, e, r, i;
                for (r = this.yLabels, i = [], t = 0, e = r.length; e > t; t++) n = r[t], i.push(n.getBBox().width);
                return i;
            }.call(this)), r = Math.max(r, this.xLabel.getBBox().width), this.hover.attr("width", r + 2 * this.options.hoverPaddingX), 
            this.hover.attr("x", -this.options.hoverPaddingX - r / 2), a = (this.bottom + this.top) / 2, 
            o = Math.min(this.right - r / 2 - this.options.hoverPaddingX, this.data[t]._x), 
            o = Math.max(this.left + r / 2 + this.options.hoverPaddingX, o), this.hoverSet.attr("transform", "t" + o + "," + a);
        }, r.prototype.hideHover = function() {
            return this.hoverSet.hide();
        }, r.prototype.hilight = function(t) {
            return null !== t && this.prevHilight !== t && this.updateHover(t), this.prevHilight = t, 
            null == t ? this.hideHover() : void 0;
        }, r.prototype.updateHilight = function(t) {
            var e, n, r;
            for (t -= this.el.offset().left, e = n = 0, r = this.hoverMargins.length; (r >= 0 ? r > n : n > r) && !(this.hoverMargins[e] > t); e = r >= 0 ? ++n : --n) ;
            return this.hilight(e);
        }, r.prototype.colorFor = function(t, e, n) {
            var r, i;
            return "function" == typeof this.options.barColors ? (r = {
                x: t.x,
                y: t.y[e],
                label: t.label
            }, i = {
                index: e,
                key: this.options.ykeys[e],
                label: this.options.labels[e]
            }, this.options.barColors.call(this, r, i, n)) : this.options.barColors[e % this.options.barColors.length];
        }, r;
    }(e.Grid), e.Donut = function(n) {
        function r(n) {
            if (this.click = a(this.click, this), this.select = a(this.select, this), !(this instanceof e.Donut)) return new e.Donut(n);
            if (this.el = "string" == typeof n.element ? t(document.getElementById(n.element)) : t(n.element), 
            this.options = t.extend({}, this.defaults, n), null === this.el || 0 === this.el.length) throw Error("Graph placeholder not found.");
            void 0 !== n.data && 0 !== n.data.length && (this.data = n.data, this.redraw());
        }
        return s(r, n), r.prototype.defaults = {
            colors: [ "#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135" ],
            formatter: e.commas
        }, r.prototype.redraw = function() {
            var t, n, r, i, o, s, a, l, u, h, c, f, p, d, g, v, m, y, x, b, w, _, k, C;
            for (this.el.empty(), this.r = new Raphael(this.el[0]), n = this.el.width() / 2, 
            r = this.el.height() / 2, p = (Math.min(n, r) - 10) / 3, f = 0, w = this.data, g = 0, 
            y = w.length; y > g; g++) d = w[g], f += d.value;
            for (u = 5 / (2 * p), t = 1.9999 * Math.PI - u * this.data.length, a = 0, s = 0, 
            this.segments = [], _ = this.data, o = v = 0, x = _.length; x > v; o = ++v) i = _[o], 
            h = a + u + t * (i.value / f), c = new e.DonutSegment(n, r, 2 * p, p, a, h, this.options.colors[s % this.options.colors.length], i, o), 
            c.render(this.r), this.segments.push(c), c.on("hover", this.select), c.on("click", this.click), 
            a = h, s += 1;
            for (this.text1 = this.r.text(n, r - 10, "").attr({
                "font-size": 15,
                "font-weight": 800
            }), this.text2 = this.r.text(n, r + 10, "").attr({
                "font-size": 14
            }), l = Math.max.apply(null, function() {
                var t, e, n, r;
                for (n = this.data, r = [], t = 0, e = n.length; e > t; t++) i = n[t], r.push(i.value);
                return r;
            }.call(this)), s = 0, k = this.data, C = [], m = 0, b = k.length; b > m; m++) {
                if (i = k[m], i.value === l) {
                    this.select(s);
                    break;
                }
                C.push(s += 1);
            }
            return C;
        }, r.prototype.select = function(t) {
            var e, n, r, i, o;
            for (o = this.segments, r = 0, i = o.length; i > r; r++) e = o[r], e.deselect();
            return n = "number" == typeof t ? this.segments[t] : t, n.select(), this.setLabels(n.data.label, this.options.formatter(n.data.value, n.data));
        }, r.prototype.click = function(t, e) {
            return this.fire("click", t, e);
        }, r.prototype.setLabels = function(t, e) {
            var n, r, i, o, s, a, l, u;
            return n = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, o = 1.8 * n, 
            i = n / 2, r = n / 3, this.text1.attr({
                text: t,
                transform: ""
            }), s = this.text1.getBBox(), a = Math.min(o / s.width, i / s.height), this.text1.attr({
                transform: "S" + a + "," + a + "," + (s.x + s.width / 2) + "," + (s.y + s.height)
            }), this.text2.attr({
                text: e,
                transform: ""
            }), l = this.text2.getBBox(), u = Math.min(o / l.width, r / l.height), this.text2.attr({
                transform: "S" + u + "," + u + "," + (l.x + l.width / 2) + "," + l.y
            });
        }, r;
    }(e.EventEmitter), e.DonutSegment = function(t) {
        function e(t, e, n, r, i, o, s, l, u) {
            this.cx = t, this.cy = e, this.inner = n, this.outer = r, this.color = s, this.data = l, 
            this.i = u, this.deselect = a(this.deselect, this), this.select = a(this.select, this), 
            this.sin_p0 = Math.sin(i), this.cos_p0 = Math.cos(i), this.sin_p1 = Math.sin(o), 
            this.cos_p1 = Math.cos(o), this.long = o - i > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), 
            this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner);
        }
        return s(e, t), e.prototype.calcArcPoints = function(t) {
            return [ this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1 ];
        }, e.prototype.calcSegment = function(t, e) {
            var n, r, i, o, s, a, l, u, h, c;
            return h = this.calcArcPoints(t), n = h[0], i = h[1], r = h[2], o = h[3], c = this.calcArcPoints(e), 
            s = c[0], l = c[1], a = c[2], u = c[3], "M" + n + "," + i + ("A" + t + "," + t + ",0," + this.long + ",0," + r + "," + o) + ("L" + a + "," + u) + ("A" + e + "," + e + ",0," + this.long + ",1," + s + "," + l) + "Z";
        }, e.prototype.calcArc = function(t) {
            var e, n, r, i, o;
            return o = this.calcArcPoints(t), e = o[0], r = o[1], n = o[2], i = o[3], "M" + e + "," + r + ("A" + t + "," + t + ",0," + this.long + ",0," + n + "," + i);
        }, e.prototype.render = function(t) {
            var e = this;
            return this.arc = t.path(this.hilight).attr({
                stroke: this.color,
                "stroke-width": 2,
                opacity: 0
            }), this.seg = t.path(this.path).attr({
                fill: this.color,
                stroke: "white",
                "stroke-width": 3
            }).hover(function() {
                return e.fire("hover", e);
            }).click(function() {
                return e.fire("click", e.i, e.data);
            });
        }, e.prototype.select = function() {
            return this.selected ? void 0 : (this.seg.animate({
                path: this.selectedPath
            }, 150, "<>"), this.arc.animate({
                opacity: 1
            }, 150, "<>"), this.selected = !0);
        }, e.prototype.deselect = function() {
            return this.selected ? (this.seg.animate({
                path: this.path
            }, 150, "<>"), this.arc.animate({
                opacity: 0
            }, 150, "<>"), this.selected = !1) : void 0;
        }, e;
    }(e.EventEmitter);
}.call(this), function(t) {
    t.fn.fitText = function(e, n) {
        var r = e || 1, i = t.extend({
            minFontSize: Number.NEGATIVE_INFINITY,
            maxFontSize: Number.POSITIVE_INFINITY
        }, n);
        return this.each(function() {
            var e = t(this), n = function() {
                e.css("font-size", Math.max(Math.min(e.width() / (10 * r), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)));
            };
            n(), t(window).on("resize", n);
        });
    };
}(jQuery), !function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("tooltip", t, e);
    };
    e.prototype = {
        constructor: e,
        init: function(e, n, r) {
            var i, o;
            this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.enabled = !0, 
            "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != this.options.trigger && (i = "hover" == this.options.trigger ? "mouseenter" : "focus", 
            o = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, t.proxy(this.enter, this)), 
            this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this))), 
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(e) {
            return e = t.extend({}, t.fn[this.type].defaults, e, this.$element.data()), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e;
        },
        enter: function(e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", 
            this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show();
            }, n.options.delay.show), void 0) : n.show();
        },
        leave: function(e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", 
            this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide();
            }, n.options.delay.hide), void 0) : n.hide();
        },
        show: function() {
            var t, e, n, r, i, o;
            if (this.hasContent() && this.enabled) {
                if (t = this.tip(), t.is(":visible")) return this;
                switch (this.setContent(), this.options.animation && t.addClass("fade"), i = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, 
                t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), document.body.appendChild(t[0]), e = this.getPosition(), n = t[0].offsetWidth, 
                r = t[0].offsetHeight, i) {
                  case "bottom":
                    o = {
                        top: e.top + e.height,
                        left: e.left + e.width / 2 - n / 2
                    };
                    break;

                  case "top":
                    o = {
                        top: e.top - r,
                        left: e.left + e.width / 2 - n / 2
                    };
                    break;

                  case "left":
                    o = {
                        top: e.top + e.height / 2 - r / 2,
                        left: e.left - n
                    };
                    break;

                  case "right":
                    o = {
                        top: e.top + e.height / 2 - r / 2,
                        left: e.left + e.width
                    };
                }
                t.offset(o).addClass(i).addClass("in");
            }
        },
        setContent: function() {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
        },
        hide: function() {
            function e() {
                var e = setTimeout(function() {
                    n.off(t.support.transition.end).detach();
                }, 500);
                n.one(t.support.transition.end, function() {
                    clearTimeout(e), n.detach();
                });
            }
            var n = this.tip();
            return n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : n.detach(), 
            this;
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").removeAttr("title");
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function() {
            var e = this.$element[0];
            return t.extend({}, e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset());
        },
        getTitle: function() {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title);
        },
        tip: function() {
            return this.$tip = this.$tip || t(this.options.template);
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
        },
        enable: function() {
            this.enabled = !0;
        },
        disable: function() {
            this.enabled = !1;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        },
        toggle: function(e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            n[n.tip().hasClass("in") ? "hide" : "show"]();
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var r = t(this), i = r.data("tooltip"), o = "object" == typeof n && n;
            i || r.data("tooltip", i = new e(this, o)), "string" == typeof n && i[n]();
        });
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !1
    }, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this;
    };
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e);
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e,
        setContent: function() {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), 
            t.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-content") || ("function" == typeof n.content ? n.content.call(e[0]) : n.content);
        },
        tip: function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var r = t(this), i = r.data("popover"), o = "object" == typeof n && n;
            i || r.data("popover", i = new e(this, o)), "string" == typeof n && i[n]();
        });
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
    }), t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this;
    };
}(window.jQuery);