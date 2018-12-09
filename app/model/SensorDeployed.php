<?php

class SensorDeployed{
  public $sensorDeployedID;
  public $sensorId;
  public $purchaseId;
  public $serialNumber;
  public $deployedDate;
  public $pdtImg;

  public function __construct($row){
    $this->sensorDeployedID = isset($row['sensorDeployedID']) ? intval($row['sensorDeployedID']) : null;
    $this->sensorId = intval($row['sensorId']);
    $this->purchaseId = intval($row['purchaseId']);
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
    $this->pdtImg = $row['pdtImg'];
  }


public static function getSensorDeployedByID(int $purchaseId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM SensorsDeployed sd, ProductPurchased pp
    WHERE sd.purchaseId = ? and sd.purchaseId = pp.purchaseId';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
        [$purchaseId]
    );
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $sensorDeployedItem =  new SensorDeployed($row);
      array_push($arr, $sensorDeployedItem);
    }
    return $arr;
  }


}
