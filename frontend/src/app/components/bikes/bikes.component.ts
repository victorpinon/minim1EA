import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';
import { ServiceService } from 'src/app/Services/Service.Service';

declare var M: any;

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [ServiceService]
})
export class BikesComponent implements OnInit {

  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getStation();
  }

  getStation() {
    console.log(this.serviceService.getStation("5cab15330cbbd628b8d600d2"));
    this.serviceService.getStation(localStorage.getItem('stationId'))
    .subscribe(res =>{
      this.serviceService.bike = res as Bike[];
    })
  }

}
