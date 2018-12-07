<?php
 require '../../app/common.php';

$productType = ProductType::fetchAll();

$json = json_encode($productType, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
