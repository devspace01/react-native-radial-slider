'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_native_1 = require('react-native');
var react_1 = require('react');
var react_native_svg_1 = require('react-native-svg');
var hooks_1 = require('./hooks');
var theme_1 = require('../../theme');
var LineContent = function (props) {
  var _a = (0, react_1.useState)([]),
    markerPositionValues = _a[0],
    setMarkerPositionValues = _a[1];
  var _b = props.radius,
    radius = _b === void 0 ? 100 : _b,
    _c = props.linearGradient,
    linearGradient = _c === void 0 ? [] : _c,
    _d = props.thumbBorderWidth,
    thumbBorderWidth = _d === void 0 ? 5 : _d,
    _e = props.markerLineSize,
    markerLineSize = _e === void 0 ? 50 : _e,
    _f = props.lineColor,
    lineColor = _f === void 0 ? theme_1.Colors.grey : _f,
    _g = props.lineSpace,
    lineSpace = _g === void 0 ? 3 : _g,
    _h = props.min,
    min = _h === void 0 ? 0 : _h,
    _j = props.max,
    max = _j === void 0 ? 100 : _j,
    markerValue = props.markerValue,
    isHideMarkerLine = props.isHideMarkerLine,
    _k = props.fixedMarker,
    fixedMarker = _k === void 0 ? false : _k,
    value = props.value,
    _l = props.markerValueInterval,
    markerValueInterval = _l === void 0 ? 10 : _l;
  var _m = (0, hooks_1.useRadialSlider)(props),
    angle = _m.angle,
    lineCount = _m.lineCount,
    lines = _m.lines,
    lineHeight = _m.lineHeight,
    isMarkerVariant = _m.isMarkerVariant,
    marks = _m.marks,
    isRadialCircleVariant = _m.isRadialCircleVariant,
    isRadialSliderVariant = _m.isRadialSliderVariant,
    isSpeedoMeterVariant = _m.isSpeedoMeterVariant;
  var markerInnerValue = Math.round(max / markerValueInterval);
  (0, react_1.useEffect)(
    function () {
      var arr = [];
      for (var i = 0; i < marks.length; i = i + markerInnerValue) {
        arr.push(marks[i].value);
      }
      setMarkerPositionValues(arr);
    },
    [markerInnerValue, marks, max]
  );
  return react_1.default.createElement(
    react_native_svg_1.G,
    null,
    lines.map(function (_value, index) {
      var _a;
      var plusActiveIndex = index === 0 ? 0 : 1;
      var activeIndex =
        ((((value - min) * 100) / (max - min)) * lineCount) / 100 +
        plusActiveIndex;
      var getMarketIndex = function () {
        return markerPositionValues.map(function (val) {
          return Math.floor(
            ((((val - min) * 100) / (max - min)) * lineCount) / 100
          );
        });
      };
      var markIndex = Math.floor(
        (((((!fixedMarker ? markerValue : value) - min) * 100) / (max - min)) *
          lineCount) /
          100
      );
      var isMarkerLine =
        (_a = getMarketIndex()) === null || _a === void 0
          ? void 0
          : _a.includes(index);
      var isSpeedoMarker = !isMarkerVariant ? 0 : isMarkerLine ? -10 : 0;
      var isSpeedoMeterMarkerLine =
        isRadialCircleVariant || isRadialSliderVariant || isSpeedoMeterVariant
          ? false
          : isMarkerLine;
      var radialCircleLineRotation = isRadialCircleVariant ? 86 : 90;
      return react_1.default.createElement(
        react_native_svg_1.G,
        { key: index.toString() },
        (index % lineSpace === 0 ||
          index === markIndex ||
          isSpeedoMeterMarkerLine) &&
          react_1.default.createElement(
            react_native_svg_1.G,
            {
              transform: 'translate('
                .concat(radius + (lineHeight - thumbBorderWidth), ', ')
                .concat(radius + (lineHeight - thumbBorderWidth), ')'),
            },
            react_1.default.createElement(react_native_svg_1.Line, {
              x1:
                index === markIndex && !isHideMarkerLine
                  ? radius + markerLineSize
                  : radius + lineHeight,
              x2: radius + lineHeight / 2 + isSpeedoMarker,
              transform: 'rotate('.concat(
                index + radialCircleLineRotation + angle,
                ')'
              ),
              strokeWidth: 2,
              stroke:
                activeIndex > index ||
                (index === markIndex && !isHideMarkerLine)
                  ? react_native_1.Platform.OS === 'web'
                    ? linearGradient[0].color
                    : 'url(#gradient)'
                  : lineColor,
              fill: 'none',
              strokeLinecap: 'round',
            })
          )
      );
    })
  );
};
exports.default = LineContent;
