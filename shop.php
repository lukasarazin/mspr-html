<?php
require_once 'data_base.php';

$cart = unserialize($_COOKIE['trees']);

$cartItems = [];

foreach ($cart as $tree):
    $cartItems[] = $trees[$tree];
endforeach;

require_once 'template-parts/header.php';

$total = 0;

?>

<section id="shop">

    <img class="leave-top-right" src="assets/image/leave-right.png" alt="">
    <img class="leave-top-left" src="assets/image/leave-left.png" alt="">

    <div class="container">
        <h1>Votre panier</h1>
        <div class="row g-4">
            <table>
                <?php foreach ($cartItems

                as $item): ?>
                <tbody>
                <tr>
                    <div class="message-tree">
                        <td class="trees">· <?php echo $item['name']; ?>
                            <input placeholder="Inscrivez votre message" required type="text">
                    </div>
                    </td>
                    <td class="trees"><?php echo $item['price']; ?> €</td>
                </tr>
                <?php endforeach; ?>
                </tbody>
            </table>

            <div class="button-wrapper">
                <a class="btn btn-primary" href="./bill_succes.php">
                    Acheter
                </a>
            </div>

        </div>
    </div>
</section>


<?php require_once 'template-parts/footer.php' ?>


