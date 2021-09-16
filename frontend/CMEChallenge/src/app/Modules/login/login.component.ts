import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/auth.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    debugger
    if((this.username == null || this.username == '') && (this.password == null || this.password == '')){
      this.toastr.showError("Fill your Username and password!")
    }
    this.auth.Authenticate(this.username, this.password).subscribe(d => {
      if (d != null) {
        if (d.isAdmin == true) {
          this.router.navigateByUrl('/menu').then()
          this.toastr.showSuccess("Welcome " + d.username)
        } 
        else if(d.isAdmin == false){
          this.router.navigateByUrl('/Main/home').then()
          this.toastr.showSuccess("Welcome " + d.username)
          localStorage.setItem('User', JSON.stringify(d));
        }
        else{
          this.toastr.showError("Invalid Username or Password!")
        }
      }else{
        this.toastr.showError("Invalid Username or Password!")
      }
    })
  }


}
