import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Mikebook';
  users: any;

  constructor(private accountService: AccountService, private titleService: Title) {}

  ngOnInit() {
    this.setCurrentUser();
    this.titleService.setTitle('Dating App');
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
