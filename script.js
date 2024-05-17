var theme_one = document.getElementById("theme");
var theme_two = document.getElementById("theme_2");
var webdevelop = document.querySelector(".info__name > h2")
var intro = document.querySelector(".intro")
var abt_me = document.querySelector('.abt_me')
var abt_me_p = document.querySelector('.abt_me > p')
var abt_me = document.querySelector(".abt_me")
var intro_media = document.querySelectorAll(".intro_media")
var faBars = document.querySelectorAll('.fa-bars')
var menubar_main = document.querySelector('.menubar_main')
abt_me.addEventListener("click", function () {
    window.location.href = "about.html";
});

// Check if the theme preference is stored in localStorage
var savedTheme = localStorage.getItem("theme");

// Set the initial theme based on the stored preference
if (savedTheme === "dark") {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    webdevelop.style.color = 'white';
    intro.style.color = 'white';
    abt_me_p.style.color = "white";
    abt_me.style.backgroundColor = 'black';
    // intro_media.style.color='white';
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
    menubar_main.style.backgroundColor='black'
} else {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    webdevelop.style.color = '#666666';
    intro.style.color = '#666666';
    abt_me_p.style.color = "#666666";
    abt_me.style.backgroundColor = 'white';
    // intro_media.style.color='black';
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
    menubar_main.style.backgroundColor='white'
}

// Theme change event listener
theme_one.addEventListener("click", () => {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    webdevelop.style.color = 'white';
    intro.style.color = 'white';
    abt_me_p.style.color = "white";
    abt_me.style.backgroundColor = 'black';
    // intro_media.style.color='white';
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
    menubar_main.style.backgroundColor='black'
    // Store the theme preference in localStorage
    localStorage.setItem("theme", "dark");
});

theme_two.addEventListener("click", () => {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    webdevelop.style.color = '#666666';
    intro.style.color = '#666666';
    abt_me_p.style.color = "#666666";
    abt_me.style.backgroundColor = 'white';
    // intro_media.style.color='black';
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
    menubar_main.style.backgroundColor='white'
    // Store the theme preference in localStorage
    localStorage.setItem("theme", "light");
});


let intro_screen = document.querySelector(".intro_screen")
let logo = document.querySelector(".logo_header")
let logospan = document.querySelectorAll(".logo")


window.addEventListener('DOMContentLoaded', (event) => {

    logospan.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('active');
        }, (idx + 1) * 400)
    });

    setTimeout(() => {
        logospan.forEach((span, idx) => {

            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');

            }, (idx + 1) * 50)
        })
        document.querySelector('.home_page').style.display = 'block';
    }, 2000)


})

// document.getElementById("menu-icon").addEventListener("click", function() {
//     document.getElementById("side-navbar").style.width = "250px";
// });

// document.querySelector(".close-btn").addEventListener("click", function() {
//     document.getElementById("side-navbar").style.width = "0";
// });


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
