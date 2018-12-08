
<?php
 require '../../app/common.php';

$productId = intval($_GET['productId'] ?? 0);
if ($productId < 1) {
  throw new Exception('Invalid Product ID');
}

$product = intval($_GET['product'] ?? 0);
if ($product < 1) {
  throw new Exception('Invalid Product ID');
}
// 1. Go to the database and get all work associated with the $taskId
$arr = Client::fetchById($productId, $product);
// 2. Convert to JSON
$json = json_encode($arr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
