import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  rest: any;
  review: any;
  array = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    
    this.review = {
      name: '',
      review: '',
      stars: Number
    }
   }
   id: any;

   ngOnInit() {
     this.getRest(this.id);
   }
  
  check(){
    console.log("in check() write.component:", this.review);
    let observable = this._httpService.addReview(this.review, this.rest._id);
    observable.subscribe(data =>{
      if( data['errors']){
        console.log(data['errors']);
        this.array = [];
        this.array.push(data['errors']['errors']['name']['message']);
        this.array.push(data['errors']['errors']['review']['message']);
        this.array.push(data['errors']['errors']['stars']['message']);
        console.log(data['errors']['errors']['name'])
        //console.log(data)
        // for (let name in data['errors']){
        //   this.array.push(data['errors'].name.message)
        //   console.log("PARSING data[errors] : val : " + name);
        //   console.log(this.array);
        // }
        // console.log(data['errors']['name']);
      }else{
        console.log("save response from server: ", data['status']);
      this._router.navigate(['reviews/'+ this.rest._id]);
      }
    })
  
  }
  getRest(id){
    let observable = this._httpService.getRest(this._route.params['value'].id);
    observable.subscribe(data => { 
    console.log("Got our rest", data)
    this.rest = data;
  });
}



}
