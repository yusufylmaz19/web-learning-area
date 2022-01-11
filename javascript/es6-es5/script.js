// ES 5

// let welcomeES5=function(){
//   console.log("Welcome es 5");
// }
// welcomeES5();

// // ES 6
// let welcomeES6=() =>{
//   console.log("Welcome es 6");
// };
// welcomeES6();

// //with parameters

// //es5
// let multiplyEs5=function(x,y){
//   return x*y;
// }
// console.log(multiplyEs5(5,10));

// //es6

// //let multiplyEs6=(x,y) =>{return x*y};
// let multiplyEs6=(x,y) => x*y;

// console.log(multiplyEs6(5,4));

// //es 5

// let splites5=function(text){
// return text.split(" ");
// }
// console.log(splites5("Bugün Günlerden Galatasaray"));

// //es6
// let splites6 =text=> text.split(" ");
// console.log(splites6("Bugün Günlerden Galatasaray"));

// // objecet literals

// //es 5

// let getProductEs5=function(id,name){
//    return{
//      id:id,
//      name:name
//    }
// }
// console.log(getProductEs5(5,"xiaomi"));

// //es 6

// let getProductEs6=(id,name)=>(
//   {
//     id:id,
//     name:name
//   }
// );
// console.log(getProductEs6(5,"xiaomi"));

// const phones=[
//   {name: "iphone 8", price:3000},
//   {name: "iphone 9", price:2000},
//   {name: "iphone 7", price:5000},
//   {name: "iphone 10", price:7000}
// ];

// //es5
// let priceEs5=phones.map(function(phone){
// return phone.price;
// });
// console.log(priceEs5);

// //es6

// let priceEs6 =phones.map(phone=>phone.price);
// console.log(priceEs6);

// const arr=[1,2,3,4,5,6,7,8,9];

// //es 5
// let evenEs5=arr.filter(function(a){
//   return a%2==0;
// })
// console.log(evenEs5);

// //es6
// let evenEs6 =arr.filter(a=>a%2==0);
// console.log(evenEs6);

// // spread operator
// function getTotal(a,b,c){
//      return a+b+c;
// }

// let numbers=[10,20,30];

// //es5
// console.log(getTotal.apply(null,numbers));

// //es6
// console.log(getTotal(...numbers));

// let arr1=["two","three"];
// let arr2=["one","four","five"];
// let arr3=["one",...arr2,"four","five"]
// //arr1.push(...arr2);
// //arr1.unshift(...arr2);
// //console.log(arr2);
// console.log(arr2);

// let h1=document.querySelector("h1");
// let divs=document.querySelectorAll("div");

// let tags=[h1,...divs];

// tags.forEach(tags=> tags.style.color="red");

// console.log(tags);

// //rest parameters
// //es5

// function sumes5() {
//   // console.log(arguments);

//   let arr = Array.prototype.slice.call(arguments);
//   let result = 0;
//   arr.forEach(function (item) {
//     result += item;
//   });
//   return result;
// }

//console.log(sumes5(10, 20, 30));

//es6
// function sumes6(...arr){
// let result=0;
// arr.forEach(item=>result+=item);
// return result;
// }

// console.log(sumes6(10, 200, 30));

//destructuring

// var a,b,rest;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);

// [a,b,...rest]=[10,20,50,60,81];
// console.log(a);
// console.log(b);
// console.log(rest);

// ({a,b}={a:10,b:20 });
// console.log(a);
// console.log(b);

// ({a,b}={a:10,b:20,d:50,c:51});
// console.log(a);
// console.log(b);
// console.log(rest);

// //array destructuring

// const arrConfig=["localhost","8000","900"];

//es5
// var server=arrConfig[0];
// var port=arrConfig[1];
// var timeout=arrConfig[2];

//console.log(server,port,timeout);

// es6
// const[server,port,timeout]=arrConfig;

// console.log(server,port,timeout);

//object destructruing
// const objConfig={
//    server: "localhost",
//     port: "8000",
//    timeout:"900"
// }
// var server=objConfig[0];
// var port=objConfig[1];
// var timeout=objConfig[2];

// const {server,port,timeout}=objConfig;

// console.log(server,port,timeout);

// let {timeout:t}= objConfig;
// console.log(t);

// const days=["monday","tuesday","wednesday","thusrday","friday"];

// const[,,wed,,fri]=days; // , ötelem işlemini yapıyor
// console.log(wed,fri);

// let val;

// const numbers= new Map();

// numbers.set(1,"one");
// numbers.set("2","two");
// numbers.set(3,"three");
// numbers.set("four","four");

// val=numbers.get(1);
// val=numbers.get("2");
// val=numbers.get("four");
// val=number.size();
// val=number.has(1);
// val=number.has("four");

// console.log(val);

// for (var[key,value] of numbers){
//   console.log(key+" = "+value);
// }

// sets (collection - uniqe value)

// let val;
// var mySet= new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2); //değereler aynı pldğu için tekrar yazmaz.
// mySet.add("iki");
// mySet.add({a:1,b:2});

// var obj={a:1,b:2};
// mySet.add(obj); // yine ekler çünkü adresler aynı değil
// console.log(mySet);

//classes

//es5

// var personEs5 = function (name, job, yearOfBirth) {
//   this.job = job;
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
// };

// personEs5.prototype.calculateAge = function () {
//   return 2021 - this.yearOfBirth;
// };
// var yigit = new personEs5("yiğit", "student", 2010);
// console.log(yigit.calculateAge());

// //es6 and static methods

// class personEs6 {
//   constructor(name, job, yearOfBirth) {
//     console.log(server, port, timeout);
//   }

//   calculateAge(){
//     return 2021-this.yearOfBirth;
//   }

//   static sayHi(){
//     console.log("hiii");
//   }
// }
// var ali = new personEs5("ali", "student", 2011);
// console.log(ali.calculateAge());

// personEs6.sayHi();

// sub classes

// es5

function personEs5(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
}

personEs5.prototype.sayHi=function(){
  return `Hello I'm ${this.firstName} ${this.lastName}`
}

function cutomerEs5(firstName,lastName,phone,username){
  personEs5.call(this,firstName,lastName);
  this.phone=phone;
  this.username=username;
}

cutomerEs5.prototype=Object.create(personEs5.prototype);

var customer= new cutomerEs5("yusuf","yılmaz","537253088","ysuf0");

console.log(customer.sayHi());


//es6

class personEs6{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  sayHi() {
    return `Hello I'm ${this.firstName} ${this.lastName}`
  }
}

class customerEs6 extends  personEs6{
  constructor(firstName,lastName,phone,username){
  super(firstName,lastName);
    this.phone=phone;
    this.username=username;
  }
}

var customer1= new customerEs6("yusuf","yılmaz","537253088","ysuf0");

console.log(customer1.sayHi());