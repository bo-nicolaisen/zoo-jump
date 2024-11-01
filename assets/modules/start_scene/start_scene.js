import Game from '../../../main.js';
import * as LocalData from '../localstorage/localstorage_module.js';

export default class myTest extends Phaser.Scene {

    constructor () {
        super({ key: 'StartScreen' });
        this.myGochi = null;
    }

    preload() {

       //load packs here
    }

    create() {



        this.myGochi = LocalData.ReadLocalStorageData();

        if (this.myGochi == null) {
            this.newGochi();
        } else {
            Game.scene.start('GochiScene', { mode: "active" });
        }



    }

    newGochi() {
        console.log('New gochi');
        let newGochi = {
            name: 'Gochi',
            state: 50,// 0 = dead, 100 = happy
            mood: 'happy',
            hunger: 0,// 0 = full, 100 = starving
            lastFeed: Date.now(),
            lastInteraction: Date.now()
        }
        LocalData.default(newGochi);
    }

}