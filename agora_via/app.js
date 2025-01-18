const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const fogosloading = document.querySelector('#loading')
const countdownConteiner = document.querySelector('#countdown')


const nextmonth = new Date().getFullYear()  
const newYearTime = new Date(`February 23 ${nextmonth} 00:00:00`)

const insertContdowValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = seconds < 10  ? '0' + seconds : seconds 
 minutesContainer.textContent = minutes < 10  ? '0' + minutes : minutes 
 hoursContainer.textContent = hours< 10  ? '0' + hours : hours 
 daysContainer .textContent = days < 10  ? '0' + days : days
}



const updadeCountdown = () => {
    const currentTime = new Date()
    const diffenrence = newYearTime - currentTime
    const days = Math.floor(diffenrence / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diffenrence / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(diffenrence / 1000 / 60) % 60
    const seconds = Math.floor(diffenrence / 1000) % 60

    insertContdowValues({ days, hours, minutes, seconds })
}

const handleCountdowDisplay = () => {
    fogosloading.remove()
    countdownConteiner.style.display = 'flex'
}

setTimeout(handleCountdowDisplay, 3500)

setInterval(updadeCountdown, 1000)