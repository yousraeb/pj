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
    category: 'CS',
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
    category: 'CS',
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
    category: 'CS',
    price: 19.9
},
{
    image: "cssAnimation.png",
    title: 'CSS animations',
    category: 'CS',
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
    category: 'CS',
    price: 29.9
},
{
    image: "phpBasics.png",
    title: 'Getting started with php',
    category: 'PHP',
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
    category: 'PHP',
    price: 45.9
},
{
    image: "javascriptDom.png",
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]

/*visionnage des cours*/
addEventListener("DOMContentLoaded", function () {  displayCoursesItems(courses);  });
const sectionCenter = document.querySelector(".section-center");
function displayCoursesItems(coursesItems) {
  let displayCourses = coursesItems.map(function (item) {
   return `
        <article class="menu-item">
            <img src=${item.image} alt=${item.title} class="coursephoto" />
            <div class="item-info">
              <header>
                <h4 class="coursename">${item.title} </h4> 
                <h4 class="price"> $${item.price}</h4> 
              </header>
             </div>
          </article>`;
  });
  displayCourses = displayCourses.join("");
  sectionCenter.innerHTML = displayCourses;
}
 /*filtrage par recherche*/
 const searchInput = document.getElementById('search');
 searchInput.addEventListener('keyup', function() {
   const input = searchInput.value ;
   const crs = courses.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
   console.log(input);
   displayCoursesItems(crs);
 });
/*filtrage par boutons*/
function fct(btn){
    const category = btn.id;
    const coursesCategory = courses.filter(function (coursesItem) {
      if (coursesItem.category === category) {
        return coursesItem;
      }
    });
    if (category === "ALL") {
      displayCoursesItems(courses);
    } else {
      displayCoursesItems(coursesCategory);
      //console.log(coursesCategory)
    }
  };
  /*filtrage par prix*/
  function rangeSlider(value){
    document.getElementById('rangevalue').innerHTML = value;
  }
  function price(v){
   const coursesPrice = courses.filter(function (coursesItem) {
      if (coursesItem.price <= v) {
        return coursesItem;
      }
    });
    displayCoursesItems(coursesPrice);
    //console.log(coursesPrice)
  }


 

