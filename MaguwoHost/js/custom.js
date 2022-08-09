
  $(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 170) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0}, 630);
        return false;
    });

});



const activeLink=document.querySelectorAll('ul li a');
for(let clickTab of activeLink){  
    clickTab.onclick=function(){
        let activeClass=document.querySelectorAll('li a.active');
        activeClass[0].classList.remove('active')
        clickTab.classList.add('active'); 
    }  
}

const date = new Date().getFullYear();
document.getElementById('right').innerHTML = 'Copyright Maria Rangelova 2017'+ '&nbsp;' + '-' +'&nbsp;' + date;