import { AbstractDelivery } from "./absctractDelivery";
import { SeaDelivery } from "./concreteFactories";
import { Package, Size } from "./createdObjects";

class Client {
    constructor(private factory: AbstractDelivery){}

    public makeDelivery(name:string, size: Size): Package | undefined {
        return this.factory.createDelivery(name, size);
    }
    
}

const object = new Client(new SeaDelivery).makeDelivery('Bigone', Size.big);
