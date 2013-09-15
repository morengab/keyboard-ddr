<!DOCTYPE html>   
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<!--[if IE]><![endif]-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="" />
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- !CSS -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900' rel='stylesheet' type='text/css'>
	<link rel="stylesheet/less" text="text/css" href="css/normalize.less">
	<link rel="stylesheet/less" text="text/css" href="css/base.less">
	<link rel="stylesheet/less" text="text/css" href="css/icon.less">
	<!-- Uncomment if you are specifically targeting less enabled mobile browsers
	<link rel="stylesheet" media="handheld" href="css/handheld.css?v=1">  -->
	<!-- !Modernizr - All other JS at bottom -->
	<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	<script src="js/less.js" type="text/javascript"></script>
</head>
<!-- !Body -->
<body>
	<div id="container">	
		<section class="container" id="main">		
			<div class="four columns alpha" id="left-col">
				<div class="score">
					<div>
						<span class="points">0</span> points
					</div>
					<div>
						<span class="scoreMultiplier">1</span>x multiplier
					</div>
				</div>
				<div class="current-software" id="buttons">
					<img src="icons/software-icon.png">
					<h2>Photoshop</h2>
					<button class="button" id="new-game">New Game</button>
					<button class="button" id="start">Start</button>
					<button class="button" id="reset">Reset</button>
				</div>
				<div id="my-modal" style="display:none;">
					<div id="modal_container">
						<div id="program_selector">
							Photoshack
						</div>
						<div id="icon_holder">
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
							<div class="icon_selector">	
							</div>
						</div>
					</div>
					
				</div>
			</div>

			<div class="twelve columns omega" id="main-col">

				<div class="row" id="top-row">

					<div id="lifebar">
						<div id="lifebar-scale"></div>
					</div>
				</div>
				<div class="row" id="board">
					<div class="three columns alpha" id="col1-board">
						<div class="icon-background"></div>
					</div>
					<div class="three columns" id="col2-board">
						<div class="icon-background"></div>
					</div>
					<div class="three columns" id="col3-board">
						<div class="icon-background"></div>
					</div>
					<div class="three columns omega" id="col4-board">
						<div class="icon-background"></div>
					</div>
				</div>
			</div>
		</section><!-- /main -->		
		<footer>
		</footer><!-- /footer -->
	</div><!--!/#container -->
	<div id="music"></div>
	<!-- !Javascript - at the bottom for fast page loading -->
	<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script>!window.jQuery && document.write('<script src=//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"><\/script>')</script>
	<script src="downloads/jquery.simplemodal.1.4.4.min.js"></script>
	<script src="js/scoring.js"></script>
	<script src="js/hotkeys.js"></script>
	<script src="js/jquery.jplayer.min.js"></script>
	<script src="js/game.js"></script>
</body>
</html>