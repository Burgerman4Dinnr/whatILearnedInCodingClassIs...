/*

collect info
store info 
put stored info in arrays
build cards


*/

const gameCards = document.getElementById('gameCards')
const submitBtn = document.getElementById('submitBtn')
let games = [];

const collectInfo =()=> {
    //collect info
    const gameName = document.getElementById('gameName').value
    const category = document.querySelector('select[name=category]').value
    const gameImage = document.getElementById('gameImage').value

    if(gameName == '' || category == '' || gameImage == '') {
        alert('Please fill out fields')
    } else {
        let data = {
            gameName,
            category,
            gameImage
        }
        addInfo(games, data)
    }
    //store info in an object
    let data = {
        gameName,
        category,
        gameImage
    }
    addInfo(games, arr)
}

const addInfo =(arr, obj)=> {
    arr = [...arr, obj]
    buildCard(arr)
    
}

const buildCard =(arr, obj)
//build card
arr.forEach(item => {
    let card = `<div class="col-md-3">
    <div class="card border-danger">
        <div class="card-header">
            <h2 class="h3 text-danger">${item.gameName}</h2>
        </div>
        <img src='${item.gameImage}' alt="${item.gameName}" class="img-fluid" />
        <div class="card-body">
            <p class="card-text text-danger">${item.category}<span id="gameCategory"></span></p>
        </div>
    </div>
</div>`

})
gameCards.innerHTML += card



submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    collectInfo()
    
    

    // put stored info in arrays
    games = [...games, data]
    console.log(games);

});



// ... [item1, item2, item3] => item1, item2, item3