const phoneData = [
  {
    id: 1,
    imageUrl: "https://viktormob.rs/wp-content/uploads/2022/03/s22.jpg",
    brand: "Samsung",
    model: "Galaxy S22",
    price: 860,
  },
  {
    id: 2,
    imageUrl:
      "https://img.gigatron.rs/img/products/large/image61fbf9b1ac409.jpg",
    brand: "Samsung",
    model: "Galaxy S22 Plus",
    price: 1110,
  },
  {
    id: 3,
    imageUrl:
      "https://img.gigatron.rs/img/products/large/image6200e84ee6879.png",
    brand: "Samsung",
    model: "Galaxy S22 Ultra",
    price: 1520,
  },
  {
    id: 4,
    imageUrl:
      "https://img.gigatron.rs/img/products/large/image6172c94687cf4.png",
    brand: "Samsung",
    model: "Galaxy S21",
    price: 800,
  },
  {
    id: 5,
    imageUrl:
      "https://www.mobilplanet.net/wp-content/uploads/2023/02/samsung-sm-s911b-galaxy-s23-dual-sim-8-256gb-negro-fantasma.jpg",
    brand: "Samsung",
    model: "Galaxy S23",
    price: 1150,
  },
  {
    id: 6,
    imageUrl: "https://www.tehnomedia.rs/image/95000.jpg?tip=webp&tip_slike=0",
    brand: "Samsung",
    model: "Galaxy S23 Plus",
    price: 1500,
  },
  {
    id: 7,
    imageUrl:
      "https://www.vipershop.rs/wp-content/uploads/2023/04/s23-ultra.jpg",
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    price: 1800,
  },
  {
    id: 8,
    imageUrl:
      "https://img.ep-cdn.com/i/500/500/or/orwybcvlzjihexdtnfpm/samsung-galaxy-a13-4gb-128gb-plavi-mobilni-telefon-cene.jpg",
    brand: "Samsung",
    model: "Galaxy A13",
    price: 200,
  },
  {
    id: 9,
    imageUrl:
      "https://www.mobilplanet.net/wp-content/uploads/2022/05/samsung-galaxy-a53-a536-5g-6gb-128gb-dual-sim-azul.png",
    brand: "Samsung",
    model: "Galaxy A53",
    price: 550,
  },
  {
    id: 10,
    imageUrl:
      "https://img.gigatron.rs/img/products/large/image631f01335fc41.png",
    brand: "Iphone",
    model: "14",
    price: 1240,
  },
  {
    id: 11,
    imageUrl:
      "https://img.gigatron.rs/img/products/medium/image63e0eb7adfb28.webp",
    brand: "Iphone",
    model: "14 Pro Max",
    price: 1650,
  },
  {
    id: 12,
    imageUrl:
      "https://img.gigatron.rs/img/products/large/aadd771539debc541c48a84fe1bc51ac.png",
    brand: "Iphone",
    model: "14 Pro",
    price: 1500,
  },
  {
    id: 13,
    imageUrl:
      "https://www.ctshop.rs/img/products/2021-10-21/apple-iphone-13-4-128-beli-mobilni-6-1-quot-hexa-core-apple-a15-bionic-4gb-128gb-12mpx-12mpx_ZZgWr_4.jpg",
    brand: "Iphone",
    model: "13",
    price: 1060,
  },
  {
    id: 14,
    imageUrl:
      "https://img.gigatron.rs/img/products/medium/image63e256759ccf9.webp",
    brand: "Iphone",
    model: "13 Mini",
    price: 800,
  },
  {
    id: 15,
    imageUrl:
      "https://img.gigatron.rs/img/products/medium/image63e4ea62ccdcc.webp",
    brand: "Iphone",
    model: "12",
    price: 900,
  },
  {
    id: 16,
    imageUrl:
      "https://img.gigatron.rs/img/products/medium/image6231d49a75557.webp",
    brand: "Iphone",
    model: "SE",
    price: 800,
  },
  {
    id: 17,
    imageUrl: "https://www.tehnomedia.rs/image/71349.jpg?tip=webp&tip_slike=0",
    brand: "Iphone",
    model: "11",
    price: 650,
  },
  {
    id: 18,
    imageUrl:
      "https://www.ctshop.rs/img/products/2021-10-21/apple-iphone-13-4-128-beli-mobilni-6-1-quot-hexa-core-apple-a15-bionic-4gb-128gb-12mpx-12mpx_ZZgWr_4.jpg",
    brand: "Iphone",
    model: "13",
    price: 1060,
  },
  {
    id: 19,
    imageUrl:
      "https://www.ctshop.rs/img/products/2021-10-21/apple-iphone-13-4-128-beli-mobilni-6-1-quot-hexa-core-apple-a15-bionic-4gb-128gb-12mpx-12mpx_ZZgWr_4.jpg",
    brand: "Iphone",
    model: "13",
    price: 1060,
  },
  {
    id: 20,
    imageUrl:
      "https://www.ctshop.rs/img/products/2021-10-21/apple-iphone-13-4-128-beli-mobilni-6-1-quot-hexa-core-apple-a15-bionic-4gb-128gb-12mpx-12mpx_ZZgWr_4.jpg",
    brand: "Iphone",
    model: "13",
    price: 1060,
  },
];

// Load devices on page load
window.onload = (event) => {
  renderDevices([...phoneData].slice(0, itemsPerPage));
  renderPagination(phoneData);
};

//  Pagination items per page
const itemsPerPage = 8;

// Reset Devices page
function resetDevices() {
  const devices = document.getElementById("devices");
  devices.innerHTML = "";
}

// Render devices
function renderDevices(phones) {
  const row = document.getElementById("devices");

  //  Render Devices
  for (let i = 0; i < phones.length; i++) {
    const col = document.createElement("div");
    col.setAttribute("id", "phones-col");
    col.classList.add("col-xl-3", "col-md-6", "columns");
    col.appendChild(generateCard(phones[i]));
    row.appendChild(col);
  }
}

// Generate cards
function generateCard(phoneInfo) {
  const card = document.createElement("div");
  card.classList.add("card", "align-items-center");
  card.setAttribute("id", phoneInfo.id);

  const img = document.createElement("img");
  img.classList.add("card-img-top", "text-center", "mt-5");
  img.src = phoneInfo.imageUrl;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center");
  const brand = document.createTextNode(phoneInfo.brand);
  cardTitle.appendChild(brand);
  cardBody.appendChild(cardTitle);

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.classList.add("card-subtitle", "mb-2", "text-center");
  const model = document.createTextNode(phoneInfo.model);
  cardSubtitle.appendChild(model);
  cardBody.appendChild(cardSubtitle);

  const cardText = document.createElement("p");
  cardText.classList.add("card-text", "text-center");
  const price = document.createTextNode(phoneInfo.price);
  cardText.appendChild(price);
  cardBody.appendChild(cardText);

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "mb-3", "add-to-cart");
  button.innerText = "Add To Cart";
  button.addEventListener("click", addToCart);

  cardBody.appendChild(button);

  card.appendChild(cardBody);

  return card;
}

// Pagination
function goToPage(e, phoneArray) {
  resetDevices();
  const pages = document.querySelectorAll(".page-item");
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");
  if (e === 1) {
    prevPage.classList.add("disable");
  } else {
    prevPage.classList.remove("disable");
  }
  if (e === numberOfPages) {
    nextPage.classList.add("disable");
  } else {
    nextPage.classList.remove("disable");
  }
  resetActive();
  pages[e - 1].classList.add("active", "disable");

  // get current page
  // na osnovu highlighet element
  // iz phoneData izvadi samo elemente za tu stranicu
  // 30 elementa gde su ti 10 po strani, to znaci da prva strana prikazuje 1-10, druga 2-20, treca 3-30

  const newPhoneData = phoneArray;

  // console.log(newPhoneData.slice(itemsPerPage * (e - 1), itemsPerPage * e));

  renderDevices(newPhoneData.slice(itemsPerPage * (e - 1), itemsPerPage * e));
}

// Calculate number of pages
function calculatePagination(phoneArray) {
  return (numberOfPages = Math.ceil(phoneArray.length / itemsPerPage));
}

// Render pagination
function renderPagination(phoneArray) {
  var numberOfPages = calculatePagination(phoneArray);
  const paginationElement = document.getElementById("paginator");
  if (numberOfPages > 1) {
    const prevPage = document.createElement("li");
    prevPage.setAttribute("id", "prev-page");
    prevPage.style.cursor = "pointer";
    const prevPageSpan = document.createElement("span");
    prevPageSpan.classList.add("page-link");
    prevPageSpan.innerHTML = "&laquo";
    prevPage.appendChild(prevPageSpan);
    paginationElement.appendChild(prevPage);
    prevPage.classList.add("disable");
    prevPage.addEventListener("click", (e) =>
      goToPage(getActivePage(), phoneArray)
    );
  }

  if (numberOfPages > 0) {
    for (let index = 0; index < numberOfPages; index++) {
      const page = document.createElement("li");
      page.addEventListener("click", (e) => goToPage(index + 1, phoneArray));
      page.classList.add("page-item");
      page.style.cursor = "pointer";

      const pageNumSpan = document.createElement("span");
      pageNumSpan.classList.add("page-link");
      pageNumSpan.innerHTML = index + 1;

      page.appendChild(pageNumSpan);
      paginationElement.appendChild(page);
    }
    const pages = document.querySelectorAll(".page-item");
    pages[0].classList.add("active", "disable");
  }

  if (numberOfPages > 1) {
    const nextPage = document.createElement("li");
    nextPage.setAttribute("id", "next-page");
    nextPage.style.cursor = "pointer";
    const nextPageSpan = document.createElement("span");
    nextPageSpan.classList.add("page-link");
    nextPageSpan.innerHTML = "&raquo";
    nextPage.appendChild(nextPageSpan);
    paginationElement.appendChild(nextPage);
    nextPage.addEventListener("click", (e) =>
      goToPage(getActivePage() + 2, phoneArray)
    );
  }
}

// Get current page
function getActivePage() {
  let pageNum;
  const pages = document.querySelectorAll(".page-item");
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains("active")) {
      pageNum = i;
    }
  }
  return pageNum;
}

// Reset pagination
function resetPagination() {
  const paginationElement = document.getElementById("paginator");
  paginationElement.innerHTML = "";
}

// Reset active page
function resetActive() {
  const pages = document.querySelectorAll(".page-item");
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active", "disable");
  }
}

// Open/Close Filter menu
const filterButton = document.getElementById("filter-btn");
const filterMenu = document.getElementById("filter-menu");

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("hide");
});

// Filter
const searchBar = document.getElementById("search");
const brandsSelect = document.getElementById("brands");
const priceSelect = document.getElementById("price");

searchBar.addEventListener("input", filter);
brandsSelect.addEventListener("change", filter);
priceSelect.addEventListener("change", filter);

function filter() {
  resetPagination();
  const newPhones = [];
  const filterMenu = document.getElementById("filter-menu");
  let searchBarValue = searchBar.value;
  let brandsValue = brandsSelect.value;
  let priceValue = Number(priceSelect.value);
  for (let i = 0; i < phoneData.length; i++) {
    let phone = `${phoneData[i].brand} ${phoneData[i].model}`;
    let searched = phone.toLowerCase().includes(searchBarValue.toLowerCase());
    let selected = phoneData[i].brand.toLowerCase().includes(brandsValue);
    let inPriceRange =
      (phoneData[i].price < priceValue) &
        (phoneData[i].price >= priceValue - 499) || priceValue === 0;
    if (searched && selected && inPriceRange) {
      newPhones.push(phoneData[i]);
    }
    filterMenu.classList.add("hide");
  }
  resetDevices();
  renderPagination(newPhones);
  renderDevices(newPhones.slice(0, itemsPerPage));
}

// Create array of brands
const brandsArray = createArrayOfBrands();

for (let i = 0; i < brandsArray.length; i++) {
  const brandsSelect = document.getElementById("brands");
  const newOption = document.createElement("option");

  newOption.innerText = brandsArray[i];
  newOption.setAttribute("value", brandsArray[i].toLowerCase());
  brandsSelect.appendChild(newOption);
}

// Dynamically add brands to select
function createArrayOfBrands() {
  let brands = [];
  let i = 0;
  phoneData.map((item) => {
    if (!brands.includes(item.brand)) {
      brands[i] = item.brand;
      i += 1;
    }
  });
  return brands;
}

// Add to cart
function getDeviceById(id) {
  return phoneData[id - 1];
}

function addToCart(e) {
  const total = document.getElementById("total");
  const phone = getDeviceById(e.target.parentNode.parentNode.id);
  let added = false;
  const rows = document.querySelectorAll(".phones-rows");
  for (let i = 0; i < rows.length; i++) {
    if (phone.id == rows[i].id) {
      added = true;
      const phoneCounter = document.getElementById(`counter${rows[i].id}`);
      console.log(phoneCounter.value);
      let itemsCounter = Number(phoneCounter.value);
      itemsCounter += 1;
      phoneCounter.value = itemsCounter;
    }
  }

  if (!added) {
    addCartItem(phone);
  }
  total.innerText = `$${setTotalPrice()}`;
  setCartCounter();
  addAlert();
}

// Add new cart item
let counter = 0;

function addCartItem(phone) {
  const tr = document.createElement("tr");
  tr.classList.add("text-start", "cart-row");
  tr.setAttribute("id", phone.id);
  tr.classList.add("phones-rows");

  const img = document.createElement("td");
  img.classList.add("border-0", "p-0");
  const phoneImage = document.createElement("img");
  phoneImage.classList.add("text-center", "phone-img");
  phoneImage.src = phone.imageUrl;
  img.appendChild(phoneImage);
  tr.appendChild(img);

  const phoneNameTD = document.createElement("td");
  phoneNameTD.classList.add("border-0");
  const phoneName = document.createElement("span");
  phoneName.innerText = `${phone.brand} ${phone.model}`;
  phoneName.classList.add("phone-name");
  phoneNameTD.appendChild(phoneName);
  tr.appendChild(phoneNameTD);

  const numberOfPhonesTD = document.createElement("td");
  const numberOfPhones = document.createElement("input");
  numberOfPhones.setAttribute("type", "number");
  numberOfPhones.setAttribute("min", "1");
  numberOfPhones.setAttribute("id", `counter${phone.id}`);
  numberOfPhones.classList.add("phone-counter", "counter-input");
  numberOfPhones.value = 1;
  numberOfPhones.addEventListener("change", setTotalPrice);
  numberOfPhones.addEventListener("change", setCartCounter);
  numberOfPhonesTD.classList.add("border-0");
  numberOfPhonesTD.appendChild(numberOfPhones);
  tr.appendChild(numberOfPhonesTD);

  const phonePriceTD = document.createElement("td");
  phonePriceTD.classList.add("border-0");
  const phonePrice = document.createElement("span");
  phonePrice.setAttribute("id", `price${phone.id}`);
  phonePrice.classList.add("phone-price");
  phonePrice.value = phone.price;
  phonePrice.innerText = `$${phone.price}`;
  phonePriceTD.appendChild(phonePrice);
  tr.appendChild(phonePriceTD);

  const deleteButtonTD = document.createElement("td");
  deleteButtonTD.classList.add("border-0", "delete-btn");
  const deleteButtonIcon = document.createElement("i");
  deleteButtonIcon.classList.add("fas", "fa-solid", "fa-trash");
  deleteButtonTD.appendChild(deleteButtonIcon);

  tr.appendChild(deleteButtonTD);
  table.appendChild(tr);

  setCartCounter();

  // Delete item from cart
  deleteButtonIcon.addEventListener("click", () => {
    const total = document.getElementById("total");
    removeAlert();

    table.removeChild(tr);
    total.innerText = `$${setTotalPrice()}`;
    setCartCounter();
  });
}

// Count items in cart
function setCartCounter() {
  const cartButtonCounter = document.getElementById("cart-btn");
  let cartCountTotal = 0;
  const count = document.querySelectorAll(".phone-counter");
  for (let i = 0; i < count.length; i++) {
    cartCountTotal += Number(count[i].value);
  }
  cartButtonCounter.dataset.content = cartCountTotal;
}

// Calculate total price
function setTotalPrice() {
  let totalPrice = 0;
  const rows = document.querySelectorAll(".phones-rows");
  const total = document.getElementById("total");
  for (let i = 0; i < rows.length; i++) {
    const phoneCounter = document.getElementById(`counter${rows[i].id}`);
    const phone = document.getElementById(`price${rows[i].id}`).value;
    let counter = Number(phoneCounter.value);
    let price = Number(phone);
    totalPrice = totalPrice + counter * price;
  }
  total.innerText = `$${totalPrice}`;
  return totalPrice;
}

// Checkout
const checkBtn = document.getElementById("check-btn");
const modal = new bootstrap.Modal("#modal");
const modalTable = document.getElementById("modal-table");

checkBtn.addEventListener("click", checkout);

function checkout() {
  setCartCounter();
  const totalCheckout = document.getElementById("total-checkout");
  const phoneNames = document.querySelectorAll(".phone-name");
  const phonesCounters = document.querySelectorAll(".phone-counter");
  const phonePrices = document.querySelectorAll(".phone-price");
  const phoneImages = document.querySelectorAll(".phone-img");
  const cartMenu = document.getElementById("cart-menu");
  modal.show();

  for (let i = 0; i < phoneNames.length; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("text-start", "table-row");
    const img = document.createElement("td");
    img.classList.add("order-img-width", "border-0");
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("text-center", "w-50");
    phoneImage.src = phoneImages[i].src;
    img.appendChild(phoneImage);
    tr.appendChild(img);

    const phoneName = document.createElement("td");
    phoneName.innerText = `${phoneNames[i].innerText}`;
    phoneName.classList.add("border-0", "modal-name");
    tr.appendChild(phoneName);

    const numberOfPhones = document.createElement("td");
    numberOfPhones.classList.add("border-0", "modal-counter");
    numberOfPhones.innerText = phonesCounters[i].value;
    tr.appendChild(numberOfPhones);

    const phonePrice = document.createElement("td");
    phonePrice.innerText = `${phonePrices[i].innerText}`;
    phonePrice.classList.add("border-0");
    tr.appendChild(phonePrice);
    modalTable.appendChild(tr);
  }
  cartMenu.classList.toggle("hide");
  totalCheckout.innerText = `$${setTotalPrice()}`;
}

// Buy Button
const buy = document.getElementById("buy-button");
buy.addEventListener("click", () => {
  localStorage.clear();
  const name = document.getElementById("name").value;
  const adress = document.getElementById("adress").value;
  const phone = document.getElementById("phone").value;
  const phoneNames = document.querySelectorAll(".phone-name");
  const phonePrices = document.querySelectorAll(".phone-price");
  const phoneImages = document.querySelectorAll(".phone-img");
  const phoneCounters = document.querySelectorAll(".phone-counter");
  const counter = Number(phoneNames.length);
  localStorage.setItem("counter", counter);
  for (let i = 0; i < counter; i++) {
    localStorage.setItem(`phoneName${i}`, phoneNames[i].innerText);
    localStorage.setItem(`phonePrice${i}`, phonePrices[i].innerText);
    localStorage.setItem(`phoneImage${i}`, phoneImages[i].src);
    localStorage.setItem(`phoneCounter${i}`, phoneCounters[i].value);
  }
  localStorage.setItem("name", name);
  localStorage.setItem("adress", adress);
  localStorage.setItem("phone", phone);
  localStorage.setItem("total", setTotalPrice());
  window.open("confirmation.html");
});

// Close modal button
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", () => {
  const tr = document.querySelectorAll(".table-row");
  for (let i = 0; i < tr.length; i++) {
    modalTable.removeChild(tr[i]);
  }
  modal.hide();
});

// Add to cart alert
function addAlert() {
  const alertAdded = document.createElement("div");
  alertAdded.classList.add("alert", "alert-success");
  alertAdded.innerText = "Added to cart!";
  document.body.appendChild(alertAdded);
  setTimeout(() => {
    document.body.removeChild(alertAdded);
  }, 1000);
}

// Remove from cart alert
function removeAlert() {
  const alertRemoved = document.createElement("div");
  alertRemoved.classList.add("alert", "alert-danger");
  alertRemoved.innerText = "Removed from cart!";
  document.body.appendChild(alertRemoved);
  setTimeout(() => {
    document.body.removeChild(alertRemoved);
  }, 1000);
}

// Open/Close cart
const cartButton = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart-menu");

cartButton.addEventListener("click", () => {
  cartMenu.classList.toggle("hide");
});
