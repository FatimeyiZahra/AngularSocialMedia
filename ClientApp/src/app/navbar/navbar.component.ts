import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(next=>{
      console.log("confirm");
      this.router.navigate(['/members'])
    },error=>{
    console.log("error");
    })
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  logout(){
    localStorage.removeItem("token");
    console.log("logout")
    this.router.navigate(['/home'])
  }

}
