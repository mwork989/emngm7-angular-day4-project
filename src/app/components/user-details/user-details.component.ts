import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
   public userRecords :IUserInfo[];
   constructor(){
    this.userRecords = [];
   }

   public ngOnInit(): void {
    this.userRecords =[
      
      {
        name:"max",
        age:42,
        address:{
          city:"blr",
          code:10,
        }
      
      },
      {
        name:"david",
        age:35,
        address:{
          city:"chn",
          code:11
        }
      
      },{
        name:"maria",
        age:23,
        address:{
          city:"hyd",
          code:5
        }
      
      }]

      
   }
}
