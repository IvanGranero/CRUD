import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.scss']
})
export class PopupCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() submitTitle: string = "";
  @Input() user: any;
  @Output() onCloseCard = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.onCloseCard.emit();
  }

  onClickSubmit() {
    this.onSubmit.emit(this.user);
  }
}
