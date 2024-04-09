<?php
// Configurações do banco de dados
$db_host = 'localhost'; // Host do banco de dados
$db_user = 'root'; // Usuário do banco de dados
$db_pass = ''; // Senha do banco de dados
$db_name = 'acessos_api'; // Nome do banco de dados

date_default_timezone_set('America/Sao_Paulo');

// Conexão com o banco de dados
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Função para inserir um registro de acesso
function logApiAccess($country) {
    global $conn;
    
    $country = $conn->real_escape_string($country);
    $access_time = date('Y-m-d H:i:s'); // Obtém a data e hora atual
    
    $sql = "INSERT INTO acessos_api (country, access_time) VALUES ('$country', '$access_time')";
    
    if ($conn->query($sql) === TRUE) {
        // Não é necessário imprimir nada aqui
    } else {
        echo "Erro ao inserir registro de acesso: " . $conn->error;
    }
}

?>
