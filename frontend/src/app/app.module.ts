import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/materialui/materialui.module';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { PopupClientComponent } from './popup-client/popup-client.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { PopupBrandComponent } from './popup-brand/popup-brand.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PopupCategoryComponent } from './popup-category/popup-category.component';
import { CityListComponent } from './city-list/city-list.component';
import { PopupCityComponent } from './popup-city/popup-city.component';
import { StateListComponent } from './state-list/state-list.component';
import { PopupStateComponent } from './popup-state/popup-state.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PopupComponent,
    MenuComponent,
    DashboardComponent,
    ClientListComponent,
    PopupClientComponent,
    BrandListComponent,
    PopupBrandComponent,
    CategoryListComponent,
    PopupCategoryComponent,
    CityListComponent,
    PopupCityComponent,
    StateListComponent,
    PopupStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
