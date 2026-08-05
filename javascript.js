// --------------- greeting ---------------
let greetingEleemnt = document.getElementById("greeting");

let now = new Date();
let today = now.toDateString();
let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit !== today) {
    greetingEleemnt.textContent = "💜 Thank You For Visiting Endorweb 💚​";
    greetingEleemnt.style.display = "block" // for background-color: rgb(100, 60, 161);
    localStorage.setItem("lastVisit", today);
} else {
    greetingEleemnt.textContent = "";
}

setTimeout(() => {
    greetingEleemnt.classList.add("fade-out");
}, 3000);

setTimeout(function () {
    greetingEleemnt.style.display = "none"
}, 5000);

// localStorage.clear();

// --------------- Skills ---------------
let skillsVisible = false;

let btn = document.getElementById("toggleSkills");
let skillsElement = document.getElementById("skills");
skillsElement.style.display = "none"


btn.onclick = function () {
    if (skillsVisible === false) {
        skillsElement.style.display = "block";
        skillsElement.classList.add("show")
        btn.textContent = "Hide My Skills"
        skillsVisible = true;

    } else {
        skillsElement.style.display = "none";
        btn.textContent = "See My Skills";
        skillsVisible = false;
    }
}


// --------------- Dark Mode ---------------
let jein = false;

let darkBtn = document.getElementById("btn");
let content = document.getElementById("AllContent");
darkBtn.textContent = "🌚";

darkBtn.onclick = function () {
    if (jein === false) {
        content.style.background = "rgba(52, 47, 59, 1)";
        content.style.color = "white";
        darkBtn.textContent = "☀️";
        darkBtn.style.background = "white";

        jein = true;

        // تحديث لكل العناصر ديال switch-dark
        document.querySelectorAll(".switch-dark").forEach((item) => {
            item.style.color = "white";
        });

    } else {
        content.style.background = "white";
        content.style.color = "black";
        darkBtn.textContent = "🌚";
        darkBtn.style.background = "rgb(48, 43, 52)";
        jein = false;

        // تحديث لكل العناصر ديال switch-dark
        document.querySelectorAll(".switch-dark").forEach((item) => {
            item.style.color = "black";
        });
    }
};




