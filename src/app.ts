import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './config/database'; // Iniciar base de datos
import { indexRouter } from './routes/index';


const app = express();


// Configuraciones globales
app.set('port', process.env.PORT || 3000); 


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Rutas
app.get('/', (req, res) => { 
    res.send('Bienvenidos al api rest');
});

app.use('/api/v1', indexRouter)


export default app;