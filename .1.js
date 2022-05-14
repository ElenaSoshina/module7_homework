class devices {
    constructor (name, power, off) {
        this.name = name;
        this.power = power;
        this.off = off;
    }

    getOff() {
        if(this.off === true) {
            console.log(`${this.name} is off`);
        } else {
            console.log(`${this.name} is on`);
        }
    }

    getPower() {
        console.log(`This ${this.name} has power ${this.power} watts`);
    }
}

class tableLamp extends devices {
    constructor(name, power, off, lampColor) {
        super(name, power, off);
        this.lampColor = lampColor;
    }

    getLampColor() {
        console.log(`This ${this.name} lamp has ${this.lampColor} color`);
    }
}

const lamp = new tableLamp ('Ultraflash', 12, false, 'black');

class laptop extends devices {
    constructor(name, power, off, processor) {
        super(name, power, off);
        this.processor = processor;
    }

    getProcessor() {
        console.log(`This ${this.name} has processor ${this.processor}`);
    }
}

let macBook = new laptop ("MacBook", 50, false, "Intel i7");

macBook.getProcessor();
lamp.getLampColor();
macBook.getOff();
lamp.getOff();
macBook.getPower();
lamp.getPower();
