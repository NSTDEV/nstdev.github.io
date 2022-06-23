//Sections
const about = document.getElementById("aboutHS1");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

//Navbar
const aboutHS = document.getElementById("aboutHS");
const projectsHS = document.getElementById("projectsHS");
const contactHS = document.getElementById("contactMe");
const home = document.getElementById("homeHS");
const homeF = document.getElementById("name");

//Functions
aboutHS.addEventListener('click', function(){
    about.classList.toggle('hide');
    projects.classList.add('hide');
    contact.classList.add('hide');
});

projectsHS.addEventListener('click', function(){
    projects.classList.toggle('hide');
    about.classList.add('hide');
    contact.classList.add('hide');
});

contactHS.addEventListener('click', function(){
    contact.classList.toggle('hide');
    about.classList.add('hide');
    projects.classList.add('hide');
});

home.addEventListener('click', function(){
    about.classList.add('hide');
    projects.classList.add('hide');
    contact.classList.add('hide');
});

homeF.addEventListener('click', function(){
    about.classList.add('hide');
    projects.classList.add('hide');
    contact.classList.add('hide');
});

//Projects
const detailsElements = document.querySelectorAll("details");

function handleClickOnDetails() {
  let detailsOpened = document.querySelectorAll("details[open]");

  for (const item of detailsOpened) {
    if (this !== item) {
      item.removeAttribute("open");
    }
  }
}

detailsElements.forEach(function (item) {
  item.addEventListener("click", handleClickOnDetails);
});

//Languages
$.getJSON("./Scripts/Languages/lang.json", function(json){
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang", "en");
  };
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element){
    $(this).html(doc[lang][$(this).attr('key')]);
  });

  $('.translate').click(function(){
    localStorage.setItem("lang", $(this).attr('id'));
    var lang = $(this).attr('id');
    var doc = json;
      $('.lang').each(function(index, element){
        $(this).html(doc[lang][$(this).attr('key')]);
      });
  });
});