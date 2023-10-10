<?php
    if(isset($_POST["num1"]) && isset($_POST["num2"])) {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $factorial = $num1;
        if($num2 == 0) {
            $factorial = 1;
        } else {
            while($num2 > 1) {
                $factorial *= $num1;
                $num2--;
            }
        }
        echo($factorial);
    }
?>
