import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {PostService} from '../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { tap, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  login = 'admin';
  data: any;
  private formSubmitAttempt: boolean;
  user: any = [];
  test: String;
  
  constructor(
     private fb: FormBuilder,
     private service:PostService,
     private http: HttpClient, 
     private router: Router
  ) {}

  ngOnInit() { //construct 
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    
  }

  isFieldInvalid(field: string) { //validation found online
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt) 
      
    );
    
  }
 
  onLogin(){
    if (this.form.valid) {
      this.router.navigate(['create']); //navigate to a different page
    } 
    
  }
}