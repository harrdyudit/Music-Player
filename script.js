const music = document.querySelector(".aud");
const img = document.getElementById("ig");
const playd = document.getElementById("playm");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prew = document.getElementById("prev");
const next = document.getElementById("forward");
const progress = document.getElementById("progress");
const current_time = document.getElementById("current_time");
let total_duration = document.getElementById("duration");
let progress_div = document.getElementById("progress_div");
const songs = [
  {
    name: "Asal-1",
    title: "Asal main",
    artist: "Darshan Raval",
  },
  {
    name: "Tu Mileya-3",
    title: "Tu Mileya",
    artist: "Darshan Raval",
  },
  {
    name: "Dippam-2",
    title: "Dippam",
    artist: "Anirudh",
  },
];

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  playd.classList.replace("fa-circle-play", "fa-circle-pause");
  img.classList.add("animate");
};
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  playd.classList.replace("fa-circle-pause", "fa-circle-play");
  img.classList.remove("animate");
};

playd.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `image/${songs.name}.jpg`;
};
songIndex = 0;
// loadSong(songs[2]);

const nextSong = () => {
  // songIndex = (songIndex + 1) % songs.length
  // loadSong(songs[songIndex]);

  // playMusic();
  songIndex++;
  if (songIndex > songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playMusic();
};
const prewSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playMusic();
};

// progress meter

music.addEventListener("timeupdate", (ev) => {
  const { currentTime, duration } = ev.srcElement;
  // formula for get progress time
  let progress_time = (currentTime / duration) * 100;

  progress.style.width = `${progress_time}%`;

  // music update duration

  // convert second into minute

  // current duration update
  const min_duration = Math.floor(duration / 60);
  // find second
  const sec_duration = Math.floor(duration % 60);
  let updateduration = `${min_duration}:${sec_duration}`;
  if (min_duration) {
    total_duration.textContent = `${updateduration}`;
  }

  // current time update duration
  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }
  let currentTimeUpdate = `${min_currentTime}:${sec_currentTime}`;
  current_time.textContent = `${currentTimeUpdate}`;
});
// progress-div when user click on progress bar and change song duration
progress_div.addEventListener("click", (event) => {
  // console.log(event);
  const { duration } = music;
  // console.log(duration);
  let move_progress = (event.offsetX / event.target.clientWidth) * duration;
  // console.log(move_progress);
  music.currentTime = move_progress;
});

// event for when the current song end the next song will automatically play
music.addEventListener("ended", nextSong);

next.addEventListener("click", nextSong);
prew.addEventListener("click", prewSong);

// ok
