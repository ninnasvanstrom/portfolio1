
const progressBar = document.getElementById('progress-bar');
const body = document.querySelector('body');

function animateProgressBar () {
	let scrollDistance = -body.getBoundingClientRect().top;
	let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
	let value = Math.floor(progressWidth);
	
	progressBar.style.width = `${value}%`;
}

window.addEventListener('scroll', animateProgressBar);

// Work in progress flag:
const project = document.querySelectorAll('.project.work-in-progress');

project.forEach(function(element) {
	const flag = element.children[element.children.length - 1];
	const img = element.children[0];
	
	element.addEventListener('mouseover', function(){
		flag.style.opacity = 1;
		img.style.filter = 'brightness(50%)';
	})
})



project.forEach(function(element) {
	const flag = element.children[element.children.length - 1];
	const img = element.children[0];

	element.addEventListener('mouseout', function(){
		flag.style.opacity = 0;
		img.style.filter = 'brightness(100%)';
	})
})


