const analyzer = {
  getWordCount: (text) => {
    if (text === "") {
      return 0;
    } else {
      const palabras = text.split(" ");
      const palabrasSinEspacio = palabras.filter(
        (palabra) => palabra.length !== 0
      );
      return palabrasSinEspacio.length;
    }
  },

  getCharacterCount: (text) => {
    if (text === "") {
      return 0;
    } else {
      return text.length;
    }
  },

  getCharacterCountExcludingSpaces: (text) => {
    if (text === "") {
      return 0;
    } else {
      const regex = /[a-zA-Z0-9]/g;
      const caracteresSinEspacio = text.match(regex) || [].length;
      return caracteresSinEspacio.length;
    }
  },

  getAverageWordLength: (text) => {
    const palabrasCadena = text.split(" ");
    const palabrasValidas = palabrasCadena.filter((palabraCadena) => palabraCadena.trim().length > 0);
  
    if (palabrasValidas.length === 0) {
      return 0;
    } else {
      let sumaPalabras = 0;
      for (let i = 0; i < palabrasValidas.length; i++) {
        const palabraCadena = palabrasValidas[i];
        sumaPalabras += palabraCadena.length;
      }
      const palabrasRedondeadas = sumaPalabras / palabrasValidas.length;

      return parseFloat(palabrasRedondeadas.toFixed(2));
    }
  },
     getNumberCount: (text) => {

      if(text === ""){
        return 0;
      } else {  
        const regexNum = /\b\d+(\.\d+)?\b/g;
        const numerosEncontrados = text.match(regexNum);
        if(numerosEncontrados) {
          return numerosEncontrados.length;
        } else {  
          return 0;
        }

      }
      
  },
  getNumberSum: (text) => {

    if (text === ""){
      return 0;
    } else {
      const regexSuma = /\b\d+(\.\d+)?\b/g;
      const sumaNumeros = text.match(regexSuma);
      let suma = 0;
      if (sumaNumeros === null) {
        return 0;
      }
      for (let i = 0; i < sumaNumeros.length; i++) {
        suma += parseFloat(sumaNumeros[i])
      }
      return suma
    }
  }     
};

export default analyzer;
