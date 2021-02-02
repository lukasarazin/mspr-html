<?php require_once 'template-parts/header.php' ?>

<main id="main">

    <section id="home-hero">
        <div class="container">

            <div class="brand-logo">
                <img src="assets/image/TREES.png"
                     alt="Logo site"
                     class="rounded mx-auto d-block">
            </div>

            <h1>Laissez votre emprunte dans ce monde, choisissez et voyagez avec
                <span>votre</span> arbre.</h1>

            <div class="row g-4 home_cards">
                <div class="home_card col-lg-4">
                    <div class="card text-center bg-secondary">
                        <span class="number"><?php echo date('321s') ?></span>
                        <span>Arbres plantés</span>
                    </div>
                </div>
                <div class="home_card col-lg-4">
                    <div class="card text-center bg-secondary">
                        <span class="number">4</span>
                        <span>Biomes</span>
                    </div>
                </div>
                <div class="home_card col-lg-4">
                    <div class="card text-center bg-secondary">
                        <span class="number">100%</span>
                        <span>écologies</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php require_once 'template-parts/footer.php' ?>


