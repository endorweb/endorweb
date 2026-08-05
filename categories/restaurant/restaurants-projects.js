// Projects
const projects = [
    // Restaurant Website

    {
        img: "../../imgs/projects-background/candy.jpg",
        titel: "Candy Store",
        desc: "An elegant desserts website designed to present handcrafted sweets with stunning visuals and streamline ordering for special occasions and festive events.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/Restaurant.jpg",
        titel: "Restaurant Website",
        desc: "Restaurant Website, highlighting the restaurant's fast-food offerings through a clean, responsive design to deliver a quick and seamless browsing experience for local customers.",
        link: "https://endorweb.github.io/Restaurant/",
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