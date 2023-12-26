import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IPassenger } from 'src/app/models/station';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent {

  registerObj: IPassenger = new IPassenger();
  loggedUser:any;

  constructor(private userSrv:UsersService,private messageService: MessageService){

  }
onRegister(){
  this.userSrv.createPassenger(this.registerObj).subscribe((res:any)=>{
    if(res.result){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registeration Success' });
      this.loggedUser=res.data;
    }else{
      this.messageService.add({severity:'error',summary:'Error',detail:`${res.message}`});
    }
  })
}
}
