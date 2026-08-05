// Projects
const projects = [
    // Restaurant Website

    {
        img: "../../imgs/projects-background/candy.jpg",
        titel: "حلويات منزلية للبيع",
        desc: "موقع الكتروني لعرض الحلويات المخصصة وتمكين طلبات بسيطة للمناسبات والاحتفالات.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/Restaurant.jpg",
        titel: "موقع الكتروني لمطعم",
        desc: "موقع ويب لمطعم يسلط الضوء على عروض الوجبات السريعة التي يقدمها المطعم بتصميم نظيف وسريع الاستجابة لتزويد العملاء المحليين بتجربة تصفح سريعة وسلسة.",
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
    <a href="${project.link}" target="_blank"><button>عرض توضيحي</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});