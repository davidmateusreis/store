import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { State } from '../models/state';
import { PopupStateComponent } from '../popup-state/popup-state.component';
import { StateService } from '../services/state.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  stateData!: State[];

  displayedColumns: string[] = ['name', 'abbreviation', 'action'];

  constructor(
    private stateService: StateService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates() {
    this.stateService.getStates().subscribe(response => {
      this.stateData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupStateComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadStates();
    });
  }

  editState(id: any) {
    this.openPopup(id);
  }

  removeState(id: any) {
    alertify.confirm("Remove State", "Do you want remove this state?", () => {
      this.stateService.removeStateById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadStates();
      });
    }, function () {

    })

  }
}
