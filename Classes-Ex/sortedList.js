class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }
    add(number) {
        this.numbers.push(number);
        this.size += 1;
        this.numbers.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.size) {
            this.numbers.splice(index, 1);
            this.size -= 1;
        }
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.numbers[index]
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));