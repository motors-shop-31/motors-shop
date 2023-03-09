# Projeto motors-shop-api

E um projeto back-end feito em node com typescript utilizando yup para tratar os dados e o jwt para realizar a autentificação do usuario
esse projeto tinha como objetivo fazer uma api para o front onde seja possivel cadastrar tanto usuarios comuns quanto usuarios vendedores
de produtos, para os usuarios comuns seja possivel ver os produtos do vendedor e conversar com ele via whatsapp, para o vendedor sera possivel
vender tanto carro e motos e atualizar e deletar esses dados

integrantes do grupo

- Antonio Pedro salviano neto
- Hyago Victor
- Jasmyne Leandro
- João Dantas Gomes de Araújo

# Para poder rodar o projeto

E necessario fazer o clone do repositorio com o git clone ou ir em code e Download zip

depois de ter feito o clone do repositorio ou ter baixado e necessario abrir o terminal na pasta motors-shop-api
e rodar as dependencias do projeto com um dos seguintes comandos

yarn
yarn install

depois de ter instalado as dependencias e necessario adicionar o arquivo .env seguindo as instruções do arquivo .env.example
e por fim depois de ter criado o arquivo .env rodar as migração do projeto com o comando

yarn typeorm migration:run -d src/data-source.ts

e rodar o servidor com o comando

yarn dev

# Rotas

# Base url

- - http://localhost:3001

# Users

- Rota cadastro Post baseUrl/user

- Dados necessarios

```
    email: "string222222@2email.com1",
    name: "string12",
    password: "1234",
    cpf: "1234",
    birthday: "2023-02-16T05:40:46.965Z",
    tel: "1234",
    description: "string",
    account_type: "string",
    address: {
        cep: 12223,
        state: "string",
        city: "string",
        street: "string",
        number: "string",
        complement: "string"
    }
```

Ira retornar o usuario

- Rota de atualizar o usuario Path baseUrl/user
- E necessario estar autentificado

Essa rota ira atualizar o usuario logado os seguites dadaos são possiveis de ser atualizado

```
{
	name: "string"
	email: "string"
	password: "string"
	birthday: "string"
	cpf: "string"
	tel: "string"
	description: "string"
	account_type: boolean
}
```

- Pegar o usuario logado Post baseUrl/user
- E necessario estar autentificado

ira retornar as informações do usuario

- Deletar o usuario DEL baseUrl/user/:id

ira deletar o usuario com o id passado

# address

- Rota para atualizar o endereço do usuario logado Path baseUrl/user/address
- E necessario estar autentificado

Dados possiveis de ser atualizado

```
{
	cep: 12223,
	state: "string",
	city: "string",
	street: "string",
	number: "string",
	complement: "string"
}
```

# login

- Rota de login Post baseUrl/login

- Dados necessarios

```
    "name": "string1222222",
	"password": "1234"
```

Ira retornar o token do usuario

- Rota para redefinir senha baseUrl/login/forgot

Dados necessarios email do usuario cadastrado

```
email: seu email
```

- Para verificar se o codigo e valido baseUrl/login/forgot/verify

```
{
	code: codigo para recuperação
}
```

- Para redevinir a senha do usuario baseUrl/login/forgot/:code

```
password: nova senha para recuperação
```

# Product

- Rota cadastro de produto Post baseUrl/product
- E necessario estar autentificado

Dados necessarios

```
{
	"type": "string2",
	"title": "motos",
	"year": 19,
	"mileage": 20,
	"price": 5000,
	"description": "string",
	"vehicle": "carro",
	"published": false,
	"cover_image": "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",
	"image": ["urlImage", "urlImage"]
}
```

- Rota de pegar todas os produtos Get baseUrl/product

Ira retornar todos os produtos

- Rota de pegar todos os produto de um usuario Get baseUrl/product/user/:id

Ira retornar um produto

- Rota de atualizar um produto Path baseUrl/product/:id
- E necessario estar autentificado

os dados do produto que quer ser atualizados

```
	"type": "string2",
	"title": "motos",
	"year": 19,
	"mileage": 20,
	"price": 5000,
	"description": "string",
	"vehicle": "carro",
	"published": false,
	"cover_image": "https://res.cloudinary.com/ddiduqrz0/image/upload/v1676555339/car_iww7cp.png",

	Para atualizar as imagens do produto
	"image": [
			{
				"id": "929b8f21-99af-466e-812d-28452d5e0e7b",
				"image": ""  se for passado uma imagen ja cadastrada no banco de dados vazia ira excluir a imagens
			},
			{
				"image": "Criar imagens" se for passado uma imagen sem id ira ser criada uma imagen no banco de dados
			},
			{
				"id": "929b8f21-99af-466e-812d-28452d5e0e7b",
				"image": "Nova imagen" se for passado uma imagen com id so que com image diferente sera atualizado
			},
		]
```

- Rota de deleção de um produto Del baseUrl/product/:id
- E necessario estar autentificado

ira deletar o produto

# comments

- Rota para criar um comentario Post baseUrl/comments
- E necessario estar autentificado

Dados necessarios

```
	idProduct: id do produto
	text: comentario
```

- Rota para atualizar o comentario Path baseUrl/comments/:id
- E necessario estar autentificado

```
{
	text: "seu novo comentario"
}
```

- Rota para deletar o comentario Del baseUrl/comments/:id
- E necessario estar autentificado
