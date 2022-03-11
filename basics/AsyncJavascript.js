// console.log(fetch("https://api.randomuser.me/?nat=US&results=1").then(res => console.log(res.json())));

// ///await function
// const getFakePerson = async() => {
//     try {
//     let res = await fetch("https://randomuser.me/api/?inc=gender,name,nat");
//     let { results } = res.json();
//     console.log(results);
//     } catch(error) {
//         console.error(error);

//     }
// };


/////////////////////////////////////////////////////////////

getFakePerson = async() => {
  
    console.log("inside api callll")
    let res = await fetch("https://randomuser.me/api/?inc=gender,name,nat");
    const { results } = await res.json();
    console.log(results);
  
};

fetch("https://randomuser.me/api/?inc=gender,name,nat").then(res => res.json()).then(json => json.results).then(console.log)
