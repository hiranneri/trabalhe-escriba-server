import {  Router } from 'express'
import { getRepository, getConnection } from 'typeorm'
import {Vagas} from '../models/Vagas';

const vagasRouter = Router();

vagasRouter.post('/', async(request,response)=>{
    try {

       var {setor, datapublicacao, descricao, requisitos, atividades, beneficios } = request.body;
       let nomeSetor = setor;
       switch (setor) {
           case 'Administrativas':
                setor=process.env.ID_ADMNISTRATIVAS;
                break;
            case 'Comerciais':
                setor=process.env.ID_COMERCIAIS; 
                break;
            case 'Técnicas':
                setor= process.env.ID_TECNICAS;
                break;
           default:
               setor='';
               return response.status(400).json({message:'Área da vaga informada incorretamente!'});
               
       }

        const vagaSalva = getConnection().query(
            `
            insert into vagas (datapublicacao,descricao, requisitos, atividades, 
                beneficios, preenchida,"setorvagaId")
            values('${datapublicacao}', '${descricao}', '${requisitos}'
            ,'${atividades}','${beneficios}','${false}',
            '${setor}');
            `
        )
        vagaSalva.then(()=>{
            var resposta = {
                descricao,
                setor:nomeSetor,
                datapublicacao,
                requisitos,
                atividades,
                beneficios
                
            }
            return response.status(201).json(resposta);
        })
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