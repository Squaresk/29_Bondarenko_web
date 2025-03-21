class Block {
    constructor() {
        if (this.constructor === Block) {
            throw new Error("Cannot instantiate abstract class Block");
        }
    }
	

    toHTML() {
        throw new Error("Method 'toHTML()' must be implemented.");
    }
}
