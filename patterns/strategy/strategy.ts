// Strategy
interface UserStrategy{
    validateUserData(data:UserData):void;
}

// Different logic for validation user is in the following two classes. Any particular strategy type can be found here
class AsianUser implements UserStrategy{
    validateUserData(data: UserData): void {
        //logic for validation Asian user
    }
}

class EuropeanUser implements UserStrategy{
    validateUserData(data: UserData): void {
        //logic for validation European user
    }
}

// Allows to use different strategy implementation
class User { 
    constructor(private userStrategy: UserStrategy){}

    validateUserData(data:UserData){
        this.userStrategy.validateUserData(data);
    }
}

// Usage
const europeanUser = new User(new EuropeanUser());
europeanUser.validateUserData({});

const asianUser = new User(new AsianUser());
asianUser.validateUserData({});


// Sample type
type UserData = {
    name?:string,
    age?:number,
    hobbies?:Array<string>,
    occupation?: string
}