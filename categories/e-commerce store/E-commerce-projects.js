// Projects
const projects = [
    // One-product e-commerce store
    {
        img: "imgs/product-one-page.jpg",
        titel: "One-product e-commerce store",
        desc: "A visually-focused e-commerce site designed to highlight a single product with an attractive layout and seamless local purchasing experience.",
        link: "https://endorweb.github.io/ecommerce-store/",
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