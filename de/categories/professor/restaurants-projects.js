// Projects
const projects = [
    // Professor Website

    {
        img: "imgs/teacher-back.jpg",
        titel: "Sprachprofessor",
        desc: "Eine professionelle Website für einen Englischprofessor, um Dienstleistungen zu präsentieren und eine einfache Buchung von Live-Unterrichtseinheiten zu ermöglichen.",
        link: "https://endorweb.github.io/language-professor/",
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