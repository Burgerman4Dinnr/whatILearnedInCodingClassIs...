const items = document.getElementById('item')
const submitBtn = document.getElementById('submitBtn')
let item = [];

const collectInfo =()=> {
    const itemName = document.getElementById('itemName').value
    const itemImage = document.getElementById('itemImage').value
    const quantity = document.getElementById('quantity').value
    const price = document.getElementById('price').value

    if(itemName == '' || quantity == '' || price == '' || itemImage == '') {
        alert('Please fill out fields')
    } else {
        let data = {
            itemName,
            quantity,
            itemImage,
            price
        }
        addInfo(item, data)
    }
    let data = {
        itemName,
        quantity,
        itemImage,
        price
    }
    addInfo(items, arr)
}

const addInfo =(arr, obj)=> {
    arr = [...arr, obj]
    buildCard(arr)
    
}

const buildCard =(arr, obj);
arr.forEach(item => {
    let card = `<div class="col-md-3">
    <div class="card border-danger">
        <div class="card-header">
            <h2 class="h3 text-danger">${item.itemName}</h2>
        </div>
        <img src='${item.itemImage}' alt="${item.itemImage}" class="img-fluid" />
        <div class="card-body">
            <p class="card-text text-danger">${item.quantity}<span id="quantity"></span></p>
        </div>
        <div class="card-body">
            <p class="card-text text-danger">${item.price}<span id="price"></span></p>
        </div>
    </div>
</div>`

})
itemCards.innerHTML += card



submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    collectInfo()


    items = [...items, data]
    console.log(items);

});