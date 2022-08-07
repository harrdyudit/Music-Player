const music=document.querySelector(".aud")
const img=document.getElementById("ig")
const playd=document.getElementById("playm");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prew=document.getElementById("prev");
const next=document.getElementById("forward");
const songs=[
    {
    name:"Asal-1",
    title:"Asal main",
    artist:"Darshan Raval",
    
    
},
    {
    name:"Dippam-2",
    title:"Dippam",
    artist:"Anirudh",
   
    
},
    {
    name:"Tu Mileya-3",
    title:"Tu Mileya",
    artist:"Darshan Raval",
    }
    
];

let isPlaying=false;

const playMusic=()=>{
    isPlaying=true;
    music.play();
    playd.classList.replace("fa-circle-play","fa-circle-pause");
    img.classList.add("animate");


};
const pauseMusic=()=>{
    isPlaying=false
    music.pause();
    playd.classList.replace("fa-circle-pause","fa-circle-play");
    img.classList.remove("animate");


};

playd.addEventListener("click",()=>{
  isPlaying ? pauseMusic():playMusic();
});

const loadSong=(songs)=>{
    title.textContent=songs.title
artist.textContent=songs.artist;
music.src=`music/${songs.name}.mp3`
img.src=`image/${songs.name}.jpg`
}
songIndex=0;
// loadSong(songs[2]);

const nextSong=()=>{
    songIndex=(songIndex+1) % songs.length
  loadSong(songs[songIndex]);
   
    playMusic();
    
}
const prewSong=()=>{
    songIndex=(songIndex-1+songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}


next.addEventListener("click",nextSong)
prew.addEventListener("click",prewSong)