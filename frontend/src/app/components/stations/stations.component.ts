import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';
import { ServiceService } from 'src/app/Services/Service.Service';

declare var M: any;

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'],
  providers: [ServiceService]
})
export class StationsComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this.serviceService.getStations()
    .subscribe(res =>{
      this.serviceService.station = res as Station[];
    })
  }

}
