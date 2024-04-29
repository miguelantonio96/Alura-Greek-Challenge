const products = [
  {
    id: "1-legend",
    name: "ProductXZR",
    price: 60.99,
    img: "img/img-star-Wars/images (3).jpeg",
    category: "Apex Legends",
  },
  {
    id: "2-legend",
    name: "ProductXYZ",
    price: 60,
    img: "img/img-star-Wars/images (2).jpeg",
    category: "Apex Legends",
  },
  {
    id: "3-legend",
    name: "ProductXYZ",
    price: 60,
    img: "img/img-star-Wars/images (4).jpeg",
    category: "Apex Legends",
  },
  {
    id: "4-legend",
    name: "ProductXYZ",
    price: 60,
    img: "img/img-star-Wars/descarga (1).jpeg",
    category: "Apex Legends",
  },
  {
    id: "5-legend",
    name: "ProductXYZ",
    price: 60,
    img: "img/img-star-Wars/descarga.jpeg",
    category: "Apex Legends",
  },
  {
    id: "6-legend",
    name: "ProductXYZ",
    price: 60,
    img: "img/img-star-Wars/images (1).jpeg",
    category: "Apex Legends",
  },
  {
    id: "1-console",
    name: "Control XYZ",
    price: 60,
    img: "img/img-consoles/console-item-ID1.png",
    category: "Console",
  },
  {
    id: "2-console",
    name: "Control y consola XYZ",
    price: 60,
    img: "img/img-consoles/console-item-ID2.png",
    category: "Console",
  },
  {
    id: "3-console",
    name: "Consola XYZ",
    price: 60,
    img: "img/img-consoles/console-item-ID3.png",
    category: "Console",
  },
  {
    id: "4-console",
    name: "Control XYZ",
    price: 60,
    img: "img/img-consoles/console-item-ID4.png",
    category: "Console",
  },
  {
    id: "5-console",
    name: "Consola XYZ",
    price: 60,
    img: "img/img-consoles/console-item-ID5.png",
    category: "Console",
  },
  {
    id: "6-console",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-consoles/console-item-ID6.png",
    category: "Console",
  },
  {
    id: "1-diversity",
    name: "Control XYZ",
    price: 60,
    img: "img/img-star-Wars/star-item-ID1.png",
    category: "Diversity",
  },
  {
    id: "2-diversity",
    name: "Control y consola XYZ",
    price: 60,
    img: "img/img-star-Wars/star-item-ID2.png",
    category: "Diversity",
  },
  {
    id: "3-diversity",
    name: "Consola XYZ",
    price: 60,
    img: "img/img-star-Wars/star-item-ID3.png",
    category: "Diversity",
  },
  {
    id: "4-diversity",
    name: "Control XYZ",
    price: 60,
    img: "img/img-star-Wars/star-item-ID4.png",
    category: "Diversity",
  },
  {
    id: "5-diversity",
    name: "Consola XYZ",
    price: 60,
    img: "img/img-star-Wars/star-item-ID5.png",
    category: "Diversity",
  },
  {
    id: "6-diversity",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-star-Wars/star-item-ID6.png",
    category: "Diversity",
  },
  {
    id: "1-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-trending/games-trending.jpeg",
    category: "Trending",
  },
  {
    id: "2-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-trending/handheld-gaming-console.jpeg",
    category: "Trending",
  },
  {
    id: "3-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-trending/ps5-restock.jpeg",
    category: "Trending",
  },
  {
    id: "4-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/img-trending/games-xbox.jpg",
    category: "Trending",
  },
  {
    id: "5-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/WhatsApp Image 2024-03-17 at 12.41.51_b506206c.jpg",
    category: "Trending",
  },
  {
    id: "6-Shoes",
    name: "Game Boy Color",
    price: 60,
    img: "img/WhatsApp Image 2024-03-17 at 12.41.51_19b20419.jpg",
    category: "Trending",
  },
];

const categories = [];

products.forEach((product) => {
  if (!categories?.includes(product.category)) {
    categories.push(product.category);
  }
});

categories.forEach((category) => {
  const ProductsList = products.filter((product) => {
    return product.category === category;
  });
  createCategoriesHTML(category, ProductsList);
});

function createCategoriesHTML(category, ProductsList) {
  const section = document.createElement("section");
  section.classList.add("section-container");
  section.classList.add("star-item");

  section.innerHTML = `
        <div class="title-and-See-all">
          <h1>${category}</h1>
          <p><a href="">See All<img src="img/img-icon/flecha- see all.png" alt=""></a></p>
        </div>
        <div class="card-container">
        ${createCardElements(ProductsList)}
        </div>
  `;
  const container = document.getElementById("products-container");
  container.appendChild(section);
}

function createCardElements(products) {
  const addProductList = products.map((product) => {
    return `
      <div class="card-items">
      <img class="card-img-top" src="${product.img}" alt="imagenes">
      <div class="card-body">
        <h4 class="card-title">${product.name}</h4>
        <p class="card-text">${`$${product.price.toFixed(2)}`}</p>
        <a href=""><p>See product</p></a>
      </div>
      </div>
      `;
  });
  return addProductList.join("");
}

// Scroll-Header background \\
window.addEventListener("scroll", function () {
  var header = document.querySelector(".sec-header-container-1");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Search function \\

const searchBar = document.querySelector("#seach-bar");

const lupaIcon = document.getElementById("icon-lupa");

lupaIcon.addEventListener("click", (e) => {
  if (lupaIcon) {
    searchBar.focus();
  }
});

function finderInquiry() {
  const currentProductsList = products.filter((product) => {
    return product?.name
      ?.toLowerCase()
      ?.includes(searchBar?.value?.toLowerCase());
  });
  createFoundElements(currentProductsList);
}

function createFoundElements(products) {
  const resultBar = document.querySelector(".result-search-bar");

  const productJoin = products.map((product) => {
    return `
    <div class="card-items">
    <img class="card-img-top" src="${product.img}" alt="${"imagenes"}">
    <div class="card-body">
    <h4 class="card-title">${product.name}</h4>
    <p class="card-text">${`$${product.price.toFixed(2)}`}</p>
    <a href=""><p>See product</p></a>
    </div>
    </div>
    `;
  });

  resultBar.innerHTML = productJoin.join("");

  if (searchBar.value === "") {
    resultBar.innerHTML = "";
  }
}

function clearSearch() {
  document.querySelector("#seach-bar").value = "";

  if (searchBar.value === "") {
    document.querySelector(".result-search-bar").innerHTML = "";
  }
}

searchBar.addEventListener("keypress", () => finderInquiry());

searchBar.addEventListener("blur", () => clearSearch());
