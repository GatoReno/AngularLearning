import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase: any = {
    msn : 'kill me if start liking rbd',
    autor: 'etho onii'
  }

  characters: string[] = ["Jv","Clairo","Soni","Heux","Eritorcito"];
  constructor() { }

  ngOnInit(): void {
  }

}
