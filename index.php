<?php require_once 'template-parts/header.php' ?>

<main id="main">

    <section id="home-hero">
        <div class="container">
            <div class="brand-logo">
                <img src="assets/image/TREES.png"
                     alt="Logo site"
                     class="rounded mx-auto d-block">
            </div>
            <div class="logo-title">
                <h1>TREES</h1>
            </div>
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

    <section id="conference">
        <svg  viewBox="0 0 1900 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 13.5V83.5L1921.5 78.5V12L1919 13.5C1901.8 22.3 1758.5 17.1667 1689 13.5C1689 13.5 1518.67 3 1455.5 2.5L1286.5 13.5C1286.5 13.5 909.333 17.8333 761.5 13.5L376 0.5L0.5 13.5Z" fill="#333333"/>
        </svg>

        <div class="test">
            <div class="container">
                <div class="row">
                    <div class="content col-lg-6 ">
                        <span>LE PROGRAMME</span>
                        <h3>Suivre nos conférences !</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda dolores eius eveniet excepturi expedita magnam saepe, similique voluptate voluptatem.</p>
                        <div class="button-wrapper pt-2">
                            <button type="submit" class="btn btn-primary">Voir programme</button>
                        </div>
                    </div>

                    <div class=" content col-lg-6">
                        <div class="row">
                            <div class="card-conf">
                                cc
                            </div>
                        </div>
                    </div

                </div>
            </div>
        </div>
    </section>

    <section id="home_process">

        <svg class="reverse" viewBox="0 0 1900 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 13.5V83.5L1921.5 78.5V12L1919 13.5C1901.8 22.3 1758.5 17.1667 1689 13.5C1689 13.5 1518.67 3 1455.5 2.5L1286.5 13.5C1286.5 13.5 909.333 17.8333 761.5 13.5L376 0.5L0.5 13.5Z" fill="#333333"/>
        </svg>

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



