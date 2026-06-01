<?php
/**
 * Contact Handler — Pura Estética
 * Recibe el formulario de contacto, valida y envía email.
 */

declare(strict_types=1);

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// ── Sólo POST ────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

// ── Honeypot anti-spam ───────────────────────────────────
if (!empty($_POST['_honeypot'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detectado.']);
    exit;
}

// ── Sanitizar y validar ──────────────────────────────────
$nombre     = trim(htmlspecialchars($_POST['nombre']     ?? '', ENT_QUOTES, 'UTF-8'));
$telefono   = trim(htmlspecialchars($_POST['telefono']   ?? '', ENT_QUOTES, 'UTF-8'));
$email      = trim(filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL));
$tratamiento = trim(htmlspecialchars($_POST['tratamiento'] ?? '', ENT_QUOTES, 'UTF-8'));
$mensaje    = trim(htmlspecialchars($_POST['mensaje']    ?? '', ENT_QUOTES, 'UTF-8'));

$errors = [];

if (empty($nombre))                              $errors[] = 'Nombre requerido.';
if (empty($telefono) || strlen($telefono) < 8)   $errors[] = 'Teléfono inválido.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))  $errors[] = 'Email inválido.';
if (empty($mensaje))                             $errors[] = 'Mensaje requerido.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// ── Enviar email ─────────────────────────────────────────
$to      = 'puraestetica.cancun@gmail.com';
$subject = "Nueva consulta desde puraestetica.mx — {$nombre}";

$body = "
Nueva solicitud de contacto desde puraestetica.mx

Nombre:       {$nombre}
Teléfono:     {$telefono}
Email:        {$email}
Tratamiento:  {$tratamiento}

Mensaje:
{$mensaje}

---
Enviado desde: puraestetica.mx
";

$headers  = "From: noreply@puraestetica.mx\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION;

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar. Intenta de nuevo.']);
}
