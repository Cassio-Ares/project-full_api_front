import * as dotenv from 'dotenv';

dotenv.config();

export const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.NODE_ENV || 3000,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "db",
  },
};

export default knexConfig;




/**
 * primeira config para tests e antes de configurar o knexfile,js
 *
 * const knexConfig = knex({
 *  client: 'mysql2',
 * connection:{
 *  host: process.env.DB_HOST || '127.0.0.1',
 *  port: process.env.NODE_ENV || 3000,
 *  user: process.env.DB_USER || 'root',
 *  password: process.env.DB_PASSWORD || 'password',
 * database: process.env.DB_NAME || 'db'
 *}
 *})
 *
 *    export default knexConfig;
 */

/**
 * Após instalar yarn add knex mysql2
 *
 * os dados dentro de connectionn estaram dentro de um arquivo .env
 * yarn add dotenv
 *
 *   const knexConfig = knex({
 *    client: 'mysql2';
 *    connection:{
 *      host: ,
 *      port: ,
 *      user: ,
 *      password: ,
 *      database: ,
 *   }
 *   })
 *
 *
 * export default knexConfig
 *
 */

// yarn add dotenv
// no server importamos o dotenv e colocamos dotenv.config();

/**
 * criamos na raiz um arquivo dotenv
 *
 *    node_env = local
 *    db_host = "localhost
 *    db_name= database
 *    db_user = user
 *    db_password = password
 *
 *
 *   para usar usamos o sintaxe: process.env.nome do env
 *
 *  e o importamos em nosso server
 *
 */
