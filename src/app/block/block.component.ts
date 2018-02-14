import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  free: boolean = true; // check if the block used.
  value: string = "";   // saving X or O.

  setValue(val) {
    this.value = val;
  }

  setFree(){
    this.free=false;
  }

  constructor() { }

  ngOnInit() {
  }

}
