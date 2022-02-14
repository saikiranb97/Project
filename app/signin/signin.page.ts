import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestingService } from '.././testing.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  SigninObj: any = {};
  cmtArray: any = [];
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
  });
  saveBtn: boolean;
  constructor(private cmtService: TestingService) { }

  ngOnInit() {
  }
  search() {
    debugger
    this.cmtService.find((cmtFindCallback) => {
      console.log("cmtFindCallback:", cmtFindCallback);
      this.cmtArray = this.cmtArray.concat(cmtFindCallback);
      if (this.cmtArray.userName == this.SigninObj.userName && this.cmtArray.pwd == this.SigninObj.pwd) {
        this.saveBtn = true;
      }
    });
  }

}
