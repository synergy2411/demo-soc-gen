import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1963"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    votes : 120,
    image : "assets/images/bill.jpg"
}
}
