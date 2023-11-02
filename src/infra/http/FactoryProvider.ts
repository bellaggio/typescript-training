import {InternalProvider} from "./Providers/InternalProvider";
import {ProviderInterface} from "./Providers/ProviderInterface";
import {injectable} from "inversify";

@injectable()
export class FactoryProvider {
    getConfig(provider: string): ProviderInterface {
        switch (provider) {
            case "internal":
                return new InternalProvider();
            default:
                return new InternalProvider();
        }
    }
}