import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestingService } from '.././testing.service';

@Component({
  selector: 'app-fpwd',
  templateUrl: './fpwd.page.html',
  styleUrls: ['./fpwd.page.scss'],
})
export class FpwdPage implements OnInit {
  SigninObj: any = {};
  signInArray: any = [];
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    sKey: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
  });
  selectedIndex: any;
  updateBtn: boolean;
  constructor(private cmtService: TestingService) { }

  ngOnInit() {
  }
  update() {
    debugger
    var id = this.signInArray[this.selectedIndex].id;
    console.log("updateObj", this.SigninObj);
    this.signInArray=this.cmtService.update(this.SigninObj, id, (UpdateCallback) => {
      console.log("UpdateCallback:", UpdateCallback);
      if(this.signInArray.sKey==this.SigninObj.sKey){
        this.updateBtn=true;
      }
      this.SigninObj = {};
    });
  }
}
