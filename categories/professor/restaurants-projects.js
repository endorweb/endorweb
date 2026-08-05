// Projects
const projects = [
    // Professor Website

    {
        img: "imgs/teacher-back.jpg",
        titel: "Professor Website",
        desc: "A professional website for an English professor designed to highlight teaching expertise and simplify scheduling of personalized lessons with clear pricing.",
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