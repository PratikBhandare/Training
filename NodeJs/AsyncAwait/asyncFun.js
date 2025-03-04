function getData(){

    return new Promise((resolve)=>{

        setTimeout(() => {
            // console.log("Fetched");
            
            resolve("Completed ")
        },5000);
    })
}

async function fetchData() {
    let result = await getData();
    console.log(result);
    
}
console.log("Start");

fetchData()

console.log("End");
