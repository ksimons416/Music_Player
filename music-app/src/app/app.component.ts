import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-app';

  ngOnInit(): void {
  }

refresh(): void{
  window.location.href = 'http://localhost:8080/';
}
getUser(): void{
  console.log(JSON.parse(localStorage.getItem("authToken")).firstName),
  console.log(JSON.parse(localStorage.getItem("authToken")).lastName)
}
}
