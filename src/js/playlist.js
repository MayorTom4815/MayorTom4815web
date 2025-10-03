var currentaudio = 0;
const tags = [
    {
        "title": "A Full Field of Hopes and Dreams",
        "src": "./src/audios/AFullFieldOfHopesAndDreams.wav"
    },
    {
        "title": "THE WORLD STILL REVOLVING AND NEVER STOP!!!",
        "src": "./src/audios/TheWorldStillRevolvingAndNeverStop.wav"
    },
    {
        "title": "INTO A CIBER'S CITY",
        "src": "./src/audios/IntoACibersWorld.wav"
    },
]


const player = document.querySelector("#player", Audio);
const seeker = document.querySelector("#seeker", Range);

const playbutton = document.querySelector("#btn_play");
const duration = document.querySelector("#duration");
const title = document.querySelector("#title");
const link_download = document.querySelector("#link_download");

player.src = tags[currentaudio].src;
link_download.download = tags[currentaudio].src;

function timefomrmat(segundos) {
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(Math.floor(segundos % 60)).padStart(2, "0");
    return `${m}:${s}`;
}


player.addEventListener("timeupdate", (event) => {
    duration.textContent = `${timefomrmat(player.currentTime)} - ${timefomrmat(player.duration)}`;
    seeker.value = player.currentTime;
})

player.addEventListener("durationchange", (event) => {
    var audio = tags[currentaudio];

    link_download.download = tags[currentaudio].src;
    duration.textContent = `${timefomrmat(player.currentTime)} - ${timefomrmat(player.duration)}`;
    title.innerHTML = `<h3>${tags[currentaudio].title}</h3>`;
    seeker.max = player.duration;
})

seeker.addEventListener("input", (event) => {
    player.currentTime = seeker.value;
});


function play_pause() {
    if (player.paused) {
        player.play();
    }
    else {
        player.pause();
    }
}

function next_music() {
    if (currentaudio >= (tags.length - 1)) {
        currentaudio = 0;
    }

    else {
        currentaudio++;
    }
    player.src = tags[currentaudio].src;
}

function prev_music() {
    if (currentaudio <= 0) {
        currentaudio = tags.length - 1;
    }

    else {
        currentaudio--;
    }
    player.src = tags[currentaudio].src;
}