function play(){

  // board states include: pregame, xturn, oturn, win, and tie
  var board_state = 'pregame'
  console.log(board_state);

  var spaces = document.querySelectorAll('.space');

  var play_button = document.querySelector('.play.button');

  var turn_message = document.querySelector('.turn');

  // Desginates whether the game is currently in play
  var is_turn = false;

  // players may be none, X, or O
  var player = "none";

  play_button.addEventListener('click', startGame);

  // updates to let players know who's turn it is
  function updateTurnOnBoard(){
    if (board_state == 'pregame'){
      turn_message.innerHTML = "Click Start to play!";
    }
    else if (board_state == 'xturn') {
      turn_message.innerHTML = "X's turn!";
    }
    else if (board_state == 'oturn') {
      turn_message.innerHTML = "O's turn!";
    }
    else if (board_state == 'win') {
      turn_message.innerHTML = "Winner!";
    }
    else if (board_state == 'tie') {
      turn_message.innerHTML = "Tie!";
    }
    else {
      turn_message.innerHTML = "We seem to be having some issues...";
    }
    console.log(turn_message);
  }

  // updates player based on board state
  function updatePlayerFromBoardState(){
    if (board_state == 'xturn' || 'oturn'){
      is_turn = true;
      console.log("is_turn is " + is_turn);
      if (board_state == 'xturn'){
        player = "X";
        console.log("player turn: " + player)
        return player, is_turn;
      }
      else if (board_state == 'oturn'){
        player = "O";
        console.log("player turn: " + player)
        return player, is_turn;
      }
    }
    else{
      is_turn = false;
      player = "none";
      console.log("player turn: " + player)
      return player, is_turn;
    }
  }

  // updates board state on turn swtich
  function switchTurn(){
    if (is_turn == true){
      if (player == "X"){
        board_state = "oturn";
      }
      else if (player == "O"){
        board_state = "xturn";
      }
      else{
        console.log("error! It's no one's turn to swtich from!")
      }
      updateTurnOnBoard();
      updatePlayerFromBoardState();
      listenForMove();
      return board_state;
    }
    else{
      console.log("error! It's not a turn but I'm trying to switch!")
    }
  }

function checkWin(){
  return;
}

  function makeMove(e){
    console.log("player " + player + " made a move!");
    var space = e.currentTarget;
    space.innerHTML = player;
    checkWin();
    switchTurn();
  }

  function listenForMove(){
    if (is_turn == true){
      for (i = 0; i < spaces.length; i++){
        spaces[i].addEventListener('click', makeMove)
      }
    }
  }

  function startGame(){
    if (board_state == 'pregame'){
      board_state = 'xturn';
      console.log(board_state);
      updateTurnOnBoard();
      updatePlayerFromBoardState();
      listenForMove();
      return board_state;
    }
    else{
      return;
    }
  }

} //end play function

play();
