<?php require_once 'template-parts/header.php' ?>
    <div class="container">
        <div class="bill_title">
            <h1>Mon panier</h1>
            <span>Ticket N°<?php echo date('YmdHis') . rand(1000, 9999); ?></span>
        </div>
        <div class="bill_content">
            <div class="row">
                <div class="col-md-3">
                    <img src="assets/image/" alt="">
                    <span></span>
                </div>
                <div class="col-md-9">zeze</div>
            </div>
        </div>
    </div>
<?php require_once 'template-parts/footer.php' ?>