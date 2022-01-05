const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const input = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const inputDec = document.querySelector('#dec');
const div = document.querySelector('#div');
const div2 = document.querySelector('#div2');

const button = document.querySelector('#but1')
    .addEventListener('click', () => code((input.value).split(''), Number.parseInt(inputDec.value)));

const button2 = document.querySelector('#but2')
    .addEventListener('click', () => decode((input2.value).split(""), Number.parseInt(inputDec.value)));


/**
 * code le message avec le decalage founit
 * 
 * @param {string} message
 * @param {number} dec
 */
function code(message, dec) {
    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (j < alphabet.length - dec) {
                if (message[i] === alphabet[j]) {
                    message[i] = alphabet[j + dec];
                    break;
                } else if (message[i] === "" || message[i] === ".") {
                    break;
                }           
            } else {
                if (message[i] === alphabet[j]) {
                    const newIndex = dec - (alphabet.length - j);
                    message[i] = alphabet[newIndex];
                    break;
                }               
            }                         
        }
    }
    div.textContent = message.join("");
}

/**
 * Décode avec le décalage
 * @param {string} message
 * @param {number} dec
 */
function decode(message, dec) {
    for (let i = 0; i < message.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (j > 0 + (dec - 1 )) {
                    if (message[i] === alphabet[j]) {
                        message[i] = alphabet[j - dec];
                        break;
                    } else if (message[i] === "" || message[i] === ".") {
                        break;
                    }           
                } else {
                    if (message[i] === alphabet[j]) {
                        const newIndex = alphabet.length - (dec - j);
                        message[i] = alphabet[newIndex];
                        break;
                    }               
                }                         
            }
        }
    div2.textContent = message.join("");
}

