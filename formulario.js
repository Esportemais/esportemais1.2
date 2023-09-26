

// FUNÇÃO PARA ABRIR MODAIS //

// Selecionar os botões de abrir os modais e os modais
const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const openModalBtn3 = document.getElementById("openModalBtn3");
const openModalBtn4 = document.getElementById("openModalBtn4");
const openModalBtn5 = document.getElementById("openModalBtn5");
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");

// Selecionar os botões de fechar os modais
const closeModalBtn1 = document.getElementById("closeModalBtn1");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const closeModalBtn3 = document.getElementById("closeModalBtn3");
const closeModalBtn4 = document.getElementById("closeModalBtn4");
const closeModalBtn5 = document.getElementById("closeModalBtn5");


// Adicionar eventos de clique para abrir os modais
openModalBtn1.addEventListener("click", function() {
    modal1.style.display = "block";
});

openModalBtn2.addEventListener("click", function() {
    modal2.style.display = "block";
});

openModalBtn3.addEventListener("click", function() {
    modal3.style.display = "block";
});
openModalBtn4.addEventListener("click", function() {
    modal4.style.display = "block";
});
openModalBtn5.addEventListener("click", function() {
    modal5.style.display = "block";
});

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
closeModalBtn4.addEventListener("click", function() {
    modal4.style.display = "none";
});
closeModalBtn5.addEventListener("click", function() {
    modal5.style.display = "none";
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
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
    if (event.target === modal5) {
        modal5.style.display = "none";
    }
});


// Camera para foto de perfil

const openCameraButton = document.getElementById('openCameraButton');
        const cameraFeed = document.getElementById('cameraFeed');
        const captureButton = document.getElementById('captureButton');
        const canvas = document.getElementById('canvas');
        const capturedImage = document.getElementById('capturedImage');
        const saveButton = document.getElementById('saveButton');
        const reopenCameraButton = document.getElementById('reopenCameraButton');
        let mediaStream = null;

        function resetCamera() {
            // Limpar a imagem capturada e ocultar botões
            capturedImage.style.display = 'none';
            saveButton.style.display = 'none';
            reopenCameraButton.style.display = 'none';

            // Exibir o botão "Abrir Câmera" e reativar a câmera
            openCameraButton.style.display = 'block';
            openCameraButton.disabled = false;
            captureButton.disabled = true;

            // Parar o feed da câmera
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => {
                    track.stop();
                });
                cameraFeed.srcObject = null;
                cameraFeed.style.display = 'none';
            }
        }

        openCameraButton.addEventListener('click', () => {
            // Solicitar acesso à câmera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    mediaStream = stream;
                    // Exibir o feed da câmera no elemento de vídeo
                    cameraFeed.srcObject = stream;
                    cameraFeed.style.display = 'block';
                    captureButton.disabled = false;
                    openCameraButton.style.display = 'none';
                })
                .catch((error) => {
                    console.error('Erro ao acessar a câmera: ', error);
                });
        });

        captureButton.addEventListener('click', () => {
            if (mediaStream) {
                // Capturar o quadro da câmera e desenhá-lo em um canvas
                const context = canvas.getContext('2d');
                canvas.width = cameraFeed.videoWidth;
                canvas.height = cameraFeed.videoHeight;
                context.drawImage(cameraFeed, 0, 0);

                // Converter o canvas em uma imagem
                const imageBlob = canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    // Exibir a imagem capturada
                    capturedImage.src = url;
                    capturedImage.style.display = 'block';

                    // Exibir o botão "Salvar Foto" e "Reabrir Câmera"
                    saveButton.style.display = 'block';
                    reopenCameraButton.style.display = 'block';

                    // Ocultar o feed da câmera
                    cameraFeed.style.display = 'none';
                }, 'image/png');
            }
        });

        saveButton.addEventListener('click', () => {
            // Aqui você pode implementar o código para salvar a imagem no servidor
            // Certifique-se de configurar corretamente o servidor e a lógica de salvamento.
        });

        reopenCameraButton.addEventListener('click', () => {
            resetCamera();
        });

        // Chame a função resetCamera() para configurar o estado inicial
        resetCamera();


        // Editor de Texto //
        function lorem(){
            document.getElementById('folha').innerHTML = 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis luctus scelerisque. Aliquam convallis blandit leo, id viverra sem egestas ut. Nullam vel tincidunt urna. Nam eu nulla convallis, malesuada magna in, condimentum lectus. Donec in consectetur dui, at ullamcorper dolor. Praesent a lorem hendrerit, posuere quam ut, bibendum diam. Praesent vitae nunc augue. Etiam suscipit nulla vitae massa tempus, eu convallis elit hendrerit. Cras eros ipsum, fermentum eget sagittis eget, sodales non sem. Cras gravida fringilla mauris, et aliquam nisi. Proin efficitur lacus ut sagittis commodo. Aenean et elit nulla. Curabitur nec iaculis mi. Mauris semper lectus id blandit pulvinar. Nullam congue laoreet neque non posuere. Duis sodales nisi sit amet lacinia aliquet. Proin suscipit sollicitudin purus at fringilla. Curabitur eu ipsum quis massa luctus ornare. Phasellus placerat ante ac sapien porttitor, nec porttitor metus facilisis. Nam porttitor non ligula ut tincidunt. Praesent commodo leo ante, et congue dolor rutrum sit amet. Ut ut auctor lectus. Fusce mollis mi ut nulla scelerisque venenatis."
        }
        
        function negrito(){
            var elemento = document.getElementById('folha');
        
            elemento.classList.toggle("negrito");
        }
        
        function italico(){
            var elemento = document.getElementById('folha');
        
            elemento.classList.toggle("italico");
        }
        
        function sublinhado(){
            var elemento = document.getElementById('folha');
        
            elemento.classList.toggle("sublinhado");
        }
        
        function selectFont(selectTag){
            var fonte = selectTag.options[selectTag.selectedIndex].text;
          document.getElementById("folha").style.fontFamily = fonte;
        }
        
        function selectFontSize(selectTag){
            var fonte = selectTag.options[selectTag.selectedIndex].text;
          document.getElementById("folha").style.fontSize = fonte;
        }
        
        function selectFontColor(){
            var cor = document.getElementById('font-color').value;
          document.getElementById("folha").style.color = cor;
        }
        
        // AVALIAÇÃO CARD FIFA //

          // Função para calcular a média total das habilidades
          function calculateAverage() {
            const frequency = parseInt(document.getElementById('frequency').textContent);
            const technique = parseInt(document.getElementById('technique').textContent);
            const endurance = parseInt(document.getElementById('endurance').textContent);
            const mental = parseInt(document.getElementById('mental').textContent);

            const total = (frequency + technique + endurance + mental) / 4;
            return total.toFixed(0); // Arredonda para o número inteiro mais próximo
        }
        // Função para atualizar uma habilidade específica
        function updateAttribute(attribute, value) {
            const attributeElement = document.getElementById(attribute);
            attributeElement.textContent = parseInt(value); // Converte para número inteiro

            // Atualize a classe CSS com base no valor
            const attributeClass = value < 40 ? 'low' : value > 70 ? 'high' : 'medium';
            attributeElement.className = `player-attribute ${attributeClass}`;

            // Atualize a média total
            const averageElement = document.getElementById('average');
            averageElement.textContent = calculateAverage();
            averageElement.className = `player-attribute ${attributeClass}`;
        }

        // Inicializa as habilidades com os valores iniciais
        updateAttribute('frequency', 50);
        updateAttribute('technique', 60);
        updateAttribute('endurance', 70);
        updateAttribute('mental', 55);


        // GRAFICO RADAR FIFACARDS //

        // Inicialize o gráfico com valores iniciais vazios
        const data = {
            labels: ['Ataque', 'Defesa', 'Drible', 'Foco', 'Mental', 'Passe'],
            datasets: [{
                label: 'Valores',
                backgroundColor: 'rgb(184, 1, 1)',
                borderColor: 'rgb(184, 1, 1)',
                pointBackgroundColor: 'rgb(184, 1, 1)',
                pointBorderColor: '#00000',
                pointHoverBackgroundColor: '##00000',
                pointHoverBorderColor: '#fff',
                data: [0, 0, 0]
            }]
        };

        const config = {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
        },
        elements: {
            line: {
                borderWidth: 1,  // Largura da linha
                borderColor: 'rgb(184, 1, 1)',  // Cor da linha
            },
            point: {
                radius: 5,  // Tamanho do ponto
                borderWidth: 2,  // Largura da borda do ponto
                backgroundColor: 'rgb(184, 1, 1)',  // Cor do ponto
                borderColor: 'rgb(184, 1, 1)',  // Cor da borda do ponto
            },
        },
        plugins: {
            legend: {
                display: false,  // Exibir legenda
                labels: {
                    font: {
                        size: 18,  // Tamanho da fonte da legenda
                    },
                },
            },
        },
    },
};


        // Renderize o gráfico
        const ctx = document.getElementById('myRadarChart').getContext('2d');
        const radarChart = new Chart(ctx, config);

        // Função para atualizar o gráfico com base nas checkboxes
        function updateRadarChart() {
            const ataqueFraco = document.getElementById('ataqueFraco');
            const ataqueMedio = document.getElementById('ataqueMedio');
            const ataqueForte = document.getElementById('ataqueForte');
            const defesaFraco = document.getElementById('defesaFraco');
            const defesaMedio = document.getElementById('defesaMedio');
            const defesaForte = document.getElementById('defesaForte');
            const dribleFraco = document.getElementById('dribleFraco');
            const dribleMedio = document.getElementById('dribleMedio');
            const dribleForte = document.getElementById('dribleForte');
            const focoFraco = document.getElementById('focoFraco');
            const focoMedio = document.getElementById('focoMedio');
            const focoForte = document.getElementById('focoForte');
            const mentalFraco = document.getElementById('mentalFraco');
            const mentalMedio = document.getElementById('mentalMedio');
            const mentalForte = document.getElementById('mentalForte');
            const passeFraco = document.getElementById('passeFraco');
            const passeMedio = document.getElementById('passeMedio');
            const passeForte = document.getElementById('passeForte');
            
            
            // Calcule os valores da categoria Ataque
            const ataqueValue = (ataqueFraco.checked ? Number(ataqueFraco.value) : 0) +
                               (ataqueMedio.checked ? Number(ataqueMedio.value) : 0) +
                               (ataqueForte.checked ? Number(ataqueForte.value) : 0);

            // Calcule os valores da categoria Defesa
            const defesaValue = (defesaFraco.checked ? Number(defesaFraco.value) : 0) +
                               (defesaMedio.checked ? Number(defesaMedio.value) : 0) +
                               (defesaForte.checked ? Number(defesaForte.value) : 0);

            // Calcule os valores da categoria Drible
            const dribleValue = (dribleFraco.checked ? Number(dribleFraco.value) : 0) +
                               (dribleMedio.checked ? Number(dribleMedio.value) : 0) +
                               (dribleForte.checked ? Number(dribleForte.value) : 0);
                  
            // Calcule os valores da categoria mental
            const mentalValue = (mentalFraco.checked ? Number(mentalFraco.value) : 0) +
                               (mentalMedio.checked ? Number(mentalMedio.value) : 0) +
                               (mentalForte.checked ? Number(mentalForte.value) : 0); 
                    
            // Calcule os valores da categoria Foco
            const focoValue = (focoFraco.checked ? Number(focoFraco.value) : 0) +
                               (focoMedio.checked ? Number(focoMedio.value) : 0) +
                               (focoForte.checked ? Number(focoForte.value) : 0);    
                               
            // Calcule os valores da categoria Foco
            const passeValue = (passeFraco.checked ? Number(passeFraco.value) : 0) +
                               (passeMedio.checked ? Number(passeMedio.value) : 0) +
                               (passeForte.checked ? Number(passeForte.value) : 0);                 

            // Atualize os valores do gráfico com base nas seleções
            radarChart.data.datasets[0].data = [ataqueValue, defesaValue, dribleValue, focoValue, mentalValue, passeValue];

            // Atualize o gráfico
            radarChart.update();
        }

        // Adicione eventos de alteração às checkboxes para atualizar o gráfico
        document.getElementById('ataqueFraco').addEventListener('change', updateRadarChart);
        document.getElementById('ataqueMedio').addEventListener('change', updateRadarChart);
        document.getElementById('ataqueForte').addEventListener('change', updateRadarChart);
        document.getElementById('defesaFraco').addEventListener('change', updateRadarChart);
        document.getElementById('defesaMedio').addEventListener('change', updateRadarChart);
        document.getElementById('defesaForte').addEventListener('change', updateRadarChart);
        document.getElementById('dribleFraco').addEventListener('change', updateRadarChart);
        document.getElementById('dribleMedio').addEventListener('change', updateRadarChart);
        document.getElementById('dribleForte').addEventListener('change', updateRadarChart);
        document.getElementById('focoFraco').addEventListener('change', updateRadarChart);
        document.getElementById('focoMedio').addEventListener('change', updateRadarChart);
        document.getElementById('focoForte').addEventListener('change', updateRadarChart);
        document.getElementById('mentalFraco').addEventListener('change', updateRadarChart);
        document.getElementById('mentalMedio').addEventListener('change', updateRadarChart);
        document.getElementById('mentalForte').addEventListener('change', updateRadarChart);
        document.getElementById('passeFraco').addEventListener('change', updateRadarChart);
        document.getElementById('passeMedio').addEventListener('change', updateRadarChart);
        document.getElementById('passeForte').addEventListener('change', updateRadarChart);

        // Chame a função inicialmente para criar o gráfico vazio
        updateRadarChart();