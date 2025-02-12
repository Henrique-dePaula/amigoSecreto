# 📄 Projeto Sorteador de Amigo Secreto

Projeto de sorteio de amigo secreto desenvolvido com **HTML**, **CSS** e **JavaScript**.

## 🚀 Objetivo

Criar um sistema de **sorteio de amigo secreto** com foco na lógica de programação em **JavaScript**, utilizando:

- **Funções**
- **Manipulação de arrays** (`Set` e `Array`)
- **Condicionais**
- **Validação de dados**
- **Manipulação do DOM**

## 🛠 Tecnologias Utilizadas

- 🌐 **HTML**: Estruturação da página  
- 🎨 **CSS**: Estilização e responsividade  
- ⚙️ **JavaScript**: Lógica de sorteio e interação com o DOM  

## 📂 Estrutura do Projeto

- **Arquivo HTML**: `index.html`  
- **Arquivo CSS**: `style.css`  
- **Arquivo JavaScript**: `app.js`  

## 🔍 Como Funciona

### 📝 Entrada de Dados

- Campo de texto para **adicionar participantes**  
- Validação para **nomes duplicados** ou **inválidos**  

### 🎲 Lógica do Sorteio

1. Armazena os nomes em um **`Set`** para evitar duplicatas  
2. Utiliza `Math.random()` para realizar o sorteio de forma **aleatória**  
3. Exibe o resultado **dinamicamente** no DOM  

### 🎨 Interface

- **Design responsivo** utilizando **Flexbox**  
- **Cores temáticas** definidas com **variáveis CSS**  
- **Efeitos hover** aplicados nos botões para melhor interação  

## 🎯 Objetivo do Projeto

🧠 **Foco principal**: Praticar conceitos essenciais de **JavaScript**, como:

- **Manipulação de dados** com `Set` e `Array`  
- **Funções e eventos** (como `addEventListener`)  
- **Validação de dados** (verificação de nomes duplicados e formato correto)  
- **Geração de números aleatórios** utilizando `Math.random()`  
- **Manipulação do DOM** para exibir os resultados dinamicamente  

## ⚙️ Funcionalidades

- **Adicionar participantes** com validação de nomes  
- **Sorteio aleatório** de nomes inseridos 
- **Resetar** a lista e o resultado do sorteio  
- **Capitalização automática** da primeira letra digitada  

## 🔄 Como Usar

1. Digite o nome de um participante no campo de texto.
2. Clique no botão **Adicionar** ou pressione **Enter** para adicionar à lista.
3. Clique no botão **Sorteio** para sortear um amigo secreto aleatoriamente.
4. Use o botão **Resetar** para reiniciar o sorteio e limpar a lista de participantes.

## 📄 Código

O código utiliza um **`Set`** para garantir que os nomes dos participantes sejam únicos e realiza o sorteio com base em números aleatórios gerados através de `Math.random()`. A interação é feita por meio de eventos e manipulação do DOM.
