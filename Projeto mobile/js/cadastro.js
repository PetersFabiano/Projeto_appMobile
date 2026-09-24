const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pega os valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const celular = document.getElementById("celular").value.trim();


    // Validação
    if (nome === "") {
        alert("Digite seu nome completo.");
        return;
    }

    if (celular === "") {
        alert("Digite seu número de celular.");
        return;
    }


    // Objeto do usuário
    const usuario = {
        nome: nome,
        email: email,
        celular: celular
    };


    // Salvar no navegador
    localStorage.setItem(
        "usuarioCuidar",
        JSON.stringify(usuario)
    );


    // Mensagem
    alert("Conta criada com sucesso!");


    // Redirecionamento
    // Troquem pelo nome da página de vocês
    //window.location.href = "login.html";

});