<?php 
date_default_timezone_set('UTC');


$ToEmail = 'ivodzyansky@gmail.com'; 
$EmailSubject = 'EuroUber Клиент'; 
$date = date("d-m-Y H:i:s");
$mailheader = "От: ".$_POST["name"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY = "Имя: ".$_POST["name"]."\n"; 
$MESSAGE_BODY .= "Телефон: ".$_POST["phone"]."\n"; 
$MESSAGE_BODY .= "Город: ".nl2br($_POST["city"])."\n"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $date) or die ("Ошибка!");

?>