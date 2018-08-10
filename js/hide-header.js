/* When the user scrolls down, hide the header container (upper navigation bar).
   When the user scrolls up, show it again.
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    
  } else {
  	/* Activate, if y offset position is higher than 130 px */
  	if (window.pageYOffset > 130) {
    	document.getElementById("header").style.top = "-150px";
  	}
  }
  prevScrollpos = currentScrollPos;
};


