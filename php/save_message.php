<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : '';
    $body = isset($_POST['body']) ? $_POST['body'] : '';

    $data = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $body\n\n";

    // مسیر فایل تکست
    $file = 'messages.txt';

    // باز کردن فایل و اضافه کردن اطلاعات جدید به انتهای آن
    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
        echo "پیام شما با موفقیت ذخیره شد.";
    } else {
        echo "خطایی در ذخیره پیام رخ داد.";
    }
} else {
    echo "درخواست نامعتبر است.";
}
?>
