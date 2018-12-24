'use strict';

(function () {
  // Элементы DOM
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  window.elements = {
    setup: setup,
    setupOpen: setupOpen,
    setupClose: setupClose,
  };
})();
