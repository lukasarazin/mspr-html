<?php require_once 'template-parts/header.php' ?>

    <section id="contact">
        <div class="container">

            <div class="brand-logo">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player class="lottie" src="https://assets6.lottiefiles.com/private_files/lf30_czbttpus.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"    autoplay></lottie-player>
            </div>
            <span>Nous contacter</span>

            <form method="POST" action="">

                <div class="row mb-5">
                    <div class="col first_name">
                        <div class="form">
                            <input type="text" id="form3Example1" class="form-control" placeholder="Prénom" name="first_name"/>
                        </div>
                    </div>
                    <div class="col name">
                        <div class="form">
                            <input type="text" id="form3Example2" class="form-control" placeholder="Nom" name="last_name"/>
                        </div>
                    </div>
                </div>

                <div class="form mb-5">
                    <input type="text" id="form3Example3" class="form-control" placeholder="Objet" />
                </div>

                <div class="form mb-5">
                    <input type="email" id="form3Example3" class="form-control" placeholder="Adresse email" />
                </div>

                <div class="form">
                    <textarea class="form-control" name="message" id="form3Example3" cols="30" rows="10" placeholder="Votre message"></textarea>
                </div>

                <?php if ($_POST): ?>
                    <p class="succes_answer">Merci <?php echo $_POST['first_name'] . ' ' .$_POST['last_name'] ?> pour votre message =).</p>
                <?php endif; ?>

                <div class="button-wrapper">
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>

            </form>

        </div>
    </section>



<?php require_once 'template-parts/footer.php'?>