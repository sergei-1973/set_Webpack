import * as math from "./modules/math.mjs";
import test, { func1, func2 } from "./modules/exprtDflt.mjs";

function component(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}
document.body.prepend(component("Set Webpack"));

let result = math.pow2(2) + math.pow3(2);
console.log(result);

let text = test();
console.log(text);

let res1 = func1();
let res2 = func2();

console.log(res1, res2);
