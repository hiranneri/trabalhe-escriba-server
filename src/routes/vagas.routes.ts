import {  Router } from 'express'
import { getRepository, getConnection } from 'typeorm'
import {Vagas} from '../models/Vagas';

const vagasRouter = Router();

vagasRouter.post('/', async(request,response)=>{
    try {
       const {idArea, datapublicacao, descricao, requisitos, atividades, beneficios } = request.body;
       
        const vagaSalva = await Vagas.create({
            setorvaga:idArea,
            datapublicacao,
            descricao,
            requisitos,
            atividades,
            beneficios,
            preenchida:false
        }).save();
        return response.status(201).json(vagaSalva)
        
    } catch (error) {
        console.log(error.message) 
       return response.status(500).json({message:'Tente novamente mais tarde'})
    }
})

vagasRouter.get('/', async(request, response)=>{
    try {
        const vagas =  getConnection().query(
                `
                select descricao, nome as nomeSetor, datapublicacao, requisitos, atividades,
                beneficios from vagas v
                inner join setores s
                on v."setorvagaId" = s.id;                
                `
        );
        vagas.then(resposta=>{
            return response.status(200).json(resposta)
        })
    } catch (error) {
       console.log(error.message) 
       return response.status(500).json({message:'Tente novamente mais tarde'})
    }
})

export default vagasRouter;