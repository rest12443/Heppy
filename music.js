var music = {
    "Адская колыбельная": ["supportFiles/music/АдскаяКолыбельная.mp3", "supportFiles/img/music/АдскаяКолыбель.png"],
    "Тряси": ["supportFiles/music/ТРЯСИ.mp3", "supportFiles/img/music/Тряси.png"],
    "DANCE! Till We Die New Jazz Mix": ["supportFiles/music/DANCE!TillWeDieNewJazzMix.mp3", "supportFiles/img/music/DANCE!TillWeDieNewJazzMix.png"],
    "Faster n Harder":["supportFiles/music/FasterNHarder.mp3", "supportFiles/img/music/FasterNHarder.png"],
    "Hey Baby":["supportFiles/music/heyBaby.mp3", "supportFiles/img/music/HeyBaby.png"],
    "Like A G6":["supportFiles/music/LikeAG6.mp3", "supportFiles/img/music/LikeAG6.png"],
    "Love Game":["supportFiles/music/LoveGame.mp3", "supportFiles/img/music/LoveGame.png"],
    "Poker Face":["supportFiles/music/PokerFace.mp3", "supportFiles/img/music/PokerFace.png"],
    "Revenge":["supportFiles/music/Revenge.mp3", "supportFiles/img/music/Revenge.png"],
    "Stressed Out":["supportFiles/music/StressedOut.mp3", "supportFiles/img/music/StressedOut.png"],
    "The Monster":["supportFiles/music/TheMonster.mp3", "supportFiles/img/music/TheMonster.png"],
    "Turbo (Majestic)":["supportFiles/music/Turbo(Majestic).mp3", "supportFiles/img/music/Turbo.png"],
    "XXX":["supportFiles/music/XXX.mp3", "supportFiles/img/music/XXX.png"]
}

var on = 0
var i = 0

var pouse_button = document.querySelector(".pouse")
var skeep_buttom_down = document.querySelector(".skeep-buttom-down")
var skeep_buttom_up = document.querySelector(".skeep-buttom-up")
var name_music = document.querySelector(".name-music")
var img_music = document.querySelector(".img-music")
var time_music = document.querySelector(".time")

var name_music_tab = Object.keys(music)[i]
var music_path = music[name_music_tab][0]
var music_img = music[name_music_tab][1]



var audio = new Audio(music_path)

pouse_button.addEventListener('click', function() {
    
    if (on == 0) {
        audio.play()
        on = 1
    } else {
        audio.pause()
        on = 0
    }

    var name_music_tab = Object.keys(music)[i]
    var music_img = music[name_music_tab][1]
    img_music.style.backgroundImage = `url(${music_img})`
    name_music.innerHTML = name_music_tab
})


skeep_buttom_up.addEventListener('click', function() {
    if (i == 12) {
        i = 0
    } else {
        i = i+1
    }

    var name_music_tab = Object.keys(music)[i]
    var music_path = music[name_music_tab][0]
    var music_img = music[name_music_tab][1]
    img_music.style.backgroundImage = `url(${music_img})`
    name_music.innerHTML = name_music_tab


    audio.pause()
    audio = new Audio(music_path)
    audio.play()
})
skeep_buttom_down.addEventListener('click', function() {
    if (i == 0) {
        i = 12
    } else {
        i = i-1
    }

    var name_music_tab = Object.keys(music)[i]
    var music_path = music[name_music_tab][0]
    var music_img = music[name_music_tab][1]
    img_music.style.backgroundImage = `url(${music_img})`
    name_music.innerHTML = name_music_tab


    audio.pause()
    audio = new Audio(music_path)
    audio.play()
})

function ender_music() {
    if (audio.duration - audio.currentTime <= 0) {
        if (i == 12) {
            i = 0
        } else {
            i = i+1
        }
    
        var name_music_tab = Object.keys(music)[i]
        var music_path = music[name_music_tab][0]
        var music_img = music[name_music_tab][1]
        img_music.style.backgroundImage = `url(${music_img})`
        name_music.innerHTML = name_music_tab
    
    
        audio.pause()
        audio = new Audio(music_path)
        audio.play()
    }
}

function timer_music() {
    let timer = Math.floor(audio.currentTime);
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    // Форматируем минуты и секунды в строку с двумя цифрами
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Обновляем текст элемента с временем
    time_music.innerHTML = `${minutes}:${seconds}`;
}

// Запускаем таймер каждые 1000 мс (1 секунда)
setInterval(timer_music, 100);

// Пример вызова функции ender_music (она должна быть определена ранее в коде)
setInterval(ender_music, 500);