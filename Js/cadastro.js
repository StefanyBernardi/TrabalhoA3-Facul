// script.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    // Limpar mensagens de erro
 
    document.getElementById('emailError').textContent = '';
    document.getElementById('senhaError').textContent = '';
    document.getElementById('confirmSenhaError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    let hasError = false;

    // Validação simples

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.';
        hasError = true;
    }

    if (senha.length < 6) {
        document.getElementById('senhaError').textContent = 'Senha deve ter pelo menos 6 caracteres.';
        hasError = true;
    }
    if (senha !== confirmSenha) {
        document.getElementById('confirmSenhaError').textContent = 'Senhas não coincidem.';
        hasError = true;
    }

    if (!hasError) {

         // Armazenar dados no localStorage
   
         localStorage.setItem('email', email);
         localStorage.setItem('senha', senha);




        // Simular cadastro bem-sucedido (pode ser substituído por chamada a API real)
        // Aqui vamos apenas exibir uma mensagem de sucesso
        document.getElementById('successMessage').textContent = 'Cadastro realizado com sucesso!';
        // Limpar campos do formulário após o cadastro
        document.getElementById('cadastroForm').reset();

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
