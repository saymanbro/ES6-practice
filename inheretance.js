class Father{
    constructor(){
        this.Father = "sayman"

    }
}

 class Child extends Father{
    constructor(name){
        super();
        this.name = name
    }
}
const name = new Child("Arnold");
const name1 = new Child("Jerry");
console.log(name, name1);