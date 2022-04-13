import { Collapse } from "bootstrap";

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const accordion = document.querySelector("#accordion");

  console.log(navbar);
  console.log(accordion);
  if (!navbar || !accordion) {
    return;
  }

  new Collapse(navbar);
  new Collapse(accordion);
});
