import { Component, OnInit } from '@angular/core';
import {ClientService, client} from '../../services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:client[] = [];
  constructor( private _clientService:ClientService,
               private router:Router
              ) { }

  ngOnInit(): void {
    this.clients = this._clientService.getClients();

  }

  goToClient(idx:string){
    this.router.navigate(['/client',idx]);
  }


}
