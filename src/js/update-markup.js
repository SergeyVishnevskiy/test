import imagesTpl from "../templates/images.hbs";
import refs from "../js/refs";
import * as basicLightbox from "basiclightbox";
import "../../node_modules/basiclightbox/dist/basicLightbox.min.css";

//===

function updateMarkup(hits) {
  const markup = imagesTpl(hits);

  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

function openModal(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.img}" width="800" height="600">`);
    instance.show();
  }
}

refs.gallery.addEventListener("click", openModal);

export default updateMarkup;
