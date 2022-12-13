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
  if (proName.value != '' & category.value != '' & (price.value != '' || price.value != 0)) {
  productList.push(product)
  }

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
      // validate not empty inputs
  if (upName.value != '' & upCategory.value != '' & (upPrice.value != '' || upPrice.value != 0)) {
    localStorage.setItem('productData', JSON.stringify(productList)); // update or add key and it's value
    displayProducts();
    }

  }

  closeBtn.onclick = function () {
    document.getElementById('updateForm').classList.add('d-none');
  }
}
// End Update Form


// Multiple Toggle
var superToggle = function (element, class0, class1) {
  element.classList.toggle(class0);
  element.classList.toggle(class1);
}

// Start Dark Mode

let darkLight = document.getElementById('toggle');
let slider = document.getElementById('slider');
let theBody = document.body;
let inputsDark = document.getElementsByTagName('input');
let textAreas = document.getElementsByTagName('textarea');
let theTable = document.querySelector('.table');
let updateForm = document.getElementById('updateForm');


darkLight.addEventListener("click", function () {
  superToggle(slider, 'bg-light', 'right');
  superToggle(darkLight, 'bg-dark', 'border-dark');
  superToggle(theBody, 'bg-dark', 'text-light');
  superToggle(theTable, 'table-light', 'table-dark');
  superToggle(updateForm, 'bg-light', 'bg-dark');
  
  for (let i = 0; i < inputsDark.length; i++) {
    superToggle(inputsDark[i], 'form-control', 'form-control-dark');
  }

  for (let i = 0; i < textAreas.length; i++) {
    superToggle(textAreas[i], 'form-control', 'form-control-dark');
  }
  
});
// End Dark Mode
