import express from 'express';
import presentacionRouter from './presentaciones/route/presentacion-route';

const api = express();

api.use('/presentaciones', presentacionRouter);

api.get('/', (req, res) => {
    console.log('Bienvenidos al api');
});

export default api;