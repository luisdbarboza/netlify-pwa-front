class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor(value) {
    this.head = {
      value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else  {
      this.tail.next = newNode;
      this.tail = newNode;  
    }
    
    this.length++;
  }

  prepend(value) {
    const newHeadNode = new Node(value);

    newHeadNode.next = this.head;
    this.head = newHeadNode;
    this.length++;
  }

  printList() {
    let array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }

  //inserta un nodo en la lista enlazada
  insert(index, value) {
    //check params
    if (typeof index === 'number' && index >= 0) {
      if (index > this.length - 1) {
        this.append(value);
      } else if (index === 0) {
        this.prepend(value);
      } else {
        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
      }
    } else {
      console.error('INDICE INVALIDO');
    }
  }

  remove(index) {
    if (index > 0 && index < this.length) {
      const leader = this.traverseToIndex(index - 1);
      let unwantedNode = leader.next;

      leader.next = unwantedNode.next;

      this.length--;
    } else if(index === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      console.error("INDICE INVALIDO");
    }
  }

  //retorna el indice en la posicion pasada como argumento
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}