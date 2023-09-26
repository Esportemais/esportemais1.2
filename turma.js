

// FUNÇÃO PARA ABRIR MODAIS //

// Selecionar os botões de abrir os modais e os modais
const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const openModalBtn3 = document.getElementById("openModalBtn3");

const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");


// Selecionar os botões de fechar os modais
const closeModalBtn1 = document.getElementById("closeModalBtn1");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const closeModalBtn3 = document.getElementById("closeModalBtn3");


// Adicionar eventos de clique para abrir os modais
openModalBtn1.addEventListener("click", function() {
    modal1.style.display = "block";
});

openModalBtn2.addEventListener("click", function() {
    modal2.style.display = "block";
});

openModalBtn3.addEventListener("click", function() {
    modal3.style.display = "block";
})

// Adicionar eventos de clique para fechar os modais
closeModalBtn1.addEventListener("click", function() {
    modal1.style.display = "none";
});

closeModalBtn2.addEventListener("click", function() {
    modal2.style.display = "none";
});

closeModalBtn3.addEventListener("click", function() {
    modal3.style.display = "none";
});


// Fechar os modais se o usuário clicar fora deles
window.addEventListener("click", function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
})

// Seleção de horário turma

 // Função para preencher o select com horários
 function popularHorarios() {
    const select = document.getElementById('horario');
    select.innerHTML = '<option value="">Selecione um horário</option>'; // Limpa o select

    for (let hora = 7; hora <= 21; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 60) {
        const horario = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        select.appendChild(option);
      }
    }
  }

  // Chama a função para preencher o select quando a página carregar
  window.addEventListener('load', popularHorarios);

/* LIMITAR CARACTERES NUMBER Nº TOTAL DE ALUNOS */

document.getElementById("miCampoDeTexto").addEventListener("input", function() {
    // Obtener el valor actual del campo de entrada
    var valor = this.value;

    // Eliminar cualquier caracter que no sea un número
    valor = valor.replace(/\D/g, '');

    // Limitar el valor a dos caracteres
    if (valor.length > 2) {
      valor = valor.slice(0, 2);
    }

    // Actualizar el valor del campo de entrada
    this.value = valor;
  });


  // SELEÇÃO DE DIAS DA SEMANA DE AULAS // 

   // Função para selecionar ou deselecionar um dia
   function selecionarDia(elemento) {
    // Alterna a classe 'selecionado' no dia clicado
    elemento.classList.toggle('selecionado');
}