let DATA="Rohit";

class User {
    constructor(name,email) {
        this.name=name;
        this.email=email;
    }


    viewData(){
        console.log("Website data=" ,DATA);
    }

}

let student1 = new User("rohit","rohit055428gmail");
let student2=new User("Mohit","Heeeeeee");