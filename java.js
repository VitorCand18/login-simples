function verificarCampos() {
    let username = document.getElementById('username').value;  // Obtém o valor do campo de texto
    let email = document.getElementById('useremail').value;

    if (username === 'vitorcand') {
        alert('Esse login não esta disponível.');
    } else {
        alert('Login disponível!');
    }

    // Verifica se o e-mail contém "@" e ".com.br"
    if (email.includes("@") && email.includes(".com.br")) {
        alert("E-mail válido!");
    } else {
         alert("E-mail inválido. Certifique-se de incluir '@' e '.com.br'.");
     }
}