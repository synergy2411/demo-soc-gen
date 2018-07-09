import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-user',
   // template : `<h1>User Component Loaded!!!</h1>`,
   templateUrl : './user.component.html',
    // styles : [`
    //     h1{
    //         color : lightblue;
    //     }
    // `]
    styleUrls : [`./user.component.css`]
})
export class UserComponent {
    @Input('title') title : string;
    @Input('user') user : any;
    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }
    ngOnInit(){
        console.log("ngOnInit");
    }
    ngOnChanges(){
        console.log("ngOnChanges");
    }
}