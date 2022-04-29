// definição de variáveis para DOM

var mainContainer = document.querySelector('#mainContainer')
var body = document.body
var botaoConfirma = document.querySelector('#allDone')

// Modo Escuro

function darkOn () {
    body.style.backgroundColor = 'black';
}


// Codificador/decodificador cifra de César

function codifica (texto, passe) {
    var textoCodigo = ''
    var elementoSomado = 0
    for (let i = 0; i <= texto.length; i++) {
     elementoSomado = texto.charCodeAt(i)
     elementoSomado += Number(passe)
     textoCodigo += String.fromCharCode(elementoSomado);
    }
    console.log(textoCodigo);
    var areaResultado = document.querySelector('#resultArea')
    var resultadoP = document.createElement('p')
    resultadoP.innerHTML = `O resultado do seu texto é: <br>${textoCodigo}`
    resultadoP.style.fontFamily = 'Arial'
    areaResultado.style.display = 'flex'
    areaResultado.style.justifyContent = 'center'
    areaResultado.style.textAlign = 'center'
    areaResultado.append(resultadoP)
}

botaoConfirma.addEventListener("click", function (event) {
    event.preventDefault()
    var numeroDeslocamento = document.querySelector('#deslocamento').value;
    var textoMensagem = document.querySelector('#textMessage').value
    var tipoSelecao = document.querySelector('#typeSelection').value
    var codificarOuDecodificar = document.querySelector('input[type = radio]:checked').value

    if (textoMensagem != '' || tipoSelecao == 'cifra') {
        codifica (textoMensagem, numeroDeslocamento)
        
    } else {
        alert('Coloque uma mensagem para ser codificada')
    }
    console.log(numeroDeslocamento)
    console.log(textoMensagem)
    console.log(tipoSelecao)
    console.log(codificarOuDecodificar)
}
)

