import Dog from './Dog.js'
import dogs from './data.js'


const newgetDogs = () => {
    const freshDog = dogs.shift()
    dogs.push(freshDog)
    return freshDog
}

document.getElementById('liked-btn').addEventListener('click', (e) => {
    dog.hasBeenLiked = true
    anotherDog()
})


document.getElementById('Nope-btn').addEventListener('click', (e) =>{
    anotherDog()
})



function anotherDog(){
    dog.hasBeenSwiped = true
    renderDog()
    dog = new Dog(newgetDogs())
    setTimeout(()=>{
        renderDog()
    }, 2000)
}



function renderDog(){
    document.getElementById('main').innerHTML = dog.getDogHtml()
    document.getElementById('main').style.background = `url(./${dog.avatar})`
    document.getElementById('main').style.backgroundSize = "cover"
}

let dog = new Dog(newgetDogs())
renderDog()