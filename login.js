function login() {
  let emailInput = document.getElementById("loginEmail");
  let senhaInput = document.getElementById("loginSenha");

  if (!emailInput.checkValidity() || senhaInput.value.trim() === "") {
    alert(
      "Digite um e-mail válido (com '@' e extensão como '.com', '.br', '.org', etc.) e preencha todos os campos."
    );
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
    alert(
      "Digite um e-mail válido (com '@' e extensão como '.com', '.br', '.org', etc.) e preencha todos os campos."
    );
    return;
  }
  
  document.getElementById("registrar").addEventListener("submit", function (e) {
    e.preventDefault(); // Bloqueia o recarregamento da página
    //Envia os dados do formulário para o servidor
    fetch(this.action, {
      method: this.method, // Recebe o método do formulário (Post / get)
      body: new FormData(this), // Cria um objeto com todos os campos preenchidos
      headers: {
        Accept: "application/json", // Converte em formato JSON
      },
    })
      // Usuário é redirecionado
      .then((response) => {
        window.location.href = "login.html";
      })
      // Caso ocorra erro:
      .catch((error) => {
        console.error("Erro:", error);
      });
  });

  document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault(); // Bloqueia o recarregamento da página
    //Envia os dados do formulário para o servidor
    fetch(this.action, {
      method: this.method, // Recebe o método do formulário (Post / get)
      body: new FormData(this), // Cria um objeto com todos os campos preenchidos
      headers: {
        Accept: "application/json", // Converte em formato JSON
      },
    })
      // Usuário é redirecionado
      .then((response) => {
        window.location.href = "home.html";
      })
      // Caso ocorra erro:
      .catch((error) => {
        console.error("Erro:", error);
      });
  });

  /* localStorage.setItem("nome", nomeInput.value.trim());
    localStorage.setItem("idade", idadeInput.value.trim());
    localStorage.setItem("email", emailInput.value.trim());
    localStorage.setItem("senha", senhaInput.value.trim()); */

  alert("Usuário registrado com sucesso!");
}
