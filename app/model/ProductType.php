<?php

class ProductType{
  public $productId;
  public $productType;
  public $productImg;
  public $productTypeDesc;
  public $productTagLine;

  public function __construct($row){
    $this->productId = isset($row['productId']) ? intval($row['productId']) : null;
    $this->productType = $row['productType'];
    $this->productImg = $row['productImg'];
    $this->productTypeDesc = $row['productTypeDesc'];
    $this->productTagLine = $row['ProductTagLine'];
  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM ProductType';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theProductType =  new ProductType($row);
      array_push($arr, $theProductType);
    }
    return $arr;
  }
}
