class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    // document.addEventListener("keydown", handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    // document.removeEventListener("keydown", handleEscClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
export default Popup;
