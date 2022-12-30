var courses = [{
    image: "javascriptDef.png",
    title: 'What is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: "htmlBasics.PNG",
    title: 'Basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: "htmlElements.png",
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: "cssSelectors.jpg",
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: "javascriptVariables.png",
    title: 'Variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: "javascriptOperators.png",
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: "htmlAttrVal.jpg",
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: "cssProperties.png",
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: "javascriptObjects.png",
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: "cssMesures.png",
    title: 'Mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: "cssAnimation.png",
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: "javascriptFunctions.png",
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: "javascriptEvents.png",
    title: 'Javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: "cssColors.png",
    title: 'CSS colors',
    category: 'css',
    price: 29.9
},
{
    image: "phpBasics.png",
    title: 'Getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: "javascriptFunctions2.png",
    title: 'Functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: "phpDataBase.png",
    title: 'Connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: "phpCRUD.png",
    title: 'Manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: "javascriptDom.png",
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]


const grille = document.querySelector(".grille");
const n1=  Math.floor(Math.random() * (6 + 1));
const n2=  Math.floor(Math.random() * (13 - 7 + 1)) + 7;
const n3=  Math.floor(Math.random() * (19 - 14 + 1)) + 14;
window.addEventListener("DOMContentLoaded", function () {
   grille.innerHTML = `<figure>
    <img src=${courses[n1].image} id="img3">
    <p class="coursename"> ${courses[n1].title} </p> 
    <p class="price">$${courses[n1].price} </p> 
   </figure>
  <figure>
   <img src=${courses[n2].image} id="img3">
   <p class="coursename"> ${courses[n2].title} </p> 
   <p class="price"> $${courses[n2].price}</p> 
  </figure>
  <figure>
   <img src=${courses[n3].image} id="img3">
   <p class="coursename"> ${courses[n3].title} </p> 
   <p class="price"> $${courses[n3].price}</p> 
  </figure>`;
  
});



let bouton1=document.getElementById("bouton1");
let bouton2=document.getElementById("bouton2");
 function btn(){
    document.location.href="courses.html";  
 }
