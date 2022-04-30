// definição de variáveis para DOM

var mainContainer = document.querySelector('#mainContainer')
var body = document.body
var botaoConfirma = document.querySelector('#allDone')

// Modo Escuro

function darkOn () {
    body.style.backgroundColor = 'black';
}


// Codificador/decodificador cifra de César

function cesar (texto, desloc, valor) {
    var textoCodigo = ''
    var elementoSomado = 0
    for (var i = 0; i <= texto.length; i++) {
        if ((texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) || (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)) {
            console.log('Entrou!')
            elementoSomado = (Number(texto.charCodeAt(i)) - 65) 
            elementoSomado += (Number(desloc) * valor) % 26
            elementoSomado += 65
            textoCodigo += String.fromCharCode(elementoSomado);
        } else {
            textoCodigo += String.fromCharCode(texto.charCodeAt(i));
        }
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
        cesar (textoMensagem, numeroDeslocamento, codificarOuDecodificar)
        
    } else if (textoMensagem != '' || tipoSelecao == 'base') {
        
    } else {
        alert('Coloque uma mensagem para ser codificada')
    }
}
)

