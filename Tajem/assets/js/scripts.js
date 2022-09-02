
const activeLinks=document.querySelectorAll('ul li a');
for(let activeLink of activeLinks){  
    activeLink .onclick=function(){
        let activeClass=document.querySelectorAll('li a.active');
        activeClass[0].classList.remove('active');
        activeLink .classList.add('active'); 
    };  
}

const date = new Date().getFullYear();
document.getElementById('copyright').innerHTML = 'Copyright &copy; Maria Rangelova 2017'+ '&nbsp;' + '-' +'&nbsp;' + date;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

//Get the button
let scrollToTop = document.getElementById("scrollBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

scrollToTop.addEventListener('click', backToTop);

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}