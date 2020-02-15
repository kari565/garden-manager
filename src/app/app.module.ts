import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SvgCircleModule, SvgPolygonModule, SvgTextModule } from 'angular-svg'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FloorPipe } from './floor.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, FloorPipe 
  ],
  imports: [
    BrowserModule, 
    SvgCircleModule, 
    SvgPolygonModule,  
    SvgTextModule, 
    BrowserAnimationsModule, 
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
