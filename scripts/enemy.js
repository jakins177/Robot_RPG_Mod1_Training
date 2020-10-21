export default class EnemyBot {
    constructor(HP,weaponAttackPower, weaponSpeed,weaponName, botName){
      this.HP = HP;
      this.weaponAttackPower = weaponAttackPower;
      this.WeaponName = weaponName;
      this.weaponSpeed = weaponSpeed; 
      this.botName = botName;
      this.round = 1;
      console.log(`Enemy bot ${botName} initialized` );
      this.attack = this.attack.bind(this);
    }

    attack(playerToAttack) {


      if(this.HP > 0)
      {
        if(this.round == 1)
        {
        let audio = new Audio('./audio/missile_launch.mp3');
        audio.play();
        }
        else if(this.round == 2)
        {
          let audio = new Audio('./audio/missile_launch2.mp3');
          audio.play();
        }

        let willAttackFor = ( Math.floor(Math.random() * ((this.weaponAttackPower + 5) - (this.weaponAttackPower - 5) + 1)) +  (this.weaponAttackPower - 5));

        playerToAttack.HP = playerToAttack.HP - willAttackFor;


        let fightDisplay = document.getElementById("fight_display");

        fightDisplay.innerHTML = `${this.botName} will attack ${playerToAttack.botName} for ${willAttackFor} damage` + "<br>" + fightDisplay.innerHTML;
        console.log(`${this.botName} will attack ${playerToAttack.botName} for ${willAttackFor} damage `);


        let displayHealth = document.getElementById("player_health");
        displayHealth.innerHTML = playerToAttack.HP;

        let allGood = true;
        if(playerToAttack.HP > 0  )
        {
        
            this.startAttackCounter(playerToAttack);
        }
        else{
            fightDisplay.innerHTML = `****YOU LOST!!****` + "<br>" + fightDisplay.innerHTML;
            fightDisplay.innerHTML = `PLAYER DESTROYED!!!! PLAYER DESTROYED!!!! PLAYER DESTROYED!!!!` + "<br>" + fightDisplay.innerHTML;
            fightDisplay.innerHTML = `****GAME OVER****` + "<br>" + fightDisplay.innerHTML;
            console.log("PLAYER DESTROYED!!!! PLAYER DESTROYED!!!! PLAYER DESTROYED!!!!");
            $(function() {
              $("#six").css("visibility", "hidden");
            });

        }
      }

      }

      startAttackCounter(playerToAttack){
        console.log("attack counter started");
        let thisClass = this;
        setTimeout(function(){ thisClass.attack(playerToAttack); }, this.weaponSpeed);
      }


      loadNextRoundEnemy() {


        if(this.round == 2) {

          let fightDisplay = document.getElementById("fight_display");
  
          fightDisplay.innerHTML = `****YOU WIN!!****` + "<br>" + fightDisplay.innerHTML;
          fightDisplay.innerHTML = `****GAME OVER!!****` + "<br>" + fightDisplay.innerHTML;

          $(function() {
            $("#four").css("visibility", "hidden");
          });
               
        }
        else
        {

        let fightDisplay = document.getElementById("fight_display");

        this.round++;

        fightDisplay.innerHTML = `****ROUND 2 FIGHT!!****` + "<br>" + fightDisplay.innerHTML;



        let enemyImage = document.getElementById("enemy_postion");
        enemyImage.src = "./images/enemy2.jpg";


        this.botName = "Katana";
        let displayName = document.getElementById("enemy_name");
        displayName.innerHTML = this.botName;

        this.HP = 150;
        let displayHP = document.getElementById("enemy_health");
        displayHP.innerHTML = this.HP;
        
        this.weaponAttackPower = 25;

        this.weaponName = "Homing Missile";

        this.weaponSpeed = 14000;

        }

      }




}

