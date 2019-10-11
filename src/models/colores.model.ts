import { Model, DataTypes, Association, Sequelize } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../config/database';
import { AutosModel } from './autos.model';

export class ColoresModel extends Model {
 
  
}

ColoresModel.init(
  {
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
 
  }, {
    sequelize,
    ...ConfigModel('t_colores'),
  },
);


async function insertarDatos() {
  await ColoresModel.bulkCreate([
    {descripcion: 'Rojo'},
    {descripcion: 'Verde'},
    {descripcion: 'Azul'},
    {descripcion: 'Violeta'},
    {descripcion: 'Magenta'},
    {descripcion: 'Amarillo'},
    {descripcion: 'Carmin'},
    {descripcion: 'Amber'},
    {descripcion: 'Azul Cielo'},
  ])
}

ColoresModel.afterSync(async (options) => {
  await insertarDatos();

});










