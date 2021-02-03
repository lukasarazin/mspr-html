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
?>




<section id="our_trees">
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
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </div>
</section>











<?php require_once 'template-parts/footer.php' ?>
