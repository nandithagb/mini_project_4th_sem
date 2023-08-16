<HTML>
<HEAD>
<TITLE>Responsive Web Design (RWD)</TITLE>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="style.css" rel="stylesheet" type="text/css" />
</HEAD>
<BODY>
	<div id="page-content">
<?php
$servername = "127.0.0.1";
$username = "root";
$password = "prajna91";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
</div>
</BODY>
</HTML>