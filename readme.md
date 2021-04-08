# API Trabalhe Escriba
API desenvolvida para entregas os dados das vagas em aberto da página Trabalhe Conosco - Escriba

# O que faz?
 - Cadastro de Vagas<br/>
 - Pesquisa de Vagas
 
 # Serviço REST
Se utilizado locamente deverá ser utilizado a "base_url": "http://localhost:3000"
<code>Todos os content-type tanto para requests, quanto para responses são em formato JSON. </code>
</br>
<code> 
GET (Retorna todas as vagas cadastradas e disponíveis - (Ainda não preenchidas) - http://localhost:3000/vagas
</code></br>
<code>
POST (Cadastra uma nova vaga, devendo seguir os seguintes parâmetros) - http://localhost:3000/vagas
- Body: JSON
Exemplo:
{
	"datapublicacao":"2021-01-01",
	"descricao":"Gerente de desenvolvimento",
	"requisitos":"REQUISITOS: Formação em cursos superiores na área de tecnologia; conhecimento de orientação a objetos; experiência da linguagem JAVA e Spring, JPA, Maven, Hibernate, Conhecimento de Rest API bem como bom domínio em ferramenta de versionamento (Git). Desejável conhecimento em Docker/Kubernetes, serviços em nuvem; automação de testes unitários e integrações; design Pattern e aplicações/serviços distribuídos.",
	"atividades":"ATIVIDADES: Programar de acordo com especificações de análise; sugerir programações para atualizações e melhorias dos sistemas atuais; realizar testes unitários para a validação da programação.",
	"beneficios":"BENEFÍCIOS: Vale transporte + Vale refeição/alimentação + Plano de Saúde + Plano Odontológico + Seguro de Vida + Convênio Farmácia + Auxílio Educação + Auxílio Creche"
}
</code></br>

# Tecnologias Usadas:
- Typescript
- Express
- TypeORM
- Banco de Dados: PostgreSQL
