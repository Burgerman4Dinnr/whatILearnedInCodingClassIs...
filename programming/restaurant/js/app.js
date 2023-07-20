class Menu {
    constructor(){
        this.itemsInCart = {
            itemCount: 0,
            subtotal: 0
        }
        this.menuInventory = {
            item1: {
                id: 1, 
                img: './media/bat-soup.jpg',
                alt: 'bat soup',
                class: 'food-img',
                price: 5102.00,
                qty: 0,
                name: 'Cuisine'
            },
            item2: {
                id: 2, 
                img: './media/krabby-patty.jpg',
                alt: 'krabby patty',
                class: 'food-img',
                price: 1.50,
                qty: 0,
                name: 'Kabby Paddy'
            },
            item3: {
                id: 3, 
                img: './media/pancake.jpg',
                alt: 'bancake',
                class: 'food-img',
                price: 1.51,
                qty: 0,
                name: 'bancake'
            },
            item4: {
                id: 4, 
                img: './media/soup.jpg',
                alt: 'soup',
                class: 'food-img',
                price: 1.52,
                qty: 0,
                name: 'suop'
            },
            item5: {
                id: 5, 
                img: './media/ideas.jpg',
                alt: 'pasta pancakes',
                class: 'food-img',
                price: 1.53,
                qty: 0,
                name: 'Pasta Pancakes'
            },
            item6: {
                id: 6, 
                img: './media/pizza.jpg',
                alt: 'literally just pizza',
                class: 'food-img',
                price: 69.00,
                qty: 0,
                name: 'Organic Milk Tossed over Seasoned Tomato Purée Spread on Baked Whole Wheat'
            },
            item7: {
                id: 7, 
                img: './media/pizza.jpg',
                alt: 'pizza',
                class: 'food-img',
                price: 1.54,
                qty: 0,
                name: 'Pizza'
            },
            item8: {
                id: 8, 
                img: './media/wiener-taco.jpg',
                alt: 'hotdog',
                class: 'food-img',
                price: 420.00,
                qty: 0,
                name: 'Wiener Taco'
            }
        }
    }

    init(){
        this.loadItems();
        this.addToCart();
        this.checkout();
    }

    loadItems(){
        let count = 0;
        let food1 = document.getElementById('food1');
        let food2 = document.getElementById('food2');

        for(const key in this.menuInventory) {
            const item = this.menuInventory[key];
            const product = document.createElement('div');
            product.className = 'col-md-3 product';
            product.innerHTML = `
            <div class="card h-100">
            <img src="${item.img}" class="card-img-top ${item.class}" alt="${item.alt}">
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">Food Fresh Kitchen From Our.</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <button class="btn btn-secondary add-button" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
            `;

            if(count < 4){
                food1.append(product);
            } else {
                food2.append(product);
            }
            count++;

        }
    }

    addToCart(){
        let buttons = document.querySelectorAll('.add-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubtotal = document.getElementById('cartSubtotal');
        let itemCount = 0;
        let price = 0;

        for(const key in this.menuInventory){
            const item = this.menuInventory[key];

            buttons.forEach(button => {
                button.addEventListener('click', ()=> {
                    if(button.dataset['id'] == item.id){
                        itemCount++;
                        price += item.price;
                        this.itemsInCart.itemCount = itemCount;
                        this.itemsInCart.subtotal = price;

                        item.qty++;
                    }
                    cartItems.innerText = itemCount;
                    cartSubtotal.innerText = price.toFixed(2);
                })
            })
        }
    }

    checkout(){
        const table = document.getElementById('tbody');
        const checkout = document.getElementById('checkout');
        const checkoutPage = document.querySelector('.checkout-page');
        const mainPage = document.querySelector('.main-page');
        let subTimesQty = 0;
        const subtotalValue = document.getElementById('subtotalValue');
        const taxValue = document.getElementById('taxValue');
        const totalValue = document.getElementById('totalValue');
        let tax = 0;
        const shippingValue = document.getElementById('shippingValue');
        const checkoutItemCount = document.getElementById('checkoutItemCount');
        const shipping = 5;

        checkout.addEventListener('click', ()=> {
            if(mainPage.classList.contains('d-none')) return;
            checkoutPage.classList.remove('d-none');
            mainPage.classList.add('d-none');

            if(this.itemsInCart.itemCount == 1){
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} item`;
            } else {
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} items`;
            }
            for(const key in this.menuInventory) {
                const item = this.menuInventory[key];

                subTimesQty = (item.qty * item.price).toFixed(2);
                subtotalValue.innerText = this.itemsInCart.subtotal.toFixed(2);
                shippingValue.innerText = shipping.toFixed(2);
                tax = this.itemsInCart.subtotal * .07;
                taxValue.innerText = tax.toFixed(2);
                totalValue.innerText = (this.itemsInCart.subtotal + tax + shipping).toFixed(2);
                if(item.qty > 0){
                    const tableRow = document.createElement('tr');
                    tableRow.className = 'product-checkout';
                    tableRow.innerHTML += `
                        <td id="checkoutImg">
                            <img src="${item.img}" alt="${item.alt}" class="img-fluid checkout-img" id="checkoutImg" height="250" width="200">
                            <div class="product-desc">
                                <p class="item-name">${item.name}</p>
                                <p>Food Fresh Kitchen From Our </p>
                            </div>
                        </td>
                        <td>
                            <p class="unit-price">${item.price.toFixed(2)}</p> 
                        </td>
                        <td>
                            <div id="itemQuantity">
                                <p id="qtyInput">${item.qty}</p>
                            </div>
                        </td>
                        <td id="itemSubtotal">${subTimesQty}</td>
                    `
                    table.append(tableRow);
                }
            }
        })
    }

}

let action = new Menu();
action.init();