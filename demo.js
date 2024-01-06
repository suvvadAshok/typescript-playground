// console.log('hello world')
// const a = 'hello'
// const b = 'world'
// console.log('%s %s', a, b)
// console.log(`${a} ${b}`)
// console.log("ashok's") //'ashok\'s'z
// function me() {
//   console.log(b)
//   var a = 'ashok'
//   console.log(a)
// }
// me()
// console.log(d)
// var d = 5
// console.log(d)

import { assert } from 'console'

// let str1 = 'ashok'
// let str2 = 'good'
// console.log('%s makes %s things', str1, str2)
// console.log(`${str1} makes always ${str2} things`)

// const people = ['ashok', 'suvvada', 'me']
// const one = 1
// const str = 'hii'
// const b = true
// const person = {
//   firstname: 'Suvvada',
//   lastname: 'Ashok',
// }

// function sayHello(person) {
//   console.log('hello ' + person.firstname)
// }

// console.log('--type of--')
// console.log(typeof people)
// console.log(typeof one)
// console.log(typeof str)
// console.log(typeof b)
// console.log(typeof person)
// console.log(typeof sayHello)

/*map filter reduce */

// const users = [
//   { firstName: 'Ashok', lastName: 'Suvvada', age: 22 },
//   { firstName: 'Hari', lastName: 'Suvvada', age: 24 },
//   { firstName: 'RamaRao', lastName: 'Suvvada', age: 44 },
// ]
/*******_____MAP_____********/

// function fullName(x) {
//   return x.firstName + ' ' + x.lastName
// }
// const output = users.map(fullName)
// console.log(output)

// const output = users.map(function fullaName(x) {
//   return x.firstName + ' ' + x.lastName
// })

// console.log(output)

// const output = users.map(
//   x => x.firstName + ' ' + x.lastName,
// )
//console.log(output)

/*********_______FILTER_____*********/

// function young(x) {
//   return x.age < 40
// }
// const output = users.filter(young)

// function firstName(y) {
//   return y.firstName
// }

// const output1 = output.map(firstName)
// console.log(output) //to get array of objects
// console.log(output1) // to get array of strings

/*********_____REDUCE_____*********/

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age]
//   } else {
//     acc[curr.age] = 1
//   }
//   return acc
// }, {})

// console.log(output)
// let acc = {}
// function re(acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age]
//   } else {
//     acc[curr.age] = 1
//   }
//   return acc
// }

// const output = users.reduce(re)

// console.log(output)

//

/******DATE*******/

//create object for date

// const d = new Date()

// //specific the date and time

// const now = new Date(2023, 2, 17, 15, 52, 37)
// console.log(now)

// //specific the date

// const n = new Date(2023, 2, 17)
// console.log(n)

//Setting date

// const now = new Date()
// console.log(now.getDay())
// console.log(now.getMilliseconds())
// console.log(now.getTime())

// now.setFullYear(2023)
//   .
//   .
//   .like the above set the every value for date

// const { length: len } = 'abc'
// console.log(len)

// const address = {
//   street: 'ads;lf',
//   number: 742,
//   city: 'lsjf',
//   state: 'lsfjas;',
//   zip: '234523',
// }

// const { street: s, city: c } = address
// console.log(s)
// console.log(c)
// console.log(typeof address.number)

// function myFunction(v, w, x, y, z) {
//   console.log(v, w, x, y, z)
// }
// const args = [0, 1, [7]]
// myFunction(-1, 2, ...args, ...[3])

function findElement(arr, predicate) {
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index]
    if (predicate(value)) {
      // We found something:
      return { value, index }
    }
  }
  // We didn’t find anything:
  return { value: undefined, index: -1 }
}

console.log(findElement([2, 5, 4, 3, 7, 9], 4))
