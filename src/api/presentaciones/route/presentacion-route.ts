import { Router } from 'express'; 
import PresentacionController from '../controller/presentacion-controller';

const presentacionRouter = Router();

presentacionRouter.get('/', PresentacionController.findAll);
presentacionRouter.get('/:id', PresentacionController.findById);
presentacionRouter.post('/', PresentacionController.create);
presentacionRouter.put('/:id', PresentacionController.update);
presentacionRouter.delete('/:id', PresentacionController.delete);

export default presentacionRouter;

