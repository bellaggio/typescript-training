import {injectable, inject} from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../types/Types";
import "reflect-metadata";
import {GetCounty} from "../../core/usecase/GetCounty";

@injectable()
export class GetCountyListController {
    protected useCase: GetCounty

    constructor(
        @inject(TYPES.GetCounty) useCase: GetCounty
    ) {
        this.useCase = useCase
    }

    async handler(req: Request, res: Response): Promise<any> {

        try {
            const result = await this.useCase.handle();
            res.send(result);
        } catch (error) {
            console.error('Error: ', error);
            res.status(500).send({'Error': error});
        }
    }
}