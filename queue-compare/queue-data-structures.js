module.exports.LinkedListQueue = class LinkedListQueue {
    constructor() {
        this.size = 0;
        this.front = undefined;
        this.end = undefined;
    }

    peek() {
        if (this.size === 0) {
            throw "Error: Queue is empty";
        }

        return this.front.data;
    }

    pop() {
        if (this.size === 0) {
            throw "Error: Queue is empty";
        }

        const output = this.front;
        this.front = output.next;

        this.size--;
        return output.data;
    }

    push(data) {
        const oldRear = this.end;
        this.end = { data };

        if (oldRear !== undefined) {
            oldRear.next = this.end;
        }

        if (this.size === 0) {
            this.front = this.end;
        }

        this.size++;
    }
}

module.exports.ArrayQueue = class ArrayQueue {
    constructor() {
        this.data = [];
    }

    peek() {
        if (this.data.length === 0) {
            throw "Error: Queue is empty";
        }

        return this.data[this.data.length - 1];
    }

    pop() {
        if (this.data.length === 0) {
            throw "Error: Queue is empty";
        }

        return this.data.pop();
    }

    push(data) {
        this.data.unshift(data);
    }
}
