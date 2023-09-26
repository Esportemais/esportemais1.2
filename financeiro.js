// FUNÇÃO PARA ABRIR MODAIS //

// Selecionar os botões de abrir os modais e os modais
const openModalBtn1 = document.getElementById("openModalBtn1");
const modal1 = document.getElementById("myModal1");

// Selecionar os botões de fechar os modais
const closeModalBtn1 = document.getElementById("closeModalBtn1");

// Adicionar eventos de clique para abrir os modais
openModalBtn1.addEventListener("click", function() {
    modal1.style.display = "block";
});

// Adicionar eventos de clique para fechar os modais
closeModalBtn1.addEventListener("click", function() {
    modal1.style.display = "none";
});

// Fechar os modais se o usuário clicar fora deles
window.addEventListener("click", function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }})