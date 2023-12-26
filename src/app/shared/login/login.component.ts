import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ILogin } from 'src/app/models/station';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isUserLoggedin:any=''
  loginObj:ILogin =new ILogin();
  constructor(private userSrv:UsersService,private messageService: MessageService,private router:Router){

  }

  isUserLoggedIn(){
    this.userSrv.isUserLoggedin(this.loginObj).subscribe((res)=>{
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
        localStorage.setItem('trainUser',JSON.stringify(res.data));
        this.isUserLoggedin = res.data;
        this.router.navigateByUrl('home');
      }else{
        this.messageService.add({severity:'error',summary:'Error',detail:`${res.message}`});
      }
    })

  }

}
