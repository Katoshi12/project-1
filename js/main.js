const navigation = document.querySelector('#navigation')
const burgerMenu = document.querySelector('#burger-menu')  
const burgerImg = document.querySelector('#burger-img')  

navigation.onclick = () => {
    if (navigation.classList.toggle('open')) {
       burgerImg.src = "./img/icons/close.svg" 
    } else {
       burgerImg.src = "./img/icons/burger-menu.svg" 
    }

}

AOS.init()
