function verificarCampos() {
    let username = document.getElementById('username').value;  // Obtém o valor do campo de texto
    let email = document.getElementById('useremail').value;

    if (username === 'vitorcand') {
        alert('Esse login não esta disponível.');
    } else {
        alert('Login indisponível!');
    }

    // Verifica se o e-mail contém "@" e ".com.br"
    if (email.includes("@") && email.includes(".com.br")) {
        alert("E-mail disponível!");
    } else {
         alert("E-mail indisponível. Certifique-se de incluir '@' e '.com.br'.");
     }
}