<?php
  session_start();
  include("utils/func.php");
  $f = new Func();
  
  if($f->doRedirect($_SESSION)) {
	header("Location: ".$f->getLoginUrl());
    die();
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
	<?php include("head.php"); ?>
	<link rel="stylesheet" href="styles/main.min.css">
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
	<?php include("navbar.php"); ?>

    <div class="container">

      <h1 id="address-view">Address View</h1>

      <div class="app-content app-form address-view-form">
        <h4 id="communication-card-header">Communication Card Received</h4>
        <label for="from-date">From Date:</label>
        <input type="text" id="from-date" class="date-field" /><br />
        <label for="to-date">To Date:</label>
        <input type="text" id="to-date" class="date-field" />
        <div id="follow-up-options-spacer"></div>
        <div id="follow-up-options">
          <label for="active">Active</label>
          <input type="checkbox" id="active" checked/><br />
          <label for="not-visited">Not yet visited</label>
          <input type="checkbox" id="not-visited"/><br />
          <label for="would-like-visit">Would like a visit from a GC Pastor</label>
          <input type="checkbox" id="would-like-visit"/>
        </div>
        <button id="go-arrow" class="btn btn-default">Run <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button>
        <br />
        <br />
        <div id="address-view-container">
          <div class="address-view-table-container" id="address-view-table-container">
            <table class="table table-responsive table-striped address-view-table" id="address-view-table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>View</th>
                  </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
          <div class="table-bar">
              <div class="navigation-links">
                <div>
                  <a href="javascript:void(0);" id="mia-top">Top</a>
                  <a href="javascript:void(0);" id="mia-bottom">Bottom</a>
                </div>
                <div class="clear"></div>
              </div>
          </div>
          <br />
          <button id="gen-map" class="btn btn-info"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Map</button>
          <div id="address-map-panel"></div>
          <div id="map-note" style="display: none;">*Selected people with no address (or only "OH") will not be mapped</div>
          <div id="map-legend" style="display: none;"></div>
          <div class="clear"></div>
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
    <script src="scripts/main.min.js"></script>
	<script type="text/javascript">
		var el = $('#navbar a[id=address-view-nav]');
		el.attr('href', '#');
		el.parent().addClass('active');
<?php
	echo "var apiKey = '".$f->getGoogleApiKey()."';";
?>
	</script>
    <script src="scripts/login.js"></script>
    <script src="scripts/address-view.js"></script>
  </body>
</html>
