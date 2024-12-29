import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
let randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
selectedUser= DUMMY_USERS[randomIndex]
}
