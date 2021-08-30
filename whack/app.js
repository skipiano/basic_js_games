const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPos = square[Math.floor(Math.random() * 9)]
    randomPos.classList.add('mole')


    hitPosition = randomPos.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        console.log("id: " + id.id)
        console.log("hit: " + hitPosition)
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            clearInterval(timerMove)
            if (currentTime !== 0) {
                randomSquare()
                timerMove = setInterval(randomSquare, 1000)
            }
        } else {
            result = result - 0.3
            score.textContent = result
        }
    })
})

let timerMove = setInterval(randomSquare, 1000)

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('score: ' + result)
    }
}

let timerId = setInterval(countDown, 1000)