// Projects
const projects = [
    // Cars Website

    {
        img: "imgs/cars.jpg",
        titel: "تأجير السيارات",
        desc: "موقع الكتروني عصري لتأجير السيارات مُصمم لعرض مركبات مميزة بصور عالية الجودة، ويسهل عملية الحجز بشفافية كاملة في الأسعار.",
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
    <a href="${project.link}" target="_blank"><button>عرض توضيحي</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});