"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var defaultShouldWarn = function defaultShouldWarn(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;

  if (initialRender) {
    return true;
  }

  return !structure.deepEqual(values, nextProps && nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};

var _default = defaultShouldWarn;
exports["default"] = _default;