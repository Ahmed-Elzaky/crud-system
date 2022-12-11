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

let addBtn = document.getElementById('addProduct');
// addBtn.onclick = addProduct; // onclick is a property not a method
addBtn.addEventListener("click", addProduct);

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
  clearFields();
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
      <button onclick="" class="btn btn-warning" id="updateProduct">Update</button>
      </td>
      <td>
    <button onclick="deleteProduct(${i});" class="btn btn-danger" id="deleteProduct">Delete</button>
      </td>
      </tr>
      `;
  }
  document.getElementById('tbody').innerHTML = trs;
}

function clearFields() {
  proName.value = '';
  category.value = '';
  price.value = '';
  desc.value = '';
}

// let deleteItem = document.getElementById('deleteProduct');
// deleteItem.addEventListener("click", function(){

// })

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
      <button onclick="" class="btn btn-warning" id="UpdateProduct">Update</button>
      </td>
      <td>
    <button onclick="deleteProduct(${i});" class="btn btn-danger" id="DeleteProduct">Delete</button>
      </td>
      </tr>
      `;
    }
  }
  document.getElementById('tbody').innerHTML = str;
}

