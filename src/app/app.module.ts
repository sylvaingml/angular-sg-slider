import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RangeSliderDirective } from './range-slider.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RangeSliderDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
