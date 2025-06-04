# 📚 Coffee API — NestJS

Uma simples API de gerenciamento de cafés, criada com **NestJS**, com validação de dados utilizando **class-validator**.

---

## 🚀 Como executar o projeto

### ✅ Pré-requisitos:

- Node.js (versão 16 ou superior)
- npm ou yarn

---

### ✅ Instalar as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

---

### ✅ Executar o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

O servidor será iniciado em:  
➡️ `http://localhost:3000`

---

## 🧪 Testando os endpoints

### ✅ Base URL:

`http://localhost:3000`

---

### ✅ GET /

**Descrição:**  
Verifica se a API está funcionando.

**Exemplo cURL:**

```bash
curl http://localhost:3000
```

---

### ✅ GET /coffees

**Descrição:**  
Retorna a lista de cafés cadastrados.

**Exemplo cURL:**

```bash
curl http://localhost:3000/coffees
```

---

### ✅ GET /coffees/:id/detalhes

**Descrição:**  
Retorna os detalhes de um café pelo ID.

**Exemplo cURL:**

```bash
curl http://localhost:3000/coffees/1/detalhes
```

---

### ✅ POST /create-coffee

**Descrição:**  
Cria um novo café.

**Campos obrigatórios:**

- `id` (number)
- `nome` (string)
- `tipo` (string)
- `quantidade` (number)
- `preco` (number)
- `descricao` (string)
- `tags` (array de strings)

---

**Exemplo cURL:**

```bash
curl -X POST http://localhost:3000/create-coffee \
  -H "Content-Type: application/json" \
  -d '{
    "id": 4,
    "nome": "Café Gourmet",
    "tipo": "Suave",
    "quantidade": 20,
    "preco": 15,
    "descricao": "Café premium de alta qualidade",
    "tags": ["gourmet", "orgânico"]
  }'
```

---

**Exemplo no Postman:**

1. Método: **POST**
2. URL: `http://localhost:3000/create-coffee`
3. Headers:
   - `Content-Type: application/json`
4. Body:
   - Selecione `raw` e `JSON`
   - Cole o JSON de exemplo acima

---

## ⚠️ Validações importantes:

✅ Todos os campos são obrigatórios.  
✅ Se `id` já estiver cadastrado → erro `400 Bad Request`.  
✅ Se faltar campo obrigatório → erro `400 Bad Request` com mensagem de validação.

---

## ✅ Tecnologias utilizadas:

- NestJS
- TypeScript
- class-validator
- class-transformer

---

## 📄 Licença

Este projeto está sob a licença MIT.
# Aula04
