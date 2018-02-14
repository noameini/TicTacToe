import { Injectable } from '@angular/core';
import {BlockComponent} from './block/block.component';
import {PlayerComponent} from './player/player.component';

@Injectable()
export class GameService {

  turn: number = 0;  // changing between 2 players.
  players = [];  // arr that contain 2 players.
  draw: number =0;  // saving Draw.
  blocks = [];  // 9 blocks for board.
  freeBlocks = 9;


  constructor() {
    this.initBlocks();
    this.initPlayers();
  }

  initBlocks(){  // initialize 9 blocks for the board.
     this.blocks = [];

     for (var i=1;i<=9;i++){
       var block = new BlockComponent();
       block.free=true;
       block.value="";
       this.blocks.push(block);
     }
  }

  initPlayers(){
    this.players = [];

    var player1 = new PlayerComponent();  //create player 1
    var player2 = new PlayerComponent();  // create player 2

    this.players.push(player1);
    this.players.push(player2);
}

  changeTurn(){
    if(this.turn==0)
      this.turn = 1;
    else
      this.turn = 0;
  }

  changeFreeBlocks(){
    this.freeBlocks--;
  }

  checkVictoryOrDraw(){ // check victory or draw

    if((!this.blocks[0].free && !this.blocks[1].free && !this.blocks[2].free && this.blocks[0].value == this.blocks[1].value && this.blocks[1].value == this.blocks[2].value)
      || (!this.blocks[3].free && !this.blocks[4].free && !this.blocks[5].free && this.blocks[3].value == this.blocks[4].value && this.blocks[4].value == this.blocks[5].value)
      || (!this.blocks[6].free && !this.blocks[7].free && !this.blocks[8].free && this.blocks[6].value == this.blocks[7].value && this.blocks[7].value == this.blocks[8].value)
      || (!this.blocks[0].free && !this.blocks[3].free && !this.blocks[6].free && this.blocks[0].value == this.blocks[3].value && this.blocks[3].value == this.blocks[6].value)
      || (!this.blocks[1].free && !this.blocks[4].free && !this.blocks[7].free && this.blocks[1].value == this.blocks[4].value && this.blocks[4].value == this.blocks[7].value)
      || (!this.blocks[2].free && !this.blocks[5].free && !this.blocks[8].free && this.blocks[2].value == this.blocks[5].value && this.blocks[5].value == this.blocks[8].value)
      || (!this.blocks[0].free && !this.blocks[4].free && !this.blocks[8].free && this.blocks[0].value == this.blocks[4].value && this.blocks[4].value == this.blocks[8].value)
      || (!this.blocks[2].free && !this.blocks[4].free && !this.blocks[6].free && this.blocks[2].value == this.blocks[4].value && this.blocks[4].value == this.blocks[6].value))
      return true;
    else
      return false;

  }



}
