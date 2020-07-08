export { HtmlWiringHelper };

class HtmlWiringHelper {
  constructor(donutMaker) {
    this.donutMaker = donutMaker;
  }
  updateDonutCountDisplay(element) {
    element.innerText = this.donutMaker.getDonutCount();
  }
}
