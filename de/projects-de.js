const projects = [


    {
        img: "imgs/projects-background/cars.jpg",
        titel: "Autovermietung",
        desc: "Eine moderne Website für Autovermietung, entwickelt um Premiumfahrzeuge mit hochwertigen Bildern zu präsentieren und eine unkomplizierte Buchung mit transparenten Preisen zu ermöglichen.",
        link: "https://endorweb.github.io/cars-rental/",
    },

    {
        img: "imgs/projects-background/teacher-back.jpg",
        titel: "Sprachprofessor",
        desc: "Eine professionelle Website für einen Englischprofessor, um Dienstleistungen zu präsentieren und eine einfache Buchung von Live-Unterrichtseinheiten zu ermöglichen.",
        link: "https://endorweb.github.io/language-professor/",
    },

    {
        img: "imgs/projects-background/candy.jpg",
        titel: "Hausgemachte Desserts zum Verkauf",
        desc: "Eine elegante Website für Desserts, um maßgeschneiderte Süßigkeiten zu präsentieren und einfache Bestellungen für Veranstaltungen und Feiern zu ermöglichen.",
        link: "https://endorweb.github.io/Sweets-sale/",
    },

    {
        img: "imgs/projects-background/product-one-page.jpg",
        titel: "E-Commerce-Store",
        desc: "Eine visuell ausgerichtete E-Commerce-Website, die darauf ausgelegt ist, ein einzelnes Produkt mit einem ansprechenden Layout und nahtlomer lokaler Kaufabwicklung hervorzuheben.",
        link: "https://endorweb.github.io/ecommerce-store/",
    },

    {
        img: "imgs/projects-background/Restaurant.jpg",
        titel: "Restaurant Website",
        desc: "Restaurant-Website, die das Fast-Food-Angebot des Restaurants durch ein sauberes, reaktionsschnelles Design hervorhebt, um lokalen Kunden ein schnelles und nahtloses Surferlebnis zu bieten.",
        link: "https://endorweb.github.io/Restaurant/",
    },

    // Haus
    {
        img: "imgs/projects-background/furniture.jpg",
        titel: "Wohnmöbel Store",
        desc: "Eine moderne Website für einen Möbelshop, die stilvolle Produkte hervorhebt, Sonderangebote betont und ein reibungsloses Surferlebnis für Kunden bietet.",
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
    <h3>${project.titel}</h3 >
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank"> <button>Demo ansehen</button></a>
    </div >

    </div >

    `;


});