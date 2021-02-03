<?php require_once 'template-parts/header.php' ?>
<?php

$arbres = [
    'trees' => [
        'Baobab' => [
            'price' => 5,
            'picture' => 'Baobab.jpg',
            'country' => 'Kenya'],
    ]
];
?>





<section id="shop">
    <div class="container">
        <div class="bill_title">
            <h1>Mon panier</h1>
            <span>Ticket N°<?php echo date('YmdHis') . rand(1000, 9999); ?></span>
        </div>


        <div class="bill_content">
            <?php foreach ($arbres as $key => $arbre): ?>
                <div class="test">
                    <?php foreach ($arbre as $item_key => $item): ?>
                        <div class="row">
                            <div class="col-md-3"<img src="assets/image/<?php echo $item['picture']; ?>" alt=""></div>
                        <div class="col-md-9"<span class="name"><?php echo $item_key. ' ' . $item['country']; ?></span>

                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php require_once 'template-parts/footer.php' ?>
