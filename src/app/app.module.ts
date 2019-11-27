import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component/product/product.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { RegisterDialogComponent } from './component/dialog/register-dialog/register-dialog.component';
import { RegisterComponent } from './component/register/register.component';
import { UserinfoComponent } from './component/userinfo/userinfo.component';
import { CartComponent } from './component/cart/cart.component';


import { NgxWebstorageModule } from 'ngx-webstorage';
import { AddproductDialogComponent } from './component/dialog/addproduct-dialog/addproduct-dialog.component';
import { SalespersonProductComponent } from './component/salesperson-product/salesperson-product.component';
import { CustomerNavComponent } from './component/customer-nav/customer-nav.component';
import { SalespersonNavComponent } from './component/salesperson-nav/salesperson-nav.component';
import { StoreComponent } from './component/store/store.component';
import { RegionComponent } from './component/region/region.component';
import { HttpClientModule } from '@angular/common/http';
import { SalespersonUserinfoComponent } from './component/salesperson-userinfo/salesperson-userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    TransactionComponent,
    RegisterDialogComponent,
    RegisterComponent,
    UserinfoComponent,
    CartComponent,
    AddproductDialogComponent,
    SalespersonProductComponent,
    CustomerNavComponent,
    SalespersonNavComponent,
    StoreComponent,
    RegionComponent,
    SalespersonUserinfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //angular material
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  entryComponents: [RegisterDialogComponent,  AddproductDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
