// const tahoe = {

//     mountains: ["Free1", "Rose", "Tallac", "Rubicon", "Silver"],

//     print: function (delay = 1000) {
//         setTimeout(function () {
//             console.log(this.mountains.join(","));
//         }, delay);


//     }
// };

// tahoe.print();

const tahoe = {

    mountains: ["Free1", "Rose", "Tallac", "Rubicon", "Silver"],

    print: function (delay = 1000) {
        setTimeout( () => {
            console.log(this.mountains.join(","));
        }, delay);


    }
};

tahoe.print();

