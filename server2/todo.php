<?php
error_reporting(E_ALL);
//headers

header("Content-Type: application/json; charset=UTF-8");
$status=array();
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 


 $conn = new mysqli("localhost", "root", "sai", "loginapp");//Connecting to database

 
 
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
 
  $data = $conn->real_escape_string($_GET['data']);
  $userid = $conn->real_escape_string($_GET['id']);
   
//inserting data to the db

    $sql = "INSERT INTO todo (user_id,description) values('$userid','$data')";
 


if ($conn->query($sql) === TRUE) {
    $status['status'] = $conn->insert_id;
   
} else {
    $status['status'] = "error1";
    
}
    mysqli_close($link);
} else {
    $status['status'] = "error2";
    
}
echo json_encode($status);
