import { Component } from '@angular/core';
import {Training} from "./TrainingApp.model"
@Component({
  templateUrl: './TrainingApp.TrainingView.html'
})
export  class TrainingComponent {
  title = 'TrainingApplication';
  TrainingModel : Training = new Training();
  TrainingModels :Array<Training> = new Array<Training>();
  Add(){
    this.TrainingModels.push(this.TrainingModel);
    this.TrainingModel = new Training();// clear UI
  }
}

