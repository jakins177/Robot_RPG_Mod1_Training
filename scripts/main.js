
import EnemyBot from './enemy.js'
import PlayerBot from './player.js'

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

 function startGame() {

    let firstEnemy = new EnemyBot(1000,20, 15000, "quick missile", "Can Opener");
    

    let firstPlayer = new PlayerBot(250,5, 3000, "machine gun", "Determinator");

    firstEnemy.startAttackCounter(firstPlayer);
    firstPlayer.startAttackCounter();

        

 }
