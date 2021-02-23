<?php

require_once 'data_base.php';

if ($_POST && isset($_POST['trees'])):
    setcookie('trees', serialize($_POST['trees']));
endif;

require_once 'template-parts/header.php';

?>
<body>
<section id="our_trees">
    <div class="container">
        <!--
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
        !-->

        <div class="cards-wrapper">
            <form method="POST">
                <div class="cards_wrapper row">
                    <?php foreach ($trees as $index => $tree): ?>
                        <div class="card-tree col-4">
                            <div class="content">
                                <!-- <a href="#" id="tree-<?php echo $index; ?>" class="tree">-->
                                <div class="img-card">
                                    <img class="tree-thumbnail" src="<?php echo $tree['img']; ?>" alt="">
                                </div>
                                <div class="tree-body">
                                    <h2 class="tree-title" style="margin-left: 1rem; margin-top: 1rem; text-transform: uppercase; font-weight: 550;"><?php echo $tree['name']; ?></h2>
                                    <span class="country" style="margin-left: 1rem;"><?php echo $tree['country']; ?> 5€</span>

                                    <div class="form-group">
                                        <label class="choose"
                                               for="select-tree-<?php echo $index; ?>"></label>
                                        <input type="checkbox" style="margin-left: 1rem; margin-bottom: 1rem;" name="trees[]" id="select-tree-<?php echo $index; ?>"
                                               value="<?php echo $index; ?>">
                                    </div>
                                </div>
                                <!-- </a>-->
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="btn btn-primary">Ajouter au panier</button>
                </div>

            </form>
        </div>
    </div>
</section>
</body>

<?php require_once 'template-parts/footer.php' ?>



