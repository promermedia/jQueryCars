<?php
require_once '../handlers/dbConnect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = (mysqli_real_escape_string($db, $_POST['email']));
    $token = (mysqli_real_escape_string($db, $_POST['token']));
    $query = "SELECT `email`, `firstName`, `token` FROM users WHERE `email` = '$email' AND `token` = '$token';";
    $result = mysqli_query($db, $query);

    $myArray = array();
    if ($result->num_rows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    } else {
        $object = (object) ['message' => "no user"];
        echo json_encode($object);
    }
    mysqli_close($db);
}