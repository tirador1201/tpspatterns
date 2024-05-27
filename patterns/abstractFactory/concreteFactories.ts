import { AbstractDelivery } from "./absctractDelivery";
import { BigBox, Box, Delivered, Envelope, Package, Size } from "./createdObjects";

export class SeaDelivery implements AbstractDelivery {
    delivery: Delivered = 'sea';
    createDelivery(name: string, size: Size): Package | undefined{
        return getDelivery(name, size, this.delivery);
    }
}

export class AirDelivery implements AbstractDelivery {
    delivery: Delivered = 'air';
    createDelivery(name: string, size: Size): Package | undefined{
        return getDelivery(name, size, this.delivery);
    }
}

export class RoadDelivery implements AbstractDelivery {
    delivery: Delivered = 'road';
    createDelivery(name: string, size: Size): Package | undefined{
        return getDelivery(name, size,  this.delivery);
    }    
}

function getDelivery(name: string, size:Size, delivery:Delivered){
    switch(size){
        case Size.small:
            return new Envelope(name, delivery);
        case Size.medium:
            return new Box(name, delivery);
        case Size.big:
            return new BigBox(name, delivery);
        default:
            break;
    }
}

