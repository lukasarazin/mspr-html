<?php require_once 'template-parts/header.php' ?>

<main id="baobab">

    <h1>LE BAOBAB</h1>

    <div class="container">

        <div class="grid product">
            <div class="column-xs-12 column-md-7">
                <div class="product-gallery">
                    <div class="product-image">
                        <img class="active"
                             src="https://mk0darwinnutrit3vtub.kinstacdn.com/wp-content/uploads/2020/03/baobab.jpeg">
                    </div>
                    <ul class="image-list">
                        <li class="image-item"><img
                                    src="https://mk0darwinnutrit3vtub.kinstacdn.com/wp-content/uploads/2020/03/baobab.jpeg">
                        </li>
                        <li class="image-item"><img
                                    src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/1/4/0142dbcd83_126217_baobab-afrique.jpg">
                        </li>
                        <li class="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8"></li>
                    </ul>
                </div>
                <a href="./planter-mon-arbre.php">
                    <button class="btn btn-primary">Planter mon Baobab</button>
                </a>
            </div>

            <div>


                <section id="second">
                    <div class="description">
                        <h3>Description</h3>

                        <p>Le baobab est un arbre qui émerge de la savane, résiste à
                            des chaleurs intenses, peut vivre très vieux et mesurer
                            40 mètres de haut.</p>

                        <h3>Origine</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            eligendi eveniet harum, ipsum itaque iure labore optio possimus quia quidem,
                            sit ut voluptates. Animi commodi deserunt dignissimos dolor dolore dolores
                            eligendi enim error est illo impedit iure labore magni maxime natus nemo omnis
                            optio quaerat quia sit ullam veniam, vitae.</p>


                        <h3>Particularité</h3>

                        <p>En Afrique, le baobab est appelé "l'arbre magique", "l'arbre pharmacien" ou encore "l'arbre de la vie". Les différentes parties de cet arbre sont en effet utilisées dans l’alimentation et dans la pharmacopée traditionnelle africaine.

                            Les fruits, les graines et les feuilles des baobabs sont comestibles :
                            • les fruits appelés "pain de singe" ont un goût acidulé et sont très riches en vitamines et en calcium
                            • les graines se consomment grillées et on peut en extraire une huile alimentaire
                            • les jeunes pousses et les racines des jeunes plants se mangent comme des asperges
                            • les feuilles se consomment bouillies ou séchées.

                            Le baobab entre dans la composition de nombreux remèdes :
                            • la décoction de la pulpe sèche du fruit est utilisée comme antidiarrhéique et comme fébrifuge
                            • la décoction de feuille est utilisée contre le paludisme

                            L’écorce fibreuse de cet arbre sert à confectionner cordes et cordages. En revanche, son bois est trop mou et gorgé d'eau pour être utilisé.</p>

                    </div>

                    <iframe class="container" width="1156" height="538" src="https://www.youtube.com/embed/ebOLqfeFhg0"
                            frameborder="0"
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



