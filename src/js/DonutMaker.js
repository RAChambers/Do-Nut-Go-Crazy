export { DonutMaker };

class DonutMaker {
  constructor() {
    this._donutCount = 0;
  }

  getDonutCount() {
    return this._donutCount;
  }

  recordClick() {
    this._donutCount++;
  }
}
