import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from '../models/client';
import { PopupClientComponent } from '../popup-client/popup-client.component';
import { ClientService } from '../services/client.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientData!: Client[];

  displayedColumns: string[] = ['name', 'email', 'password', 'address', 'action'];

  constructor(
    private clientService: ClientService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(response => {
      this.clientData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupClientComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadClients();
    });
  }

  editClient(id: any) {
    this.openPopup(id);
  }

  removeClient(id: any) {
    alertify.confirm("Remove Client", "Do you want remove this client?", () => {
      this.clientService.removeClientById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadClients();
      });
    }, function () {

    })

  }

}
