var slider_img= document.querySelector('.slider-img');

var images=['image.png','image2.jpg','image3.png'];

var i=0; // current img index

function next(){
	if(i >= images.length-1) i = -1;
	i++;    
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}