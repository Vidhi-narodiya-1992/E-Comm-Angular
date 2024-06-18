import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent {
  regForm:boolean = false;
  signUpForm!:FormGroup;
  signInForm!:FormGroup;
  signUpsubmitted = false;
  href:string = '';
  user_data:any;
  user_dto!:User;
  user_reg_data:any;
  signInFormValue:any = {};

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginSignupService){

  }
  ngOnInit():void{
    this.href = this.router.url;
    if(this.href == '/sign-in'){
      this.regForm = true
    }else if(this.href) == 'sign-in'{
      this.regForm = false
    }
  }
}
