/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursor */ "./src/js/cursor.js");
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apropos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apropos */ "./src/js/apropos.js");
/* harmony import */ var _apropos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apropos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./src/js/number.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_number__WEBPACK_IMPORTED_MODULE_3__);
// Import just what we need
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
 // import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';





/***/ }),

/***/ "./src/js/apropos.js":
/*!***************************!*\
  !*** ./src/js/apropos.js ***!
  \***************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var markers = [{
  name: 'Argentine',
  lat: -23,
  "long": -68
}, {
  name: 'Japon',
  lat: 36,
  "long": 138
}, {
  name: 'Kenya',
  lat: -1,
  "long": 36
}, {
  name: 'Thaiti',
  lat: -17,
  "long": -149
}];
var $ = {
  canvas: null,
  ctx: null,
  vCenter: 820,
  scroll: {
    lat: 0,
    "long": 20
  },
  markers: [],
  timing: {
    speed: 16,
    delta: 0,
    last: 0
  },
  drag: {
    start: {
      x: 0,
      y: 0
    },
    force: 0,
    prevX: 0,
    isDragging: false
  },
  colors: {
    pushPinBase: '#969799',
    pushPin: '#ed5c50',
    land: '#3bc36e',
    //'#ffc975',
    landShade: '#2c606e',
    ocean: '#2A7B96'
  },
  complexShapes: {// put complex shapes here
  }
};

var lerp = function lerp(norm, min, max) {
  return (max - min) * norm + min;
};

var norm = function norm(value, min, max) {
  return (value - min) / (max - min);
};

var map = function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
};

var dragMove = function dragMove(e) {
  if ($.drag.isDragging) {
    var _long = $.drag.start["long"],
        clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
        change = clientX - $.drag.start.x,
        prevChange = clientX - $.drag.prevX,
        canvasWidth = $.canvas.getBoundingClientRect().width;
    _long += map(change, 0, canvasWidth, 0, 200);

    while (_long < 0) {
      _long += 360;
    }

    if (prevChange > 0 && $.drag.force < 0) {
      $.drag.force = 0;
    } else if (prevChange < 0 && $.drag.force > 0) {
      $.drag.force = 0;
    }

    $.drag.force += prevChange * (600 / canvasWidth);
    $.drag.prevX = clientX;
    $.scroll["long"] = Math.abs(_long) % 360;
  }
};

var dragStart = function dragStart(e) {
  if (e.targetTouches) {
    e.preventDefault();
    $.drag.start = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
      "long": $.scroll["long"]
    };
  } else {
    $.drag.start = {
      x: e.clientX,
      y: e.clientY,
      "long": $.scroll["long"]
    };
  }

  $.timing.speed = 0;
  $.drag.isDragging = true;
  $.canvas.classList.add('globe--dragging');
};

var dragEnd = function dragEnd(e) {
  if ($.drag.isDragging) {
    $.timing.speed = map($.drag.force, 0, 220, 0, 40);
    $.drag.isDragging = false;
    $.canvas.classList.remove('globe--dragging');
  }
};

var getRadius = function getRadius(latitude) {
  var yPart = Math.PI * 2,
      radius = 600,
      frame = map(latitude, 90, -90, 0, 1.65);
  return Math.max(Math.sin(yPart + frame) * radius, 0);
};

var latLongSphere = function latLongSphere(lat, lon, radius) {
  var x = 900,
      y = $.vCenter,
      z = 0;
  lon = -lon;
  var phi = (90 - lat) * (Math.PI / 180),
      teta = (lon + 180) * (Math.PI / 180);
  x -= -(radius * Math.sin(phi) * Math.cos(teta));
  y -= radius * Math.cos(phi);
  z = radius * Math.sin(phi) * Math.sin(teta);
  return {
    x: x,
    y: y,
    z: z
  };
};

var drawGlobe = function drawGlobe(ctx, color) {
  ctx.beginPath();
  ctx.arc(900, $.vCenter, 600, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

var getLandMassPaths = function getLandMassPaths(name, radius, thickness) {
  var landmassBasic = continents[name],
      landmass = null,
      first = true,
      rotated = false,
      paths = {
    ground: new Path2D(),
    top: new Path2D(),
    sections: [],
    isVisible: false
  },
      section = {
    ground: [],
    top: []
  }; // Complexify

  if ($.complexShapes[name]) {
    landmass = $.complexShapes[name];
  } else {
    landmass = complexify(landmassBasic, 1);
    $.complexShapes[name] = landmass;
  }

  for (var i = 0; i < landmass.length; i++) {
    var point = landmass[0],
        _p = latLongSphere(point.lat + $.scroll.lat, point["long"] + $.scroll["long"], radius);

    if (_p.z < 0) {
      landmass.splice(0, 0, landmass.pop());
      rotated = true;
    } else {
      break;
    }
  }

  var drawCurve = false,
      curveStart = null,
      sectionIsVisible = false;
  landmass.forEach(function (point) {
    var p = latLongSphere(point.lat + $.scroll.lat, point["long"] + $.scroll["long"], radius),
        p2 = latLongSphere(point.lat + $.scroll.lat, point["long"] + $.scroll["long"], radius + thickness);

    if (!sectionIsVisible && p.z > -200) {
      sectionIsVisible = true;
    }

    section.ground.push({
      x: p.x,
      y: p.y,
      z: p.z
    });
    section.top.push({
      x: p2.x,
      y: p2.y,
      z: p2.z
    });

    if (point.edge && !first) {
      if (sectionIsVisible) {
        paths.sections.push(Object.assign({}, section));
      }

      section = {
        ground: [{
          x: p.x,
          y: p.y,
          z: p.z
        }],
        top: [{
          x: p2.x,
          y: p2.y,
          z: p2.z
        }]
      };
      sectionIsVisible = false;
    }

    first = false;

    if (p.z > 0) {
      if (drawCurve) {
        drawCurve = false;
        closeCurve(paths.ground, curveStart, p, radius);
        closeCurve(paths.top, curveStart, p2, radius + thickness);
      } else {
        paths.ground.lineTo(p.x, p.y);
        paths.top.lineTo(p2.x, p2.y);
        paths.isVisible = true;
      }
    } else {
      // draw curve
      if (!drawCurve) {
        drawCurve = true;
        curveStart = {
          x: p.x,
          y: p.y,
          z: p.z
        };
      }
    }
  }); // if the last point is in a curve

  if (drawCurve) {
    drawCurve = false;

    var _point = landmass.slice(-1)[0],
        _p2 = latLongSphere(_point.lat + $.scroll.lat, _point["long"] + $.scroll["long"], radius),
        _p3 = latLongSphere(_point.lat + $.scroll.lat, _point["long"] + $.scroll["long"], radius + thickness);

    closeCurve(paths.ground, curveStart, _p2, radius);
    closeCurve(paths.top, curveStart, _p3, radius + thickness);
  }

  var p = latLongSphere(landmass[0].lat + $.scroll.lat, landmass[0]["long"] + $.scroll["long"], radius),
      p2 = latLongSphere(landmass[0].lat + $.scroll.lat, landmass[0]["long"] + $.scroll["long"], radius + thickness);
  section.ground.push({
    x: p.x,
    y: p.y,
    z: p.z
  });
  section.top.push({
    x: p2.x,
    y: p2.y,
    z: p2.z
  });

  if (section) {
    paths.sections.push(Object.assign({}, section));
  }

  return paths;
};

var closeCurve = function closeCurve(path, curveStart, p, radius) {
  // draw curve from curveStart på p
  var a1 = getAngle({
    x: 900,
    y: $.vCenter
  }, curveStart),
      a2 = getAngle({
    x: 900,
    y: $.vCenter
  }, p),
      compare = a1 - a2,
      startAngle = a1 * (Math.PI / 180),
      endAngle = a2 * (Math.PI / 180);
  path.arc(900, $.vCenter, radius, startAngle, endAngle, compare > 0 && compare < 180);
};

var getCirclePoint = function getCirclePoint(angle, radius) {
  var radian = angle / 180 * Math.PI;
  return {
    x: radius * Math.cos(radian) + 900,
    y: radius * Math.sin(radian) + 800
  };
};

var getAngle = function getAngle(p1, p2) {
  var dy = p2.y - p1.y,
      dx = p2.x - p1.x,
      theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI;
  return theta;
};

var complexify = function complexify(landmass, level) {
  var complex = [];

  for (var i = 0; i < landmass.length - 1; i++) {
    var p1 = landmass[i],
        p2 = landmass[i + 1],
        steps = Math.floor(distanceBetween(p1, p2) / level);
    p1.edge = true;
    complex.push(p1);

    if (steps > 0) {
      var s = Math.floor(100 / steps);

      for (var _i = 1; _i <= steps; _i++) {
        var percentage = _i * s;

        if (percentage <= 100) {
          var p = {
            lat: map(percentage, 0, 100, p1.lat, p2.lat),
            "long": map(percentage, 0, 100, p1["long"], p2["long"])
          };
          complex.push(p);
        }
      }
    }
  }

  var last = landmass.pop();
  last.edge = true;
  complex.push(last);
  return complex;
};

var distanceBetween = function distanceBetween(p1, p2) {
  var a = p1["long"] - p2["long"],
      b = p1.lat - p2.lat;
  return Math.hypot(a, b);
};

var continents = {
  africa: [{
    lat: 35.7,
    "long": -5.8
  }, {
    lat: 37.1,
    "long": 10.9
  }, {
    lat: 30,
    "long": 32.2
  }, {
    lat: 10.6,
    "long": 44
  }, {
    lat: 11.8,
    "long": 51
  }, {
    lat: -27.6,
    "long": 30.5
  }, {
    lat: -33.8,
    "long": 18.6
  }, {
    lat: 4.7,
    "long": 9.2
  }, {
    lat: 4.9,
    "long": -7.7
  }, {
    lat: 14.6,
    "long": -16.8
  }, {
    lat: 35.7,
    "long": -5.8
  }],
  australia: [{
    lat: -22,
    "long": 114
  }, {
    lat: -19,
    "long": 121
  }, {
    lat: -12,
    "long": 130
  }, {
    lat: -12,
    "long": 136
  }, {
    lat: -24,
    "long": 153
  }, {
    lat: -37,
    "long": 150
  }, {
    lat: -37,
    "long": 140
  }, {
    lat: -30,
    "long": 131
  }, {
    lat: -34,
    "long": 115
  }, {
    lat: -22,
    "long": 114
  }],
  southamerica: [{
    lat: 12,
    "long": -73
  }, {
    lat: 10,
    "long": -61
  }, {
    lat: -6,
    "long": -34
  }, {
    lat: -43,
    "long": -62
  }, {
    lat: -54,
    "long": -67
  }, {
    lat: -51,
    "long": -74
  }, {
    lat: -18,
    "long": -70
  }, {
    lat: -8,
    "long": -77
  }, {
    lat: -5,
    "long": -81
  }, {
    lat: 12,
    "long": -73
  }],
  northamerica: [{
    lat: 10,
    "long": -72
  }, {
    lat: 7,
    "long": -75
  }, {
    lat: 19,
    "long": -104
  }, {
    lat: 36,
    "long": -121
  }, {
    lat: 59,
    "long": -140
  }, {
    lat: 54,
    "long": -167
  }, {
    lat: 70,
    "long": -163
  }, {
    lat: 68,
    "long": -137
  }, {
    lat: 65,
    "long": -88
  }, {
    lat: 57,
    "long": -92
  }, {
    lat: 54,
    "long": -80
  }, {
    lat: 62,
    "long": -75
  }, {
    lat: 50,
    "long": -54
  }, {
    lat: 31,
    "long": -80
  }, {
    lat: 25,
    "long": -79
  }, {
    lat: 26,
    "long": -81
  }, {
    lat: 29,
    "long": -84
  }, {
    lat: 28,
    "long": -96
  }, {
    lat: 19,
    "long": -95
  }, {
    lat: 20,
    "long": -87
  }, {
    lat: 14,
    "long": -83
  }, {
    lat: 10,
    "long": -72
  }],
  greenland: [{
    lat: 78,
    "long": -68
  }, {
    lat: 81,
    "long": -18
  }, {
    lat: 69,
    "long": -25
  }, {
    lat: 60,
    "long": -42
  }, {
    lat: 67,
    "long": -52
  }, {
    lat: 78,
    "long": -68
  }],
  japan: [{
    lat: 45,
    "long": 141
  }, {
    lat: 43,
    "long": 146
  }, {
    lat: 35,
    "long": 140
  }, {
    lat: 31,
    "long": 131
  }, {
    lat: 34,
    "long": 129
  }, {
    lat: 36,
    "long": 136
  }, {
    lat: 39,
    "long": 140
  }, {
    lat: 45,
    "long": 141
  }],
  indonesia: [{
    lat: 7,
    "long": 117
  }, {
    lat: 5,
    "long": 119
  }, {
    lat: 0,
    "long": 118
  }, {
    lat: -4,
    "long": 115
  }, {
    lat: -3,
    "long": 111
  }, {
    lat: 2,
    "long": 108
  }, {
    lat: 7,
    "long": 117
  }],
  papua: [{
    lat: -1,
    "long": 132
  }, {
    lat: -3,
    "long": 142
  }, {
    lat: -10,
    "long": 146
  }, {
    lat: -7,
    "long": 140
  }, {
    lat: -6,
    "long": 134
  }, {
    lat: -1,
    "long": 132
  }],
  nz: [{
    lat: -35,
    "long": 174
  }, {
    lat: -38,
    "long": 178
  }, {
    lat: -46,
    "long": 169
  }, {
    lat: -45,
    "long": 165
  }, {
    lat: -38,
    "long": 175
  }, {
    lat: -35,
    "long": 174
  }],
  asia: [{
    lat: 64,
    "long": 37
  }, {
    lat: 73,
    "long": 80
  }, {
    lat: 66,
    "long": 98
  }, {
    lat: 69,
    "long": 175
  }, {
    lat: 60,
    "long": 163
  }, {
    lat: 38,
    "long": 118
  }, {
    lat: 28,
    "long": 119
  }, {
    lat: 23,
    "long": 108
  }, {
    lat: 12,
    "long": 109
  }, {
    lat: 9,
    "long": 102
  }, {
    lat: 23,
    "long": 88
  }, {
    lat: 16,
    "long": 82
  }, {
    lat: 7,
    "long": 79
  }, {
    lat: 25,
    "long": 68
  }, {
    lat: 27,
    "long": 62
  }, {
    lat: 21,
    "long": 58
  }, {
    lat: 13,
    "long": 44
  }, {
    lat: 30,
    "long": 33.5
  }, {
    lat: 64,
    "long": 37
  }],
  europe: [{
    lat: 37,
    "long": -9
  }, {
    lat: 43,
    "long": -9
  }, {
    lat: 44,
    "long": 0
  }, {
    lat: 48,
    "long": -4
  }, {
    lat: 53,
    "long": 5
  }, {
    lat: 56,
    "long": 8
  }, {
    lat: 54,
    "long": 11
  }, {
    lat: 55,
    "long": 21
  }, {
    lat: 59,
    "long": 30
  }, {
    lat: 60,
    "long": 23
  }, {
    lat: 61,
    "long": 22
  }, {
    lat: 65,
    "long": 26
  }, {
    lat: 65,
    "long": 22
  }, {
    lat: 60,
    "long": 17
  }, {
    lat: 59,
    "long": 19
  }, {
    lat: 56,
    "long": 16
  }, {
    lat: 56,
    "long": 13
  }, {
    lat: 60,
    "long": 11
  }, {
    lat: 60,
    "long": 5
  }, {
    lat: 69,
    "long": 15
  }, {
    lat: 70,
    "long": 28
  }, {
    lat: 68,
    "long": 48
  }, {
    lat: 36,
    "long": 38
  }, {
    lat: 45,
    "long": 16
  }, {
    lat: 45,
    "long": 12
  }, {
    lat: 40,
    "long": 18
  }, {
    lat: 37,
    "long": 15
  }, {
    lat: 40,
    "long": 14
  }, {
    lat: 44,
    "long": 8
  }, {
    lat: 41,
    "long": 1
  }, {
    lat: 37,
    "long": -2
  }, {
    lat: 37,
    "long": -8
  }, {
    lat: 37,
    "long": -9
  }],
  britain: [{
    lat: 50,
    "long": -5
  }, {
    lat: 54,
    "long": -3
  }, {
    lat: 57,
    "long": -6
  }, {
    lat: 57,
    "long": -2
  }, {
    lat: 51,
    "long": 1
  }, {
    lat: 50,
    "long": -5
  }],
  madagaskar: [{
    lat: -13,
    "long": 49
  }, {
    lat: -17,
    "long": 43
  }, {
    lat: -24,
    "long": 44
  }, {
    lat: -25,
    "long": 47
  }, {
    lat: -13,
    "long": 49
  }]
};

var updateState = function updateState(delta) {
  $.drag.force *= 0.8;

  if ($.timing.speed) {
    $.scroll["long"] += Math.round = $.timing.speed / 100 * delta;

    if ($.scroll["long"] > 360) {
      $.scroll["long"] = $.scroll["long"] % 360;
    } else if ($.scroll["long"] < 0) {
      $.scroll["long"] += 360;
    }
  }
};

var animateLoop = function animateLoop(time) {
  $.timing.delta = Math.abs($.timing.last - time);
  $.timing.last = time;
  updateState($.timing.delta); // clear

  $.ctx.fillStyle = '#fcfcfc';
  $.ctx.fillRect(0, 0, 1800, 1600);
  drawMarkers($.ctx, $.markers, false);
  var continentNames = ['southamerica', 'northamerica', 'greenland', 'japan', 'africa', 'australia', 'asia', 'indonesia', 'europe', 'britain', 'madagaskar', 'papua', 'nz'];
  var landPaths = [],
      se = [];
  continentNames.forEach(function (name) {
    var paths = getLandMassPaths(name, 600, 30);

    if (paths) {
      $.ctx.fillStyle = $.colors.landShade;
      paths.sections.forEach(function (section) {
        se.push(section);
        drawSection($.ctx, section, true);
      });

      if (paths.isVisible) {
        landPaths.push(paths.top);
      }
    }
  });
  drawGlobe($.ctx, $.colors.ocean);
  $.ctx.fillStyle = $.colors.landShade;
  se.forEach(function (section) {
    drawSection($.ctx, section, false);
  });
  landPaths.forEach(function (path) {
    $.ctx.fillStyle = $.colors.land;
    $.ctx.fill(path);
  });
  drawMarkers($.ctx, $.markers, true);
  requestAnimationFrame(animateLoop);
};

var drawSection = function drawSection(ctx, section, drawBackside) {
  var hasStarted = false,
      limit = -25;
  section.ground.forEach(function (p) {
    if (drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
      if (!hasStarted) {
        ctx.beginPath();
        hasStarted = true;
      }

      ctx.lineTo(p.x, p.y);
    }
  });
  section.top = drawBackside ? section.top.reverse() : section.top;
  section.top.forEach(function (p) {
    if (drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
      ctx.lineTo(p.x, p.y);
    }
  });

  if (hasStarted) {
    ctx.closePath();
    ctx.fill();
  }
};

var drawMarkers = function drawMarkers(ctx, markers, drawFront) {
  var _iterator = _createForOfIteratorHelper(markers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var marker = _step.value;
      var ground = latLongSphere(marker.lat + $.scroll.lat, marker["long"] + $.scroll["long"], 630),
          needleTop = latLongSphere(marker.lat + $.scroll.lat, marker["long"] + $.scroll["long"], 730),
          pinTop = latLongSphere(marker.lat + $.scroll.lat, marker["long"] + $.scroll["long"], 750);

      if (ground.z >= 0 && drawFront) {
        drawMapPushPinBase(ctx, ground, needleTop, $.colors.pushPinBase);
        drawMapPushPin(ctx, pinTop, $.colors.pushPin);
        drawMarkerText(ctx, marker.name, pinTop);
      } else if (!drawFront) {
        drawMapPushPin(ctx, pinTop, $.colors.pushPin);
        drawMapPushPinBase(ctx, ground, needleTop, $.colors.pushPinBase);
        drawMarkerText(ctx, marker.name, pinTop);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var drawMarkerText = function drawMarkerText(ctx, text, pos) {
  ctx.font = "60px 'Pirata One', cursive";
  ctx.fillStyle = 'black';
  var metrics = ctx.measureText(text);
  ctx.fillText(text, pos.x - metrics.width / 2, pos.y - 30);
};

var drawMapPushPinBase = function drawMapPushPinBase(ctx, basePos, topPos, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(basePos.x, basePos.y);
  ctx.lineTo(topPos.x, topPos.y);
  ctx.stroke();
};

var drawMapPushPin = function drawMapPushPin(ctx, pos, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
  ctx.fill();
};

var init = function init(markers) {
  $.markers = markers;
  $.canvas = document.querySelector('.globe');
  $.ctx = $.canvas.getContext('2d');
  $.canvas.addEventListener("touchstart", dragStart, false);
  $.canvas.addEventListener("mousedown", dragStart, false);
  $.canvas.addEventListener("touchend", dragEnd, false);
  $.canvas.addEventListener("mouseup", dragEnd, false);
  $.canvas.addEventListener("touchmove", dragMove, false);
  $.canvas.addEventListener("mousemove", dragMove, false);
  $.canvas.addEventListener("mouseleave", dragEnd, false);
  requestAnimationFrame(animateLoop);
};

init(markers);

/***/ }),

/***/ "./src/js/cursor.js":
/*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
/***/ (() => {

document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
  t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", e.style.left = n.clientX + "px", e.style.top = n.clientY + "px", i.style.left = n.clientX + "px", i.style.top = n.clientY + "px";
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

/***/ }),

/***/ "./src/js/number.js":
/*!**************************!*\
  !*** ./src/js/number.js ***!
  \**************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp64\\www\\mspr-html\\src\\js\\number.js: Identifier 'counterNumber' has already been declared (25:6)\n\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[90m// POURCENT\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 | \u001b[39m\u001b[36mconst\u001b[39m counterNumber \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m    element \u001b[33m:\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m\".number span\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m    init\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[0m\n    at Parser._raise (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:4919:12)\n    at ScopeHandler.declareName (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:4885:12)\n    at Parser.checkLVal (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:9590:24)\n    at Parser.parseVarId (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:12361:10)\n    at Parser.parseVar (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:12336:12)\n    at Parser.parseVarStatement (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:12151:10)\n    at Parser.parseStatementContent (C:\\wamp64\\www\\mspr-html\\node_modules\\@babel\\parser\\lib\\index.js:11743:21)");

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/collapse.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap collapse.js v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data.js */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js")) :
  0;
}(this, (function (Data, EventHandler, Manipulator, SelectorEngine) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement = function isElement(obj) {
    return (obj[0] || obj).nodeType;
  };

  var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
    var called = false;
    var durationPadding = 5;
    var emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
      }
    });
  };

  var reflow = function reflow(element) {
    return element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  var isRTL = document.documentElement.dir === 'rtl';

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.0.0-beta1';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      if (!element) {
        return;
      }

      this._element = element;
      Data__default['default'].setData(element, this.constructor.DATA_KEY, this);
    }

    var _proto = BaseComponent.prototype;

    _proto.dispose = function dispose() {
      Data__default['default'].removeData(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */
    ;

    BaseComponent.getInstance = function getInstance(element) {
      return Data__default['default'].getData(element, this.DATA_KEY);
    };

    _createClass(BaseComponent, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return BaseComponent;
  }();

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Collapse, _BaseComponent);

    function Collapse(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._isTransitioning = false;
      _this._config = _this._getConfig(config);
      _this._triggerArray = SelectorEngine__default['default'].find(SELECTOR_DATA_TOGGLE + "[href=\"#" + element.id + "\"]," + (SELECTOR_DATA_TOGGLE + "[data-bs-target=\"#" + element.id + "\"]"));
      var toggleList = SelectorEngine__default['default'].find(SELECTOR_DATA_TOGGLE);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine__default['default'].find(selector).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length) {
          _this._selector = selector;

          _this._triggerArray.push(elem);
        }
      }

      _this._parent = _this._config.parent ? _this._getParent() : null;

      if (!_this._config.parent) {
        _this._addAriaAndCollapsedClass(_this._element, _this._triggerArray);
      }

      if (_this._config.toggle) {
        _this.toggle();
      }

      return _this;
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this2 = this;

      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = SelectorEngine__default['default'].find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
          if (typeof _this2._config.parent === 'string') {
            return elem.getAttribute('data-bs-parent') === _this2._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      var container = SelectorEngine__default['default'].findOne(this._selector);

      if (actives) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Data__default['default'].getData(tempActiveData, DATA_KEY) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data__default['default'].setData(elemActive, DATA_KEY, null);
          }
        });
      }

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(function (element) {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        _this2._element.style[dimension] = '';

        _this2.setTransitioning(false);

        EventHandler__default['default'].trigger(_this2._element, EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler__default['default'].one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var startEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this3.setTransitioning(false);

        _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this3._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler__default['default'].trigger(_this3._element, EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler__default['default'].one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      this._config = null;
      this._parent = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this4 = this;

      var parent = this._config.parent;

      if (isElement(parent)) {
        // it's a jQuery object
        if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
          parent = parent[0];
        }
      } else {
        parent = SelectorEngine__default['default'].findOne(parent);
      }

      var selector = SELECTOR_DATA_TOGGLE + "[data-bs-parent=\"" + parent + "\"]";
      SelectorEngine__default['default'].find(selector, parent).forEach(function (element) {
        var selected = getElementFromSelector(element);

        _this4._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      var isOpen = element.classList.contains(CLASS_NAME_SHOW);
      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static
    ;

    Collapse.collapseInterface = function collapseInterface(element, config) {
      var data = Data__default['default'].getData(element, DATA_KEY);

      var _config = _extends({}, Default, Manipulator__default['default'].getDataAttributes(element), typeof config === 'object' && config ? config : {});

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Collapse.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    };

    _createClass$1(Collapse, null, [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A') {
      event.preventDefault();
    }

    var triggerData = Manipulator__default['default'].getDataAttributes(this);
    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine__default['default'].find(selector);
    selectorElements.forEach(function (element) {
      var data = Data__default['default'].getData(element, DATA_KEY);
      var config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      $.fn[NAME] = Collapse.jQueryInterface;
      $.fn[NAME].Constructor = Collapse;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Collapse.jQueryInterface;
      };
    }
  });

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var mapData = function () {
    var storeData = {};
    var id = 1;
    return {
      set: function set(element, key, data) {
        if (typeof element.bsKey === 'undefined') {
          element.bsKey = {
            key: key,
            id: id
          };
          id++;
        }

        storeData[element.bsKey.id] = data;
      },
      get: function get(element, key) {
        if (!element || typeof element.bsKey === 'undefined') {
          return null;
        }

        var keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          return storeData[keyProperties.id];
        }

        return null;
      },
      delete: function _delete(element, key) {
        if (typeof element.bsKey === 'undefined') {
          return;
        }

        var keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          delete storeData[keyProperties.id];
          delete element.bsKey;
        }
      }
    };
  }();

  var Data = {
    setData: function setData(instance, key, data) {
      mapData.set(instance, key, data);
    },
    getData: function getData(instance, key) {
      return mapData.get(instance, key);
    },
    removeData: function removeData(instance, key) {
      mapData.delete(instance, key);
    }
  };

  return Data;

})));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap event-handler.js v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var isRTL = document.documentElement.dir === 'rtl';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector) {
    if (delegationSelector === void 0) {
      delegationSelector = null;
    }

    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    var custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams[0],
        originalHandler = _normalizeParams[1],
        typeEvent = _normalizeParams[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
          delegation = _normalizeParams2[0],
          originalHandler = _normalizeParams2[1],
          typeEvent = _normalizeParams2[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = event.replace(stripNameRegex, '');
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };

  return EventHandler;

})));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-" + chr.toLowerCase();
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-" + normalizeDataKey(key), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-" + normalizeDataKey(key));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-" + normalizeDataKey(key)));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };

  return Manipulator;

})));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap selector-engine.js v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NODE_TEXT = 3;
  var SelectorEngine = {
    matches: function matches(element, selector) {
      return element.matches(selector);
    },
    find: function find(selector, element) {
      var _ref;

      if (element === void 0) {
        element = document.documentElement;
      }

      return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;

      var children = (_ref2 = []).concat.apply(_ref2, element.children);

      return children.filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (this.matches(ancestor, selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (this.matches(next, selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };

  return SelectorEngine;

})));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/js/app.js"],
/******/ 			["./src/scss/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;