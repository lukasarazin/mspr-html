<?php require_once 'template-parts/header.php'?>
<?php
$products = [
    'arbres' => [
        'Baobab' => [
            'price' => 5,
            'country'=>'Kenya'],

        'Gingko' => [
            'price' => 5,
            'country'=>'Japon'],

        'araukariia' => [
            'price' => 5,
            'country'=>'Argentine'],

        'cocotier' => [
            'price' => 5,
            'country'=>'Thaiti'],
    ]
];

$total = 0;
?>




<section id="our_trees">
    <form method="post">
        <div class="container">
            <?php foreach ($products as $key => $product): ?>
                <?php foreach ($product as $item_key => $item): ?>
                    <div class="content">
                        <div class="trees effect">
                            <div class="tree-img" style='background-image: url("https://storage.journaldemontreal.com/v1/dynamic_resize/sws_path/jdx-prod-images/39f11c85-f901-4b8c-913c-57052f831738_ORIGINAL.jpg?quality=80&size=1200x&version=0");'>
                            </div>
                            <div class="tree-name">
                                <h2 class="tree-title"><?php echo $item_key; ?></h2>
                                <span class="country"><?php echo $item ['country']; ?></span>

                                <div class="choose">
                                    <label class="choose" for="<?php echo $item_key; ?>">Ajouter au panier</label>
                                    <input type="checkbox" name="<?php echo $key?>" id="<?php echo $item_key; ?>" value="<?php echo $item_key; ?>">
                                </div>

                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endforeach; ?>
            <div>
                <button class="secondary-button" type="submit">Envoyer</button>
            </div>
        </div>
    </form>
</section>

<?php if ($_POST): ?>
    <?php $prices = $_POST ?>
    <div class="bill">
        <h1>Ticket N°<?php echo date('YmdHis') . rand(1000, 9999); ?></h1>
        <table border="1" width="100%">
            <tbody>
            <?php if (isset ($prices ['arbres']) && $prices['arbres']): ?>
                <tr>
                    <td>Graine de <?php echo $prices['arbres'];?></td>
                    <td  class="ht"><?php echo $total = $total + $products['arbres'][$prices['arbres']]['price']; ?> € HT</td>
                </tr>
            <?php endif; ?>

            </tbody>
        </table>
    </div>
<?php endif; ?>











<?php require_once 'template-parts/footer.php' ?>
