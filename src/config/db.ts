import mongoose from 'mongoose';
import keys from './keys';

/**
 * Conexion a MongoDB
 */
mongoose.connect(keys.mongodb.url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Conectado a mongodb');
});
