var vid = document.getElementById("myVideo");
var playBtn = document.getElementById("playBtn");
var fillBar = document.getElementById("fill");
var currentTime = document.getElementById("currentTime");
var volumeSlider = document.getElementById("volume");
var speaker = document.getElementById("speaker");
function playOrPause() 
{
	if (vid.paused) 
	{
		vid.play();
		playBtn.innerHTML = "<i class='fas fa-pause'></i>";
	} 
	else
	{
		vid.pause();
		playBtn.innerHTML = "<i class='fas fa-play'></i>";
	}
}
vid.addEventListener('timeupdate',function()
{
	var position = vid.currentTime / vid.duration;
	fillBar.style.width = position*100 + '%';
	currtime = time_arrange(vid.currentTime);
	totalDuration = time_arrange(vid.duration);
	currentTime.textContent  = currtime + '/' + totalDuration;
	if (vid.ended) 
	{
		playBtn.innerHTML = "<i class='fas fa-play'></i>";
	} 
});


/** Function for Converting Current Music time and Total Duration of Music Starts **/
function time_arrange(totalDuration) 
{
var minutesTotal = Math.floor(totalDuration/60);   
var secondsTotal = Math.floor(totalDuration); 

if (secondsTotal>59) 
{
	secondsTotal = secondsTotal%60;
	if (secondsTotal<10) 
	{
		secondsTotal = '0' + secondsTotal;
	}
} 
else if (secondsTotal<10) 
{
	secondsTotal = '0' + secondsTotal;
}
if (minutesTotal<10) 
{
	minutesTotal = '0' + minutesTotal;
}
totalDuration = minutesTotal + ':' + secondsTotal;
return totalDuration;
}
/** Function for Converting Current Music time and Total Duration of Music Endss **/

/** Volume Change Function **/
function changeVolume() 
{
	vid.volume = volumeSlider.value;
	if (volumeSlider.value==0) 
	{
		speaker.innerHTML = "<i class='fa fa-volume-mute'></i>";
	}
	else
	{
		speaker.innerHTML = "<i class='fas fa-volume-up'></i>";
	}
}

/** Function for Mute & Unmute The Music Starts **/
function muteUnmute()
{
	if (vid.muted==false) 
	{
		vid.muted=true;
		speaker.innerHTML = "<i class='fa fa-volume-mute'></i>";
		//$("#volume").attr("value")==0;
		//$("volume").attr("value",0);
		//$("#volume input[type=range]").val(0);
		//volumeSlider.setAttribute('value', 0);
	}
	else
	{
		vid.muted = false;	
		speaker.innerHTML = "<i class='fas fa-volume-up'></i>";
	}
}
/** Function for Mute & Unmute The Music Ends **/