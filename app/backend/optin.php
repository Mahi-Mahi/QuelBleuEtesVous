<?php

if ( file_exists('./config.php') )
	require_once('./config.php');

$mysqli = mysqli_connect(
						defined('DB_HOST')	?	constant('DB_HOST')		:	"localhost",
						defined('DB_USER')	?	constant('DB_USER') 	:	"root",
						defined('DB_PWD')	?	constant('DB_PWD')		:	"",
						defined('DB_NAME')	?	constant('DB_NAME')		:	"quelbleuetesvous"
					);

if (mysqli_connect_errno()) {
	print json_encode(array(
		'error'	=>	sprintf("Connect failed: %s\n", mysqli_connect_error())
	));
	die();
}


$data = file_get_contents("php://input");

$objData = json_decode($data);

error_log(print_r($objData, true));


$query = "INSERT INTO `optin_email` (`created_at`, `email`) VALUES (NOW(), ?) ON DUPLICATE KEY UPDATE created_at = NOW();";
$stmt = mysqli_prepare($mysqli, $query);


mysqli_stmt_bind_param($stmt, "s", $user_email);

$user_email = $objData->email;

if ( ! mysqli_stmt_execute($stmt) ){

	print json_encode(array(
		'error'	=>	sprintf("Error message: %s\n", mysqli_error($mysqli))
	));
	die();

}


mysqli_stmt_close($stmt);

mysqli_close($mysqli);

