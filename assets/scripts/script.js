const rotater = document.querySelector('.rotater')
console.log(rotater)

let numbers = [1, 2, 3, 6, 9, 8, 7, 4,]

  let one = document.getElementById('one')
  let two = document.getElementById('two')
  let three = document.getElementById('three')
  let four = document.getElementById('four')
  let five = document.getElementById('five')
  let six = document.getElementById('six')
  let seven = document.getElementById('seven')
  let eight = document.getElementById('eight')
  let nine = document.getElementById('nine')
  

  
function clockwise (numbers) {
  numbers.unshift(numbers.pop())
}

function anticlock (numbers) {
  numbers.push(numbers.shift())
}

//  let secc=newnum
//  console.log(numbers)

function update (numbers) {
  one.innerHTML = numbers[0]
  two.innerHTML = numbers[1]
  three.innerHTML = numbers[2]
  four.innerHTML = numbers[3]
  six.innerHTML = numbers[4]
  seven.innerHTML = numbers[5]
  eight.innerHTML = numbers[6]
  nine.innerHTML = numbers[7]
}

rotater.addEventListener('click', ()=> {
  clockwise(numbers)
  update(numbers)
});

one.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
seven.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
two.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
three.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
four.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})

six.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
eight.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
nine.addEventListener('click', () => {
  anticlock(numbers)
  update(numbers)
})
  