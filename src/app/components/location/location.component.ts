import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/services/locations/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: any = '';

  constructor(private locations:LocationsService, private activatedRouter: ActivatedRoute) { this.activatedRouter.params.subscribe(
      
    params => {
      this.getLocations(params['index']);
    
  }
)}

  ngOnInit(): void {
  }

  getLocations(id){
    this.locations.getLocations(id).subscribe(
      res => {
        this.location = res;
        console.log(this.location)
      },

      err => {

      }
    );
  }

}
