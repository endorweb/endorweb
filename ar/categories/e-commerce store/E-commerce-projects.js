// Projects
const projects = [
    // One-product e-commerce store
    {
        img: "imgs/product-one-page.jpg",
        titel: "متجر إلكتروني لمنتج واحد",
        desc: "موقع تجارة إلكترونية يركز على الجوانب البصرية، مُصمم لإبراز منتج فردي من خلال تخطيط جذاب وتجربة شراء محلية سلسة.",
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
    <a href="${project.link}" target="_blank"><button>عرض توضيحي</button></a>
    </div>
    
    </div>
    ` + container.innerHTML;
});