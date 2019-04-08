import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../models/bike';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  bike: Bike[];
  selectedBike: Bike;

  station: Station[];
  selectedStation: Station;

  readonly URL_API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { 
    this.selectedStation = new Station();
    this.selectedBike = new Bike();
  }

  getStations() {
    return this.http.get(this.URL_API + '/stations');
  }

  getStation(_id: String) {
    return this.http.get(this.URL_API + `/station/get/${_id}`);
  }

  addBike(station: Station) {
    return this.http.put(this.URL_API + `/station/bike/add/${station._id}`, station);
  }

  deleteBike(station: Station) {
    return this.http.put(this.URL_API + `/station/bike/delete/${station._id}`, station);
  }

  getUnassignedBikes() {
    return this.http.get(this.URL_API + '/bikes/unassigned');
  }
}