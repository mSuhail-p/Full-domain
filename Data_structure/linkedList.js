
//-implementation 
//-deletion
//-reversing



// Implementation  (APPEND , PREPEND , REVERING , PRINTING, MERGING , DELETE A NODE)

// class node {
//     constructor(value) {
//         this.data = value
//         this.next = null
//     }

// }

// class linked {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     append = (value) => {
//         let newNode = new node(value)
//         if (this.head == null) {
//             this.head = newNode
//             this.tail = newNode
//             return
//         }
//         this.tail.next = newNode
//         this.tail = newNode

//     }

//     prepend(value) {
//         let newNode = new node(value)
//         if (this.head == null) {
//             this.head = newNode
//             this.tail = newNode
//             return
//         }
//         newNode.next = this.head
//         this.head = newNode
//     }


//     print() {
//         let current = this.head;
//         let list = "";
//         while (current != null) {
//             list += current.data + "=>"
//             current = current.next
//         }
//         list += null
//         console.log(list, 'it is value')

//     }

//     reverse() {
//         let current = this.head
//         let prev = null
//         while (current) {
//             let next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.head = prev
//     }

//     merging(l1) {
//         this.tail.next = l1.head
//         this.tail = l1.tail

//     }

//     deleteNode(value) {
//         let current = this.head

//         if (current.data == value) {
//             this.head = current.next
//             console.log('it is inside the loop')


//         } else {
//             let prev = this.head

//             while (current) {
//                 if (current.data == value) {
//                     prev.next = current.next
//                     break
//                 }
//                 prev = current
//                 current = current.next
//             }
//         }
//     }



// }

// const list = new linked()
// list.append(20)
// list.append(30)
// list.append(40)
// list.prepend(10)
// list.deleteNode(40)
// list.print()
// list.reverse()
// list.print()


// const l2 = new linked()
// l2.append(50)
// l2.append(60)
// l2.append(70)
// l2.merging(list)

// l2.print()

// ..................................................................................


// practice

// class Node {
//     constructor(value) {
//         this.data = value
//         this.next = null
//     }
// }

// class list {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     append(value) {
//         let newNode = new Node(value)
//         if (this.head == null) {
//             this.head = newNode
//             this.tail = newNode

//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//     }
//     prepend(value) {
//         let newNode = new Node(value)
//         if (this.head == null) {
//             this.head = newNode
//             this.tail = newNode

//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }
//     atPosition(value, pos) {
//         let newNode = new Node(value)
//         if (this.head == null) {
//             return "no value"
//         } else {
//             let current = this.head
//             let prev = null
//             let index = 1
//             while (current) {
//                 if (index == pos) {
//                     console.log('here is reached')
//                     let cuIndex = current
//                     prev.next = newNode
//                     newNode.next = cuIndex
//                     return 
//                 }
//                 prev = current
//                 current = current.next
//                 index++
//                 console.log(index)

//             }
//             return 'pos is not in this list'
//         }
//     }


//     print() {
//         let current = this.head
//         let res = ""

//         while (current) {
//             res += current.data + '->'
//             current = current.next

//         }
//         res += null
//         console.log(res)

//     }
// }


// let linked = new list()

// linked.append(10)
// linked.append(20)
// linked.append(30)
// linked.prepend(1)
// linked.append(40)
// linked.prepend(4)
// linked.prepend(400)
// console.log(linked.atPosition(400,3))
// linked.print()

// console.log(linked)












