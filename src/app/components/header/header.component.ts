import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../service/header.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tokens = {
    token:JSON.parse( localStorage.getItem('token')).token,
  }
  headtoken;

  constructor(private token1:HeaderService,private router:Router) { }

  ngOnInit(): void {

     this.token1.Header(this.tokens).subscribe(data=>{
      this.headtoken=data
      console.log(this.headtoken)
      if(this.headtoken === undefined){
        this.router.navigate(['/login'])
      }
   
    });
  }
  onLogout = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
