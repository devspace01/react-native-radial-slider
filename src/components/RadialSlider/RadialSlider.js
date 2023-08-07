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
var theme_1 = require('../../theme');
var hooks_1 = require('./hooks');
var SliderDefaultProps_1 = require('./SliderDefaultProps');
var ButtonContent_1 = require('./ButtonContent');
var CenterContent_1 = require('./CenterContent');
var TailText_1 = require('./TailText');
var LineContent_1 = require('./LineContent');
var RadialSlider = function (props) {
  var _a = (0, react_1.useState)(false),
    isStart = _a[0],
    setIsStart = _a[1];
  var _b = (0, react_1.useState)(''),
    iconPosition = _b[0],
    setIconPosition = _b[1];
  var step = props.step,
    radius = props.radius,
    sliderWidth = props.sliderWidth,
    sliderTrackColor = props.sliderTrackColor,
    linearGradient = props.linearGradient,
    thumbRadius = props.thumbRadius,
    thumbBorderColor = props.thumbBorderColor,
    thumbColor = props.thumbColor,
    thumbBorderWidth = props.thumbBorderWidth,
    style = props.style,
    markerLineSize = props.markerLineSize,
    disabled = props.disabled,
    contentStyle = props.contentStyle,
    buttonContainerStyle = props.buttonContainerStyle,
    min = props.min,
    max = props.max,
    isHideSlider = props.isHideSlider,
    isHideCenterContent = props.isHideCenterContent,
    isHideTailText = props.isHideTailText,
    isHideButtons = props.isHideButtons,
    isHideLines = props.isHideLines,
    leftIconStyle = props.leftIconStyle,
    rightIconStyle = props.rightIconStyle,
    stroke = props.stroke,
    thumbImage = props.thumbImage;
  var _c = (0, hooks_1.useSilderAnimation)(props),
    panResponder = _c.panResponder,
    value = _c.value,
    setValue = _c.setValue,
    curPoint = _c.curPoint,
    currentRadian = _c.currentRadian,
    prevValue = _c.prevValue;
  var _d = (0, hooks_1.useRadialSlider)(props),
    svgSize = _d.svgSize,
    containerRef = _d.containerRef,
    startPoint = _d.startPoint,
    endPoint = _d.endPoint,
    startRadian = _d.startRadian,
    radianValue = _d.radianValue,
    isRadialCircleVariant = _d.isRadialCircleVariant,
    centerValue = _d.centerValue;
  (0, react_1.useEffect)(function () {
    var _a;
    //check max value length
    var maxLength =
      (_a = max === null || max === void 0 ? void 0 : max.toString()) ===
        null || _a === void 0
        ? void 0
        : _a.length;
    var timerId = setTimeout(handleValue, maxLength > 2 ? 10 : 100);
    return function () {
      return clearTimeout(timerId);
    };
  });
  var handleValue = function () {
    if (iconPosition === 'up' && max > value) {
      isStart && onPressButtons('up');
    } else if (iconPosition === 'down' && min < value) {
      isStart && onPressButtons('down');
    }
  };
  var leftButtonStyle = react_native_1.StyleSheet.flatten([
    leftIconStyle,
    (disabled || min === value) && {
      opacity: 0.5,
    },
  ]);
  var rightButtonStyle = react_native_1.StyleSheet.flatten([
    rightIconStyle,
    (disabled || max === value) && {
      opacity: 0.5,
    },
  ]);
  var onLayout = function () {
    var ref = containerRef.current;
    if (ref) {
      ref.measure(function (_x, _y, _width, _height) {});
    }
  };
  var onPressButtons = function (type) {
    if (type === 'up' && max > value) {
      setValue(function (prevState) {
        prevValue.current = prevState + step;
        return prevState + step;
      });
    } else if (type === 'down' && min < value) {
      setValue(function (prevState) {
        prevValue.current = prevState - step;
        return prevState - step;
      });
    }
  };
  var circleXPosition = isRadialCircleVariant
    ? centerValue < value
      ? -7
      : 4
    : 0;
  var strokeLinecap = isRadialCircleVariant ? 'square' : 'round';
  var cx = curPoint.x + circleXPosition;
  var cy = curPoint.y;
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
          linearGradient.map(function (item, index) {
            return react_1.default.createElement(react_native_svg_1.Stop, {
              key: index,
              offset: item.offset,
              stopColor: item.color,
            });
          })
        )
      ),
      !isRadialCircleVariant &&
        !isHideTailText &&
        react_1.default.createElement(TailText_1.default, __assign({}, props)),
      !isHideLines &&
        react_1.default.createElement(
          LineContent_1.default,
          __assign({}, props, { value: value })
        ),
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
              .concat(startRadian - radianValue >= Math.PI ? '1' : '0', ',1,')
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
          }),
          react_1.default.createElement(
            react_native_svg_1.Circle,
            __assign(
              {
                cx: curPoint.x + circleXPosition,
                cy: curPoint.y,
                r: thumbRadius,
                fill: thumbColor || thumbBorderColor,
                stroke: thumbBorderColor,
                strokeWidth: thumbBorderWidth,
              },
              panResponder.panHandlers
            )
          )
        )
    ),
    react_1.default.createElement(
      react_native_1.View,
      __assign(
        {
          style: {
            position: 'absolute',
            left: cx - cx / 12,
            top: cy - (cy <= 25 ? 12 : cy <= 50 ? 16 : 18),
          },
        },
        panResponder.panHandlers
      ),
      thumbImage
        ? react_1.default.createElement(react_native_1.Image, {
            style: {
              width: 20,
              height: thumbRadius * 2,
            },
            resizeMode: 'contain',
            source: thumbImage,
          })
        : null
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
          __assign({}, props, { value: value })
        ),
      !isRadialCircleVariant &&
        !isHideButtons &&
        react_1.default.createElement(
          react_native_1.View,
          { style: [styles_1.styles.buttonsWrapper, buttonContainerStyle] },
          react_1.default.createElement(
            react_native_1.View,
            { style: styles_1.styles.center },
            react_1.default.createElement(ButtonContent_1.default, {
              onPress: function () {
                return onPressButtons('down');
              },
              onLongPress: function () {
                setIsStart(true);
                setIconPosition('down');
              },
              onPressOut: function () {
                return setIsStart(false);
              },
              buttonType: 'left-btn',
              style: leftButtonStyle,
              disabled: disabled || min === value,
              stroke:
                stroke !== null && stroke !== void 0
                  ? stroke
                  : theme_1.Colors.blue,
            }),
            react_1.default.createElement(ButtonContent_1.default, {
              disabled: disabled || max === value,
              onPress: function () {
                return onPressButtons('up');
              },
              onLongPress: function () {
                setIsStart(true);
                setIconPosition('up');
              },
              onPressOut: function () {
                return setIsStart(false);
              },
              style: rightButtonStyle,
              buttonType: 'right-btn',
              stroke:
                stroke !== null && stroke !== void 0
                  ? stroke
                  : theme_1.Colors.blue,
            })
          )
        )
    )
  );
};
RadialSlider.defaultProps = SliderDefaultProps_1.defaultProps;
exports.default = RadialSlider;
