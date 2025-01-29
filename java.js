function verificarLogin() {
    let username = document.getElementById('username').value;  // Obtém o valor do campo de texto

    if (username === 'vitor.candido') {
        alert('Esse login não esta disponível.');
    } else {
        alert('Login válido!');
    }
}