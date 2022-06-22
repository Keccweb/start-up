const form = document.querySelector('form')
const btn = document.querySelector('.header button')
const overlay = document.querySelector('.overlay')

btn.addEventListener('click', function () {
   form.classList.remove('hidden')
   overlay.classList.remove('hidden')
})

