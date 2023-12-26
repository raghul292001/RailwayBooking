import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';
import { IStation, ResponseModel } from 'src/app/models/station';
import { StationsService } from 'src/app/services/stations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stationList:IStation[] = []
  userData: any;
  constructor(private stationSrv:StationsService){

  }
  ngOnInit(): void {
    this.loadStation();
    this.loggedUser();
  }
  loggedUser(){
    const localData=localStorage.getItem('trainUser');
    if(localData!=null){
      this.userData=JSON.parse(localData);
    }
  }
  loadStation(){
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList=res.data
    },error=>{
      alert("Error Occured"+JSON.stringify(error));
    })
  }

}
