import { Product } from "./Product";

export  class SimpleDataSource{
     private products:Array<Product>;

     constructor(){
       this.products=new Array<Product>(
        new Product(1,"Samsung Note 5","Telefon",1000),
        new Product(2,"Samsung Note 6","Telefon",2000),
        new Product(3,"Samsung Note 7","Telefon",3000),
        new Product(4,"Samsung Note 8","Telefon",4000)
       ); 
     }

     getProducts (): Product []
     {
       return this.products;
     }

}