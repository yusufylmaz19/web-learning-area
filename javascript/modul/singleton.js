// // singleton pattern

// var singleton = (function () {
//   var instance;
//   const createInstance = function () {
//     return {
//       randomNumber: Math.random(),
//     };
//   }
//   return {
//     getInstance:function () {
//       if(!instance){
//         instance=new createInstance();
//       }
//       return instance;
//     }
//   }
// })();

// const instance1=singleton.getInstance();
// const instance2=singleton.getInstance();

// console.log(instance1.randomNumber,instance2.randomNumber);

var singleton = (function () {
  var instance;
  productController = function () {
    const products = [
      { name: "samsung" },
      { name: "apple" },
    ];
      const add=function (product) {
        products.push(product);
      }
      const get= function () {
        return products;
      }
      return{
        add,get
      }
  };

  return {
    getInstance: function () {
      if(!instance){
        instance=new productController();
      }
      return instance;
    }
  }
})();

const productController1= singleton.getInstance();
const productController2= singleton.getInstance();

productController1.add({name:"xaomi"});
console.log(productController2.get());