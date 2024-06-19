//criando migration

/** 
 * npx knex init  npx para não instalar globalmente o knex
 * 
 * cria o arquivo knexfile.js 
 * */ 

// comando para criar migrate  npx knex migrate:make create_users_table
//                             npx knex migrate:make nome da migrate que queremos criar (tabela)


/**
 * isso cria um knexFile para nos config o resto que falta como dizer qual sistema mysql / postegris/ ...
 * 
 * primeiro mudamos a config para um obj por estarmos usando o es6
 *         
 *         const knexConfig = {
 *          client: mysql2;
 *           connection:{
 *           host: ,
 *           port: ,
 *          user: ,
 *          password: ,
 *          database: , 
 *   }
 *   };
 * 
 * 
 *   knexFile precisa ser mudado pois estamos usando  es6
 * 
 *  import knexConfig from "./src/config/database.js";
 *   
 *   export default {
 *     development: knexConfig;
 *   }
 *   
 * 
 * 
 */



// rodando a migrate    npx knex migrate:up;