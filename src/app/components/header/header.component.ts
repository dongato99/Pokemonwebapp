import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router      :Router,
              private authService :AuthService) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigateByUrl('/home');
  }

  logout(){
    return this.authService.logout()
      .subscribe(
        resp =>{

        },
        err => {
          if(err.status == 401)
            console.log('La sesión ya había caducado de todas formas, payaso');
        },
        ()=>{
          
        }
      );
  }

}
