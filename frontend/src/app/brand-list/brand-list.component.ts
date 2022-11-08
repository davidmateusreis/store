import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Brand } from '../models/brand';
import { PopupBrandComponent } from '../popup-brand/popup-brand.component';
import { BrandService } from '../services/brand.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brandData!: Brand[];

  displayedColumns: string[] = ['name', 'action'];

  constructor(
    private brandService: BrandService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brandData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupBrandComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadBrands();
    });
  }

  editBrand(id: any) {
    this.openPopup(id);
  }

  removeBrand(id: any) {
    alertify.confirm("Remove Brand", "Do you want remove this brand?", () => {
      this.brandService.removeBrandById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadBrands();
      });
    }, function () {

    })

  }

}
