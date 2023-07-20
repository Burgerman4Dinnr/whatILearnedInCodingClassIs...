const submitBtn = document.getElementById('submitBtn');
const bookCards = document.getElementById('bookCards');
let books = [];
const collectInfo =()=> {
    const bookName = document.getElementById('bookName');
    const author = document.getElementById('author');
    const publishYear = document.getElementById('publishYear');
    const bookGenre = document.getElementById('bookGenre');
    const bookImage = document.getElementById('bookImage');

    if (bookName == '' || author == '' || publishYear == '' || bookGenre == '' || bookImage == '') {
        alert('Please fill out fields');
    } else {
        let data = {bookName, author, publishYear, bookGenre, bookImage}
        addInfo (books, data);
    }
}

const addInfo = (arr,obj)=> {
    arr = [...arr,obj];
    buildCard(arr);
}

const buildCard =(arr)=> {
    let card;
    arr.forEach(item => {
        card=`<div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 id="bookName">
                    ${item.bookName}
                </h3>
            </div>
                <img src="${item.bookImage}" alt="${item.bookName}" class="img-fluid">
                <div class="card-body">
                    <p class="card-text">
                        Author:
                        <span id="author">${item.author}</span>
                    </p>
                    <p class="card-text">
                        Genre:
                        <span id="bookGenre">${item.bookGenre}   
                        </span>
                    </p>
                    <p class="card-text">
                        Year:
                        <span id="publishYear">${item.publishYear}</span>
                    </p>
                </div>
        </div>
    </div>`
    });
    bookCards.innercard;
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    collectInfo();
})