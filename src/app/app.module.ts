import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { RandomNumberComponent } from './random-number/random-number.component';
import { NumberDisplayComponent } from './number-display/number-display.component';

@NgModule({
  declarations: [AppComponent, RandomNumberComponent, NumberDisplayComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})

export class AppModule {}
