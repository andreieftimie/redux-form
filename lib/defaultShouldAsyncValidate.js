"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
  var initialized = _ref.initialized,
      trigger = _ref.trigger,
      pristine = _ref.pristine,
      syncValidationPasses = _ref.syncValidationPasses;

  if (!syncValidationPasses) {
    return false;
  }

  switch (trigger) {
    case 'blur':
    case 'change':
      // blurring
      return true;

    case 'submit':
      // submitting, so only async validate if form is dirty or was never initialized
      // conversely, DON'T async validate if the form is pristine just as it was initialized
      return !pristine || !initialized;

    default:
      return false;
  }
};

var _default = defaultShouldAsyncValidate;
exports["default"] = _default;