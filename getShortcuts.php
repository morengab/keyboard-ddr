<?php
	require_once 'downloads/medoo.min.php';
 
 	$database = new medoo('macadamia_cluster');
 
 	if (isset($_GET['app_name'])) {
		if (isset($_GET['name'])) {
			// Get a shortcut by name and app
			$results = $database->select("shortcuts",
											"*",
											[
												"AND" => 
													[
														"app_name" => $_GET['app_name'],
														"name" => $_GET['name']
													]
											]);
								
			echo json_encode($results);
		} else {
			// Get all shortcuts for one app
			$results = $database->select("shortcuts",
											"*",
											[
												"app_name" => $_GET['app_name']
											]);
			
			echo json_encode($results);
		}		
 	} else {
		// Get all shortcuts for all apps
		$results = $database->select("shortcuts", "*");
 
 		echo json_encode($results);
	}						
?>
