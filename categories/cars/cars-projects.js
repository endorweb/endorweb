// Projects
const projects = [
    // Cars Website

    {
        img: "imgs/cars.jpg",
        titel: "Cars Store",
        desc: "A modern car rental website designed to showcase premium vehicles with high-quality imagery and facilitate straightforward booking with transparent pricing.",
        link: "https://endorweb.github.io/cars-rental/",
    },
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
    container.innerHTML = `
    <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
    <img src="${project.img}" alt="${project.titel}">

    <div class="switch-dark">
    <h3>${project.titel}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank"><button>View Demo</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});