import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { City } from '../models/city';
import { PopupCityComponent } from '../popup-city/popup-city.component';
import { CityService } from '../services/city.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cityData!: City[];

  displayedColumns: string[] = ['name', 'action'];

  constructor(
    private cityService: CityService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    this.cityService.getCities().subscribe(response => {
      this.cityData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupCityComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadCities();
    });
  }

  editCity(id: any) {
    this.openPopup(id);
  }

  removeCity(id: any) {
    alertify.confirm("Remove City", "Do you want remove this city?", () => {
      this.cityService.removeCityById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadCities();
      });
    }, function () {

    })

  }
}
