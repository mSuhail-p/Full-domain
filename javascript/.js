

// find the first non repeat charector from below string 
// let str = 'awecwcsxsfkl'
// let flag = false

// for (let i = 0; i < str.length; i++) {
//     flag = false
//     for (let j = i + 1; j < str.length; j++) {
//         if (str[i] === str[j]) {
//             flag = true
//         }
//     }
//     if (flag === false) {
//         console.log(str[i],' is value')
//         break
//     }
// }




// swap the below two varible's values each other without using temp varible
// let a = 20
// let b = 40

// a = a + b
// b = a - b
// a = a - b
// console.log(a, 'it is a')
// console.log(b, 'it is b')




// QST =>  Find average of all unique arra elements

// let a = [12, 3, 20, 12, 23, 2, 3]

// let sum = 0
// let count = 0
// let flag;
// for (let i = 0; i < a.length; i++) {
//     flag = 0;
//     for (let j = 0; j < a.length; j++) {
//         if (a[i] === a[j] && i != j) {
//             flag++
//         }
//     }
//     if (flag === 0) {
//         count++
//         sum += a[i]
//     }
// }
// let average = sum / count

// console.log(average)



//QST =>  FIND THE LARGEST NUMBER IN AN UNSORTED ARRAY 



// setImmediate(() => {

//     console.log('setImmediate')
// }) 
// process.nextTick(()=>{
//     console.log('working process.nextTick')
// })

// setTimeout(()=>{
//     console.log('working setTimeOut')
// })

// console.log('working normal')

// ..................................................

// CALLBACK HELL

// function a(callback){
    //     console.log('a is working')
    //     callback()
    // }
    
    // function b(callback){
    //     console.log('b is working')
    //     callback()
    // }
    
    // function c(callback){
    //     console.log('c is working')
    //     callback()
    // }
    // function d(callback){
    //     console.log('d is working')
    //     callback()
    // }
    
    // function e(){
    //     console.log('e is working')
    // }
    
    
    //  a(()=>{
    //     b(()=>{
    //         c(()=>{
    //             d(()=>{
    //                 e()
    //             })
    //         })
    //     })
    //  })



    // Resolving this issue with PROMISE

    // function a(){
    //     return new Promise((resolve)=>{
    //         console.log('a is working')
    //         resolve()
    //     })
    // }

    // function b(){
    //     return new Promise((resolve)=>{
    //         console.log('b is working')
    //         resolve()
    //     })
    // }

    // function c(){
    //     return new Promise((resolve,rej)=>{
    //         console.log('c is working');
    //         rej("it is not working")
            
    //     })
    // }
    // a()
    // .then(()=>b())
    // .then(()=>c())
    // .finally(()=>{
    //     console.log("ti will work what ever will be happened ");
        
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
    

    /* PROMISE HAS THREE STATES -> RESOLVE , REJECT , PENDING */
    
    

     