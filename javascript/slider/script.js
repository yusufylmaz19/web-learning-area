var models = [
  {
    name: "foto 1",
    image: "img/Ekran Görüntüsü (46).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },
  {
    name: "foto 2",
    image: "img/Ekran Görüntüsü (51).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },

  {
    name: "foto 3",
    image: "img/Ekran Görüntüsü (56).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },

  {
    name: "foto 4",
    image: "img/Ekran Görüntüsü (67).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },

  {
    name: "foto 5",
    image: "img/Ekran Görüntüsü (76).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },
  {
    name: "foto 6",
    image: "img/Ekran Görüntüsü (80).png",
    link:
      "https://www.youtube.com/watch?v=wl2sGAxse64&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7&index=12",
  },
];

var index = 3;
var slaytCount = models.length;
var interval;
var settings = {
  duration: 1000,
  random: true,
};

init(settings);

document
  .querySelector(".fa-arrow-alt-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-alt-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

  document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
      clearInterval(interval);
    });
  })
  document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
     init(settings); 
    });
  })
function init(settings) {
  var prev;
  interval=setInterval(function(){
      
      if(settings.random){
          // random index
          do{
              index = Math.floor(Math.random() * slaytCount);
          }while(index == prev)
          prev = index;
      }
      else{
          // artan index
          if(slaytCount == index+1){
              index = -1;
          }
        
          showSlide(index);        
          index++;
      }
      console.log(index);
      showSlide(index);

  },settings.duration)
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
