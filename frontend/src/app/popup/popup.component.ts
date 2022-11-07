import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.apiService.getProductById(this.data.id).subscribe(response => {
        this.editData = response;
        this.productForm.setValue({
          id: this.editData.id, name: this.editData.name, brand: this.editData.brand, category: this.editData.category,
          price: this.editData.price
        });
      });
    }
  }

  productForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
    brand: this.builder.control('', Validators.required),
    category: this.builder.control('', Validators.required),
    price: this.builder.control('', Validators.required)
  });

  saveProduct() {
    if (this.productForm.valid) {
      const Editid = this.productForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.apiService.updateProduct(Editid, this.productForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.apiService.createProduct(this.productForm.value).subscribe(response => {
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
