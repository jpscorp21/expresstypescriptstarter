import { Model, DataTypes, Sequelize, Deferrable } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../config/database';
import { ColoresModel } from './colores.model';
import { INITIALLY_IMMEDIATE } from 'sequelize/types/lib/deferrable';

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
    marca: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
 
  }, {
    sequelize,
    ...ConfigModel('t_autos'),
  },
);

async function insertarDatos() {
  await AutosModel.bulkCreate([
    {
      descripcion: 'Toyota aller',
      anho: 2015,
      color_id: 1,
      marca: 'Toyota'
    },
    {
      descripcion: 'Hyundai Santa Fe',
      anho: 2005,
      color_id: 2,
      marca: 'Hyundai'
    },
  ])
}

AutosModel.afterSync(async (options) => {
  await insertarDatos();
}) 

AutosModel.belongsTo(ColoresModel, {
  foreignKey: 'color_id',
  targetKey: 'id',
  as: 'colores',
  constraints: true,
  foreignKeyConstraint: true,
});

