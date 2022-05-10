import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  cars: Car[] = [];
  car: Car;
  constructor(private carService: CarService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    })
  }

  deleteCar(car: Car) {
    this.carService.delete(car).subscribe((response) => {
      this.car = response.data;
      this.toastrService.success(response.message);
      this.getCars();
    });
  }

  updateCar(car: Car) {
    this.carService.update(car).subscribe();
    this.toastrService.success("Araç güncellendi");
  }
}
