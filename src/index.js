import { pow2, pow3, pow4 } from "./modules/math.mjs";

function component(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}
document.body.prepend(component("Set Webpack"));

console.log(pow2(2) + pow3(2) + pow4(2));
