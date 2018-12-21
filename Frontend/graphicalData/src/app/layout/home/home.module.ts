import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

// Libreria para graficacion
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTableModule} from '@angular/material/table';

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        HighchartsChartModule,
        MatTableModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{

}