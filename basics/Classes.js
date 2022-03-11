//classes uses protypical inheritance
// function Vacation(destination,length){
//     this.destination = destination;
//     this.length = length;

// }

// Vacation.prototype.print = function(){

//     console.log(this.destination+ "|" + this.length + "days")
// }

// const chennai = new Vacation("chennai",7);

// chennai.print()

////////////////////////////////////////////////////////////////////////////
////////********************************************************************/

class Vacation {

    constructor(destination,length){
        this.destination = destination;
        this.length = length
    }
    print() {
        console.log(`${this.destination} will take ${this.length} days`);
    }
}

///creating instance of class 
// const trip = new Vacation("santiago,chile",7)


// trip.print()


// using vacation as abstract class and extending to Expedition

class Expedition extends Vacation {
    constructor(destination,length,gear){
        super(destination,length);
        this.gear = gear;
    }

    print(){

        super.print()
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const newTrip  = new Expedition("mt. everest",7,["sunglass","camera","poles"])

newTrip.print()

