<?php

require_once 'data_base.php';

if ($_POST && isset($_POST['trees'])):
    setcookie('trees', serialize($_POST['trees']));
endif;

require_once 'template-parts/header.php';

?>

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
                                <a href="#" id="tree-<?php echo $index; ?>" class="tree">
                                    <img class="tree-thumbnail" src="<?php echo $tree['img']; ?>" alt="">
                                    <div class="tree-body">
                                        <h2 class="tree-title"><?php echo $tree['name']; ?></h2>
                                        <span class="country"><?php echo $tree['country']; ?></span>

                                        <div class="form-group">
                                            <label class="choose"
                                                   for="select-tree-<?php echo $index; ?>">Sélectionner</label>
                                            <input type="checkbox" name="trees[]" id="select-tree-<?php echo $index; ?>"
                                                   value="<?php echo $index; ?>">
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </form>
        </div>
    </div>
</section>

<?php require_once 'template-parts/footer.php' ?>



