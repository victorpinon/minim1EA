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
    this.getUnassignedBikes();
  }

  getStation() {
    this.serviceService.getStation(localStorage.getItem("stationId"))
      .subscribe(res =>{
        this.serviceService.stationBike = res["bikes"] as Bike[];
    });
  }

  addBike(bike) {
    this.serviceService.selectedBike = bike;
    this.serviceService.addBike(localStorage.getItem("stationId"), bike)
      .subscribe(res =>{
        this.getStation();
        this.getUnassignedBikes();
        M.toast({html: 'Added Successfully'});
      });
  }

  deleteBike(bike) {
    this.serviceService.selectedBike = bike;
    console.log(bike)
    this.serviceService.deleteBike(localStorage.getItem("stationId"), bike)
      .subscribe(res =>{
        this.getStation();
        this.getUnassignedBikes();
        M.toast({html: 'Deleted Successfully'});
      });
  }

  getUnassignedBikes() {
    this.serviceService.getUnassignedBikes()
      .subscribe(res =>{
        this.serviceService.unassignedBike = res as Bike[];
    })
  }

}
