import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "https://api.apixu.com/v1/forecast.json?key=41ab95b9a6184337aaa225531192004&days=5&q=" +
        location
    );
  }
}
