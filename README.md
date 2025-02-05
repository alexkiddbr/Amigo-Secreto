🎉 Amigo Secreto

📌 Sobre o Projeto

Este é um projeto simples de sorteio de Amigo Secreto, desenvolvido para praticar lógica de programação com JavaScript. A interface foi construída com HTML e CSS, permitindo que os usuários adicionem nomes à lista e realizem um sorteio aleatório.

🚀 Funcionalidades

Adicionar nomes à lista

Impedir nomes duplicados

Sortear os amigos sem permitir que alguém tire a si mesmo

Exibir o resultado do sorteio na tela

🛠 Tecnologias Utilizadas

HTML → Estrutura da página

CSS → Estilização da interface

JavaScript → Lógica de programação para o sorteio

📂 Estrutura do Projeto

📁 amigo-secreto
│── 📄 index.html       # Estrutura da página
│── 📄 style.css        # Estilos da aplicação
│── 📄 app.js           # Código JavaScript
│── 📁 assets/          # Imagens e ícones

📖 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/amigo-secreto.git

Acesse a pasta do projeto:

cd amigo-secreto

Abra o arquivo index.html em seu navegador.

🔧 Correção do Sorteio

Caso o botão "Sortear Amigo" não esteja funcionando corretamente, verifique se o código JavaScript está atualizado e utilize a seguinte função corrigida para garantir que o sorteio ocorra corretamente:

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let sorteio = [...amigos]; // Cópia da lista
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceSorteado] === amigos[i] && sorteio.length > 1); // Evita sortear a si mesmo

        resultado.push(`${amigos[i]} -> ${sorteio[indiceSorteado]}`);
        sorteio.splice(indiceSorteado, 1); // Remove o sorteado da lista
    }

    exibirResultado(resultado);
}

Isso garantirá que todos os participantes tenham um par no sorteio.

🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias! Basta:

Fazer um fork do projeto

Criar uma branch para sua funcionalidade:

git checkout -b minha-nova-funcionalidade

Commitar suas alterações:

git commit -m "Adiciona nova funcionalidade X"

Enviar para o repositório:

git push origin minha-nova-funcionalidade

Abrir um Pull Request no GitHub

📜 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo.

# Amigo-Secreto
Aplicação de Teste Oracle One
