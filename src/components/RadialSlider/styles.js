'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.styles = void 0;
var react_native_1 = require('react-native');
var theme_1 = require('../../theme');
exports.styles = react_native_1.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  statusView: {
    position: 'absolute',
    top: -10,
    right: -25,
  },
  statusValueText: {
    fontSize: (0, theme_1.moderateScale)(18),
    marginTop: (0, theme_1.verticalScale)(-5),
    marginBottom: (0, theme_1.verticalScale)(-5),
  },
  valueText: {
    fontSize: (0, theme_1.moderateScale)(40),
  },
  valueUnit: {
    fontSize: (0, theme_1.moderateScale)(15),
    marginLeft: (0, theme_1.horizontalScale)(5),
  },
  statusValueUnit: {
    fontSize: (0, theme_1.moderateScale)(12),
    marginTop: (0, theme_1.verticalScale)(-5),
    paddingLeft: (0, theme_1.horizontalScale)(2),
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  large_header: {
    color: theme_1.Colors.darkBlue,
    fontWeight: '600',
    fontSize: (0, theme_1.moderateScale)(27),
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helperText: {
    color: theme_1.Colors.darkCharcoal,
    fontWeight: '400',
    fontSize: (0, theme_1.moderateScale)(14),
  },
  hideValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hideCenterContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (0, theme_1.verticalScale)(-20),
  },
  hideStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (0, theme_1.verticalScale)(3),
  },
  subTitleWidth: {
    textAlign: 'center',
    width: (0, theme_1.horizontalScale)(120),
  },
  centerText: {
    flexDirection: 'column',
  },
  centerTextView: {
    marginTop: (0, theme_1.verticalScale)(110),
    marginRight: (0, theme_1.horizontalScale)(20),
  },
  speedValueUnit: {
    paddingLeft: (0, theme_1.horizontalScale)(0),
  },
});
