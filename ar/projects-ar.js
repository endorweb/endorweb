const projects = [

    // Restaurant Website

    {
        img: "imgs/projects-background/cars.jpg",
        titel: "تأجير السيارات",
        desc: "موقع الكتروني عصري لتأجير السيارات مُصمم لعرض مركبات مميزة بصور عالية الجودة، ويسهل عملية الحجز بشفافية كاملة في الأسعار.",
        link: "https://endorweb.github.io/cars-rental/",
    },

    {
        img: "imgs/projects-background/teacher-back.jpg",
        titel: "أستاذ لغة إنجليزية - مواقع ويب",
        desc: "موقع أنيق لأستاذ اللغة الإنجليزية، مصمم لإبراز خبرته التعليمية وتسهيل جدولة الدروس الشخصية بأسعار واضحة.",
        link: "https://endorweb.github.io/language-professor/",
    },

    {
        img: "imgs/projects-background/product-one-page.jpg",
        titel: "متجر إلكتروني لمنتج واحد",
        desc: "موقع تجارة إلكترونية يركز على الجوانب البصرية، مُصمم لإبراز منتج فردي من خلال تخطيط جذاب وتجربة شراء محلية سلسة.",
        link: "https://endorweb.github.io/ecommerce-store/",
    },

    {
        img: "imgs/projects-background/candy.jpg",
        titel: "حلويات منزلية للبيع",
        desc: "موقع الكتروني لعرض الحلويات المخصصة وتمكين طلبات بسيطة للمناسبات والاحتفالات.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/projects-background/Restaurant.jpg",
        titel: "موقع الكتروني لمطعم",
        desc: "موقع ويب لمطعم يسلط الضوء على عروض الوجبات السريعة التي يقدمها المطعم بتصميم نظيف وسريع الاستجابة لتزويد العملاء المحليين بتجربة تصفح سريعة وسلسة.",
        link: "https://endorweb.github.io/Restaurant/",
    },

    // Haus
    {
        img: "imgs/projects-background/furniture.jpg",
        titel: "متجر أثاث منزلي",
        desc: "موقع ويب حديث لمتجر أثاث يعرض المنتجات الأنيقة، ويسلط الضوء على العروض الخاصة، ويقدم تجربة تصفح سلسة للعملاء.",
        link: "https://endorweb.github.io/Home-furniture/",
    },



];

const latestProjects = projects.slice(-5).reverse();


const container = document.getElementById("projectsContainer");
container.innerHTML = ""; // نضمن البداية الفارغة


latestProjects.forEach(project => {
    container.innerHTML += `
    <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
    <img src="${project.img}" alt="${project.titel}">

    <div class="switch-dark">
    <h3>${project.titel}</h3 >
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank"> <button>عرض توضيحي</button></a>
    </div >

    </div >

    `;


});