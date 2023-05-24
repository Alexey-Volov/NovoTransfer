const btnAuto = document.querySelector("#btn-auto")
btnAuto.addEventListener("click", clickButton)
const listAuto = document.querySelector(".autopark__list")
let trueButton = "Посмотреть автопарк"
let falseButton = "Свернуть"

function clickButton(e) {
    listAuto.classList.toggle("none")

    if(listAuto.classList.contains("none")) {
        btnAuto.innerHTML = trueButton;
    } else {
        btnAuto.innerHTML = falseButton;

    }
}


