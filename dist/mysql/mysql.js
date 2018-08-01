"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log("Clase inicializada");
        this.conn = mysql.createConnection({
            host: 'ec2-18-213-54-246.compute-1.amazonaws.com',
            user: "udemy_user",
            password: 'udemy_user',
            database: 'udemy'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new MySQL());
    }
    static ejecutarQuery(query, callback) {
        this.instance.conn.query(query, (err, results, fields) => {
            if (err) {
                console.log("Error en query");
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.conn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = MySQL;
