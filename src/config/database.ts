import { Sequelize } from 'sequelize';

import conf from '../config/config';

const env = process.env.NODE_ENV || 'development';
// tslint:disable-next-line:no-var-requires
const config = conf.sequelize.development as any;

// Conexion a la base de datos

export function init() {
    
}

const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            ...config,
            dialectOptions: {
                useUTC: false,
                dateStrings: true,
                typeCast: true,
            },
        },
    );

sequelize.sync({force: true});

export default sequelize;
