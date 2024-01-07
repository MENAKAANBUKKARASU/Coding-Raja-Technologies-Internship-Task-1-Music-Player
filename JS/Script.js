document.addEventListener('DOMContentLoaded', function () {

const music = new Audio('audio/1.mp3');
const songs=[
    {
        id:'1',
        song_Name :`Fade
        <br> <div class="subtitle"> Alan Walker</div>`,
        poster:"img/1.jpg",

    },
    {
        id:'2',
        song_Name :`Jai Ho
        <br> <div class="subtitle">A.R.Rahman</div> `,
        poster:"img/2.jpg",

    },
    {
        id:'3',
        song_Name :`Permission to dance
        <br> <div class="subtitle">BTS</div>`,
        poster:"img/3.jpg",

    },
    {
        id:'4',
        song_Name :`Mudhal nee Mudivum nee
        <br> <div class="subtitle">Sid Sriram from("Mudhal nee Mudivum nee")</div>`,
        poster:"img/4.jpg",

    },
    {
        id:'5',
        song_Name :`Kadhaippoma
        <br> <div class="subtitle">Leon James from("Oh My Kadavule")</div>`,
        poster:"img/5.jpg",

    },
    {
        id:'6',
        song_Name :`Tharame Tharame
        <br> <div class="subtitle">Sid Sriram from("Kadaram Kondan")</div>`,
        poster:"img/6.jpg",

    },
    {
        id:'7',
        song_Name :`Kurumugil
        <br> <div class="subtitle">Vishal Chandrasekhar from("Sita Ramam")</div>`,
        poster:"img/7.jpg",

    },
    {
        id:'8',
        song_Name :`Azhagiye
        <br> <div class="subtitle">A.R.Rahman from("Katru Veliyidai")</div>`,
        poster:"img/8.jpg",

    },
    {
        id:'9',
        song_Name :`Yaanji
        <br> <div class="subtitle">Anirudh Ravichander from("Vikram Vedha")</div>`,
        poster:"img/9.jpg",

    },
    {
        id:'10',
        song_Name :`Ava Enna
        <br> <div class="subtitle">Harris Jayaraj from("Vaaranam Aayiram")</div>`,
        poster:"img/10.jpg",

    },
    {
        id:'11',
        song_Name :`Lovely
        <br> <div class="subtitle">Billie Eilish</div>`,
        poster:"img/11.jpg",

    },
    {
        id:'12',
        song_Name :`Mehabooba
        <br> <div class="subtitle">Ravi Barsur</div> `,
        poster:"img/12.jpg",

    },
    {
        id:'13',
        song_Name :`Maamadura
        <br> <div class="subtitle"> Sonthosh Narayanan</div>`,
        poster:"img/13.jpg",

    },
    {
        id:'14',
        song_Name :`Chaleya
        <br> <div class="subtitle">Aniruth Ravichandran</div>`,
        poster:"img/14.jpg",

    },
    {
        id:'15',
        song_Name :`Kaavaalaa
        <br> <div class="subtitle">Aniruth Ravichandran</div>`,
        poster:"img/15.jpg",

    },
    {
        id:'16',
        song_Name :`Satranga
        <br> <div class="subtitle">Arjit Singh</div>`,
        poster:"img/16.jpg",

    },
    {
        id:'17',
        song_Name :`Railin Oligal
        <br> <div class="subtitle">Govind vasantha</div>`,
        poster:"img/17.jpg",

    },
    {
        id:'18',
        song_Name :`Nee Kavithaigala
        <br> <div class="subtitle">Dhibu Ninan Thomas</div>`,
        poster:"img/18.jpg",

    },
    {
        id:'19',
        song_Name :`Nira
        <br> <div class="subtitle"> Sid Sriram from("Takkar")</div>`,
        poster:"img/19.jpg",

    },
    {
        id:'20',
        song_Name :`Kaadhal en Kaviye
        <br> <div class="subtitle">Sid Sriram</div>`,
        poster:"img/20.jpg",

    },
];
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].song_Name;
});

let master_side = document.getElementById('master_side');
let wave = document.getElementById('wave');
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol_icon = document.getElementById('vol_icon');
let volume = document.getElementById('volume');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
let back = document.getElementById('back');
let next = document.getElementById('next');
let masterPlay = document.getElementById("masterPlay");



master_side.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
        
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1) => {
        e1.classList.add("bi-pause-fill");
        e1.classList.remove("bi-play-fill");
    });
};

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e1) => {
        e1.style.background = 'rgb(105,105,105,.0)';
    });
};

let index = 0;


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (e1) => {
        index = parseInt(e1.target.id);
        playSelectedSong(index);
    });
    
});

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progessBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progessBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    //dot.style.left = `${seekbar}%`;
    let dotPosition = (seekbar / 100) * (seek.offsetWidth - dot.offsetWidth);
    dot.style.left = `${dotPosition}px`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
    let dotPosition = (seek.value / 100) * (seek.offsetWidth - dot.offsetWidth);
    dot.style.left = `${dotPosition}px`;
});


volume.addEventListener('change', () => {
    if (volume.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }

    if (volume.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (volume.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = volume.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

const playSelectedSong = (index) => {
    poster_master_play.src = `img/${index}.jpg`;
    music.src = `audio/${index}.mp3`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let selectedSong = songs.find(song => song.id == index);

    if (selectedSong) {
        let { song_Name } = selectedSong;
        title.innerHTML = song_Name;
        poster_master_play.src = selectedSong.poster;

    }
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1) => {
        e1.classList.remove("bi-pause-circle-fill");
        e1.classList.add("bi-play-circle-fill");
    });

    // Add the pause icon to the selected song
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill');
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill');

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
    makeAllplays();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    playSelectedSong(index);
});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    playSelectedSong(index);
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
});