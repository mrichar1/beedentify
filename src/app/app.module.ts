import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageSelectComponent } from './image-select/image-select.component';
import { ImageDataService }  from './image-data.service';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { ResultsComponent } from './results/results.component';
import { OrderByObjectPropertyPipe } from './orderbyobjectproperty.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    ImageSelectComponent,
    ResultsComponent,
    OrderByObjectPropertyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BootstrapSwitchModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ImageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
