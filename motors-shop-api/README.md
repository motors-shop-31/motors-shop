# Projeto motors-shop

# Base url

- - http://localhost:3001

# criação de usuario

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

# login

- Rota de login Post baseUrl/login

- Dados necessarios

```
    "name": "string1222222",
	"password": "1234"
```

Ira retornar o token do usuario

# Product

- Rota cadastro de produto Post baseUrl/product

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
	"image": ["1212", "212"]
}
```

Tem que estar logado para poder cadastrar um produto

- Rota de pegar todas os produtos Get baseUrl/product

Ira retornar todos os produtos

- Rota de pegar um produto Get baseUrl/product/user/:id

Ira retornar um produto

- Rota de atualizar um produto Path baseUrl/product/:id

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
```

- Rota de deleção de um produto Del baseUrl/product/:id

ira deletar o produto
