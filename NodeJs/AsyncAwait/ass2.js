async function placeOrder(item,delay){
    console.log(`Order PLaced for ${item}`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${item} is ready`)
        }, delay);

    })
}

let order1 = await placeOrder("Pizza",5000);
console.log(order1);
