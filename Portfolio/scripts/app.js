const latestProjectImage = document.querySelector('.placeholder-image');
const seeLatestProjectText = document.querySelector('.latest-work-section .latest-work .project-description .wrapper p');

latestProjectImage.addEventListener('mouseover', function(){

	let animation = anime({
		targets: seeLatestProjectText,
		opacity: 1,
		translateX: 35,
		duration: 150,
		direction: 'normal',
		easing: 'linear',
	});
	
});

latestProjectImage.addEventListener('mouseout', function(){

	let animation = anime({
		targets: seeLatestProjectText,
		opacity: 0,
		translateX: 0,
		duration: 90,
		direction: 'normal',
		easing: 'linear',
	});
	
});

const progressBar = document.getElementById('progress-bar');
const body = document.querySelector('body');

function animateProgressBar () {
	let scrollDistance = -body.getBoundingClientRect().top;
	let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
	let value = Math.floor(progressWidth);
	
	progressBar.style.width = `${value}%`;
}

window.addEventListener('scroll', animateProgressBar);



const contactMeBtn = document.getElementById('contact-btn');

contactMeBtn.addEventListener('mouseover', function() {
	const text = contactMeBtn.children[0];
	text.style.color = '#333';
})

contactMeBtn.addEventListener('mouseout', function() {
	const text = contactMeBtn.children[0];
	text.style.color = 'white';
})