import {HttpClientInterface} from "../adapters/HttpClientInterface";
import {TYPES} from "../../infra/types/Types";
import {inject, injectable} from "inversify";

@injectable()
export class GetCounty {

    protected httpClient: HttpClientInterface;
    public result: any;

    constructor(
        @inject(TYPES.HttpClientInterface) httpClient: HttpClientInterface
    ) {
        this.httpClient = httpClient;
    }

    async handle(): Promise<any> {

        await this.httpClient
            .getConfig('internal')
            .get("endpoint")
            .then((result) => {
                this.result = result.send();
            }).catch((error) => {
                console.error('Error:', error)
                this.result = {'error' : error}
            });

        return this.result;
    }
}