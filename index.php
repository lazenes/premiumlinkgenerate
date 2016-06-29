<!DOCTYPE html>
<?php
 include ("config.php");
 // Language File
  include ("./lang/tr.php");  
 ?>




<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="./images/favicon.png">
	<title><?php echo $site_title;?></title>
	<meta name="description" content="Turbobit Premium Link Generator - a premium link generator. When using our services there is no need to pay for any premium services, because we are generating premium links for free!">
	<meta name="keywords" content=" premium downloads, free turbobit accounts, turbobit premium, premium link generator, turbobit premium link generator, free turbobit premium, free turbobit, turbobit direct download, turbobit.net, turbo access, turbo free">
	<meta name="author" content="Lazenes">
	<!-- Google Analytics START-->
		
	<!-- Google Analytics END-->
	<link href="./index_files/bootstrap.min.css" rel="stylesheet">
	<link href="./index_files/template.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

<body>
<div class="container">


</div>

	<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only"><?php echo $lang[1];?> </span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.php"><img style="height: 30px; margin-top: -5px;" src="./images/logo.png" class="img-responsive"></a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"> 
					<a href="index.php"><?php echo $lang[2];?></a>
					</li>
					<!-- <li class="active">
					<a href="#">Anlatım</a>
					</li>
					<li>
					<a href="#">Terms</a>
					</li>		
					<li>
					<a href="#">Privacy</a>
					</li>	-->				
					<!--<li >
						<a href="#">Donate</a>
					</li>	-->				
					<li>
					<a href="mailto:<?php echo $mail;?>"><?php echo $lang[3];?></a>
					</li>
				</ul>
			</div>
	</nav>
	<!-- container -->
	<div class="container">

		<div class="row">
			<div class="col-lg-10 col-lg-offset-1"><h4><span class="glyphicon glyphicon-link"></span><?php echo $slogan;?></h4>
	<div class="panel panel-default">
		<div class="panel-body" align="center">
			<div class="row">
				<div class="row">
						<div class="col-md-12">
<?php
include("class.sharedir.php");
if($_POST){
	?>
	<div class="alert alert-success" style="max-width:728px;" role="alert">	
							<button type="button" class="close" data-dismiss="alert">×</button>
	<?php
dosyaBilgisi($_POST['ddlink'],$response_format,$key);
indir($_POST['ddlink']);
?>
	</div>
<?php
}
?>

						
						
						
					
						</div>
					</div>			</div>
			<div class="row">
				<div class="col-md-12 hidden-xs hidden-sm">
				
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
						<form method="post" action="#">
							<div class="input-group" style="max-width:728px;">
								<input type="text" class="form-control" placeholder="<?php echo $lang[7];?>" name="ddlink" value="">
								<span class="input-group-btn">
									<input type="submit" class="btn btn-info" value="<?php echo $lang[6];?>" >
								</span>
							</div>
						</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 hidden-xs hidden-sm">
			
			</div>			
			</div>
		</div>
	</div>
</div>		</div>
	</div><script type="text/javascript" src="./index_files/checkInventory.php" async=""></script>
<center>
<div class="row">
					<div class="col-md-12">
					<?php echo $ads;?>
					</div>
				</div></center><br>
	<!-- container -->
	<div class="container">
		<div class="row">
		<div class="col-lg-10 col-lg-offset-1">
				<div class="panel panel-default">
					<!--<div class="panel-body">
					<ul class="list-inline links">			
					<li >
					<a href="iletisim.php"><?PHP echo $lang[3];?></a>
					</li>
					</ul>
					</div>-->	
					<div class="panel-footer"><small>© 2016 <?php echo $site_name;?>,  <?php echo $lang[4];?>.</small>
					<span data-coinwidget-instance="0" class="COINWIDGETCOM_CONTAINER">
					<a class="COINWIDGETCOM_BUTTON_BITCOIN" href="#">
					<img src="./images/icon_bitcoin.png"><span><?php echo $lang[5];?></span></a><span>0</span></span></div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bootstrap core JavaScript
	================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="./index_files/jquery.min.js"></script>
	<script src="./index_files/bootstrap.min.js"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="./index_files/ie10-viewport-bug-workaround.js"></script>


</body><script src="./index_files/jquery.min(1).js" id="COINWIDGETCOM_JQUERY"></script></html>