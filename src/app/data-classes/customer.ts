export class Customer {
    id:number; 
    userName:string;
    name:string;
    street:string;
    city:string;
    stateId:number;
    state:any;
    zipCode:number;

    constructor(){
        this.id = 0;
        this.userName="";
        this.name="";
        this.street="";
        this.city="";
        this.stateId=1;
        this.state=null;
        this.zipCode=10000;
    };
}
