const hangburgerMenu = document.querySelector('#hangburger-icon')

const sideBar = document.querySelector('#sidebar')

const navList = document.querySelectorAll('#nav-list')

hangburgerMenu.addEventListener('click', () => {
    const mediaQuery = window.matchMedia('(max-width: 976px)')
    console.log(mediaQuery)


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

 