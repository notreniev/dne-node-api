### DNE-NODE ###

Busquei resolver um problema comum para muitas aplicações que precisam integrar-se com a base de dados dos correios (DNE - Diretório Nacional de Endereços) para obter informações de CEPs e endereços a assim compor as informações de endereços de pessoas para a maioria das necessidades de negócios existentes. 

O processo é bastante simples:

Temos uma aplicação cliente que acessa a url do serviço deste projeto, no caso consultando um CEP como no exemplo abaixo:

http://localhost:3100/cep/90650002

O retorno desta consulta será um JSON com os seguintes dados:

˜˜˜
{
    result: 
    [
        {
            id: 6,
            bairro: "Centro Histórico",
            cep: "90010340",
            cidade: "Porto Alegre",
            complemento2: "",
            end: "Praça dos Açorianos",
            uf: "RS",
        }
    ]
} 

˜˜˜

O serviço sempre fará a busca primeiramente na base local do sistema e caso não encontre fará o acesso ao webservice dos correios para em seguida gravar o resultado da busca na base local. Esta base local então passará a servir como um cache para consultas de CEPs. 

Utilizei o framework express do NodeJS por achar que é a base da maioria dos frameworks em Node hoje em dia. Também quis experimentar o pattern strategy que possibilitaria salvar informações em dois bancos de dados diferentes: Postgres e MongoDB. A ideia do Postgres é armazenar os dados de CEPs enquanto que a ideia do mongo é armazenar logs das consultas. Poderia ser utilizado para identificar a quantidade de pesquisar em banco de dados local e webservices dos correios foram feitas. 

A aplicação está desenvolvida utilizando docker e para rodar basta executar os seguintes comandos:

Para subir a aplicação:
docker-compose up

Para criar o usuário do mongoDB:
docker exec -it dne-node-api_mongo_1 mongo --host localhost -u root -p root --authenticationDatabase admin --eval "db.getSiblingDB('dnedb').createUser({user: 'root', pwd: 'root', roles: [{role: 'readWrite', db: 'dnedb'}]})"
