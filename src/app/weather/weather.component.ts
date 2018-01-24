import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WeatherService} from './../weather.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  parameter:string;
  result:object;
  average:any;

  constructor(private _route: ActivatedRoute,private _weatherService:WeatherService) {

    this._route.paramMap.subscribe( params => {
          let param=params.get('city');
          this.parameter=params.get('city');

          this.result=_weatherService.getForecast(param,(component_forecast) =>{
            this.result=component_forecast;
            console.log(this.result);
            this.average=(this.result.main.temp_max+this.result.main.temp_min)/2;
         })
    })
  }
  ngOnInit() {
  }

}
