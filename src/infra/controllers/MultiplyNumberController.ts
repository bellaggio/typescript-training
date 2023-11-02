import {injectable, inject} from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../types/Types";
import "reflect-metadata";
import {MultiplyNumbers} from "../../core/usecase/MultiplyNumbers";
import {MultiplyAndSum} from "../../core/usecase/MultiplyAndSum";

@injectable()
export class MultiplyNumberController {
    private useCase: MultiplyNumbers;
    private useCaseMultiplyAndSum: MultiplyAndSum;

    public constructor(
        @inject(TYPES.MultiplyNumbers) useCase: MultiplyNumbers,
        @inject(TYPES.MultiplyAndSum) useCaseMultiplyAndSum: MultiplyAndSum
    ) {
        this.useCase = useCase;
        this.useCaseMultiplyAndSum = useCaseMultiplyAndSum;
    }

    public calculate(req: Request, res: Response) {
        const data = req.body;
        res.send("multiply = " + this.useCase.calculate(data.numA, data.numB));
    }

    public multiplyAndSum(req: Request, res: Response) {
        const data = req.body;
        res.send("multiply and sum = " + this.useCaseMultiplyAndSum.execute(data.numA, data.numB, data.numC));
    }
}