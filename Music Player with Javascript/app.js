
// const PlayIcon = document.querySelector("#play")
// const AudioFile = document.querySelector("audio")
// const AudioDuration = document.querySelector("#duration")
// const CurrentTime = document.querySelector("#currenttime")

// const ProgressChild = document.querySelector("#progresschild")

// let isAudioPlaying = false

// function playAudio()
// {
//     AudioFile.play()

//     isAudioPlaying = true
//     // change play icon to pause icon
//     PlayIcon.classList.replace("fa-play", "fa-pause")
//     // fa-solid fa-play
// }

// function pauseAudio()
// {
//     AudioFile.pause()
//     isAudioPlaying = false
//     PlayIcon.classList.replace("fa-pause", "fa-play")
// }

// PlayIcon.addEventListener("click", function()
// {
//     if(isAudioPlaying == true)
//     {
//         pauseAudio()
//     }
//     else
//     {
//         playAudio()
//     }
// })

// AudioFile.addEventListener("timeupdate", function(output)
// {
//     let fetchedTotalDuration = output.srcElement.duration
//     let fetchedCurrentTime = output.srcElement.currentTime

//     let audioConsumedPercentage = fetchedCurrentTime / fetchedTotalDuration * 100

//     ProgressChild.style.width = `${audioConsumedPercentage}%`

//     // fetchedTotalDuration = 193.59
//     // seconds to minutes ==> /60
//     let durationInMinutes = 
//     Math.floor(fetchedTotalDuration / 60)
    

//     let durationInSeconds = 
//     Math.floor(fetchedTotalDuration % 60)

//     AudioDuration.textContent = `${durationInMinutes}:${durationInSeconds}`

//     // ===========================================

//     let currentTimeInMinutes = 
//     Math.floor(fetchedCurrentTime / 60)
    

//     let currentTimeInSeconds = 
//     Math.floor(fetchedCurrentTime % 60)

//     if(currentTimeInSeconds < 10)
//     {
//         currentTimeInSeconds=`0${currentTimeInSeconds}`
//     }

//     CurrentTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`
// })


// // Store the details of remaining songs
// // that should be played by our application

// const songsData = [
//     {
//         image: "IMAGES/image2.jpg",
//         audio: "AUDIOS/audio2.mp3",
//         songName: "ABC Song",
//         singerName: "ABC Singer"
//     },
//     {
//         image: "IMAGES/image3.jpg",
//         audio: "AUDIOS/audio3.mp3",
//         songName: "DEF Song",
//         singerName: "DEF Singer"
//     },
//     {
//         image: "IMAGES/image4.jpg",
//         audio: "AUDIOS/audio4.mp3",
//         songName: "GHI Song",
//         singerName: "GHI Singer"
//     }
// ]

// // data = [ {}, {}, {} ]

// const MyImage = document.querySelector("img")
// const MySongName = document.querySelector("#songname")
// const MySingerName = document.querySelector("#singername")
// const ForwardIcon = document.querySelector("#forward")

// let songIndex = 0
// function loadSong(data){
//     MyImage.src = data[songIndex].image
//     AudioFile.src =  data[songIndex].audio
//     MySongName.textContent = data[songIndex].songName
//     MySingerName.textContent = data[songIndex].singerName
// }

// ForwardIcon.addEventListener("click", function()
// {
//     if(songIndex > songsData.length - 1)
//     {
//         songIndex = 0
//     }
//     // Logic to load the song
//     loadSong(songsData)
//     playAudio()
//     songIndex++
// })


// const ShuffleIcon = document.querySelector("#shuffle")

// let randomSongIndex

// function loadRandomSong(data){
//     MyImage.src = data[randomSongIndex].image
//     AudioFile.src =  data[randomSongIndex].audio
//     MySongName.textContent = data[randomSongIndex].songName
//     MySingerName.textContent = data[randomSongIndex].singerName
// }

// ShuffleIcon.addEventListener("click", function()
// {
//     // I need to generate a random
//     // song index between 0, 1 and 2
//     randomSongIndex = Math.floor(Math.random() * songsData.length)
//     // randomSongIndex = 1
//     loadRandomSong(songsData)
//     playAudio()
// })



// const HeartIcon = document.querySelector("#heart")

// HeartIcon.addEventListener("click", function()
// {
//     HeartIcon.style.color = "red"

//     localStorage.setItem(MySongName.textContent, MySingerName.textContent)
// })


//============================================================================


const PlayIcon = document.querySelector("#play")
const AudioFile = document.querySelector("audio")
const AudioDuration = document.querySelector("#duration")
const CurrentTime = document.querySelector("#currenttime")

const ProgressChild = document.querySelector("#progresschild")

let isAudioPlaying = false

function playAudio()
{
    AudioFile.play()

    isAudioPlaying = true
    // change play icon to pause icon
    PlayIcon.classList.replace("fa-play", "fa-pause")
    // fa-solid fa-play
}

function pauseAudio()
{
    AudioFile.pause()
    isAudioPlaying = false
    PlayIcon.classList.replace("fa-pause", "fa-play")
}

PlayIcon.addEventListener("click", function()
{
    if(isAudioPlaying == true)
    {
        pauseAudio()
    }
    else
    {
        playAudio()
    }
})

AudioFile.addEventListener("timeupdate", function(output)
{
    let fetchedTotalDuration = output.srcElement.duration
    let fetchedCurrentTime = output.srcElement.currentTime

    let audioConsumedPercentage = fetchedCurrentTime / fetchedTotalDuration * 100

    ProgressChild.style.width = `${audioConsumedPercentage}%`

    // fetchedTotalDuration = 193.59
    // seconds to minutes ==> /60
    let durationInMinutes = 
    Math.floor(fetchedTotalDuration / 60)
    

    let durationInSeconds = 
    Math.floor(fetchedTotalDuration % 60)

    AudioDuration.textContent = `${durationInMinutes}:${durationInSeconds}`

    // ===========================================

    let currentTimeInMinutes = 
    Math.floor(fetchedCurrentTime / 60)
    

    let currentTimeInSeconds = 
    Math.floor(fetchedCurrentTime % 60)

    if(currentTimeInSeconds < 10)
    {
        currentTimeInSeconds=`0${currentTimeInSeconds}`
    }

    CurrentTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`
})


// Store the details of remaining songs
// that should be played by our application

const songsData = [
    {
        image: "IMAGES/image2.jpg",
        audio: "AUDIOS/audio2.mp3",
        songName: "ABC Song",
        singerName: "ABC Singer"
    },
    {
        image: "IMAGES/image3.jpg",
        audio: "AUDIOS/audio3.mp3",
        songName: "DEF Song",
        singerName: "DEF Singer"
    },
    {
        image: "IMAGES/image4.jpg",
        audio: "AUDIOS/audio4.mp3",
        songName: "GHI Song",
        singerName: "GHI Singer"
    }
]

// data = [ {}, {}, {} ]

const MyImage = document.querySelector("img")
const MySongName = document.querySelector("#songname")
const MySingerName = document.querySelector("#singername")
const ForwardIcon = document.querySelector("#forward")
const BackwardIcon = document.querySelector("#backward")

let songIndex = 0
function loadSong(data){
    MyImage.src = data[songIndex].image
    AudioFile.src =  data[songIndex].audio
    MySongName.textContent = data[songIndex].songName
    MySingerName.textContent = data[songIndex].singerName
}

ForwardIcon.addEventListener("click", function()
{
    if(songIndex > songsData.length - 1)
    {
        songIndex = 0
    }
    // Logic to load the song
    loadSong(songsData)
    playAudio()
    songIndex++
})
BackwardIcon.addEventListener("click", function()
{
    if(songIndex < 0 )
        {
            songIndex = 2
        }
    if(songIndex > songsData.length - 1){
        songIndex = 0
    }
    // Logic to load the song
    loadSong(songsData)
    playAudio()
    songIndex--
})

const ShuffleIcon = document.querySelector("#shuffle")

let randomSongIndex

function loadRandomSong(data){
    MyImage.src = data[randomSongIndex].image
    AudioFile.src =  data[randomSongIndex].audio
    MySongName.textContent = data[randomSongIndex].songName
    MySingerName.textContent = data[randomSongIndex].singerName
}

ShuffleIcon.addEventListener("click", function()
{
    // I need to generate a random
    // song index between 0, 1 and 2
    randomSongIndex = Math.floor(Math.random() * songsData.length)
    // randomSongIndex = 1
    loadRandomSong(songsData)
    playAudio()
})



const HeartIcon = document.querySelector("#heart")

HeartIcon.addEventListener("click", function()
{
    HeartIcon.style.color = "red"

    localStorage.setItem(MySongName.textContent, MySingerName.textContent)
})