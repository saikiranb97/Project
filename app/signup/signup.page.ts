import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { TestingService } from '.././testing.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  SignupObj: any ={};
  profileForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    pwd: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    sKey: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
    });
  constructor(private cmtService: TestingService) { }

  ngOnInit() {
  }
  create() {
    debugger
    var SignupObj = {
      "userName": this.SignupObj.userName,
      "pwd": this.SignupObj.pwd,
      "sKey": this.SignupObj.sKey,
    } 
    this.cmtService.save(SignupObj, (SaveCallback) => {
      console.log("SaveCallback:", SaveCallback);
      this.SignupObj = {};
    });
  }

}
