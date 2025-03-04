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

let ifValid1=await fetchUserData(1,"Pratik").catch(res=>{console.log(res);
})
console.log(ifValid1);


let ifValid2=await fetchUserData(-1,"Jon").catch(res=>{return res;})
console.log(ifValid2);


const b= Buffer.alloc(10);
b.write("Hello")

console.log(b);
