// Make a div
const div = document.createElement(`div`)

// add a class of wrapper to it

div.classList.add(`wrapper`)

// put it into the body
document.body.appendChild(div)

// make an unordered list
const list = document.createElement(`ul`)


// add three list items with the words "one, two three" in them
const one = document.createElement(`li`)

one.textContent = `one`

const two = one.cloneNode(true)
two.textContent = `two`

const three = one.cloneNode(true)
three.textContent = `three`

list.appendChild(one)
list.appendChild(two)
list.appendChild(three)

// put that list into the above wrapper
div.appendChild(list)


// create an image

const image = document.createElement(`img`)

// set the source to an image

image.src = `https://picsum.photos/600`
// set the width to 250

image.width = 250
// add a class of cute

image.classList.add(`cute`)
// add an alt of Cute Puppy

image.alt = `Cute Puppy`
// Append that image to the wrapper

div.appendChild(image)

// with HTML string, make a div, with two paragraphs inside of it

const secDiv = `
    <div class="pars">
        <p>first paragraph</p>
        <p>second paragrapgh</p>    
        <p>third paragrapgh</p>
    </div>
`;


// put this div before the unordered list from above

const ulitems = div.querySelector(`ul`)

ulitems.insertAdjacentHTML("beforebegin", secDiv)


const parsDiv = document.querySelector(`.pars`)
// console.log(parsDiv.firstElementChild)

// add a class to the second paragraph called warning
// parsDiv.lastElementChild.classList.add(`warning`)

parsDiv.lastElementChild.previousElementSibling.classList.add(`warning`)


// remove the first paragraph

// parsDiv.firstElementChild.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height){
    const htmlstring = `
            <div class="playerCard">
                <h2>${name} — ${age}</h2>
                <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
            </div>
    `
    return htmlstring
}

// make a new div with a class of cards


const cards = document.createElement(`div`)

cards.classList.add(`cards`)

// Have that function make 4 cards

let cardsstring = generatePlayerCard('cherrat', 10, 150);
cardsstring += generatePlayerCard('lazy', 12, 150);
cardsstring += generatePlayerCard('jack', 12, 150);
cardsstring += generatePlayerCard('redouan', 12, 150);


// append those cards to the div
cards.innerHTML = cardsstring;


// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cards)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
