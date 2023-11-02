import {Router} from 'express';
import {AuditAddressesController} from "./../controllers/AuditAddressesController";
import {myContainer} from './../../inversify.config';

const routesAuditAddress = Router();
const AuditController = myContainer.resolve<AuditAddressesController>(AuditAddressesController);

routesAuditAddress.get('/audit/address', (req, res) => AuditController.getDuplicate(req, res));
routesAuditAddress.post('/', (req, res) => AuditController.home(req, res));
routesAuditAddress.get('/audit/address/:id', (req, res) => AuditController.auditAddressById(req, res));

export default routesAuditAddress;