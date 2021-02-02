<?php require_once 'template-parts/header.php' ?>

<main id="main">

    <section id="home-hero">
        <div class="container">

            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>

            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>

            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>

            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>

            <div class="brand-logo">
                <img src="assets/image/TREES.png"
                     alt="Logo site"
                     class="rounded mx-auto d-block">
            </div>


            <h1>Laissez votre emprunte dans ce monde, choisissez et voyagez avec
                <span>votre</span> arbre.</h1>

            <div class="home_cards">
                <div class="row g-4 ">
                    <div class="col-lg-4">
                        <div class="home_card">
                            <?php $number = date('321s') ?>
                            <data value="<?php echo $number ?>"><?php echo $number ?></data>
                            <span>Arbres plantés</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="home_card">
                            <data value="4">4</data>
                            <span>Biomes</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="home_card">
                            <data value="100%">100%</data>
                            <span>écologies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="home_infos">
        <div class="container">
            <div class="content">
                <h3>QUI SOMMES NOUS ?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsa ipsum minus nam? Asperiores
                    minima quas repellat veniam! Ab deleniti earum minus, nam natus ut.</p>
                <div class="button-wrapper">
                    <a class="btn btn-primary">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php require_once 'template-parts/footer.php' ?>

