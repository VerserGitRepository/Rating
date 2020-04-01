mport { Component, OnInit } from '@angular/core';
import { UserRequest } from '../../TrainingApp/Training/TrainingApp.model';

@Component({
  selector: 'User_Cal',
  
})
export class UserCalComponent implements OnInit {
  
  //model class
  model = new UserRequest(null, null, null, null, null);

  //Error Display
  error:any={isError:false,errorMessage:''};
  isValidDate:any;

  ngOnInit() { }

  

  validateDates(sDate: string, eDate: string){
    this.isValidDate = true;
    if((sDate == null || eDate ==null)){
      this.error={isError:true,errorMessage:'Start date and end date are required.'};
      this.isValidDate = false;
    }

    if((sDate != null && eDate !=null) && (eDate) < (sDate)){
      this.error={isError:true,errorMessage:'End date should be grater then start date.'};
      this.isValidDate = false;
    }
    return this.isValidDate;
  }
 }

