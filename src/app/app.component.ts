import {Component, Inject} from '@angular/core';
import {GameService} from './game.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent {
  lock:boolean = false;

  constructor(public game: GameService, public snackBar: MatSnackBar){
  }

  playerClick(i)
  {
    if(!this.game.blocks[i].free || this.lock) // check if block already used
      return;

    this.game.changeFreeBlocks();  // reduce 1 block

    if(this.game.turn == 0){  // Player 1 turn.
      this. game.blocks[i].setValue("X");
    } else{
      this.game.blocks[i].setValue("O");
    }
    this.game.blocks[i].setFree();
    if(this.game.checkVictoryOrDraw()){
      this.openSnackBar("Winner:", "PLAYER "+(this.game.turn+1));
      this.game.players[this.game.turn].score+=1;
      this.lock=true;
      this.newGame();
      return;
    }
    else if(this.game.freeBlocks<=0){
      this.openSnackBar("Game:", "DRAW!");

      this.game.draw+=1;
      this.newGame();
      return;
    }
    else
      this.game.changeTurn();  // changing player turn.
  }

  newGame(){  // starting new game and saving scores.
    this.game.freeBlocks=9;
    this.game.initBlocks();
    this.lock=false;
    this.game.turn=0;
  }

  reset(event){   // restart the game (include score)
    this.game = new GameService();
  }

  openSnackBar(message: string, action: string) {  // snackbar material
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
