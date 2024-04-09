<?php
require_once('config.php');

// Função para chamar a API-Covid-19 e obter dados do país
function getCountryData($country) {
    // URL da API
    $api_url = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=$country";
    
    // Obtendo os dados da API
    $response = file_get_contents($api_url);

    // Decodificando os dados da resposta JSON
    $data = json_decode($response, true);

    return $data;
}

// Função para obter a lista de países da API
function getCountryList() {
    // URL da API
    $api_url_paises = "https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1";
    
    // Obtendo os dados da API
    $response = file_get_contents($api_url_paises);

    // Decodificando os dados da resposta JSON
    $data = json_decode($response, true);

    return $data;
}

// Verifica se foi recebido um país via GET
if (isset($_GET['country'])) {
    $country = $_GET['country'];

    // Se o país for "listar_paises", retorna a lista de países
    if ($country === "listar_paises") {
        $countryList = getCountryList();

        // Retorna os dados em formato JSON
        header('Content-Type: application/json');
        echo json_encode($countryList);
        exit; // Termina a execução do script para evitar a exibição de HTML indesejado
    } else {
        // Chama a função para obter dados do país
        $countryData = getCountryData($country);

        // Registra o acesso ao banco de dados
        logApiAccess($country);

        // Retorna os dados em formato JSON
        header('Content-Type: application/json');
        echo json_encode($countryData);
        exit; // Termina a execução do script para evitar a exibição de HTML indesejado
    }
}
?>
