import {Router} from 'express';
import {GetCountyListController} from "./../controllers/GetCountyListController";
import {myContainer} from './../../inversify.config';

const routesAuditAddress = Router();
const GetCountyList = myContainer.resolve<GetCountyListController>(GetCountyListController);

routesAuditAddress.get('/endpoint', (req, res) => GetCountyList.handler(req, res));

export default routesAuditAddress;