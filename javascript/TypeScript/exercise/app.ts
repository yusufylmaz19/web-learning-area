import { Product } from "./Product";
import {ProductService} from "./ProductService";

let _poductService= new ProductService();

let result;


result=_poductService.getById(3);

let p= new Product();

p.id=2;
p.name="iphone 11";
p.category="Telefon";
p.price=15000;

_poductService.saveProduct(p);
//_poductService.deleteProduct(result);
result=_poductService.getProducts();

console.log(result);