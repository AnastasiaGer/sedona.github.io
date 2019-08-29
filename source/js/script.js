/*
* Меню
*/
var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });


/*
* Всплывающие дилоговые окна
*/

var recallForm = document.querySelector(".recall-form");

if (recallForm) {

  var submitButton = recallForm.querySelector("input[type=submit]");

  var failureDialog = document.querySelector(".modal-dialog--fail");
  var successDialog = document.querySelector(".modal-dialog--success");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (recallForm.checkValidity()) {
      // Форма валидна
      successDialog.classList.add("modal-dialog--show");

    } else {
      // Форма заполнена с ошибками
      failureDialog.classList.add("modal-dialog--show");
    }
  });

  var failureDialogOkBtn = failureDialog.querySelector(".modal-dialog__btn-ok");

  failureDialogOkBtn.addEventListener("click", function (event) {
    event.preventDefault();

    failureDialog.classList.remove("modal-dialog--show");
  })

  var successDialogCancelBtn = successDialog.querySelector(".modal-dialog__btn-cancel");

  successDialogCancelBtn.addEventListener("click", function (event) {
    event.preventDefault();

    successDialog.classList.remove("modal-dialog--show");
  })
}
