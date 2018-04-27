import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  rests: any;
  id: any;

  ngOnInit() {
    this.getRests();
  }
  getRests(){
    let observable = this._httpService.getRests();
    observable.subscribe(data => { 
    console.log("Got our rests!", data)
    this.rests = data['data'];
    console.log(this.rests);
  });
  }
  deleteRest(id){
    let observable = this._httpService.deleteRest(id);
    observable.subscribe(data => {
      console.log("Deleting Rest", data)
      this.getRests();
    })
  }


}
