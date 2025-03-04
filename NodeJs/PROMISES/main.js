let promise = new Promise((resolve,reject)=>{
    let success = false;

    setTimeout(() => {
        if(success){
            resolve("Operation Succesful !!")
        }else{
            reject("Operation Failed !")
        }
        
    }, 2000);
})

promise
.then((result)=>{
    console.log(result);
    
})
.catch((err)=>{
    console.log(err);
    
})