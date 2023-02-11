// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function m(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function u(t, e) {
    if (e.length < t) throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function bt(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bt = function(r) {
        return typeof r;
    } : bt = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, bt(t);
}
function f(t) {
    u(1, arguments);
    var e = Object.prototype.toString.call(t);
    return t instanceof Date || bt(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
var ba = {};
function D() {
    return ba;
}
var ne = 6e4, oe = 36e5, Le = 1e3;
function J(t) {
    u(1, arguments);
    var e = 1, r = f(t), n = r.getUTCDay(), o = (n < e ? 7 : 0) + n - e;
    return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function ut(t) {
    u(1, arguments);
    var e = f(t), r = e.getUTCFullYear(), n = new Date(0);
    n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
    var o = J(n), a = new Date(0);
    a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var i = J(a);
    return e.getTime() >= o.getTime() ? r + 1 : e.getTime() >= i.getTime() ? r : r - 1;
}
function Bn(t) {
    u(1, arguments);
    var e = ut(t), r = new Date(0);
    r.setUTCFullYear(e, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var n = J(r);
    return n;
}
var Cl = 6048e5;
function ft(t) {
    u(1, arguments);
    var e = f(t), r = J(e).getTime() - Bn(e).getTime();
    return Math.round(r / Cl) + 1;
}
function X(t, e) {
    var r, n, o, a, i, s, l, c;
    u(1, arguments);
    var p = D(), d = m((r = (n = (o = (a = e?.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : p.weekStartsOn) !== null && n !== void 0 ? n : (l = p.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var y = f(t), v = y.getUTCDay(), g = (v < d ? 7 : 0) + v - d;
    return y.setUTCDate(y.getUTCDate() - g), y.setUTCHours(0, 0, 0, 0), y;
}
function Ne(t, e) {
    var r, n, o, a, i, s, l, c;
    u(1, arguments);
    var p = f(t), d = p.getUTCFullYear(), y = D(), v = m((r = (n = (o = (a = e?.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : y.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = y.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
    if (!(v >= 1 && v <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var g = new Date(0);
    g.setUTCFullYear(d + 1, 0, v), g.setUTCHours(0, 0, 0, 0);
    var O = X(g, e), w = new Date(0);
    w.setUTCFullYear(d, 0, v), w.setUTCHours(0, 0, 0, 0);
    var P = X(w, e);
    return p.getTime() >= O.getTime() ? d + 1 : p.getTime() >= P.getTime() ? d : d - 1;
}
function Qn(t, e) {
    var r, n, o, a, i, s, l, c;
    u(1, arguments);
    var p = D(), d = m((r = (n = (o = (a = e?.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = p.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Ne(t, e), v = new Date(0);
    v.setUTCFullYear(y, 0, d), v.setUTCHours(0, 0, 0, 0);
    var g = X(v, e);
    return g;
}
var Ul = 6048e5;
function st(t, e) {
    u(1, arguments);
    var r = f(t), n = X(r, e).getTime() - Qn(r, e).getTime();
    return Math.round(n / Ul) + 1;
}
function ct(t) {
    return function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.width ? String(e.width) : t.defaultWidth, n = t.formats[r] || t.formats[t.defaultWidth];
        return n;
    };
}
var Xl = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}, Gl = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}, Vl = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}, Zl = {
    date: ct({
        formats: Xl,
        defaultWidth: "full"
    }),
    time: ct({
        formats: Gl,
        defaultWidth: "full"
    }),
    dateTime: ct({
        formats: Vl,
        defaultWidth: "full"
    })
};
function qe(t) {
    return function(e, r) {
        var n = r != null && r.context ? String(r.context) : "standalone", o;
        if (n === "formatting" && t.formattingValues) {
            var a = t.defaultFormattingWidth || t.defaultWidth, i = r != null && r.width ? String(r.width) : a;
            o = t.formattingValues[i] || t.formattingValues[a];
        } else {
            var s = t.defaultWidth, l = r != null && r.width ? String(r.width) : t.defaultWidth;
            o = t.values[l] || t.values[s];
        }
        var c = t.argumentCallback ? t.argumentCallback(e) : e;
        return o[c];
    };
}
var ec = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
}, tc = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
}, rc = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
}, nc = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
}, oc = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}, ac = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}, ic = function(e, r) {
    var n = Number(e), o = n % 100;
    if (o > 20 || o < 10) switch(o % 10){
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd";
    }
    return n + "th";
}, uc = {
    ordinalNumber: ic,
    era: qe({
        values: ec,
        defaultWidth: "wide"
    }),
    quarter: qe({
        values: tc,
        defaultWidth: "wide",
        argumentCallback: function(e) {
            return e - 1;
        }
    }),
    month: qe({
        values: rc,
        defaultWidth: "wide"
    }),
    day: qe({
        values: nc,
        defaultWidth: "wide"
    }),
    dayPeriod: qe({
        values: oc,
        defaultWidth: "wide",
        formattingValues: ac,
        defaultFormattingWidth: "wide"
    })
};
function Ae(t) {
    return function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, o = n && t.matchPatterns[n] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
        if (!a) return null;
        var i = a[0], s = n && t.parsePatterns[n] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(s) ? sc(s, function(d) {
            return d.test(i);
        }) : fc(s, function(d) {
            return d.test(i);
        }), c;
        c = t.valueCallback ? t.valueCallback(l) : l, c = r.valueCallback ? r.valueCallback(c) : c;
        var p = e.slice(i.length);
        return {
            value: c,
            rest: p
        };
    };
}
function fc(t, e) {
    for(var r in t)if (t.hasOwnProperty(r) && e(t[r])) return r;
}
function sc(t, e) {
    for(var r = 0; r < t.length; r++)if (e(t[r])) return r;
}
function zn(t) {
    return function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.match(t.matchPattern);
        if (!n) return null;
        var o = n[0], a = e.match(t.parsePattern);
        if (!a) return null;
        var i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
        i = r.valueCallback ? r.valueCallback(i) : i;
        var s = e.slice(o.length);
        return {
            value: i,
            rest: s
        };
    };
}
var lc = /^(\d+)(th|st|nd|rd)?/i, cc = /\d+/i, mc = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}, pc = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
}, dc = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}, vc = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
}, yc = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gc = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
}, hc = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bc = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
}, Oc = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wc = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}, _c = {
    ordinalNumber: zn({
        matchPattern: lc,
        parsePattern: cc,
        valueCallback: function(e) {
            return parseInt(e, 10);
        }
    }),
    era: Ae({
        matchPatterns: mc,
        defaultMatchWidth: "wide",
        parsePatterns: pc,
        defaultParseWidth: "any"
    }),
    quarter: Ae({
        matchPatterns: dc,
        defaultMatchWidth: "wide",
        parsePatterns: vc,
        defaultParseWidth: "any",
        valueCallback: function(e) {
            return e + 1;
        }
    }),
    month: Ae({
        matchPatterns: yc,
        defaultMatchWidth: "wide",
        parsePatterns: gc,
        defaultParseWidth: "any"
    }),
    day: Ae({
        matchPatterns: hc,
        defaultMatchWidth: "wide",
        parsePatterns: bc,
        defaultParseWidth: "any"
    }),
    dayPeriod: Ae({
        matchPatterns: Oc,
        defaultMatchWidth: "any",
        parsePatterns: wc,
        defaultParseWidth: "any"
    })
};
function Yi(t) {
    u(1, arguments);
    var e = f(t), r = e.getMonth();
    return r;
}
function Ui(t) {
    return u(1, arguments), f(t).getFullYear();
}
function fr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fr = function(r) {
        return typeof r;
    } : fr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, fr(t);
}
function eu(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Xn(t, e);
}
function Xn(t, e) {
    return Xn = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Xn(t, e);
}
function tu(t) {
    var e = Fc();
    return function() {
        var n = sr(t), o;
        if (e) {
            var a = sr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Hc(this, o);
    };
}
function Hc(t, e) {
    return e && (fr(e) === "object" || typeof e == "function") ? e : Gn(t);
}
function Gn(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Fc() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function sr(t) {
    return sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, sr(t);
}
function Zn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ki(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Jn(t, e, r) {
    return e && Ki(t.prototype, e), r && Ki(t, r), t;
}
function Vn(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Lc = 10, ru = function() {
    function t() {
        Zn(this, t), Vn(this, "subPriority", 0);
    }
    return Jn(t, [
        {
            key: "validate",
            value: function(r, n) {
                return !0;
            }
        }
    ]), t;
}(), nu = function(t) {
    eu(r, t);
    var e = tu(r);
    function r(n, o, a, i, s) {
        var l;
        return Zn(this, r), l = e.call(this), l.value = n, l.validateValue = o, l.setValue = a, l.priority = i, s && (l.subPriority = s), l;
    }
    return Jn(r, [
        {
            key: "validate",
            value: function(o, a) {
                return this.validateValue(o, this.value, a);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return this.setValue(o, a, this.value, i);
            }
        }
    ]), r;
}(ru), ou = function(t) {
    eu(r, t);
    var e = tu(r);
    function r() {
        var n;
        Zn(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Vn(Gn(n), "priority", Lc), Vn(Gn(n), "subPriority", -1), n;
    }
    return Jn(r, [
        {
            key: "set",
            value: function(o, a) {
                if (a.timestampIsSet) return o;
                var i = new Date(0);
                return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
            }
        }
    ]), r;
}(ru);
function $c(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function au(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Bc(t, e, r) {
    return e && au(t.prototype, e), r && au(t, r), t;
}
var b = function() {
    function t() {
        $c(this, t);
    }
    return Bc(t, [
        {
            key: "run",
            value: function(r, n, o, a) {
                var i = this.parse(r, n, o, a);
                return i ? {
                    setter: new nu(i.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: i.rest
                } : null;
            }
        },
        {
            key: "validate",
            value: function(r, n, o) {
                return !0;
            }
        }
    ]), t;
}();
function lr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lr = function(r) {
        return typeof r;
    } : lr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, lr(t);
}
function Qc(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function iu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function zc(t, e, r) {
    return e && iu(t.prototype, e), r && iu(t, r), t;
}
function jc(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Kn(t, e);
}
function Kn(t, e) {
    return Kn = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Kn(t, e);
}
function Xc(t) {
    var e = Vc();
    return function() {
        var n = cr(t), o;
        if (e) {
            var a = cr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Gc(this, o);
    };
}
function Gc(t, e) {
    return e && (lr(e) === "object" || typeof e == "function") ? e : eo(t);
}
function eo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Vc() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function cr(t) {
    return cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, cr(t);
}
function uu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var fu = function(t) {
    jc(r, t);
    var e = Xc(r);
    function r() {
        var n;
        Qc(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), uu(eo(n), "priority", 140), uu(eo(n), "incompatibleTokens", [
            "R",
            "u",
            "t",
            "T"
        ]), n;
    }
    return zc(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "G":
                    case "GG":
                    case "GGG":
                        return i.era(o, {
                            width: "abbreviated"
                        }) || i.era(o, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return i.era(o, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return i.era(o, {
                            width: "wide"
                        }) || i.era(o, {
                            width: "abbreviated"
                        }) || i.era(o, {
                            width: "narrow"
                        });
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return a.era = i, o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
var S = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
}, ee = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function I(t, e) {
    return t && {
        value: e(t.value),
        rest: t.rest
    };
}
function T(t, e) {
    var r = e.match(t);
    return r ? {
        value: parseInt(r[0], 10),
        rest: e.slice(r[0].length)
    } : null;
}
function te(t, e) {
    var r = e.match(t);
    if (!r) return null;
    if (r[0] === "Z") return {
        value: 0,
        rest: e.slice(1)
    };
    var n = r[1] === "+" ? 1 : -1, o = r[2] ? parseInt(r[2], 10) : 0, a = r[3] ? parseInt(r[3], 10) : 0, i = r[5] ? parseInt(r[5], 10) : 0;
    return {
        value: n * (o * oe + a * ne + i * Le),
        rest: e.slice(r[0].length)
    };
}
function mr(t) {
    return T(S.anyDigitsSigned, t);
}
function _(t, e) {
    switch(t){
        case 1:
            return T(S.singleDigit, e);
        case 2:
            return T(S.twoDigits, e);
        case 3:
            return T(S.threeDigits, e);
        case 4:
            return T(S.fourDigits, e);
        default:
            return T(new RegExp("^\\d{1," + t + "}"), e);
    }
}
function Je(t, e) {
    switch(t){
        case 1:
            return T(S.singleDigitSigned, e);
        case 2:
            return T(S.twoDigitsSigned, e);
        case 3:
            return T(S.threeDigitsSigned, e);
        case 4:
            return T(S.fourDigitsSigned, e);
        default:
            return T(new RegExp("^-?\\d{1," + t + "}"), e);
    }
}
function Ke(t) {
    switch(t){
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function pr(t, e) {
    var r = e > 0, n = r ? e : 1 - e, o;
    if (n <= 50) o = t || 100;
    else {
        var a = n + 50, i = Math.floor(a / 100) * 100, s = t >= a % 100;
        o = t + i - (s ? 100 : 0);
    }
    return r ? o : 1 - o;
}
function dr(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function vr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vr = function(r) {
        return typeof r;
    } : vr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, vr(t);
}
function Zc(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function su(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Jc(t, e, r) {
    return e && su(t.prototype, e), r && su(t, r), t;
}
function Kc(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && to(t, e);
}
function to(t, e) {
    return to = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, to(t, e);
}
function em(t) {
    var e = rm();
    return function() {
        var n = yr(t), o;
        if (e) {
            var a = yr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return tm(this, o);
    };
}
function tm(t, e) {
    return e && (vr(e) === "object" || typeof e == "function") ? e : ro(t);
}
function ro(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function rm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function yr(t) {
    return yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, yr(t);
}
function lu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var cu = function(t) {
    Kc(r, t);
    var e = em(r);
    function r() {
        var n;
        Zc(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), lu(ro(n), "priority", 130), lu(ro(n), "incompatibleTokens", [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Jc(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                var s = function(c) {
                    return {
                        year: c,
                        isTwoDigitYear: a === "yy"
                    };
                };
                switch(a){
                    case "y":
                        return I(_(4, o), s);
                    case "yo":
                        return I(i.ordinalNumber(o, {
                            unit: "year"
                        }), s);
                    default:
                        return I(_(a.length, o), s);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a.isTwoDigitYear || a.year > 0;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                var s = o.getUTCFullYear();
                if (i.isTwoDigitYear) {
                    var l = pr(i.year, s);
                    return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
                }
                var c = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
                return o.setUTCFullYear(c, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function gr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gr = function(r) {
        return typeof r;
    } : gr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, gr(t);
}
function nm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function mu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function om(t, e, r) {
    return e && mu(t.prototype, e), r && mu(t, r), t;
}
function am(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && no(t, e);
}
function no(t, e) {
    return no = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, no(t, e);
}
function im(t) {
    var e = fm();
    return function() {
        var n = hr(t), o;
        if (e) {
            var a = hr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return um(this, o);
    };
}
function um(t, e) {
    return e && (gr(e) === "object" || typeof e == "function") ? e : oo(t);
}
function oo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function fm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function hr(t) {
    return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, hr(t);
}
function pu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var du = function(t) {
    am(r, t);
    var e = im(r);
    function r() {
        var n;
        nm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), pu(oo(n), "priority", 130), pu(oo(n), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]), n;
    }
    return om(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                var s = function(c) {
                    return {
                        year: c,
                        isTwoDigitYear: a === "YY"
                    };
                };
                switch(a){
                    case "Y":
                        return I(_(4, o), s);
                    case "Yo":
                        return I(i.ordinalNumber(o, {
                            unit: "year"
                        }), s);
                    default:
                        return I(_(a.length, o), s);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a.isTwoDigitYear || a.year > 0;
            }
        },
        {
            key: "set",
            value: function(o, a, i, s) {
                var l = Ne(o, s);
                if (i.isTwoDigitYear) {
                    var c = pr(i.year, l);
                    return o.setUTCFullYear(c, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), X(o, s);
                }
                var p = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
                return o.setUTCFullYear(p, 0, s.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), X(o, s);
            }
        }
    ]), r;
}(b);
function br(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? br = function(r) {
        return typeof r;
    } : br = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, br(t);
}
function sm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function vu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function lm(t, e, r) {
    return e && vu(t.prototype, e), r && vu(t, r), t;
}
function cm(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && ao(t, e);
}
function ao(t, e) {
    return ao = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, ao(t, e);
}
function mm(t) {
    var e = dm();
    return function() {
        var n = Or(t), o;
        if (e) {
            var a = Or(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return pm(this, o);
    };
}
function pm(t, e) {
    return e && (br(e) === "object" || typeof e == "function") ? e : io(t);
}
function io(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function dm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Or(t) {
    return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Or(t);
}
function yu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var gu = function(t) {
    cm(r, t);
    var e = mm(r);
    function r() {
        var n;
        sm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), yu(io(n), "priority", 130), yu(io(n), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return lm(r, [
        {
            key: "parse",
            value: function(o, a) {
                return a === "R" ? Je(4, o) : Je(a.length, o);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                var s = new Date(0);
                return s.setUTCFullYear(i, 0, 4), s.setUTCHours(0, 0, 0, 0), J(s);
            }
        }
    ]), r;
}(b);
function wr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wr = function(r) {
        return typeof r;
    } : wr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, wr(t);
}
function vm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function hu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function ym(t, e, r) {
    return e && hu(t.prototype, e), r && hu(t, r), t;
}
function gm(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && uo(t, e);
}
function uo(t, e) {
    return uo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, uo(t, e);
}
function hm(t) {
    var e = Om();
    return function() {
        var n = _r(t), o;
        if (e) {
            var a = _r(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return bm(this, o);
    };
}
function bm(t, e) {
    return e && (wr(e) === "object" || typeof e == "function") ? e : fo(t);
}
function fo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Om() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function _r(t) {
    return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, _r(t);
}
function bu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Ou = function(t) {
    gm(r, t);
    var e = hm(r);
    function r() {
        var n;
        vm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), bu(fo(n), "priority", 130), bu(fo(n), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return ym(r, [
        {
            key: "parse",
            value: function(o, a) {
                return a === "u" ? Je(4, o) : Je(a.length, o);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function xr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xr = function(r) {
        return typeof r;
    } : xr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, xr(t);
}
function wm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function wu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function _m(t, e, r) {
    return e && wu(t.prototype, e), r && wu(t, r), t;
}
function xm(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && so(t, e);
}
function so(t, e) {
    return so = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, so(t, e);
}
function Dm(t) {
    var e = Sm();
    return function() {
        var n = Dr(t), o;
        if (e) {
            var a = Dr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Tm(this, o);
    };
}
function Tm(t, e) {
    return e && (xr(e) === "object" || typeof e == "function") ? e : lo(t);
}
function lo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Sm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Dr(t) {
    return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Dr(t);
}
function _u(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var xu = function(t) {
    xm(r, t);
    var e = Dm(r);
    function r() {
        var n;
        wm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), _u(lo(n), "priority", 120), _u(lo(n), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return _m(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "Q":
                    case "QQ":
                        return _(a.length, o);
                    case "Qo":
                        return i.ordinalNumber(o, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return i.quarter(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.quarter(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return i.quarter(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQ":
                    default:
                        return i.quarter(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.quarter(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.quarter(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 4;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Tr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tr = function(r) {
        return typeof r;
    } : Tr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Tr(t);
}
function Pm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Du(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Mm(t, e, r) {
    return e && Du(t.prototype, e), r && Du(t, r), t;
}
function Im(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && co(t, e);
}
function co(t, e) {
    return co = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, co(t, e);
}
function km(t) {
    var e = Nm();
    return function() {
        var n = Sr(t), o;
        if (e) {
            var a = Sr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Rm(this, o);
    };
}
function Rm(t, e) {
    return e && (Tr(e) === "object" || typeof e == "function") ? e : mo(t);
}
function mo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Nm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Sr(t) {
    return Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Sr(t);
}
function Tu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Su = function(t) {
    Im(r, t);
    var e = km(r);
    function r() {
        var n;
        Pm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Tu(mo(n), "priority", 120), Tu(mo(n), "incompatibleTokens", [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Mm(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "q":
                    case "qq":
                        return _(a.length, o);
                    case "qo":
                        return i.ordinalNumber(o, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return i.quarter(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.quarter(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return i.quarter(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqq":
                    default:
                        return i.quarter(o, {
                            width: "wide",
                            context: "standalone"
                        }) || i.quarter(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.quarter(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 4;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Pr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pr = function(r) {
        return typeof r;
    } : Pr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Pr(t);
}
function Ym(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Pu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function qm(t, e, r) {
    return e && Pu(t.prototype, e), r && Pu(t, r), t;
}
function Am(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && po(t, e);
}
function po(t, e) {
    return po = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, po(t, e);
}
function Wm(t) {
    var e = Cm();
    return function() {
        var n = Mr(t), o;
        if (e) {
            var a = Mr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Em(this, o);
    };
}
function Em(t, e) {
    return e && (Pr(e) === "object" || typeof e == "function") ? e : vo(t);
}
function vo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Cm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Mr(t) {
    return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Mr(t);
}
function Mu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Iu = function(t) {
    Am(r, t);
    var e = Wm(r);
    function r() {
        var n;
        Ym(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Mu(vo(n), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), Mu(vo(n), "priority", 110), n;
    }
    return qm(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                var s = function(c) {
                    return c - 1;
                };
                switch(a){
                    case "M":
                        return I(T(S.month, o), s);
                    case "MM":
                        return I(_(2, o), s);
                    case "Mo":
                        return I(i.ordinalNumber(o, {
                            unit: "month"
                        }), s);
                    case "MMM":
                        return i.month(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.month(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return i.month(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMM":
                    default:
                        return i.month(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.month(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.month(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 11;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Ir(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ir = function(r) {
        return typeof r;
    } : Ir = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Ir(t);
}
function Um(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ku(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Hm(t, e, r) {
    return e && ku(t.prototype, e), r && ku(t, r), t;
}
function Fm(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && yo(t, e);
}
function yo(t, e) {
    return yo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, yo(t, e);
}
function Lm(t) {
    var e = Bm();
    return function() {
        var n = kr(t), o;
        if (e) {
            var a = kr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return $m(this, o);
    };
}
function $m(t, e) {
    return e && (Ir(e) === "object" || typeof e == "function") ? e : go(t);
}
function go(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Bm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function kr(t) {
    return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, kr(t);
}
function Ru(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Nu = function(t) {
    Fm(r, t);
    var e = Lm(r);
    function r() {
        var n;
        Um(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Ru(go(n), "priority", 110), Ru(go(n), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Hm(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                var s = function(c) {
                    return c - 1;
                };
                switch(a){
                    case "L":
                        return I(T(S.month, o), s);
                    case "LL":
                        return I(_(2, o), s);
                    case "Lo":
                        return I(i.ordinalNumber(o, {
                            unit: "month"
                        }), s);
                    case "LLL":
                        return i.month(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.month(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return i.month(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLL":
                    default:
                        return i.month(o, {
                            width: "wide",
                            context: "standalone"
                        }) || i.month(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.month(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 11;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function ho(t, e, r) {
    u(2, arguments);
    var n = f(t), o = m(e), a = st(n, r) - o;
    return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Rr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rr = function(r) {
        return typeof r;
    } : Rr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Rr(t);
}
function Qm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Yu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function zm(t, e, r) {
    return e && Yu(t.prototype, e), r && Yu(t, r), t;
}
function jm(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && bo(t, e);
}
function bo(t, e) {
    return bo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, bo(t, e);
}
function Xm(t) {
    var e = Vm();
    return function() {
        var n = Nr(t), o;
        if (e) {
            var a = Nr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Gm(this, o);
    };
}
function Gm(t, e) {
    return e && (Rr(e) === "object" || typeof e == "function") ? e : Oo(t);
}
function Oo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Vm() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Nr(t) {
    return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Nr(t);
}
function qu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Au = function(t) {
    jm(r, t);
    var e = Xm(r);
    function r() {
        var n;
        Qm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), qu(Oo(n), "priority", 100), qu(Oo(n), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]), n;
    }
    return zm(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "w":
                        return T(S.week, o);
                    case "wo":
                        return i.ordinalNumber(o, {
                            unit: "week"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 53;
            }
        },
        {
            key: "set",
            value: function(o, a, i, s) {
                return X(ho(o, i, s), s);
            }
        }
    ]), r;
}(b);
function wo(t, e) {
    u(2, arguments);
    var r = f(t), n = m(e), o = ft(r) - n;
    return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function Yr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yr = function(r) {
        return typeof r;
    } : Yr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Yr(t);
}
function Zm(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Wu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Jm(t, e, r) {
    return e && Wu(t.prototype, e), r && Wu(t, r), t;
}
function Km(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && _o(t, e);
}
function _o(t, e) {
    return _o = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, _o(t, e);
}
function ep(t) {
    var e = rp();
    return function() {
        var n = qr(t), o;
        if (e) {
            var a = qr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return tp(this, o);
    };
}
function tp(t, e) {
    return e && (Yr(e) === "object" || typeof e == "function") ? e : xo(t);
}
function xo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function rp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function qr(t) {
    return qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, qr(t);
}
function Eu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Cu = function(t) {
    Km(r, t);
    var e = ep(r);
    function r() {
        var n;
        Zm(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Eu(xo(n), "priority", 100), Eu(xo(n), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Jm(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "I":
                        return T(S.week, o);
                    case "Io":
                        return i.ordinalNumber(o, {
                            unit: "week"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 53;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return J(wo(o, i));
            }
        }
    ]), r;
}(b);
function Ar(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ar = function(r) {
        return typeof r;
    } : Ar = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Ar(t);
}
function np(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Uu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function op(t, e, r) {
    return e && Uu(t.prototype, e), r && Uu(t, r), t;
}
function ap(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && To(t, e);
}
function To(t, e) {
    return To = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, To(t, e);
}
function ip(t) {
    var e = fp();
    return function() {
        var n = Er(t), o;
        if (e) {
            var a = Er(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return up(this, o);
    };
}
function up(t, e) {
    return e && (Ar(e) === "object" || typeof e == "function") ? e : Wr(t);
}
function Wr(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function fp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Er(t) {
    return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Er(t);
}
function Do(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var sp = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
], lp = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
], Hu = function(t) {
    ap(r, t);
    var e = ip(r);
    function r() {
        var n;
        np(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Do(Wr(n), "priority", 90), Do(Wr(n), "subPriority", 1), Do(Wr(n), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return op(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "d":
                        return T(S.date, o);
                    case "do":
                        return i.ordinalNumber(o, {
                            unit: "date"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                var i = o.getUTCFullYear(), s = dr(i), l = o.getUTCMonth();
                return s ? a >= 1 && a <= lp[l] : a >= 1 && a <= sp[l];
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCDate(i), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Cr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cr = function(r) {
        return typeof r;
    } : Cr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Cr(t);
}
function cp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Fu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function mp(t, e, r) {
    return e && Fu(t.prototype, e), r && Fu(t, r), t;
}
function pp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Po(t, e);
}
function Po(t, e) {
    return Po = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Po(t, e);
}
function dp(t) {
    var e = yp();
    return function() {
        var n = Hr(t), o;
        if (e) {
            var a = Hr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return vp(this, o);
    };
}
function vp(t, e) {
    return e && (Cr(e) === "object" || typeof e == "function") ? e : Ur(t);
}
function Ur(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function yp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Hr(t) {
    return Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Hr(t);
}
function So(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Lu = function(t) {
    pp(r, t);
    var e = dp(r);
    function r() {
        var n;
        cp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), So(Ur(n), "priority", 90), So(Ur(n), "subpriority", 1), So(Ur(n), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return mp(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "D":
                    case "DD":
                        return T(S.dayOfYear, o);
                    case "Do":
                        return i.ordinalNumber(o, {
                            unit: "date"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                var i = o.getUTCFullYear(), s = dr(i);
                return s ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMonth(0, i), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Ee(t, e, r) {
    var n, o, a, i, s, l, c, p;
    u(2, arguments);
    var d = D(), y = m((n = (o = (a = (i = r?.weekStartsOn) !== null && i !== void 0 ? i : r == null || (s = r.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && o !== void 0 ? o : (c = d.locale) === null || c === void 0 || (p = c.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(y >= 0 && y <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var v = f(t), g = m(e), O = v.getUTCDay(), w = g % 7, P = (w + 7) % 7, M = (P < y ? 7 : 0) + g - O;
    return v.setUTCDate(v.getUTCDate() + M), v;
}
function Fr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fr = function(r) {
        return typeof r;
    } : Fr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Fr(t);
}
function gp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function $u(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function hp(t, e, r) {
    return e && $u(t.prototype, e), r && $u(t, r), t;
}
function bp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Mo(t, e);
}
function Mo(t, e) {
    return Mo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Mo(t, e);
}
function Op(t) {
    var e = _p();
    return function() {
        var n = Lr(t), o;
        if (e) {
            var a = Lr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return wp(this, o);
    };
}
function wp(t, e) {
    return e && (Fr(e) === "object" || typeof e == "function") ? e : Io(t);
}
function Io(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function _p() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Lr(t) {
    return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Lr(t);
}
function Bu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Qu = function(t) {
    bp(r, t);
    var e = Op(r);
    function r() {
        var n;
        gp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Bu(Io(n), "priority", 90), Bu(Io(n), "incompatibleTokens", [
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return hp(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "E":
                    case "EE":
                    case "EEE":
                        return i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEE":
                    default:
                        return i.day(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 6;
            }
        },
        {
            key: "set",
            value: function(o, a, i, s) {
                return o = Ee(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function $r(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $r = function(r) {
        return typeof r;
    } : $r = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, $r(t);
}
function xp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function zu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Dp(t, e, r) {
    return e && zu(t.prototype, e), r && zu(t, r), t;
}
function Tp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && ko(t, e);
}
function ko(t, e) {
    return ko = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, ko(t, e);
}
function Sp(t) {
    var e = Mp();
    return function() {
        var n = Br(t), o;
        if (e) {
            var a = Br(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Pp(this, o);
    };
}
function Pp(t, e) {
    return e && ($r(e) === "object" || typeof e == "function") ? e : Ro(t);
}
function Ro(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Mp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Br(t) {
    return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Br(t);
}
function ju(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Xu = function(t) {
    Tp(r, t);
    var e = Sp(r);
    function r() {
        var n;
        xp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), ju(Ro(n), "priority", 90), ju(Ro(n), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Dp(r, [
        {
            key: "parse",
            value: function(o, a, i, s) {
                var l = function(p) {
                    var d = Math.floor((p - 1) / 7) * 7;
                    return (p + s.weekStartsOn + 6) % 7 + d;
                };
                switch(a){
                    case "e":
                    case "ee":
                        return I(_(a.length, o), l);
                    case "eo":
                        return I(i.ordinalNumber(o, {
                            unit: "day"
                        }), l);
                    case "eee":
                        return i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeee":
                        return i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeee":
                    default:
                        return i.day(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 6;
            }
        },
        {
            key: "set",
            value: function(o, a, i, s) {
                return o = Ee(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Qr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qr = function(r) {
        return typeof r;
    } : Qr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Qr(t);
}
function Ip(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Gu(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function kp(t, e, r) {
    return e && Gu(t.prototype, e), r && Gu(t, r), t;
}
function Rp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && No(t, e);
}
function No(t, e) {
    return No = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, No(t, e);
}
function Np(t) {
    var e = qp();
    return function() {
        var n = zr(t), o;
        if (e) {
            var a = zr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Yp(this, o);
    };
}
function Yp(t, e) {
    return e && (Qr(e) === "object" || typeof e == "function") ? e : Yo(t);
}
function Yo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function qp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function zr(t) {
    return zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, zr(t);
}
function Vu(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Zu = function(t) {
    Rp(r, t);
    var e = Np(r);
    function r() {
        var n;
        Ip(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Vu(Yo(n), "priority", 90), Vu(Yo(n), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T"
        ]), n;
    }
    return kp(r, [
        {
            key: "parse",
            value: function(o, a, i, s) {
                var l = function(p) {
                    var d = Math.floor((p - 1) / 7) * 7;
                    return (p + s.weekStartsOn + 6) % 7 + d;
                };
                switch(a){
                    case "c":
                    case "cc":
                        return I(_(a.length, o), l);
                    case "co":
                        return I(i.ordinalNumber(o, {
                            unit: "day"
                        }), l);
                    case "ccc":
                        return i.day(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "short",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return i.day(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return i.day(o, {
                            width: "short",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccc":
                    default:
                        return i.day(o, {
                            width: "wide",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "short",
                            context: "standalone"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 6;
            }
        },
        {
            key: "set",
            value: function(o, a, i, s) {
                return o = Ee(o, i, s), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function qo(t, e) {
    u(2, arguments);
    var r = m(e);
    r % 7 === 0 && (r = r - 7);
    var n = 1, o = f(t), a = o.getUTCDay(), i = r % 7, s = (i + 7) % 7, l = (s < n ? 7 : 0) + r - a;
    return o.setUTCDate(o.getUTCDate() + l), o;
}
function jr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jr = function(r) {
        return typeof r;
    } : jr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, jr(t);
}
function Ap(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ju(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Wp(t, e, r) {
    return e && Ju(t.prototype, e), r && Ju(t, r), t;
}
function Ep(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Ao(t, e);
}
function Ao(t, e) {
    return Ao = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Ao(t, e);
}
function Cp(t) {
    var e = Hp();
    return function() {
        var n = Xr(t), o;
        if (e) {
            var a = Xr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Up(this, o);
    };
}
function Up(t, e) {
    return e && (jr(e) === "object" || typeof e == "function") ? e : Wo(t);
}
function Wo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Hp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Xr(t) {
    return Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Xr(t);
}
function Ku(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var ef = function(t) {
    Ep(r, t);
    var e = Cp(r);
    function r() {
        var n;
        Ap(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Ku(Wo(n), "priority", 90), Ku(Wo(n), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T"
        ]), n;
    }
    return Wp(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                var s = function(c) {
                    return c === 0 ? 7 : c;
                };
                switch(a){
                    case "i":
                    case "ii":
                        return _(a.length, o);
                    case "io":
                        return i.ordinalNumber(o, {
                            unit: "day"
                        });
                    case "iii":
                        return I(i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiiii":
                        return I(i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiiiii":
                        return I(i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiii":
                    default:
                        return I(i.day(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "short",
                            context: "formatting"
                        }) || i.day(o, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 7;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o = qo(o, i), o.setUTCHours(0, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Gr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gr = function(r) {
        return typeof r;
    } : Gr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Gr(t);
}
function Fp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function tf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Lp(t, e, r) {
    return e && tf(t.prototype, e), r && tf(t, r), t;
}
function $p(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Eo(t, e);
}
function Eo(t, e) {
    return Eo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Eo(t, e);
}
function Bp(t) {
    var e = zp();
    return function() {
        var n = Vr(t), o;
        if (e) {
            var a = Vr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Qp(this, o);
    };
}
function Qp(t, e) {
    return e && (Gr(e) === "object" || typeof e == "function") ? e : Co(t);
}
function Co(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function zp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Vr(t) {
    return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Vr(t);
}
function rf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var nf = function(t) {
    $p(r, t);
    var e = Bp(r);
    function r() {
        var n;
        Fp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), rf(Co(n), "priority", 80), rf(Co(n), "incompatibleTokens", [
            "b",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]), n;
    }
    return Lp(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "a":
                    case "aa":
                    case "aaa":
                        return i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return i.dayPeriod(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCHours(Ke(i), 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Zr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zr = function(r) {
        return typeof r;
    } : Zr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Zr(t);
}
function jp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function of(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Xp(t, e, r) {
    return e && of(t.prototype, e), r && of(t, r), t;
}
function Gp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Uo(t, e);
}
function Uo(t, e) {
    return Uo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Uo(t, e);
}
function Vp(t) {
    var e = Jp();
    return function() {
        var n = Jr(t), o;
        if (e) {
            var a = Jr(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Zp(this, o);
    };
}
function Zp(t, e) {
    return e && (Zr(e) === "object" || typeof e == "function") ? e : Ho(t);
}
function Ho(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Jp() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function Jr(t) {
    return Jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, Jr(t);
}
function af(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var uf = function(t) {
    Gp(r, t);
    var e = Vp(r);
    function r() {
        var n;
        jp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), af(Ho(n), "priority", 80), af(Ho(n), "incompatibleTokens", [
            "a",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]), n;
    }
    return Xp(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "b":
                    case "bb":
                    case "bbb":
                        return i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return i.dayPeriod(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCHours(Ke(i), 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function Kr(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kr = function(r) {
        return typeof r;
    } : Kr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, Kr(t);
}
function Kp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ff(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function ed(t, e, r) {
    return e && ff(t.prototype, e), r && ff(t, r), t;
}
function td(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Fo(t, e);
}
function Fo(t, e) {
    return Fo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Fo(t, e);
}
function rd(t) {
    var e = od();
    return function() {
        var n = en(t), o;
        if (e) {
            var a = en(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return nd(this, o);
    };
}
function nd(t, e) {
    return e && (Kr(e) === "object" || typeof e == "function") ? e : Lo(t);
}
function Lo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function od() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function en(t) {
    return en = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, en(t);
}
function sf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var lf = function(t) {
    td(r, t);
    var e = rd(r);
    function r() {
        var n;
        Kp(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), sf(Lo(n), "priority", 80), sf(Lo(n), "incompatibleTokens", [
            "a",
            "b",
            "t",
            "T"
        ]), n;
    }
    return ed(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "B":
                    case "BB":
                    case "BBB":
                        return i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return i.dayPeriod(o, {
                            width: "wide",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || i.dayPeriod(o, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCHours(Ke(i), 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function tn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tn = function(r) {
        return typeof r;
    } : tn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, tn(t);
}
function ad(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function cf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function id(t, e, r) {
    return e && cf(t.prototype, e), r && cf(t, r), t;
}
function ud(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && $o(t, e);
}
function $o(t, e) {
    return $o = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, $o(t, e);
}
function fd(t) {
    var e = ld();
    return function() {
        var n = rn(t), o;
        if (e) {
            var a = rn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return sd(this, o);
    };
}
function sd(t, e) {
    return e && (tn(e) === "object" || typeof e == "function") ? e : Bo(t);
}
function Bo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function ld() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function rn(t) {
    return rn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, rn(t);
}
function mf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var pf = function(t) {
    ud(r, t);
    var e = fd(r);
    function r() {
        var n;
        ad(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), mf(Bo(n), "priority", 70), mf(Bo(n), "incompatibleTokens", [
            "H",
            "K",
            "k",
            "t",
            "T"
        ]), n;
    }
    return id(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "h":
                        return T(S.hour12h, o);
                    case "ho":
                        return i.ordinalNumber(o, {
                            unit: "hour"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 12;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                var s = o.getUTCHours() >= 12;
                return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : !s && i === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function nn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nn = function(r) {
        return typeof r;
    } : nn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, nn(t);
}
function cd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function df(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function md(t, e, r) {
    return e && df(t.prototype, e), r && df(t, r), t;
}
function pd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Qo(t, e);
}
function Qo(t, e) {
    return Qo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Qo(t, e);
}
function dd(t) {
    var e = yd();
    return function() {
        var n = on(t), o;
        if (e) {
            var a = on(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return vd(this, o);
    };
}
function vd(t, e) {
    return e && (nn(e) === "object" || typeof e == "function") ? e : zo(t);
}
function zo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function yd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function on(t) {
    return on = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, on(t);
}
function vf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var yf = function(t) {
    pd(r, t);
    var e = dd(r);
    function r() {
        var n;
        cd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), vf(zo(n), "priority", 70), vf(zo(n), "incompatibleTokens", [
            "a",
            "b",
            "h",
            "K",
            "k",
            "t",
            "T"
        ]), n;
    }
    return md(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "H":
                        return T(S.hour23h, o);
                    case "Ho":
                        return i.ordinalNumber(o, {
                            unit: "hour"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 23;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCHours(i, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function an(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? an = function(r) {
        return typeof r;
    } : an = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, an(t);
}
function gd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function gf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function hd(t, e, r) {
    return e && gf(t.prototype, e), r && gf(t, r), t;
}
function bd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && jo(t, e);
}
function jo(t, e) {
    return jo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, jo(t, e);
}
function Od(t) {
    var e = _d();
    return function() {
        var n = un(t), o;
        if (e) {
            var a = un(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return wd(this, o);
    };
}
function wd(t, e) {
    return e && (an(e) === "object" || typeof e == "function") ? e : Xo(t);
}
function Xo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function _d() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function un(t) {
    return un = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, un(t);
}
function hf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var bf = function(t) {
    bd(r, t);
    var e = Od(r);
    function r() {
        var n;
        gd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), hf(Xo(n), "priority", 70), hf(Xo(n), "incompatibleTokens", [
            "h",
            "H",
            "k",
            "t",
            "T"
        ]), n;
    }
    return hd(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "K":
                        return T(S.hour11h, o);
                    case "Ko":
                        return i.ordinalNumber(o, {
                            unit: "hour"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 11;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                var s = o.getUTCHours() >= 12;
                return s && i < 12 ? o.setUTCHours(i + 12, 0, 0, 0) : o.setUTCHours(i, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function fn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fn = function(r) {
        return typeof r;
    } : fn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, fn(t);
}
function xd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Of(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Dd(t, e, r) {
    return e && Of(t.prototype, e), r && Of(t, r), t;
}
function Td(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Go(t, e);
}
function Go(t, e) {
    return Go = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Go(t, e);
}
function Sd(t) {
    var e = Md();
    return function() {
        var n = sn(t), o;
        if (e) {
            var a = sn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Pd(this, o);
    };
}
function Pd(t, e) {
    return e && (fn(e) === "object" || typeof e == "function") ? e : Vo(t);
}
function Vo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Md() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function sn(t) {
    return sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, sn(t);
}
function wf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var _f = function(t) {
    Td(r, t);
    var e = Sd(r);
    function r() {
        var n;
        xd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), wf(Vo(n), "priority", 70), wf(Vo(n), "incompatibleTokens", [
            "a",
            "b",
            "h",
            "H",
            "K",
            "t",
            "T"
        ]), n;
    }
    return Dd(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "k":
                        return T(S.hour24h, o);
                    case "ko":
                        return i.ordinalNumber(o, {
                            unit: "hour"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 1 && a <= 24;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                var s = i <= 24 ? i % 24 : i;
                return o.setUTCHours(s, 0, 0, 0), o;
            }
        }
    ]), r;
}(b);
function ln(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(r) {
        return typeof r;
    } : ln = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, ln(t);
}
function Id(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function xf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function kd(t, e, r) {
    return e && xf(t.prototype, e), r && xf(t, r), t;
}
function Rd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Zo(t, e);
}
function Zo(t, e) {
    return Zo = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Zo(t, e);
}
function Nd(t) {
    var e = qd();
    return function() {
        var n = cn(t), o;
        if (e) {
            var a = cn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Yd(this, o);
    };
}
function Yd(t, e) {
    return e && (ln(e) === "object" || typeof e == "function") ? e : Jo(t);
}
function Jo(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function qd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function cn(t) {
    return cn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, cn(t);
}
function Df(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Tf = function(t) {
    Rd(r, t);
    var e = Nd(r);
    function r() {
        var n;
        Id(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Df(Jo(n), "priority", 60), Df(Jo(n), "incompatibleTokens", [
            "t",
            "T"
        ]), n;
    }
    return kd(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "m":
                        return T(S.minute, o);
                    case "mo":
                        return i.ordinalNumber(o, {
                            unit: "minute"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 59;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMinutes(i, 0, 0), o;
            }
        }
    ]), r;
}(b);
function mn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(r) {
        return typeof r;
    } : mn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, mn(t);
}
function Ad(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Sf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Wd(t, e, r) {
    return e && Sf(t.prototype, e), r && Sf(t, r), t;
}
function Ed(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && Ko(t, e);
}
function Ko(t, e) {
    return Ko = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, Ko(t, e);
}
function Cd(t) {
    var e = Hd();
    return function() {
        var n = pn(t), o;
        if (e) {
            var a = pn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Ud(this, o);
    };
}
function Ud(t, e) {
    return e && (mn(e) === "object" || typeof e == "function") ? e : ea(t);
}
function ea(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Hd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function pn(t) {
    return pn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, pn(t);
}
function Pf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Mf = function(t) {
    Ed(r, t);
    var e = Cd(r);
    function r() {
        var n;
        Ad(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Pf(ea(n), "priority", 50), Pf(ea(n), "incompatibleTokens", [
            "t",
            "T"
        ]), n;
    }
    return Wd(r, [
        {
            key: "parse",
            value: function(o, a, i) {
                switch(a){
                    case "s":
                        return T(S.second, o);
                    case "so":
                        return i.ordinalNumber(o, {
                            unit: "second"
                        });
                    default:
                        return _(a.length, o);
                }
            }
        },
        {
            key: "validate",
            value: function(o, a) {
                return a >= 0 && a <= 59;
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCSeconds(i, 0), o;
            }
        }
    ]), r;
}(b);
function dn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dn = function(r) {
        return typeof r;
    } : dn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, dn(t);
}
function Fd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function If(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Ld(t, e, r) {
    return e && If(t.prototype, e), r && If(t, r), t;
}
function $d(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && ta(t, e);
}
function ta(t, e) {
    return ta = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, ta(t, e);
}
function Bd(t) {
    var e = zd();
    return function() {
        var n = vn(t), o;
        if (e) {
            var a = vn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Qd(this, o);
    };
}
function Qd(t, e) {
    return e && (dn(e) === "object" || typeof e == "function") ? e : ra(t);
}
function ra(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function zd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function vn(t) {
    return vn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, vn(t);
}
function kf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Rf = function(t) {
    $d(r, t);
    var e = Bd(r);
    function r() {
        var n;
        Fd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), kf(ra(n), "priority", 30), kf(ra(n), "incompatibleTokens", [
            "t",
            "T"
        ]), n;
    }
    return Ld(r, [
        {
            key: "parse",
            value: function(o, a) {
                var i = function(l) {
                    return Math.floor(l * Math.pow(10, -a.length + 3));
                };
                return I(_(a.length, o), i);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return o.setUTCMilliseconds(i), o;
            }
        }
    ]), r;
}(b);
function yn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(r) {
        return typeof r;
    } : yn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, yn(t);
}
function jd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Nf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function Xd(t, e, r) {
    return e && Nf(t.prototype, e), r && Nf(t, r), t;
}
function Gd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && na(t, e);
}
function na(t, e) {
    return na = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, na(t, e);
}
function Vd(t) {
    var e = Jd();
    return function() {
        var n = gn(t), o;
        if (e) {
            var a = gn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return Zd(this, o);
    };
}
function Zd(t, e) {
    return e && (yn(e) === "object" || typeof e == "function") ? e : oa(t);
}
function oa(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Jd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function gn(t) {
    return gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, gn(t);
}
function Yf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var qf = function(t) {
    Gd(r, t);
    var e = Vd(r);
    function r() {
        var n;
        jd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Yf(oa(n), "priority", 10), Yf(oa(n), "incompatibleTokens", [
            "t",
            "T",
            "x"
        ]), n;
    }
    return Xd(r, [
        {
            key: "parse",
            value: function(o, a) {
                switch(a){
                    case "X":
                        return te(ee.basicOptionalMinutes, o);
                    case "XX":
                        return te(ee.basic, o);
                    case "XXXX":
                        return te(ee.basicOptionalSeconds, o);
                    case "XXXXX":
                        return te(ee.extendedOptionalSeconds, o);
                    case "XXX":
                    default:
                        return te(ee.extended, o);
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return a.timestampIsSet ? o : new Date(o.getTime() - i);
            }
        }
    ]), r;
}(b);
function hn(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(r) {
        return typeof r;
    } : hn = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, hn(t);
}
function Kd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Af(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function ev(t, e, r) {
    return e && Af(t.prototype, e), r && Af(t, r), t;
}
function tv(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && aa(t, e);
}
function aa(t, e) {
    return aa = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, aa(t, e);
}
function rv(t) {
    var e = ov();
    return function() {
        var n = bn(t), o;
        if (e) {
            var a = bn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return nv(this, o);
    };
}
function nv(t, e) {
    return e && (hn(e) === "object" || typeof e == "function") ? e : ia(t);
}
function ia(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function ov() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function bn(t) {
    return bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, bn(t);
}
function Wf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Ef = function(t) {
    tv(r, t);
    var e = rv(r);
    function r() {
        var n;
        Kd(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Wf(ia(n), "priority", 10), Wf(ia(n), "incompatibleTokens", [
            "t",
            "T",
            "X"
        ]), n;
    }
    return ev(r, [
        {
            key: "parse",
            value: function(o, a) {
                switch(a){
                    case "x":
                        return te(ee.basicOptionalMinutes, o);
                    case "xx":
                        return te(ee.basic, o);
                    case "xxxx":
                        return te(ee.basicOptionalSeconds, o);
                    case "xxxxx":
                        return te(ee.extendedOptionalSeconds, o);
                    case "xxx":
                    default:
                        return te(ee.extended, o);
                }
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return a.timestampIsSet ? o : new Date(o.getTime() - i);
            }
        }
    ]), r;
}(b);
function On(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(r) {
        return typeof r;
    } : On = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, On(t);
}
function av(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Cf(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function iv(t, e, r) {
    return e && Cf(t.prototype, e), r && Cf(t, r), t;
}
function uv(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && ua(t, e);
}
function ua(t, e) {
    return ua = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, ua(t, e);
}
function fv(t) {
    var e = lv();
    return function() {
        var n = wn(t), o;
        if (e) {
            var a = wn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return sv(this, o);
    };
}
function sv(t, e) {
    return e && (On(e) === "object" || typeof e == "function") ? e : fa(t);
}
function fa(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function lv() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function wn(t) {
    return wn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, wn(t);
}
function Uf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var Hf = function(t) {
    uv(r, t);
    var e = fv(r);
    function r() {
        var n;
        av(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Uf(fa(n), "priority", 40), Uf(fa(n), "incompatibleTokens", "*"), n;
    }
    return iv(r, [
        {
            key: "parse",
            value: function(o) {
                return mr(o);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return [
                    new Date(i * 1e3),
                    {
                        timestampIsSet: !0
                    }
                ];
            }
        }
    ]), r;
}(b);
function _n(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(r) {
        return typeof r;
    } : _n = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, _n(t);
}
function cv(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ff(t, e) {
    for(var r = 0; r < e.length; r++){
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function mv(t, e, r) {
    return e && Ff(t.prototype, e), r && Ff(t, r), t;
}
function pv(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && sa(t, e);
}
function sa(t, e) {
    return sa = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n;
    }, sa(t, e);
}
function dv(t) {
    var e = yv();
    return function() {
        var n = xn(t), o;
        if (e) {
            var a = xn(this).constructor;
            o = Reflect.construct(n, arguments, a);
        } else o = n.apply(this, arguments);
        return vv(this, o);
    };
}
function vv(t, e) {
    return e && (_n(e) === "object" || typeof e == "function") ? e : la(t);
}
function la(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function yv() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch  {
        return !1;
    }
}
function xn(t) {
    return xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
    }, xn(t);
}
function Lf(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
var $f = function(t) {
    pv(r, t);
    var e = dv(r);
    function r() {
        var n;
        cv(this, r);
        for(var o = arguments.length, a = new Array(o), i = 0; i < o; i++)a[i] = arguments[i];
        return n = e.call.apply(e, [
            this
        ].concat(a)), Lf(la(n), "priority", 20), Lf(la(n), "incompatibleTokens", "*"), n;
    }
    return mv(r, [
        {
            key: "parse",
            value: function(o) {
                return mr(o);
            }
        },
        {
            key: "set",
            value: function(o, a, i) {
                return [
                    new Date(i),
                    {
                        timestampIsSet: !0
                    }
                ];
            }
        }
    ]), r;
}(b);
({
    G: new fu,
    y: new cu,
    Y: new du,
    R: new gu,
    u: new Ou,
    Q: new xu,
    q: new Su,
    M: new Iu,
    L: new Nu,
    w: new Au,
    I: new Cu,
    d: new Hu,
    D: new Lu,
    E: new Qu,
    e: new Xu,
    c: new Zu,
    i: new ef,
    a: new nf,
    b: new uf,
    B: new lf,
    h: new pf,
    H: new yf,
    K: new bf,
    k: new _f,
    m: new Tf,
    s: new Mf,
    S: new Rf,
    X: new qf,
    x: new Ef,
    t: new Hf,
    T: new $f
});
var Hr1 = function(r, n, t) {
    if (t || arguments.length === 2) for(var e = 0, u = n.length, f; e < u; e++)(f || !(e in n)) && (f || (f = Array.prototype.slice.call(n, 0, e)), f[e] = n[e]);
    return r.concat(f || Array.prototype.slice.call(n));
};
function o(r, n, t) {
    var e = r.length - n.length, u = Array.from(n);
    if (e === 0) return r.apply(void 0, u);
    if (e === 1) {
        var f = function(i) {
            return r.apply(void 0, Hr1([
                i
            ], u, !1));
        };
        return (t || r.lazy) && (f.lazy = t || r.lazy, f.lazyArgs = n), f;
    }
    throw new Error("Wrong number of arguments");
}
var B = function() {
    return B = Object.assign || function(r) {
        for(var n, t = 1, e = arguments.length; t < e; t++){
            n = arguments[t];
            for(var u in n)Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
        }
        return r;
    }, B.apply(this, arguments);
};
var J1 = function(r) {
    return function(n, t) {
        return n.reduce(function(e, u, f) {
            var i = r ? t(u, f, n) : t(u);
            return e + (i ? 1 : 0);
        }, 0);
    };
};
function H() {
    return o(J1(!1), arguments);
}
(function(r) {
    function n() {
        return o(J1(!0), arguments);
    }
    r.indexed = n;
})(H || (H = {}));
function Q(r) {
    for(var n = [], t = 1; t < arguments.length; t++)n[t - 1] = arguments[t];
    for(var e = r, u = n.map(function(y) {
        var I = y, g = I.lazy, Gr = I.lazyArgs;
        if (g) {
            var z = g.apply(void 0, Gr);
            return z.indexed = g.indexed, z.single = g.single, z.index = 0, z.items = [], z;
        }
        return null;
    }), f = 0; f < n.length;){
        var i = n[f], a = u[f];
        if (!a) {
            e = i(e), f++;
            continue;
        }
        for(var s = [], p = f; p < n.length && u[p]; p++)if (s.push(u[p]), u[p].single) break;
        for(var l = [], p = 0; p < e.length; p++){
            var x = e[p];
            if (V({
                item: x,
                acc: l,
                lazySeq: s
            })) break;
        }
        var d = s[s.length - 1];
        d.single ? e = l[0] : e = l, f += s.length;
    }
    return e;
}
function V(r) {
    var n = r.item, t = r.lazySeq, e = r.acc;
    if (t.length === 0) return e.push(n), !1;
    for(var u = {
        done: !1,
        hasNext: !1
    }, f = !1, i = 0; i < t.length; i++){
        var a = t[i], s = a.indexed, p = a.index, l = a.items;
        if (l.push(n), u = s ? a(n, p, l) : a(n), a.index++, u.hasNext) if (u.hasMany) {
            for(var x = u.next, d = 0, y = x; d < y.length; d++){
                var I = y[d], g = V({
                    item: I,
                    acc: e,
                    lazySeq: t.slice(i + 1)
                });
                if (g) return !0;
            }
            return !1;
        } else n = u.next;
        if (!u.hasNext) break;
        u.done && (f = !0);
    }
    return u.hasNext && e.push(n), !!f;
}
function c(r, n, t) {
    return r.reduce(function(e, u, f) {
        var i = t ? n(u, f, r) : n(u);
        return i.hasMany === !0 ? e.push.apply(e, i.next) : i.hasNext === !0 && e.push(i.next), e;
    }, []);
}
function w() {
    return o(rn1, arguments, w.lazy);
}
function rn1(r, n) {
    var t = w.lazy(n);
    return c(r, t);
}
(function(r) {
    function n(t) {
        var e = new Set(t);
        return function(u) {
            return e.has(u) ? {
                done: !1,
                hasNext: !1
            } : {
                done: !1,
                hasNext: !0,
                next: u
            };
        };
    }
    r.lazy = n;
})(w || (w = {}));
function E() {
    return o(nn1, arguments, E.lazy);
}
function nn1(r, n, t) {
    var e = E.lazy(n, t);
    return c(r, e);
}
(function(r) {
    function n(t, e) {
        return function(u) {
            return t.every(function(f) {
                return !e(u, f);
            }) ? {
                done: !1,
                hasNext: !0,
                next: u
            } : {
                done: !1,
                hasNext: !1
            };
        };
    }
    r.lazy = n;
})(E || (E = {}));
function P() {
    return o(tn1, arguments, P.lazy);
}
function tn1(r, n) {
    return c(r, P.lazy(n));
}
(function(r) {
    function n(t) {
        var e = t;
        return function(u) {
            return e > 0 ? (e--, {
                done: !1,
                hasNext: !1
            }) : {
                done: !1,
                hasNext: !0,
                next: u
            };
        };
    }
    r.lazy = n;
})(P || (P = {}));
Array.isArray, Object.keys, Object.prototype.hasOwnProperty;
var m1 = function(r) {
    return r.indexed = !0, r;
};
function _1() {
    return o(F(!1), arguments, _1.lazy);
}
var F = function(r) {
    return function(n, t) {
        return c(n, r ? _1.lazyIndexed(t) : _1.lazy(t), r);
    };
}, $ = function(r) {
    return function(n) {
        return function(t, e, u) {
            var f = r ? n(t, e, u) : n(t);
            return f ? {
                done: !1,
                hasNext: !0,
                next: t
            } : {
                done: !1,
                hasNext: !1
            };
        };
    };
};
(function(r) {
    function n() {
        return o(F(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = $(!1), r.lazyIndexed = m1($(!0));
})(_1 || (_1 = {}));
var h = function(r) {
    return r.single = !0, r;
};
function k() {
    return o(nr(!1), arguments, k.lazy);
}
var nr = function(r) {
    return function(n, t) {
        return r ? n.find(t) : n.find(function(e) {
            return t(e);
        });
    };
}, rr = function(r) {
    return function(n) {
        return function(t, e, u) {
            var f = r ? n(t, e, u) : n(t);
            return {
                done: f,
                hasNext: f,
                next: t
            };
        };
    };
};
(function(r) {
    function n() {
        return o(nr(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = h(rr(!1)), r.lazyIndexed = h(m1(rr(!0)));
})(k || (k = {}));
function q() {
    return o(er(!1), arguments, q.lazy);
}
var er = function(r) {
    return function(n, t) {
        return r ? n.findIndex(t) : n.findIndex(function(e) {
            return t(e);
        });
    };
}, tr = function(r) {
    return function(n) {
        var t = 0;
        return function(e, u, f) {
            var i = r ? n(e, u, f) : n(e);
            return i ? {
                done: !0,
                hasNext: !0,
                next: t
            } : (t++, {
                done: !1,
                hasNext: !1
            });
        };
    };
};
(function(r) {
    function n() {
        return o(er(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = h(tr(!1)), r.lazyIndexed = h(m1(tr(!0)));
})(q || (q = {}));
function ur() {
    return o(or(!1), arguments);
}
var or = function(r) {
    return function(n, t) {
        for(var e = n.length - 1; e >= 0; e--)if (r ? t(n[e], e, n) : t(n[e])) return n[e];
    };
};
(function(r) {
    function n() {
        return o(or(!0), arguments);
    }
    r.indexed = n;
})(ur || (ur = {}));
function fr1() {
    return o(ir(!1), arguments);
}
var ir = function(r) {
    return function(n, t) {
        for(var e = n.length - 1; e >= 0; e--)if (r ? t(n[e], e, n) : t(n[e])) return e;
        return -1;
    };
};
(function(r) {
    function n() {
        return o(ir(!0), arguments);
    }
    r.indexed = n;
})(fr1 || (fr1 = {}));
function T1() {
    return o(an1, arguments, T1.lazy);
}
function an1(r) {
    return r[0];
}
(function(r) {
    function n() {
        return function(t) {
            return {
                done: !0,
                hasNext: !0,
                next: t
            };
        };
    }
    r.lazy = n, function(t) {
        t.single = !0;
    }(n = r.lazy || (r.lazy = {}));
})(T1 || (T1 = {}));
function v() {
    return o(cn1, arguments, v.lazy);
}
function cn1(r) {
    return c(r, v.lazy());
}
(function(r) {
    function n() {
        return function(t) {
            return Array.isArray(t) ? {
                done: !1,
                hasNext: !0,
                hasMany: !0,
                next: t
            } : {
                done: !1,
                hasNext: !0,
                next: t
            };
        };
    }
    r.lazy = n;
})(v || (v = {}));
function R() {
    return o(pn1, arguments, R.lazy);
}
function pn1(r, n) {
    return v(r.map(function(t) {
        return n(t);
    }));
}
(function(r) {
    function n(t) {
        return function(e) {
            var u = t(e);
            return Array.isArray(u) ? {
                done: !1,
                hasNext: !0,
                hasMany: !0,
                next: u
            } : {
                done: !1,
                hasNext: !0,
                next: u
            };
        };
    }
    r.lazy = n;
})(R || (R = {}));
function ar() {
    return o(cr1(!1), arguments);
}
var cr1 = function(r) {
    return function(n, t) {
        return n.reduce(function(e, u, f) {
            var i = r ? t(u, f, n) : t(u);
            return i.forEach(function(a) {
                var s = a[0], p = a[1];
                e[s] = p;
            }), e;
        }, {});
    };
};
(function(r) {
    function n() {
        return o(cr1(!0), arguments);
    }
    r.indexed = n;
})(ar || (ar = {}));
function A() {
    return o(sn1, arguments, A.lazy);
}
function sn1(r) {
    return c(r, A.lazy());
}
function mn1(r) {
    if (!Array.isArray(r)) return r;
    var n = [];
    return r.forEach(function(t) {
        Array.isArray(t) ? n.push.apply(n, A(t)) : n.push(t);
    }), n;
}
(function(r) {
    function n() {
        return function(t) {
            var e = mn1(t);
            return Array.isArray(e) ? {
                done: !1,
                hasNext: !0,
                hasMany: !0,
                next: e
            } : {
                done: !1,
                hasNext: !0,
                next: e
            };
        };
    }
    r.lazy = n;
})(A || (A = {}));
function N() {
    return o(sr1(!1), arguments, N.lazy);
}
var sr1 = function(r) {
    return function(n, t) {
        return c(n, r ? N.lazyIndexed(t) : N.lazy(t), r);
    };
}, pr1 = function(r) {
    return function(n) {
        return function(t, e, u) {
            return r ? n(t, e, u) : n(t), {
                done: !1,
                hasNext: !0,
                next: t
            };
        };
    };
};
(function(r) {
    function n() {
        return o(sr1(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = pr1(!1), r.lazyIndexed = m1(pr1(!0));
})(N || (N = {}));
function mr1() {
    return o(lr1(!1), arguments);
}
var lr1 = function(r) {
    return function(n, t) {
        for(var e in n)if (n.hasOwnProperty(e)) {
            var u = n[e];
            r ? t(u, e, n) : t(u);
        }
        return n;
    };
};
(function(r) {
    function n() {
        return o(lr1(!0), arguments);
    }
    r.indexed = n;
})(mr1 || (mr1 = {}));
function xr1() {
    return o(dr1(!1), arguments);
}
var dr1 = function(r) {
    return function(n, t) {
        var e = {};
        return n.forEach(function(u, f) {
            var i = r ? t(u, f, n) : t(u), a = String(i);
            e[a] || (e[a] = []), e[a].push(u);
        }), e;
    };
};
(function(r) {
    function n() {
        return o(dr1(!0), arguments);
    }
    r.indexed = n;
})(xr1 || (xr1 = {}));
function yr1() {
    return o(gr1(!1), arguments);
}
var gr1 = function(r) {
    return function(n, t) {
        return n.reduce(function(e, u, f) {
            var i = r ? t(u, f, n) : t(u), a = String(i);
            return e[a] = u, e;
        }, {});
    };
};
(function(r) {
    function n() {
        return o(gr1(!0), arguments);
    }
    r.indexed = n;
})(yr1 || (yr1 = {}));
function S1() {
    return o(ln1, arguments, S1.lazy);
}
function ln1(r, n) {
    var t = S1.lazy(n);
    return c(r, t);
}
(function(r) {
    function n(t) {
        return function(e) {
            var u = new Set(t);
            return u.has(e) ? {
                done: !1,
                hasNext: !0,
                next: e
            } : {
                done: !1,
                hasNext: !1
            };
        };
    }
    r.lazy = n;
})(S1 || (S1 = {}));
function hr1(r) {
    return Object.keys(r);
}
(function(r) {
    function n(t) {
        return r(t);
    }
    r.strict = n;
})(hr1 || (hr1 = {}));
function O() {
    return o(zr1(!1), arguments, O.lazy);
}
var zr1 = function(r) {
    return function(n, t) {
        return c(n, r ? O.lazyIndexed(t) : O.lazy(t), r);
    };
}, vr1 = function(r) {
    return function(n) {
        return function(t, e, u) {
            return {
                done: !1,
                hasNext: !0,
                next: r ? n(t, e, u) : n(t)
            };
        };
    };
};
(function(r) {
    function n() {
        return o(zr1(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = vr1(!1), r.lazyIndexed = m1(vr1(!0));
})(O || (O = {}));
function Ar1() {
    return o(Nr1(!1), arguments);
}
var Nr1 = function(r) {
    return function(n, t) {
        return n.reduce(function(e, u, f) {
            var i = r ? t(u, f, n) : t(u), a = i[0], s = i[1];
            return e[a] = s, e;
        }, {});
    };
};
(function(r) {
    function n() {
        return o(Nr1(!0), arguments);
    }
    r.indexed = n;
})(Ar1 || (Ar1 = {}));
var Ir1 = function(r) {
    return function(n, t) {
        var e = void 0, u = void 0;
        return n.forEach(function(f, i) {
            var a = r ? t(f, i, n) : t(f);
            (u === void 0 || a > u) && (e = f, u = a);
        }), e;
    };
};
function Lr1() {
    return o(Ir1(!1), arguments);
}
(function(r) {
    function n() {
        return o(Ir1(!0), arguments);
    }
    r.indexed = n;
})(Lr1 || (Lr1 = {}));
var wr1 = function(r) {
    return function(n, t) {
        if (n.length === 0) return NaN;
        var e = 0;
        return n.forEach(function(u, f) {
            e += r ? t(u, f, n) : t(u);
        }), e / n.length;
    };
};
function Br1() {
    return o(wr1(!1), arguments);
}
(function(r) {
    function n() {
        return o(wr1(!0), arguments);
    }
    r.indexed = n;
})(Br1 || (Br1 = {}));
var b1 = function() {
    return b1 = Object.assign || function(r) {
        for(var n, t = 1, e = arguments.length; t < e; t++){
            n = arguments[t];
            for(var u in n)Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
        }
        return r;
    }, b1.apply(this, arguments);
};
var Pr1 = function(r) {
    return function(n, t) {
        var e = void 0, u = void 0;
        return n.forEach(function(f, i) {
            var a = r ? t(f, i, n) : t(f);
            (u === void 0 || a < u) && (e = f, u = a);
        }), e;
    };
};
function Er1() {
    return o(Pr1(!1), arguments);
}
(function(r) {
    function n() {
        return o(Pr1(!0), arguments);
    }
    r.indexed = n;
})(Er1 || (Er1 = {}));
function Sr1() {
    return o(br1(!1), arguments);
}
var br1 = function(r) {
    return function(n, t) {
        var e = [
            [],
            []
        ];
        return n.forEach(function(u, f) {
            var i = r ? t(u, f, n) : t(u);
            e[i ? 0 : 1].push(u);
        }), e;
    };
};
(function(r) {
    function n() {
        return o(br1(!0), arguments);
    }
    r.indexed = n;
})(Sr1 || (Sr1 = {}));
function jr1() {
    return o(An, arguments);
}
function An(r, n) {
    for(var t = [], e = r; e < n; e++)t.push(e);
    return t;
}
function Mr1() {
    return o(Dr1(!1), arguments);
}
var Dr1 = function(r) {
    return function(n, t, e) {
        return n.reduce(function(u, f, i) {
            return r ? t(u, f, i, n) : t(u, f);
        }, e);
    };
};
(function(r) {
    function n() {
        return o(Dr1(!0), arguments);
    }
    r.indexed = n;
})(Mr1 || (Mr1 = {}));
function L() {
    return o(kr1(!1), arguments, L.lazy);
}
var kr1 = function(r) {
    return function(n, t) {
        return c(n, r ? L.lazyIndexed(t) : L.lazy(t), r);
    };
}, Wr1 = function(r) {
    return function(n) {
        return function(t, e, u) {
            var f = r ? n(t, e, u) : n(t);
            return f ? {
                done: !1,
                hasNext: !1
            } : {
                done: !1,
                hasNext: !0,
                next: t
            };
        };
    };
};
(function(r) {
    function n() {
        return o(kr1(!0), arguments, r.lazyIndexed);
    }
    r.indexed = n, r.lazy = Wr1(!1), r.lazyIndexed = m1(Wr1(!0));
})(L || (L = {}));
var j = function() {
    return j = Object.assign || function(r) {
        for(var n, t = 1, e = arguments.length; t < e; t++){
            n = arguments[t];
            for(var u in n)Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
        }
        return r;
    }, j.apply(this, arguments);
};
var Kr1 = function(r) {
    return function(n, t) {
        var e = 0;
        return n.forEach(function(u, f) {
            var i = r ? t(u, f, n) : t(u);
            e += i;
        }), e;
    };
};
function Cr1() {
    return o(Kr1(!1), arguments);
}
(function(r) {
    function n() {
        return o(Kr1(!0), arguments);
    }
    r.indexed = n;
})(Cr1 || (Cr1 = {}));
function M() {
    return o(Sn, arguments, M.lazy);
}
function Sn(r, n) {
    return c(r, M.lazy(n));
}
(function(r) {
    function n(t) {
        return function(e) {
            return t === 0 ? {
                done: !0,
                hasNext: !1
            } : (t--, t === 0 ? {
                done: !0,
                hasNext: !0,
                next: e
            } : {
                done: !1,
                hasNext: !0,
                next: e
            });
        };
    }
    r.lazy = n;
})(M || (M = {}));
function D1() {
    return o(Mn, arguments, D1.lazy);
}
function Mn(r) {
    return c(r, D1.lazy());
}
(function(r) {
    function n() {
        var t = new Set;
        return function(e) {
            return t.has(e) ? {
                done: !1,
                hasNext: !1
            } : (t.add(e), {
                done: !1,
                hasNext: !0,
                next: e
            });
        };
    }
    r.lazy = n;
})(D1 || (D1 = {}));
function W() {
    return o(Wn, arguments, W.lazy);
}
function Wn(r, n) {
    var t = W.lazy(n);
    return c(r, t, !0);
}
function kn(r) {
    return function(n, t, e) {
        return e && e.findIndex(function(u) {
            return r(n, u);
        }) === t ? {
            done: !1,
            hasNext: !0,
            next: n
        } : {
            done: !1,
            hasNext: !1
        };
    };
}
(function(r) {
    r.lazy = m1(kn);
})(W || (W = {}));
const SLACK_HOOK = Deno.env.get("SLACK_HOOK");
async function postToSlack(lines) {
    if (!SLACK_HOOK) {
        console.error("No SLACK_HOOK set");
        Deno.exit(1);
    }
    const slackResult = await fetch(SLACK_HOOK, {
        method: "POST",
        body: JSON.stringify(slackBody(lines))
    });
    if (slackResult.ok) {
        return true;
    } else {
        console.error(await slackResult.text());
        return false;
    }
}
function slackBody(lines) {
    return {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "<!channel>"
                }
            },
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: `:hotdog: Nye bookinger tilgjengelig for Hot Shop! :hotdog:`,
                    emoji: true
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: lines.join("\n")
                }
            },
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "Gå til booking: https://hotshop.superbexperience.com/reserve/guests"
                }
            }
        ]
    };
}
async function getAvailabilityForMonth([year, month]) {
    console.info(`Checking for month ${month} in ${year}`);
    const response = await fetch(createUrl(year, month));
    if (!response.ok) {
        console.error(`Failed to fetch availability for ${year}-${month}: ${response.status} ${response.statusText}`);
        return {
            year,
            month,
            data: []
        };
    }
    return {
        year,
        month,
        data: _1((await response.json()).data, (it)=>it.available)
    };
}
function createUrl(year, month) {
    return `https://api-gx.superbexperience.com/availability/dates?restaurant=5ba3a4d66c8c209e5510a1bc&online=true&month=${month}&year=${year}&guests=2`;
}
const MONTHS = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
];
const now = new Date();
const currentMonth = Yi(now);
const currentYear = Ui(now);
const getMonthRange = ()=>jr1(currentMonth, currentMonth + 4);
const getMonthName = (month)=>MONTHS[month];
function wrapYearMonthTuple(month) {
    if (month > 11) {
        return [
            currentYear + 1,
            month % 11
        ];
    } else {
        return [
            currentYear,
            month
        ];
    }
}
const availabilityPerMonth = await Promise.all(Q(getMonthRange(), O(wrapYearMonthTuple), O(getAvailabilityForMonth), (it)=>it));
const availability = Q(availabilityPerMonth, _1((it)=>it.data.length > 0), R((availability)=>availability.data.map((day)=>`${day.date}. ${getMonthName(availability.month)} har ledige bord på Hot Shop!`)));
if (availability.length > 0) {
    await postToSlack(availability);
    console.info("Availability found, posted to Slack");
    Deno.exit(0);
} else {
    console.info("No availability found");
    Deno.exit(0);
}
