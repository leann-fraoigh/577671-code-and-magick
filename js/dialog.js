'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var dialogHandler = setup.querySelector('.upload');
  var ENTER_KEYCODE = 13;

  var dragged = false;

  var setupPositionInit = {
    x: undefined,
    y: undefined,
  };

  var startCoords = {
    x: undefined,
    y: undefined,
  };

  var onMouseDown = function (evt) {
    setupPositionInit.x = setup.offsetTop;
    setupPositionInit.y = setup.offsetLeft;

    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
        dragged = false;
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  var resetSetupPosition = function () {
    setup.style.top = setupPositionInit.x + 'px';
    setup.style.left = setupPositionInit.y + 'px';
  };

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    onMouseDown(evt);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      resetSetupPosition();
    }
  });

  setupOpen.addEventListener('click', function () {
    resetSetupPosition();
  });
})();
