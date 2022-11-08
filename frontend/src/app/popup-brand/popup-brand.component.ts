import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrandService } from '../services/brand.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup-brand',
  templateUrl: './popup-brand.component.html',
  styleUrls: ['./popup-brand.component.css']
})
export class PopupBrandComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private brandService: BrandService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.brandService.getBrandById(this.data.id).subscribe(response => {
        this.editData = response;
        this.brandForm.setValue({
          id: this.editData.id, name: this.editData.name
        });
      });
    }
  }

  brandForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required)
  });

  saveClient() {
    if (this.brandForm.valid) {
      const Editid = this.brandForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.brandService.updateBrand(Editid, this.brandForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.brandService.createBrand(this.brandForm.value).subscribe(response => {
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
