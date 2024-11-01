export default class Gochi extends Phaser.GameObjects.Container {
  #myGochi;
  #myData;
  #myScene; //the scene that called this class

  constructor(scene, myData,platforms) {
   // super(scene, scene.scale.width / 2, scene.scale.height - 200, []);
   super(scene,0,0, []);
    this.#myScene = scene;
    this.state = 1;
this.platforms = platforms;
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

    this.#myGochi = this.scene.physics.add.sprite(this.scene.scale.width*0.5,0, "gochiImg");
    
   this.#myGochi.setScale(0.5);
   //this.#myGochi.setCollideWorldBounds(true);

    this.scene.physics.add.collider(this.platforms, this.#myGochi);

    this.#myGochi.body.checkCollision.up = false
    this.#myGochi.body.checkCollision.left = false
    this.#myGochi.body.checkCollision.right = false

    this.#myGochi.setBounce(0.5);

    this.add([this.#myGochi]);
    this.grounded=1
   

    //this.scene.cameras.main.followOffset.set(600, -1000);
    
    this.scene.cameras.main.startFollow(this.#myGochi);
    this.scene.cameras.main.setDeadzone(this.scene.scale.width * 1.5)

    this.#myGochi.setInteractive({ draggable: true });

    this.#myGochi.on(
      "drag",
      function (pointer, dragX, dragY) {
        this.#myGochi.setX(dragX);
      },
      this
    );

    this.#myGochi.on(
      "dragend",
      function (pointer, dragX, dragY, dropped) {
        // this.#myGochi.setInteractive({ draggable: false })
        this.jump();
      },
      this
    );
  }

  jump() {
   if (this.grounded==1){
    this.#myGochi.setVelocityY(-800);
    this.grounded=0
   }
    
  }

  updateGochi() {
   
    const touchingDown = this.#myGochi.body.touching.down

    if (touchingDown)
    {
    // this makes the bunny jump straight up
   this.#myGochi.setVelocityY(0)
   this.grounded=1
   }else{
      this.grounded=0
   }

  }
}
