import express from 'express';
import routes from './routes';
import * as cors from 'cors';


const app = express();
app.use(express.json());
//app.use(vagas);
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')    
    response.header('Access-Control-Allow-Headers', 'Origin, '+
    'X-Requested-With, Content-Type, Accept, Authorization');

    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE')
        return response.status(200).json({});
    }
    next();
})
app.use(routes);
// const API_URL = 'http://localhost';

// function enableCors(){
//     const options: cors.CorsOptions = {
//         allowedHeaders:[
//             'Origin',
//             'X-Requested-With',
//             'Content-Type',
//             'Accept',
//             'X-Access-Token',
//         ],
//         credentials: true,
//         methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//         origin: '*',
//         preflightContinue: false,
//     };
    
// }




export default app;
