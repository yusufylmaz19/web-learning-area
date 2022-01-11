var product = [
  { name: "samsung", price: 1000 },

  { name: "samsung pro", price: 1900 },

  { name: "samsung plus", price: 1800 },

  { name: "samsung premium", price: 1200 },
];

var productController = (function (data) {
  //private
  var collections = data || [];

  const addProduct = function (product) {
    collections.push(product);
  };

  const removeProduct = function (product) {
    var index = collections.indexOf(product);
    if (index >= 0) {
      collections.splice(index, 1);
    }
  };

  const getProducts = function () {
    return collections;
  };

  // public members
  return {
    addProduct,
    removeProduct,
    getProducts,
  };
})(product);

productController.addProduct(product[0]);
productController.addProduct(product[1]);
productController.addProduct(product[2]);
productController.addProduct(product[3]);
productController.removeProduct(product[3]);

console.log(productController.getProducts());

//module extenting

var extended = (function (m) {

  m.sayHello = function () {
    console.log("Hi there");
  }

  return m;
})(productController || {});

extended.sayHello();
extended.getProducts();
