import { DonutMaker } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
const donutMaker = new DonutMaker();
const wiringHelper = new HtmlWiringHelper(donutMaker);
const donutCount = document.querySelector(".donut-count");
const clickimg = document.querySelector(".click-img");

clickimg.addEventListener("click", () => {
  donutMaker.recordClick();
  wiringHelper.updateDonutCountDisplay(donutCount);
});
