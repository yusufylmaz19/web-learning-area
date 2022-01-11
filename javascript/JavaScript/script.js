// console.log("Merhaba ");
// console.log([0,1,2]);
// console.error("Hata");
// console.warn("djksd");
// console.clear();

// var age=58;
// console.log(age)
// var age=12;

// console.log(age+age)

// let ff=15;
// console.log(ff);
// const fff="podjosdo"
// console.log(fff);

// fff="d j pmm";

// let num1=15;

// console.log(num1);

// let d= new Date();
// d.setFullYear(  6015);
// console.log(d.getFullYear());

// var num='yusuf  yılmaz a';

// console.log(num.replace(/ /g,'-'));

// function yas(yil){
//   return 2021-yil;
// }
// let val= yas(2010);
// console.log(val);

// window.alert('dfdf');
// var a= 15;

// var i=5
// for (var  i= 0;  i< 10; i++) {
//   console.log(i);
// }
// console.log(i);

// let val;
// val= document.getElementById("header").id;
// val= document.getElementById("header").className;
// val= document.getElementById("header");

// val.style.color="red";
// val.style.fontSize="50px";
// val = document.getElementById("header").innerText="hahha";
// val = document.getElementById("header").innerHTML="<br>hahha</br>";
// val=val.id;
// val=val.className;
// console.log(val);

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color="yellowgreen";
// document.querySelector("li:nth-child(2)").style.color="red";
//let val;
// val=document.getElementsByClassName("list-group-item");
// val=document.getElementsByClassName("list-group-item")[2];
// val=document.getElementsByClassName("list-group-item");
// val= val[1];
// val[2].style.color="red";

// for (let i = 0; i < val.length; i++) {
//      console.log(val[i].style.color="red");
// }

// val= document.getElementsByTagName("li");
// val= document.getElementById("task-list");
// val= val.getElementsByTagName("a");

// val=document.querySelectorAll("li");

// val.forEach(function(item,index){
//         item.textContent=`${index} - hello `;
// })

// console.log(val);

// let val;
// let list= document.querySelector(".list-group");
// val=list;
// val=list.childNodes;
// val=list.childNodes[0].nodeName;
// val=list.childNodes[0].nodeType;
//val=list.children[0];
// val=list.children[0].textContent="dfss";

// val=list.firstChild;
// val=list.firstElementChild;
// val=list.lastChild;
// val=list.lastElementChild;
// val=list.childElementCount;
// val=list.parentNode;
// val=list.parentElement;
// val=list.parentElement.parentElement;

// val=list.children[0].nextSibling;
// val=list.children[0].nextElementSibling;

// val=list.children[2].previousSibling;
// val=list.children[2].previousElementSibling;

// for (let i = 0 ; i < list.childNodes.length ; i++) {
//       if(list.childNodes[i].nodeType===3){
//         console.log(list.childNodes[i]);
//       }
// }

// const li= document.createElement("li");
//  li.className="list-group-item list-group-item-secondary";
//  li.setAttribute("title","asdas");

//  const text= document.createTextNode("new item");
//  li.appendChild(text);

//  const a= document.createElement("a");
//  a.setAttribute("href","#");
//  a.className="delete-item float-right";
//  a.innerHTML=	'<i class="fas fa-times"> </i>';
// li.appendChild(a);
// document.querySelector("#task-list").appendChild(li);

// console.log(li);

//const tasklist= document.querySelector("#task-list");
// tasklist.remove();
// tasklist.childNodes[7].remove();
// tasklist.children[2].remove();
// tasklist.removeChild(tasklist.children[3]);
//tasklist.children[0].removeAttribute("class");

//console.log(tasklist);

// const cardheader= document.querySelector(".card-header");

// const h2=document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("My Listddd"));
// const parent=document.querySelector(".card");
// parent.replaceChild(h2,cardheader);
// console.log(cardheader);

// const tasklist= document.querySelector("#task-list");

// let val;
// link=tasklist.children[0].children[0];

//val=link.className;
//val=link.classList;
// val=link.classList[1];

// link.classList.add("nea");
// link.classList.remove("nea");

// val= link.getAttribute("class");

// console.log(val);

//const btn = document.querySelector("#btnDeleteAll");

// btn.addEventListener("click",function(){
//   console.log("cliked");
// });

// btn.addEventListener("click", btnclick);

// function btnclick(e) {

//   let val;

//   val=e;
//   val=e.target;

//   console.log(val);

//   e.preventDefault();
// }

//const btn = document.querySelector("#btnDeleteAll");

//const ul = document.querySelector("#task-list");

// btn.addEventListener("click",eventhandler);

// ul.addEventListener("click",eventhandler);

//btn.addEventListener("dblclick",eventhandler)

// btn.addEventListener("mousedown", eventhandler);

// btn.addEventListener("mouseup", eventhandler);

// ul.addEventListener("mouseenter",eventhandler);

// ul.addEventListener("mouseleave",eventhandler);

// ul.addEventListener("mouseover",eventhandler);

// ul.addEventListener("mouseout",eventhandler);

//const h5 = document.querySelector("h5");

// ul.addEventListener("mousemove",eventhandler);

// function eventhandler(e){

//   console.log(`event type: ${e.type}`);

//     h5.textContent=` Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

//   e.preventDefault();
// }

// const input = document.querySelector("#txtTaskName");
// const select = document.querySelector("#select");

// input.addEventListener("keydown", eventhandeler);
// input.addEventListener("keyup", eventhandeler);
//input.addEventListener("keypress", eventhandeler);
//input.addEventListener("focus", eventhandeler);
//input.addEventListener("blur", eventhandeler);
//input.addEventListener("cut", eventhandeler)
//input.addEventListener("paste", eventhandeler)
//input.addEventListener("select", eventhandeler);
//select.addEventListener("change", eventhandeler);

//const form=document.querySelector("form");

//form.addEventListener("submit", eventhandeler);

// function eventhandeler(e){
//  console.log("event type:" +e.type);
//  //console.log("key code:" +e.keyCode);
//  //console.log("value:" +e.target.value);
//  //e.target.style.borderColor="red";
//  e.preventDefault();
// }

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click", function (e) {
//   console.log("Form");
//   e.stopPropagation();
// });

// cardBody.addEventListener("click", function (e) {
//   console.log("cardBody");
//   e.stopPropagation();
// });

// card.addEventListener("click", function (e) {
//   console.log("card");
//   e.stopPropagation();
// });

// container.addEventListener("click", function (e) {
//   console.log("container");
//   e.stopPropagation();
// });

// form.addEventListener("click", function (e) {
//   console.log("Form");

// },true);

// cardBody.addEventListener("click", function (e) {
//   console.log("cardBody");

// },true);

// card.addEventListener("click", function (e) {
//   console.log("card");

// },true);

// container.addEventListener("click", function (e) {
//   console.log("container");

// },true);

// const deletitems = document.querySelectorAll(".fa-times");

// deletitems.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });
// const ul= document.querySelector("ul");
// ul.addEventListener("click", function (e) {

//   if(e.target.className === "fas fa-times")
//   {
//     console.log(e.target.parentElement.parentElement.remove());
//   }

// });

// let val;
// let hobies=["film","kitap","yazılım"]
// const firstName=localStorage.setItem("firstName","Yusuf");
// const lastName=localStorage.setItem("lastName","Yılmaz");

// val=localStorage.getItem("firstName");

// localStorage.removeItem("firstName");

// localStorage.setItem("hobies",JSON.stringify(hobies));

// val=JSON.parse(localStorage.getItem("hobies"));
// //localStorage.clear();
//  console.log(val);
// console.log(localStorage);

// const country=sessionStorage.setItem("country","Türkiye");
// const city=sessionStorage.setItem("city","Gaziantep");

// console.log(sessionStorage);

 
// UI vars 

// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// load items
loadItems();

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

// get items from Local Storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

// delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);   
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}


function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }

    // create item
    createItem(input.value);

    // save to LS
    setItemToLS(input.value);

    // clear input
    input.value = '';

    e.preventDefault();

}

// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            // delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('are you sure ?')) {
        // taskList.innerHTML='';
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}
