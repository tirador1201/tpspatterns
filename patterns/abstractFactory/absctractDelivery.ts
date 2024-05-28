import { Package, Size } from "./createdObjects";


/**
 * Served as an abstract factory for the concrete factories
 * 'export' is just the way of exporting entities so they can be accessed outside
 */
export interface AbstractDelivery {
    createDelivery(name: string, size: Size): Package | undefined;
}