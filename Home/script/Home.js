// Alterna a visibilidade do menu drop-down ao clicar
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });
   // Recupera a mensagem do localStorage
   const message = localStorage.getItem('loginSuccess');
        
   if (message) {
       // Exibe a mensagem se ela existir
       const successMessage = document.getElementById('successMessage');
       successMessage.textContent = message;
       successMessage.style.display = 'block';

       // Remove a mensagem para não reaparecer após um novo login
       localStorage.removeItem('loginSuccess');

       // (Opcional) Remover a mensagem automaticamente após 3 segundos
       setTimeout(() => {
           successMessage.style.display = 'none';
       }, 3000);
   }