class Test {
    constructor(private connection?:DatabaseConnection){}

    testMethod(){
        if(this.connection){
            this.connection.connectDb()
        }
        //other logic
    }
}


class DatabaseConnection {
    connectionParam: string = 'mongodb://localhost:27017 root:root';
    connectDb():string{
        return `Connect to db established: ${this.connectionParam}`;
    }
}

new Test().testMethod()  //execute test without connection
new Test(new DatabaseConnection()).testMethod()  //execute test with db connection