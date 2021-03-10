var linkRaposa = document.querySelector(".link-raposa")
var raposa = document.querySelector(".raposa-link")
var linhaUnder = document.querySelector(".linha")
var animacaoParagrafo = document.querySelector("#animacao-paragrafo")
var dropdown = document.querySelector(".dropdown-start")

animacaoParagrafo.addEventListener('mouseover', animacoesStart)
animacaoParagrafo.addEventListener('mouseout', animacoesEnd)

function animacoesStart(){
    raposa.classList.remove("raposa-link-end")
    raposa.classList.add("raposa-link-start")

    linhaUnder.classList.remove("linha-end")
    linhaUnder.classList.add("linha-start")
}

function animacoesEnd(){
    raposa.classList.remove("raposa-link-start")
    raposa.classList.add("raposa-link-end")

    linhaUnder.classList.remove("linha-start")
    linhaUnder.classList.add("linha-end")
}

window.onload = function() {
    document.body.classList.add("fadein-end");
}