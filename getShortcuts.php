<?php
	require_once 'downloads/medoo.min.php';
 
 	$database = new medoo('macadamia_cluster');
 
 	if (isset($_GET['app_name'])) {
		if (isset($_GET['name'])) {
			// Get a shortcut by name and app
			$results = $database->select("shortcuts",
											"*",
											array(
												"AND" => 
													array(
														"app_name" => $_GET['app_name'],
														"name" => $_GET['name']
													)
											));
								
		
		} else {
			// Get all shortcuts for one app
			$results = $database->select("shortcuts",
											"*",
											array(
												"app_name" => $_GET['app_name']
											));

		}		
 	} else {
		// Get all shortcuts for all apps
		$results = $database->select("shortcuts", "*");
		
	}
	
	$response = array();
   	foreach ($results as $result) {
   		
		$response[$result['id']] = array('app_name' => $result['app_name'], 'name' => $result['name'], 'shortcut' => $result['shortcut'], 'image' => $result['image']);
		
		
   	}
	echo json_encode($response);
	
							
?>
