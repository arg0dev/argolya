<?php

echo "<meta http-equiv='refresh' content='0;url=/index.html'>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer();


$mail->isSMTP();
$mail->SMTPKeepAlive = true;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; //ssl
$mail->CharSet = 'UTF-8';
$mail->Port = 587; //25 , 465 , 587
$mail->Host = "srvc134.turhost.com";

$mail->Username = "arg0@reklamodasi.com.tr";
$mail->Password = "&Rc5pnP5";


$mail->setFrom("noreply@reklamodasi.com.tr");
$mail->addAddress("arg0@reklamodasi.com.tr");
$mail->addCC('temel@reklamodasi.com.tr');

$body = file_get_contents('./process.html');

$gelen = ["flow_1","flow_2","flow_3","flow_4"];
$giden = [$_POST['name'],$_POST['email'],$_POST['phone'],$_POST['message']];

$body = str_replace($gelen,$giden,$body);

$mail->isHTML(true);
$mail->Subject = "Argolya Müşteri Destek Hattı";
$mail->Body = $body;

if ($mail->send())
    echo '<script>alert("İletinizi teslim aldık. Müşteri destek ekibimiz kısa süre içerisinde talebinizi değerlendirecektir. Teşekkür ederiz.")</script>';
else
    echo '<script>alert("İletiniz gönderilemedi. Lütfen daha sonra tekrar deneyiniz.")</script>';

?>