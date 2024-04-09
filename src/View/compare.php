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
                <li><a href="../../index.php">Estatísticas</a></li>
                <li><a href="./compare.php">Compare</a></li>
            </ul>
        </nav>
    </div>
</header>
<body>
    <h1>Compare as estatísticas COVID-19</h1>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-3"> <!-- Dividindo em duas colunas -->
                <div class="mb-3">
                    <label for="country1">Selecione o País:</label>
                    <select class="form-select" id="country1">
                        <option value="">Selecione:</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="country2">Selecione o País:</label>
                    <select class="form-select" id="country2">
                        <option value="">Selecione:</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <button class="btn btn-primary" onclick="compareCountryStats()">Compare</button>
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
                                <th>País</th>
                                <th>Taxa de Mortalidade</th>
                                <th>Total de Mortes</th>
                            </tr>
                        </thead>
                        <tbody id="statsBody"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id="result"></div>
    <script src="../../public/assets/js/compare.js"></script>
</body>
</html>
