new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Step1 !");
    }, 1000);
}).then((result)=>{
    console.log(result);
    return new Promise((resolve)=>setTimeout(() => {;
        resolve("Step 2 !!")
        
    }, 2000)).then((result)=>{
        console.log(result);
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Step 3 !!!")
            }, 3000);
        }).then((result)=>{
            console.log(result);
            
        })
        .catch((err)=>{console.log(err);
        })
        
    })
})