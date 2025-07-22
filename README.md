# Sistema de Gestão de Policiais Militares (SGPM)

![Status](https://img.shields.io/badge/status-em--desenvolvimento-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue?logo=express)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)

## 📄 Sobre o Projeto

O **SGPM** é uma aplicação web full-stack para gerenciar os dados de policiais militares de uma determinada unidade. Desenvolvido com o objetivo de ser uma ferramenta prática e eficiente, o sistema permite o cadastro, listagem, edição e exclusão de policiais, centralizando as informações em um banco de dados leve e local.

A interface foi construída com Bootstrap 5 para garantir um design limpo, profissional e totalmente responsivo.

---

## 📸 Telas do Sistema

*(**Importante:** Substitua os links abaixo pelos links reais das suas imagens ou GIFs do projeto. Você pode hospedar as imagens no próprio GitHub ou em um site como o [Imgur](https://imgur.com/)).*

**Tela de Cadastro:**
![Tela de Cadastro](https://i.imgur.com/link-para-sua-imagem-cadastro.png)

**Tela de Listagem:**
![Tela de Listagem](https://i.imgur.com/link-para-sua-imagem-lista.png)

---

## ✨ Funcionalidades

- ✅ **Cadastro de Policiais:** Adiciona novos policiais ao banco de dados (Nome, RG, Posto, Unidade, Escala).
- ✅ **Listagem Completa:** Exibe todos os policiais cadastrados em uma tabela organizada.
- ✅ **Edição de Dados:** Permite a atualização das informações de um policial existente.
- ✅ **Exclusão de Policial:** Remove o registro de um policial da base de dados.
- ✅ **Layout Responsivo:** Interface adaptável para desktops, tablets e smartphones.

---

## 🚀 Roadmap de Melhorias

- [ ] **Busca Avançada:** Implementar funcionalidade de busca por nome ou RG.
- [ ] **Autenticação:** Adicionar um sistema de login para restringir o acesso.
- [ ] **Paginação:** Melhorar a tabela de listagem com paginação.
- [ ] **Deploy na Nuvem:** Hospedar a aplicação em plataformas como **Render** ou **Railway**.
- [ ] **Validação de Dados:** Aprimorar a validação no backend e frontend.

---

## 🛠️ Tecnologias Utilizadas

#### Backend
- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para construção de APIs.

#### Frontend
- **HTML5** e **CSS3**: Estrutura e estilização.
- **JavaScript (ES6)**: Lógica do lado do cliente.
- **Bootstrap 5**: Framework CSS para design responsivo.

#### Banco de Dados
- **SQLite**: Banco de dados relacional leve e local.

---

## 🗂️ Estrutura de Pastas

gestao-pm/
├── db/
│   └── database.db       # Banco de dados SQLite
├── node_modules/         # Dependências do Node.js
├── public/               # Arquivos de frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server.js             # Servidor Express e lógica de backend
├── package.json          # Configurações e dependências
└── README.md             # Documentação do projeto


---

## ⚙️ Como Executar Localmente

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (que já vem com o npm)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/gestao-pm.git](https://github.com/seu-usuario/gestao-pm.git)

2. **Acesse a pasta do projeto:**

Bash

cd gestao-pm

3. **Instale as dependências:**

Bash

npm install

4. **Inicie o servidor:**

Bash

node server.js

5. **Acesse no seu navegador:**

👉 http://localhost:3000

⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por Piter Lourencini.

Estudante de Análise e Desenvolvimento de Sistemas em busca de oportunidades internacionais na área de desenvolvimento, especialmente na Europa.
