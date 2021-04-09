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
                setor='e3489f48-9737-4639-9e94-9d2f18c29045';
                break;
            case 'Comerciais':
                setor='08924a21-7c2e-41d4-b3bc-17d5a6bbaf12';
                break;
            case 'Técnicas':
                setor='a7d0ebc6-79e6-45d9-afbb-13541ecc60fa';
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