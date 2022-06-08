const alphabet = "abcdefghijklmnopqrstuvwxyz"

function generate() {
  for (let i = 1; i < 5; i++) { 
  let inputBlock = document.getElementById(`text-${i}`)
  inputBlock.value= createPassword()
}  
}




function createPassword() {
  let counter = []
  let i = 0;
while (i < 8) {
  let letter = alphabet[Math.floor(Math.random()*alphabet.length)]
    counter.push(letter)
  i++;
}
  counter.join()
    return counter
}
