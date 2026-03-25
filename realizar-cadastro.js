document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const novoAgendamento = {
        nome: document.getElementById('nomeCliente').value,
        telefone: document.getElementById('telCliente').value,
        servico: document.getElementById('servicoCliente').value,
        data: document.getElementById('dataCliente').value,
        hora: document.getElementById('horaCliente').value
    };

    let lista = JSON.parse(localStorage.getItem('meusAgendamentos')) || [];
    
    lista.push(novoAgendamento);
 
    localStorage.setItem('meusAgendamentos', JSON.stringify(lista));

    alert('Agendamento salvo com sucesso!');
    window.location.href = 'agendamentos.html'; 
});