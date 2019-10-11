export default {
    sequelize: {
        development: {
            username: process.env.USER_DB,
            password: process.env.PASSWORD,
            database: process.env.DB,
            host: process.env.HOST, 
            dialect: 'postgres',
            port: 5433,
            define: {
                timestamp: true,
                freezeTableName: true
            },
            timezone: 'America/Asuncion'
        },

        production:  {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DB,
            host: process.env.HOST,
            dialect: 'postgres',
            port: 5433,
            define: {
                timestamp: true,
                freezeTableName: true
            },
            timezone: 'America/Asuncion'
        },

        test: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DB,
            host: process.env.HOST,
            dialect: 'postgres',
            port: 5433,
            define: {
                timestamp: true,
                freezeTableName: true
            },
            timezone: 'America/Asuncion'
        }

    }
}