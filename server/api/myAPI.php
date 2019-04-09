<?php


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $fName = $_GET['fName'];
    $lName = $_GET['lName'];
    echo "<h1>My first name is $fName and my last name is $lName </h1>";
}
;