<?php require_once 'template-parts/header.php' ?>

<main id="main">

    <section id="home-hero">
        <div class="container">
            <div class="birds-wrapper">
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
                <h1>TREES</h1>
            </div>

            <h2>Laissez votre emprunte dans ce monde, choisissez et voyagez avec
                <span>votre</span> arbre.</h2>

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
                            <data value="4">
                                <span id="number-one">0</span>
                            </data>
                            <span>Biomes</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="home_card">
                            <data value="100%">
                                <span id="number-two">0</span>%
                            </data>
                            <span>Écologie</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="home_about">
        <div class="container">
            <div class="content">
                <h3>Qui sommes nous ?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsa ipsum minus nam? Asperiores
                    minima quas repellat veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                    asperiores, culpa deserunt ea expedita labore laborum minus nobis repellat sint. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Explicabo, nemo!</p>
                <div class="button-wrapper">
                    <a class="btn btn-primary">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="home_process">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <img src="assets/image/process.jpg" alt="plantation_graine" title="Nos plantations">
                </div>
                <div class="col-lg-6">
                    <h3>Comment nous proçedons ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam animi
                        commodi consequatur consequuntur culpa dicta dolorum eos esse expedita facere hic itaque
                        laudantium nobis perspiciatis, provident quaerat quam quas sequi. Assumenda, atque blanditiis
                        consectetur eius minus natus, nulla odio quidem ratione recusandae reiciendis sapiente similique
                        sit! Eligendi, exercitationem?</p>
                    <div class="button-wrapper">
                        <a href="#" class="btn btn-outline-secondary">
                            En savoir plus
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php require_once 'template-parts/footer.php' ?>


