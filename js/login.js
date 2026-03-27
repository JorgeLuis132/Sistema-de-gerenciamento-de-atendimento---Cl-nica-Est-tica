function realizarLogin() {
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('password').value;

    const emailMestre = "admin@clinica.com";
    const senhaMestre = "admin";

    if (emailDigitado === emailMestre && senhaDigitada === senhaMestre) {
        localStorage.setItem('usuarioLogado', 'true'); 
        
        alert("Login realizado!");
        window.location.href = "pages/agendamentos.html";
    } else {
        alert("Dados incorretos!");
    }
}
