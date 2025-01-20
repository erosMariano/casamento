const buttonsPresents = document.querySelectorAll(".button_present")
const product = document.querySelectorAll(".cont-hover")
const divForm = document.querySelector("#rsvp")
buttonsPresents.forEach((el) => {

  el.addEventListener("click", (link, index) => {
    link.preventDefault()
    formMessage(el.getAttribute("data-name"))
    activeForm(el.getAttribute("data-name"))
  })
})


function activeForm(nome_item){
  divForm.classList.add("active")

  document.querySelector(".ripple-icon").addEventListener("click", () => {
    divForm.classList.remove("active")
  })
  
                        
}
function formMessage(nome_present){
  document.querySelector('.contact__form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Seleciona os campos do formulário
    const nameField = document.querySelector('input[type="text"]');
    const deliverySelect = document.querySelector('.form-select');
    const messageField = document.querySelector('#message');
  
    // Obtém os valores dos campos
    const name = nameField.value.trim();
    const deliveryOption = deliverySelect.value;
    const userMessage = messageField.value.trim();
  
    // Verifica se os campos obrigatórios estão preenchidos
    if (!name) {
      alert('Por favor, preencha o campo de nome.');
      return;
    }
  
    if (!deliveryOption || deliveryOption === 'Deseja enviar, entregar ou participar do presente') {
      alert('Por favor, selecione uma opção de entrega.');
      return;
    }
  
    // Monta a mensagem para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${name}. 
  Desejo ${deliveryOption.toLowerCase()} o presente ${nome_present}. 
  Mensagem adicional: ${userMessage ? userMessage : 'Nenhuma mensagem adicional.'}`;
  
    // Define o número de WhatsApp (adicione o número correto)
    const whatsappNumber = '5500000000000'; // Altere para o número desejado, sem espaços e com código do país
  
    // Cria o link do WhatsApp e redireciona o usuário
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  });
  
}