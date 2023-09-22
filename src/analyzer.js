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
    const palabrasValidas = palabrasCadena.filter(
      (palabraCadena) => palabraCadena.trim().length > 0
    );

    if (palabrasValidas.length === 0) {
      return 0;
    } else {
      const longitudPalabras = palabrasValidas.reduce(
        (sumaPalabra, palabraCadena) => sumaPalabra + palabraCadena.length,
        0
      );
      const longituPromedioPalabras = longitudPalabras / palabrasValidas.length;
      const longituPromedioPalabrasRedondeadas = parseFloat(
        longituPromedioPalabras
      ).toFixed(2);
      return longituPromedioPalabrasRedondeadas;
    }
  },
  //   getNumberCount: (text) => {
  //     TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  //   },
  getNumberSum: (text) => {
      let suma = 0;
      const numerosArray = text.split(' ');
      for (let i = 0; i < numerosArray.length; i++) {
        const numero = parseFloat(numerosArray[i]);
        if (typeof numero === 'number') {
          suma += numero;
        }
      }
      return "Números: " + " " + suma ; 
    }
};

export default analyzer;
