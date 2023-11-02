import {injectable, inject} from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../types/Types";
import "reflect-metadata";
import AuditAddresses from "../../core/usecase/AuditAddresses";

@injectable()
export class AuditAddressesController {
    private useCase: AuditAddresses

    public constructor(
        @inject(TYPES.AuditAddresses) useCase: AuditAddresses
    ) {
        this.useCase = useCase;
    }

    public home(req: Request, res: Response) {
        const data = req.body;
        const total = this.useCase.sum(data.numA, data.numB);
        res.send("the sum total is " + total);
    }

    public home2(req: Request, res: Response) {
        const total = this.useCase.sum(10, 20);
        res.send("the sum total is " + total);
    }

    /**
     *
     * @param req
     * @param res
     */
    public getDuplicate = async (req: Request, res: Response) => {
        try {
            const result = await this.useCase.getAddress();
            res.json({data: result});
        } catch (error) {
            res.status(500).json({error: "Error fetching databases"})
        }
    }
    /**
     *
     * @param req
     * @param res
     */
    public auditAddressById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const result = await this.useCase.getAddressById(id);
            res.json({data: result});
        } catch (error) {
            res.status(500).json({error: "Error fetching databases"})
        }
    }
}