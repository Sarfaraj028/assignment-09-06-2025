const radios = document.querySelectorAll('input[type="radio"][name="price"]');
const headers = document.querySelectorAll(".units-heading");
const units = document.querySelectorAll(".unit")
console.log(units);

let lastChecked = null;

//border color changing and showing Real time total Price
units.forEach(unit => {
  unit.addEventListener("click", function () {
    // First, reset background of all units
    units.forEach(u => u.style.border = "");

    // Then, set background of clicked unit
    this.style.border = "2px solid rgb(255, 69, 156)";

    //get price 
    let price = this.querySelector(".units-heading .right-text h3").innerText;
    //get total price element and put the price in totalPrice
    let totalPrice = document.querySelector(".billing p span")
    totalPrice.innerText = price;
    console.log(price);
    
  });
});

// Toggle by clicking header
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const id = header.getAttribute("data-id");
    const radio = document.getElementById(id);
    console.log(id);
    const content = document.getElementById("content-" + id);

    if (radio === lastChecked) {
      radio.checked = false;
      content.classList.remove("active");
      lastChecked = null;
    } else {
      // Uncheck all radios and hide all contents
      radios.forEach((r) => {
        r.checked = false;
        document.getElementById("content-" + r.id).classList.remove("active");
      });

      radio.checked = true;
      content.classList.add("active");
      lastChecked = radio;
    }
  });
});

// Optional: Clicking on the radio itself behaves the same
// radios.forEach((radio) => {
//   radio.addEventListener("click", () => {
//     const content = document.getElementById("content-" + radio.id);

//     if (radio === lastChecked) {
//       radio.checked = false;
//       content.classList.remove("active");
//       lastChecked = null;
//     } else {
//       radios.forEach((r) => {
//         document.getElementById("content-" + r.id).classList.remove("active");
//       });
//       content.classList.add("active");
//       lastChecked = radio;
//     }
//   });
// });
