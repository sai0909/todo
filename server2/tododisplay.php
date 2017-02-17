<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

  
   
    $conn = new mysqli("localhost", "root", "sai", "loginapp"); //conneting to database
    
    $userid = $conn->real_escape_string($_GET['id']);
    $query="SELECT todo_id,description FROM todo 
        where user_id = '$userid' ";

    $result = $conn->query($query);
      
    while( $rs=$result->fetch_array(MYSQLI_ASSOC)) {
      
      $reoutp[]=$rs;
     
    }
      $outp=json_encode(array("records"=>$reoutp));
   
    $conn->close();
    echo $outp;
 
 
?>