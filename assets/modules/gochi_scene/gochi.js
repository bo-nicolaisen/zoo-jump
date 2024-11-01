
export default class Gochi extends Phaser.GameObjects.Container {

  #myGochi;
  #myData;
  #myScene; //the scene that called this class

  constructor (scene, myData) {
    super(scene, scene.scale.width / 2, scene.scale.height - 200, [])
    this.#myScene = scene;
    this.state = 1;

    this.#myData = myData;

    this.name = myData.name;
    this.state = myData.state;
    this.mood = myData.mood;
    this.hunger = myData.hunger;
    this.lastFeed = myData.lastFeed;
    this.lastInteraction = myData.lastInteraction;

    // adds the container to the calling scene
    this.scene.add.existing(this);

    console.log("Hello from Gochi");

    this.#myGochi = this.scene.add.sprite(0, 0, "gochiImg");

    this.add([this.#myGochi]);

  }


  updateGochi() {
    console.log("update" + this.name);
  }
}
