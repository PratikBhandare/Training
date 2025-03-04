console.log("Start");
setTimeout(() => {
    console.log("Timeout Callback !!");
    
}, 0);

setTimeout(() => {
    // console.log("Timeout Callback !!");
    Promise.resolve().then(()=>{
        console.log("Resolved");
    })
    
},2000);

Promise.resolve().then(()=>{
    console.log("Resolved");
    
})

console.log("End");

