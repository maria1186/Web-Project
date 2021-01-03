(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// set up text to print, each item in array is new line
var aText = [
"My name is Maria Rangelova. I live in Plovdiv, Bulgaria. I`m front end developer end build", 
"a responsive website with valid code end SEO friendly markup.",
`I am a skilled WordPress developer that implements functional customer websites, my focus when
customizing WordPress is on ease of use.`
]
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();

// Social Media Share Button With Gooey Effect Using SVG

  $(".button").click(function(){
  $(".social.mail").toggleClass("clicked");
  $(".social.github").toggleClass("clicked");
 $(".social.linkedin").toggleClass("clicked");
 
});

var date=new Date(),
       year = date.getFullYear(),
      text = "&copy;     " + year + '&nbsp;'  + "Maria Rangelova front end";
 document.getElementById("copyright").innerHTML=text;