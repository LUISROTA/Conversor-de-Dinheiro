const butão = document.getElementById('botão')

const dolar = 5.2


const converteValor = () => {
    const inputReal = document.getElementById(`input-valor`).value
    const valorReal = document.getElementById(`valor-real-texto`)
    const valordolartext = document.getElementById(`valor-dolar-text`)

    valorReal.innerHTML = inputReal
    valordolartext.innerHTML = inputReal / dolar
    console.log(inputReal / dolar)
}

butão.addEventListener('click', converteValor)