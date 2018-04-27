import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  rest: any;
  id: any;
  review: any;
  ngOnInit() {
    this.getRest(this.id);
  }
  getRest(id){
    let observable = this._httpService.getRest(this._route.params['value'].id);
    observable.subscribe(data => { 
    console.log("Got our rest", data)
    this.rest = data;
    console.log("!!!!!!!!!!!"+ this.rest.name);
    console.log("$$$$$$$$$$$$" + this.rest.reviews[0]['name']);
    console.log("$$$$$$$$$$$$" + this.rest.reviews[0]['stars']);
    console.log("$$$$$$$$$$$$" + this.rest.reviews[0]['review']);
  });
}
}
