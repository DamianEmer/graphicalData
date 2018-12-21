import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/core/testing.service';

import * as HighCharts from 'highcharts';
import { Sicks } from 'src/app/models/sicks.interface';

import { finalize } from 'rxjs/operators';
import { DataSharedService } from 'src/app/core/dataShared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Sicks[];

  loading: boolean;

  dataSearch: any[];

  dataSource: any[];

  displayedColumns: string[] = ['region', 'progreso', 'recibidos', 'probados'];

  constructor(private testingService: TestingService,
    private dataSharedService: DataSharedService) { }

  ngOnInit() {
    this.loading = true;

    this.dataSharedService.currentNumber$.subscribe(value => {
      this.dataSearch = value
      this.dataSource = value;
    });

    this.testingService.getSick().pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        this.chartsOptions = {
          title: {
            text: "Prueba de enfermos en latinoamerica"
          },
          xAxis: {
            categories: data.map( value => value.region)
          },
          yAxis: {
            title: {
              text: "Numero de revisiones"
            }
          },
          series: [
            {
              name: "En progeso",
              data: data.map(value => value.samples_in_progress)
            },
            {
              name: "Recibidos",
              data: data.map(value => value.samples_received)
            },
            {
              name: "Probados",
              data: data.map(value => value.samples_tested)
            }
          ],

        }
      });
  }

  charts = HighCharts;
  chartsOptions = {
    title: {
      text: ""
    },
    xAxis: {

    },
    yAxis: {

    },
    series: [{
      name: "",
      data: []
    }]
  }
}
