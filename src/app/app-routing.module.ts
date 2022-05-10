import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandlistComponent } from './components/brandlist/brandlist.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/cardetail/:carId", component: CarDetailComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/filters/:brandId/:colorId", component: CarComponent },
  { path: "cars/add", component: CarAddComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent },

  { path: "carlist", component: CarlistComponent },
  { path: "carlist/car/:carId", component: CarUpdateComponent, canActivate: [LoginGuard] },

  { path: "brands", component: BrandlistComponent },
  { path: "brands/add", component: BrandAddComponent, canActivate: [LoginGuard] },
  { path: "brands/update/:brandId", component: BrandUpdateComponent, canActivate: [LoginGuard] },

  { path: "colors", component: ColorListComponent },
  { path: "colors/add", component: ColorAddComponent, canActivate: [LoginGuard] },
  { path: "colors/update/:colorId", component: ColorUpdateComponent, canActivate: [LoginGuard] },

  { path: "register", component: RegisterComponent },

  { path: "rentals", component: RentalComponent },
  { path: "rentals/car/:carId", component: RentalAddComponent },
  { path: "rentals/add", component: RentalAddComponent },

  { path: "payment", component: PaymentComponent },
  { path: "payment/car/:carId", component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
