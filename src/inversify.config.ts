import {Container} from "inversify";
import {TYPES} from "./infra/types/Types";
// @ts-ignore
import {AddressesRepositoryInterface} from "./src/core/adapters/AddressesRepositoryInterface";
import AddressesRepository from "./infra/repository/AddressesRepository";
import AuditAddresses from "./core/usecase/AuditAddresses";
import {MultiplyNumbers} from "./core/usecase/MultiplyNumbers";
import {MultiplyAndSum} from "./core/usecase/MultiplyAndSum";
import TestingModel from "./infra/models/TestingModel";
import {FactoryProvider} from "./infra/http/FactoryProvider";
import {HttpClientInterface} from "./core/adapters/HttpClientInterface";
import {HttpClient} from "./infra/http/HttpClient";
import {GetCounty} from "./core/usecase/GetCounty";

const myContainer = new Container();

myContainer.bind<AddressesRepositoryInterface>(TYPES.AddressesRepositoryInterface).to(AddressesRepository);
myContainer.bind<FactoryProvider>(TYPES.FactoryProvider).to(FactoryProvider);
myContainer.bind<HttpClientInterface>(TYPES.HttpClientInterface).to(HttpClient);
myContainer.bind<GetCounty>(TYPES.GetCounty).to(GetCounty);
myContainer.bind<AuditAddresses>(TYPES.AuditAddresses).to(AuditAddresses);
myContainer.bind<MultiplyNumbers>(TYPES.MultiplyNumbers).to(MultiplyNumbers);
myContainer.bind<MultiplyAndSum>(TYPES.MultiplyAndSum).to(MultiplyAndSum);
myContainer.bind<TestingModel>(TYPES.TestingModel).to(TestingModel);

export {myContainer};