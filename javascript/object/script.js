// let person= function(name,yearOfBirth,job){
//          this.name=name;
//          this.yearOfBirth=yearOfBirth;
//          this.job=job;
//          this.calculateAge=function(){
//            return 2021-this.yearOfBirth;
//          }
// }

// let yusuf= new person('yusuf',2000,'student');
// console.log(yusuf.name);
// console.log(yusuf.yearOfBirth);
// console.log(yusuf.job);
// console.log(yusuf.calculateAge());

// let person= function(name,yearOfBirth,job){
//   this.name=name;
//   this.yearOfBirth=yearOfBirth;
//   this.job=job;
// }

// person.prototype.calculateAge=function(){
//   return 2021-this.yearOfBirth;
// }

// let yusuf= new person('yusuf',2007,'student');
// console.log(yusuf.name);
// console.log(yusuf.yearOfBirth);
// console.log(yusuf.job);
// console.log(yusuf.calculateAge());


// let personProto = {
//   calculateAge : function(){
//       return 2018-this.yearOfBirth;
//   }
// }

// let yigit = Object.create(personProto);

// yigit.name ='yiğit';
// yigit.yearOfBirth = 2010;
// yigit.job ='student';

// let emel = Object.create(personProto,{
//   name : {value : 'emel'},
//   yearOfBirth : {value : 1989},
//   job : {value : 'teacher'}
// });

// console.log(emel);
// console.log(emel.calculateAge());

// console.log(yigit);
// console.log(yigit.calculateAge())

// let person= function(name,yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth=yearOfBirth;
//    this.job=job;

// }

// person.prototype.calculateAge=function(){
//   return 2021-this.yearOfBirth;
// }

// let teacher= function(name,yearOfBirth,job,subject){
//   person.call(this,name,yearOfBirth,job);
//   this.subject=subject; 
// }


// teacher.prototype=Object.create(person.prototype);

// teacher.prototype.constructor=teacher;

// let emel=new teacher("emel",1989,"teacher","math");

// console.log(emel);
// console.log(emel.calculateAge());

// var obj1={
//    name:"ada",
//    age:10
// }

// var obj2=obj1;
// obj2.age=177;
// console.log(obj1.age);
// console.log(obj2.age);


// let val;
// function multipleTwo(a,b,c, callback){
//   let arr=[];
//   for(let i=0; i<3;i++){
//      arr[i]=callback(arguments[i]*2);
//   }
//   return arr;
// }

// val=multipleTwo(2,5,8,addOne);

// function addOne(a){
//   return a+1;
// }

// console.log(val);

// immediate function sadece bir kez çalısır.

// (function(){ 
//   } () );  ya böyle

// (function(){
// })(); ya da böyle

// (function(name){

//   var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//     var today =new Date();
//     var msg = 'Welcome ' +name+ ' Today is '+days[today.getDay()];
//     console.log(msg);

// } ("yusuf") ); 
// Functions that Return Functions

// function Question(hobby){
   
//   switch(hobby){
//       case 'car':
//           return function(name){
//               console.log(name +' do you have a car ?');
//           }
//       break;

//       case 'book':
//           return function(name){
//               console.log(name +' what is your favourite book ?');
//           }
//       break;

//       case 'software':
//           return function(name,type){
//               console.log(name +' are you interested in '+type+' ?');
//           }
//       break;
        
//       default:
//           return function(name){
//               console.log(name +' how are you ?');
//           }
//   }
// }


// var carQuestion = Question('car');

// carQuestion('Çınar');
// carQuestion('Emel');

// var bookQuestion = Question('book');

// bookQuestion('Yiğit');
// bookQuestion('Ada');
// bookQuestion('Sena');

// var softwareQuestion = Question('software');

// softwareQuestion('Sadık','nodejs');
// softwareQuestion('Ali','angular');

// const person = {
//   firstName : 'Sadık',
//   lastName : 'Turan'
// }


// Object.defineProperty(person,'fullName',{ 
//   get function() {
//       return `${this.firstName} ${this.lastName}`
//   },
//   set function(value){
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//   }
// })

// Object.defineProperty(person,'age',{
//   value : 50,
//   writable : false //değerein değitirlip değiştirilmemesini sağlıyıor
// })

// person.age = 55;

// // person.firstName = 'Sena';
// //person.fullName = 'Çınar Turan'
// //console.log(person.fullName);
// console.log(person.age);

// var welcome = function(a,b){
//   console.log("welcome "+this.name+" are u intersted in "+a+" and "+b);
// }

// var yigit= {name:"yiğit"};  
// var ada= {name:"ada"};  
// welcome.call(yigit,"angular","asp.net");
// welcome.call(ada,"angular","asp.net");

// welcome.apply(ada,["angular","asp.net"]);
// welcome.apply(yigit,["angular","asp.net"]);

// welcomeYigit= welcome.bind(yigit);
// welcomeYigit("angular","asp.net");

var user={
  name:"ali"
}
try{
  //console.log(myfunction());
  console.log(user.name);
  if(!user.email)
{
 // throw new SyntaxError("user has no email address");
  throw new Error("user has no email address");
}
}
catch(e){
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
  console.log(typeof e);

}

finally{  // ehr zaman çalışır 
  console.log("finally block")
}