import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const mysql = new MySQL();


const server=Server.init(3000);
server.app.use(router);
server.start(function(){
console.log("Servidor corriendo en el puertos 3000");
});