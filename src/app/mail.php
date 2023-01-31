<?php
//get data from form

$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email= $_POST['Email'];
$phone= $_POST['Phone'];
$message= $_POST['Subject'];
$to = "dixitsridevi@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $fname . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Phone =" . $phone;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>