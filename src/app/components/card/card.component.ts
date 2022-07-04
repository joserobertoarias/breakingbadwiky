import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
//import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  personaje!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
