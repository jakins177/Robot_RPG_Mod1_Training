
import EnemyBot from './enemy.js'
import PlayerBot from './player.js'

let firstEnemy = new EnemyBot(100,20, 15000, "short missile", "Can Opener");
    
let firstPlayer = new PlayerBot(250,5, 3000, "machine gun", "Determinator", "#player_1_fire_button");

$('#players_1, #players_2').click(function () {
    if (this.id == 'players_1') {
     //  alert('There will be 1 player. Get Ready!');
        startGame();
    }
    else if (this.id == 'players_2') {
      // alert('There will be 2 players. Get Ready!');
       startGame();
    }


    $(function() {
        $("#game_board").css("visibility", "visible");
      });

      $(function() {
        $("#player_choice").css("visibility", "hidden");
      });


 });



 $('#player_1_fire_button').click(function () {
    if (this.id == 'player_1_fire_button') {
     //  alert('There will be 1 player. Get Ready!');


     if(firstPlayer.HP > 0 && firstEnemy.HP > 0)
     {
     firstPlayer.attack(firstEnemy);
     }  
    
   }
 

 });

 function startGame() {

    let displayHealth = document.getElementById("player_health");
    displayHealth.innerHTML = firstPlayer.HP;

    let playerName = document.getElementById("player_name");
    playerName.innerHTML =  firstPlayer.botName;

    let enemyHealth = document.getElementById("enemy_health");
    enemyHealth.innerHTML = firstEnemy.HP;

    let enemyName = document.getElementById("enemy_name");
    enemyName.innerHTML = firstEnemy.botName;

    firstEnemy.startAttackCounter(firstPlayer);
    //firstPlayer.startAttackCounter();

    let fightDisplay = document.getElementById("fight_display");
    fightDisplay.innerHTML = `****ROUND 1 FIGHT!!****` + "<br>" + fightDisplay.innerHTML;



 }

