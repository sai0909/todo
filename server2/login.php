<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if(isset($_GET["e"]) && isset($_GET["p"]) ){
  if( !empty($_GET["e"])  && !empty($_GET["p"])  ){
  
 
    $conn = new mysqli("localhost", "root", "sai", "loginapp"); //conneting to database
    
    //getting parameters
    $username=$_GET["e"];
    $password=$_GET["p"];
    
    // To protect MySQL injection for Security purpose
    $username = stripslashes($username);//removing quoted string
    $password = stripslashes($password);
    $username = $conn->real_escape_string($username);  // Providing access to insert escape characters
    $password = $conn->real_escape_string($password);
    $password = md5($password);

 // select sql query
    
    $query="SELECT user_id,first_name,last_name,username,code, phone,email,dob FROM user_new  
        where username like '".$username."' and user_password like '".$password."'";

    $result = $conn->query($query);
      
    if( $rs=$result->fetch_array(MYSQLI_ASSOC)) {
      
      $reoutp=$rs;
     
      $outp=json_encode(array("records"=>$reoutp));
    }
   
    $conn->close();
    echo $outp;
  }
}
 
?>