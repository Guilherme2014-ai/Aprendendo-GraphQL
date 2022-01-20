# GraphQL

## Oque é ?
GraphQL é uma Linguagem de Consulta(Consulta HTTP) criada pelo Facebook, Disponível para várias linguagens e tecnologias.

## Vantagens e Propósito
GraphQL permite o Client-Side fazer Requisições mais detalhadas para o Server-Side, assim com o Intuido de Resolver um problema chamado Overfetching
### Overfetching
Hoje em dia muitas aplicações - tanto back-end quanto front-end - são Hospedadas em Serviços Cloud, tais como a AWS, Azure etc... sabendo que a cobrança é feita por quantidade de uso de recursos, o metodo tradicional REST se torna muito inapropiado nessa questão, pois quando é feita uma Requisição para alguma rota, a resposta virá com todos os campos, mesmo que não seja necessário e é ai o problema, esse excesso tráfego gerá custos desnecessários.

## Como o GraphQL resolve o problema ?
Dado que o problema de "Overfetching" se da pelo excesso de Campos desnecessários, oque o GraphQL básicamente faz é devolver somente os campos pedidos. Exemplo:
```
getAllUsers {
    name
    email
}
```
Oque a Requisição acima basicamente pede é "Só me Retorne os Campos Nome e o Email."



## Getting Starting
```
npm i express graphQL express-graphql --save
```
Após isto terá duas opções de carregar o GraphQL na sua Aplicação, essas opções podem ser encontradas na própia documentação do GraphQL ou Neste Repositório.

## Como Funciona ?
O GraphQL ocupa somente uma rota, esta rota será a onde as requisições serão feitas, as requisições do GraphQL são resumidas em "Queries" e "Mutations", a onde uma Query é um Verbo referente a Receber informações, então na "Query" irá todos os Métodos que apenas Recebem Informações, em contra partida temos o Verbo "Mutation" a onde é Referente á todos os Métodos que Modificam o Banco de Dados, como uma Inserção, Update ou Delete por exemplo.
### Types
Quando um Método "Query" é criado por exemplo, é certo que ele irá retornar alguma coisa, oque o type faz é tipar o retorno do Método.(OBS: Caso a resposta venha diferente do type definido o graphQL nõo vai conseguir fazer a filtragem nem devolver a resposta.)
### Args
Os Args seriam como os parametros, no qual podem ser usados para filtragem por exemplo.
```
createNewUser(name: "Guilherme", age: 18) {
    name
    age
}
// Argumentos: "name" e "age".
// Retorne Apenas: "name" e "age".
```
