var theme_one = document.getElementById("theme");
var theme_two = document.getElementById("theme_2");
var about = document.getElementById("about")
// Check if the theme preference is stored in localStorage
var savedTheme = localStorage.getItem("theme");
var fa_x = document.querySelector(".fa-x")
var project_section_container = document.querySelector(".project_section_container")
var faBars = document.querySelectorAll('.fa-bars')
var menubar_main = document.querySelector('.menubar_main')
fa_x.addEventListener('click', () => {
    project_section_container.style.display = "none"
    fa_x.style.display = 'none'
})

// Set the initial theme based on the stored preference
if (savedTheme === "dark") {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    about.style.color = "white";
    fa_x.style.color = "white"
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
    menubar_main.style.backgroundColor='black'
} else {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    about.style.color = "#616262"
    fa_x.style.color = "black"
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
    menubar_main.style.backgroundColor='white'
}

// Theme change event listener
theme_one.addEventListener("click", () => {
    theme_two.style.display = "block";
    theme_one.style.display = "none";
    document.body.style.backgroundColor = "black";
    about.style.color = "white"
    fa_x.style.color = "white"
    faBars.forEach(bar => bar.style.color = 'white');
    faBars.forEach(bar => bar.style.backgroundColor = 'black');
    // Store the theme preference in localStorage
    localStorage.setItem("theme", "dark");
    menubar_main.style.backgroundColor='black'
});

theme_two.addEventListener("click", () => {
    theme_two.style.display = "none";
    theme_one.style.display = "block";
    document.body.style.backgroundColor = "white";
    about.style.color = "#616262"
    fa_x.style.color = "black"
    faBars.forEach(bar => bar.style.backgroundColor = 'white');
    faBars.forEach(bar => bar.style.color = 'black');
    menubar_main.style.backgroundColor='white'
    // Store the theme preference in localStorage
    localStorage.setItem("theme", "light");
});

// function showProject(image, title, description, link) {
//     fa_x.style.display = 'block'
//     // Retrieve the project section container
//     var projectContainer = document.querySelector('.project_section_container');
//     // Retrieve the clicked image source
//     var clickedImageSrc = image.querySelector('img').src;

//     // Replace content inside project section container
//     projectContainer.innerHTML = `
//     <h1>${title}</h1>
//     <div style="display: flex; gap: 30px;">
//         <div class="project_row">
//             <div class="project_content">
//                 <i class="fa-regular fa-file"></i>
//                 Project: Website
//             </div>
//             <div class="project_content">
//                 <i class="fa-solid fa-code"></i>
//                 Languages: HTML, CSS, Javascript
//             </div>
//         </div>

//         <div class="project_row">
//             <div class="project_content">
//                 <i class="fa-solid fa-link"></i>
//                 Preview: <a href="${link}" target="_blank">${link}</a>
//             </div>
//         </div>
//     </div>
//     <img src="${clickedImageSrc}" alt="">
// `;
//     // Show project section container
//     projectContainer.style.display = 'block';
// }

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
function showProject(image, title, description, link) {
    // Retrieve the clicked image source
    var clickedImageSrc = image.querySelector('img').src;

    // Construct URL with query parameters
    var projectUrl = `project.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&link=${encodeURIComponent(link)}&imgSrc=${encodeURIComponent(clickedImageSrc)}`;

    // Navigate to the new project details page
    window.location.href = projectUrl;
}