// IMPLEMENTAION OF STACK 
// class stack {
//     constructor() {
//         this.stk = []
//     }
//     push(value) {
//         this.stk.push(value)
//     }
//     pop() {
//         return this.stk.pop()
//     }
//     peek() { // return the last added value in to array , it should be return without removing (don't use pop)
//         return this.stk[this.stk.length - 1]
//     }
//     isEmty() {
//         return this.stk.length == 0
//     }
// }


// const stk = new stack()
// stk.push(10)
// stk.push(20)
// stk.push(30)
// stk.push(40)
// console.log(stk.peek())
// console.log(stk.isEmty())

// console.log(stk.stk);

// 1 -> 

// 1. Reverse a String
// Write a function to reverse a string using a stack.
// Input: "hello"
// Output: "olleh"

// function reverse() {
//     let stack = []
//     let char = 'hello'
//     let out = ""
//     for (let i = 0; i < char.length; i++) {
//         stack.push(char[i])
//     }
//     let length = stack.length


//     for (let i = 0; i < length; i++) {
//         out += stack.pop()
//     }
//     console.log(out, 'it is out')
//     // return out

// }

// console.log(reverse())



