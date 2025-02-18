

// BINARY SEARCH TREE 

// class node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class bst {
//     constructor() {
//         this.root = null
//     }

//     insert(value) {
//         let newNode = new node(value)
//         if (this.root == null) {
//             this.root = newNode
//         } else {
//             this.insertValue(this.root, newNode)
//         }
//     }

//     insertValue(root, node) {
//         if (root.value > node.value) {
//             if (root.left == null) {
//                 root.left = node
//             } else {
//                 this.insertValue(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertValue(root.right, node)
//             }
//         }
//     }
// }


// const binaryST = new bst()

// binaryST.insert(20)
// binaryST.insert(50)
// binaryST.insert(10)
// binaryST.insert(70)
// console.log(binaryST.root)

// function isBst(node, min = -Infinity, max = Infinity) {
//     if (!node) {
//         return true
//     }
//     if (node.value <= min || node.value >= max) {
//         return false
//     }

//     return (
//         isBst(node.left, min, node.value) &&
//         isBst(node.right, node.value, max)
//     )


// }

// console.log(isBst(binaryST))


