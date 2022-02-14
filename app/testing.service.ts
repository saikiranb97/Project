import { Injectable } from '@angular/core';
import { Parse } from 'parse';
@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }


  find(callback) {
    debugger
    let Comment = Parse.Object.extend("Comments");
    var comment = new Parse.Query(Comment);
    comment.find().then((response) => {
      console.log("response", response);
      var commentArray = new Array();
      for (var i = 0; i < response.length; i++) {
        commentArray[i] = {
          userName: response[i].get('userName'),
          uCmt: response[i].get('uCmt'),
        };
      }
      console.log("StatusArray", commentArray);
      callback(commentArray);
    }).catch((error) => {
      console.log('Error getting for', error.message);
    });

  }
  // post or save
  save(obj, callback) {
    let Comment = Parse.Object.extend("Comments");
    var comment = new Comment();
    var SignupObj = {
      "userName": obj.userName,
      "pwd": obj.pwd,
      "sKey": obj.sKey,
      "uCmt":obj.uCmt
    }
    comment.save(SignupObj).then(function (response) {
      var responseObj = {
        "id": response.id,
        "status": "Created Successfully"
      }
      callback(responseObj);
    }, function (error) {
      console.log(error);
    });
  }


  //update 
  update(Obj, id, callback) {
    let Comment = Parse.Object.extend("Comments");
    var comment = new Comment();
    comment.set('objectId', id);
    comment.set("uCmt", Obj.uCmt);
    comment.save({ useMasterKey: true }).then(function (response) {
      var obj = {
        "id": response.id,
        "status": "Updated Successfully"
      }
      callback(obj);
    }, function (error) {
      console.log(error);
    });
  }

}
