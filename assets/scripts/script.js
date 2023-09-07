const rotater = document.querySelector('.rotater')
console.log(rotater)

let numbers = [1, 2, 3, 6, 9, 8, 7, 4, 5]

function rotation() {
  let one = document.getElementById('one')
  let two = document.getElementById('two')
  let three = document.getElementById('three')
  let four = document.getElementById('four')
  let five = document.getElementById('five')
  let six = document.getElementById('six')
  let seven = document.getElementById('seven')
  let eight = document.getElementById('eight')
  let nine = document.getElementById('nine')
  
  let newNumber =numbers.splice(numbers.length -2, 1)

  numbers.unshift(newNumber[0])

  one.innerHTML = numbers[0]
  two.innerHTML = numbers[1]
  three.innerHTML = numbers[2]
  four.innerHTML = numbers[7]
  five.innerHTML = numbers[8]
  six.innerHTML = numbers[3]
  seven.innerHTML = numbers[6]
  eight.innerHTML = numbers[5]
  nine.innerHTML = numbers[4]

  return numbers 
}

rotater.addEventListener('click', rotation);