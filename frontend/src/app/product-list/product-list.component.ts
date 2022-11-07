import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productData!: Product[];

  displayedColumns: string[] = ['name', 'brand', 'category', 'price', 'action'];

  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe(response => {
      this.productData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadProducts();
    });
  }

  editProduct(id: any) {
    this.openPopup(id);
  }

  removeProduct(id: any) {
    alertify.confirm("Remove Product", "Do you want remove this product?", () => {
      this.apiService.removeProductById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadProducts();
      });
    }, function () {

    })

  }

}
