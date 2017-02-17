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
 $userid = $conn->real_escape_string($_GET['userid']);
  $fname = $conn->real_escape_string($_GET['fname']);
    $lname = $conn->real_escape_string($_GET['lname']);
      $mail = $conn->real_escape_string($_GET['mail']);
    $code =$conn->real_escape_string($_GET['code']);
    $phone = $conn->real_escape_string($_GET['ph']);
     $dob = $conn->real_escape_string($_GET['dob']);


//inserting data to the db

 //   $sql = "INSERT INTO user_new (first_name,last_name,username,user_password,email,code,phone,DOB,created_date) values('$fname','$lname','$username','$password','$mail','$code','$phone','$dob',CURRENT_TIMESTAMP    )";
 
 $sql = "UPDATE user_new SET first_name = '$fname',last_name = '$lname',email = '$mail',code = '$code',phone = '$phone',dob = '$dob'  WHERE  user_id = '$userid' ";//
$status['sql'] = $sql;
if ($conn->query($sql) === TRUE) {
    $status['status'] = "ok";
   
} else {
    $status['status'] = "error1";
    
}
    mysqli_close($link);
} else {
    $status['status'] = "error2";
    
}
echo json_encode($status);
