
export default class Food extends Phaser.GameObjects.Container {

  #myFood;



  constructor (scene, myData) {
    super(scene, scene.scale.width * 0.5, scene.scale.height - (scene.scale.height - scene.scale.height * 0.1), [])


    // adds the container to the calling scene
    this.scene.add.existing(this);

    console.log("food");

    this.#myFood = this.scene.physics.add.sprite(0, 0, "food");
    this.#myFood.setCollideWorldBounds(true);

    this.#myFood.setDebugBodyColor(0x00ff00);
    this.#myFood.setBounce(0.5);
    //this.#myFood.setAngularVelocity(200);
    this.#myFood.setFriction(4);
    //this.#myFood.setAngularDrag(50);

    this.#myFood.setCircle(50, 0, 0);
    this.add([this.#myFood]);
    this.depth = 2;
  }

}
