import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup = this.formB.group({
    username: ['kirbey.garcia', [Validators.required]],
    password: ['Pa$$w0rd', [Validators.required, Validators.minLength(8)]]
  })
  constructor(private formB       : FormBuilder,
              private authService : AuthService,
              private router      : Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated())
      this.router.navigateByUrl('/home')
  }

  login() {
    const { username, password } = this.logInForm.value;
    this.authService.login(username, password)
      .subscribe(resp => { this.router.navigateByUrl('/home') },
        err => {
          switch (err.status) {
            case 304:
              console.log('Ya existe una sesión activa');
              this.router.navigateByUrl('/home');
              break;
            case 404:
              console.log('El usuario no existe en la base de datos');
              break;
            case 401:
              console.log('La contraseña no coincide con nuestros registros');
              break;
            default:
              console.log('Ocurrió un error inesperado');
          }
        })
  }
}
