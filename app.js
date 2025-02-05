let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo após adicionar
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

// Atualiza a lista de amigos exibida na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let sorteio = [...amigos]; // Cópia da lista original
    let resultado = [];
    let tentativas = 0; // Para evitar loops infinitos

    do {
        let embaralhado = [...sorteio].sort(() => Math.random() - 0.5);
        let valido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === embaralhado[i]) {
                valido = false;
                break;
            }
        }

        if (valido) {
            for (let i = 0; i < amigos.length; i++) {
                resultado.push(`${amigos[i]} → ${embaralhado[i]}`);
            }
            break;
        }

        tentativas++;
    } while (tentativas < 100); // Tenta evitar que alguém tire a si mesmo

    if (resultado.length > 0) {
        exibirResultado(resultado);
    } else {
        alert("Não foi possível gerar um sorteio válido. Tente novamente.");
    }
}

// Exibe o resultado do sorteio na tela
function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa a lista antes de atualizar

    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}
