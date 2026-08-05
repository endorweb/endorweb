// Projects
const projects = [
    // Cars Website

    {
        img: "imgs/cars.jpg",
        titel: "Autovermietung",
        desc: "Eine moderne Website für Autovermietung, entwickelt um Premiumfahrzeuge mit hochwertigen Bildern zu präsentieren und eine unkomplizierte Buchung mit transparenten Preisen zu ermöglichen.",
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