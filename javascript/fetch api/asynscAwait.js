// function fn(){
//   return Promise.resolve("hello");
// }
// async function fn(){
//   return "hello";
// }

// fn().then(res=>console.log(res));

var isError = false;
function getCategory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) {
        resolve("phone");
      } else {
        reject("hataaa");
      }
    }, 1000);
  });
}

function getProducts(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`5 products in ${category}`);
    }, 1000);
  });
}

getCategory()
  .then(getProducts)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

async function getProducts() {
  try {
    let category = await getCategory();
    let result = await getProducts(category);
    console.log(result);
  } catch (error) {console.log(error)}
}
getProducts();
