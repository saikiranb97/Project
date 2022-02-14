import { Component, OnInit } from '@angular/core';
import { TestingService } from '.././testing.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.page.html',
  styleUrls: ['./textarea.page.scss'],
})
export class TextareaPage implements OnInit {
  cmtArray: any = [];  
  cmtObj: any = {}; 
  constructor(private cmtService: TestingService) {
    this.find();
   }

  ngOnInit() {
  }
  find() {
    debugger
    this.cmtService.find((cmtFindCallback) => {
      console.log("cmtFindCallback:", cmtFindCallback);
      this.cmtArray=this.cmtArray.concat(cmtFindCallback);
      console.log("concat res",this.cmtArray);
      
    });
  }

  create() {
    debugger
    var cmtObj = {
      "uCmt": this.cmtObj.uCmt,
    } 
    this.cmtService.save(cmtObj, (SaveCallback) => {
      console.log("SaveCallback:", SaveCallback);
      this.cmtObj = {};
    });
  }

}
