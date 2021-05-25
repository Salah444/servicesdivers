<html>
    <head>
        <title></title>
		<meta charset="UTF-8" />
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <style>
            body{
                position: relative;
            }
            div{
                text-align: center;
                position:absolute;
                left:50%;
                right:0;
                top:50%;
                bottom:0;
                margin:auto;
                max-width:100%;
                max-height:100%;
                overflow:auto;
                transform: translate(-50%, -50%);
            }
            p{
                font-family: 'Roboto';
                letter-spacing: 1px;
                line-height: 6px;
            }
            .ic{
                width: 100px;
                height: 100px;
            }
            .text1{
                text-align: center;
                font-weight: bold;
                font-size: 18px;
            }
            .text2{
                text-align: center;
                font-weight: bold;
                font-size: 14px;
            }
            .text3{
                text-align: center;
                font-size: 12px;
            }
        </style>
        <script type="text/javascript">
            var n = 5;
            window.setInterval(function(){
                n--;
                document.getElementById('num').innerHTML=n;
            },1000);
            window.setTimeout(function(){
                window.location.replace("index.html");
				
            },5000);
        </script>
		
		
    </head>
    <body>
        <div>
            <img class="ic" src="https://www.shareicon.net/data/256x256/2016/08/20/817720_check_395x512.png" alt="icon"/>
            <p class="text1">Demande envoyée avec succès!</p>
            <p class="text2">Merci pour votre temps d'attente</p>
            <p class="text3">Vous allez être redirigé dans <span id="num">5</span> secondes.</p>
        </div>
    </body>
</html>

    <?php 
    
   if (isset($_POST['Name']) AND isset($_POST['Email']) AND isset($_POST['Subject']) AND isset($_POST['Textarea'])){
    
    require 'phpmailer/PHPMailerAutoload.php';

   $mail = new PHPMailer(true);
    try {
 
    if(isset($_POST['submit'])){
        $to = "salaheddine.elokri@gmail.com"; // this is your Email address
        $from = $_POST['Email']; // this is the sender's Email address
        $msg='Sujet:Demande de rappel <br><br> Nom:'.$_POST['Name']	."<br><br>"
            .'Telephone:'.$_POST['Subject'] ."<br><br>"
            .'Email:'.$_POST['Email']."<br><br>"
            .'Message:'.$_POST['Textarea'];
        $subject = "Form submission";
        $subject2 = "Copy of your form submission";
        // $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
        // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'agencewebcom1@gmail.com';                 // SMTP username
        $mail->Password = 'webcom2018';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom($from, 'Webcom');
        $mail->addAddress('contact@servicesdivers.com', $_POST['Name']);     // Add a recipient
        // $mail->addAddress('salaheddine.elokri@gmail.com');               // Name is optional
        $mail->addReplyTo('agencewebcom1@gmail.com', 'Information');
        //$mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $_POST['Subject'];
        $mail->Body    = $msg;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->send();

        // Send notification
        $notification_title = "$from sent you a message";
        $notification_body = 'Nom: '.$_POST['Name']	."\n"
        .'Sujet: '.$_POST['Subject'] ."\n"
        .'Message: '.$_POST['Textarea'];
        // echo 'notif';
        $url = 'https://www.webcom.ma/not-ad/web/app.php/contact_notification';
        $data = array('title' => $notification_title, 'body' => $notification_body);

        // use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        // if ($result === FALSE) { /* Handle error */ echo 'result == FALSE'; }

        // var_dump($result);

    }
    // echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
	
	
	
?>	