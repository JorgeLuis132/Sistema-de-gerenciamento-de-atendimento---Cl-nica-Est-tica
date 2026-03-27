function recuperarSenha() {
    const emailDigitado = document.getElementById('emailRecuperacao').value;
    const mensagemDiv = document.getElementById('mensagemRecuperacao');
    
    if (!emailDigitado) {
        mensagemDiv.textContent = 'Por favor, digite um e-mail válido.';
        mensagemDiv.className = 'mensagem-recuperacao erro';
        mensagemDiv.style.display = 'block';
        return;
    }

    const emailMestre = "admin@clinica.com";

    if (emailDigitado === emailMestre) {
        mensagemDiv.innerHTML = '<strong>Sucesso!</strong><br>Um link de recuperação foi enviado para seu e-mail.<br><br><strong>Senha temporária:</strong> admin';
        mensagemDiv.className = 'mensagem-recuperacao sucesso';
        mensagemDiv.style.display = 'block';
        
        // Limpa o campo
        document.getElementById('emailRecuperacao').value = '';
        
        // Redireciona para o login após 3 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    } else {
        mensagemDiv.innerHTML = '<strong>E-mail não encontrado</strong><br>Se este e-mail estiver cadastrado, você receberá uma mensagem de recuperação em breve.';
        mensagemDiv.className = 'mensagem-recuperacao info';
        mensagemDiv.style.display = 'block';
    }
}

// Permite enviar o formulário com Enter
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formRecuperacao');
    if (form) {
        form.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                recuperarSenha();
            }
        });
    }
});
