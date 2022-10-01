class Chicken extends MovableObject {
    energy = 100;
    y = 375;

    /* 
      y = 320; */
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_DYING = [

        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];
    chicken_sound = new Audio('audio/chicken.mp3');

    constructor(x) {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.x = x; // Zahl zwischen 0 und 500 Math ramdom generiert eine zufällige Zahl zwischen 0 und 1
        this.speed = 0.25 + Math.random() * 0.7;     
    }

    animate() {
        /* Hühner bewegen sich nach links */

        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DYING);
            }
            else { this.moveLeft(); }
        }, 1000 / 60);

        /* Hühner laufen (nur Animation und Ton) */


        setStoppableInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING)
            };
        }, 200);




        /*    setInterval(() => {
              this.chicken_sound.play();
          }, 4000) */
    }
}
