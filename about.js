var theme_one = document.getElementById("theme");
var theme_two = document.getElementById("theme_2");
var boldthings = document.querySelectorAll(".boldthings");
var detail__info = document.querySelector('.detail__info');
var about = document.getElementById("about");
var menubar = document.querySelector(".menubar");
var circularProgressContainer = document.querySelector(".circular-progress-container");
var qualification_content_clg = document.querySelectorAll(".qualification_content_clg");
var vertical_line = document.querySelectorAll(".vertical-line");
var qualification_content_year = document.querySelectorAll(".qualification_content_year");
var circle_title = document.querySelector(".circle_title");
var circular_text = document.querySelectorAll(".circular_text")
var savedTheme = localStorage.getItem("theme");
var faBars = document.querySelectorAll('.fa-bars')
var menubar_main = document.querySelector('.menubar_main')
// Theme change event listener
theme_one.addEventListener("click", function () {
    if (circularProgressContainer.classList.contains("dark-theme")) {
        circularProgressContainer.classList.remove("dark-theme");
        vertical_line.forEach(function (element) {
            element.style.backgroundColor = "#fff";
        });
    } else {
        circularProgressContainer.classList.add("dark-theme");
        vertical_line.forEach(function (element) {
            element.style.backgroundColor = "green";
        });
    }
});

// Apply initial theme based on stored preference
if (savedTheme === "dark") {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    detail__info.style.color = "white";
    about.style.color = "white";
    circle_title.style.color = "white";
    menubar_main.style.backgroundColor='black'
    qualification_content_clg.forEach(function (element) {
        element.style.color = "white";
    });
    circular_text.forEach(function (element) {
        element.style.color = "white";
    });
    boldthings.forEach(function (element) {
        element.style.color = "white";
    });
    qualification_content_year.forEach(function (element) {
        element.style.color = "white";
    });
    vertical_line.forEach(function (element) {
        element.style.backgroundColor = "#7D7D7D";
    });
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
} else {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    detail__info.style.color = "#666666";
    about.style.color = "#616262";
    circle_title.style.color = "#606060";
    menubar_main.style.backgroundColor='white'
    qualification_content_clg.forEach(function (element) {
        element.style.color = "#7D7D7D";
    });
    circular_text.forEach(function (element) {
        element.style.color = "#606060";
    });
    boldthings.forEach(function (element) {
        element.style.color = "#666666";
    });
    qualification_content_year.forEach(function (element) {
        element.style.color = "#616262";
    });
    vertical_line.forEach(function (element) {
        element.style.backgroundColor = "#7D7D7D";
    });
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
}

// Theme change event listener
theme_one.addEventListener("click", () => {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    detail__info.style.color = "white";
    about.style.color = "white";
    circle_title.style.color = "white";
    menubar_main.style.backgroundColor='black'
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
    qualification_content_clg.forEach(function (element) {
        element.style.color = "white";
    });
    boldthings.forEach(function (element) {
        element.style.color = "white";
    });
    vertical_line.forEach(function (element) {
        element.style.backgroundColor = "#7D7D7D";
    });
    circular_text.forEach(function (element) {
        element.style.color = "white";
    });
    qualification_content_year.forEach(function (element) {
        element.style.color = "white";
    });
    localStorage.setItem("theme", "dark");
});

theme_two.addEventListener("click", () => {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    detail__info.style.color = "#666666";
    about.style.color = "#616262";
    circle_title.style.color = "#606060";
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
    menubar_main.style.backgroundColor='white'
    qualification_content_clg.forEach(function (element) {
        element.style.color = "#7D7D7D";
    });
    circular_text.forEach(function (element) {
        element.style.color = "#606060";
    });
    boldthings.forEach(function (element) {
        element.style.color = "#666666";
    });
    qualification_content_year.forEach(function (element) {
        element.style.color = "#616262";
    });
    vertical_line.forEach(function (element) {
        element.style.backgroundColor = "#7D7D7D";
    });
    localStorage.setItem("theme", "light");
});

// Circular progress animation
let circularContainers = document.querySelectorAll(".circular_container");
let progressValues = document.querySelectorAll(".progress-value");

let progressStartValues = [0, 0, 0, 0, 0, 0, 0, 0];
let progressEndValues = [90, 80, 50, 20, 45, 20, 60, 70];
let speeds = [50, 50, 50, 50,50,50,50,50];

let intervals = [];

for (let i = 0; i < circularContainers.length; i++) {
    let circularProgress = circularContainers[i].querySelector(".circular-progress");
    let progressValue = progressValues[i];

    intervals.push(setInterval(() => {
        progressStartValues[i]++;
        progressValue.textContent = `${progressStartValues[i]}%`;
        circularProgress.style.background = `conic-gradient(#73b626 ${progressStartValues[i] * 3.6}deg, #ededed 0deg)`;

        if (progressStartValues[i] == progressEndValues[i]) {
            clearInterval(intervals[i]);
        }
    }, speeds[i]));
}
function toggleMenu() {
    var sideNavbar = document.getElementById('side-navbar');
        var menuIcon = document.getElementById('menu-icon');
        
        if (sideNavbar.style.left === '0px') {
            sideNavbar.style.left = '-400px';
            menuIcon.style.display = 'inline'; // Show the menu icon
        } else {
            sideNavbar.style.left = '0px';
            menuIcon.style.display = 'none'; // Hide the menu icon
        }
}