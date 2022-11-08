import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../services/category.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup-category',
  templateUrl: './popup-category.component.html',
  styleUrls: ['./popup-category.component.css']
})
export class PopupCategoryComponent implements OnInit {

  editData: any;

  constructor(private builder: FormBuilder,
    private dialog: MatDialog,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.categoryService.getCategoryById(this.data.id).subscribe(response => {
        this.editData = response;
        this.categoryForm.setValue({
          id: this.editData.id, name: this.editData.name
        });
      });
    }
  }

  categoryForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
  });

  saveClient() {
    if (this.categoryForm.valid) {
      const Editid = this.categoryForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.categoryService.updateCategory(Editid, this.categoryForm.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.categoryService.createCategory(this.categoryForm.value).subscribe(response => {
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
