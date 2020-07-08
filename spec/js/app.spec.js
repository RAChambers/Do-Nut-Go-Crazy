import { updateDonutCount } from "../../src/js/app.js";

describe("updateDonutCount changes donut-count element when a click of the button happens.", () => {
  it("Click the button once should update count.", () => {
    const clickButton = document.querySelector(".click-button");
    clickButton.click();
    const donutCountElement = document.querySelector(".donut-count");
    expect(donutCountElement.innerText).toBe("1");
  });
});
