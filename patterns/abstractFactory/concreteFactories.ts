import { AbstractDelivery } from "./absctractDelivery";
import { BigBox, Box, Delivered, Envelope, Package, Size } from "./createdObjects";

/**
 * Concrete factories that implements abstract one
 */
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

/**
 * To get a 'Box' sent by 'Delivery' based on its size.
 * Functions in typescript/js served as methods, but outside the class. Technically functions are builtin js objects.
 * @param name 
 * @param size 
 * @param delivery 
 * @returns 
 */

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

