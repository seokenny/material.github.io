window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


document.querySelector(".nav__burger").addEventListener("click",function(){
    document.querySelector(".nav__burger").classList.toggle("nav-active");
    document.querySelector(".nav__burger-plus").classList.add("plus-active");
});

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}


function scrollAbout() {
	console.log(event);
    var goTo = $(".aboutme");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

var navArray = ["nav__portfolio", "nav__about", "nav__contact"];

var sectionArray = [".portfolio", ".aboutme", "footer"];

function scrollTo() {
	var clicked;

	var goTo = "";
	clicked = event.target.classList;
	for(var i = 0; i < navArray.length; i++){
		if(clicked[0] == navArray[i]){
			goTo = $(sectionArray[i]);
			console.log(goTo);
		}
	}

	
		var top = goTo.offset().top;
		top-=70;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}



document.querySelector(".nav__list").addEventListener("click", function(){
	scrollTo();
});