<?php

if ($_POST):

$first_name = isset($_POST['first_name']) ? htmlspecialchars($_POST['first_name']) : null;

// SIMULATION ENVOI EMAIL

header('Location: ../success.php?first_name=' . $first_name);

endif;

echo 'barre toi !';