<?php

<<<<<<< Updated upstream
require_once 'head.php';

$page_uri = $_SERVER['REQUEST_URI'];

?>

<header id="header">
    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #fcfcfc;">
=======
<header>
    <nav class="navbar navbar-expand-md navbar-light bg-white">
>>>>>>> Stashed changes
        <div class="container-fluid">

            <a class="navbar-brand" href="/mspr-html/">
                <img src="assets/image/TREES.png" alt="" width="50" height="44" loading="lazy"
                     class="d-inline-block align-top">
            </a>

            <a class="navbar-brand" href="/mspr-html/"><span class="align-text-top">Trees</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link <?php echo '/mspr-html/' === $page_uri ? 'active' : null; ?>" href="./">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo '/mspr-html/planter-mon-arbre' === $page_uri ? 'active' : null; ?>" href="./planter-mon-arbre">Planter mon arbre</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown"
                           role="button"  data-bs-toggle="dropdown" aria-expanded="false">
                            Nos arbres
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown">
                            <li><a class="dropdown-item" <?php echo '/mspr-html/baobab' === $page_uri ? 'active' : null; ?> href="./baobab">Baobab</a></li>
                            <li><a class="dropdown-item" href="#">Araucaria</a></li>
                            <li><a class="dropdown-item" href="#">Ginkgo</a></li>
                            <li><a class="dropdown-item" href="#">Cocotier</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown2"
                           role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            À propos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown2">
                            <li><a class="dropdown-item" <?php echo '/mspr-html/notre-histoire' === $page_uri ? 'active' : null; ?> href="./notre-histoire">Notre histoire</a></li>
                            <li><a class="dropdown-item" <?php echo '/mspr-html/notre-procede' === $page_uri ? 'active' : null; ?> href="./notre-procede">Notre procédé</a></li>
                            <li><a class="dropdown-item" <?php echo '/mspr-html/nos-conferences' === $page_uri ? 'active' : null; ?> href="./nos-conferences">Nos conférences</a></li>
                            <li><a class="dropdown-item <?php echo '/mspr-html/nos-biomes' === $page_uri ? 'active' : null; ?>" href="./nos-biomes">Nos biomes</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo '/mspr-html/contact' === $page_uri ? 'active' : null; ?>" href="./contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo '/mspr-html/shop' === $page_uri ? 'active' : null; ?>" href="./shop">
                           <span><?php echo count(unserialize($_COOKIE['trees'])); ?></span>
                            <svg class="icon_shop" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>






