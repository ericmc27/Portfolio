let display = "home-div"

function handleDisplayChange(id){
  document.querySelector('.active').classList.remove('active')
  document.getElementById(display).style.display = 'none'
  
  document.querySelector(`.${id}`)?.classList.add('active')
  currentDisplay = document.getElementById(`${id}-div`)

  
  currentDiv = new Set(["home-div", "about-div", "projects-div"])
  if (currentDiv.has(`${id}-div`)){
    currentDisplay.style.display = 'flex'
  }else{
    currentDisplay.style.display = 'block'
  }

  display = `${id}-div`
}