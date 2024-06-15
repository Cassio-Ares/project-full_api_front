import express from 'express';
import userRoute from './modules/user/user.route.js';


const app = express();
app.use(express.json());


app.use('/user', userRoute);

app.get('/test', (_, res)=>{
    return res.send('Rota ok!');
});


app.listen(8080, ()=>{
    console.log('Escutando na porta 8080');
})