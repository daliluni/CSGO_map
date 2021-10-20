<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>CSGO Map Selected</title>

    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
    <meta name="viewport" content="width=960">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="main.css">

</head>
<body>
<div align='center' style="padding: 25px">
<?php
if (!empty($_POST['Team2Side'])) {
    $Team1 = 1;
    $Team2 = 2;
    if (!empty($_POST['Team1'])) $Team1 = $_POST['Team1'];
    if (!empty($_POST['Team2'])) $Team2 = $_POST['Team2'];
    if($_POST['Team2Side'] == 'T') {
        $TSide = $Team2;
        $CtSide = $Team1;
    } else if ($_POST['Team2Side'] == 'Ct') {
        $TSide = $Team1;
        $CtSide = $Team2;
    }
}
echo "  <table style='width: 40%'>
            <tr>
                <td style='background-color: #fbccb7'><strong>Terrorist Side: <br> Team $TSide</strong></td>
                <td style='background-color: #9fecfe'><strong>Counter-Terrorist Side: <br> Team $CtSide</strong></td>
            </tr>
        </table>";

//print_r($_POST);
echo "<br>";
if (empty($_POST['ChosenMap'])) die ("No map to show");

$map = $_POST['ChosenMap'];
echo "<img style='height: 100%' src=$map alt='ChosenMap'>";
?>

<br><br>
<button name='GoHome' onclick='Go2Main()' value='1' class="btn btn-primary btn-lg"> Go Back </button>
</div>

<script>
    function Go2Main() {
        window.top.location.href="index.html";
    }
</script>
</body>
