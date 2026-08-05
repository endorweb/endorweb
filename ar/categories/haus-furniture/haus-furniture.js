// Projects
const projects = [
    // Haus
    {
        img: "imgs/furniture.jpg",
        titel: "متجر أثاث منزلي",
        desc: "موقع ويب حديث لمتجر أثاث يعرض المنتجات الأنيقة، ويسلط الضوء على العروض الخاصة، ويقدم تجربة تصفح سلسة للعملاء.",
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
    <a href="${project.link}" target="_blank"><button>عرض توضيحي</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});