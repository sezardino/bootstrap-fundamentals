import { Collapse } from "bootstrap";

export const navbar = () => {
  const navbar = document.querySelector("#navbar");

  if (!navbar) {
    return;
  }

  new Collapse(navbar);
};
