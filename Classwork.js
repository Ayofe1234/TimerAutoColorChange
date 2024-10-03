var time = document.querySelector('.time')
var sun = document.querySelector('.sun')
var moon = document.querySelector('.moon')
var light  = document.querySelector('#lightmode')
var dark = document.querySelector('#darkmode')
var body = document.querySelector('body')
var greetmorning = document.querySelector('.greet2')
var nightmorning = document.querySelector('.greet')


function readTime(){

// Get the current date
const date = new Date ()
const hour = date.getHours()
const min = date.getMinutes()
const sec = date.getSeconds()

// rendering the current date to html

time.innerHTML = `${hour} : ${min} : ${sec}`
}

readTime()
setInterval(readTime,1000)
light.addEventListener('click', function(){
body.style.backgroundColor = 'white'
time.style.color = 'black'
light.style.display = 'none'
dark.style.display = 'block'
nightmorning.style.display = 'none'
greetmorning.style.display = 'block'

})
dark.addEventListener('click', function(){
    body.style.backgroundColor = 'black'
    time.style.color = 'white'
    light.style.display = 'block'
    dark.style.display = 'none'
    light.style.color ='white'
    nightmorning.style.display = 'block'
    greetmorning.style.display = 'none'
    
    })



