import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
   public user:IUserInfo;
   public isUserTableVisible:boolean;
   public isUserTableRowVisible:boolean;

   constructor(){
      this.user = {} as IUserInfo;
      this.isUserTableVisible = false;
      this.isUserTableRowVisible = true;
   }

   public ngOnInit(): void {
    this.user = {
      name: 'david',
      age: 42,
      address: {
        city: 'blr',
        code: 10,
      },
    };
   }

   public toggleTable():void{
    this.isUserTableVisible =  !this.isUserTableVisible ;
   }

   public editUser(){
      this.isUserTableRowVisible = false;
   }

   public updateUser(){
      this.isUserTableRowVisible = true;
   }
}
