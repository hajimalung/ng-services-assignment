export class CounterService{
    activationCounter:number = 0;
    inactivationCounter : number = 0;
    activated(){
        this.activationCounter++;
        console.log("user is activated, count :"+this.activationCounter);
    }

    inactivated(){
        this.inactivationCounter++;
        console.log("user is inactivated, count :"+this.activationCounter);
    }

}