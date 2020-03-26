import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { TrainingComponent } from './Training/TrainingApp.TrainingComponent'
import {MainRoutes} from "./Routing/TrainingApp.MainRouting"
@NgModule({
  declarations: [
      TrainingComponent
      
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [TrainingComponent]
})
export class TrainingModule { }
