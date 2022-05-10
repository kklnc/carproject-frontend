import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getDate=Date.now();
  loginForm:FormGroup;
  user:User;
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  getUser(email:string){
    this.userService.getByMail(email).subscribe(response=>{
      this.user = response.data;
      this.localStorageService.addCurrentCustomer(this.user);
      this.localStorageService.addCurrentUserId(this.user);
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel=Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.success(response.message)
        this.router.navigate(["cars"])
        this.getUser(loginModel.email);
        this.localStorageService.addToken(response.data);
        localStorage.setItem("token",response.data.token);
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    }
  }


}
