const butão = document.getElementById('botão')
const select = document.getElementById(`select-resultado`)
const dolar = 5.2


const converteValor = () => {
    const inputReal = document.getElementById(`input-valor`).value
    const valorReal = document.getElementById(`valor-real-texto`)
    const valordolartext = document.getElementById(`valor-dolar-text`)

    //valorReal.innerHTML = inputReal
    // valordolartext.innerHTML = inputReal / dolar
    console.log(inputReal / dolar)

    valorReal.innerHTML = new Intl.NumberFormat('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReal);

    valordolartext.innerHTML = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD'
        }
    ).format(inputReal / dolar);
}

trocar = () => {
    const paragrafo = document.getElementById("paragrafo")
    const bandeirapaisconversão = document.getElementById(`bandeira-pais-conversão`)

    //console.log(select.value)

    if (select.value === " US$ Dólar americano") {
        paragrafo.innerHTML = "Dólar Americano"
        bandeirapaisconversão.src = "./img/estados-unidos (1) 1.jpg"
    }
    if (select.value === "€ Euro") {
        paragrafo.innerHTML = "Euro"
        bandeirapaisconversão.src = "./Design sem nome 1.jpg"
    }


}
butão.addEventListener("click", converteValor)
select.addEventListener("change", trocar)