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
}


const stk = new stack()
stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)

console.log(stk.stk);