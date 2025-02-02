/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg-tree-3', 'assets/level/background-1/bg-tree-3.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gtrees', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gWB', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox', 'assets/level/ground/g-box-2.png');
        this.load.image('gVine', 'assets/level/ground/g-vine-a.png');
        this.load.image('gRight2', 'assets/level/ground/g-right.png');
        this.load.image('gRight3', 'assets/level/ground/g-right.png');
        this.load.image('Grasss', 'assets/level/ground/g-grass-4.png');
        this.load.image('Grasss2', 'assets/level/ground/g-grass-4.png');
        this.load.image('Ftree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gLeft2', 'assets/level/ground/g-left.png');
        this.load.image('gMid5', 'assets/level/ground/g-mid.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-2.png');
        this.load.image('z4', 'assets/level/ground/z4.png');
        this.load.image('z8', 'assets/level/ground/z8.png');
        this.load.image('z14', 'assets/level/ground/z14.png');


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let y=1;y<=3;y++){
            this.load.image('filterFilm'+y, 'assets/level/filters/film/frame-' + y + '.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let a=1;a<=3;a++) {
            this.load.image('bg-animation-' + a, 'assets/level/background-2/bg-animation/bg-animation-'+a+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bgAnimation = this.add.sprite(0, 0, 'bgAnimation1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'animation',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimation.play('animation');

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-120,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        let bg2Terrain1=this.add.image(680,100, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(400,-50, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.angle=0; //pencher l'arbre de -5 degrès
        let bg2Tree3=this.add.image(700,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10;

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bgtree1=this.add.image(-70,-100, 'bg-tree-1').setOrigin(0,0);
        this.bg1Container.add(bgtree1);
        let bgtree3=this.add.image(120,-250, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bgtree3);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-400,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         *
         * Zombi
         * @type {Phaser.GameObjects.TileSprite}
         */
        let z4=this.add.image(475,178, 'z4').setOrigin(0,0);
        z4.angle=12;
        this.groundContainer.add(z4);

        let z8=this.add.image(970,200, 'z8').setOrigin(0,0);
        z8.angle=10;
        this.groundContainer.add(z8);

        let z14=this.add.image(100,200, 'z14').setOrigin(0,0);
        z14.angle=10;
        this.groundContainer.add(z14);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(250,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.setScale(0.7)

        let tree3=this.add.image(30,375, 'gTree3').setOrigin(0,1);
        this.groundContainer.add(tree3);
        tree3.setScale(0.7)

        let tree1=this.add.image(900,375, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.setScale(0.7)
        tree1.angle=-10
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(-150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Herbe marine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass7=this.add.image(425,400, 'g-grass-4').setOrigin(0,0);
        gGrass7.setScale(2.5)
        this.groundContainer.add(gGrass7);

        let gGrass8=this.add.image(575,400, 'g-grass-4').setOrigin(0,0);
        gGrass8.setScale(2.5)
        this.groundContainer.add(gGrass8);

        let gGrass9=this.add.image(685,400, 'g-grass-4').setOrigin(0,0);
        gGrass9.setScale(2.5)
        this.groundContainer.add(gGrass9);
        /**
         * De l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWater=this.add.image(425,385, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        /**
         * Rocher
         * @type {Phaser.GameObjects.Image}
         */
        let gStone2=this.add.image(350,335, 'gStone2').setOrigin(0,0);
        this.groundContainer.add(gStone2);

        let gStone4=this.add.image(790,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone4);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gRight2=this.add.image(975,364, 'gRight2').setOrigin(0,0);
        this.groundContainer.add(gRight2);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(775,365, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        /**
         * Herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass5=this.add.image(175,300, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass3=this.add.image(105,300, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass6=this.add.image(875,325, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass6);

        let Grasss=this.add.image(980,320, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(Grasss);
        /**
         *
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gMushroom1=this.add.image(140,268, 'gMushroom1').setOrigin(0,0);
        gMushroom1.angle=10;
        this.groundContainer.add(gMushroom1);
        /**
         * WB
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWB=this.add.image(425,300, 'gWB').setOrigin(0,0);
        gWB.setScale(0.8)
        this.groundContainer.add(gWB);
        /**
         * Caisse
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gBox=this.add.image(525,293, 'gBox').setOrigin(0,0);
        gBox.setScale(0.6)
        gBox.angle=5
        this.groundContainer.add(gBox);
        /**
         * Vine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gVine=this.add.tileSprite(570,-3, 20, 400,'gVine').setOrigin(0,0);
        gVine.setScale(0.5)
        this.groundContainer.add(gVine);
        let gVine2=this.add.tileSprite(600,-3, 20, 250,'gVine').setOrigin(0,0);
        gVine2.setScale(0.5)
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimation1.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        //this.bg2Container.scrollFactorX=0.2;
        //this.bg1Container.scrollFactorX=0.4;
        //this.groundContainer.scrollFactorX=1;
        this.bg2Container.scrollFactorX=2;
        this.bg1Container.scrollFactorX=4;
        this.groundContainer.scrollFactorX=10;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
