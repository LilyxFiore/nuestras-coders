var content = document.getElementById("content");
var fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg"];

for(i = 0; i < fotos.length; i++){
  addImages("assets/img/"+fotos[i]);
}

function addImages(src){
  var img = document.createElement("img");
  img.src=src;
  img.setAttribute("class","foto");
  content.appendChild(img);
}
