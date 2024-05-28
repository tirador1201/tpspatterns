// Service interface - Prod database
interface ProdDatabaseInterface {
    connect(credentials: string):string;
}

// Service
class ProdDatabase implements ProdDatabaseInterface {
    connect(credentials: string): string {
        return `Connection is established with the following: ${credentials}`;
    }
}

// Proxy
class DatabaseProxy implements ProdDatabaseInterface {
    private prodDatabase: ProdDatabase;

    constructor(){
        this.prodDatabase = new ProdDatabase();
    }
    
    connect(credentials: string): string {
        console.log('Proxy before connecting to the database');
        const connection = this.prodDatabase.connect(credentials);
        console.log(connection);
        console.log('Proxy after connecting to the database');
        return connection;
    }
}

// Client
const database = new DatabaseProxy();
const connection = database.connect('mongodb://localhost:27017 root:root')

