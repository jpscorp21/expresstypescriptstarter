import { Router, Request, Response } from "express";
import { AutosModel } from './../models/autos.model';
import { ColoresModel } from '../models/colores.model';
import { Sequelize, Association } from 'sequelize';


export const autosRouter = Router();

autosRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items = await AutosModel.findAll({
            include: [{
                model: ColoresModel, 
                as: 'colores'
                // where: {id: Sequelize.col('autos.id_color')},
                             
                                
            },

        ]
        });
        res.status(200).json(items);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
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
    try {
        const data = await AutosModel.create(req.body);
        res.status(201).json(data);
    } catch(e) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: e
        });
    }
});


autosRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const data = await AutosModel.update(req.body, {
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


autosRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const data = await AutosModel.destroy({
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
