<?php
    
    /*URL to add to 'action' property of form so it connects to database: 
        bonsai.lcsc.edu/ctmessan/nutritionFitnessApp/src/app/connect.php*/
   
    $servername = "bonsai.lcsc.edu";
    $username = "ctmessan";
    $password = "Fr0gTr!p#1528";
    $dbname = "ctmessan_nutrition_app";


    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

/*$sql = '!!!!!!!!INSERT QUERRY HERE BETWEEN SINGLE QUOTES!!!!!!!';
		
$query = mysqli_query($conn, $sql);

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
}*/
?>
