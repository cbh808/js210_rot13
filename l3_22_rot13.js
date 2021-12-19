function rot13(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let char        = string[index]
    let charCode    = char.charCodeAt(0);
    let wrapAround  = String.fromCharCode(charCode - 13)
    let moveUp      = String.fromCharCode(charCode + 13)

    if (char >= 'a' && char <= 'z') {
      if (char >= 'n') {
        result += wrapAround;
      } else {
        result += moveUp;
      }
    } else if (char >= 'A' && char <= 'Z') {
        if (char >= 'N') {
        result += wrapAround;
      } else {
        result += moveUp;
      }
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));