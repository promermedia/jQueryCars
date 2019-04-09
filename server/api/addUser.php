<?php
require_once '../handlers/dbConnect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fname = (mysqli_real_escape_string($db, $_POST['fName']));
    $lname = (mysqli_real_escape_string($db, $_POST['lName']));
    $email = (mysqli_real_escape_string($db, $_POST['email']));
    $password = (mysqli_real_escape_string($db, $_POST['password']));
    $TZ = (mysqli_real_escape_string($db, $_POST['tz']));
    $DOB = (mysqli_real_escape_string($db, $_POST['dob']));

    $query = "INSERT INTO `webschool-1`.`users` (`firstName`, `lastName`, `email`, `password`, `teudatZeut`, `DOB`, `role`) VALUES ('$fname', '$lname', '$email', '$password', '$TZ', '$DOB', '3');
";
    $result = mysqli_query($db, $query);
    if($result) {
        $message = "Success";
    } else {
        $message = "Error";
    };
   
    $object = (object) ['message' => $message];
    echo json_encode($object);
    
    mysqli_close($db);
};

?>