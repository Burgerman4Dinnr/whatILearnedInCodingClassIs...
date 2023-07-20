let logo = document.getElementById('logo');
logo.innerText = "Kevin\'s Favorite Movies";


/*
    class Movie{
        constructor(){
            stuff
        }
        do stuff
    }

    establish prototype
    collect some data
    access the submit btn
    render cards based on the inputs
    <!--title, description, image, director, genre, year, duration-->
*/

class Movie {
    constructor() {
        this.movieObj = {
            title: '',
            description: '',
            image: '',
            director: '',
            genre: '',
            year: '',
            duration: ''
        }
    }

    button() {
        let button = document.getElementById('submitBtn');
        button.addEventListener('click', this.displayData)
    }

    displayData(e) {
        e.preventDefault();
        let inputTitle = document.getElementById('movieTitle').value;
        let inputDescription = document.getElementById('movieDescription').value;
        let inputImage = document.getElementById('movieImage').value;
        let inputDirector = document.getElementById('movieDirector').value;
        let inputGenre = document.getElementById('select[name=movieGenre]').value;
        let inputYear = document.getElementById('movieYear').value;
        let inputDuration = document.getElementById('movieDuration').value; 
        console.log(inputGenre)

        this.movieObj = {
            title: inputTitle,
            description: inputDescription,
            image: inputImage,
            director: inputDirector,
            genre: inputGenre,
            year: inputYear,
            duration: inputDuration
        }
        // console.log(this.movieObj);
        let cardDisplay = document.getElementById('cardDisplay');
        cardDisplay.innerHTML += `
        <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 id="title">${this.movieObj.title}</h3>
                        </div>
                        <img src="${this.movieObj.description}" class="img-fluid movie-img">
                        <div class="card-body">
                            <p class="card-text" id="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repellendus exercitationem rem quod maxime voluptas tempora at id neque. Sint!
                            </p>
                            <p class="card-text" id="Director">${this.movieObj.director}</p>
                            <p class="card-text" id="genre">${this.movieObj.genre}</p>
                        </div>
                        <div class="card-footer">
                            <p class="card-text" id="year">${this.movieObj.year}</p>
                            <p class="card-text" id="movieduration">${this.movieObj.minutes}</p>
                        </div>
                    </div>
                </div>`
    }
}

let action = new Movie();
action.button();