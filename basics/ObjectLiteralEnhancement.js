//Object lieral enhancement is the opposite of destructuring

// const name = "Tallac";
// const elevation = 9738;
// const funHike = { name, elevation};
// console.log(funHike)

//**************************************************/


// const name = "Tallac";
// const elevation = 9738;
// const print = function(){
//     console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
// };

// const funHike = { name,elevation,print};

// console.log(funHike)
// funHike.print()

//when defining object methods,t's no longer neccssary to user the function keyword

//old method

// var skier = {
//     name : "name",
//     sound : "sound",
//     powderYell : function(){ 
//         var yell = this.sound.toLocaleUpperCase();
//         console.log(`${yell} ${yell} ${yell} !!!!`)
//     },
//     speed: function(mph){
//         this.speed = mph;
//         console.log("speed:",mph)
//     }
// };

// skier.powderYell()

////////////////////////////////////////////////////////////////////////////////////////////////

const skier = {
    name:"name" ,
    sound:"yell" ,
    powderYell() { 
        let yell = this.sound.toLocaleUpperCase();
        console.log(`${yell} ${yell} ${yell} !!!!`)
    },
    speed(mph){
        this.speed = mph;
        console.log("speed:",mph)
    }
};

skier.powderYell()








