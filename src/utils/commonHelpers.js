'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getCurrentRadian =
  exports.cartesianToPolar =
  exports.getExtraSize =
  exports.getRadianByValue =
  exports.createRange =
  exports.polarToCartesian =
    void 0;
var createRange = function (start, end, step) {
  var lists = [];
  if (step === undefined) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      lists.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      lists.push(i);
    }
  }
  return lists;
};
exports.createRange = createRange;
var getExtraSize = function (sliderWidth, thumbRadius, thumbBorderWidth) {
  return Math.max(sliderWidth, (thumbRadius + thumbBorderWidth) * 2);
};
exports.getExtraSize = getExtraSize;
var getRadianByValue = function (nvalue, openingRadian, max, min) {
  return (
    ((Math.PI - openingRadian) * 2 * (max - nvalue)) / (max - min) +
    openingRadian
  );
};
exports.getRadianByValue = getRadianByValue;
var polarToCartesian = function (
  radian,
  radius,
  sliderWidth,
  thumbRadius,
  thumbBorderWidth
) {
  var distance =
    radius + getExtraSize(sliderWidth, thumbBorderWidth, thumbRadius) / 2;
  var x = distance + radius * Math.sin(radian);
  var y = distance + radius * Math.cos(radian);
  return { x: x, y: y };
};
exports.polarToCartesian = polarToCartesian;
var cartesianToPolar = function (
  x,
  y,
  radius,
  sliderWidth,
  thumbRadius,
  thumbBorderWidth
) {
  var distance =
    radius + getExtraSize(sliderWidth, thumbRadius, thumbBorderWidth) / 2;
  if (x === distance) {
    return y > distance ? 0 : Math.PI / 2;
  }
  var a = Math.atan((y - distance) / (x - distance));
  return (x < distance ? (Math.PI * 3) / 2 : Math.PI / 2) - a;
};
exports.cartesianToPolar = cartesianToPolar;
var getCurrentRadian = function (value, openingRadian, max, min) {
  return getRadianByValue(value, openingRadian, max, min);
};
exports.getCurrentRadian = getCurrentRadian;
