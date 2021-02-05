<?php
require_once 'data_base.php';

$cart = unserialize($_COOKIE['trees']);

$cartItems = [];

foreach ($cart as $tree):
    $cartItems[] = $trees[$tree];
endforeach;

require_once 'template-parts/header.php';
?>

<section id="our_trees">
    <div class="container">

        <h1>Shop</h1>

        <div class="row g-4">

            <?php foreach ($cartItems as $item): ?>
                <div class="col">
                    <div class="card card-body">
                        <h3><?php echo $item['name']; ?></h3>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>


    </div>
</section>

<?php require_once 'template-parts/footer.php' ?>


