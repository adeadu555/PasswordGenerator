

var length = Number(prompt("Type password characters between 8 and 128")),
    characterType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
    password = writePassword();
document.getElementById("generate").value = password;
document.getElementById("generate").addEventListener('click', writePassword);

function writePassword() {
    var characterSets = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',

    }
    var characterSets = characterSets[characterType.toLowerCase()] || characterSets.lower;
    var returnValue = "";
    for (var i = 0; i < length; i++) {
        returnValue += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return returnValue;
}

generateBtn.addEventListener("click", writePassword);









