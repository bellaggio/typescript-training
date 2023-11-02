import {injectable} from "inversify";

export interface ProviderInterface {
    getBaseUrl(): string | undefined

    getHeader(): any
}