
//-implementation 
//-deletion
//-reversing



// Implementation  (APPEND , PREPEND , REVERING , PRINTING, MERGING , DELETE A NODE)

class node {
    constructor(value) {
        this.data = value
        this.next = null
    }

}

class linked {
    constructor() {
        this.head = null
        this.tail = null
    }

    append = (value) => {
        let newNode = new node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        this.tail = newNode

    }

    prepend(value) {
        let newNode = new node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }


    print() {
        let current = this.head;
        let list = "";
        while (current != null) {
            list += current.data + "=>"
            current = current.next
        }
        list += null
        console.log(list, 'it is value')

    }

    reverse() {
        let current = this.head
        let prev = null
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    merging(l1) {
        this.tail.next = l1.head
        this.tail = l1.tail

    }

    deleteNode(value) {
        let current = this.head

        if (current.data == value) {
            this.head = current.next
            console.log('it is inside the loop')


        } else {
            let prev = this.head

            while (current) {
                if (current.data == value) {
                    prev.next = current.next
                    break
                }
                prev = current
                current = current.next
            }
        }
    }



}

const list = new linked()
list.append(20)
list.append(30)
list.append(40)
list.prepend(10)
list.deleteNode(40)
// list.print()
// list.reverse()
list.print()


// const l2 = new linked()
// l2.append(50)
// l2.append(60)
// l2.append(70)
// l2.merging(list)

// l2.print()

// ..................................................................................

// IMPLEMENTAION OF STACK 
 


 


