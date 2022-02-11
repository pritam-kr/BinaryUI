const hamburgerMenu = document.querySelector('#hamburger-icon')

const sideBar = document.querySelector('#sidebar')

const navList = document.querySelectorAll('#nav-list')

hamburgerMenu.addEventListener('click', () => {
    const mediaQuery = window.matchMedia('(max-width: 976px)')

    if (mediaQuery.matches) {
        // Then trigger an alert
        sideBar.classList.toggle('active-mobile')
    } else {
        sideBar.classList.remove('active-mobile')
    }


})

navList.forEach((eachList) => {
    eachList.addEventListener('click', () => {
        sideBar.classList.remove('active-mobile')
    })
})