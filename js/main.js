const speedometer1 = document.querySelector(".car1 .dashboard__speedometer")
const checkEngineLight1 = document.querySelector(".car1 .dashboard__check-engine-light")
const car1 = new Car(speedometer1, checkEngineLight1);
console.log(car1)
const gasPedal1 = document.querySelector(".car1 .floorboard__gas-pedal");

gasPedal1.addEventListener("click", () => {
    event.preventDefault();
    car1.accelerate();
    car1.updateSpeedometer();
})

const brakePedal1 = document.querySelector(".car1 .floorboard__brake-pedal");

brakePedal1.addEventListener("click", () => {
    event.preventDefault();
    car1.brake();
    car1.updateSpeedometer();
})
const speedometer2 = document.querySelector(".car2 .dashboard__speedometer")
const checkEngineLight2 = document.querySelector(".car2 .dashboard__check-engine-light")
const car2 = new Car(speedometer2, checkEngineLight2);
const gasPedal2 = document.querySelector(".car2 .floorboard__gas-pedal");

gasPedal2.addEventListener("click", () => {
    event.preventDefault();
    car2.accelerate();
    car2.updateSpeedometer();
})

const brakePedal2 = document.querySelector(".car2 .floorboard__brake-pedal");

const theAButton = 0 //
theAButton.addEventListener("keyUp", () => {

})
brakePedal2.addEventListener("click", () => {
    event.preventDefault();
    car2.brake();
    car2.updateSpeedometer();
})