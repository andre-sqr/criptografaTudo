// definição de variáveis para DOM

var container = document.getElementById('mainContainer')
var botaoConfirma = document.querySelector('#allDone')
var tipoSelecao = document.getElementById('typeSelection')
var divDeslocamento = document.getElementById('divDeslocamento')
var btnDiv = document.getElementById('buttonDiv')

// Botão


// Cria caixa de texto do resultado

function makesBox (texto) {
var areaResultado = document.querySelector('#resultArea')
var resultadoP = document.createElement('p')
resultadoP.innerHTML = `O resultado do seu texto é: <br>${texto}`
resultadoP.style.fontFamily = 'Arial'
areaResultado.style.display = 'flex'
areaResultado.style.justifyContent = 'center'
areaResultado.style.textAlign = 'center'
areaResultado.append(resultadoP)
}

// Codificador/decodificador cifra de César

function cesar (texto, desloc) {
    var codificarOuDecodificar = document.querySelector('input[type = radio]:checked').value
    var textoCodigo = ''
    var passo = parseInt(desloc)
    for (var i = 0; i < texto.length; i++) {
        var numLetra = texto[i].charCodeAt()
        if (numLetra >= 65 && numLetra <= 90) {
            if (codificarOuDecodificar == 'code') {
                var elementoSomado = (numLetra - 65 + passo) % 26
                textoCodigo += String.fromCharCode(elementoSomado + 65)
            } else if (codificarOuDecodificar == 'decode') {
                var elementoSomado = (numLetra - 65 - passo + 26) % 26
                textoCodigo += String.fromCharCode(elementoSomado + 65)
            }
        } else if (numLetra >= 97 && numLetra <= 122) {
            if (codificarOuDecodificar == 'code') {
                var elementoSomado = (numLetra - 97 + passo) % 26
                textoCodigo += String.fromCharCode(elementoSomado + 97)
            } else if (codificarOuDecodificar == 'decode') {
                var elementoSomado = (numLetra - 97 - passo + 26) % 26
                textoCodigo += String.fromCharCode(elementoSomado + 97)
            }
        } else {
            textoCodigo += String.fromCharCode(numLetra);
        }
    }
    makesBox(textoCodigo)
}

// Codificador/decodificador de Base64

function base(mensagem) {
    var baseTexto = ''
    var codificarOuDecodificar = document.querySelector('input[type = radio]:checked').value
    if (codificarOuDecodificar == 'code') {
        baseTexto = btoa(mensagem)
    } else if (codificarOuDecodificar == 'decode') {
        baseTexto = atob(mensagem)
    }
    makesBox(baseTexto)
}

// Botão: Interações e eventos

var tipoCode = document.querySelector('#codeRadio')
var tipoDecode = document.querySelector('#decodeRadio')

tipoCode.addEventListener('change', function () {
    botaoConfirma.value = 'Codificar'
}
)

tipoDecode.addEventListener('change', function () {
    botaoConfirma.value = 'Decodificar'
})


botaoConfirma.addEventListener("click", function (event) {
    event.preventDefault()
    var numeroDeslocamento = document.querySelector('#deslocamento').value;
    var textoMensagem = document.querySelector('#textMessage').value
    
    if (textoMensagem != '' && tipoSelecao.value == 'cesar') {
        cesar (textoMensagem, numeroDeslocamento)
    } else if (textoMensagem != '' && tipoSelecao.value == 'base') {
        base(textoMensagem)
    } else {
        alert('Coloque uma mensagem para ser codificada')
    }
}
);

// Remove label e input de deslocamento quando Base64 é selecionado


tipoSelecao.addEventListener('click', function () {
    if (tipoSelecao.value == 'cesar') {
        divDeslocamento.style.display = 'flex';
    } else {
        divDeslocamento.style.display = 'none';
    }
}
);