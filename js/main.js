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