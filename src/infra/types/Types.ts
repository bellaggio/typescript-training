import {MultiplyAndSum} from "../../core/usecase/MultiplyAndSum";
import {GetCounty} from "../../core/usecase/GetCounty";

const TYPES = {
    AddressesRepositoryInterface: Symbol.for("AddressesRepositoryInterface"),
    AuditAddresses: Symbol.for("AuditAddresses"),
    MultiplyNumbers: Symbol.for("MultiplyNumbers"),
    MultiplyAndSum: Symbol.for("MultiplyAndSum"),
    TestingModel: Symbol.for("TestingModel"),
    FactoryProvider: Symbol.for("FactoryProvider"),
    HttpClientInterface: Symbol.for("HttpClientInterface"),
    GetCounty: Symbol.for("GetCounty"),
    TestCost: Symbol.for("TestCost"),
};

export {TYPES};