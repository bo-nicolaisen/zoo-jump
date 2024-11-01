import myBg from "./img/bg.png";
import myGochiImg from "./img/gochi.png";
import myFoodImg from "./img/food.png";
import myPlatformImg from "./img/platform.png";

import * as LocalData from "../localstorage/localstorage_module.js";
import Gochi from "./gochi.js";
import Food from "./food.js";

export default class GochiScene extends Phaser.Scene {
  constructor() {
    super({ key: "GochiScene" });
  }

  preload() {
    this.load.image("bg", myBg);
    this.load.image("gochiImg", myGochiImg);
    this.load.image("food", myFoodImg);
    this.load.image("platform", myPlatformImg);
  }

  create() {
    // background
    this.bg = this.add.image(0, 0, "bg");
    this.bg.setScrollFactor(1, 0)

    this.bg.setOrigin(0, 0);

    /* width: 390,
height: 844, */

    this.setupPlatforms();

    // add gochi
    this.myGochi = new Gochi(
      this,
      LocalData.ReadLocalStorageData(),
      this.platforms
    );
   

   

    // this.dropFood()
  }

  setupPlatforms() {
    // create a group of static platforms
    this.platforms = this.physics.add.staticGroup();

    // create 5 platforms from the group

    let myY=844
    for (let i = 0; i < 5; ++i) {
      const x = Phaser.Math.Between(0, 390);
      const y = myY-(150*i) ;

      console.log("y",y);
        console.log("x",x);
      
      const platform = this.platforms.create(x, y, "platform");
     
      const body = platform.body;
      body.updateFromGameObject();
    }
  }

  dropFood() {
    new Food(this);
  }

  update() {
    this.platforms.children.iterate((child) => {
      const platform = child;

      const scrollY = this.cameras.main.scrollY;
      if (platform.y >= scrollY + 844) {

       
        platform.y =  platform.y-844;
        platform.x = Phaser.Math.Between(0, 390);
//platform.setScale(Phaser.Math.Between(1, 2))
       /*  console.log("platform.y", platform.y);
        console.log("platformx", platform.x); */
    
        
        platform.body.updateFromGameObject();
      }
    });

    this.myGochi.updateGochi();
  }
}
