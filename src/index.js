const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let str = expr;
  let letter = '';
  let counter = 0;
  let result = '';

  while (str) {
    switch (str.slice(0, 2)) {
      case '00':
        counter++;
        break;
      case '10':
        letter += '.';
        counter++;
        break;
      case '11':
        letter += '-';
        counter++;
        break;
      case '**':
        result += ' ';
        str = str.slice(10);
        letter = '';
        counter = 0;
        continue;
    }

    str = str.slice(2);

    if (counter === 5) {
      result += MORSE_TABLE[letter];
      letter = '';
      counter = 0;
    }
  }

  return result;
}

module.exports = {
  decode
};
