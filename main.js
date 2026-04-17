document.addEventListener('DOMContentLoaded', () => {
    const agendamentoForm = document.getElementById('agendamento-form');

    agendamentoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;

        console.log('Nome:', nome);
        console.log('Telefone:', telefone);
        console.log('Email:', email);
    });
});
