# 🎬 API de Filmes - Backend Node.js

Uma API REST completa para gerenciamento de filmes, construída com Node.js, Express e Prisma ORM. Este projeto implementa um CRUD completo com arquitetura MVC.

## 🚀 Funcionalidades

- ✅ CRUD completo de filmes
- 🗄️ Banco de dados SQLite com Prisma ORM
- 📊 Sistema de avaliações e classificação indicativa
- 🎯 Arquitetura MVC organizada

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **CORS** - Controle de acesso
- **dotenv** - Variáveis de ambiente

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código (recomendamos o [VS Code](https://code.visualstudio.com/))

## 🔧 Instalação e Configuração

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/seu-usuario/back-project3.git
cd back-project3
```

### Passo 2: Instalar as dependências

```bash
npm install
```

### Passo 3: Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# No Windows PowerShell
New-Item -Path ".env" -ItemType File

# Ou no Command Prompt
echo. > .env
```

Adicione as seguintes variáveis ao arquivo `.env`:

```env
# Configuração do banco de dados
DATABASE_URL="file:./dev.db"

# Configuração do servidor
PORT=4000
```

### Passo 4: Configurar o banco de dados

#### 4.1 Gerar o Prisma Client

```bash
npx prisma generate
```

#### 4.2 Executar as migrações

```bash
npx prisma migrate deploy
```

#### 4.3 (Opcional) Popular o banco com dados de exemplo

```bash
npm run prisma:seed
```

### Passo 5: Iniciar o servidor

#### Modo desenvolvimento (com auto-reload)

```bash
npm run dev
```

#### Modo produção

```bash
npm start
```

O servidor estará rodando em `http://localhost:4000`

## 📁 Estrutura do Projeto

```
back-project3/
├── prisma/
│   ├── migrations/           # Migrações do banco de dados
│   ├── seed/
│   │   └── seed.js          # Dados iniciais para popular o banco
│   ├── schema.prisma        # Schema do banco de dados
│   └── dev.db              # Banco SQLite (gerado automaticamente)
├── src/
│   ├── controllers/
│   │   └── filmeController.js    # Lógica de negócio dos filmes
│   ├── models/
│   │   └── filmeModel.js         # Modelo de dados dos filmes
│   ├── routes/
│   │   ├── filmeRoutes.js        # Rotas dos filmes
│   │   └── index.routes.js       # Rotas principais
│   └── server.js                 # Configuração do servidor Express
├── .env                         # Variáveis de ambiente (criar)
├── package.json                 # Dependências e scripts
└── README.md                    # Este arquivo
```

## 🌐 Endpoints da API

### 🎬 Filmes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Listar todos os filmes |
| GET | `/filmes/:id` | Buscar filme por ID |
| POST | `/filmes` | Criar novo filme |
| PUT | `/filmes/:id` | Atualizar filme |
| DELETE | `/filmes/:id` | Deletar filme |

### 📊 Exemplo de Payload - Criar Filme

```json
{
  "title": "Avatar: O Caminho da Água",
  "director": "James Cameron",
  "synopsis": "Sequência do épico Avatar, explorando os oceanos de Pandora.",
  "indicativeRating": 12,
  "genre": "Ficção Científica",
  "duration": "3h 12min",
  "rating": 8.5,
  "releaseYear": 2022
}
```

## 🧪 Testando a API

### Teste básico de funcionamento

```bash
curl http://localhost:4000/
```

Resposta esperada:
```json
{
  "message": "API de filmes on!"
}
```

### Listar filmes

```bash
curl http://localhost:4000/filmes
```

### Criar filme

```bash
curl -X POST http://localhost:4000/filmes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Novo Filme",
    "director": "Diretor Exemplo",
    "duration": "2h 30min",
    "rating": 9.0,
    "releaseYear": 2024
  }'
```

## 🗄️ Gerenciamento do Banco de Dados

### Visualizar dados (Prisma Studio)

```bash
npx prisma studio
```

Isso abrirá uma interface web em `http://localhost:5555` para visualizar e editar os dados.

### Reset do banco de dados

```bash
npx prisma migrate reset
```

### Criar nova migração

```bash
npx prisma migrate dev --name nome_da_migracao
```

## 🚨 Solução de Problemas Comuns

### Erro: "Cannot read properties of undefined (reading 'findMany')"

**Solução:**
```bash
npx prisma generate
npx prisma migrate deploy
```

### Erro: "Port already in use"

**Solução:** Altere a porta no arquivo `.env` ou mate o processo:
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID_NUMBER> /F
```

### Problemas com migrações

**Solução:** Reset e recrie:
```bash
npx prisma migrate reset
npx prisma migrate deploy
```

## 📝 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| Desenvolvimento | `npm run dev` | Inicia servidor com auto-reload |
| Produção | `npm start` | Inicia servidor (adicione este script) |
| Seed | `npm run prisma:seed` | Popula banco com dados de exemplo |
| Studio | `npx prisma studio` | Interface visual do banco |

## 📚 Recursos Adicionais

- [Documentação do Express](https://expressjs.com/)
- [Documentação do Prisma](https://www.prisma.io/docs/)
- [JWT.io](https://jwt.io/) - Para decodificar tokens JWT
- [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) - Para testar APIs

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**João Gianoni**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!