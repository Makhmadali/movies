let movieName = document.getElementById('name')
let movieRating = document.getElementById('rating')
let selectCategories = document.getElementById('categories')

console.log(movies)

let Categories = []
movies.forEach(e =>{
    e.categories.forEach(el=> !Categories.includes(el) ? Categories.push(el) : Categories)
})

Categories.forEach(e => {
    let OPTION = document.createElement('option')
    OPTION.textContent = e
    selectCategories.appendChild(OPTION)
})
console.log(Categories);