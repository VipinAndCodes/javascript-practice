// var log = function(message){
//     console.log(message)
// }

// log("In javascript, functions are variable")

//////////////////////////////////////////////////////////

// const log = message => {
//     console.log(message)
// }

// log("In javascript, functions are variable")

///////////////////////////////////////////////////////////

// const obj = {
//     message :"They can be added to objects like variables",

//     log(message) {
//         console.log(message)
//     }
// };

// obj.log(obj.message)

//////////////////////////////////////////////////////////
//inserting arrays into functions

// const messages = ["This is first element followed by a function", message => console.log(message),"the element followed after function"]

// messages[1](messages[0]);

//////////////////////////////////////////////////////////////////
/////***********************************************************/

//functions can be sent to other functions as arguments,just like other variables


// const insideFn = logger => {
//     logger("they van be sent to other functions as arguments ")
// };


// insideFn(message => console.log(message));


//////////////////////////////////////////////////////////////////////
//////////********************************************************* */

//functions can be returned functions ,just like variables

// const createScream = function(logger) {
//     return function(message) {
//         logger(message.toUpperCase() + "!!!!!!!");
    
//     };
// }

// const scream = createScream(message => console.log(message));



// scream("functions can be returned from other functions")

// scream("create scream return other function")

// scream("invokes that returned functions")

//last two functions are higher order functions
// same function can be returned as 

// const createScream = logger => message => {
//     logger(message.toUpperCase());

// }

////////////////////////////////////////////////////////////////////////////////

// let list = [{title:"Red Red"},{title:"Lawn"},{title:"Patty pink"}];

// // const addColor = function(title,colors){
// //     colors.push({title:title});
// //     return colors;
// // }

// // console.log(addColor("Green",list))

// const addColor = (title,list) => [...list,{title}];

// console.log(addColor("Red",list))


