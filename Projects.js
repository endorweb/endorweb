// Projects
const projects = [

    {
        img: "imgs/projects-background/cars.jpg",
        titel: "Cars Store",
        desc: "A modern car rental website designed to showcase premium vehicles with high-quality imagery and facilitate straightforward booking with transparent pricing.",
        link: "https://endorweb.github.io/cars-rental/",
    },

    {
        img: "imgs/projects-background/teacher-back.jpg",
        titel: "Professor Website",
        desc: "A professional website for an English professor designed to highlight teaching expertise and simplify scheduling of personalized lessons with clear pricing.",
        link: "https://endorweb.github.io/language-professor/",
    },

    {
        img: "imgs/projects-background/candy.jpg",
        titel: "Candy Store",
        desc: "An elegant desserts website designed to present handcrafted sweets with stunning visuals and streamline ordering for special occasions and festive events.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/projects-background/product-one-page.jpg",
        titel: "E-commerce store",
        desc: "A visually-focused e-commerce site designed to highlight a single product with an attractive layout and seamless local purchasing experience.",
        link: "https://endorweb.github.io/ecommerce-store/",
    },

    {
        img: "imgs/projects-background/Restaurant.jpg",
        titel: "Restaurant Website",
        desc: "Restaurant Website, highlighting the restaurant's fast-food offerings through a clean, responsive design to deliver a quick and seamless browsing experience for local customers.",
        link: "https://endorweb.github.io/Restaurant/",
    },

    // Haus
    {
        img: "imgs/projects-background/furniture.jpg",
        titel: "Furniture Store",
        desc: "A modern website for a furniture store designed to showcase stylish products, highlight special offers, and provide a smooth browsing experience for customers.",
        link: "https://endorweb.github.io/Home-furniture/",
    },

];

// ✅ نحافظ فقط على آخر 5 مشاريع
const latestProjects = projects.slice(-5).reverse();

const container = document.getElementById("projectsContainer");
container.innerHTML = ""; // نضمن البداية الفارغة

latestProjects.forEach(project => {
    container.innerHTML += `
    <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
    <img src="${project.img}" alt="${project.titel}">

    <div class="switch-dark">
    <h3>${project.titel}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank"><button>Live Demo</button></a>
    </div>
    
    </div>
    `;
});