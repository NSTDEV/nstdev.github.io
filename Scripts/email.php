<?php

if (isset($_POST['Send'])) {
    if (!empty($_POST['FullName']) && !empty($_POST['Email']) && !empty($_POST['Message'])) {
        $fullName = $_POST['FullName'];
        $Email = $_POST['Email'];
        $Message = $_POST['Message'];

        $Header = "From: {$Email}" . "\r\n";
        $Header = "Reply-To: {$Email}" . "\r\n";
        $Header = "X-Mailer: PHP/" . phpversion();
        $mail = @mail($Email, $fullName, $Message, $Header);

        if ($mail) {
            echo "<h4>¡Muchas gracias por comunicarse!</h4>";
        }
    }
}