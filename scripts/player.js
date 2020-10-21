export default class PlayerBot {
    constructor(HP,weaponAttackPower, weaponSpeed,weaponName, botName){
      this.HP = HP;
      this.weaponAttackPower = weaponAttackPower;
      this.WeaponName = weaponName;
      this.weaponSpeed = weaponSpeed; 
      this.botName = botName;
      console.log(`Player bot ${botName} initialized` );
      this.attack = this.attack.bind(this);
    }

    attack() {
        // console.log("%c You are attacking an alien!", 'color:green');
        // let chanceAccuracy = Math.random();
    
        // // console.log(`chance accuracy is ${chanceAccuracy}`);
    
        // if (chanceAccuracy > this.accuracy) {
        //   console.log("%c You MISSED the alien!!!", 'color:red');
    
        // } else {
        //   console.log("%c You HIT the alien!!!", 'color:green');
        //   alienShip.hull -= this.firepower;
        //   console.log(`%c You have done ${this.firepower} damage`,'font-style: italic; background: azure; border: 1px solid grey;');
        //   console.log(`%c The Alien has ${alienShip.hull} remaining`, 'font-style: italic;' );
    
        // }
    

        console.log(`${this.botName} can attack`);

        let allGood = true;
        if(allGood)
        {
        
            this.startAttackCounter();
        }
        else{
            console.log("something's bad");
        }

      }

     
      startAttackCounter(){
        //console.log("attack counter started");
        let thisClass = this;
        setTimeout(function(){ thisClass.attack(); }, this.weaponSpeed);
      }




}