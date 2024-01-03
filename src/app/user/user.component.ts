import { Component } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  user : any

  constructor(private apiservice : ApiService){
    this.apiservice.getAllUsers().subscribe(res=>{
      console.log(res)
      this.user = res
    }
    )
  }
  
}
