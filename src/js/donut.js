class Donuts{
    constructor(){
        this.donutCount = 0;
        this.autoClick = 0;
        this.costAutoClick = 100;
        this.autoMultiplier = 0;
        // this.amountAutoMultiplier = 0;
        this.costAutoMultiplier = 20;
    }

      buyAutoClick(){
        this.donutCount = Math.round(this.count = this.costAutoClick);
        this.autoClick +=1;
      }
      buyAutoMultiplier(){
        this.donutCount = Math.round(this.count = this.costAutoMultiplier);
        this.autoMultiplier += 2;
        // this.autoMultiplier * 1.2;
        // this.amountAutoMultiplier += 1;
      }  


}