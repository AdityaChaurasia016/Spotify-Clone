console.log("Welcome to Spotify")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "I Feel It Coming - The Weeknd", filePath: "songs/1.mp3", coverPath: "1.jpeg" },
    { songName: "Redbone - Childish Gambino", filePath: "songs/2.mp3", coverPath: "2.jpeg" },
    { songName: "Yeah Right - Joji", filePath: "songs/3.mp3", coverPath: "3.jpeg" },
    { songName: "Stressed Out - 21 Pilots", filePath: "songs/4.mp3", coverPath: "4.jpeg" },
    { songName: "OTW - Khalid ", filePath: "songs/5.mp3", coverPath: "5.jpeg" },
    { songName: "Californication - RHCP", filePath: "songs/6.mp3", coverPath: "6.jpeg" },
    { songName: "Dead Memories - Slipknot", filePath: "songs/7.mp3", coverPath: "7.jpeg" },
    { songName: "Shot In The Dark - John Mayer", filePath: "songs/8.mp3", coverPath: "8.jpg" },
    { songName: "Stricken - Disturbed", filePath: "songs/9.mp3", coverPath: "9.jpg" },
    { songName: "Dont Stay - Linkin Park", filePath: "songs/4.mp3", coverPath: "10.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// function myFunction(songName, filePath, coverPath)
// {

// }

// audioElement.play();  

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = '1';
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = '0';
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        console.log("Hello");
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (index > 9) {
        index = 0;
    }
    else {
        index += 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML = songs[index].songName;
    gif.style.opacity = '1';
})

document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) {
        index = 10;
    }
    else {
        index -= 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML = songs[index].songName;
    gif.style.opacity = '1';
});





