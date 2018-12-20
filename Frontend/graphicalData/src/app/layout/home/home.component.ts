import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/core/testing.service';

import * as HighCharts from 'highcharts';
import { Sicks } from 'src/app/models/sicks.interface';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Sicks[];

  loading: boolean;

  constructor(private testingService: TestingService) { }

  ngOnInit() {
    this.loading = true;
    this.testingService.getSick().pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        this.chartsOptions = {
          title: {
            text: "Prueba de enfermos en latinoamerica"
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
              name: "Recividos",
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
    yAxis: {

    },
    series: [{
      name: "",
      data: []
    }]
  }
}
