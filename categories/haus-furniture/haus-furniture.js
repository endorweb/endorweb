// Projects
const projects = [
    {
        img: "imgs/furniture.jpg",
        titel: "Furniture Store",
        desc: "A modern website for a furniture store designed to showcase stylish products, highlight special offers, and provide a smooth browsing experience for customers.",
        link: "https://endorweb.github.io/Home-furniture/",
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