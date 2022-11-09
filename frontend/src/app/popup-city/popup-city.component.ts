import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CityService } from '../services/city.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup-city',
  templateUrl: './popup-city.component.html',
  styleUrls: ['./popup-city.component.css']
})
export class PopupCityComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private cityService: CityService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.cityService.getCityById(this.data.id).subscribe(response => {
        this.editData = response;
        this.cityForm.setValue({
          id: this.editData.id, name: this.editData.name
        });
      });
    }
  }

  cityForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
  });

  saveCity() {
    if (this.cityForm.valid) {
      const Editid = this.cityForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.cityService.updateCity(Editid, this.cityForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.cityService.createCity(this.cityForm.value).subscribe(response => {
          this.closePopup();
          alertify.success("Saved successfully.")
        });
      }
    }
  }

  closePopup() {
    this.dialog.closeAll();
  }

}
