<link href="bonsai.lcsc.edu/ctmessan/connect.php">
session_start();\
error_reporting(E_ALL);

$errors = array();

if (isset($_POST['login_user'])){
    $emailAddress = mysqli_real_escape_string($conn, $_POST['emailAddress']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
}

if(empty($emailAddress)){
    array_push($errors, "Email Address is required.");
}
if(empty($password)){
    array_push($errors, "Password is required.");
}

if(count($errors) == 0){
    $password = md5($password);
    $query = "SELECT * FROM customer_profile WHERE EMAIL = '$emailAddress' AND password = '$password'";
    $results = mysqli_query($conn, $query);
    echo mysqli_num_rows($results);
    if(mysqli_num_rows($results) == 1){
        $fName = 'FIRST_NAME';
        
    }
    else {
        array_push($errors, "Wrong email address and/or password");
    }
}