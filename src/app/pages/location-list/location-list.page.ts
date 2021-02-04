import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationResults } from 'src/app/models/location-results';
import { LocationsService } from 'src/app/services/locations/locations.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.page.html',
  styleUrls: ['./location-list.page.scss'],
})
export class LocationListPage implements OnInit {

  locations: Location[] = [];

  constructor( private locationsService: LocationsService ) { }

  ngOnInit() {

    this.locationsService.getLocations()
      .subscribe( (res: LocationResults) => {

        this.locations = res['results'];

      },
      
      err => {
        console.log(err);
      }

      )

  }

}
