console.log("Welcome to Spotify");

// Intialize the variables  
let songIndex = 0;
let audioElement = new Audio('songs/O Sajni Re (RaagJatt.com).mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "O Sajni Re", filePath: "./songs/O Sajni Re (RaagJatt.com).mp3", coverPath:"cover/cover.jpg"},
    {songName: "O Mahi O Mahi", filePath:"songs/O Mahi O Mahi(PagalWorld.com.sb).mp3", coverPath:"cover/cover2.jpg"},
    {songName: "Dekha Tenu Pehli Pehli Baar Ve", filePath:"songs/Dekha Tenu Pehli Pehli Baar Ve(PagalWorld.com.sb).mp3", coverPath:"cover/cover3.jpg"},
    {songName: "Chor", filePath:"songs/_Chor(PagalWorld.com.sb).mp3", coverPath:"cover/cover4.jpg"},
    {songName: "Gulabi Sadi", filePath:"songs/Gulabi Sadi Ani Lali_192(PagalWorld.com.sb).mp3", coverPath:"cover/cover5.jpg"},
];  

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//let audioElement = new Audio('O Sajni Re (RaagJatt.com).mp3');
// audioElement.play;

// handle paly/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
        //update seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id) - 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src = 'songs/${index+1}.mp3';
        audioElement.src = songs[songIndex].filePath;   
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
        // audioElement.src = '${songIndex +1}.mp3';
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex-=1;
    }
        // audioElement.src = '${songIndex +1}.mp3';
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})