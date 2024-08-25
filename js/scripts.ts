const loginForm = document.getElementById('login-form') as HTMLFormElement;
const registerForm = document.getElementById('register-form') as HTMLFormElement;

loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    // Simule a validação e submissão do login aqui
    alert('Login realizado com sucesso!');
});

registerForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    // Simule a validação e submissão do cadastro aqui
    alert('Cadastro realizado com sucesso!');
});
