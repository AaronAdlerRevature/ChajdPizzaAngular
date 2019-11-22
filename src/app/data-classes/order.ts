export class Order {
         id:number; 
         customerId:number;
         netPrice:number;
         isCompleted:boolean; 
         timePlaced:any;
         deliveryAddress:string;
         customer:any;
         orderDetails:any;

         constructor(){
             this.id=0;
             this.customerId=1;
             this.netPrice=0;
             this.isCompleted=false;
             this.timePlaced=null;
             this.deliveryAddress="";
             this.customer=null;
             this.orderDetails=null;
         }
}
