'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var commonHelpers_1 = require('../../../utils/commonHelpers');
var constants_1 = require('../../../constants');
var useRadialSlider = function (props) {
  var _a = props.radius,
    radius = _a === void 0 ? 100 : _a,
    _b = props.sliderWidth,
    sliderWidth = _b === void 0 ? 18 : _b,
    _c = props.openingRadian,
    openingRadian = _c === void 0 ? Math.PI / 3 : _c,
    _d = props.thumbRadius,
    thumbRadius = _d === void 0 ? 18 : _d,
    _e = props.thumbBorderWidth,
    thumbBorderWidth = _e === void 0 ? 5 : _e,
    _f = props.min,
    min = _f === void 0 ? 0 : _f,
    _g = props.max,
    max = _g === void 0 ? 200 : _g,
    variant = props.variant,
    _h = props.step,
    step = _h === void 0 ? 1 : _h;
  var centerValue = Math.round((max - min) / 2);
  //For default variant in radial slider
  var isRadialSliderVariant = variant === constants_1.default.radialSlider;
  //For radial-circle-slider variant
  var isRadialCircleVariant =
    variant === constants_1.default.radialCircleSlider;
  //For speedometer-marker variant
  var isMarkerVariant = variant === constants_1.default.speedoMeterMarker;
  //For speedometer variant
  var isSpeedoMeterVariant = variant === constants_1.default.speedometer;
  var radianValue = isRadialCircleVariant ? 0.057 : openingRadian;
  (0, react_1.useEffect)(
    function () {
      if (isMarkerVariant)
        if (min < 0) {
          throw 'Negative number is not allowed';
        } else if (max < 0) {
          throw 'Negative number is not allowed';
        }
      if (max < min) {
        throw 'max value should be greater than min';
      }
    },
    [isMarkerVariant, max, min]
  );
  var angle = (radianValue * 180.0) / Math.PI;
  var addRadialCircleCount = isRadialCircleVariant ? 6 : 0;
  var lineCount = 360 - angle * 2 + addRadialCircleCount;
  var lines = (0, commonHelpers_1.createRange)(min, lineCount + min, 1);
  var svgSize =
    radius * 2 +
    (0, commonHelpers_1.getExtraSize)(
      sliderWidth,
      thumbRadius,
      thumbBorderWidth
    );
  var containerRef = react_1.default.createRef();
  var lineHeight =
    (0, commonHelpers_1.getExtraSize)(
      sliderWidth,
      thumbRadius,
      thumbBorderWidth
    ) /
      2 +
    thumbBorderWidth;
  var startRadian = 2 * Math.PI - radianValue;
  var startPoint = (0, commonHelpers_1.polarToCartesian)(
    startRadian,
    radius,
    sliderWidth,
    thumbRadius,
    thumbBorderWidth
  );
  var endPoint = (0, commonHelpers_1.polarToCartesian)(
    radianValue,
    radius,
    sliderWidth,
    thumbRadius,
    thumbBorderWidth
  );
  var marks = (0, react_1.useMemo)(
    function () {
      if (isMarkerVariant) {
        var stepsLength = Math.round((max - min) / step);
        return __spreadArray([], Array(stepsLength + 1), true).map(function (
          _val,
          index
        ) {
          var isEven = index % 2 === 0;
          return {
            isEven: isEven,
            value: Math.round(index * step),
          };
        });
      } else {
        var array = [];
        for (var i = 0; i <= max; i++) {
          array.push(i);
        }
        return array.map(function (index) {
          var isEven = index % 2 === 0;
          return {
            isEven: isEven,
            value: Math.round(index * step),
          };
        });
      }
    },
    [isMarkerVariant, max, min, step]
  );
  return {
    angle: angle,
    lineCount: lineCount,
    lines: lines,
    svgSize: svgSize,
    containerRef: containerRef,
    lineHeight: lineHeight,
    startPoint: startPoint,
    endPoint: endPoint,
    startRadian: startRadian,
    radianValue: radianValue,
    isMarkerVariant: isMarkerVariant,
    marks: marks,
    isRadialCircleVariant: isRadialCircleVariant,
    centerValue: centerValue,
    isRadialSliderVariant: isRadialSliderVariant,
    isSpeedoMeterVariant: isSpeedoMeterVariant,
  };
};
exports.default = useRadialSlider;
