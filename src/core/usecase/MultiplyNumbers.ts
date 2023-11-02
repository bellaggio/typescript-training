import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class MultiplyNumbers {

    public calculate(numA: number, numB: number): number {
        return numA * numB;
    }
}