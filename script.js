document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example fake authentication
    if (username && password) {

        // Create user object
        const userProfile = {
            username: username,
            favoriteTeam: "",
            favoriteDriver: "",
            createdAt: new Date()
        };

        // Save to localStorage
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        alert("Login successful!");
        window.location.href = "main.html";
    }
});

const user = JSON.parse(localStorage.getItem("userProfile"));

if (user) {
    const favDrivers = user.favoriteDrivers || [];
    const favConstructors = user.favoriteConstructors || [];

    console.log("Favorite Drivers:", favDrivers);
    console.log("Favorite Constructors:", favConstructors);
    console.log(user.username);
}

const usernameInput = document.getElementById("username").value;

const profile = {
    username: usernameInput,
    favoriteTeam: "",
    favoriteDriver: "",
    fantasyPoints: 0,
    savedTracks: []
};


const storedUser = JSON.parse(localStorage.getItem("userProfile"));

const existingUser = JSON.parse(localStorage.getItem("userProfile"));

if (existingUser) {
    existingUser.favoriteDrivers = selectedDrivers;
    existingUser.favoriteConstructors = selectedConstructors;
    existingUser.favoriteTrack = favoriteTrack;

    localStorage.setItem("userProfile", JSON.stringify(existingUser));
}

if (!user || !user.loggedIn) {
    window.location.href = "/login.html";
}

// Filter Points

function applyFilters(){

    const checked = document.querySelectorAll('input[type="checkbox"]:checked');

    let selected = [];

    checked.forEach(box =>{
        selected.push(box.value);
    });

    const items = document.querySelectorAll(".team");

    items.forEach(item =>{

        let show = false;

        selected.forEach(team =>{
            if(item.classList.contains(team)){
                show = true;
            }
        });

        if(selected.length === 0){
            item.style.display = "block";
        }
        else if(show){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });

    alert("Filters have been placed!");

}

// Remove Filters

function undoFilters(){

    // uncheck all checkboxes
    const boxes = document.querySelectorAll('input[type="checkbox"]');
    boxes.forEach(box =>{
        box.checked = false;
    });

    // show all teams again
    const items = document.querySelectorAll(".team");
    items.forEach(item =>{
        item.style.display = "block";
    });

    alert("Filters removed!");

}