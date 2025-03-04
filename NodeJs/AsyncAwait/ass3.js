async function fetchUserData(id,name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(id>0){
                resolve("id:"+id+" "+"name:"+name)
            }else{
                reject("Invalid Id")
            }
            
        }, 2000);
    })
}


async function fetchOrder(item){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(id>0){
                resolve("id:"+id+" "+"name:"+name)
            }else{
                reject("Invalid Id")
            }
            
        }, 2000);
    })
}

Promise.all([fetchUser,fetchOrder]).then(res=>console.log(res))