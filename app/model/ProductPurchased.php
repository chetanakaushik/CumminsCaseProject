<?php

class ProductPurchased{
  public $purchaseId;
  public $clientId;
  public $productId;
  public $productSeries;
  public $power;
  public $torque;
  public $certification;
  public $pdtImg;


  public function __construct($row){
    $this->purchaseId = isset($row['purchaseId']) ? intval($row['purchaseId']) : null;
    $this->clientId = $row['clientId'];
    $this->productId = $row['productId'];
    $this->productSeries = $row['productSeries'];
    $this->power = $row['power'];
    $this->torque = $row['torque'];
    $this->certification = $row['certification'];
    $this->pdtImg = $row['pdtImg'];

  }

  public static function fetchById(int $clientId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM ProductPurchased where clientId = ?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
        [$clientId]
    );
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $pdtPurItem =  new ProductPurchased($row);
      array_push($arr, $pdtPurItem);
    }
    return $arr;

  }
}
