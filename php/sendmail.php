<?php
  //Vars
  $friendName = $_POST['nome'];
  $emailFrom = $_POST['email-f'];
  $emailTo = $_POST['email-t'];
  $message = $_POST['mensagem'];
  $data_send = date('d/m/Y');
  $hora_send = date('H:i:s');

  //body mail
  $file = "
    <html>
      <p><b>Nome: </b>$friendName</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$message</p>
      <p>Este e-mail foi enviado em <b>$data_send</b> às <b>$hora_send</b></p>
    </html>
  ";
  
  //for who's mail is send
  $forWho = "<$emailTo>";
  $subject = "Contato pelo Site";

  //always exist for correctly character render
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $name <$emailFrom>";

  //send
  mail($forWho, $subject, $file, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
?>