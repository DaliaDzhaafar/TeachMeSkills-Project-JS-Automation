import superagent from "superagent"

export class HttpClient {
    static readonly url = 'https://jsonplaceholder.typicode.com/';

    static async get(path: string, queryValue?: string | object): Promise<any> {
        let response: unknown;
        try {
            if (queryValue) {
                response = await superagent.get(`${HttpClient.url}${path}`).query(queryValue);
            }
            else {
                response = await superagent.get(`${HttpClient.url}${path}`);
            }

        }
        catch (err: any) {
            console.log(err.message);
        }
        finally {
            return response;
        }
    }

}