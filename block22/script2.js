// Create a website that allows users to create, 
// read, update, and delete data from a database

//Use Api routes for song, artist, genre : [method, Route, Url Para, body param and decription]

//Create html file with a `div` with id of "new-song-form" and another div with id of "song-container"

//Create a script.js file wtih an async function called `iniit() 
//Then call it call it at the bottom
let baseUrl = "https://fsa-async-await.herokuapp.com/"

    //Write a function called `fetchAllSongs` to fetch all songs fro mserver and return them as JSON
const fetchAllSongs = async () => {
    try{ 
        const res = await fetch (`${baseUrl}api/guided-practice/songs`);
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err);
    }
};

function renderSong(song) {
    // make html elemets to represent the song ans return
    //Set div to html
    const songElement = document.createElement('div');
    songElement.innerHTML = `<h1>${song.title}</h1><p>${song.artist}</p>`;
    return songElement;
}

//Write a function called `renderAllsongs` that will store an array of (songs)
//Render them to the DOM
function renderAllsongs(songs) {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML = '';
    songs.forEach((song) => {
        const songElement = renderSong(song);
        songContainer.appendChild(songElement);
    });
    
}
async function init() {
        const songs = await fetchAllSongs();
        renderSongs(songs);
}


//Call the `renderSongs` function inside the `init` function to pass array of songs 
