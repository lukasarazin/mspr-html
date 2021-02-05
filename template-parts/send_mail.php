<?php

if ($_POST):

    $first_name = isset($_POST['first_name']) ? htmlspecialchars($_POST['first_name']) : null;

// FONCTION POST

    if ($_POST):
        function getValueFromField($field_name)
        {
            $value = null;

            if (isset($_POST[$field_name]) && $_POST[$field_name]):
                $value = htmlspecialchars($_POST[$field_name]);
            endif;

            return $value;
        }
    endif;

// SIMULATION ENVOI EMAIL

    header('Location: ../mail_succes.php?first_name=' . $first_name);

endif;

echo "Vous n'êtes pas autoriser à accéder à cette page !";

?>



