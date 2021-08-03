let shortVideosData = [
	{
		src:"merge_arrays_in_javascript.MP4",
		title:"Merge Arrays in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"toggle_btns.MP4",
		title:"Toggle Buttons Concepts",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"min_max_array_in_javascript.MP4",
		title:"Find Minimum and Maximum Values from an Array in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"remove_duplicate_arrays_in_javascript.MP4",
		title:"Remove duplicates from Arrays in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"flat_2d_array_in_javascript.MP4",
		title:"Flat 2D Array in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"forms.mov",
		title:"Types of HTML Forms",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"empty_array_in_javascript.MP4",
		title:"How to Empty Array in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"timestamp_in_javascript.MP4",
		title:"Get Current Timestamp in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"clone_objects_in_javascript.MP4",
		title:"How to Clone Object in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	},
	{
		src:"string_to_number_in_javascript.MP4",
		title:"Convert String to Number in JavaScript",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	}
];

document.querySelector(".shorts .shorts-wrap").innerHTML = shortVideosData.map(function(video, index){
	return `
		<div class="video-wrapper">
			<div class="video">
				<video
					src="videos/${video.src}"
					index="${index}"
					onclick="playpause(this)"
					autoplay="false"
					loop
				>
			</div>
			<div class="details">
				<h2>${video.title}</h2>
				<p>${video.description}</p>
			</div>
		</div>
	`;
});

let currentIndex = 0;

function playpause(ref){
	if(ref.getAttribute("index") != currentIndex){
		return;
	}
	if(ref.paused){
		ref.play();
	} else {
		ref.pause();
	}
}

function setPlay(index){
	try {
		let videos = document.querySelectorAll(".shorts .shorts-wrap .active");
		for(let i=0;i<videos.length;i++){
			videos[i].classList.remove("active");
			videos[i].pause();
		}
	} catch(msg){}
	let videoWrapper = document.querySelectorAll(".shorts .shorts-wrap .video-wrapper")[index];
	let video = videoWrapper.querySelector("video");
	video.classList.add("active");
	video.play();
}

new Swipe(document.querySelector("#shorts"), {
	startSlide:0,
	draggable:true,
	autoRestart:false,
	continuous:false,
	disableScroll:true,
	stopPropogation:true,
	callback:function(index){
		currentIndex = index;
		setPlay(index);
	}
});

setPlay(currentIndex);