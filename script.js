const video = document.getElementById('video')
const play = document.getElementById('play')
const stopp = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// play&pause video
function toogleVideoStates(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }

    
}

// update play&pause icon
function updatePlayIcon(){
  if(video.paused){
    play.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>'
  }else{
    play.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>'
  }
}

// update progress & timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100

    // get mins
    let mins = Math.floor(video.currentTime / 60)
    if(mins < 10){
        mins = '0' + String(mins)
    }
    
    // get sec
    let sec = Math.floor(video.currentTime % 60)
    if(sec < 10){
        sec = '0' + String(sec)
    }

    timestamp.innerHTML = `${mins}:${sec}`
}

// set video progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100
}

// stop video
function stopVideo(){
    video.currentTime= 0
    video.pause()
}

video.addEventListener('click' , toogleVideoStates)
video.addEventListener('play' , updatePlayIcon)
video.addEventListener('pause' , updatePlayIcon)
video.addEventListener('timeupdate' , updateProgress)

play.addEventListener('click' , toogleVideoStates)

stopp.addEventListener('click' , stopVideo)

progress.addEventListener('change' , setVideoProgress)