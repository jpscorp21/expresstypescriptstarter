import { Model, DataTypes } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../config/database';

export class AutosModel extends Model {}

AutosModel.init(
  {
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    anho: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_color: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    marca: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
 
  }, {
    sequelize,
    ...ConfigModel('t_autos'),
  },
);
