'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
//@ts-nocheck
var react_1 = require('react');
var react_native_1 = require('@testing-library/react-native');
var RadialSlider_1 = require('../RadialSlider');
jest.useFakeTimers();
describe('RadialSlider component', function () {
  it('Match Snapshot', function () {
    var toJSON = (0, react_native_1.render)(
      react_1.default.createElement(RadialSlider_1.default, null)
    ).toJSON;
    expect(toJSON()).toMatchSnapshot();
  });
});
