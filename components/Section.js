class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this._container.append(element);
    });
  }

  addItem(element) {
    const newElement = this._renderer(element);
    this._container.prepend(newElement);
  }
}
export default Section;
