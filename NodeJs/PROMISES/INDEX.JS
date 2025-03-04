function callback(){
    console.log("Callback is called!! ");
    
}

function hello(name,fn){
    console.log("Hello",name);
    fn();
    
}

hello("Pratik",callback)