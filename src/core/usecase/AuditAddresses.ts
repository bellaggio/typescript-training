// @ts-ignore
import {AddressesRepositoryInterface} from "../adapters/AddressesRepositoryInterface"
import {injectable, inject} from "inversify";
import "reflect-metadata";
import {TYPES} from "../../infra/types/Types";
import TestingEntity from "../../infra/models/entities/TestingEntity";

@injectable()
class AuditAddresses {
    protected repository: AddressesRepositoryInterface;

    public constructor(
        @inject(TYPES.AddressesRepositoryInterface) repository: AddressesRepositoryInterface
    ) {
        this.repository = repository;
    }

    public sum(numA: number, numB: number) {
        return numA + numB;
    }

    public async getAddress(): Promise<TestingEntity[]> {
        const result = await this.repository.getDuplicatedAddress();
        return result;
    }

    public async getAddressById(id: number): Promise<any> {
        const result = await this.repository.getRawDuplicatedAddressTest();
        return result;
    }
}

export default AuditAddresses;