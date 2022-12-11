let proName = document.getElementById('name');
let category = document.getElementById('category');
let price = document.getElementById('price');
let desc = document.getElementById('description');

// productList = localStorage.getItem('productData'); // string
let productList = [];

if (localStorage.getItem('productData') != null) {
  productList = JSON.parse(localStorage.getItem('productData')); // string to array
}
displayProducts(productList);

function addProduct() {
  let product = {
    pName: proName.value,
    category: category.value,
    price: price.value,
    desc: desc.value
  };
  productList.push(product)
  // JSON.stringify(productList)  // array to string
  // JSON // is array of objects
  localStorage.setItem('productData', JSON.stringify(productList)); // update or add key and it's value

  displayProducts();
  // emptyFields();
}

// let trs = "";
function displayProducts() {
  let trs = "";
  for(let i = 0; i < productList.length; i++) {
    trs +=
      `<tr>
      <td>${i + 1}</td>
      <td>${productList[i].pName}</td>
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
  document.getElementById('tbody').innerHTML = trs;
}

function emptyFields() {
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
// searchInput.style.backgroundColor = 'red';

function search() {
  let str = "";
  for(let i = 0; i < productList.length; i++){
    if(productList[i].pName.toLowerCase().includes(searchInput.value.toLowerCase())){
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