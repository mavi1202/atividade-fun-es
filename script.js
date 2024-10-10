function somar() {
    const numero1 = Number(document.querySelector("#numero-1").value)
    const numero2 = Number(document.querySelector("#numero-2").value)

    const  paragrafo = document.querySelector(".resultado")

    paragrafo.innerHTML = `Resultado: ${numero1+numero2}`


}

const button = document.querySelector("button")
button.addEventListener('click, somar')