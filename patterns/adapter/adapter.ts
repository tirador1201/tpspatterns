// Target -> Product
interface Product {
    fetchData(): Promise<JSON>; //Promise is a built-in JS object that created to make sure, that some condition is met (or not) before executing the code
}

// Adaptee -> External streaming system
class StreamingData {
    constructor(private externalSource: string){}
    
    async fetchStreamingData(): Promise<string>{   // async used in the functions/methods where condition needs to be fulfilled and returns Promise <type>
        const extData = await fetch(this.externalSource);  // await used to 'wait' until some condition is met. Async/await is an alternative to a Promise chain
        return extData.text();
    }
}

// Adapter -> Converts data from Adaptee to Target, i.e. from 'yml' to 'json'.
class DataAdapter implements Product{
    constructor(private streamingData: StreamingData){}

    async fetchData(): Promise<JSON>{
        const extData = await this.streamingData.fetchStreamingData();
        return JSON.parse(extData);
    }
}

// Client code using the Target interface
function clientCode(product:Product) {
    return product.fetchData();
}

// Usage
const adapter = new DataAdapter(new StreamingData('https://ext.com'));
clientCode(adapter);