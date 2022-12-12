let proName = document.getElementById('name');
let category = document.getElementById('category');
let price = document.getElementById('price');
let desc = document.getElementById('description');

desc.classList.add();

// productList = localStorage.getItem('productData'); // string
let productList = [];

if (localStorage.getItem('productData') != null) {
  productList = JSON.parse(localStorage.getItem('productData')); // string to array
}
displayProducts(productList);

let addBtn = document.getElementById('addBtn');
addBtn.onclick = addProduct; // onclick is a property not a method
// addBtn.addEventListener("click", addProduct);

function addProduct() {
  let product = {
    pName: proName.value,
    category: category.value,
    price: price.value,
    desc: desc.value
  };

  // validate not empty inputs
  // if (proName.value != '' & category.value != '' & (price.value != '' || price.value != 0)) {
  productList.push(product)
  // }

  // JSON.stringify(productList)  // array to string
  // JSON // is array of objects
  localStorage.setItem('productData', JSON.stringify(productList)); // update or add key and it's value

  displayProducts();
  clearForm();
}

// let trs = "";
function displayProducts() {
  let trs = "";
  for (let i = 0; i < productList.length; i++) {
    trs +=
      `<tr>
      <td>${i + 1}</td>
      <td>${productList[i].pName}</td>
      <td>${productList[i].category}</td>
      <td>${productList[i].price}</td>
      <td>${productList[i].desc}</td>
      <td>
      <button onclick="updateProductFloat(${i});" class="btn btn-warning btn-sm" id="updateBtn">Update</button>
      </td>
      <td>
    <button onclick="deleteProduct(${i});" class="btn btn-danger btn-sm" id="deleteBtn">Delete</button>
      </td>
      </tr>
      `;
  }
  document.getElementById('tbody').innerHTML = trs;
}

function clearForm() {
  proName.value = '';
  category.value = '';
  price.value = '';
  desc.value = '';
}

function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem('productData', JSON.stringify(productList));
  displayProducts(productList);
}


let searchInput = document.getElementById('searchInput');
searchInput.addEventListener("keyup", search);

function search() {
  let str = "";
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].pName.toLowerCase().includes(searchInput.value.toLowerCase())) {
      str +=
        `<tr>
      <td>${i + 1}</td>
      <td>
      ${productList[i].pName.toLowerCase().replace(searchInput.value.toLowerCase(), `<span style="background-color: #ffc107;">${searchInput.value}</span>`)}
      </td>
      <td>${productList[i].category}</td>
      <td>${productList[i].price}</td>
      <td>${productList[i].desc}</td>
      <td>
      <button onclick="updateProductFloat(${i});" class="btn btn-warning btn-sm" id="updateBtn">Update</button>
      </td>
      <td>
    <button onclick="deleteProduct(${i});" class="btn btn-danger btn-sm" id="deleteBtn">Delete</button>
      </td>
      </tr>
      `;
    }
  }
  document.getElementById('tbody').innerHTML = str;
}


// let updateBtn = document.getElementById('updateBtn');

// function updateProduct(index) {
//   proName.value = productList[index].pName;
//   category.value = productList[index].category;
//   price.value = productList[index].price;
//   desc.value = productList[index].desc;

//   addBtn.textContent = 'Update Product';
//   addBtn.classList.replace('btn-secondary', 'btn-warning');

//   addBtn.onclick = function () {
//     productList[index].pName = proName.value;
//     productList[index].category = category.value;
//     productList[index].price = price.value;
//     productList[index].desc = desc.value;

//     localStorage.setItem('productData', JSON.stringify(productList)); // update or add key and it's value
//     displayProducts();

//     addBtn.textContent = 'Add Product';
//     addBtn.classList.replace('btn-warning', 'btn-secondary');

//     clearForm();
//   }
// }


// Start Update Form
let form = document.getElementById('updateForm');
let closeBtn = document.getElementById('closeBtn');
let upName = document.getElementById('upName');
let upCategory = document.getElementById('upCategory');
let upPrice = document.getElementById('upPrice');
let upDesc = document.getElementById('upDescription');
let updateProBtn = document.getElementById('updateProBtn');

function updateProductFloat(index) {
  form.classList.remove('d-none');
  upName.value = productList[index].pName;
  upCategory.value = productList[index].category;
  upPrice.value = productList[index].price;
  upDesc.value = productList[index].desc;

  updateProBtn.onclick = function () {
    productList[index].pName = upName.value;
    productList[index].category = upCategory.value;
    productList[index].price = upPrice.value;
    productList[index].desc = upDesc.value;

    localStorage.setItem('productData', JSON.stringify(productList)); // update or add key and it's value
    displayProducts();
  }

  closeBtn.onclick = function () {
    document.getElementById('updateForm').classList.add('d-none');
  }
}
// End Update Form

var superToggle = function (element, class0, class1) {
  element.classList.toggle(class0);
  element.classList.toggle(class1);
}


let darkLight = document.getElementById('toggle');
let slider = document.getElementById('slider');

darkLight.addEventListener("click", function () {
  slider.classList.toggle('bg-light');
  darkLight.classList.toggle('bg-dark');
  darkLight.classList.toggle('border-dark');
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-light');
  slider.classList.toggle('right');
  document.querySelector('.table').classList.toggle('table-light');
  document.querySelector('.table').classList.toggle('table-dark');
  // document.querySelectorALL('input').classList.replace('form-control', 'form-control-dark');
  let inputsDark = document.getElementsByTagName('input');
  for (let i = 0; i < inputsDark.length; i++) {
    // inputsDark[i].classList.toggle('form-control');
    // inputsDark[i].classList.toggle('form-control-dark');
    superToggle(inputsDark[i], 'form-control', 'form-control-dark');
  }

  let textAreas = document.getElementsByTagName('textarea');
  for (let i = 0; i < textAreas.length; i++) {
    superToggle(textAreas[i], 'form-control', 'form-control-dark');
  }

  document.getElementById('updateForm').classList.toggle('bg-light');
  document.getElementById('updateForm').classList.toggle('bg-dark');


});