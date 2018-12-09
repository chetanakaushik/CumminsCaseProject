<?php

class Client{
  public $clientId;
  public $clientName;
  public $clientDesc;
  public $clientSector;
  public $clientIndustry;
  public $productType;
  public $clientLogo;


  public function __construct($row){
    $this->clientId = isset($row['clientId']) ? intval($row['clientId']) : null;
    $this->clientName = $row['clientName'];
    $this->clientDesc = $row['clientDesc'];
    $this->clientSector = $row['clientSector'];
    $this->clientIndustry = $row['clientIndustry'];
    $this->clientLogo = $row['clientLogo'];

  }

  public static function fetchById(int $productId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT c.clientId, c.clientName, c.clientDesc, c.clientSector, c.clientIndustry, c.clientLogo
    FROM Client c, ClientProduct cp where c.clientId = cp.clientId and cp.productId = ?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
        [$productId]
    );
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $clientItem =  new Client($row);
      array_push($arr, $clientItem);
    }
    return $arr;

  }
}
