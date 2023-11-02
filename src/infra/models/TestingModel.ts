import {injectable} from "inversify";
import "reflect-metadata";
import TestingEntity from "./entities/TestingEntity";

@injectable()
class TestingModel {
    private entity = TestingEntity;

    getModel() {
        return this.entity;
    }
}

export default TestingModel;
