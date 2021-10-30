import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BerryService } from 'src/app/services/berry/berry.service';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent implements OnInit {

  data: any = '';

  constructor(private berryservice:BerryService, private router:Router) { }

  ngOnInit(): void {
    this.getBerries()
  }

  getBerries(){
    this.berryservice.getBerries().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      err =>{
        console.log(err);
      }
    );
    }
}
