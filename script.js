let movieName = document.getElementById('name')
let movieRating = document.getElementById('rating')
let selectCategories = document.getElementById('categories')
let btn = document.querySelector('.btn')
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

btn.addEventListener('click' , e =>{
    console.log(movieName.value)
    if (Categories)
})