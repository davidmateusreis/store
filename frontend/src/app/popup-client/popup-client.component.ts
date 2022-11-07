import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from '../services/client.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup-client',
  templateUrl: './popup-client.component.html',
  styleUrls: ['./popup-client.component.css']
})
export class PopupClientComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.clientService.getClientById(this.data.id).subscribe(response => {
        this.editData = response;
        this.clientForm.setValue({
          id: this.editData.id, name: this.editData.name, email: this.editData.email, password: this.editData.password,
          address: this.editData.address
        });
      });
    }
  }

  clientForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required)
  });

  saveClient() {
    if (this.clientForm.valid) {
      const Editid = this.clientForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.clientService.updateClient(Editid, this.clientForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.clientService.createClient(this.clientForm.value).subscribe(response => {
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
