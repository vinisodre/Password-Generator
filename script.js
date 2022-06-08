const alphabet = "abcdefghijklmnopqrstuvwxyz"

function generate() {
  for (let i = 1; i < 5; i++) { 
  let inputBlock = document.getElementById(`text-${i}`)
  inputBlock.value= createPassword().toUpperCase()
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
  const array1 = [1, 2, 'a', '1a'];
  console.log(array1)
console.log(typeof array1)

console.log(array1.join(''));
  console.log("tipo", typeof counter)
  return counter.join('')
}
