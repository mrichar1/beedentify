import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageSelectComponent } from './image-select/image-select.component';
import { ImageDataService }  from './image-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    ImageSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
