export default class PlayerBot {
    constructor(HP,weaponAttackPower, weaponSpeed,weaponName, botName, fireButtonID){
      this.HP = HP;
      this.weaponAttackPower = weaponAttackPower;
      this.WeaponName = weaponName;
      this.weaponSpeed = weaponSpeed; 
      this.botName = botName;
      this.fireButtonID = fireButtonID;
      console.log(`Player bot ${botName} initialized` );
      this.attack = this.attack.bind(this);
    }


    

    attack(enemyToAttack) {
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
        $(function() {
            $("#player_1_fire_button").css("visibility", "hidden");
          });


          let max = this.weaponAttackPower + 2; 
          let min = this.weaponAttackPower - 2;

          let willAttackFor = ( Math.floor(Math.random() * (max - min + 1)) +  min);
          enemyToAttack.HP = enemyToAttack.HP - willAttackFor;

          console.log(`${this.botName} will attack ${enemyToAttack.botName} for ${willAttackFor} damage `);

        let allGood = true;
        if(enemyToAttack.HP > 0 )
        {
        
            this.startAttackCounter();
        }
        else{
            console.log("ENEMY DESTROYED!!!! ENEMY DESTROYED!!!! ENEMY DESTROYED!!!!");
        }

      }

      showAttackButton() {


        $(function() {
            $("#player_1_fire_button").css("visibility", "visible");
          });

          console.log("player ready to attack");
      }

     
      startAttackCounter(){
        console.log("player attack counter started");
        let thisClass = this;
        setTimeout(function(){ thisClass.showAttackButton(); }, this.weaponSpeed);
      }




}