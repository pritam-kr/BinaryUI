const primaryToast = document.querySelector(".primary-toast")
const btnToast = document.querySelector("#btn-toast")

btnToast.addEventListener('click', () => {
    primaryToast.classList.add("active-toast")

    setTimeout(() => {
        primaryToast.classList.remove("active-toast")
    }, 3000)
})