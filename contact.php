<?php require_once 'template-parts/header.php' ?>

    <section id="contact">
        <div class="container">

            <div class="brand-logo">
                <img src="assets/image/TREES.png"
                     alt="Logo site"
                     class="rounded mx-auto d-block">
            </div>

            <form>

                <div class="row mb-4">
                    <div class="col first_name">
                        <div class="form-outline">
                            <input type="text" id="form3Example1" class="form-control" placeholder="Prénom"/>
                        </div>
                    </div>
                    <div class="col name">
                        <div class="form-outline">
                            <input type="text" id="form3Example2" class="form-control" placeholder="Nom"/>
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <input type="text" id="form3Example3" class="form-control" placeholder="Objet" />
                </div>

                <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control" placeholder="Adresse email" />
                </div>

                <div class="">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message"></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Envoyer</button>

            </form>
        </div>
    </section>

<?php require_once 'template-parts/footer.php' ?>