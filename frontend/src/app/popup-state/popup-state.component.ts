import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '../services/state.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup-state',
  templateUrl: './popup-state.component.html',
  styleUrls: ['./popup-state.component.css']
})
export class PopupStateComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private stateService: StateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.stateService.getStateById(this.data.id).subscribe(response => {
        this.editData = response;
        this.stateForm.setValue({
          id: this.editData.id, name: this.editData.name, abbreviation: this.editData.abbreviation
        });
      });
    }
  }

  stateForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
    abbreviation: this.builder.control('', Validators.required)
  });

  saveState() {
    if (this.stateForm.valid) {
      const Editid = this.stateForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.stateService.updateState(Editid, this.stateForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.stateService.createState(this.stateForm.value).subscribe(response => {
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
