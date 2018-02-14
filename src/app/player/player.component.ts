import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

   score: number = 0;  //  saving the wins that the user achieve.

  constructor() { }

  ngOnInit() {
  }

}
