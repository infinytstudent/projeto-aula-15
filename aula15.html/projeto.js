const listaContatos = document.getElementById('lista-contatos');
let contatos = [];

function adicionarContato() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  if (nome && telefone) {
    const novoContato = { nome, telefone };
    contatos.push(novoContato);
    renderizarLista();
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

function renderizarLista() {
  listaContatos.innerHTML = '';
  contatos.forEach(contato => {
    const li = document.createElement('li');
    li.textContent = `${contato.nome} - ${contato.telefone}`;
    // Adicione botões de edição e exclusão aqui
    listaContatos.appendChild(li);
  });
}
