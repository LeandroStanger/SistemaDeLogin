function configuracoes() {
    // Verificar se existe uma conta cadastrada
    const storedSenha = localStorage.getItem('senha');
    
    if(!storedSenha) {
        alert('Nenhuma conta cadastrada!');
        return;
    }

    // Solicitar confirmação da senha
    const senhaAtual = prompt('Digite sua senha para confirmar a exclusão da conta:');
    
    // Verificar se a senha está correta
    if(senhaAtual === storedSenha) {
        // Remover todos os dados do localStorage
        localStorage.removeItem('nome');
        localStorage.removeItem('idade');
        localStorage.removeItem('email');
        localStorage.removeItem('senha');
        
        alert('Conta apagada com sucesso!');
        window.location.href = "login.html";
    } else {
        alert('Senha incorreta! A conta não foi apagada.');
    }
}