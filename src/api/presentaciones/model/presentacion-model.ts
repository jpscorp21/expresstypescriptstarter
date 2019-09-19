import mongoose, { Schema, Document } from 'mongoose';

interface Presentaciones extends Document {
    titulo: string;
    descripcion: string;
}

const presentacionSchema = new Schema({
    titulo: String,
    descripcion: String,
});
 
const Presentacion = mongoose.model<Presentaciones>('presentaciones', presentacionSchema);

export default Presentacion;
