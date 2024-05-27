import { Package, Size } from "./createdObjects";


/**
 * Served as an abstract factory for the concrete factories
 */
export interface AbstractDelivery {
    createDelivery(name: string, size: Size): Package | undefined;
}