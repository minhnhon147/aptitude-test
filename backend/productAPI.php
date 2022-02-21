<?php
include("./systemConfig.php");
class productAPI
{
  private $dbReference;
  var $dbConnect;
  var $result;

  /**
   *
   */
  function __construct()
  {
  }

  function __destruct()
  {
  }

  function getAllProductResource()
  {
    header("Access-Control-Allow-Origin:*");
    $this->dbReference = new systemConfig();
    $this->dbConnect = $this->dbReference->connectDB();
    if ($this->dbConnect == NULL) {
      $this->dbReference->sendResponse(503, "“error_message”:" . $this->dbReference->getStatusCodeMeeage(503) . "}");
    } else {

      $sql = "SELECT * FROM product";
      $this->result = $this->dbConnect->query($sql);
      if ($this->result->num_rows > 0) {
        // output data of each row
        $resultSet = array();
        while ($row = $this->result->fetch_assoc()) {
          $resultSet[] = $row;
        }
        // $this->dbReference->sendResponse(200, "{'products':" . json_encode($resultSet) . "}");
        $this->dbReference->sendResponse(200, json_encode($resultSet));
      } else {
        //echo “0 results”;
        $this->dbReference->sendResponse(200, "{'items':null}");
      }
    }
  }
}