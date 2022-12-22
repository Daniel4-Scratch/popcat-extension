var views = chrome.extension.getViews({ type: "popup" });

if(views==""){isPopupOpen=false;}else if(views=="[Window]"){isPopupOpen=false;}else{isPopupOpen=true;}

var currentHash = window.location.hash;
currentHash = currentHash.replace("#", "");

var popcatOpen = "src/open.png"
var popcatClose = "src/close.png"

console.log("Popcat Clicker v0.1.0")
console.log("Made by: github@Daniel4-Scratch")
console.log("Functions: popcatgopop(), resetPops(), setPops(input)")
document.getElementById("body").style.backgroundSize = "60px 60px";

/* Set Local Vars */

let pops = 0;
if (localStorage.getItem("clicks") === null | localStorage.getItem("clicks") === NaN | localStorage.getItem("clicks") === undefined | localStorage.getItem("clicks") === "NaN") {
    localStorage.setItem('clicks', pops);
} else {
    const storedClicks = localStorage.getItem('clicks');
    pops = storedClicks;
    document.getElementById("count").innerText = pops;
}

if (localStorage.getItem("background") === null | localStorage.getItem("background") === NaN | localStorage.getItem("background") === undefined | localStorage.getItem("background") === "NaN") {
    localStorage.setItem('background', 'moving');
    document.getElementById("body").style.background = "url('src/GIF.gif')";
        document.getElementById("body").style.backgroundSize = "60px 60px";
} else {
    const background = localStorage.getItem('background');
    if (background == "moving") {
        document.getElementById("body").style.background = "url('src/GIF.gif')";
    } else if (background == "static") {
        document.getElementById("body").style.background = "url('src/tile.png')";
    }
    document.getElementById("body").style.backgroundSize = "60px 60px";

}


/* Options box */


let isMouseHover = false
if (isPopupOpen == true) {
    document.body.innerHTML += "<a href='"+window.location+"#open' target='blank'><div id='opentab'><img src='/src/external-link-line.png'></div></a>"
} else {
    document.body.style.height = "100%";
    document.body.style.width = "100%";
}

if (currentHash == "open") {
    document.body.style.height = "100%";
    document.body.style.width = "100%";
    document.getElementById('opentab').remove()
}



/* The Actual Popcat Functions */

//play sound
function playPop() {
    setTimeout(() => { popcat.src = popcatClose; }, 100);
    var audio = new Audio('src/sound/pop1.mp3');
    audio.play();
}
//popcatgopop function
function popcatgopop() {
    if (isMouseHover == false) {
    pops = parseInt(pops);
    pops += 1;
    localStorage.setItem('clicks', pops);
    document.getElementById("count").innerHTML = pops;
    const popcat = document.getElementById("popcat");
    popcat.src = popcatOpen;
    playPop(); 
    }
}

function resetPops() {
    localStorage.setItem('clicks', 0);
    location.reload();
}


function setPops(input) {
    var input = prompt("Set the pop count to:", input);
    pops = input;
    localStorage.setItem('clicks', pops);
    document.getElementById("count").innerHTML = pops;
}

//listens for space presses and clicks

document.addEventListener('keydown', function (event) {//listens for space presses
    
    if (event.keyCode == 32) {//space key
        popcatgopop();
        
}


});

document.onclick = function (event) {
    popcatgopop();

}

window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}