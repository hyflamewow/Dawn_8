import { Component, OnInit } from '@angular/core';
import { ValuesService } from './values.service';
import { WeatherForecastElf } from './weather-forecast-elf';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  list: WeatherForecastElf[];
  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.valuesService.getList()
      .subscribe(list => {
        this.list = list;
      })
  }

}
