import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const output1 = document.querySelector("ul>li:nth-child(1)")
const output2 = document.querySelector("ul>li:nth-child(2)") 
const output3 = document.querySelector("ul>li:nth-child(3)")
const output4 = document.querySelector("ul>li:nth-child(6)")
const textArea = document.querySelector("textarea");
const botonReset = document.getElementById("reset-button")

const updateList = () => {

  const resultadoPalabras = analyzer.getWordCount(textArea.value);
  output1.innerHTML = "Palabras: " + resultadoPalabras;

  const resultadoCaracter = analyzer.getCharacterCount(textArea.value);
  output2.innerHTML = "Caracteres: " + resultadoCaracter;

  const resultadoCaracterSinEspacio = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  output3.innerHTML = "Caracteres S/E: " + resultadoCaracterSinEspacio;

  const resultadoPromedioPalabras = analyzer.getAverageWordLength(textArea.value);
  output4.innerHTML  = "Longitud promedio: " + resultadoPromedioPalabras;

}

textArea.addEventListener("input", updateList); 

botonReset.addEventListener("click", () => {
    textArea.value = "";
    updateList();
});