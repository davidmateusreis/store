import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../models/category';
import { PopupCategoryComponent } from '../popup-category/popup-category.component';
import { CategoryService } from '../services/category.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryData!: Category[];

  displayedColumns: string[] = ['name', 'action'];

  constructor(
    private categoryService: CategoryService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categoryData = response;
    });
  }

  openPopup(id: any) {
    const _popup = this.matDialog.open(PopupCategoryComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(response => {
      this.loadCategories();
    });
  }

  editCategory(id: any) {
    this.openPopup(id);
  }

  removeCategory(id: any) {
    alertify.confirm("Remove Category", "Do you want remove this category?", () => {
      this.categoryService.removeCategoryById(id).subscribe(response => {
        alertify.success("Removed successfully.");
        this.loadCategories();
      });
    }, function () {

    })

  }
}
