const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const message = "abc";
const dec = 2;


code(message, dec);

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
                }
            }
        }
    }
    console.log(message.join(""));
}