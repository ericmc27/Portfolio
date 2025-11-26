let display = "about"

function handleDisplayChange(className){
  document.querySelector('.active').classList.remove('active')
  document.getElementById(display).style.display = 'none'
  
  document.querySelector(`.${className}`)?.classList.add('active')
  document.getElementById(className).style.display = 'block'

  display = className
}