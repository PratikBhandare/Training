class User{
    id;
    name;
    isActive;
    constructor(id,name,isActive){
        this.id=id;
        this.name=name;
        this.isActive=isActive;
    }
}

module.exports=new User();