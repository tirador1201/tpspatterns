import { readFileSync, writeFile, writeFileSync } from 'fs';

// It defines the protocol used by the colleagues to send messages to the Mediator.
interface MediatorInterface {
    writeToFile(fileName:string, data: string):void;
    readFromFile(fileName:string):string;
}

// Implements the Mediator Interface and hold references of the colleagues it manages.
class Mediator implements MediatorInterface {
    private fileOperations:FileOperation[] = [];

    register(operation: FileOperation): void {
        this.fileOperations.push(operation);
    }

    writeToFile(fileName: string, data: string): void {
        this.fileOperations.forEach(fileOperation => {
            if (fileOperation.name !== fileName) {
                fileOperation.notify(`File is being modified`);
            }            
        });
        writeFileSync(fileName, data, { flag: "w" });        
    }

    readFromFile(fileName: string): string {
        this.fileOperations.forEach(fileOperation => {
            if (fileOperation.name !== fileName) {
                fileOperation.notify(`File is being read`);
            }            
        });
        return readFileSync(fileName,'utf8');
    }

}

// Colleague. This class must hold a reference to its mediator
class FileOperation {
    constructor(public name: string, private mediator: Mediator) {
        this.mediator.register(this);
    }

    write(fileName:string, data: string){
        this.mediator.writeToFile(fileName, data);
    }

    read(fileName:string){
        this.mediator.readFromFile(fileName);
    }

    notify(message: string): void {
        console.log(`Receives notification: "${message}"`);
    }
}

const mediator = new Mediator();
const operationOne = new FileOperation('2.txt', mediator);
const operationTwo = new FileOperation('2.txt', mediator);
operationOne.read('1.txt');
operationTwo.write('1.txt', 'data');