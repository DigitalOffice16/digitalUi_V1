
import { Component, OnInit } from '@angular/core';
import { User } from '../auth/core/user';
import { HomeService } from './home.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private userService: HomeService) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
          console.log('user',this.users)
      });
  }
}
