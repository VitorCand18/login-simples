function verificarLogin() {
    let username = document.getElementById('username').value;  // Obtém o valor do campo de texto

    if (username === 'vitorcand') {
        alert('Esse login não esta disponível.');
    } else {
        alert('Login válido!');
    }
}
function verificarEmail(){

    var email = document.getElementById('useremail').value;

    // Verifica se o e-mail contém "@" e ".com.br"
    if (email.includes("@") && email.includes(".com.br")) {
        alert("E-mail válido!");
    } else {
         alert("E-mail inválido. Certifique-se de incluir '@' e '.com.br'.");
     }
}
