import express from 'express';
import dotenv from 'dotenv';   //importamos o dotenv
dotenv.config()                //basicamente o iniciamos
import userRoute from './modules/user/user.route.js';

//import knexConfig from './config/database.js';  import  da config para testar a conexão 

//const DB_USER = process.env.DB_USER; teste para ver se .env esta ok 


const app = express();
app.use(express.json());


app.use('/user', userRoute);

app.get('/test', (_, res)=>{
    return res.send('Rota ok!');
});


app.listen(8080, ()=>{
   // console.log(knexConfig('users'))   console.log da config para testar a conexão
   // console.log('user', DB_USER)       teste para ver se .env esta ok 
    console.log('Escutando na porta 8080');
})

