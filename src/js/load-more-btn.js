export default class LoadMoreBtn {
  constructor(selector) {
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = document.querySelector(
      'button[data-action="load-more"] > .label'
    );

    refs.spinner = document.querySelector(
      'button[data-action="load-more"] > .spinner'
    );

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = "MOAR!!";
    this.refs.spinner.classList.add("is-hidden");
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = "Loading...";
    this.refs.spinner.classList.remove("is-hidden");
  }

  show() {
    this.refs.button.classList.remove("is-hidden");
  }
}
