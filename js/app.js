
// build the nav
var frag=document.createDocumentFragment();
var secs=document.querySelectorAll('section');
for(var sec of secs){
  console.log(sec);
  var t=document.createElement('li');
  frag.appendChild(t);

var anch=document.createElement('a');

anch.innerHTML=sec.getAttribute('data-nav');

t.appendChild(anch);


const m=sec.getAttribute('id');
anch.setAttribute('href','#'+m);
}
document.getElementById('navbar__list').appendChild(frag);



// Add class 'your-active-class' to section when near top of viewport
const sections = document.querySelectorAll("section");
const siblings = elm => [...elm.parentElement.children].filter(node => node !== elm);

const callBack = enteries => {
 enteries.forEach(entry => {
  if(entry.isIntersecting){
      // entry.target.nodeName.classlist.add("your-active-class");
      entry.target.className += " your-active-class";
       siblings(entry.target).forEach(entry => entry.classList.remove("your-active-class"));

      }
  else {
   entry.target.classList.remove("your-active-class");
}
})
}
const options = {
 root: null,
 rootMargin: "0px",
 threshold: 0.8
}
const observer = new IntersectionObserver(callBack, options);
window.addEventListener("scroll", e => {
  sections.forEach(section => {
   observer.observe(section);
})
})






// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

//add id to all anchor elements.




//hide navbar in scrolling
 var time;
    document.addEventListener("scroll", function(){
      const navBar = document.getElementById('navbar__list');

        if(time != "undefined"){
            clearTimeout(time);

        }
        navBar.style.display='None';

       time = setTimeout(function(){

        navBar.style.display="block";

      }, 1000);

    });











//fun to make navbar responsive
var x = document.getElementById("navbar__list");

    function myFunction() {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }









// Build menu

// Scroll to section on link click


//add id to all anchor elements.
var ancs=document.querySelectorAll("a");
for(anc of ancs ){
anc.setAttribute('id','myAnchor');

}
//make it smooth when the page scroll to a section.

const links =document.querySelectorAll('#myAnchor');
links.forEach((item) => {
  item.addEventListener("click", function(event){
     event.preventDefault();

     const alink=item.getAttribute('href') ;
     const s=alink.substring(1);
     const ss=document.getElementById(s);
     ss.scrollIntoView({
         behavior:"smooth",
         block: 'center'
     });


  })

});




