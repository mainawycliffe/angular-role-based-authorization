import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-role-based-authorization';

  public newToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsInJvbGUiOiJ3cml0ZXIiLCJqdGkiOiIzMGM5YTA4ZC1mYzg2LTQ0NDQtYjE0OC04NmNmMjA3ODhmNmIiLCJpYXQiOjE1MzgxMzgzMzUsImV4cCI6MTUzODE0Mzc0NH0.Twq_iUdZiGWp4ZK3o1J5UAQMgsBRzprGVuEJogYEDcA';

  ngOnInit() {
    localStorage.setItem('token', this.newToken);
  }

  userNewToken() {
    localStorage.setItem('token', this.newToken);
  }
}
