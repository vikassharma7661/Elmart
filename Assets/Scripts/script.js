const bar = document.getElementsByClassName('mobile')[0];
const popup1 = document.getElementsByClassName('leftpop')[0];
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        if (popup1) {
            popup1.style.display = "flex";
        }
    });
} else {
    if (popup1) {
        popup1.style.display = "none";
    }
}

if (close) {
    close.addEventListener('click', () => {
        if (popup1) {
            popup1.style.display = "none";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('itemsContainer');
    const detailsView = document.getElementById('detailsView');
    const detailsImage = document.getElementById('detailsImage');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsPrice = document.getElementById('detailsPrice');
    const closeBtn = document.getElementById('closebtn1');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    let foodData = {};

    // Fetch the food items from the JSON file
    fetch('https://vikassharma7661.github.io/Elmart/Assets/Scripts/foodItems.json')
        .then(response => response.json())
        .then(data => {
            foodData = data;
            displayFoodItems(foodData.foodItems); // Display all items initially

            // Add event listeners to radio buttons if any
            document.querySelectorAll('input[name="check"]').forEach((input) => {
                input.addEventListener('change', (event) => {
                    const selectedValue = event.target.value;
                    displayFoodItems(selectedValue === 'all' ? foodData.foodItems : foodData[selectedValue]);
                });
            });
        })
        .catch(error => console.error('Error fetching food items:', error));

    function displayFoodItems(items) {
        itemsContainer.innerHTML = '';

        if (items) {
            items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'col-lg-3 col-md-6 col-sm-6 my-3';
                itemDiv.innerHTML = `
                  <div class="card" data-index="${index}">
                    <div class="price-badge">${item.price}</div>
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p>${item.description}</p>
                    </div>
                  </div>
                `;
                itemDiv.querySelector('.card').addEventListener('click', () => {
                    showDetails(item);
                });
                itemsContainer.appendChild(itemDiv);
            });
        }
    }

    function showDetails(item) {
        detailsImage.src = item.image;
        detailsTitle.textContent = item.title;
        detailsPrice.textContent = item.price;
        detailsView.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        detailsView.style.display = 'none';
    });

    // Add search functionality
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = foodData.foodItems.filter(item =>
            item.title.toLowerCase().includes(query)
        );
        displayFoodItems(filteredItems);
    });
});


$(document).ready(function () {
    const foodItems = [
        { "title": "Paneer", "price": "$80", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/sahi paneer.jpg", "description": "A delicious paneer dish." },
        { "title": "Tanduri Paneer", "price": "$80", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/tanduri paneer tikka.jpg", "description": "Fresh and juicy raspberries." },
        { "title": "Kabab", "price": "$50", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/full plate kabab.jpg", "description": "Strawberries served with yogurt." },
        { "title": "Burger", "price": "$65", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/barger2.webp", "description": "A healthy and fresh salad." },
        { "title": "One Bowl Finger Chips", "price": "$280", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/one bowl chips.jpg", "description": "Delicious pasta dish." },
        { "title": "Full Plate Kabab", "price": "$85", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/kabab 1.webp", "description": "Classic Caesar salad." },
        { "title": "Paneer Tikka", "price": "$155", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/tanduri paneer tikka.jpg", "description": "Tasty cookies." },
        { "title": "Vegetable Salad", "price": "$38", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/veg.jpg", "description": "A fresh vegetable salad." },
        { "title": "Chicken", "price": "$100", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/chiken.jpg", "description": "Grilled chicken dish." },
        { "title": "Sandwich & Chips", "price": "$65", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/san chip.jpg", "description": "Sandwich served with chips." },
        { "title": "Pasta Combo", "price": "$280", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/pas com.jpg", "description": "Pasta combo meal." },
        { "title": "Burger Combo", "price": "$85", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/com bur.jpg", "description": "Burger served with fries and a drink." },
        { "title": "Momos", "price": "$155", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/momos.jpg", "description": "Steamed momos." },
        { "title": "Salad", "price": "$65", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/slad.jpg", "description": "A healthy salad." },
        { "title": "Pasta", "price": "$280", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/pasta1.avif", "description": "Delicious pasta dish." },
        { "title": "Caesar Salad", "price": "$85", "image": "https://vikassharma7661.github.io/Elmart/Assets/img/im2.jpg", "description": "Classic Caesar salad." }
    ];

    function displayItems(items) {
        const itemsContainer = $('#itemsContainer');
        itemsContainer.empty();
        items.forEach(item => {
            const itemHtml = `
                <div class="col-4 mb-4">
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text"><strong>${item.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
            itemsContainer.append(itemHtml);
        });

        // Add click event to each card
        $('.card').click(function () {
            const index = $(this).parent().index();
            const selectedItem = items[index];
            $('#detailsTitle').text(selectedItem.title);
            $('#detailsPrice').text(selectedItem.price);
            $('#detailsImage').attr('src', selectedItem.image);
            $('#detailsView').show();
        });
    }

    function filterItems(minPrice, maxPrice) {
        return foodItems.filter(item => {
            const price = parseFloat(item.price.replace('$', ''));
            return price >= minPrice && price <= maxPrice;
        });
    }

    $('#filterButton').click(function () {
        const minPrice = parseFloat($('#minPrice').val());
        const maxPrice = parseFloat($('#maxPrice').val());

        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            const filteredItems = filterItems(minPrice, maxPrice);
            displayItems(filteredItems);
        }
    });

    // Event listener to close the details view
    $('#closebtn1').click(function () {
        $('#detailsView').hide();
    });

    // Initial display of all items
    displayItems(foodItems);
});

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('itemsContainer');
    const detailsView = document.getElementById('detailsView');
    const detailsImage = document.getElementById('detailsImage');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsPrice = document.getElementById('detailsPrice');
    const closeBtn = document.getElementById('closebtn1');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');


    let foodData = {};

    // Fetch the food items from the JSON file
    fetch('https://vikassharma7661.github.io/Elmart/Assets/Scripts/foodItems.json')
        .then(response => response.json())
        .then(data => {
            foodData = data;
            displayFoodItems(foodData.foodItems); // Display page 2 items initially

            // Add event listeners to pagination links
            document.getElementById('one').addEventListener('click', () => displayFoodItems(foodData.foodItems));
            document.getElementById('two').addEventListener('click', () => displayFoodItems(foodData.page2));
            document.getElementById('three').addEventListener('click', () => displayFoodItems(foodData.page3));
            document.getElementById('four').addEventListener('click', () => displayFoodItems(foodData.page4));
        })
        .catch(error => console.error('Error fetching food items:', error));

    function displayFoodItems(items) {
        itemsContainer.innerHTML = '';

        if (items) {
            items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'col-lg-3 col-md-6 col-sm-6 my-3';
                itemDiv.innerHTML = `
                  <div class="card" data-index="${index}">
                    <div class="price-badge">${item.price}</div>
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p>${item.description}</p>
                    </div>
                  </div>
                `;
                itemDiv.querySelector('.card').addEventListener('click', () => {
                    showDetails(item);
                });
                itemsContainer.appendChild(itemDiv);
            });
        }
    }

    function showDetails(item) {
        detailsImage.src = item.image;
        detailsTitle.textContent = item.title;
        detailsPrice.textContent = item.price;
        detailsView.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        detailsView.style.display = 'none';
    });

    // Add search functionality
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = foodData.page2.filter(item =>
            item.title.toLowerCase().includes(query)
        );

        displayFoodItems(filteredItems);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('itemsContainer');
    const detailsView = document.getElementById('detailsView');
    const detailsImage = document.getElementById('detailsImage');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsPrice = document.getElementById('detailsPrice');
    const closeBtn = document.getElementById('closebtn1');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    let foodData = {};

    // Fetch the food items from the JSON file
    fetch('https://vikassharma7661.github.io/Elmart/Assets/Scripts/foodItems.json')
        .then(response => response.json())
        .then(data => {
            foodData = data;
            displayFoodItems(foodData.foodItems); // Display all items initially

            // Add event listeners to pagination links
            document.getElementById('one').addEventListener('click', () => displayFoodItems(foodData.foodItems));
            document.getElementById('two').addEventListener('click', () => displayFoodItems(foodData.page2));
            document.getElementById('three').addEventListener('click', () => displayFoodItems(foodData.page3));
            document.getElementById('four').addEventListener('click', () => displayFoodItems(foodData.page4));
        })
        .catch(error => console.error('Error fetching food items:', error));

    function displayFoodItems(items) {
        itemsContainer.innerHTML = '';

        if (items) {
            items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'col-lg-3 col-md-6 col-sm-6 my-3';
                itemDiv.innerHTML = `
                    <div class="card" data-index="${index}">
                        <div class="price-badge">${item.price}</div>
                        <img src="${item.image}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
                itemDiv.querySelector('.card').addEventListener('click', () => {
                    showDetails(item);
                });
                itemsContainer.appendChild(itemDiv);
            });
        }
    }

    function showDetails(item) {
        detailsImage.src = item.image;
        detailsTitle.textContent = item.title;
        detailsPrice.textContent = item.price;
        detailsView.style.display = 'block';
    }
    closeBtn.addEventListener('click', () => {
        detailsView.style.display = 'none';
    });

    // Add search functionality to filter items from all pages
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = Object.values(foodData).flat().filter(item =>
            item.title.toLowerCase().includes(query)
        );

        displayFoodItems(filteredItems);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const detailsView = document.getElementById('detailsView');
    const detailsImage = document.getElementById('detailsImage');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsPrice = document.getElementById('detailsPrice');
    const closeBtn = document.getElementById('closebtn1');
    const itemsContainer = document.getElementById('itemsContainer');
    const filterContainer = document.getElementById('filtercontainer');

    let foodData = {};

    // Fetch the food items from the JSON file
    fetch('https://vikassharma7661.github.io/Elmart/Assets/Scripts/foodItems.json')
        .then(response => response.json())
        .then(data => {
            foodData = data;
            const firstCategory = Object.keys(foodData)[0];
            renderFoodItems(firstCategory); // Initial render of the first category
        })
        .catch(error => console.error('Error fetching food items:', error));

    function showDetails(item) {
        detailsImage.src = item.image;
        detailsTitle.textContent = item.title;
        detailsPrice.textContent = item.price;
        detailsView.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        detailsView.style.display = 'none';
    });

    const activeFilters = new Set();

    const renderFoodItems = (category = null) => {
        itemsContainer.innerHTML = '';
        let filteredItems = [];

        if (category) {
            filteredItems.push(...foodData[category]);
        } else {
            for (const cat in foodData) {
                filteredItems.push(...foodData[cat]);
            }
        }

        filteredItems.forEach((item, index) => {
            const foodItem = document.createElement('div');
            foodItem.className = 'col-lg-3 col-md-6 col-sm-6 my-3 food-item';
            foodItem.innerHTML = `
              <div class="card" data-index="${index}">
                <div class="price-badge">${item.price}</div>
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p>${item.description}</p>
                </div>
              </div>
            `;
            itemsContainer.appendChild(foodItem);

            foodItem.addEventListener('click', () => {
                showDetails(item);
            });
        });

        console.log('Rendered Items:', itemsContainer.innerHTML); // Check rendered items in console
    };

    const addFilter = (category) => {
        if (activeFilters.has(category)) return;

        activeFilters.add(category);
        const filterButton = document.createElement('button');
        filterButton.classList.add('filter-button');
        filterButton.innerHTML = `${category} <span class="close-btn" data-category="${category}">x</span>`;
        filterContainer.appendChild(filterButton);

        renderFilteredItems();
    };

    const removeFilter = (category) => {
        activeFilters.delete(category);
        const buttons = filterContainer.querySelectorAll('.filter-button');
        buttons.forEach(button => {
            if (button.textContent.includes(category)) {
                filterContainer.removeChild(button);
            }
        });

        renderFilteredItems();
    };

    const renderFilteredItems = () => {
        itemsContainer.innerHTML = '';
        let filteredItems = [];

        if (activeFilters.size === 0) {
            const firstCategory = Object.keys(foodData)[0];
            filteredItems.push(...foodData[firstCategory]);
        } else {
            activeFilters.forEach(category => {
                filteredItems.push(...foodData[category]);
            });
        }

        filteredItems.forEach((item, index) => {
            const foodItem = document.createElement('div');
            foodItem.className = 'col-lg-3 col-md-6 col-sm-6 my-3 food-item';
            foodItem.innerHTML = `
              <div class="card" data-index="">
                <div class="price-badge">${item.price}</div>
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p>${item.description}</p>
                </div>
              </div>
            `;
            itemsContainer.appendChild(foodItem);

            foodItem.addEventListener('click', () => {
                showDetails(item);
            });
        });
    };

    const buttons = document.querySelectorAll('[data-category]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            addFilter(category);
        });
    });

    filterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-btn')) {
            const category = event.target.getAttribute('data-category');
            removeFilter(category);
        }
    });
});


let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');



iconCart.addEventListener('click', () => {
    if (cart.length > 0) {
        body.classList.toggle('showCart');
    }

})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

let orderNowButton = document.querySelector('.orderNow');

orderNowButton.addEventListener('click', () => {
    // Increment the cart count
    let currentCartCount = parseInt(iconCartSpan.innerText);
    iconCartSpan.innerText = currentCartCount + 1;
    detailsView.style.display="none";

});
let cart = [];

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.title === item.title && cartItem.plateSize === item.plateSize);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }

    updateCartView();
}

function updateCartView() {
    const listCartElement = document.querySelector('.listCart');
    listCartElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item d-flex justify-content-between align-items-center p-2 border-bottom';
        itemElement.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <img src="${item.img}" alt="${item.title}" class="img-thumbnail" style="width: 50px; height: 50px;">
                <div>
                    ${item.title} (${item.plateSize}) - $${item.price} x ${item.quantity}
                </div>
            </div>
            <div class="badge bg-primary rounded-pill">${item.quantity}</div>
        `;
        listCartElement.appendChild(itemElement);
        total += parseFloat(item.price) * item.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.className = 'fw-bold mt-2';
    totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    listCartElement.appendChild(totalElement);
}

// Event delegation to handle dynamically added "Order Now" buttons
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('orderNow')) {
        const itemTitle = document.querySelector('#detailsTitle').innerText;
        const itemPrice = document.querySelector('#detailsPrice').innerText.replace('$', '');
        const plateSize = document.querySelector('#plateSize').value;
        const itemImg = document.querySelector('#detailsImage').src;

        if (plateSize === 'Select Plate Size') {
            alert('Please select a plate size');
            return;
        }

        const item = {
            title: itemTitle,
            price: itemPrice,
            plateSize: plateSize,
            img: itemImg
        };

        addToCart(item);
    }
});
function updateCartView() {
    const listCartElement = document.querySelector('.listCart');
    listCartElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item d-flex justify-content-between align-items-center p-2 border-bottom';
        itemElement.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <img src="${item.img}" alt="${item.title}" class="img-thumbnail" style="width: 50px; height: 50px;">
                <div class="d-flex">
                    ${item.title} (${item.plateSize}) - $${item.price} 
                    <button class="decrementQuantity btn btn-sm btn-danger" data-index="${cart.indexOf(item)}">-</button>
                    ${item.quantity}
                    <button class="incrementQuantity btn btn-sm btn-success" data-index="${cart.indexOf(item)}">+</button>
                </div>
            </div>
            <div class="badge bg-primary rounded-pill">${item.quantity}</div>
        `;
        listCartElement.appendChild(itemElement);
        total += parseFloat(item.price) * item.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.className = 'fw-bold mt-2';
    totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    listCartElement.appendChild(totalElement);

    // Add event listeners to increment and decrement buttons
    document.querySelectorAll('.incrementQuantity').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            cart[index].quantity++;
            updateCartView();
        });
    });

    document.querySelectorAll('.decrementQuantity').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                updateCartView();
            }
        });
    });
}
