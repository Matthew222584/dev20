var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	videoThing = document.getElementById("player1");
	videoThing.autoplay = false;
	videoThing.loop = false;

});

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause")
const volume = document.getElementById('slider');

playButton.addEventListener('click', function() {
	videoThing.play();
});

pauseButton.addEventListener('click', function() {
	videoThing.pause();
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

