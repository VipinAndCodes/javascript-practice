
// const sandwich = {

//     bread : "dutch crunch",
//     meat : "tuna",
//     cheese : "swiss",
//     toppings : ["tomatto","cheese","mustard"]
// }


// const { bread,meat }= sandwich;

// console.log(bread,meat);

//using let word we can change variable without changing sandwich
//********************************************************************* */

// const sandwich = {

//     bread : "dutch crunch",
//     meat : "tuna",
//     cheese : "swiss",
//     toppings : ["tomatto","cheese","mustard"]
// }



// let { bread,meat }= sandwich;


// console.log(bread,meat);
// bread="garlic";
// meat="turkey";
// console.log(bread,meat);


//************************************************************************* */
//Destrucing incoming function argument

// const loardify = regularPerson => {
//     console.log(`${regularPerson.firstname} of Canterbury`)
// };

// const regularPerson = {

//     firstname:"Bill",
//     lastname :"wilson"
// };

// loardify(regularPerson)

///////////////////////////////////////////////////////////////////////////////////
////******************************************************************************/

// const loardify = ({ lastname }) => {
//     console.log(` ${lastname} of Canterbury`)
// };

// const regularPerson = {

//     firstname:"Bill",
//     lastname :"wilson"
// };

// loardify(regularPerson)

/////////////////////////////////////////////////////////////////////////////////////////
/////*******************************************************************************/
const loardify = ({spouse:{ firstname }}) => {
    console.log(` ${firstname} of Canterbury`)
};

const regularPerson = {

    firstname:"Bill",
    lastname :"wilson",

    spouse: {

        firstname:"phil",
        lastname : "wilson"

    }
};
loardify(regularPerson)
