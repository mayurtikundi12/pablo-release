! function (a, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.pixelsJS = t() : a.pixelsJS = t()
}(this, function () {
  return function (a) {
    var t = {};

    function e(d) {
      if (t[d]) return t[d].exports;
      var n = t[d] = {
        i: d,
        l: !1,
        exports: {}
      };
      return a[d].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    return e.m = a, e.c = t, e.d = function (a, t, d) {
      e.o(a, t) || Object.defineProperty(a, t, {
        enumerable: !0,
        get: d
      })
    }, e.r = function (a) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(a, "__esModule", {
        value: !0
      })
    }, e.t = function (a, t) {
      if (1 & t && (a = e(a)), 8 & t) return a;
      if (4 & t && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (e.r(d), Object.defineProperty(d, "default", {
          enumerable: !0,
          value: a
        }), 2 & t && "string" != typeof a)
        for (var n in a) e.d(d, n, function (t) {
          return a[t]
        }.bind(null, n));
      return d
    }, e.n = function (a) {
      var t = a && a.__esModule ? function () {
        return a.default
      } : function () {
        return a
      };
      return e.d(t, "a", t), t
    }, e.o = function (a, t) {
      return Object.prototype.hasOwnProperty.call(a, t)
    }, e.p = "", e(e.s = 1)
  }([function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.getRandomNumber = function (a, t) {
      return Math.floor(Math.random() * (t - a + 1)) + a
    }
  }, function (a, t, e) {
    "use strict";
    (function (d) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n, r = u(e(3)),
        i = u(e(4)),
        o = u(e(5)),
        _ = u(e(6)),
        g = u(e(7)),
        m = u(e(8));

      function u(a) {
        if (a && a.__esModule) return a;
        var t = {};
        if (null != a)
          for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
        return t.default = a, t
      }

      function l(a, t, e) {
        return t in a ? Object.defineProperty(a, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = e, a
      }
      var f = function () {
        var a;
        return l(a = {
          horizontal_lines: _.add_horizontal_line_imgdata,
          extreme_offset_blue: i.extreme_offset_blue,
          extreme_offset_green: i.extreme_offset_green,
          offset_green: i.offset_green_imgdata,
          extra_offset_blue: i.extra_offset_blue,
          extra_offset_red: i.extra_offset_red,
          extra_offset_green: i.extra_offset_green,
          extreme_offset_red: i.extreme_offset_red,
          specks_redscale: g.specksredscale_imgdata,
          eclectic: g.eclectic_imgdata,
          pane: _.pane_imgdata,
          diagonal_lines: _.add_diagonal_lines_imgdata,
          green_specks: g.green_specks_imgdata,
          casino: g.casino_imgdata,
          yellow_casino: g.yellow_casino_imgdata,
          green_diagonal_lines: _.add_green_diagonal_lines_imgdata,
          offset: i.offset,
          offset_blue: i.offset_blue_imgdata,
          neue: o.neue_imgdata,
          sunset: o.sunset,
          specks: g.specks_imgdata,
          wood: o.wood,
          lix: o.lix_conv,
          ryo: o.ryo_conv,
          bluescale: o.blue_greyscale_imgdata,
          solange: o.solange_imgdata,
          evening: o.evening_imgdata,
          crimson: o.crimson,
          teal_min_noise: r.teal_min_noise_imgdata,
          phase: o.phase,
          dark_purple_min_noise: r.dark_purple_min_noise_imgdata,
          coral: o.coral_imgdata,
          darkify: m.darkify_imgdata,
          incbrightness: m.incbrightness_imgdata,
          incbrightness2: m.incbrightness_two_imgdata,
          invert: m.invert_imgdata,
          sat_adj: m.sat_adj_imgdata,
          lemon: o.lemon_imgdata,
          pink_min_noise: r.pink_min_noise_imgdata,
          frontward: o.frontward_imgdata,
          vintage: o.vintage_imgdata,
          perfume: o.perfume_imgdata,
          serenity: o.serenity_imgdata,
          pink_aura: o.pink_aura_imgdata,
          haze: o.haze_imgdata,
          cool_twilight: o.cool_twilight_imgdata,
          blues: o.blues_imgdata,
          horizon: o.horizon_imgdata,
          mellow: o.mellow_imgdata,
          solange_dark: o.solange_dark_imgdata,
          solange_grey: o.solange_grey_imgdata,
          zapt: o.zapt_imgdata,
          eon: o.eon_imgdata,
          aeon: o.aeon_imgdata,
          matrix: r.matrix_imgdata,
          cosmic: r.cosmic_imgdata,
          min_noise: r.min_noise_imgdata,
          red_min_noise: r.red_min_noise_imgdata,
          matrix2: r.matrix2,
          purplescale: o.purplescale_imgdata,
          radio: o.radio_imgdata,
          twenties: o.twenties_imgdata,
          ocean: o.ocean_imgdata,
          a: m.a,
          pixel_blue: m.pixel_blue_imgdata,
          greyscale: o.greyscale_imgdata,
          grime: o.grime,
          redgreyscale: o.redgreyscale_imgdata,
          retroviolet: g.retroviolet_imgdata,
          greengreyscale: o.greengreyscale_imgdata,
          warmth: o.warmth
        }, "crimson", o.crimson), l(a, "green_med_noise", r.green_med_noise_imgdata), l(a, "green_min_noise", r.green_min_noise_imgdata), l(a, "blue_min_noise", r.blue_min_noise_imgdata), l(a, "rosetint", o.rosetint_imgdata), l(a, "purple_min_noise", r.purple_min_noise_imgdata), a
      };
      t.default = {
        filterImg: function (a, t,imageData) {
          var e = f();
          //   d = document.createElement("canvas"),
          //   r = a.width || a.naturalWidth,
          //   i = a.height || a.naturalHeight;
          //   console.log("width is ",r, " and height is ",i);
            
          // d.height = i, d.width = r;
          // var o = d.getContext("2d"),
          //   _ = o.createPattern(a, "no-repeat");
          // o.fillStyle = _, o.fillRect(0, 0, d.width, d.height), n = o.getImageData(0, 0, d.width, d.height); 
          // console.log("this is the normal image data ",n);
          
          // var g = e[t](n);
          var g = e[t](imageData);
          console.log("this is the value of transformed image data ",g);
          // o.putImageData(n, 0, 0);
          //  console.log(d, a);
        //    a.parentNode.replaceChild(d, a);
          // return d;
          return g;
        },
        filterImgData: function (a, t) {
          var e = f();
          return n = a, e[t](n)
        },
        getFilterList: function () {
          var a = f();
          return Object.keys(a)
        }
      }, a.exports = t.default
    }).call(this, e(2))
  }, function (a, t) {
    var e;
    e = function () {
      return this
    }();
    try {
      e = e || Function("return this")() || (0, eval)("this")
    } catch (a) {
      "object" == typeof window && (e = window)
    }
    a.exports = e
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.pink_min_noise_imgdata = t.matrix_imgdata = t.min_noise_imgdata = t.matrix2 = t.blue_min_noise_imgdata = t.cosmic_imgdata = t.teal_min_noise_imgdata = t.dark_purple_min_noise_imgdata = t.purple_min_noise_imgdata = t.green_min_noise_imgdata = t.green_med_noise_imgdata = t.red_min_noise_imgdata = void 0;
    var d = e(0),
      n = void 0,
      r = void 0;
    t.red_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .6 * Math.random(),
          e = .6 + .4 * Math.random(),
          d = .6 + .4 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.green_med_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .5 * Math.random(),
          e = .6 + .5 * Math.random(),
          d = .6 + .5 * Math.random();
        a.data[n] = .5 * a.data[n + 1] * t, a.data[n + 1] = .99 * a.data[n + 2] * e, a.data[n + 2] = .99 * a.data[n] * d
      }
      return a
    }, t.green_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .1 * Math.random(),
          e = .6 + .5 * Math.random(),
          d = .6 + .4 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.purple_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .5 * Math.random(),
          e = .6 + .2 * Math.random(),
          d = .6 + .8 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.dark_purple_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .5 * Math.random(),
          e = .6 + .5 * Math.random(),
          d = .6 + .5 * Math.random();
        a.data[n] = .5 * a.data[n] * t, a.data[n + 1] = .3 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.teal_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .1 * Math.random(),
          e = .6 + .5 * Math.random(),
          d = .6 + .5 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.cosmic_imgdata = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (0, r = 30) : t > 49 && t < 100 ? (100, r = 90) : (70, r = 10), a.data[n] - void 0 > 255 ? a.data[n] -= void 0 : a.data[n] += void 0, a.data[n + 1] + void 0 > 255 ? a.data[n + 1] -= r : a.data[n + 2] += r;
      return a
    }, t.blue_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .1 * Math.random(),
          e = .6 + .2 * Math.random(),
          d = .6 + .7 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.matrix2 = function (a) {
      var t;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (20, r = 30) : t > 49 && t < 100 ? (10, r = 90) : (70, r = 10), a.data[n] - 0 > 255 ? a.data[n] -= 0 : a.data[n] += 0, a.data[n + 1] + 0 > 255 ? a.data[n + 1] -= r : a.data[n + 1] += r;
      return a
    }, t.min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .4 * Math.random(),
          e = .6 + .4 * Math.random(),
          d = .6 + .4 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }, t.matrix_imgdata = function (a) {
      var t;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (20, r = 30) : t > 49 && t < 100 ? (10, r = 90) : (30, r = 10), a.data[n] - void 0 > 255 ? a.data[n] -= void 0 : a.data[n] += void 0, a.data[n + 1] + void 0 > 255 ? a.data[n + 1] -= r : a.data[n + 1] += r;
      return a
    }, t.pink_min_noise_imgdata = function (a) {
      Math.random();
      for (n = 0; n < a.data.length; n += 4) {
        var t = .6 + .6 * Math.random(),
          e = .6 + .1 * Math.random(),
          d = .6 + .4 * Math.random();
        a.data[n] = .99 * a.data[n] * t, a.data[n + 1] = .99 * a.data[n + 1] * e, a.data[n + 2] = .99 * a.data[n + 2] * d
      }
      return a
    }
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.offset_blue_imgdata = t.offset_green_imgdata = t.extreme_offset_red = t.extreme_offset_green = t.extreme_offset_blue = t.extra_offset_red = t.extra_offset_green = t.extra_offset_blue = t.offset = void 0;
    e(0);
    var d = void 0;
    t.offset = function (a) {
      console.log("offset called");
      for (var t = 0; t < a.data.length; t += 4) a.data[t] = void 0 == a.data[t + 100] ? 0 : a.data[t + 20];
      return a
    }, t.extra_offset_blue = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 2] = void 0 == a.data[d + 900] ? 0 : a.data[d + 60];
      return a
    }, t.extra_offset_green = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 1] = void 0 == a.data[d + 900] ? 0 : a.data[d + 60];
      return a
    }, t.extra_offset_red = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d] = void 0 == a.data[d + 900] ? 0 : a.data[d + 60];
      return a
    }, t.extreme_offset_blue = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 2] = void 0 == a.data[d + 4900] ? 0 : a.data[d + 140];
      return a
    }, t.extreme_offset_green = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 1] = void 0 == a.data[d + 4900] ? 0 : a.data[d + 140];
      return a
    }, t.extreme_offset_red = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d] = void 0 == a.data[d + 4900] ? 0 : a.data[d + 140];
      return a
    }, t.offset_green_imgdata = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 1] = void 0 == a.data[d + 100] ? 0 : a.data[d + 20];
      return a
    }, t.offset_blue_imgdata = function (a) {
      for (d = 0; d < a.data.length; d += 4) a.data[d + 2] = void 0 == a.data[d + 100] ? 0 : a.data[d + 20];
      return a
    }
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.purplescale_imgdata = t.rosetint_imgdata = t.twenties_imgdata = t.horizon_imgdata = t.evening_imgdata = t.mellow_imgdata = t.haze_imgdata = t.pink_aura_imgdata = t.solange_dark_imgdata = t.zapt_imgdata = t.eon_imgdata = t.neue_imgdata = t.radio_imgdata = t.ocean_imgdata = t.greengreyscale_imgdata = t.crimson = t.phase = t.grime = t.redgreyscale_imgdata = t.warmth = t.slate_imgdata = t.serenity_imgdata = t.vintage_imgdata = t.perfume_imgdata = t.greyscale_imgdata = t.frontward_imgdata = t.coral_imgdata = t.lemon_imgdata = t.sunset = t.wood = t.lix_conv = t.ryo_conv = t.solange_imgdata = t.solange_grey_imgdata = t.aeon_imgdata = t.blue_greyscale_imgdata = t.cool_twilight_imgdata = t.blues_imgdata = void 0;
    var d = e(0),
      n = void 0;
    t.blues_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 2] = 255 - a.data[n + 2];
      return a
    }, t.cool_twilight_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = 255 - a.data[n + 1];
      return a
    }, t.blue_greyscale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 20, a.data[n + 1] = t + 30, a.data[n + 2] = t + 60
      }
      return a
    }, t.aeon_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = 60 - a.data[n + 1], a.data[n + 2] = 100 - a.data[n + 2];
      return a
    }, t.solange_grey_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n + 2], a.data[n + 1] = a.data[n + 1], a.data[n + 2] = a.data[n];
      return a
    }, t.solange_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = 255 - a.data[n];
      return a
    }, t.ryo_conv = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = 255 - a.data[n], a.data[n + 2] = 255 - a.data[n + 2];
      return a
    }, t.lix_conv = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = 255 - a.data[n], a.data[n + 1] = 255 - a.data[n + 1];
      return a
    }, t.wood = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n] + 30, a.data[n + 1] = a.data[n + 1] + 12;
      return a
    }, t.sunset = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = a.data[n] + 50, a.data[n + 2] = a.data[n + 2] + 12;
      return a
    }, t.lemon_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = a.data[n] + 50;
      return a
    }, t.coral_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 2] = a.data[n + 1] + 50;
      return a
    }, t.frontward_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n + 2], a.data[n + 2] = a.data[n + 1] + 50;
      return a
    }, t.greyscale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t, a.data[n + 1] = t, a.data[n + 2] = t
      }
      return a
    }, t.perfume_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 80, a.data[n + 1] += 40, a.data[n + 2] += 120;
      return a
    }, t.vintage_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 120, a.data[n + 1] += 70, a.data[n + 2] += 13;
      return a
    }, t.serenity_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 10, a.data[n + 1] += 40, a.data[n + 2] += 90;
      return a
    }, t.slate_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 4, a.data[n + 1] = t + 3, a.data[n + 2] = t + 12
      }
      return a
    }, t.warmth = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n] + 10, a.data[n + 1] = a.data[n + 1] + 18;
      return a
    }, t.redgreyscale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 100, a.data[n + 1] = t + 40, a.data[n + 2] = t + 20
      }
      return a
    }, t.grime = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = a.data[n] + 5, a.data[n] = a.data[n] + 1;
      return a
    }, t.phase = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n] + (0, d.getRandomNumber)(10, 20), a.data[n + 1] = a.data[n + 2] + (0, d.getRandomNumber)(10, 20), a.data[n + 2] = a.data[n + 2] + (0, d.getRandomNumber)(10, 20);
      return a
    }, t.crimson = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = a.data[n] + 20, a.data[n + 1] = a.data[n + 2] + 20;
      return a
    }, t.greengreyscale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 20, a.data[n + 1] = t + 70, a.data[n + 2] = t + 20
      }
      return a
    }, t.ocean_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 10, a.data[n + 1] += 20, a.data[n + 2] += 90;
      return a
    }, t.radio_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 5, a.data[n + 1] = t + 40, a.data[n + 2] = t + 20
      }
      return a
    }, t.neue_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 2] = 255 - a.data[n + 2];
      return a
    }, t.eon_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = 120 - a.data[n + 1], a.data[n + 2] = 100 - a.data[n + 2];
      return a
    }, t.zapt_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 1] = 255 - a.data[n + 1];
      return a
    }, t.solange_dark_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = 200 - a.data[n];
      return a
    }, t.pink_aura_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 90, a.data[n + 1] += 10, a.data[n + 2] += 90;
      return a
    }, t.haze_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 90, a.data[n + 1] += 90, a.data[n + 2] += 10;
      return a
    }, t.mellow_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n + 2] = 120 - a.data[n + 2];
      return a
    }, t.evening_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] -= 60, a.data[n + 1] -= 60, a.data[n + 2] -= 60;
      return a
    }, t.horizon_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] -= 150, a.data[n + 1] -= 150, a.data[n + 2] -= 150;
      return a
    }, t.twenties_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 18, a.data[n + 1] = t + 12, a.data[n + 2] = t + 20
      }
      return a
    }, t.rosetint_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 80, a.data[n + 1] = t + 20, a.data[n + 2] = t + 31
      }
      return a
    }, t.purplescale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = t + 90, a.data[n + 1] = t + 40, a.data[n + 2] = t + 80
      }
      return a
    }
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.add_horizontal_line_imgdata = t.add_green_diagonal_lines_imgdata = t.add_diagonal_lines_imgdata = t.pane_imgdata = void 0;
    e(0);
    var d = void 0;
    t.pane_imgdata = function (a) {
      var t = 0;
      for (d = 0; d < a.data.length; d += 4) {
        (t += 200) > 255 && (t = 0);
        var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
        a.data[d] = e + 5, a.data[d + 1] = e + t, a.data[d + 2] = e + 20
      }
      return a
    }, t.add_diagonal_lines_imgdata = function (a) {
      var t = 0;
      for (d = 0; d < a.data.length; d += 4) {
        (t += 20) > 255 && (t = 0);
        var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
        a.data[d] = e + t, a.data[d + 1] = e + 70, a.data[d + 2] = e + 20
      }
      return a
    }, t.add_green_diagonal_lines_imgdata = function (a) {
      var t = 0;
      for (d = 0; d < a.data.length; d += 4) {
        (t += 20) > 255 && (t = 0);
        var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
        a.data[d] = e + 5, a.data[d + 1] = e + t, a.data[d + 2] = e + 20
      }
      return a
    }, t.add_horizontal_line_imgdata = function (a) {
      var t = 0;
      for (d = 0; d < a.data.length; d += 4) {
        (t += 1) > 255 && (t = 0);
        var e = (a.data[d] + a.data[d + 1] + a.data[d + 2]) / 3;
        a.data[d] = e + t, a.data[d + 1] = e + 70, a.data[d + 2] = e + 20
      }
      return a
    }
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.specksredscale_imgdata = t.specks_imgdata = t.green_specks_imgdata = t.eclectic_imgdata = t.retroviolet_imgdata = t.yellow_casino_imgdata = t.casino_imgdata = void 0;
    var d = e(0),
      n = void 0,
      r = void 0,
      i = void 0;
    t.casino_imgdata = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4) {
        (t = (0, d.getRandomNumber)(0, 255)) > 255 && (t = 0);
        var e = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = e + t, a.data[n + 1] = e + 2, a.data[n + 2] = e + 5
      }
      return a
    }, t.yellow_casino_imgdata = function (a) {
      var t = 0,
        e = 0;
      for (n = 0; n < a.data.length; n += 4) {
        t = (0, d.getRandomNumber)(0, 255), e = (0, d.getRandomNumber)(0, 255), t > 255 && (t = 0);
        var r = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = r + t, a.data[n + 1] = r + e, a.data[n + 2] = r + 5
      }
      return a
    }, t.retroviolet_imgdata = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4) {
        var e = 0,
          r = 0;
        (t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (e = 20, r = 30) : t > 49 && t < 100 ? (e = 20, r = 90) : (e = 10, r = 50), a.data[n] - e > 255 ? a.data[n] -= e : a.data[n] += e, a.data[n + 2] + r > 255 ? a.data[n + 2] -= r : a.data[n + 2] += r
      }
      return a
    }, t.eclectic_imgdata = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (r = 20, i = 30) : t > 49 && t < 100 ? (r = 10, i = 90) : (r = 30, i = 10), a.data[n] + 0 > 255 ? a.data[n] -= 0 : a.data[n] += 0, a.data[n + 1] + 0 > 255 ? a.data[n + 1] -= i : a.data[n] += i;
      return a
    }, t.green_specks_imgdata = function (a) {
      var t;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (r = 20, i = 30) : t > 49 && t < 100 ? (r = 10, i = 90) : (r = 30, i = 10), a.data[n] += r, a.data[n + 1] += i, a.data[n + 2] += r;
      return a
    }, t.specks_imgdata = function (a) {
      var t = 0,
        e = 0;
      for (n = 0; n < a.data.length; n += 4) {
        n = (0, d.getRandomNumber)(0, a.data.length), t = (0, d.getRandomNumber)(0, 255), e = (0, d.getRandomNumber)(0, 255), (0, d.getRandomNumber)(0, 255), t > 255 && (t = 0);
        var r = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = r + t, a.data[n + 1] = r + e, a.data[n + 2] = r + 5
      }
      return a
    }, t.specksredscale_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) {
        var t = (0, d.getRandomNumber)(0, 100);
        t > 10 && t < 13 && (a.data[n] = 120, a.data[n + 1] = 120, a.data[n + 2] = 120);
        var e = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = e + 100, a.data[n + 1] = e + 40, a.data[n + 2] = e + 20
      }
      return a
    }
  }, function (a, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.pixel_blue_imgdata = t.a = t.invert_imgdata = t.darkify_imgdata = t.incbrightness_two_imgdata = t.incbrightness_imgdata = t.sat_adj_imgdata = void 0;
    var d = e(0),
      n = void 0,
      r = void 0;
    t.sat_adj_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] -= 150, a.data[n + 1] -= 150, a.data[n + 2] -= 150;
      return a
    }, t.incbrightness_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] += 50, a.data[n + 1] += 50, a.data[n + 2] += 50;
      return a
    }, t.incbrightness_two_imgdata = function (a) {
      var t = 0,
        e = 0;
      for (n = 0; n < a.data.length; n += 4) {
        n = (0, d.getRandomNumber)(0, a.data.length), t = (0, d.getRandomNumber)(0, 255), e = (0, d.getRandomNumber)(0, 255), (0, d.getRandomNumber)(0, 255), t > 255 && (t = 0);
        var r = (a.data[n] + a.data[n + 1] + a.data[n + 2]) / 3;
        a.data[n] = r + t, a.data[n + 1] = r + e, a.data[n + 2] = r + 5
      }
      return a
    }, t.darkify_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] -= 20, a.data[n + 1] -= 20, a.data[n + 2] -= 20;
      return a
    }, t.invert_imgdata = function (a) {
      for (n = 0; n < a.data.length; n += 4) a.data[n] = 255 - a.data[n], a.data[n + 1] = 255 - a.data[n + 1], a.data[n + 2] = 255 - a.data[n + 2];
      return a
    }, t.a = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (0, r = 30) : t > 49 && t < 100 ? (100, r = 90) : (70, r = 10), a.data[n] - 0 > 255 ? a.data[n] -= 0 : a.data[n] += 0, a.data[n + 1] + 0 > 255 ? a.data[n + 1] -= r : a.data[n + 2] += r;
      return a
    }, t.pixel_blue_imgdata = function (a) {
      var t = 0;
      for (n = 0; n < a.data.length; n += 4)(t = (0, d.getRandomNumber)(0, 200)) > 0 && t < 50 ? (0, r = 30) : t > 49 && t < 100 ? (100, r = 90) : (70, r = 10), a.data[n] - 0 > 255 ? a.data[n] -= 0 : a.data[n] += 0, a.data[n + 1] + 0 > 255 ? a.data[n + 1] -= r : a.data[n + 2] += r;
      return a
    }
  }])
});