import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/models/location';
import { LocationsService } from 'src/app/services/locations/locations.service'

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  locationId: number;
  location: Location;

  constructor(  private activatedRoute: ActivatedRoute,
    private locationsService: LocationsService
  ) { }

  ngOnInit() { 

    this.locationId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));

    this.locationsService.getLocation( this.locationId )

      .subscribe( (res: Location) => {

        this.location = res;

      })

   }

}
