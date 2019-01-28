session_start();\
error_reporting(E_ALL);

$errors = array();

if (isset($_POST['login_user'])){
    $emailAddress = mysqli_real_escape_string($db, $_POST['emailAddress']);
}