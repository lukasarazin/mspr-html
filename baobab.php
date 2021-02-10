<?php require_once 'template-parts/header.php' ?>

<main id="baobab">

    <h1>LE BAOBAB</h1>

    <div class="container">

        <div class="grid product">
            <div class="column-xs-12 column-md-7">
                <div class="product-gallery">
                    <div class="product-image">
                        <img class="active"
                             src="https://www.themeparkinsider.com/art/reviews/disneys-animal-kingdom.jpg">
                    </div>
                    <ul class="image-list">
                        <li class="image-item"><img
                                    src="https://www.themeparkinsider.com/art/reviews/disneys-animal-kingdom.jpg">
                        </li>
                        <li class="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4"></li>
                        <li class="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8"></li>
                    </ul>
                </div>
                <a href="./planter-mon-arbre.php"><button class="btn btn-primary">Planter mon Baobab</button></a>
            </div>

            <div>


                <section id="second">
                    <div class="description">
                            <h3>Description</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                eligendi eveniet harum, ipsum itaque iure labore optio possimus quia quidem,
                                sit ut voluptates. Animi commodi deserunt dignissimos dolor dolore dolores
                                eligendi enim error est illo impedit iure labore magni maxime natus nemo omnis
                                optio quaerat quia sit ullam veniam, vitae.</p>

                            <h3>Origine</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                eligendi eveniet harum, ipsum itaque iure labore optio possimus quia quidem,
                                sit ut voluptates. Animi commodi deserunt dignissimos dolor dolore dolores
                                eligendi enim error est illo impedit iure labore magni maxime natus nemo omnis
                                optio quaerat quia sit ullam veniam, vitae.</p>


                            <h3>Particularité</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                eligendi eveniet harum, ipsum itaque iure labore optio possimus quia quidem,
                                sit ut voluptates. Animi commodi deserunt dignissimos dolor dolore dolores
                                eligendi enim error est illo impedit iure labore magni maxime natus nemo omnis
                                optio quaerat quia sit ullam veniam, vitae.</p>

                    </div>

                    <iframe class="container" width="1156" height="538" src="https://www.youtube.com/embed/ebOLqfeFhg0" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                </section>
</main>

<script>
    const activeImage = document.querySelector(".product-image .active");
    const productImages = document.querySelectorAll(".image-list img");
    const navItem = document.querySelector('a.toggle-nav');

    function changeImage(e) {
        activeImage.src = e.target.src;
    }

    function toggleNavigation() {
        this.nextElementSibling.classList.toggle('active');
    }

    productImages.forEach(image => image.addEventListener("click", changeImage));
    navItem.addEventListener('click', toggleNavigation);
</script>

<?php require_once 'template-parts/footer.php' ?>



