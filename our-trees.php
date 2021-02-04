<?php

require_once 'data_base.php';

if ($_POST && isset($_POST['trees'])):
    setcookie('trees', serialize($_POST['trees']));
endif;

require_once 'template-parts/header.php';

?>

<section id="our_trees">
    <div class="container">

        <form method="POST" class="py-5">

            <div class="row g-4">

                <?php foreach ($trees as $index => $tree): ?>
                    <div class="col-12">
                        <a href="#" id="tree-<?php echo $index; ?>" class="tree"
                           style='<?php echo $tree['url']; ?>'<?php echo $tree['name']; ?>");'>
                            <div class="tree-body">
                                <h2 class="tree-title"><?php echo $tree['name']; ?></h2>
                                <span class="country"><?php echo $tree['country']; ?></span>

                                <div class="form-group">
                                    <label class="choose" for="select-tree-<?php echo $index; ?>">Sélectionner</label>
                                    <input type="checkbox" name="trees[]" id="select-tree-<?php echo $index; ?>"
                                           value="<?php echo $index; ?>">
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="button-wrapper pt-5 text-center">
                <button class="btn btn-secondary" type="submit">Ajouter au panier</button>
            </div>

        </form>

    </div>
</section>

<?php require_once 'template-parts/footer.php' ?>
