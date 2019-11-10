import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecastElf } from './weather-forecast-elf';
@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private http: HttpClient) { }
  getList(): Observable<WeatherForecastElf[]> {
    return this.http.get<WeatherForecastElf[]>('http://localhost:5000/api/WeatherForecast');
  }
}
