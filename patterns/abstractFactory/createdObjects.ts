// abstract object
export interface Package {
    type: string;    
}

// concrete objects that implements abstract object
export class Box implements Package {
    type = 'Box';    
    constructor(name: string, delivered: Delivered){
        console.log(`[${this.type}] ${name} was delivered by the ${delivered}. Make sure, it's not damaged.`);
    }
}

export class Envelope implements Package {
    type = 'Envelope';
    constructor(name: string, delivered: Delivered){
        console.log(`[${this.type}] ${name} was delivered by the ${delivered}. Make sure the seal is not broken`);
    }
}

export class BigBox implements Package {
    type = 'BigBox';
    constructor(name: string, delivered: Delivered){
        console.log(`[${this.type}] ${name} was delivered by the ${delivered}. Be careful when lifting`);
    }
}

export enum Size {
    small,
    medium, 
    big
}

export type Delivered = 'sea' | 'air' | 'road'  //types in typescript is the way to restrict what values can be used as a param
// (very similar to interface, but defines an object/model rather than behaviour)