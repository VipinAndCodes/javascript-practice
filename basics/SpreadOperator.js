// spread operator is the three dots(...) that perform several different tasks

// allow us to combine the contents of array


// const peaks = ["Tallac","Ralston","Rose"];
// const canyons = ["Ward","BlackWood"];
// const tahoe = [...peaks,...canyons]

// console.log(tahoe)

// console.log(tahoe.join(", "))

//**********************************************************//
///trying to access the last Element by reverse
// const peaks = ["Tallac","Ralston","Rose"];

// const [last] = peaks.reverse();

// console.log(last);

///another method by spread operator

//for mutated array we can make a copy of array then reverse
//**************************************************************** *//

// const peaks = ["Tallac","Ralston","Rose"];

// const [last] = [...peaks].reverse();

// console.log(last);
// console.log(peaks.join(","))

//peaks array is still intact


/////******************************************************************/
//spread operater can also be used to get the remaining items in the array

// const lakes = ["Donner","Mareltte","Fallen Leaf","Cascade"];
// const [first, ...others] = lakes;
// console.log(others)

////******************************************************************/

//we can use spread operator to collect function arrguments..it is called rest parameters


// function directions(...args) {

//     let [start , ...remaining] = args;
//     let [finish, ...stops] =  remaining.reverse();

//     console.log(`drive through ${ args.length} towns`)
//     console.log(`start in ${start}`)
//     console.log(`the destination is ${finish}`)
//     console.log (`stopping ${stops.length} times in between`)
// }

// directions("delhi","manali","kasaol","bhutan")


////////*******************************************************************/

