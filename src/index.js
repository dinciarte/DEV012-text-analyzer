import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const output1 = document.querySelector(".mi-output1");
const textArea = document.querySelector("textarea");
const botonReset = document.getElementById("reset-button")

textArea.addEventListener("input", () => {
    const resultadoPalabras = analyzer.getWordCount(textArea.value);
    output1.innerHTML = "Palabras: " + resultadoPalabras ;

  }); 

botonReset.addEventListener("click", () => {
    textArea.value = " ";
    output1.innerHTML = "Palabras: ";
}) 