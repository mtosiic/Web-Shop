window.onload = event => {
  const table = document.getElementById("confirmation-table");
  const shippingTable = document.getElementById("shipping-table");
  const counter = localStorage.getItem("counter");

  // Add elements to table from localstorage
  for (let i = 0; i < counter; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("table-row");
    const img = document.createElement("td");
    img.classList.add("border=0", "order-img-width", "p-0");
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("text-center");
    phoneImage.src = localStorage.getItem(`phoneImage${i}`);
    img.appendChild(phoneImage);
    tr.appendChild(img);

    const phoneName = document.createElement("td");
    phoneName.innerText = localStorage.getItem(`phoneName${i}`);
    phoneName.classList.add("border-0");
    tr.appendChild(phoneName);

    const phoneCounter = document.createElement("td");
    phoneCounter.innerText = localStorage.getItem(`phoneCounter${i}`);
    phoneCounter.classList.add("border-0", "quantity");
    tr.appendChild(phoneCounter);

    const phonePrice = document.createElement("td");
    phonePrice.innerText = localStorage.getItem(`phonePrice${i}`);
    phonePrice.classList.add("border-0");
    tr.appendChild(phonePrice);
    table.appendChild(tr);
  }
  const total = document.getElementById("total");
  total.innerText = `$${localStorage.getItem("total")}`;

  const name = document.createElement("tr");
  const adress = document.createElement("tr");
  const phoneNumber = document.createElement("tr");
  name.innerText = localStorage.getItem("name");
  adress.innerText = localStorage.getItem("adress");
  phoneNumber.innerText = localStorage.getItem("phone");

  shippingTable.appendChild(name);
  shippingTable.appendChild(adress);
  shippingTable.appendChild(phoneNumber);
};
