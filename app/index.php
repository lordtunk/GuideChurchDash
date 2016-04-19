<?php
  session_start();
	include("utils/func.php");
	include("utils/follow_ups.php");
	$f = new Func();
	$followUps = new FollowUps($f);

	if($f->doRedirect($_SESSION)) {
		header("Location: ".$f->getLoginUrl());
		die();
	}
	
	$success = TRUE;
	try {
	  $today = date("n/j/Y");
	  $lastWeek = date_sub(new DateTime($today), date_interval_create_from_date_string('7 days'));
	  $lastWeekStr = date_format($lastWeek, 'n/j/Y');
	  $follow_ups = $followUps->getFollowUpsFromDate($lastWeekStr, $today);
	} catch (Exception $e) {
	  $success = FALSE;
      $f->logMessage($e->getMessage());
	}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include("head.php"); ?>
    <!-- build:css styles/main.min.css -->
    <!-- Bootstrap core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/jquery-ui.css">
    <link rel="stylesheet" href="styles/jquery.toastmessage.css">
    <link rel="stylesheet" href="styles/jquery.loadmask.css">
    <!-- endbuild -->
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
	<?php include("navbar.php"); ?>

    <div class="container dashboard">

		<h1>Dashboard</h1>
		<div class="row">
			<div class="col-sm-4">
				<div class="panel panel-default">
					<div class="panel-heading">
					  <h3 class="panel-title">Administrative Pages</h3>
					</div>
					<div class="panel-body">
					  <a href="settings.php">Settings</a>
					</div>
				</div>
			</div>
		</div>
		<div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Follow Ups Created <?php echo "$lastWeekStr - $today"; ?></h3>
            </div>
            <div class="panel-body follow-up-table-container">
				<div class="legend">
					<div class="item">
						<div class="legend-icon first-time-visitor"></div>
						<div class="text">First Time Visitor</div>
					</div>
				</div>
				<table class="table table-responsive table-striped" id="follow-up-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Date</th>
							<th>By</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
            </div>
          </div>

    </div><!-- /.container -->
    
    <div id="error-container" style="display: none;">
      <div id="error-msg"></div>
      <button id="email-error" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> <span class="btn-text">Email Error</span></button>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- build:js scripts/main.min.js -->
    <script src="jquery/jquery-1.11.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="scripts/error.js"></script>
    <script src="jquery/jquery-ui.min.js"></script>
    <script src="jquery/jquery.loadmask.min.js"></script>
    <script src="jquery/jquery.toastmessage.js"></script>
    <!-- endbuild -->
	<script type="text/javascript">
<?php
	if($success) {
		echo "var followUps = ".json_encode($follow_ups).";";
	} else {
		echo "$().toastmessage('showErrorToast', 'Error loading visitors');";
	}
?>
	</script>
    <script src="scripts/login.js"></script>
    <script src="scripts/dashboard.js"></script>
  </body>
</html>
