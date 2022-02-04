const modalActive = document.querySelector('#btn-modal-active')
const modalBox = document.querySelector("#modal-box")
const modalClose = document.querySelector("#modal-close")

modalActive.addEventListener('click', (e) => {
     modalBox.classList.add("active-modal")
})

modalClose.addEventListener('click', () => {
    modalBox.classList.remove("active-modal")
})