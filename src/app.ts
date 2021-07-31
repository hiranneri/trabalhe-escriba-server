import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
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



export default app;
