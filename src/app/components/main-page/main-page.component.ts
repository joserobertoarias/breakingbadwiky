import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
//import { Personaje } from 'src/app/models/personaje';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Character[] = [];
  personajesOriginal: Character[] = [];
  //personajes: Personaje[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

   this.getPersonajes();
  }

 getPersonajes(){
    this.dataService.getCharacters().subscribe((data) => {

      this.personajes = data;
      this.personajesOriginal = this.personajes;

      /*this.personajes = data.map(r => {
        return {
          char_id: r.char_id,
          name: r.name,
          birthday: r.birthday,
          occupation: r.occupation,
          img: r.img,
          status: r.status,
          nickname: r.nickname,
          appearance: r.appearance,
          portrayed: r.portrayed,
          category: r.category,
          better_call_saul_appearance: r.better_call_saul_appearance          
        };       
      })*/

      //mapear para que me traiga solo los campos que ocupo.
      /*this.personajes = data.map(({char_id, name, nickname, img, status, occupation})=>{
        return {
          char_id: char_id,
          name: name,
          nickname: nickname,
          img: img,
          status: status,
          occupation: occupation
        };
      });*/


    });
  }

  filter(s: any){
    let search: string = s.target.value;
    //TODO: Hacer el filtro
    this.personajes = this.personajesOriginal.filter(p => p.name.toLowerCase().indexOf(search) != -1);

    //destruccturando...
    /*this.personajes = this.personajesOriginal.filter(({name}: Personaje) => {
      return name.toLowerCase().includes(s);
    })*/
    //console.table(this.personajes);

  }

}
