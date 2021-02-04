<?php require_once 'template-parts/header.php' ?>

    <main id="main">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/image/cover_baobab.webp" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Kenya</h2>
                        <p>Possède une savane hors du commun, passant par une faune incluant lions, éléphants et rhinocéros.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/cover_gingko.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Gingko</h2>
                        <p>Des villes denses, des palais impériaux, des parcs nationaux montagneux ainsi que des milliers d'innovations technologiques.s</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/cover_araucaria.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Araucaria</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/cover_cocotier.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Cocotier</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <span aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>

        <section id="globe">

            <h1>NOS BIOMES</h1>

            <div class="flex-wrapper">
                <canvas class="globe" width="1800" height="1600"></canvas>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem excepturi exercitationem illum magni mollitia nam provident quaerat, ratione repudiandae. Culpa, eius fugiat ipsa iste labore natus non porro quasi qui quo, quod recusandae sunt tenetur veniam vero? Cum enim eos expedita inventore iste iusto, magnam nihil perferendis, placeat repudiandae rerum similique, suscipit voluptatem! Adipisci consequuntur cum error possimus quidem. A at cum eligendi veniam. Accusantium animi aspernatur corporis delectus dolore eos error est explicabo fugiat laudantium magnam necessitatibus odit officia qui, quisquam quod reprehenderit saepe, sunt temporibus totam unde ut voluptas! Eaque exercitationem iure labore nisi ullam vel veniam?</p>
            </div>
        </section>
    </main>

<?php require_once 'template-parts/footer.php' ?>

