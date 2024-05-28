
class ShopEntityFacade{
    baseRequest = 'https://localhost/';
    body = (param:string) => `{${param}}`;
    
    constructor(private userName: string, private price: string, private id: string, private otherParam: string){}

    async createObject(){
        await fetch(this.baseRequest, {method:'POST', body: this.body('')});
        await fetch(this.baseRequest, {method:'POST', body: this.body(this.userName)});
        await fetch(this.baseRequest, {method:'POST', body: this.body(this.price)});
        await fetch(this.baseRequest, {method:'POST', body: this.body(this.id)});
        await fetch(this.baseRequest, {method:'POST', body: this.body(this.otherParam)});
    }
}

let shopEntity = new ShopEntityFacade('John', '123$', '1', 'no-idea');
shopEntity.createObject();

