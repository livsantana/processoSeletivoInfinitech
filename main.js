document.addEventListener('DOMContentLoaded', () => {
    const agendamentoForm = document.getElementById('agendamento-form');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupAgendamento = document.getElementById('popup-agendamento');
    const closePopupButton = document.getElementById('fechar-popup');

    agendamentoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;

        console.log('Nome:', nome);
        console.log('Telefone:', telefone);
        console.log('Email:', email);

        popupOverlay.classList.remove('hidden');
        popupAgendamento.classList.remove('hidden');
    });

    closePopupButton.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
        popupAgendamento.classList.add('hidden');
    });
});
