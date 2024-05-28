interface BookPrototype {
    clone(): BookPrototype;
}

class Book implements BookPrototype {
    constructor(private name: string, private year: number, private author: string, private etc: Array<string>) {}
    
    public clone(): this {
        const clone = Object.create(this);  // Creates an object that has the specified prototype where 'this' is the object to be used as a prototype.
        clone.name = this.name;
        clone.year = this.year;
        clone.author = this.author;
        clone.etc = this.etc;
        return clone;
    }
}

const prototypeBook = new Book('Patterns', 2024, 'Me', ['nothing to add']);
const cloneBook = prototypeBook.clone();