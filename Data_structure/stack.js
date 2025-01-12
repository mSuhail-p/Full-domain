// IMPLEMENTAION OF STACK 
class stack {
    constructor() {
        this.stk = []
    }
    push(value) {
        this.stk.push(value)
    }
    pop() {
        return this.stk.pop()
    }
    peek() { // return the last added value in to array , it should be return without removing (don't use pop)
        return this.stk[this.stk.length - 1]
    }
    isEmty() {
        return this.stk.length == 0
    }
}


const stk = new stack()
stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)
console.log(stk.peek())
console.log(stk.isEmty())

console.log(stk.stk);