<?php
 require '../../app/common.php';

$purchaseId = intval($_GET['purchaseId'] ?? 0);
if ($purchaseId < 1) {
  throw new Exception('Invalid Purchase ID');
}
// 1. Go to the database and get all work associated with the $taskId
$Arr = SensorDeployed::getSensorDeployedByID($purchaseId);
// 2. Convert to JSON
$json = json_encode($Arr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
