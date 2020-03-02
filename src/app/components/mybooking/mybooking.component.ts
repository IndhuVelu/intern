import { Component, OnInit } from '@angular/core';
import { MybookingService } from '../../service/mybooking.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  headtoken;
  completed;
  upcoming;
  count;
  complete;
  upcome;
  tokens = {
    token:JSON.parse( localStorage.getItem('token')).token,
  }
 user


  constructor(private MyBook: MybookingService,) { }

  ngOnInit(): void {
    this.MyBook.trainuser(this.tokens).subscribe(data=>{
      this.headtoken=data
      console.log(this.headtoken.user.name)
    });
    this.user={
      signup_id: this.headtoken.user.name,
    }

    

  }
  onCompleted(){
    console.log("com")
    this.count=0;
    this.complete=1
    this.upcome=0
    this.MyBook.completedbooking(this.headtoken.user.name).subscribe(data=>{
      this.completed=data
      console.log("22222222222222",this.completed)
    });
  }
  onUpcoming(){
    this.count=1;
    this.complete=0
    this.upcome=1
    this.MyBook.upcomingbooking(this.headtoken.user.name).subscribe(data=>{
      this.upcoming=data
      console.log("333333333",this.upcoming)
    });
  }

}
