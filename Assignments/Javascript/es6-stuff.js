// ES6
        // const & let  ( js scoping )
        // String literals
        // Arrow functions
        // Object and Array Destructuring  
        // Object Literals
        // Default Parameters
        // Spread and Rest(gather)  
        // Import/Export

// const & let
    // const:  Constant variable, cannot be re-assigned/changed
    // let: variable, can be re-assigned/changed

//     function scoping(){
//         let a
//         if(true){
//             a = "hello"
//         }
//         return a
//     }
//  console.log(scoping())
    
 // var: local scope
 // const & let: lexical scope (nearest { })

// // String Literals
    // var name = "Joe"
    // console.log(`${name} says hi`)


// Arrow Functions
    // var fizzBuzz = function(){
    // }
    // const fizzBuzz = () => {
    // }

const arr = [3, 1, 7]

// SORT - 1. low to high, use: a > b. 2. high to low, , use: a < b
    //es5
        // arr.sort(function(a, b){
        //     return a > b
        // })
    //es6
        const sortHighToLow = arr.sort((a, b) => a < b)
        console.log(sortHighToLow)
        const sortLowToHigh = arr.sort((a,b) => a > b)
        console.log(sortLowToHigh)
// MAP
    //es5
        // const mappedArray = arr.map(function(number){
        //     return number + 2
        // })
    //es6
        const mappedArray = arr.map(number => number + 2)
        console.log(mappedArray) // => [ 5, 3, 9 ]

// REDUCE
    //es5
        // const total = arr.reduce(function(final, num){
        //     return final + num
        // }, 10)
    //es6
        const total = arr.reduce((final, num) => final + num, 10)
    console.log(total) // => 11

// Object and Array Destructuring  

    const person = {
        name: "Steve",
        age: 61,
        friends: ["Joe", "Guy"]
    }
    const { name, age, friends } = person
    console.log(name)

    // const vegetables = ["carrot", "pineapple", "tomato"]
    // const [carrot, pineapple] = vegetables
    // console.log(carrot, pineapple)

// Object Literals
    const alpha = "this is alpha"
    const beta = "this is beta"
    const charlie = "c"
    const newObj = {
        alpha,
        beta,
        charlie
    }
    console.log(newObj.alpha)

// Default Parameters
    const addition = (a, b = 5) => {
        return a + b
    }
    console.log(addition(3))    // 8
    console.log(addition(5, 5)) // 10


// Spread and Rest(gather)
    // Spread -> spread out array items
    // Rest   -> A function parameter

    // REST
        // const getTotal = (...nums) => {
        //     console.log(nums)
        // }
        // getTotal(1, 2, 3, 4, 5, 6, 7)

    // SPREAD
        // const arr1 = [1, 2, 3, 4]
        // const arr2 = [5, 6, 7, 8]
        // const newArr = [...arr1, ...arr2]
        // console.log(newArr)


    // Spread

        console.log('-----------')
        var bird = 'falcon'
            console.log(bird)
            console.log(...bird)
            console.log([bird])
            console.log([...bird])
        console.log('-----------')
        let birds = ['crow', 'eagle']
            console.log(birds)
            console.log(...birds)
            console.log([birds])
            console.log([...birds])

    // Rest

        console.log('-----------')
        const cats = (...args) => {
            //length of each string has more than 2 characters
            const filteredArgs = args.filter(item => item.length > 2)
            console.log(args)
            console.log(filteredArgs)
        }
        cats('s', 'ddd', 'chth')
        console.log('-----------')

// Import/Export
    //import:   const ask = require('readline-sync')
    //export:   module.exports = whateverWereExporting

        // Main.js
    // import function1 from 'Functions.js'
    // import { function2, function3, function4 } from 'Functions.js'

        // Functions.js
    // export default function1
    // export function2
    // export function3
    // export function4