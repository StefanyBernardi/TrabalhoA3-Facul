

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginSenha = document.getElementById('loginSenha').value;

    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');

    if (loginEmail === storedEmail && loginSenha === storedSenha) {
        alert('Login bem-sucedido!');
        // Redirecionar para uma página de sucesso, como um dashboard
        document.getElementById('enderecoOverlay').style.display = 'none';
        document.getElementById('enderecoPopup').style.display = 'none';
    } else {
        document.getElementById('loginError').textContent = 'Email ou senha incorretos.';
    }
});

