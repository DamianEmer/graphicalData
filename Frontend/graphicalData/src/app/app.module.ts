import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './layout/home/home.module';
import { TestingService } from './core/testing.service';

import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    HomeModule,
    HighchartsChartModule
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
