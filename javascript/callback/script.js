var product = [
  { id: 1, name: "samsung s8", price: 3000 },
  { id: 2, name: "samsung s9", price: 5000 },
  { id: 3, name: "samsung s10", price: 8000 },
];

//let added = true;
function addProduct(prd, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      product.push(prd);
      let added = true;
      if (added) {
        resolve();
      } else {
        reject("hata: 500");
      }
    }, 2000);
  });

  // if (added) {
  //   setTimeout(() => {
  //     product.push(prd);
  //     callback(null,prd);
  //   }, 2000);
  // } else {
  //   callback("500",prd);
  // }
}

function getProduct() {
  setTimeout(() => {
    product.forEach((p) => {
      console.log(p.name);
    });
  }, 1000);
}

//addProduct({id:4,name:"samsung s11",price:8070},getProduct);
//addProduct({ id: 4, name: "samsung s11", price: 8070 }, function (err, data) {
//   if (err) {
//     console.log("hata : " + err);
//   } else {
//     console.log(data);
//   }
// });

addProduct({ id: 4, name: "samsung s11", price: 8070 })
  .then(getProduct)
  .catch(function (err) {
    console.log(err);
  });
