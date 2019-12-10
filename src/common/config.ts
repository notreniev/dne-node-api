export const config = (env: string) => ({

    "development": {
        "username": "root",
        "password": "root",
        "database": "apmnode",
        "host": "localhost",
        "dialectOptions": {
            "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
        },
        "dialect": "mysql",
        "debug": false,
        "port": 3000
    },
    "homologation": {
        "username": "root",
        "password": "root",
        "database": "apmnode",
        "host": "localhost",
        "dialect": "mysql",
        "logging": false,
        "debug": false,
        "port": 4000
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "apmnode",
        "host": "localhost",
        "dialect": "mysql",
        "debug": false,
        "port": 5000
    }
    
}[env] || {})