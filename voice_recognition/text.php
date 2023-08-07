<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "speech_reco";



$conn = mysqli_connect($servername, $username, $password, $dbname);


$save_speech = $_POST["text"];

// Insert the data into the database
$sql = "INSERT INTO voice_data (mytext) VALUES ('$save_speech')";

if (mysqli_query($conn, $sql)) {
  echo "Data saved successfully";
} else {
  echo "Error saving data";
}

// Close the connection
mysqli_close($conn);

?>