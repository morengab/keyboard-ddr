<?php
/*
if (isset($_POST['url'])) {
	echo file_get_contents("http://".SanitizeString($_POST['url']));
	
	
}

function SanitizeString($var) {
	$var = strip_tags($var);
	$var = htmlentities($var);
	return stripslashes($var);
}
*/

	require_once 'downloads/medoo.min.php';
 
 	$database = new medoo('macadamia_cluster');
 
 	if (isset($_GET['appID'])) {
		if (isset($_GET['name'])) {
			// Get a shortcut by name and app
			$results = $database->select("shortcuts",
											"*",
											[
												"app_id" => $_GET['appID'],
												"name" => $_GET['name']
											]);
								
			echo json_encode($results);
		} else {
			// Get all shortcuts for an app
			$results = $database->select("shortcuts",
											"*",
											[
												"app_id" => $_GET['appID']
											]);
			
			echo json_encode($results);
		}		
 	} else {
		$results = $database->select("shortcuts", "*");
 
 		echo json_encode($results);
	}
						
?>
