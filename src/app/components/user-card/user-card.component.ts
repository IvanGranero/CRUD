import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../data/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: any;
  @Output() clickEdit = new EventEmitter<User>();

  constructor( ) {}

  ngOnInit(): void {
  }

  onClickEdit(user: User) {
    this.clickEdit.emit(user);
  }

}
