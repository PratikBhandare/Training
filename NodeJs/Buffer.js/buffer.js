// const b = Buffer.from("Hello");
const b = Buffer.alloc(10);

b.write("Hello",0,'ascii')
console.log(b.toString('utf-8'));



