import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherComponent} from './weather/weather.component'

const routes: Routes = [{ path: '', pathMatch:'full',redirectTo:'city/seattle' },
                        {path: 'city/:city', component:WeatherComponent} ];
//then in weather component do the logic to get the param from the url and then use it to make the api
//request as a callback function!
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
