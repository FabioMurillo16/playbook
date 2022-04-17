class Pokemon {
    constructor(name) {
        this.name = name 
    }

    sayHello() {
        console.log(`Hola,${this.name} te saluda!!!!`);
    }

    sayMessage(message) {
        console.log(`${message}`);
    }
} 

module.exports = Pokemon