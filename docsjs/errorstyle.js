const errorInput = document.querySelector("#error-style")
const errorMessage = document.querySelector("#error-message")

errorInput.addEventListener('input', (e) =>{


    if(e.target.value.length + 1 > 10 ){
        errorMessage.innerHTML = "Wow you did it"
        errorMessage.style.color = "green"

    }else{
        errorMessage.innerHTML = "Enter at least fifteen charecter."
        errorMessage.style.color = "red"
    }
})