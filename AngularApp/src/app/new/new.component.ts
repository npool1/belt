import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  rest: any;
  array = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.rest = {
      name: '',
      cuisine: ''
    }
   }

  ngOnInit() {
  }
  check(){
    console.log("in check() new.component:", this.rest);
    let observable = this._httpService.addRest(this.rest);
    observable.subscribe(data =>{
      if( data['errors']){
        // console.log(data['errors']);
        this.array = [];
        // this.array.push(data['errors']['name']['message']);
        // this.array.push(data['errors']['cuisine']['message']);
        // console.log(data['errors']['errors']['name'])
        console.log(data)
        for (let error in data['errors']){
          this.array.push(data['errors'][error].message)
          console.log("PARSING data[errors] : val : " + error);
          console.log(this.array);
        }
        }else{
        console.log("save response from server: ", data['status']);
      this._router.navigate(['']);
      }
    })
    this.rest = {name: '', cuisine: ''}
  }

}

