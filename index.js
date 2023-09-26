function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }

  // OCULTAR VALOR DA RECEITA //

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const conteudo = document.getElementById("conteudo");
  
    toggleButton.addEventListener("click", function() {
      conteudo.classList.toggle("hidden");
    });
  });
  


// Dados de exemplo - substitua com seus próprios dados
var idades = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var contagemIdades = [10, 15, 25, 30, 40, 35, 50, 60, 70, 80, 90, 75, 60, 45, 30];

var ctx = document.getElementById('idadeChart').getContext('2d');
var idadeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: idades,
    datasets: [{
      label: 'Distribuição de Idades',
      data: contagemIdades,
      backgroundColor: [
                      '#0e2f73',
                          '#0b1c40',
                      '#2573d9',
                      '#4192d9',
                      '#000000',
                      '#b80101',
                      '#14701c', ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

   // Dados mensais do banco
   var categorias = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
   var valores = [1000, 1500, 4800, 4200, 1500, 5000, 1200, 3500, 800, 1200, 1500, 800];

   // Adiciona "R$" aos valores
   var valoresFormatados = valores.map(function(valor) {
       return 'R$ ' + valor.toFixed(2); // Formata o valor com duas casas decimais
   });

   // Obtenha o contexto do elemento canvas
   var ctx = document.getElementById('grafico1').getContext('2d');

   // gráfico de barras
   var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: categorias,
           datasets: [{
               label: 'Receita Mensal',
               data: valores,
               backgroundColor: '#0e2f73',
               borderColor: 'rgba(75, 192, 192, 1)',
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true,
                   ticks: {
                       callback: function(value, index, values) {
                           return 'R$ ' + value.toFixed(2); // Formata os rótulos do eixo Y
                       }
                   }
               }
           }
       }
   });