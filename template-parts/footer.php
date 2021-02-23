<footer class="footer" id="footer">

    <svg viewBox="2 0 1900 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 39V113.5L1920 108V39L1887.5 20.5L1836 39H1755.5L1509.5 0.5L1376 39L1307.5 20.5L1118 0.5L1047 53.5L908 39L836.5 20.5H698L580.5 39L399.5 7L202.5 39L99 7L0.5 39Z"
              fill="var(--bs-secondary)"/>
    </svg>

    <div class="bg-secondary text-center text-lg-start text-white">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">TREES</h5>
                    <div class="text-footer">
                        <p>
                            Nous avons trouver la solution au problème le plus controversé de 2021 : la pollution.
                            Pour nous sauver de la destruction de la planète Terre d'ici 30 ans, c'est aujourd'hui qu'il faut réagir.
                            Rejoignez Trees, plantez un arbre dans l'un de nos biômes, et ça n'est pas une espèce que vous sauverez,
                            c'est vous.
                        </p>
                    </div>
                    <div class="social-network">

                        <a href="#">
                            <img src="assets/svg/Icon%20awesome-instagram.svg"
                                 alt="icon_instagram"
                                 width="35px">
                        </a>
                        <a href="#">
                            <img src="assets/svg/Icon%20awesome-twitter.svg"
                                 alt="icon_twitter"
                                 width="35px"
                                 class="twitter">
                        </a>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Plan du site</h5>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="#!" class="text-white">Accueil</a>
                        </li>
                        <li>
                            <a href="#!" class="text-white">Nos arbres</a>
                        </li>
                        <li>
                            <a href="#!" class="text-white">A propos</a>
                        </li>
                        <li>
                            <a href="#" class="text-white">Acheter</a>
                        </li>
                        <li>
                            <a href="#" class="text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                    <h5 class="text-uppercase mb-0">Informations</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="./mentions-legales.php" class="text-white">Mentions légales</a>
                        </li>
                        <li>
                        <a href="./mentions-legales.php" class="text-white">Nos concours</a>
                        </li>
                    </ul>
                    <img width="100px" height="auto" src="assets/image/TREES.png" alt="">
                </div>
            </div>
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © Copyright 2021 | Site créé par
            <a class="text-white" href="index.php">TREES</a>
        </div>
    </div>
</footer>

<script async src="assets/js/app.js"></script>
<script>
    // HERO - NOS BIOMES - CAROUSEL

    (function() {

        var $$ = function(selector, context) {
            var context = context || document;
            var elements = context.querySelectorAll(selector);
            return [].slice.call(elements);
        };

        function _fncSliderInit($slider, options) {
            var prefix = ".fnc-";

            var $slider = $slider;
            var $slidesCont = $slider.querySelector(prefix + "slider__slides");
            var $slides = $$(prefix + "slide", $slider);
            var $controls = $$(prefix + "nav__control", $slider);
            var $controlsBgs = $$(prefix + "nav__bg", $slider);
            var $progressAS = $$(prefix + "nav__control-progress", $slider);

            var numOfSlides = $slides.length;
            var curSlide = 1;
            var sliding = false;
            var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
            var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

            var autoSlidingActive = false;
            var autoSlidingTO;
            var autoSlidingDelay = 5000; // default autosliding delay value
            var autoSlidingBlocked = false;

            var $activeSlide;
            var $activeControlsBg;
            var $prevControl;

            function setIDs() {
                $slides.forEach(function($slide, index) {
                    $slide.classList.add("fnc-slide-" + (index + 1));
                });

                $controls.forEach(function($control, index) {
                    $control.setAttribute("data-slide", index + 1);
                    $control.classList.add("fnc-nav__control-" + (index + 1));
                });

                $controlsBgs.forEach(function($bg, index) {
                    $bg.classList.add("fnc-nav__bg-" + (index + 1));
                });
            };

            setIDs();

            function afterSlidingHandler() {
                $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
                $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

                $activeSlide.classList.remove("m--before-sliding");
                $activeControlsBg.classList.remove("m--nav-bg-before");
                $prevControl.classList.remove("m--prev-control");
                $prevControl.classList.add("m--reset-progress");
                var triggerLayout = $prevControl.offsetTop;
                $prevControl.classList.remove("m--reset-progress");

                sliding = false;
                var layoutTrigger = $slider.offsetTop;

                if (autoSlidingActive && !autoSlidingBlocked) {
                    setAutoslidingTO();
                }
            };

            function performSliding(slideID) {
                if (sliding) return;
                sliding = true;
                window.clearTimeout(autoSlidingTO);
                curSlide = slideID;

                $prevControl = $slider.querySelector(".m--active-control");
                $prevControl.classList.remove("m--active-control");
                $prevControl.classList.add("m--prev-control");
                $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

                $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
                $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

                $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
                $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

                $activeSlide.classList.add("m--before-sliding");
                $activeControlsBg.classList.add("m--nav-bg-before");

                var layoutTrigger = $activeSlide.offsetTop;

                $activeSlide.classList.add("m--active-slide");
                $activeControlsBg.classList.add("m--active-nav-bg");

                setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
            };



            function controlClickHandler() {
                if (sliding) return;
                if (this.classList.contains("m--active-control")) return;
                if (options.blockASafterClick) {
                    autoSlidingBlocked = true;
                    $slider.classList.add("m--autosliding-blocked");
                }

                var slideID = +this.getAttribute("data-slide");

                performSliding(slideID);
            };

            $controls.forEach(function($control) {
                $control.addEventListener("click", controlClickHandler);
            });

            function setAutoslidingTO() {
                window.clearTimeout(autoSlidingTO);
                var delay = +options.autoSlidingDelay || autoSlidingDelay;
                curSlide++;
                if (curSlide > numOfSlides) curSlide = 1;

                autoSlidingTO = setTimeout(function() {
                    performSliding(curSlide);
                }, delay);
            };

            if (options.autoSliding || +options.autoSlidingDelay > 0) {
                if (options.autoSliding === false) return;

                autoSlidingActive = true;
                setAutoslidingTO();

                $slider.classList.add("m--with-autosliding");
                var triggerLayout = $slider.offsetTop;

                var delay = +options.autoSlidingDelay || autoSlidingDelay;
                delay += slidingDelay + slidingAT;

                $progressAS.forEach(function($progress) {
                    $progress.style.transition = "transform " + (delay / 1000) + "s";
                });
            }

            $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

        };

        var fncSlider = function(sliderSelector, options) {
            var $sliders = $$(sliderSelector);

            $sliders.forEach(function($slider) {
                _fncSliderInit($slider, options);
            });
        };

        window.fncSlider = fncSlider;
    }());

    /* not part of the slider scripts */

    /* Slider initialization
    options:
    autoSliding - boolean
    autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
    blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
    */
    fncSlider(".example-slider", {autoSlidingDelay: 4000});

    var $demoCont = document.querySelector(".demo-cont");

    [].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            $demoCont.classList.toggle("credits-active");
        });
    });

    document.querySelector(".demo-cont__credits-close").addEventListener("click", function() {
        $demoCont.classList.remove("credits-active");
    });

    document.querySelector(".js-activate-global-blending").addEventListener("click", function() {
        document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
    });</script>

</body>
</html>






