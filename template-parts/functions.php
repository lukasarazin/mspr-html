<?php
//getValueFromField

if ($_POST):
    function getValueFromField($field_name)
    {
        $value = null;

        if (isset($_POST[$field_name]) && $_POST[$field_name]):
            $value = htmlspecialchars($_POST[$field_name]);
        endif;

        return $value;
    }

    $first_name = getValueFromField('first_name');
    header("Refresh: 5;URL=index.php");
endif;
?>


