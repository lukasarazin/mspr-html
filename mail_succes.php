<?php

$first_name = isset($_GET['first_name']) ? htmlspecialchars($_GET['first_name']) : 'inconnu';

include 'template-parts/header.php' ?>

    <section id="contact">

        <img class="leave-top-right" src="assets/image/leave-right.png" alt="">

        <img class="leave-top-left" src="assets/image/leave-left.png" alt="">

        <div class="container">
            <div class="message_send">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player src="https://assets7.lottiefiles.com/datafiles/Bn3v9MQSL5CxM5a/data.json"
                               background="transparent" speed="1.5" style="width: 100px; height: 100px;"
                               autoplay></lottie-player>
            </div>
            <p class="succes_answer">
                Merci
                <?php echo $first_name ?>, votre message à bien été envoyé !
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
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(() => {
                window.location.href = '/mspr-html/';
            }, 5000)
        })
    </script>

<?php require_once 'template-parts/footer.php' ?>


