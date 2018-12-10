<?php
 require '../../app/common.php';

$sensorDeployedId = intval($_GET['sensorDeployedId'] ?? 0);
if ($sensorDeployedId < 1) {
  throw new Exception('Invalid Sensor Deployed ID');
}
// 1. Go to the database and get all work associated with the $taskId
$Arr = SensorTimeSeries::getSensorByID($sensorDeployedId);
// 2. Convert to JSON
$json = json_encode($Arr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
