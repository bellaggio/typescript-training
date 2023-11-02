import {HttpClientInterface} from "../../core/adapters/HttpClientInterface";
import axios, {AxiosError, AxiosResponse} from 'axios'
import {inject, injectable} from "inversify";
import {TYPES} from "../types/Types";
import {FactoryProvider} from "./FactoryProvider";

@injectable()
export class HttpClient implements HttpClientInterface {
    protected factory: FactoryProvider;
    protected provider: any;
    protected response: any;
    protected headers: any;

    constructor(
        @inject(TYPES.FactoryProvider) factory: FactoryProvider
    ) {
        this.factory = factory;
    }

    getConfig(provider: string): this {
        this.provider = this.factory.getConfig(provider);
        this.headers = this.provider.getHeader();
        return this;
    }

    delete(id: number): this {
        return this;
    }

    async get(endpoint: string): Promise<this> {
        await axios.get(this.provider.getBaseUrl() + endpoint, {headers: this.headers}).then((response: AxiosResponse) => {
            this.response = response.data;
        }).catch((error: AxiosError) => {

            if (error.response) {
                console.error('Error status:', error.response.status);
                console.error('Error data:', error.response.data);
                this.response = { 'error': error.response }
            }
            if (error.request) {
                console.error('No response received:', error.request);
                this.response = { 'error' : 'No response received' }
            }
            console.error('Error message:', error.message);
            this.response = { 'error': 'Failed api connection' }

        }).catch((error) => {
            console.error('Error status:', error);
            this.response = { 'error': error.response }
        });
        return this;
    }

    post([]: readonly []): this {
        return this;
    }

    put(): this {
        return this;
    }

    header(header: {}): this {
        this.headers = {...this.provider.getHeader(), ...header};
        return this;
    }

    send(): any {
        return this.response
    }

}