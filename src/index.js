import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const output1 = document.querySelector("ul>li:nth-child(1)")
const output2 = document.querySelector("ul>li:nth-child(2)") 
const textArea = document.querySelector("textarea");
const botonReset = document.getElementById("reset-button")

textArea.addEventListener("input", () => {
    const resultadoPalabras = analyzer.getWordCount(textArea.value);
    output1.innerHTML = "Palabras: " + resultadoPalabras;

    const resultadoCaracter = analyzer.getCharacterCount(textArea.value);
    output2.innerHTML = "Caracteres: " + resultadoCaracter;


  }); 

botonReset.addEventListener("click", () => {
    textArea.value = "";
    output1.innerHTML = "Palabras: 0";
    output2.innerHTML= "Caracteres: 0"
}) 