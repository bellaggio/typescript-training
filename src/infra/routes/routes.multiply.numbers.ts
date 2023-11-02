import {Router} from 'express';
import {myContainer} from './../../inversify.config';
import {MultiplyNumberController} from "../controllers/MultiplyNumberController";

const routesMultiplyNumbers = Router();

const MultiplyNumber = myContainer.resolve<MultiplyNumberController>(MultiplyNumberController);

routesMultiplyNumbers.post('/multiply', (req, res) => MultiplyNumber.calculate(req, res));
routesMultiplyNumbers.post('/multiplyAndSum', (req, res) => MultiplyNumber.multiplyAndSum(req, res));

export default routesMultiplyNumbers;