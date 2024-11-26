// Inicializar productos desde localStorage
let products = JSON.parse(localStorage.getItem('products')) || [];
let nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

// Mostrar una sección específica
function showSection(section) {
    document.getElementById('list-section').style.display = section === 'list' ? 'block' : 'none';
    document.getElementById('add-section').style.display = section === 'add' ? 'block' : 'none';
}

function refreshProductList() {
    const tableBody = document.querySelector('#product-table tbody');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.cost.toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>${product.type}</td>
            <td>
                <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete-btn" onclick="confirmDelete(${product.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Guardar productos en localStorage
function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Añadir un producto
document.getElementById('add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const code = document.getElementById('product-code').value;
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const cost = parseFloat(document.getElementById('product-cost').value);
    const stock = parseInt(document.getElementById('product-stock').value);
    const type = document.getElementById('product-type').value;
    const product = { id: nextId++, code, name, price, cost, stock,type };
    products.push(product);
    saveProductsToLocalStorage();
    document.getElementById('add-product-form').reset();
    refreshProductList();
    showSection('list');
});

// Editar un producto
function editProduct(id) {
    const product = products.find(p => p.id === id);
    const code = prompt('Edit Product Code:', product.code);
    const name = prompt('Edit Product Name:', product.name);
    const price = parseFloat(prompt('Edit Product Price:', product.price));
    const cost = parseFloat(prompt('Edit Product Cost:', product.cost));
    const stock = parseInt(prompt('Edit Product Stock:', product.stock));
    const type = prompt('Edit Product Type (Electronics, Clothing, Food):', product.type);
    if (code && name && !isNaN(price) && !isNaN(cost) && !isNaN(stock)) {
        product.code = code;
        product.name = name;
        product.price = price;
        product.cost = cost;
        product.stock = stock;
        product.type = type;
        saveProductsToLocalStorage();
        refreshProductList();
    }
}

// Eliminar un producto
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveProductsToLocalStorage();
    refreshProductList();
}

// Inicializar la lista de productos
refreshProductList();


function confirmDelete(id) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
        deleteProduct(id);
    }
}
