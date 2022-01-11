// text

function getText(){
   fetch("text.txt").then(response=>{
    return response.text();
   }).then(data=>{
     console.log(data);
   }).catch(error =>{
     console.log();
   })
}

//getText();

//JSON

function getJson(){
  fetch("product.json").then(response=>{
        return response.json();
  }).then(data=>{}).then(data=>{
    console.log(data);
  }).catch(error =>{
    console.log();
  })
}

//getJson();

// external API

function  getExternalApi(){

  fetch("https://randomuser.me/api/?results=5").then(data=>{
    return data.json();
  }).then(users=>{

    let html="";
    users.results.forEach(user => {

      html+=
      `
      <div>
      <img src="${user.picture.medium}">
      </div>
      <div>
      ${user.name.first}
      ${user.name.last}
      </div>

      `;
      
    });

    document.querySelector("#users").innerHTML=html;
  }).catch(error =>{
    console.log();
  })  

}

//getExternalApi();

function postExternalApi(){
  const url="https://jsonplaceholder.typicode.com/todos";

  var data={
    method:POST,
    body: JSON.stringify({
      userid : 1,
      title : "sample title",
      body : "sample body"
    }),
    header:new Headers({
      "content-type":"application/json"
    })
 }

  fetch(url,data).then(res=>{
          console.log(res);
  })
}

postExternalApi();