import { Model, DataTypes } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../config/database';

export class ColoresModel extends Model {}

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
