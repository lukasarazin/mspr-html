
<?php require_once 'template-parts/header.php' ?>

<main id="main-conf">

    <section id="top-conf">

        <h1>Nos conférences</h1>

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

    </section>

    <section id="blog-cards" class="container-fluid">
        <div class="row">
            <div class="blog-card col-lg-6">
                <div class="meta">
                    <div class="photo"
                         style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
                    <ul class="details">
                        <li class="author"><a href="#">Salle 1</a></li>
                        <li class="date">04.10.21</li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Oscar D.</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description5">
                    <h1>Le changement du monde</h1>
                    <h2>Ouvrir une nouvelle porte au futur</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
                        obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                        sit.</p>
                    <p class="read-more">
                        <a href="#">Voir plus</a>
                    </p>
                </div>
            </div>
            <div class="blog-card alt col-lg-6">
                <div class="meta">
                    <div class="photo"
                         style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"></div>
                    <ul class="details">
                        <li class="author"><a href="#">Salle 2</a></li>
                        <li class="date">05.10.21</li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Luka S.</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description5">
                    <h1>L'intérêt des arbres</h1>
                    <h2>Plutôt que de vivre, il faut survivre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati
                        enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p class="read-more">
                        <a href="#">Voir plus</a>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="suit" class="container">
        <h2>Trees revient en 2021 !</h2>

        <div class="row">
            <div class="col-lg-6">
                <p>D’ici à fin 2021, il va tout de même se passer pas mal de choses chez Trees, en plein coeur de
                    l’Ile de Nantes. 2021 sera en effet occupée par un déménagement, une programmation annuelle
                    renouvelée de plus 150 événements et une foultitude d’autres projets.

                    <br><br>Actuellement, avec la
                    crise sanitaire, nos conférences sont entièrement maintenues
                    en ligne. Chaque semaine, notre équipe vous propose des vidéos ou live pour en apprendre
                    davantage
                    sur nous et nos ambitions. Nos deux principales conférences se déroulernt
                    comme prévu, devant vous, proche de vous et non dérrière un écran. </p>
            </div>
            <div class="col-lg-6">
                <p>Depuis la première édition, en juin 2020, nous avons eu à coeur de vous proposer
                    chaque année un événement toujours plus ambitieux. Il nous apparaît cependant que
                    les curseurs sont aujourd’hui poussés à leur maximum (la barre des 11 500
                    participants·es a même été franchie cette année).<br><br>Nous sommes
                fières de continuer à vous partager nos efforts et nouveautés à travers nos réseaux sociaux et
                 notre newsletter. Nos conférences auront lieu en fin d'année, devant vous, comme chaque année. Si vous souhaitez vous abonner et recevoir nos articles pour en apprendre plus sur notre projet,
                 c'est possible. </p>
            </div>
        </div>

        <h4><em>Nous vous présenterons tout ceci d’ici à la fin de l’année, et on ne vous cache pas que de notre
                côté, on a hâte d’y être.</em></h4>

        <button class="btn btn-primary" style="margin: auto; display: block">S'abonner à la newletter</button>
    </section>

    <section id="meet-up">

        <div class="container-fluid">

            <div class="row numero1">
                <div class="col-lg-4"><img class="img-conf"
                                           src="https://media.parisladefense.com/9WfhgBi85lOJp0MA41bVr-QyIxI=/fit-in/1200x0/dossiers/evenementiel/garden-parvis-2019-j1-c-carlos-ayesta-140.JPG"
                                           height="350" width="494" alt=""></div>
                <div class="col-lg-4"><h2>10 000</h2><h4>Participants</h4>
                    <p>Startups, collaborateurs·rices porteurs·euses de projets, corporates, étudiants·es,
                        journalistes ou investisseurs·euses</p></div>
                <div class="col-lg-4"><img class="img-conf4" src="http://www.peignee-verticale.com/wp-content/uploads/2020/04/Brooks-RHTeam-Ambiance_%C2%A9_Peignee-Verticale_RBlomme-9568-800x800.jpg" height="700" width="494"
                                           alt=""></div>
            </div>

            <div class="row numero2">
                <div class="col-lg-2"><h2>70</h2><h4>Conférences</h4>
                    <p>À travers 2 univers : Le changement constant du monde et l'intérêt qu'ont les
                    arbres dans ce changement.</p></div>
                <div class="col-lg-4"><img class="img-conf"
                                           src="https://p1.storage.canalblog.com/23/42/1486001/121377041.jpg"
                                           height="350" width="494" alt=""></div>
                <div class="col-lg-2"><h2>30</h2><h4>Speakers</h4>
                    <p>Inspirés·es, experts·es, talentueux·euses, ils·elles viennent délivrer des messages
                        différents à tous nos publics.</p></div>
            </div>

            <div class="row numero3">
                <div class="col-lg-3"><img class="img-conf" src="https://jeromeviaud.com/wp-content/uploads/2018/09/Conf%C3%A9rence-l%E2%80%99arbre-une-for%C3%AAt-d%E2%80%99id%C3%A9es-re%C3%A7ues-0-2-e1536914424289.jpg" height="350" width="370"
                                           alt=""></div>
                <div class="col-lg-3"><h2>500 000</h2><h4>Abonnés Twitter</h4>
                    <p>Incontestablement, le meilleur réseau pour faire parler de vous et montrer que vous aider le monde !</p></div>
                <div class="col-lg-3"><img class="img-conf"
                                           src="https://static.wixstatic.com/media/a27d24_feb617eec5fb4095ad0284444b6cbb6a~mv2.jpg/v1/fill/w_506,h_409,al_c,q_90/a27d24_feb617eec5fb4095ad0284444b6cbb6a~mv2.jpg"
                                           height="350" width="370" alt=""></div>
                <div class="col-lg-3"><h2>30 000</h2><h4>Actes d'engagements</h4>
                    <p></p></div>
            </div>
        </div>

    </section>

    <section id="gifs">

        <h3>Notre actualité</h3>

        <section class="cards container">
            <article class="card card--1">

                <div class="card__img"></div>
                <a href="#" class="card_link">
                    <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                    <span class="card__category">Voyages</span>
                    <h3 class="card__title">Période de covid-19</h3>
                    <span class="card__by">de <a href="#" class="card__author"
                                                 title="author">Vladimir Patine</a></span>
                </div>
            </article>


            <article class="card card--2">
                <div class="card__img"></div>
                <a href="#" class="card_link">
                    <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                    <span class="card__category">Dômes</span>
                    <h3 class="card__title">Découvrez Tahiti</h3>
                    <span class="card__by">de <a href="#" class="card__author" title="author">François Pays-Bas</a></span>
                </div>
            </article>

            <article class="card card--3">

                <div class="card__img"></div>
                <a href="#" class="card_link">
                    <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                    <span class="card__category">Achats</span>
                    <h3 class="card__title">Nouvelles espèces</h3>
                    <span class="card__by">de <a href="#" class="card__author"
                                                 title="author">Barack Obamako</a></span>
                </div>
            </article>


        </section>

    </section>

</main>
<?php require_once 'template-parts/footer.php' ?>

