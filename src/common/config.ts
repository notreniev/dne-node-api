export const config = (env: string) => ({
    "development": {
        "username": "root",
        "password": "root",
        "database": "dnedb",
        "host": "localhost",
        "dbhost": "postgres",
        "dialectOptions": {
            "socketPath": '/var/run/postgresql/.s.PGSQL.5432'
        },
        "dialect": "postgres",
        "debug": true,
        "port": 3100
    },
    "homologation": {
        "username": "root",
        "password": "root",
        "database": "dnedb",
        "host": "localhost",
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
        "dialect": "mysql",
        "debug": false,
        "port": 5000
    }
    
}[env] || {})
