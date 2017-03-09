import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component.app';
import { PrettyPrintPipe } from './prettyprint.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PrettyPrintPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
