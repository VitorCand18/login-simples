function verificarLogin() {
    let username = document.getElementById('username').value;  // Obtém o valor do campo de texto

    if (username === 'vitorcand') {
        alert('Esse login não esta disponível.');
    } else {
        alert('Login válido!');
    }
}
