import { JsonPipe } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {

  userData:any;

  ngOnInit(): void {
    this.loggedUser(); 
  }
  ngDoCheck(): void {
    this.loggedUser();
  }
  loggedUser(){
    const localData=localStorage.getItem('trainUser');
    if(localData!=null){
      this.userData=JSON.parse(localData);
    }
  }
  logOut(){
    localStorage.removeItem('trainUser');
    this.userData= undefined;
  }
}
