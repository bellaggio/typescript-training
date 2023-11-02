import {inject, injectable} from "inversify";
import "reflect-metadata";
import {TYPES} from "../../infra/types/Types";
import {MultiplyNumbers} from "./MultiplyNumbers";

@injectable()
export class MultiplyAndSum {
    public multiply: MultiplyNumbers

    public constructor(
        @inject(TYPES.MultiplyNumbers) multiply: MultiplyNumbers
    ) {
        this.multiply = multiply;
    }

    public execute(numA: number, numB: number, numC: number): number {
        const multiply = this.multiply.calculate(numA, numB);
        return multiply + numC;
    }
}