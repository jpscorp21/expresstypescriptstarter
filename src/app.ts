import express from 'express';
import dotenv from 'dotenv';
import './config/db';
import api from './api/api';

dotenv.config();

const app = express();


// Configuraciones globales
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Rutas

app.use('/api/v1', api);

app.get('/', (req, res) => { 
    res.send('Bienvenidos al api rest');
});


export default app;