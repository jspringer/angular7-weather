import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public sevenDaysForm: FormGroup;
  public weatherData: any;
  public geoLocString: String;
  public dayArray: Array<String>;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
    /* disabling since getCurrentPosition will not work from insecure origins (host without SSL)
    
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              console.log(position);
              this.geoLocString = `${position.coords.latitude}` + ',' + `${position.coords.longitude}`;
              this.apixuService.getWeather(this.geoLocString).subscribe(data => {
              this.weatherData = data;
              console.log("onInit weatherData: ", this.weatherData);
              });
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
    } else { */
      this.apixuService.getWeather("New York City").subscribe(data => {
        this.weatherData = data;
        console.log(data);
      });
    }
  }

  sendToAPIXU(formValues) {
    console.log("sendToAPIXU start...");
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log("Today: ", this.weatherData);
    });
  }
}
