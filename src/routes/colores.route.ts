import { Router, Request, Response } from "express";
import { ColoresModel } from '../models/colores.model';

export const coloresRouter = Router();

coloresRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items = await ColoresModel.findAll();
        res.status(200).json(items);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
}); 


coloresRouter.get('/:id', async (req: Request, res: Response) => {
    const data = await ColoresModel.findOne({
        where: {
            id: Number(req.params.id),
        },
    });
    res.status(200).json(data);
}); 


coloresRouter.post('/', async (req: Request, res: Response) => {
    try {
        const data = await ColoresModel.create(req.body);
        res.status(201).json(data);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
});


coloresRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const data = await ColoresModel.update(req.body, {
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(201).json(data);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
    
});


coloresRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const data = await ColoresModel.destroy({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
});
