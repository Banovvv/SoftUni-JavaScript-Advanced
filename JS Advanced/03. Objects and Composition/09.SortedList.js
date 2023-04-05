function createSortedList() {
    return {
        elements: [],
        add(element) {
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (this.isIndexValid(index)) {
                this.elements.splice(index, 1);
                this.elements.sort((a, b) => a - b);
                this.size--;
            }
        },
        get(index) {
            if (this.isIndexValid(index)) {
                return this.elements[index];
            }
        },
        isIndexValid(index) {
            return index >= 0 && index < this.size;
        },
        size: 0,
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));