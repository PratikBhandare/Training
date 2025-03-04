function fetchData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Url Fetched !!")
            
        }, 4000);
        
    })
}

function timeout(ms){
    return new Promise((reject)=>{
        setTimeout(() => {
            reject("Faild")
        }, ms);
    })
}

Promise.race([fetchData("url"),timeout(5000)]).then(ress=>{
    console.log(ress);
    
})
.catch(err=>{
    console.log(err);
    
})