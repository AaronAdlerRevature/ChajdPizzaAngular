export class Customer {
    id:number; 
    userName:string;
    name:string;
    street:string;
    city:string;
    stateID:number;
    state:any;
    zipCode:number;

    constructor(){
        this.id = 0;
        this.userName="";
        this.name="";
        this.street="";
        this.city="";
        this.stateID=1;
        this.state=null;
        this.zipCode=10000;
    };
}
