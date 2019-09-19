import Presentacion from './../model/presentacion-model';
import { Request, Response } from 'express';

export default class PresentacionController {

    static async create(req: Request, res: Response) {
        try {
            const presentacion = new Presentacion({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion
            });
            const presentacionNuevo = await presentacion.save();
            res.status(201).json(presentacionNuevo);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const offset = req.query.offset ? Number(req.query.offset) : 0;
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const order = req.query.order || 'asc';
    
            const search = req.query.search || '';
            const regex = new RegExp(search, 'i');
    
            const presentaciones = await Presentacion
              .find({ titulo: regex })
              .skip(offset)
              .limit(limit)
              .sort({titulo: order})
              .exec();
    
            res.status(200).json(presentaciones);
        } catch(e) {
            res.status(500).json(e);
        }

    }

    static async findById(req: Request, res: Response) {
        try {
            const presentacion = await Presentacion.findById(req.params.id).exec();
            if (presentacion) {
                return res.status(200).json(presentacion);
            } 
        } catch(e) {
            return res.status(500).json(e);
        }
        
    }

    static async update(req: Request, res: Response) {
        try {
            const presentacion = await Presentacion.findById(req.params.id).exec();
            if (presentacion) {
                presentacion.titulo = req.body.titulo;
                presentacion.descripcion = req.body.descripcion;
                res.status(200).json(await presentacion.save());
            }
            res.status(400).json({
                message: 'No existe el recurso con ese id'
            });
        } catch(e) {
            res.status(500).json(e);
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            res.status(200).json(await Presentacion.findByIdAndRemove(req.params.id).exec());
        } catch(e) {
            res.status(500).json(e);
        }
    }
  
}

