<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <p>SEND E-MAIL</P>
        <form class="contact-form" action="contactform.php" method="post">
            <input type="text" name="name" value="" placeholder="full name">
            <input type="text" name="mail" value="" placeholder="your e-mail">
            <input type="text" name="subject" value="" placeholder="subject">
            <textarea name="message" placeholder="message"></textarea>
            <button type="submit" name="submit">SEND MAIL</button>
</form>
    </main>
</body>
</html>