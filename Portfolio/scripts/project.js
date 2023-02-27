
const progressBar = document.getElementById('progress-bar');
const body = document.querySelector('body');

function animateProgressBar () {
	let scrollDistance = -body.getBoundingClientRect().top;
	let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
	let value = Math.floor(progressWidth);
	
	progressBar.style.width = `${value}%`;
}

window.addEventListener('scroll', animateProgressBar);
