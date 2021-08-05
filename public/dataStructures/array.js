class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
    this.capacity = 5;
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.shouldDoubleCapacity();

    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    let deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }

  delete(index) {
    this.shiftItems(index);
    return this.length;
  }

  shouldDoubleCapacity() {
    if (this.length === this.capacity) this.capacity = this.capacity * 2;
  }

  shiftItems(index) {
    for (let i = this.length - 1; i > index; i--) {
      this.data[i - 1] = this.data[i];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  insert(index, value) {
    if (index > this.length || this.length === 0) {
      this.push(value);
    } else {
      let i = this.length - 1;

      for (i; i >= index; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[index] = value;
      this.length++;
    }
  }
}
