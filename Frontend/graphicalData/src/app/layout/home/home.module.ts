import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

// Libreria para graficacion
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        HighchartsChartModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{

}