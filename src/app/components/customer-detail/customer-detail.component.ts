import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerDetails: Customer[] = [];
  dataLoaded = false;

  constructor(private customerDetailService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerDetailService.getCustomerDetails().subscribe((response) => {
      this.customerDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
