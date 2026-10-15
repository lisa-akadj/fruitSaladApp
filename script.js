const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')
fruitForm.addEventListener('submit', extractFruit)

let cal = 0

function extractFruit(e) {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}

function addFruit(fruit) {
    const li = document.createElement('li')
    li.textContent = fruit.name
    li.addEventListener('click', removeFruit)
    fruitList.appendChild(li)

    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal

    const img = document.createElement('img')
    linkToImage = fruit.hits[0]
    img.src = linkToImage.previewURL
    console.log(linkToImage.previewURL)
}

// stop it from submitting empty 
// when a fruit is clicked it should be removed 

function removeFruit(e) {
    e.target.remove()
}

// function fetchFruitData(fruit) {
//     fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
//         .then(processResponse)
//         .then(data => addFruit(data))
//         .catch(e => console.log(e))
// }

// function processResponse(resp) {
//     if (resp.ok) {
//         return resp.json()
//     } else {
//         throw "Error: http status code = " + resp.status
//     }
// }

async function fetchFruitData(fruit) {
    try {
        const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);

        if (resp.ok) {
            const data = await resp.json();
            addFruit(data);
        } else {
            throw "Error: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}

async function fetchFruitImage(fruit) {
    try {
        const resp = await fetch(`https://pixabay.com/api/?key=58058901-ca8964ba9fe7e27504a2b8cdf&q=${fruit}&image_type=photo&pretty=true`);

        if (resp.ok) {
            const data = await resp.json();
            addFruit(data);
        } else {
            throw "Error: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}