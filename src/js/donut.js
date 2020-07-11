class Donuts{
    constructor(){
        this.donutCount = 0;
        this.autoClick = 0;
        this.costAutoClick = 10;
        this.DonutMultiplier = 1;
        this.amountDonutMultiplier = 0;
        this.costDonutMultiplier = 20;
    }

    // add(){
    //     this.donutCount += Math.ceil(this.autoDonutMultiplier);
    //   }
    buyAutoClick(){
        this.donutCount = Math.round(this.count = this.costAutoClick);
        this.autoClick +=1;
      }
    buyDonutMultiplier(){
        this.donutCount = Math.round(this.count - this.costDonutMultiplier);
        this.autoDonutMultiplier = this.autoDonutMultiplier * 1.2;
        this.amountDonutMultiplier += 1;
      }  


}