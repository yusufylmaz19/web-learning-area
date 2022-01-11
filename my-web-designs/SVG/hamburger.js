 const hamburger= document.querySelector(".hamburger");
 const lineOne= document.querySelector(".line-one");
 const lineTwo= document.querySelector(".line-two");
 const lineThree= document.querySelector(".line-three");

 const lines= [lineOne,lineTwo,lineThree];

 const tlm= new TimelineMax({});

 const toggleMenu = new  TimelineMax({paused:true, reversed:true});



 hamburger.addEventListener("mouseenter", ()=>{
   if(hamburger.classList.contains("js-x")){
   return;
  }
      tlm.staggerTo(lines, 0.25, {scaleX:1.5, repeat:1, yoyo:true, svgOrigin:"50 50 "}, 0.125);
 });
 
toggleMenu
.to(lineTwo,0.125,{scaleX:0})
.to(lineOne,0.125,{ transformOrigin:"50% 50%", y:8, ease:Power2.InOut},"slide")
.to(lineThree, 0.125,{ transformOrigin:"50% 50%", y:-8, ease:Power2.InOut},"slide")
.to(hamburger, 0.5,{rotation:360, ease:Power4.easeInout})
.to(lineOne,0.125,{rotation:45, transformOrigin:"50% 50%", ease:Power2.InOut},"cross")
.to(lineThree,0.125,{rotation:-45, transformOrigin:"50% 50%", ease:Power2.InOut},"cross");



hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("js-x");
  toggleMenu.reversed()? toggleMenu.play(): toggleMenu.reverse();
});