<?php 
// urlchecker.org  Class

function dosyaBilgisi($link,$response_format,$key){
		include ("./lang/tr.php"); 
$api = 'http://api.urlchecker.org/';
$ch = curl_init($api);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, "response_format=$response_format&key=$key&link=$link");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_NOBODY, 0);
$response  = curl_exec($ch);
## Display file status
$result= json_decode($response);
echo $lang[9].$result->status."<br/>";
echo $lang[12].$result->filename."<br/>";
if ($result->filesize_mb <= 150){
echo  $lang[9].$result->filesize_mb." MB"."<br/>";
}else{	
echo $lang[10];	
}
}

function indir($url){
	include ("./lang/tr.php"); 
include ("config.php");
	if ($zip_url){
		$zipli=file_get_contents($zip_url_api."http://dl.sharedir.com/?i=".urlencode($url)."&ref=37909");
			echo "<a href='".$zipli."'>".$lang[8]."</a>";

	}else{
		
	echo "<a href='http://dl.sharedir.com/?i=".urlencode($url)."&ref=37909'>".$lang[8]."</a>";
	}
	
	
}
?>