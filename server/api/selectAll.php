<?php
require_once '../handlers/dbConnect.php';

if($_SERVER['REQUEST_METHOD'] == 'GET') {
$query = "SELECT * FROM users;";
$result = mysqli_query($db, $query);


$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
    $myArray[] = $row;
};

echo json_encode($myArray);
mysqli_close($db);
};
?>