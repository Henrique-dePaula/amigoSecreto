// Lista para armazenar os nomes dos amigos
let listaDeAmigos = new Set(); 

// Captura elementos do DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigosElement = document.createElement("ul"); // Criar a lista dinâmica
const resultadoElement = document.getElementById("resultList");

// Insere a lista antes do botão de sorteio
document.querySelector(".main-content").insertBefore(listaAmigosElement, resultadoElement);

// Função para adicionar um amigo à lista
function adicionarParticipante() {
    const nomeAmigo = capitalizeFirstLetter(inputAmigo.value.trim());

    // Validação de entrada
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(nomeAmigo)) {
        alert("Por favor, insira um nome válido.");
        inputAmigo.value = "";
        return;
    }
    if (listaDeAmigos.has(nomeAmigo)) {
        alert(`O nome '${nomeAmigo}' já está na lista!`);
        return;
    }

    // Adiciona e atualiza a exibição da lista
    listaDeAmigos.add(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = "";
}

// Atualiza a exibição da lista de amigos
function atualizarListaDeAmigos() {
    listaAmigosElement.innerHTML = "";
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.size === 0) {
        alert("Adicione pelo menos um participante antes de sortear!");
        return;
    }

    const amigosArray = Array.from(listaDeAmigos);
    const amigoSorteado = amigosArray[Math.floor(Math.random() * amigosArray.length)];

    // Exibe o resultado
    resultadoElement.innerHTML = `<p>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></p>`;
}

// Capitaliza a primeira letra de uma string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Evento para capitalizar a entrada e adicionar amigo com Enter
inputAmigo.addEventListener("input", () => {
    inputAmigo.value = capitalizeFirstLetter(inputAmigo.value);
});
inputAmigo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") adicionarParticipante();
});

// Adicionar evento ao botão de sorteio
document.querySelector(".button-post-user").addEventListener("click", sortearAmigo);

// Função para resetar a lista e o resultado
function resetarSorteio() {
  listaDeAmigos.clear(); // Limpa o Set
  listaAmigosElement.innerHTML = ""; // Limpa a exibição da lista
  resultadoElement.innerHTML = ""; // Limpa o resultado do sorteio
}

// Adiciona evento ao botão de reset
document.querySelector(".button-reset").addEventListener("click", resetarSorteio);