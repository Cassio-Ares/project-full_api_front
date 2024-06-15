import express from "express";

const app = express();

app.use(express.json());

app.get("/teste", (_, res) => {
  return res.send("Rota ok");
});

app.listen(8080, () => {
  console.log("Rodando na port 8080.");
});

/**
 * Instalações iniciais:
 *  * yarn init
 *  * yarn add express
 */

/**
 * {
 *    "name": "api_adm_money",
 *    "version": "1.0.0",
 *    "main": "index.js",
 *    "type": "module",     type module muda a forma de importação para import ao inves de require
 *    "author": "cassio",
 *    "license": "MIT",
 *    "scripts": {
 *         "dev": "nodemon index.js"   scripts com nodemon para hot reload 
 *  },
 *   "dependencies": {
 *    "express": "^4.19.2"
 *   },
 *  "devDependencies": {
 *  "nodemon": "^3.1.3"
 *  }
 *}
 */
