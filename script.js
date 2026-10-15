const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
fruitForm.addEventListener('submit', extractFruit)
fruitList.addEventListener('click', removeFruit)

function extractFruit(e) {
    e.preventDefault()
    addFruit(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}

function addFruit(fruit) {
    const li = document.createElement('li')
    li.textContent = fruit
    fruitList.appendChild(li)
}

// stop it from submitting empty 
// when a fruit is clicked it should be removed 

function removeFruit(fruit) {

}