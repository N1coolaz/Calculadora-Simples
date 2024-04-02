
const resultado = document.getElementById('resultado')

function inserir(num) {
    resultado.innerHTML += num
}

function erase(){
    resultado.innerHTML = ""
}

function apagarum() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring ( 0, resultado.length -1 )
}

function calculo() {
    if( resultado != ''){
        resultado.innerHTML = eval(resultado.textContent)
    }
}
