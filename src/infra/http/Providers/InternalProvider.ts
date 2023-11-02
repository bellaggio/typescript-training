import {ProviderInterface} from "./ProviderInterface";
import dotenv from "dotenv";

dotenv.config();

export class InternalProvider implements ProviderInterface {
    getBaseUrl(): string | undefined {
        return process.env.INTERNAL_ENDPOINT;
    }

    getHeader(): any {
        return {
            "content-type": "json"
        }
    }
}