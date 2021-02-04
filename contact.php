<?php require_once 'template-parts/header.php' ?>
<?php require_once 'template-parts/functions.php' ?>

<section id="contact">

    <img class="leave-top-right" src="assets/image/leave-right.png" alt="">

    <img class="leave-top-left" src="assets/image/leave-left.png" alt="">

    <?php if (!$_POST): ?>
    <div class="container">
        <div class="brand-logo">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player class="lottie" src="https://assets6.lottiefiles.com/private_files/lf30_czbttpus.json"
                           background="transparent" speed="1" style="width: 150px; height: 150px;"
                           autoplay></lottie-player>
        </div>
        <h1>Nous contacter</h1>
        <?php endif; ?>

        <?php if ($_POST): ?>
            <div class="container">
                <div class="message_send">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets7.lottiefiles.com/datafiles/Bn3v9MQSL5CxM5a/data.json"
                                   background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                   autoplay></lottie-player>
                </div>
                <p class="succes_answer">
                    Merci
                    <?php echo $_POST['first_name']?>, votre message à bien été envoyé !
                </p>

                <div class="redirection">
                    <span>Vous allez être redirigé automatiquement vers la page d'accueil dans 5 secondes ➞</span>
                </div>

                <div class="button-wrapper">
                    <a class="btn btn-outline-secondary">
                        Retour à l'accueil
                    </a>
                </div>
            </div>
        <?php endif; ?>

        <?php if (!$_POST): ?>
            <form method="POST" action="">

                <div class="row mb-5">
                    <div class="col first_name">
                        <div class="form">

                            <input value="<?= isset($first_name) ? $first_name : null; ?>" type="text"
                                   id="form3Example1" min="2" max="20" class="form-control" placeholder="Prénom"
                                   name="first_name" required/>

                        </div>
                    </div>
                    <div class="col name">
                        <div class="form">

                            <input type="text" id="form3Example2"
                                   min="3" max="20" class="form-control" placeholder="Nom" name="last_name" required/>

                        </div>
                    </div>
                </div>

                <div class="form mb-5">
                    <input type="text" id="form3Example3" class="form-control" placeholder="Objet"/>
                </div>

                <div class="form mb-5">
                    <input type="email" id="form3Example3" class="form-control" placeholder="Adresse email"/>
                </div>

                <div class="form">
                    <textarea class="form-control" min="15" max="200" name="message" id="form3Example3" cols="30"
                              rows="10" placeholder="Votre message" required></textarea>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>

            </form>
        <?php endif; ?>
    </div>
</section>


<?php require_once 'template-parts/footer.php' ?>

