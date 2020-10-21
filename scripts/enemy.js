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


        let audio = new Audio('./audio/missile_launch.mp3');
        audio.play();

        
    

        

        let willAttackFor = ( Math.floor(Math.random() * ((this.weaponAttackPower + 5) - (this.weaponAttackPower - 5) + 1)) +  (this.weaponAttackPower - 5));

        playerToAttack.HP = playerToAttack.HP - willAttackFor;


        
        console.log(`${this.botName} will attack ${playerToAttack.botName} for ${willAttackFor} damage `);


        let displayHealth = document.getElementById("player_health");
        displayHealth.innerHTML = playerToAttack.HP;

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

