'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_native_svg_1 = require('react-native-svg');
var react_native_1 = require('react-native');
var styles_1 = require('./styles');
var hooks_1 = require('./hooks');
var CenterContent_1 = require('./CenterContent');
var TailText_1 = require('./TailText');
var LineContent_1 = require('./LineContent');
var NeedleContent_1 = require('./NeedleContent');
var SpeedometerDefaultProps_1 = require('./SpeedometerDefaultProps');
var MarkerValueContent_1 = require('./MarkerValueContent');
var SpeedoMeter = function (props) {
  var radius = props.radius,
    sliderWidth = props.sliderWidth,
    sliderTrackColor = props.sliderTrackColor,
    openingRadian = props.openingRadian,
    _a = props.linearGradient,
    linearGradient = _a === void 0 ? [] : _a,
    style = props.style,
    markerLineSize = props.markerLineSize,
    contentStyle = props.contentStyle,
    isHideSlider = props.isHideSlider,
    isHideCenterContent = props.isHideCenterContent,
    isHideTailText = props.isHideTailText,
    isHideLines = props.isHideLines,
    _b = props.unit,
    unit = _b === void 0 ? '' : _b,
    strokeLinecap = props.strokeLinecap,
    max = props.max,
    unitStyle = props.unitStyle,
    _c = props.value,
    value = _c === void 0 ? 0 : _c,
    unitValueContentStyle = props.unitValueContentStyle,
    min = props.min;
  var _d = (0, hooks_1.useSilderAnimation)(props),
    _e = _d.value,
    sliderValue = _e === void 0 ? 0 : _e,
    setValue = _d.setValue,
    curPoint = _d.curPoint,
    currentRadian = _d.currentRadian;
  (0, react_1.useEffect)(
    function () {
      if (value < min) {
        setValue(min);
      } else if (value > max) {
        setValue(max);
      } else {
        setValue(value);
      }
    },
    [max, min, setValue, value]
  );
  var _f = (0, hooks_1.useRadialSlider)(props),
    svgSize = _f.svgSize,
    containerRef = _f.containerRef,
    startPoint = _f.startPoint,
    endPoint = _f.endPoint,
    startRadian = _f.startRadian,
    isMarkerVariant = _f.isMarkerVariant;
  var onLayout = function () {
    var ref = containerRef.current;
    if (ref) {
      ref.measure(function (_x, _y, _width, _height) {});
    }
  };
  return react_1.default.createElement(
    react_native_1.View,
    {
      onLayout: onLayout,
      ref: containerRef,
      style: [
        styles_1.styles.container,
        style,
        { width: svgSize, height: svgSize },
      ],
      testID: 'slider-view',
    },
    react_1.default.createElement(
      react_native_svg_1.default,
      {
        width:
          svgSize +
          markerLineSize / 2 -
          (react_native_1.Platform.OS === 'web' ? 20 : 0),
        height: svgSize + markerLineSize / 2,
        viewBox: '-'
          .concat(markerLineSize / 2, ' -')
          .concat(markerLineSize / 2, ' ')
          .concat(svgSize + markerLineSize, ' ')
          .concat(svgSize + markerLineSize),
        preserveAspectRatio: 'none',
      },
      react_1.default.createElement(
        react_native_svg_1.Defs,
        null,
        react_1.default.createElement(
          react_native_svg_1.LinearGradient,
          { x1: '0%', y1: '100%', x2: '100%', y2: '0%', id: 'gradient' },
          linearGradient === null || linearGradient === void 0
            ? void 0
            : linearGradient.map(function (item, index) {
                return react_1.default.createElement(react_native_svg_1.Stop, {
                  key: index,
                  offset: item.offset,
                  stopColor: item.color,
                });
              })
        )
      ),
      !isHideTailText &&
        react_1.default.createElement(TailText_1.default, __assign({}, props)),
      !isHideLines &&
        react_1.default.createElement(
          LineContent_1.default,
          __assign({}, props, { value: sliderValue })
        ),
      isMarkerVariant &&
        react_1.default.createElement(
          MarkerValueContent_1.default,
          __assign({}, props, { value: sliderValue })
        ),
      !isMarkerVariant &&
        !isHideSlider &&
        react_1.default.createElement(
          react_1.default.Fragment,
          null,
          react_1.default.createElement(react_native_svg_1.Path, {
            strokeWidth: sliderWidth,
            stroke: sliderTrackColor,
            fill: 'none',
            strokeLinecap: strokeLinecap,
            d: 'M'
              .concat(startPoint.x, ',')
              .concat(startPoint.y, ' A ')
              .concat(radius, ',')
              .concat(radius, ',0,')
              .concat(startRadian - openingRadian >= Math.PI ? '1' : '0', ',1,')
              .concat(endPoint.x, ',')
              .concat(endPoint.y),
          }),
          react_1.default.createElement(react_native_svg_1.Path, {
            strokeWidth: sliderWidth,
            stroke: 'url(#gradient)',
            fill: 'none',
            strokeLinecap: strokeLinecap,
            d: 'M'
              .concat(startPoint.x, ',')
              .concat(startPoint.y, ' A ')
              .concat(radius, ',')
              .concat(radius, ',0,')
              .concat(startRadian - currentRadian >= Math.PI ? '1' : '0', ',1,')
              .concat(curPoint.x, ',')
              .concat(curPoint.y),
          })
        ),
      react_1.default.createElement(
        NeedleContent_1.default,
        __assign({}, props, { value: sliderValue })
      )
    ),
    react_1.default.createElement(
      react_native_1.View,
      {
        style: [styles_1.styles.content, contentStyle],
        pointerEvents: 'box-none',
      },
      !isHideCenterContent &&
        react_1.default.createElement(
          CenterContent_1.default,
          __assign({}, props, {
            value: sliderValue,
            unitValueContentStyle: [
              styles_1.styles.centerText,
              unitValueContentStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginLeft: (
                  unit === null || unit === void 0 ? void 0 : unit.length
                )
                  ? (unit === null || unit === void 0 ? void 0 : unit.length) *
                    5
                  : 10,
              },
            ],
            isHideSubtitle: true,
            isHideTitle: true,
            unitStyle: [styles_1.styles.speedValueUnit, unitStyle],
            centerContentStyle: styles_1.styles.centerTextView,
          })
        )
    )
  );
};
SpeedoMeter.defaultProps = SpeedometerDefaultProps_1.defaultSpeedoMeterProps;
exports.default = SpeedoMeter;
