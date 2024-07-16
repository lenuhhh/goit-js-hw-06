class StringBuilder {
    #value; 

    constructor(initialValue = '') {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(endString) {
        this.#value = this.#value + endString;
    }

    padStart(startString) {
        this.#value = startString + this.#value;
    }

    padBoth(padString) {
        this.#value = padString + this.#value + padString;
    }
}


let builder = new StringBuilder(".");

console.log(builder.getValue()); 

builder.padStart("^");
console.log(builder.getValue()); 

builder.padEnd("^");
console.log(builder.getValue());  

builder.padBoth("=");
console.log(builder.getValue());  
























