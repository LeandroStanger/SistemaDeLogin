function login() {
    let emailInput = document.getElementById("loginEmail");
    let senhaInput = document.getElementById("loginSenha");

    if (!emailInput.checkValidity() || senhaInput.value.trim() === "") {
        alert("Digite um e-mail válido (com '@' e extensão como '.com', '.br', '.org', etc.) e preencha todos os campos.");
        return;
    }
    
    const storedEmail = localStorage.getItem("email");
    const storedSenha = localStorage.getItem("senha");
    const nomeUsuario = localStorage.getItem("nome");
    const idadeUsuario = localStorage.getItem("idade");

    if (emailInput.value === storedEmail && senhaInput.value === storedSenha) {
        alert(`Bem-vindo, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`);
        window.location.href = "home.html";
    } else {
        alert("Credenciais inválidas!");
    }
}

function registrar() {
    let nomeInput = document.getElementById("nome");
    let idadeInput = document.getElementById("idade");
    let emailInput = document.getElementById("registrarEmail");
    let senhaInput = document.getElementById("registrarSenha");

    if (
        nomeInput.value.trim() === "" ||
        idadeInput.value.trim() === "" ||
        !emailInput.checkValidity() ||
        senhaInput.value.trim() === ""
    ) {
        alert("Digite um e-mail válido (com '@' e extensão como '.com', '.br', '.org', etc.) e preencha todos os campos.");
        return;
    }

    localStorage.setItem("nome", nomeInput.value.trim());
    localStorage.setItem("idade", idadeInput.value.trim());
    localStorage.setItem("email", emailInput.value.trim());
    localStorage.setItem("senha", senhaInput.value.trim());
    
    alert("Usuário registrado com sucesso!");
}