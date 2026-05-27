const temparature = 20

if (temparature < 0) {
    console.log("It's freezing!")
}

else if (temparature >= 0 && temparature <= 15) {
    console.log("It's cold")
}

else if (temparature >= 16 && temparature <= 25) {
    console.log("It's mild")
}

else {
    console.log("It's warm")
}

switch (true) {

    case temparature < 0:
        console.log("It's freezing!")
        break

    case temparature >= 0 && temparature <= 15:
        console.log("It's cold")
        break

    case temparature >= 16 && temparature <= 25:
        console.log("It's mild")
        break

    default:
        console.log("It's warm")
}


const number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both")
}

else if (number % 2 === 0) {
    console.log("Divisible by 2")
}

else if (number % 3 === 0) {
    console.log("Divisible by 3")
}

else {
    console.log("Not divisible by 2 or 3")
}

switch (true) {
 
    case number % 2 === 0 && number % 3 === 0:
        console.log("Divisible by both")
        break

    case number % 2 === 0:
        console.log("Divisible by 2")
        break

    case number % 3 === 0:
        console.log("Divisible by 3")
        break
    
    default:
        console.log("Not divisible by 2 or 3")
}


for (let number = 1; number <=10 ; number++) {
    console.log(number)
}

for (let number = 1; number <= 20; number++) {
    
    if (number % 2 === 0) {
        console.log(number)
    }
} 

let sum = 0

for (let number = 1; number <= 100; number++) {
    sum += number
}

console.log(sum)

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

const numbers2 = [3, 7, 2, 5, 10, 6]
let largest = numbers2[0]

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i]
    }
}

console.log(largest)