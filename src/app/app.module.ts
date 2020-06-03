import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { BeedentifyComponent } from './beedentify/beedentify.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageSelectComponent } from './image-select/image-select.component';
import { ImageDataService }  from './image-data.service';
import { BootstrapToggle } from 'angular-bootstrap-toggle';
import { ResultsComponent } from './results/results.component';
import { OrderByObjectPropertyPipe } from './orderbyobjectproperty.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { InsectsComponent } from './insects/insects.component';

@NgModule({
  declarations: [
    AppComponent,
    BeedentifyComponent,
    ImageGridComponent,
    ImageSelectComponent,
    ResultsComponent,
    OrderByObjectPropertyPipe,
    WelcomeComponent,
    InsectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    BrowserAnimationsModule,
    LazyLoadImageModule
  ],
  providers: [ImageDataService],
  entryComponents: [WelcomeComponent, InsectsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
