import {AddressesRepositoryInterface} from "../../core/adapters/AddressesRepositoryInterface";
import {injectable, inject} from "inversify"
import "reflect-metadata";
import TestingModel from "../../infra/models/TestingModel";
import {TYPES} from "../types/Types";
import TestingEntity from "../models/entities/TestingEntity";
import sequelize from "../../database.config";

const {QueryTypes} = require("sequelize");


@injectable()
class AddressesRepository implements AddressesRepositoryInterface {
    protected model: TestingModel;

    public constructor(
        @inject(TYPES.TestingModel) model: TestingModel
    ) {
        this.model = model;
    }

    public async getDuplicatedAddress(): Promise<TestingEntity[]> {
        const result = await this.model.getModel().findAll();
        return result;
    }

    public async getRawDuplicatedAddress(id: number): Promise<any> {
        try {
            const query = "select * from table";
            const replacements = {id: id};
            const results = await sequelize.query(query, {
                type: QueryTypes.Select,
                replacements,
            });
            return results;
        } catch (error) {
            console.log("Error ", error);
        }
    }

    public async getRawDuplicatedAddressTest(): Promise<any> {
        try {
            const query = "select * from table";

            const results = await sequelize.query(query, {
                type: QueryTypes.Select
            });
            return results;
        } catch (error) {
            console.log("Error ", error);
            return {'error' : error}
        }
    }

}

export default AddressesRepository;