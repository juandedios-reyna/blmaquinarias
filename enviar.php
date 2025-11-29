<?php
if (isset($_POST['enviar_correo'])) {
    
    // 1. Recoger datos
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    // 2. Configurar correo destino
    $destinatario = "ventas@blmaquinarias.com"; // CAMBIA ESTO POR TU CORREO REAL
    $asunto = "Nueva Cotización Web: $nombre";

    // 3. Cuerpo del mensaje
    $cuerpo = "Has recibido una nueva solicitud de cotización.\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Correo: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    // 4. Cabeceras
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // 5. Enviar
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "<script>alert('Correo enviado exitosamente'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Error al enviar el correo. Intenta por WhatsApp.'); window.location.href='index.php';</script>";
    }
}
?>