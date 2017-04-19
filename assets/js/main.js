var content = document.getElementById("content");

/** Agregando titulo "Nuestras coders" **/
var titulo = document.createElement("h1");
titulo.appendChild(document.createTextNode("Nuestras coders"));
content.appendChild(titulo);

/** Agregando fotos **/
var fotos = [{src: "foto1.jpg", name:"Anais Araya"}, {src: "foto2.jpg", name:"Caterine da Silva"},{src: "foto3.jpg", name:"Andre Miranda"},
            {src: "foto4.jpg", name:"Francisca Ojeda"},{src: "foto5.jpg", name:"Daniela Sánchez"},{src: "foto6.jpg", name:"Berenisse Ríos"}];

fotos.forEach(function(e){
  addImages("assets/img/"+e.src, e.name);
});

function addImages(src, name){
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
  img.src=src;
  figure.setAttribute("class","foto");
  figure.appendChild(img);
  figcaption.appendChild(document.createTextNode(name));
  figure.appendChild(figcaption);
  content.appendChild(figure);
}
