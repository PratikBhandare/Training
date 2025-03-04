let p1=new Promise((resolve)=>{setTimeout(() => {resolve("p1 Succesfull !!")}, 1000);})
let p2=new Promise((resolve)=>{setTimeout(() => {resolve("p2 Succesfull !!")}, 1000);})
let p3=new Promise((resolve)=>{setTimeout(() => {resolve("p3 Succesfull !!")}, 1000)})
let p4=new Promise((resolve)=>{setTimeout(() => {resolve("p4 Succesfull !!")}, 1000)})
let p5=new Promise((resolve)=>{setTimeout(() => {resolve("p5 Succesfull !!")}, 1000)})


Promise.race().then(re=>console.log(re)).catch(re=>console.log(re))