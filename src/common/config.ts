export const config = (env: string) => ({
    "development": {
        "username": "root",
        "password": "root",
        "database": "dnedb",
        "host": "localhost",
        "dbhost": "localhost",
        "dialect": "postgres",
        "dialectOptions": {
            "socketPath": '/var/run/postgresql/.s.PGSQL.5432'
        },
        "":"",
        "debug": true,
        "port": 3100
    },
    "homologation": {
        "username": "root",
        "password": "root",
        "database": "dnedb",
        "host": "localhost",
        "dbhost": "postgres",
        "dialect": "mysql",
        "logging": false,
        "debug": false,
        "port": 4000
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "dnedb",
        "host": "localhost",
        "dbhost": "postgres",
        "dialect": "mysql",
        "debug": false,
        "port": 5000
    }

}[env] || {})