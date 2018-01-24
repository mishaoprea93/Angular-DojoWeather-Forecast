import { Injectable } from '@angular/core';
import {WeatherComponent} from'./weather/weather.component'
import {Http} from '@angular/http'

@Injectable()
export class WeatherService {
  forecast:object;
  constructor(private _http:Http) {
   }


getForecast(param,cb){
  console.log(param);
  this._http.get('https://api.openweathermap.org/data/2.5/weather?q='+param+'&units=imperial&APPID=66b55ced85c3eb3b61974a34a820d1be').subscribe((res)=>{
    this.forecast=res.json();
    cb(this.forecast);
  })
}
}
