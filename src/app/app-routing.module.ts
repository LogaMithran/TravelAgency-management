import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { DatabindComponent } from './databind/databind.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { MongoWithNodeComponent } from './mongo-with-node/mongo-with-node.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [{
  path:"sample-component",component:SampleComponentComponent},
  {path:"databind",component:DatabindComponent},
  {path:"eventbind",component:EventbindingComponent},
  {path:"twoway",component:TwowaybindingComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"crud",component:CrudoperationsComponent},
  {path:"mongo",component:MongoWithNodeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
