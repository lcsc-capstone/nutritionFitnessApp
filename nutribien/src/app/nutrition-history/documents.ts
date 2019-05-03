export class Document {

    proteins: any;
    carbs:any;
    fats:any;
    fibers:any;
    sugars:any;
    calories:any;
    startTime:any;
    endTime:any;
    date:Date;
    allday:Boolean = false;
  
    constructor(proteins: any,carbs:any,fats:any,fibers:any,sugars:any,calories:any,date:Date){
      this.proteins = proteins;
      this.carbs    = carbs;
      this.fats     = fats;
      this.fibers   = fibers;
      this.sugars   = sugars;
      this.calories = calories;
      this.date     = date;
      this.startTime= "";
      this.endTime  = "";
      this.allday   = false;
    }
  }
  