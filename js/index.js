(function headerMuda() {
  var menu = document.getElementById("menu")
  var logo = document.getElementById("txlogo")
  var bttn = document.getElementById("entrar")
  var burger = document.getElementById("toggle")

  window.addEventListener("scroll", function () {
      if (scrollY > 0)
      menu.classList.add("menuFixo"),
      logo.classList.add("logoFixo"),
      bttn.classList.add("entrarFixo"),
      burger.classList.add("burgerFixo")
      else
      menu.classList.remove("menuFixo"),
      logo.classList.remove("logoFixo"),
      bttn.classList.remove("entrarFixo"),
      burger.classList.remove("burgerFixo")
  })
})()


/*MENU SHOW*/

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click',()=>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('nav-toggle','nav-menu')

/*ACTIVE AND REMOVE MENU*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  
  //Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')   

  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')

}


