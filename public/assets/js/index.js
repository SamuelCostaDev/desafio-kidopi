function getCountryStats() {
    var country = document.getElementById('country').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', './config/app.php?country=' + country, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            displayStats(data); // Movido para dentro de xhr.onload
        } else {
            console.error('Falha na solicitação. Status: ' + xhr.status);
        }
    };

    xhr.send();
}



function displayStats(data) {
    var statsBody = document.getElementById('statsBody');
    statsBody.innerHTML = '';

    var pageSize = 5;
    var currentPage = 0;
    var totalPages = Math.ceil(data.length / pageSize);

     // Obtém o nome do país selecionado
     var countryName = data.length > 0 ? data[0].Pais : ''; // Supondo que o nome do país está no primeiro objeto dos dados recebidos

     // Atualiza o texto do elemento countryNameSelected com o nome do país
     var countryNameSelected = document.getElementById('countryNameSelected');
     countryNameSelected.textContent = countryName;

     // Calcula o total de casos
     var totalCase = data.reduce((total, entry) => total + entry.Confirmados, 0);
     var confirmedCases = document.getElementById('confirmedCases');
     confirmedCases.textContent = `${totalCase.toLocaleString()}`;
 
     // Calcula o total de mortos
     var totalDeaths = data.reduce((total, entry) => total + entry.Mortos, 0);
     var confirmedDeaths = document.getElementById('confirmedDeaths');
     confirmedDeaths.textContent = `${totalDeaths.toLocaleString()}`;
 
     // Informações sobre o último acesso à API
     var lastAccessInfo = document.getElementById('lastAccessInfo');
     var currentDate = new Date().toLocaleString();
     lastAccessInfo.textContent = `Último acesso à API para o País: ${countryName}: ${currentDate}.`;

    function showPage(page) {
        statsBody.innerHTML = '';
        var start = page * pageSize;
        var end = start + pageSize;
        var pageData = data.slice(start, end);
        pageData.forEach(entry => {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.ProvinciaEstado}</td>
                <td>${entry.Pais}</td>
                <td>${entry.Confirmados.toLocaleString('pt-BR')}</td>
                <td>${entry.Mortos.toLocaleString('pt-BR')}</td>
            `;
            statsBody.appendChild(row);
        });
    }

    function goToPage(page) {
        currentPage = page;
        showPage(currentPage);
        updatePagination();
    }

    function updatePagination() {
        var pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        var prevButton = document.createElement('li');
        prevButton.classList.add('page-item');
        prevButton.innerHTML = `
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        `;
        prevButton.addEventListener('click', function () {
            if (currentPage > 0) {
                goToPage(currentPage - 1);
            }
        });
        pagination.appendChild(prevButton);

        for (var i = 0; i < totalPages; i++) {
            var pageButton = document.createElement('li');
            pageButton.classList.add('page-item');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.innerHTML = `
                <a class="page-link" href="#">${i + 1}</a>
            `;
            pageButton.addEventListener('click', (function (page) {
                return function () {
                    goToPage(page);
                };
            })(i));
            pagination.appendChild(pageButton);
        }

        var nextButton = document.createElement('li');
        nextButton.classList.add('page-item');
        nextButton.innerHTML = `
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        `;
        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages - 1) {
                goToPage(currentPage + 1);
            }
        });
        pagination.appendChild(nextButton);
    }
   
    

    // Mostra a primeira página inicialmente
    showPage(currentPage);
    updatePagination();
}



