import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/data/User';

@Component({
  selector: 'app-cmsboard',
  templateUrl: './cmsboard.component.html',
  styleUrls: ['./cmsboard.component.scss']
})
export class CMSBoardComponent implements OnInit {

  tabSelected: string = "";
  userInCard: any;
  users: User[] = [];
  allusers: User[] = [];
  searchTerm: string = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.allusers = users;
      this.assignCopy();
    });
  }

  onClickAdd() {
    this.userInCard = {
        firstName: "",
        lastName: "",
        location: "",
        phone: "",
        gender: ""
    };
    this.tabSelected = "add";
  }

  closeCard() {
    this.tabSelected = "none";
  }

  editCard(user: User) {
    this.userInCard = JSON.parse(JSON.stringify(user));
    this.tabSelected = "edit";
  }
  
  submitCard(user: User) {
    if (!user.id) {
      this.allusers.push(user);
      this.assignCopy();
      Object.assign(user, {
        createdAt: new Date()
      }); 
      this.userService.addUser(user).subscribe((newUser) => {
        
      });
    } else {
      Object.assign(user, {
        updatedAt: new Date()
      }); 
      this.userService.updateUser(user).subscribe((newUser) => { 
        let objIndex = this.users.findIndex((obj => obj.id == user.id));
        this.allusers[objIndex] = JSON.parse(JSON.stringify(user));
        this.assignCopy();
      });
    }
    this.tabSelected = "none";
  }

  assignCopy() {
    this.users = Object.assign([], this.allusers);
  }

  search(): void {
    this.users = this.allusers.filter(
      (el) => 
      el.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      el.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      el.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      el.phone.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
