var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener('click', function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener('click', function() {
	video.playbackRate *= (10/9);
	console.log(video.playbackRate);
});

document.querySelector("#slower").addEventListener('click', function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.volume = 0;
	const mute = document.querySelector("#mute");
	if(mute.innerHTML == "Mute") {
		mute.innerHTML = "Unmute";
	}
	else {
		mute.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	const mute = document.querySelector("#mute");
	if(video.volume > 0) {
		mute.innerHTML = "Mute";
	}
	else {
		mute.innerHTML = "Unmute";
	}
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
});





	


