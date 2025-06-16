const API_URL = 'http://localhost:3000/api';

// Cadastrar policial
document.getElementById('formCadastro').addEventListener('submit', async function(e) {
    e.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        rg: document.getElementById('rg').value,
        posto: document.getElementById('posto').value,
        unidade: document.getElementById('unidade').value,
        escala: document.getElementById('escala').value,
    };

    const res = await fetch(`${API_URL}/policiais`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dados)
    });

    const result = await res.json();
    alert(result.mensagem || result.erro);
    listarPoliciais();
});

// Listar todos
async function listarPoliciais() {
    const res = await fetch(`${API_URL}/todos`);
    const policiais = await res.json();

    const tabela = document.getElementById('tabelaPoliciais');
    tabela.innerHTML = '';

    policiais.forEach(p => {
        tabela.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nome}</td>
                <td>${p.rg}</td>
                <td>${p.posto}</td>
                <td>${p.unidade}</td>
                <td>${p.escala}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editarPolicial(${p.id})">Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="excluirPolicial(${p.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

// Excluir
async function excluirPolicial(id) {
    if (!confirm('Deseja excluir esse policial?')) return;
    await fetch(`${API_URL}/policiais/${id}`, { method: 'DELETE' });
    listarPoliciais();
}

// Editar (Exemplo simples - pode ser aprimorado com modal)
async function editarPolicial(id) { // Solicita novos dados para o policial
    const nome = prompt('Novo nome:'); // Solicita o novo nome do policial
    const rg = prompt('Novo RG:'); // Solicita o novo RG do policial
    const posto = prompt('Novo posto:'); // Solicita o novo posto do policial
    const unidade = prompt('Nova unidade:'); // Solicita a nova unidade do policial
    const escala = prompt('Nova escala:'); // Solicita a nova escala do policial

    await fetch(`${API_URL}/policiais/${id}`, { // Envia os novos dados para o servidor
        method: 'PUT', // Método HTTP para atualizar os dados
        headers: {'Content-Type': 'application/json'}, // Define o tipo de conteúdo como JSON
        body: JSON.stringify({ nome, rg, posto, unidade, escala }) // Converte os dados para JSON
    });

    listarPoliciais(); 
}
