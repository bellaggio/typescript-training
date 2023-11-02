import TestingEntity from "../../infra/models/entities/TestingEntity";

export interface AddressesRepositoryInterface {
    getDuplicatedAddress(): Promise<TestingEntity[]>;

    getRawDuplicatedAddress(id: number): Promise<any>;

    getRawDuplicatedAddressTest(): Promise<any>;
}
