import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  user?:User;
  constructor( private userService: UserService,
               private alertify: AlertifyService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
  this.userService.getUser(+this.route.snapshot.params['id']).subscribe(user=>{
    this.user=user;
    console.log(user)
  },error=>{
    this.alertify.error(error);
  })
  }
}
