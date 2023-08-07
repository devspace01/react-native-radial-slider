'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_native_1 = require('react-native');
var react_1 = require('react');
var react_native_svg_1 = require('react-native-svg');
var ButtonContent = function (props) {
  var disabled = props.disabled,
    onPress = props.onPress,
    style = props.style,
    buttonType = props.buttonType,
    stroke = props.stroke;
  return react_1.default.createElement(
    react_native_1.TouchableOpacity,
    {
      activeOpacity: 0.7,
      disabled: disabled,
      onPress: onPress,
      onLongPress:
        props === null || props === void 0 ? void 0 : props.onLongPress,
      onPressOut:
        props === null || props === void 0 ? void 0 : props.onPressOut,
      style: style,
    },
    react_1.default.createElement(
      react_native_svg_1.default,
      { height: '30', width: '45' },
      react_1.default.createElement(
        react_native_svg_1.G,
        null,
        react_1.default.createElement(react_native_svg_1.Circle, {
          cx: '20',
          cy: '20',
          r: '20',
          fill: 'none',
        }),
        react_1.default.createElement(react_native_svg_1.Path, {
          d:
            buttonType === 'left-btn'
              ? 'M12.5168 17.2727L20.067 24.8485L27.6172 17.2727'
              : 'M12.5168 23.7373L20.067 16.1616L27.6172 23.7373',
          stroke: stroke,
          strokeWidth: '2.4',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          fill: 'none',
        })
      )
    )
  );
};
exports.default = ButtonContent;
