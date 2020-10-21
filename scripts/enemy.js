export default class EnemyBot {
    constructor(HP,weaponAttackPower, weaponSpeed,weaponName, botName){
      this.HP = HP;
      this.weaponAttackPower = weaponAttackPower;
      this.WeaponName = weaponName;
      this.weaponSpeed = weaponSpeed; 
      this.botName = botName;
      console.log(`Enemy bot ${botName} initialized` );
      this.attack = this.attack.bind(this);
    }

    attack(playerToAttack) {
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
    

        

        let willAttackFor = ( Math.floor(Math.random() * ((this.weaponAttackPower + 5) - (this.weaponAttackPower - 5) + 1)) +  (this.weaponAttackPower - 5));

        playerToAttack.HP = playerToAttack.HP - willAttackFor;

        console.log(`${this.botName} will attack ${playerToAttack.botName} for ${willAttackFor} damage `);

        let allGood = true;
        if(playerToAttack.HP > 0 )
        {
        
            this.startAttackCounter(playerToAttack);
        }
        else{
            console.log("PLAYER DESTROYED!!!! PLAYER DESTROYED!!!! PLAYER DESTROYED!!!!");
        }

      }

     
      startAttackCounter(playerToAttack){
        console.log("attack counter started");
        let thisClass = this;
        setTimeout(function(){ thisClass.attack(playerToAttack); }, this.weaponSpeed);
      }




}

