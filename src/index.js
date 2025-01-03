import "./style.scss";
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
// --------------------------------------------------/
const secWeek = document.querySelector(".secWeek");
const buttonWeek = document.querySelector(".week");
const buttonMonth = document.querySelector(".month");

const ul = document.createElement("ul");
buttonWeek.addEventListener("click", function getWeek() {
  import("./modules/array.mjs").then((arr) => {
    let arrWeek = arr.default;
    for (let day of arrWeek) {
      const li = document.createElement("li");
      li.textContent = day;
      ul.append(li);
    }
    secWeek.prepend(ul);
  });
  buttonWeek.removeEventListener("click", getWeek);
});

buttonMonth.addEventListener("click", function () {
  Promise.all([import("./modules/array.mjs"), import("./modules/month.mjs")]).then(([mod1, mod2]) => {
    const days = mod1.default;
    const months = mod2.default;
    const ulD = document.createElement("ul");
    const ulM = document.createElement("ul");
    for (let day of days) {
      const liD = document.createElement("li");
      liD.textContent = day;
      ulD.append(liD);
    }
    for (let month of months) {
      const liM = document.createElement("li");
      liM.textContent = month;
      ulM.append(liM);
    }

    secWeek.prepend(ulD, ulM);
  });
});
