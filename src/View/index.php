<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COVID-19 Stats</title>
    <link rel="stylesheet" href="../../public/assets/css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<header>
    <div class="container top">
        <nav>
            <div class="logo">
                <span>Estatísticas COVID-19</span>
            </div>
            <ul>
                <li><a href="./index.php">Estatísticas</a></li>
                <li><a href="./compare.php">Compare</a></li>
            </ul>
        </nav>
    </div>
</header>
<body>
    <h1>Estatísticas COVID-19</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
            <div class="main">
                    <label for="country">Selecione o País:</label>
                    <select class="form-select" id="country">
                        <option value="Brazil">Brasil</option>
                        <option value="Canada">Canadá</option>
                        <option value="Australia">Austrália</option>
                    </select>
                    <button class="btn btn-primary" onclick="getCountryStats()">Gerar Status</button>
                </div>
            </div>
            <div class="pais">
                <h1 id="h1countryNameSelected">País:</h1>
                <h2 id="countryNameSelected"></h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h2 id="h2ConfirmedCases">Casos Confirmados:</h2>
                <h1 id="confirmedCases"></h1>
                <h2 id="h2ConfirmedDeaths">Mortes Confirmadas:</h2>
                <h1 id="confirmedDeaths"></h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto"> <!-- Adjusted column width -->
               
                <div id="stats">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Província/Estado</th>
                                <th>País</th>
                                <th>Total de Casos Confirmados</th>
                                <th>Total de Mortes</th>
                            </tr>
                        </thead>
                        <tbody id="statsBody"></tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul id="pagination" class="pagination"></ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <p id="lastAccessInfo">Último Acesso: N/A</p>
    </footer>
    <script src="../../public/assets/js/index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
