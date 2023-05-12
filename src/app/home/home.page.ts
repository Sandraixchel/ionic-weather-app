import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {
    //@ts-ignore
    if (router.getCurrentNavigation().extras.queryParams.userName) {
      //@ts-ignore
      alert(router.getCurrentNavigation().extras.queryParams.userName);
    }
  }
  //private res: any;
  // constructor(private weatherAPI: WeatherService) {}
  // ngOnInit() {
  //   this.getWeatherData();
  // }
  // getWeatherData() {
  //   this.weatherAPI.getWeatherData().subscribe((response) => {
  //     this.res = response;
  //     console.log(this.res);
  //   });
  // }
}
