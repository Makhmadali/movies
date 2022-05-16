let movieName = document.getElementById('name')
let movieRating = document.getElementById('rating')
let selectCategories = document.getElementById('categories')
let btn = document.querySelector('.btn')
let movieList = document.querySelector('.movies')
console.log(movies)
// console.log(categories);


let Categories = []

movies.forEach(e =>{
    e.categories.forEach(el=> !Categories.includes(el) ? Categories.push(el) : Categories)
})


Categories.forEach(e => {
    let OPTION = document.createElement('option')
    OPTION.textContent = e
    selectCategories.appendChild(OPTION)
})

let renderMovies = (arr) =>{
    arr.forEach(e =>{
        let CARDWRAPPER = document.createElement('div')
        CARDWRAPPER.classList.add('card')
        CARDWRAPPER.classList.add('col-6')
        
        let IMAGE = document.createElement('img')
        IMAGE.src = e.smallThumbnail
        IMAGE.classList.add('card-image-top')

        CARDWRAPPER.appendChild(IMAGE)

        let CARDBODY = document.createElement('div')
        CARDBODY.classList.add('card-body')

        CARDWRAPPER.appendChild(CARDBODY)

        let TITLE = document.createElement('h5')
        TITLE.classList.add('card-title')
        TITLE.textContent = e.title

        CARDBODY.appendChild(TITLE)

        movieList.appendChild(CARDWRAPPER)
    })
}

btn.addEventListener('click' , () =>{
    console.log(movieName.value);
    const myReg = new RegExp(`${movieName.value}`, "gi")
    // console.log(myReg);
    let filterMovies = movies.filter((e) => myReg.test(e.title))

    console.log(filterMovies);
    
    renderMovies(filterMovies)
})