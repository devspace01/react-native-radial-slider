'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_native_1 = require('react-native');
var commonHelpers_1 = require('../../../utils/commonHelpers');
var useRadialSlider_1 = require('./useRadialSlider');
var useSilderAnimation = function (props) {
  var _a = props.step,
    step = _a === void 0 ? 1 : _a,
    _b = props.radius,
    radius = _b === void 0 ? 100 : _b,
    _c = props.sliderWidth,
    sliderWidth = _c === void 0 ? 18 : _c,
    _d = props.thumbRadius,
    thumbRadius = _d === void 0 ? 18 : _d,
    _f = props.thumbBorderWidth,
    thumbBorderWidth = _f === void 0 ? 5 : _f,
    disabled = props.disabled,
    _g = props.min,
    min = _g === void 0 ? 0 : _g,
    _h = props.onChange,
    onChange = _h === void 0 ? function () {} : _h,
    _j = props.max,
    max = _j === void 0 ? 100 : _j,
    _k = props.onComplete,
    onComplete = _k === void 0 ? function () {} : _k,
    _l = props.onStart,
    onStart = _l === void 0 ? function () {} : _l;
  var moveStartValue;
  var startCartesian;
  var moveStartRadian;
  var radianValue = (0, useRadialSlider_1.default)(props).radianValue;
  var prevValue = (0, react_1.useRef)(props.value > min ? props.value : min);
  var _m = (0, react_1.useState)(
      (props === null || props === void 0 ? void 0 : props.value) < min
        ? min
        : (props === null || props === void 0 ? void 0 : props.value) > max
        ? max
        : props === null || props === void 0
        ? void 0
        : props.value
    ),
    value = _m[0],
    setValue = _m[1];
  (0, react_1.useEffect)(
    function () {
      if (max < (props === null || props === void 0 ? void 0 : props.value)) {
        setValue(max);
      } else if (
        min > (props === null || props === void 0 ? void 0 : props.value)
      ) {
        setValue(min);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [max, min]
  );
  (0, react_1.useEffect)(
    function () {
      if (
        min <= (props === null || props === void 0 ? void 0 : props.value) &&
        max >= (props === null || props === void 0 ? void 0 : props.value)
      ) {
        setValue(props === null || props === void 0 ? void 0 : props.value);
        prevValue.current =
          props === null || props === void 0 ? void 0 : props.value;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [props === null || props === void 0 ? void 0 : props.value]
  );
  (0, react_1.useEffect)(
    function () {
      onChange(value);
      prevValue.current = value;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [value]
  );
  var handlePanResponderGrant = function () {
    moveStartValue = prevValue.current;
    moveStartRadian = (0, commonHelpers_1.getRadianByValue)(
      prevValue.current,
      radianValue,
      max,
      min
    );
    startCartesian = (0, commonHelpers_1.polarToCartesian)(
      moveStartRadian,
      radius,
      sliderWidth,
      thumbRadius,
      thumbBorderWidth
    );
    return true;
  };
  var handlePanResponderMove = function (_e, gestureState) {
    if (disabled) {
      return;
    }
    var x = startCartesian.x,
      y = startCartesian.y;
    x += gestureState.dx;
    y += gestureState.dy;
    var radian = (0, commonHelpers_1.cartesianToPolar)(
      x,
      y,
      radius,
      sliderWidth,
      thumbRadius,
      thumbBorderWidth
    );
    var ratio = (moveStartRadian - radian) / ((Math.PI - radianValue) * 2);
    var diff = max - min;
    var nValue;
    if (step) {
      nValue = moveStartValue + Math.round((ratio * diff) / step) * step;
    } else {
      nValue = moveStartValue + ratio * diff;
    }
    nValue = Math.max(min, Math.min(max, nValue));
    setValue(function (prevState) {
      prevValue.current = Math.round(
        Math.abs(nValue - prevState) > diff / 4 ? prevState : nValue
      );
      return Math.round(
        Math.abs(nValue - prevState) > diff / 4 ? prevState : nValue
      );
    });
    onChange(prevValue.current);
  };
  var handlePanResponderEnd = function () {
    if (disabled) {
      return;
    }
    onComplete(prevValue.current);
  };
  var handlePanStart = function () {
    if (disabled) {
      return;
    }
    onStart(value);
  };
  var panResponder = (0, react_1.useRef)(
    react_native_1.PanResponder.create({
      onStartShouldSetPanResponder: function () {
        return true;
      },
      onMoveShouldSetPanResponder: function () {
        return false;
      },
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminationRequest: function () {
        return false;
      },
      onPanResponderTerminate: handlePanResponderEnd,
      onPanResponderStart: handlePanStart,
    })
  ).current;
  var currentRadian = (0, commonHelpers_1.getCurrentRadian)(
    value,
    radianValue,
    max,
    min
  );
  var curPoint = (0, commonHelpers_1.polarToCartesian)(
    currentRadian,
    radius,
    sliderWidth,
    thumbRadius,
    thumbBorderWidth
  );
  return {
    panResponder: panResponder,
    prevValue: prevValue,
    value: value,
    setValue: setValue,
    curPoint: curPoint,
    currentRadian: currentRadian,
  };
};
exports.default = useSilderAnimation;
