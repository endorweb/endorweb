// Projects
const projects = [
    // Professor Website

    {
        img: "imgs/teacher-back.jpg",
        titel: "أستاذ لغة إنجليزية - مواقع ويب",
        desc: "موقع أنيق لأستاذ اللغة الإنجليزية، مصمم لإبراز خبرته التعليمية وتسهيل جدولة الدروس الشخصية بأسعار واضحة.",
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
    <a href="${project.link}" target="_blank"><button>عرض توضيحي</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});