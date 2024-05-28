interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class Application implements Observer {
    constructor() {}

    update(_subject: Subject): void {
        console.log(`the new incoming request has arrived`);
    }
}

class IncomingRequest implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const removeIndex = this.observers.findIndex(obs => observer === obs);
        if (removeIndex !== -1) {
            this.observers.splice(removeIndex, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    nonHandledRequest(): void {
        this.notifyObservers();
    }
}


//Usage
const request = new IncomingRequest();
const app = new Application();
request.addObserver(app);
request.nonHandledRequest();
