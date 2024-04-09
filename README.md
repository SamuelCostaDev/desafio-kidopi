# COVID-19 Stats

Este projeto visa fornecer estatísticas atualizadas sobre a COVID-19 para diferentes países, permitindo ao usuário comparar dados entre eles. As estatísticas incluem o número de casos confirmados e mortes confirmadas.

## Requisitos

* PHP
* XAMPP (ou qualquer outro servidor local)
* Banco de dados (MySQL)


## Tecnologias Utilizadas

* HTML
* CSS (Bootstrap 5)
* JavaScript
* PHP

## Como Usar

Para utilizar o projeto, siga os passos abaixo:

* Certifique-se de ter um ambiente PHP configurado.
* Baixe o projeto do GitHub.
* Extraia o projeto na pasta xampp/htdocs


## Configurar Banco de dados
1. Verifique se o servidor do banco de dados está sendo executado, caso esteja prossiga:
2. Após extrair, você irá encontrar na raiz do projeto o banco de dados. Você poderá importar ele no seu servidor MySQL ou pode rodar ele como código:
```sql
CREATE DATABASE IF NOT EXISTS `acessos_api`;

USE `acessos_api`;

CREATE TABLE `acessos_api` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(255) NOT NULL,
  `access_time` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```
3. Videos explicativos:

Importando:

https://github.com/SamuelCostaDev/desafio-kidopi/assets/118944536/75c96517-062a-466a-8b16-ea90ddb949dc

Via script:

https://github.com/SamuelCostaDev/desafio-kidopi/assets/118944536/46d8f953-2703-4c7a-b0cb-1411a162f6d1


## FEITO TUDO ISSO.. HORA DE TESTAR!!

1. Start seu servidor apache
2. acesse http://localhost/desafio-kidopi e seja feliz para testar.
