class Manager{} //example

class Superadmin{} //example


class Admin{    
    addUsers(name:string){
        console.log(`User ${name} is added`);
    }

    setPrice(price: number){
        console.log(`Price set to ${price}!$`);
    }
}



class ThirdPartyUserAdminDecorator extends Admin{
    thirdPartyCountry: string = 'country';
    defaultPrice:number = 99;

    constructor(private admin:Admin){
        super();
    }    

    setPrice(): void {
        this.admin.setPrice(this.defaultPrice);
    }

    addUsers(name:string){
        this.admin.addUsers(name);
        this.changeUserCountry(name);
    }

    changeUserCountry(name: string){
        return `Original country for user ${name} is changed to ${this.thirdPartyCountry}`;
    }

}

const thirdPartyAdmin = new ThirdPartyUserAdminDecorator(new Admin());