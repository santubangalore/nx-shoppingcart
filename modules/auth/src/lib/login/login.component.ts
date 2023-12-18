import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'netquest-login',
  standalone: true,
  imports: [CommonModule,FormsModule, MatButtonModule, MatIconModule,MatCardModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  show:boolean=false;
  loginValid:boolean=false;
  public isLoggedIn$ :boolean=false;
  // this.userService.isUserLoggedIn$;

  constructor() {}
  ngOnInit(): void {
    console.log('In init of Login component.');
  }

  login() {
 //   this.userService.checkCredentials(this.username, this.password);
  }
}
