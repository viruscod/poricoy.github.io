<?php
// ** CONTACT FORM ** //
// REPLACE THIS EMAIL WITH YOUR OWN EMAIL
$toEmail = "yourmail@gmail.com";
$subject = "You Rechieved a Mail";
$name = htmlspecialchars(stripslashes(trim($_POST['user_name'])));
$from = htmlspecialchars(stripslashes(trim($_POST['user_email'])));
$message = htmlspecialchars(stripslashes(trim($_POST['user_message'])));

$mailHeaders = "From: " . $from . " " . "\r\n" .
    "Reply-To: " . $from . "" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
if (!empty($name) && !empty($from) && !empty($message)) {
  $error = 0;
}else {
  echo "Please Fill up all the Blanks.";
  $error = 1;
}

if ($error === 0) {
  if(mail($toEmail, $subject, $message, $mailHeaders)) {
  echo "Contact Mail Sent.";
  } else {
  echo "Problem in Sending Mail.";
  }
}
