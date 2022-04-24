import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { DatabindComponent } from './databind/databind.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

import {HttpClientModule} from "@angular/common/http";

import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormmoduleComponent } from './formmodule/formmodule.component';
import { PipechapterComponent } from './pipechapter/pipechapter.component';
import { LengthPipe } from './length.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { DbsService } from './dbs.service';
import { MongoWithNodeComponent } from './mongo-with-node/mongo-with-node.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    DatabindComponent,  
    EventbindingComponent, TwowaybindingComponent, CalculatorComponent, FormmoduleComponent, PipechapterComponent, LengthPipe, DirectivesComponent, CrudoperationsComponent, MongoWithNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
