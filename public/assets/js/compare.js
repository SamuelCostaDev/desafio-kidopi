// Função para preencher os selects com a lista de países
function fillCountrySelects() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../config/app.php?country=listar_paises', true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var selects = document.querySelectorAll('.form-select');

            // Itera sobre os selects e adiciona as opções
            selects.forEach(function(select) {
                data.forEach(function(country) {
                    var option = document.createElement('option');
                    option.value = country;
                    option.textContent = country;
                    select.appendChild(option);
                });
            });
        } else {
            console.error('Falha na solicitação. Status: ' + xhr.status);
        }
    };

    xhr.send();
}

// Chamando a função fillCountrySelects() para preencher os selects assim que a página carregar
window.onload = fillCountrySelects;


function compareCountryStats() {
    var country1 = document.getElementById('country1').value;
    var country2 = document.getElementById('country2').value;

    if (country1 === "" || country2 === "") {
        alert("Por favor, selecione dois países para comparar.");
        return;
    }

    var xhr1 = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();

    xhr1.open('GET', '../../config/app.php?country=' + country1, true);
    xhr2.open('GET', '../../config/app.php?country=' + country2, true);

    xhr1.onload = function() {
        if (xhr1.status == 200) {
            var data1 = JSON.parse(xhr1.responseText);
            xhr2.onload = function() {
                if (xhr2.status == 200) {
                    var data2 = JSON.parse(xhr2.responseText);
                    displayComparisonStats(data1, data2);
                } else {
                    console.error('Falha na solicitação para o segundo país. Status: ' + xhr2.status);
                }
            };
            xhr2.send();
        } else {
            console.error('Falha na solicitação para o primeiro país. Status: ' + xhr1.status);
        }
    };

    xhr1.send();
}

function displayComparisonStats(data1, data2) {
    var statsBody = document.getElementById('statsBody');
    statsBody.innerHTML = '';

    var country1Name = data1.length > 0 ? data1[0].Pais : '';
    var country2Name = data2.length > 0 ? data2[0].Pais : '';

    var country1Deaths = data1.reduce((total, entry) => total + entry.Mortos, 0);
    var country2Deaths = data2.reduce((total, entry) => total + entry.Mortos, 0);

    var country1Confirmed = data1.reduce((total, entry) => total + entry.Confirmados, 0);
    var country2Confirmed = data2.reduce((total, entry) => total + entry.Confirmados, 0);

    // Calcula a taxa de mortalidade para cada país
    var country1MortalityRate = country1Confirmed > 0 ? (country1Deaths / country1Confirmed * 100).toFixed(2) : 0;
    var country2MortalityRate = country2Confirmed > 0 ? (country2Deaths / country2Confirmed * 100).toFixed(2) : 0;

    // Calcula a diferença na taxa de mortalidade
    var mortalityRateDifference = (country1MortalityRate - country2MortalityRate).toFixed(2);

    var country1Row = createRow(country1Name, formatPercentage(country1MortalityRate), country1Deaths);
    var country2Row = createRow(country2Name, formatPercentage(country2MortalityRate), country2Deaths);

    statsBody.appendChild(country1Row);
    statsBody.appendChild(country2Row);

    var differenceRow = document.createElement('tr');
    differenceRow.innerHTML = `
        <td><strong>Diferença na taxa de mortalidade:</strong></td>
        <td colspan="2">${formatPercentage(mortalityRateDifference)}</td>
    `;
    statsBody.appendChild(differenceRow);
}

// Criar linha na tabela
function createRow(country, mortalityRate, totalDeaths) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${country}</td>
        <td>${mortalityRate}</td>
        <td>${totalDeaths.toLocaleString('pt-BR')}</td>
    `;
    return row;
}

// Formatar em porcentagem
function formatPercentage(value) {
    return parseFloat(value).toFixed(2) + '%';
}
