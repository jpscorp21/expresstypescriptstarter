import { Router } from 'express';
import { coloresRouter } from './colores.route';
import { autosRouter } from './autos.route';

export const indexRouter = Router();

indexRouter.use('/colores', coloresRouter);
indexRouter.use('/autos', autosRouter);