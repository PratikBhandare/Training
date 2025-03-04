function mockAPI(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.5){
                resolve("Success !!:")
            }else{
                reject("Api Error !!")
            }
        }, 1000);
    })
}

async function fetchWithRetry(url,attempts){

    console.log("Fetching !! url");
    
    for(let i=0;i<3;i++){
        try{
            let data=await mockAPI();
            console.log(data,`at attempt ${i+1}`);
            return;
            
        }catch(err){
            console.log(err,`at attempt at ${i+1}`);
        }
    }
    console.log("Failed after attemts");
    
    

}

fetchWithRetry("url",5
)