'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_native_1 = require('react-native');
var react_1 = require('react');
var styles_1 = require('./styles');
var CenterContent = function (props) {
  var title = props.title,
    subTitle = props.subTitle,
    unit = props.unit,
    titleStyle = props.titleStyle,
    subTitleStyle = props.subTitleStyle,
    valueStyle = props.valueStyle,
    unitStyle = props.unitStyle,
    isHideTitle = props.isHideTitle,
    isHideSubtitle = props.isHideSubtitle,
    isHideValue = props.isHideValue,
    value = props.value,
    centerContentStyle = props.centerContentStyle,
    unitValueContentStyle = props.unitValueContentStyle;
  return react_1.default.createElement(
    react_native_1.View,
    { style: [styles_1.styles.hideCenterContent, centerContentStyle] },
    !isHideTitle &&
      react_1.default.createElement(
        react_native_1.Text,
        {
          style: [
            styles_1.styles.helperText,
            styles_1.styles.subTitleWidth,
            titleStyle,
          ],
        },
        title
      ),
    !isHideValue &&
      react_1.default.createElement(
        react_native_1.View,
        { style: [styles_1.styles.hideValue, unitValueContentStyle] },
        react_1.default.createElement(
          react_native_1.Text,
          {
            style: [
              styles_1.styles.valueText,
              styles_1.styles.large_header,
              valueStyle,
            ],
          },
          value
        ),
        react_1.default.createElement(
          react_native_1.Text,
          {
            style: [
              styles_1.styles.valueUnit,
              styles_1.styles.helperText,
              unitStyle,
            ],
          },
          unit
        )
      ),
    !isHideSubtitle &&
      react_1.default.createElement(
        react_native_1.Text,
        {
          style: [
            styles_1.styles.helperText,
            styles_1.styles.subTitleWidth,
            subTitleStyle,
          ],
        },
        subTitle
      )
  );
};
exports.default = CenterContent;
