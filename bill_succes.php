<?php require_once 'template-parts/header.php' ?>

    <section id="bill">

        <img class="leave-top-right" src="assets/image/leave-right.png" alt="">
        <img class="leave-top-left" src="assets/image/leave-left.png" alt="">

        <div class="container">
            <div class="buying_succes">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_rzSNua.json"
                               background="transparent"
                               speed="0.75"
                               style="width: width: 120px; height:  height: 120px;"
                               autoplay></lottie-player>
            </div>
            <p class="succes_answer">
                Merci pour votre contribution !
            </p>

            <div class="redirection">
                <span>Vous allez être redirigé automatiquement vers la page d'accueil dans 5 secondes ➞</span>
            </div>

            <div class="button-wrapper">
                <a class="btn btn-outline-secondary" href="./index.php">
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