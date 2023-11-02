const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2308-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


let playerList = [];
/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const res = await fetch(`${APIURL}/players`);
        const players = await res.json();
        console.log("players", players);
        return players;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};
console.log(fetchAllPlayers);//Call function Here


//Call function in init
const fetchSinglePlayer = async (playerId) => {
    try {
        const res = await fetch(`${APIURL}/players/${playerId}`);
        const player = await res.json();
        console.log("player", player);
        return player;

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const res = await fetch(`${APIURL}/players`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Rufus',
                breed: 'Irish Setter',
            }),
        }
    );
    const result = await res.json();
    console.log(result);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    fetch(`${APIURL}/api/${cohortName}/players` , {
        method: 'DELETE',
    });
    try {
        const res = await fetch(`${APIURL}/api/${cohortName}/players/1`, 
        {
            method: 'DELETE',
         }
        );
        const result = await res.json();
        console.log(result);

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * See Details Button
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {
        playerContainer.innerHTML= "";
        playerList.forEach((players) => {
            const playerContainerHTML = document.createElement("div");
            playerContainerHTML.classList.add("player");
            playerContainerHTML.innerHTML = `
            <h2>${players,name}</h2>`;
        });
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(playersList);

    renderNewPlayerForm();
}

init();