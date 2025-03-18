import { toggleButtonState } from "../scripts/validate.js";

class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEL = formEl;
  }

  // implement all methods

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(
        this._formEl,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      hideInputError(this._formEl, inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEL.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formEL.querySelector(
      this._submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement, this._settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, this._settings);
      });
    });
  }

  enableValidation() {
    this._formEL.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
