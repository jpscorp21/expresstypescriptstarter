import { Router, Request, Response } from 'express';
import { AutosModel } from '../models/autos.model';

export const autosRouter = Router();


autosRouter.get('/', async (req: Request, res: Response) => {
    const items = await AutosModel.findAll();
    res.status(200).json(items);
}); 


autosRouter.get('/:id', async (req: Request, res: Response) => {
    const data = await AutosModel.findOne({
        where: {
            id: Number(req.params.id),
        },
    });
    res.status(200).json(data);
}); 


autosRouter.post('/', async (req: Request, res: Response) => {
    const data = await AutosModel.create(req.body);
    res.status(201).json(data);
});


autosRouter.put('/:id', async (req: Request, res: Response) => {
    const data = await AutosModel.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(201).json(data);
});


autosRouter.delete('/:id', async (req: Request, res: Response) => {
    const data = await AutosModel.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(data);
});