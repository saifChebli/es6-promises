
// setTimeout function in javascript

// setTimeout


// synchronous Javascript
// console.log('Start')

// function add(a , b) {
//     return a + b
// }


// console.log(add(2,4))

// console.log('End')

// example with setTimeout()

// console.log('Start')

// we use setTimeout to delay some operation , showing a message , to fetch data from server

// callback function : 
// setTimeout(() =>{
//     alert('This runs after 5 seconds')
// },5000)

// Callback hell : this becomes hard to read and debug 

// setTimeout(() => {
//     console.log('Step 1') // fetch weather api
//      setTimeout(() => {
//         console.log('Step 2') // convert it to json
//         setTimeout(()=>{
//             console.log('Step 3') // display it
//         },1000)
//      },1000)
// },1000)

// console.log('End')



// setInterval function in javascript

// let count = 0

// we use setInterval when we want something to happen repeatedly , creating a timer , updating the time

// const intervalId = setInterval(() => {
//     console.log('Hello' , ++ count)

//     if(count === 10){
//         clearInterval(intervalId) // Stop after 10 times
//     }
//     alert('Welcome to our app')
// }, 2000)



// Using setTimeout with callback (Traditional)


// function sayHello(name , callback) {
//     setTimeout(() => {
//         console.log(`Hello , ${name}`) //the first step
//         callback() // the second step
//         callback() // the second step
//         callback() // the second step
//         callback() // the second step
//     },2000)
// }


// sayHello('John' , () => {
//     console.log('This is the next Step')
// })


// function sayHelloWithPromise(name) {
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//         console.log(`Hello , ${name}`) //the first step
//         resolve()
//     },2000)
//     })
// }

// sayHelloWithPromise('Jane').then(() =>{
//     console.log('This is the next Step') // the second step
// }
// )

// Functions that return promise we can just use then()
// to access to the result



// Creating a Promise 

// const myPromise = new Promise((resolve , reject) => {
//     let success = false
//     if(success){
//         resolve('Operation succeeded')
//     } else {
//         reject('Operation failed')
//     }
// })

// Consuming a Promise

// myPromise
// .then((result) =>{
//     console.log(result) // Operation succeeded
// }).catch((error) => {
//     console.log(error) // Operation failed
// })


// async / await 

// A Promise is like ordering food at a restaurant 

        // .Pending : You placed your order , now you're waiting 
        // .Fulfilled : You food arrives
        // .Rejected : The kitchen ran out , 'Sorry for that'


// async and await in Javascript

// 1. async keyword :

// always returns a Promise

// it allows us to use the await keyword inside that function

// its simplifies handling asynchronous code by avoiding .then()


// async function fetchUsers() {
//     try {
//         const response = await fetch('https://api.example.com/users')
//         const data = await response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }


//Try to building a dashboard that fetches 

//  - A user profile data
//  - Posts
//  - Notifications

function getUserProfile () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('User Profile Data')
        },1000)
    })
}

function getUserPosts () {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('Recent Posts')
        },2000)
    })
}

function getUserNotifications () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Notifications')
        },1500)
    })
}

// 3 independent Api calls , but we need to wait for all of them


Promise.all([getUserProfile(),getUserPosts(),getUserNotifications()])
.then(([profile , posts , notifications]) => {
    console.log('All data loaded')
    console.log(profile);
    console.log(posts);
    console.log(notifications);
}).catch((error) =>{
    console.log('Something went wrong' , error)
})

