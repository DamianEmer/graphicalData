import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule ({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    exports:[
        HeaderComponent
    ]
})

export class HeaderModule{

}